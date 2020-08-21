const {
  startMessage,
  topics,
  intro
} = require("../../templates");

function handler(msg){
  return [
    {
      handler: function() {
        return topics(msg).backCallbackIds().includes(msg.data) && topics(msg).backCallback()
      }
    },
    {
      handler: function() {
        return intro(msg).backCallbackIds().includes(msg.data) && intro(msg).backCallback()
      }
    },
  ]
}

module.exports = handler;
