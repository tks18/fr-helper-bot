const botMethods = require("../plugins/botMethods");

const store = [];

exports.backButton = function(msg, name) {
  return [
    botMethods.inlineButtonCallback(name ? name : 'Go Back', msg)
  ]
}

exports.homeButton = function(msg, name) {
  return [
    botMethods.inlineButtonCallback(name ? name :'home', msg)
  ]
}

exports.nextButton = function(msg, name) {
  return [
    botMethods.inlineButtonCallback(name ? name : 'Next', msg)
  ]
}
