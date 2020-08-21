const handleCallback = require("./callBackHandlers");

function handler(msg){
  handleCallback(msg).forEach((callback) => {
    return callback.handler();
  });

}

module.exports = handler;
