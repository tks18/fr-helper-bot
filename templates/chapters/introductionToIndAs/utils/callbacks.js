const papers = require("../paperWorks");
const botMethods = require("../../../../plugins/botMethods");
const lodash = require("lodash");
const { backButton, nextButton, homeButton } = require("../../../../common/commonMarkup");

module.exports = [
  {
    callbackid: "intro-0",
    markup: function(msg){
      return botMethods.inlineKey([nextButton("intro-1"),backButton(this.callbackid+"-back"),homeButton(this.callbackid+"-back")])
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*What is IFRS ?*\n\n*International Financial Reporting Standards*, commonly called *IFRS*, are accounting standards issued by the IFRS Foundation and the International Accounting Standards Board (IASB). They constitute a standardised way of describing the company’s financial performance and position so that company financial statements are understandable and comparable across international boundaries.";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
  {
    callbackid: "intro-1",
    markup: function(msg){
      return botMethods.inlineKey([nextButton("intro-2"),backButton("intro-0"),homeButton(this.callbackid+"-back")])
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*IND AS Implementation Roadmap*\n\nThe Following explains provisions of Indian Accounting Standards (Ind AS) i.e.  Companies (Indian Accounting Standards) Rules, 2015 as notified vide Notification dated February 16, 2015 and the applicability of Ind AS for certain class of companies.\n\nWith the beginning of financial year 2016-17, the era of implementation of Ind AS in India has also begun for the companies falling under Phase I of the MCA roadmap for implementation of Ind AS. The MCA has also laid down roadmap for implementation of Ind AS for banks, NBFCs and insurance companies from the financial year 2018-19 onwards.\n\n Implementation of IND AS in India is Brought through Different Phases. For More Information, Follow up Through the Buttons Below";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
  {
    callbackid: "intro-2",
    markup: function(msg){
      var allButtons = [];
      const subtopicButtons = papers.forEach((topic, i) => {
        if(topic.callbackid == this.callbackid && topic.hasSubCallBacks){
           topic.subCallBacks.forEach((subTopic) => {
            allButtons.push(botMethods.inlineButtonCallback(subTopic.callbackDisplay,`${subTopic.callbackid}`));
          })
        }
      });
      allButtons = lodash.chunk(allButtons, 2);
      allButtons.push(nextButton("intro-3"),backButton("intro-1"),homeButton(this.callbackid+"-back"));
      return botMethods.inlineKey(allButtons)
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*Phases in Implementation*\n\nIND AS Implementation in India has been Brought up in Different Phases. Following are the Phases in Which it is Implemented.\n\n\n*Voluntary adoption:*\nVoluntary Phase Starts from April 01, 2015 onwards.\n\n*Mandatory Phase I:*\nMandatory applicability of IND AS to all companies from 1st April 2016 onwards\n\n*Mandatory Phase II:*\nMandatory applicability of IND AS to all companies from 1st April 2017 Onwards.\n\n*Mandatory Phase III:*\nMandatory applicability of IND AS to all Banks, NBFCs, and Insurance companies from 1st April 2018 onwards.\n\n*Mandatory Phase IV:*\nMandatory applicability of IND AS to all NBFC's from 1st April 2019 onwards\n\n\nFor More In-Depth and Applicabilities use the Below Buttons.";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
  {
    callbackid: "intro-2-subcall-0",
    markup: function(msg){
      var allButtons = [];
      allButtons.push(nextButton("intro-2-subcall-1", "Next Phase"),homeButton("intro-2", "Back to Main Topic"));
      return botMethods.inlineKey(allButtons)
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*Voluntary Implementation Phase of IND AS*\n\nCompanies can voluntarily choose to incorporate IND AS in their reports for accounting periods beginning on or after April 01, 2015. While reporting, such companies must include a comparative report for the periods ending 31 March 2015 or thereafter, where IND AS have been incorporated to present a comparative view. However, once a company has started reporting as per the IND AS, it cannot change to reporting as per previous laws.";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
  {
    callbackid: "intro-2-subcall-1",
    markup: function(msg){
      var allButtons = [];
      allButtons.push(nextButton("intro-2-subcall-2", "Next Phase"),backButton("intro-2-subcall-0", "Previous Phase"),homeButton("intro-2", "Back to Main Topic"));
      return botMethods.inlineKey(allButtons)
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*Mandatory Implementation Phase of IND AS*\n\nMandatory applicability of IND AS to all companies from 1st April 2016, provided:\n\n>  It is a listed or unlisted company\n>  Its Net worth is greater than or equal to Rs. 500 crore\n\n\nNet worth shall be checked for the previous three Financial Years (2013-14, 2014-15, and 2015-16).\n\nNetworth Calculation and Date of Computation can be Found in Miscellaneous Topics in IND AS 1. Be Sure to Check That";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
]