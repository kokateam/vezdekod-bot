const Markup = require("node-vk-bot-api/lib/markup");

const makeButton = (label = "Кнопка", command = "button", color = "default") =>
  Markup.button({
    action: {
      type: "text",
      label,
      payload: JSON.stringify({
        command,
      }),
    },
    color,
  });

const urlButton = (label = "Ссылка", link = "https://vk.com/") =>
  Markup.button({
    action: {
      type: "open_link",
      label,
      link,
    },
  });

const openApp = (label = "Сервис!", app_id = 1) =>
  Markup.button({
    action: {
      type: "open_app",
      app_id,
      label,
    },
  });

const vkPay = (hash = "action=transfer-to-group&group_id=212547188&aid=10") =>
  Markup.button({
    action: {
      type: "vkpay",
      hash,
    },
  });

const location = (payload = { button: "1" }) =>
  Markup.button({
    action: {
      type: "location",
      payload: JSON.stringify(payload),
    },
  });

const callback = (label, payload = {}) =>
  Markup.button({
    action: {
      type: "callback",
      label,
      payload: JSON.stringify(payload),
    },
  });

module.exports = {
  makeButton,
  urlButton,
  callback,
  openApp,
  vkPay,
  location,
};
