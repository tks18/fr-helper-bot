const {
  startMessage,
  topics
} = require("../../templates");

function handler(msg){
  return [
    {
      handler: function() {
        return topics(msg).backCallbackIds().includes(msg.data) && topics(msg).backCallback()
      }
    }
  ]
}

module.exports = handler;
