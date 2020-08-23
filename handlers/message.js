const {
  startMessage,
  topics,
  intro,
  indAs1
} = require("../templates");
const bot = require("../plugins/bot");

bot.on("/start", (msg) => startMessage(msg).sendMessage());
bot.on("/topics", (msg) => topics(msg).sendMessage());
bot.on("/intro", (msg) => intro(msg).sendMessage());
bot.on("/indas1", (msg) => indAs1(msg).sendMessage());

module.exports = bot;
