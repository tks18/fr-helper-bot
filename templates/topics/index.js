const botMethods = require("../../plugins/botMethods");
const topics = require("./topics");
const lodash = require("lodash");

exports.topics = (msg) => {
  return {
    message: "Following are the Topics that this Bot Covers.\n\nContinue with the Ongoing Buttons to Get a Brief of Each Topics.",
    markup: function() {
      const topicsButtons = lodash.chunk(topics.map((item, i) => {
        return botMethods.inlineButtonCallback(item.callbackDisplay,`${item.callbackid}`);
      }), 2);
      console.log(topicsButtons);
      return botMethods.inlineKey(topicsButtons);
    },
    sendMessage: function() {
      return botMethods.sendMessage(msg, this.message, {parseMode: "Markdown", replyMarkup: this.markup()});
    },
  }
}
