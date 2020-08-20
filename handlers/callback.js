const { startMessage } = require("../templates/start");

function handler(msg){
  msg.data == "start_topics" && startMessage(msg).callback();
  msg.data == "start_super" && startMessage(msg).callback();
}

module.exports = handler;
