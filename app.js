require('dotenv').config();
const TeleBot = require('telebot');
const axios = require('axios');
const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on(/\/start/, (msg) => {
  const message = `
    **Financial Repoting Helper Bot 📚**\n========================\n\nThis is Helper bot for CA Final Students in Preparing Financial Reporting Subject.\n\nAuthor of the Bot - [Sudharshan TK](https://github.com/tks18).\n\nThis Bot is Developed under Open Source License. Suggestions are Welcomed Heartfully for Both Technical Side and Subject Side.\nIf You have Any Queries/Suggestions, You can Contact throught [DM](https://t.me/shan_tk) or Can open a Issue under My Github Repo [Here](https://github.com/tks18/fr-helper-bot/issues)\n\nOk, Now Let\'s Get Started !\n\nYou can Check the Topics Available by Typing __*\\topics*__ in this Chat.\n\nThank You, Hope You Find This Useful :-)))
  `;
  const markup = bot.inlineKeyboard([
      [
          bot.inlineButton('Issues/Suggestions', { url: `https://github.com/tks18/fr-helper-bot/issues` }),
          bot.inlineButton('Author', { url: 'https://t.me/shan_tk' })
      ]
  ]);
  bot.sendMessage(msg.from.id, message, {parseMode: "Markdown", replyMarkup: markup});
});

bot.start();
