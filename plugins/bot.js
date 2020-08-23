const TeleBot = require('telebot');
const bot = new TeleBot({
  token: process.env.TELEGRAM_BOT_TOKEN,
  usePlugins:[],
  pluginFolder: "https://raw.githubusercontent.com/mullwar/telebot/master/plugins/",
});

bot.start();

module.exports = bot
