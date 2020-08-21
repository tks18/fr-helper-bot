const {
  startMessage,
  topics
} = require("../../templates");
const backHandlers = require("./backButtonHandlers");

function handler(msg){
  return [
    {
      handler: function() {
        return startMessage(msg).callbackids().includes(msg.data) && startMessage(msg).callback();
      }
    },
    {
      handler: function() {
        return topics(msg).callbackids().includes(msg.data) && topics(msg).callback(msg.data);
      }
    },
    ...backHandlers(msg)
  ]
}

module.exports = handler;
