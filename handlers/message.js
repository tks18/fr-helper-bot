const {
  startMessage,
  topics
} = require("../templates");
const bot = require("../plugins/bot");

bot.on(/\/start/, (msg) => startMessage(msg).sendMessage());
bot.on(/\/topics/, (msg) => topics(msg).sendMessage() )

module.exports = bot;
