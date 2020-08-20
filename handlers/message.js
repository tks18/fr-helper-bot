const { startMessage } = require("../templates/start");
const bot = require("../plugins/bot");

bot.on(/\/start/, (msg) => startMessage(msg).sendMessage());

module.exports = bot;
