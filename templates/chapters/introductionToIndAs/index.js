const botMethods = require("../../../plugins/botMethods");
const paperWorks = require("./paperWorks");
const lodash = require("lodash");
const callbacks = require("./utils/callbacks");

exports.introductionToIndAs = (msg) => {
  return {
    message: `***Introduction to IND AS***\n\n\n*Ind AS* Refers to IFRS Converged Standards Issued by Central Government of India under the Supervision and Control of ASB of ICAI and in Consultation with NFRA.\n\n\n*Abbreviations:*\n1. *ASB* - Accounting Standards Board\n2. *ICAI* - Institue of Chartered Accountants of India.\n3. *IFRS* - International Financial Reporting Standards.\n4. *NFRA* - National Financial Reporting Authority. \n\n\n For More Information, Click the Below Buttons`,
    markup: function(){
      const paperWorkButtons = lodash.chunk(paperWorks.map((item, i) => {
        return botMethods.inlineButtonCallback(item.callbackDisplay,`${item.callbackid}`);
      }), 1)
      return botMethods.inlineKey(paperWorkButtons);
    },
    callbackids: function(){
      return callbacks.map(topic => {
        return topic.callbackid
      });
    },
    sendMessage: function() {
      return botMethods.sendMessage(msg, this.message, {parseMode: "Markdown", replyMarkup: this.markup()});
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
    },
  }
}
