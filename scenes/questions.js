const Scene = require("node-vk-bot-api/lib/scene");
const Markup = require("node-vk-bot-api/lib/markup");
const messages = require("../messages.json");

const {
  makeButton,
  urlButton,
  openApp,
  vkPay,
  callback,
  location,
} = require("../modules/makeButton");

module.exports = new Scene(
  "questions",
  (ctx) => {
    ctx.scene.next();
    ctx.reply(
      "1. Какого Вы пола?",
      null,
      Markup.keyboard([
        [makeButton("Мужского"), makeButton("Женского", "answer", "primary")],
      ]).oneTime()
    );
  },
  (ctx) => {
    ctx.scene.next();
    ctx.reply(
      `2. Сколько Вам лет?`,
      null,
      Markup.keyboard([
        [
          makeButton("15", "answer", "negative"),
          makeButton("16", "answer", "primary"),
          makeButton("17", "answer", "positive"),
        ],
        [
          makeButton("18", "answer"),
          makeButton("19", "answer", "positive"),
          makeButton("20", "answer", "negative"),
        ],
        [
          makeButton("21", "answer", "primary"),
          makeButton("22", "answer", "positive"),
          makeButton("23+", "answer"),
        ],
      ]).inline()
    );
  },
  (ctx) => {
    ctx.scene.next();
    ctx.reply(
      `3. На каком языке обычно разрабатывают frontend часть VK Mini Apps?`,
      null,
      Markup.keyboard([
        [
          makeButton("JS", "answer", "primary"),
          makeButton("Java", "answer", "negative"),
          makeButton("Python", "answer", "positive"),
          makeButton("Pascal", "answer", "positive"),
        ],
        [urlButton("А это ссылка :)")],
        [openApp("Лучший сервис", 7915893)],
      ]).oneTime()
    );
  },
  (ctx) => {
    ctx.scene.next();
    ctx.reply(
      `4. Как называется марафон?`,
      null,
      Markup.keyboard([
        [makeButton("Вездеход", "answer")],
        [makeButton("Вездекод", "answer", "negative")],
        [makeButton("VKUI Best Bugs", "answer", "positive")],
        [urlButton("Группа KOKATEAM", "https://vk.com/kokateam")],
        [location()],
      ]).oneTime()
    );
  },
  (ctx) => {
    ctx.scene.next();
    ctx.reply(
      `5. На каком языке написан этот чат-бот, как Вы думаете?`,
      null,
      Markup.keyboard([
        [makeButton("JS", "answer", "positive")],
        [makeButton("Python", "answer", "primary")],
        [makeButton("PHP", "answer")],
        [vkPay()],
      ]).inline()
    );
  },
  (ctx) => {
    ctx.scene.next();
    ctx.reply(
      `6. В честь кого названа команда (КОКАTEAM)? Имя артиста.`,
      null,
      Markup.keyboard([
        [
          makeButton("INSTASAMKA", "answer", "primary"),
          makeButton("Mary Gu", "answer"),
        ],
        [makeButton("Мари Краймбрери", "answer", "negative")],
        [makeButton("Клава Кока", "answer", "positive")],
      ]).oneTime()
    );
  },
  (ctx) => {
    ctx.scene.next();
    ctx.reply(
      `7. В каком городе нет офиса ВКонтакте?`,
      null,
      Markup.keyboard([
        [
          callback("Москва (CallBack)"),
          makeButton("Санкт-Петербург", "answer", "primary"),
        ],
        [
          makeButton("Сочи", "answer", "negative"),
          makeButton("Нижний Новгород", "answer", "positive"),
        ],
      ]).inline()
    );
  },
  (ctx) => {
    ctx.scene.next();
    ctx.reply(
      `8. Вы сотрудник ВКонтакте 🤨?`,
      null,
      Markup.keyboard([
        [
          makeButton("Да", "answer", "positive"),
          makeButton("Нет (солгать)", "answer", "negative"),
        ],
        [makeButton("Нет", "answer")],
        [makeButton("Нет!", "answer")],
        [makeButton("Нет!!!", "answer")],
        [makeButton("НЕТ!!!!", "answer")],
      ]).oneTime()
    );
  },
  (ctx) => {
    ctx.scene.leave();
    ctx.reply(`Допрос окончен!\n\n${messages.default}`);
  }
);
