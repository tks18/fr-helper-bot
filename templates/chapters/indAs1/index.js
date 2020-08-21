const botMethods = require("../../../plugins/botMethods");
const paperWorks = require("./paperWorks");
const lodash = require("lodash");
const { backButton } = require("../../../common/commonMarkup");

exports.indAs1 = (msg) => {
  return {
    message: `***IND AS 1: Presentation of Financial Statements***\n\n\nThis standard prescribes the basis of Presentation of General Purpose Financial statements.\n\n>  This will ensure comparability both with-Entity’s Financial statements of previous periods\n>  Financial statements of other entities\n\nIt sets out-Overall requirement of presentation of financial statementsGuidelines for their structure and Minimum requirement for their content`,
    markup: function(){
      const paperWorkButtons = lodash.chunk(paperWorks.map((item, i) => {
        return botMethods.inlineButtonCallback(item.callbackDisplay,`${item.callbackid}`);
      }), 2)
      paperWorkButtons.push(backButton("topics-2-back", "Go Back to All Topics"));
      return botMethods.inlineKey(paperWorkButtons);
    },
    // callbackids: function(){
    //   return callbacks.map(topic => {
    //     return topic.callbackid
    //   });
    // },
    sendMessage: function() {
      return botMethods.sendMessage(msg, this.message, {parseMode: "Markdown", replyMarkup: this.markup()});
    },
    // callback: function(callbackId) {
    //   return callbacks.filter((topic) => {
    //     return topic.callbackid == callbackId
    //   })[0].callback(msg);
    // },
    // backCallbackIds: function() {
    //   return callbacks.map(topic => {
    //     return topic.callbackid+"-back"
    //   });
    // },
    // backCallback: function() {
    //   botMethods.deleteMessage(msg);
    //   return botMethods.sendMessage(msg, this.message, {parseMode: "Markdown", replyMarkup: this.markup()});
    // },
  }
}
