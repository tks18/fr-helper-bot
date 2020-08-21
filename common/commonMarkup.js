const botMethods = require("../plugins/botMethods");

const store = [];

exports.backButton = function(msg) {
  return [
    botMethods.inlineButtonCallback('Go Back', msg)
  ]
}
