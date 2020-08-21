const handleCallback = require("./callbackHandlers");

function handler(msg){
  handleCallback(msg).forEach((callback) => {
    return callback.handler();
  });

}

module.exports = handler;
