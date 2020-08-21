const {
  startMessage,
  topics,
  intro
} = require("../templates");
const bot = require("../plugins/bot");

bot.on(/\/start/, (msg) => startMessage(msg).sendMessage());
bot.on(/\/topics/, (msg) => topics(msg).sendMessage());
bot.on(/\/intro/, (msg) => intro(msg).sendMessage());

module.exports = bot;
