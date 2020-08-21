const botMethods = require("../../plugins/botMethods");
const { topics } = require("../topics");

exports.startMessage = (msg) => {
  return {
    message: `**Financial Repoting Helper Bot 📚**\n========================\n\nThis is Helper bot for CA Final Students in Preparing Financial Reporting Subject.\n\nAuthor of the Bot - [Sudharshan TK](https://github.com/tks18).\n\nThis Bot is Developed under Open Source License. Suggestions are Welcomed Heartfully for Both Technical Side and Subject Side.\nIf You have Any Queries/Suggestions, You can Contact throught [DM](https://t.me/shan_tk) or Can open a Issue under My Github Repo [Here](https://github.com/tks18/fr-helper-bot/issues)\n\nOk, Now Let\'s Get Started !\n\nYou can Check the Topics Available by Typing _*\\topics*_ in this Chat.\n\nThank You, Hope You Find This Useful :-)))`,
    markup: function(){
      return botMethods.inlineKey([
          [
            botMethods.inlineButtonUrl('Issues/Suggestions',`https://github.com/tks18/fr-helper-bot/issues`),
            botMethods.inlineButtonUrl('Author', 'https://t.me/shan_tk')
          ],
          [
            botMethods.inlineButtonCallback('Topics Available','start_topics'),
          ],
      ])
    },
    sendMessage: function() {
      return botMethods.sendMessage(msg, this.message, {parseMode: "Markdown", replyMarkup: this.markup()});
    },
    callbackids: function(){
      return [
        'start_topics'
      ]
    },
    callback: function() {
      botMethods.deleteMessage(msg);
      return topics(msg).sendMessage();
    }
  }
}
