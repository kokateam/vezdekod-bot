require("dotenv").config();

const VkBot = require("node-vk-bot-api");
const Session = require("node-vk-bot-api/lib/session");
const Stage = require("node-vk-bot-api/lib/stage");
const Markup = require("node-vk-bot-api/lib/markup");
const api = require("node-vk-bot-api/lib/api");
const mysql = require("mysql");
const Database = require("./modules/database");

const messages = require("./messages.json");
const questions = require("./scenes/questions");

const { makeButton } = require("./modules/makeButton");
const getMeme = require("./modules/getMeme");

// Init bot instance
global.bot = new VkBot(process.env.TOKEN);

const session = new Session();
const stage = new Stage(questions);

bot.use(session.middleware());
bot.use(stage.middleware());

bot.event("message_event", (ctx) => {
  api("messages.sendMessageEventAnswer", {
    event_id: ctx.message.event_id,
    user_id: ctx.message.user_id,
    peer_id: ctx.message.peer_id,
    event_data: JSON.stringify({
      type: "show_snackbar",
      text: "???",
    }),
    access_token: process.env.TOKEN,
  });
});

const gotoCommands = async (ctx) => {
  let command = JSON.parse(ctx.message.payload).command.split("_");

  switch (command[0]) {
    case "action":
      const find = await db.request(
        `SELECT COUNT(*) as count FROM rating WHERE meme_id = ? AND user_id = ?`,
        [command[2], ctx.message.from_id]
      );

      if (find[0].count !== 0) return;

      await db.request(
        `INSERT INTO rating(user_id, meme_id, liked) VALUES(?,?,?)`,
        [ctx.message.from_id, command[2], command[1] === "like"]
      );

      const meme = await getMeme(ctx.message.from_id);

      if (meme.length !== 0) {
        ctx.reply(
          messages.meme,
          `photo${meme[0].photo_id}`,
          Markup.keyboard([
            [
              makeButton("Нравится!", `action_like_${meme[0].id}`, "positive"),
              makeButton(
                "Не нравится :(",
                `action_dislike_${meme[0].id}`,
                "negative"
              ),
            ],
          ]).oneTime()
        );
      } else ctx.reply(messages.notFoundMeme);

      break;
  }
};

bot.on(async (ctx) => {
  const message = ctx.message;

  if (message.payload) return gotoCommands(ctx);

  if (message.attachments.length !== 0 && message.attachments[0].photo) {
    let photo = message.attachments[0].photo;

    photo = photo.owner_id + "_" + photo.id + "_" + photo.access_key;

    const findDublicate = await db.request(
      `SELECT COUNT(*) as count FROM memes WHERE photo_id = ?`,
      [photo]
    );

    if (findDublicate[0].count === 0) {
      await db.request(`INSERT INTO memes(photo_id) VALUES(?)`, [photo]);
      return ctx.reply(messages.memeAdded);
    } else {
      return ctx.reply(messages.memeAlreadyAdded);
    }
  }

  switch (message.text.toLowerCase()) {
    case "привет":
      ctx.scene.enter("questions");
      break;
    case "статистика":
      const likesInfo = await db.request(
        `SELECT COUNT(*) as count FROM rating WHERE user_id = ? AND liked = 1`,
        [ctx.message.from_id]
      );

      const dislikesInfo = await db.request(
        `SELECT COUNT(*) as count FROM rating WHERE user_id = ? AND liked = 0`,
        [ctx.message.from_id]
      );

      const topMemes = await db.request(
        `SELECT memes.photo_id, COUNT(meme_id) as likes FROM rating INNER JOIN memes ON memes.id = rating.meme_id WHERE rating.liked = 1 GROUP BY rating.meme_id ORDER BY likes DESC LIMIT 9`
      );

      let attachments = [];

      topMemes.map((el) => attachments.push(`photo${el.photo_id}`));

      ctx.reply(
        messages.statistics
          .replace("$liked", likesInfo[0].count)
          .replace("$disliked", dislikesInfo[0].count),
        attachments
      );
      break;
    case "мем":
      const meme = await getMeme(ctx.message.from_id);

      if (meme.length !== 0) {
        ctx.reply(
          messages.meme,
          `photo${meme[0].photo_id}`,
          Markup.keyboard([
            [
              makeButton("Нравится!", `action_like_${meme[0].id}`, "positive"),
              makeButton(
                "Не нравится :(",
                `action_dislike_${meme[0].id}`,
                "negative"
              ),
            ],
          ]).oneTime()
        );
      } else ctx.reply(messages.notFoundMeme);
      break;
    default:
      ctx.reply(messages.default);
      break;
  }
});

const app = async () => {
  const connection = await mysql.createPool({
    host: process.env.DB_IP,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    queueLimit: 0,
  });

  global.db = new Database(connection);

  bot.startPolling();
};

app().then(() => console.log("Bot started!"));
