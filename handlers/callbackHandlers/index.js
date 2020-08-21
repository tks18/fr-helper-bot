const {
  startMessage,
  topics,
  intro
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
    {
      handler: function() {
        return intro(msg).callbackids().includes(msg.data) && intro(msg).callback(msg.data);
      }
    },
    ...backHandlers(msg)
  ]
}

module.exports = handler;
