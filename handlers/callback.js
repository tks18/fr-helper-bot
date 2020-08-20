const { startMessage } = require("../templates/start");

function handler(msg){
  console.log(msg.data.value);
  msg.data == "start_topics" && startMessage(msg).callback();
  msg.data == "start_super" && startMessage(msg).callback();
}

module.exports = handler;
