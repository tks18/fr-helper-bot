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
      let message = "*Mandatory Implementation Phase I of IND AS*\n\nMandatory applicability of IND AS to all companies from 1st April 2016, provided:\n\n>  It is a listed or unlisted company\n>  Its Net worth is greater than or equal to Rs. 500 crore\n\n\nNet worth shall be checked for the previous three Financial Years (2013-14, 2014-15, and 2015-16).\n\nNetworth Calculation and Date of Computation can be Found in Miscellaneous Topics in IND AS 1. Be Sure to Check That";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
  {
    callbackid: "intro-2-subcall-2",
    markup: function(msg){
      var allButtons = [];
      allButtons.push(nextButton("intro-2-subcall-3", "Next Phase"),backButton("intro-2-subcall-1", "Previous Phase"),homeButton("intro-2", "Back to Main Topic"));
      return botMethods.inlineKey(allButtons)
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*Mandatory Implementation Phase II of IND AS*\n\nMandatory applicability of IND AS to all companies from 1st April 2017, provided:\n\n>  It is a listed company or is in the process of being listed (as on 31.03.2016).\n>  Its Net worth is greater than or equal to Rs. 250 crore but less than Rs. 500 crore (for any of the below mentioned periods).\n\n\nNet worth shall be checked for the previous four Financial Years (2014-14, 2014-15, 2015-16, and 2016-17)";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
  {
    callbackid: "intro-2-subcall-3",
    markup: function(msg){
      var allButtons = [];
      allButtons.push(nextButton("intro-2-subcall-4", "Next Phase"),backButton("intro-2-subcall-2", "Previous Phase"),homeButton("intro-2", "Back to Main Topic"));
      return botMethods.inlineKey(allButtons)
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*Mandatory Implementation Phase III of IND AS*\n\nMandatory applicability of IND AS to all Banks, NBFCs, and Insurance companies from 1st April 2018, whose:\n\n>  Net worth is more than or equal to INR 500 crore with effect from 1st April 2018.\n\n\n*Note:* IRDA (Insurance Regulatory and Development Authority) of India shall notify the separate set of IND AS for Banks & Insurance Companies with effect from 1st April 2018. NBFCs include core investment companies, stock brokers, venture capitalists, etc. Net Worth shall be checked for the past 3 financial years  (2015-16, 2016-17, and 2017-18)";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
  {
    callbackid: "intro-2-subcall-4",
    markup: function(msg){
      var allButtons = [];
      allButtons.push(backButton("intro-2-subcall-3", "Previous Phase"),homeButton("intro-2", "Back to Main Topic"));
      return botMethods.inlineKey(allButtons)
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*Mandatory Implementation Phase IV of IND AS*\n\nAll NBFCs whose Net worth is more than or equal to INR 250 crore but less than INR 500 crore shall have IND AS mandatorily applicable to them  with effect from 1st April 2019.";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
  {
    callbackid: "intro-2-subcall-4",
    markup: function(msg){
      var allButtons = [];
      allButtons.push(backButton("intro-2-subcall-3", "Previous Phase"),homeButton("intro-2", "Back to Main Topic"));
      return botMethods.inlineKey(allButtons)
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*Mandatory Implementation Phase IV of IND AS*\n\nAll NBFCs whose Net worth is more than or equal to INR 250 crore but less than INR 500 crore shall have IND AS mandatorily applicable to them  with effect from 1st April 2019.";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  },
  {
    callbackid: "intro-3",
    markup: function(msg){
      var allButtons = [];
      allButtons.push(backButton("intro-2"),homeButton(this.callbackid+"-back"));
      return botMethods.inlineKey(allButtons)
    },
    callback: function(msg) {
      botMethods.deleteMessage(msg);
      let message = "*Some Miscellaneous Notes Regarding Implementation*\n\n>  If IND AS become applicable to any company, then IND AS shall  automatically be made applicable to all the subsidiaries, holding companies, associated companies, and joint ventures of that company, irrespective of individual qualification of such companies.\n\n>  In case of foreign operations of an Indian Company, the preparation of stand-alone financial statements may continue with its jurisdictional requirements and need not be prepared as per the IND AS.However, these entities will still have to report their IND AS adjusted numbers for their Indian parent company to prepare consolidated IND AS accounts.\n\n*Regarding Networth Calculation:*\n\nNet worth will be determined based on the stand-alone accounts of the company as on 31st March 2014, or the first audited period ending after that date. Net Worth is the total of Paid-up share Capital and all reserves out of profit & securities premium account, after deducting accumulated losses, deferred expenditure, and miscellaneous expenditure not written off. Only capital Reserve arising out of Promoters Contribution and Government Grants received can be included. Reserves created out of revaluation of assets and written back depreciation cannot be included.";
      return botMethods.sendMessage(msg, message, { parseMode: "Markdown", replyMarkup: this.markup(msg)});
    },
  }
]
