const botMethods = require("../../plugins/botMethods");
const topics = require("./paperWorks");
const callbacks = require("./utils/callbacks");
const lodash = require("lodash");
const { backButton } = require("../../common/commonMarkup");

exports.topics = (msg) => {
  return {
    message: "Following are the Topics that this Bot Covers.\n\nContinue with the Ongoing Buttons to Get a Brief of Each Topics.",
    markup: function() {
      const topicsButtons = lodash.chunk(topics.map((item, i) => {
        return botMethods.inlineButtonCallback(item.callbackDisplay,`${item.callbackid}`);
      }), 2);
      return botMethods.inlineKey(topicsButtons);
    },
    sendMessage: function() {
      return botMethods.sendMessage(msg, this.message, {parseMode: "Markdown", replyMarkup: this.markup()});
    },
    callbackids: function(){
      return callbacks.map(topic => {
        return topic.callbackid
      });
    },
    callback: function(callbackId) {
      return callbacks.filter((topic) => {
        return topic.callbackid == callbackId
      })[0].callback(msg);
    },
    backCallbackIds: function() {
      return callbacks.map(topic => {
        return topic.callbackid+"-back"
      });
    },
    backCallback: function() {
      botMethods.deleteMessage(msg);
      return botMethods.sendMessage(msg, this.message, {parseMode: "Markdown", replyMarkup: this.markup()});
    }
  }
}
