const topics = require("../paperWorks");
const botMethods = require("../../../plugins/botMethods");
const { backButton } = require("../../../common/commonMarkup");
const { introductionToIndAs } = require("../../../templates/chapters/introductionToIndAs");
const { indAs1 } = require("../../../templates/chapters/indAs1");

module.exports = [
  {
    callbackid: "topics-0",
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      return introductionToIndAs(msg).sendMessage();
    },
  },
  {
    callbackid: "topics-1",
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*List of All the Topics this Bot Covers*\n\n\n";
      topics.forEach((topic, i) => {
        message += `${i+1}. ${topic.title}\n\n`
      });
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: botMethods.inlineKey([backButton(this.callbackid+"-back")]) });
    },
  },
  {
    callbackid: "topics-2",
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      return indAs1(msg).sendMessage();
    },
  },
]
