const bot = require("./bot");

module.exports = {
  inlineKey: function(array){
    return bot.inlineKeyboard(array)
  },
  inlineButtonUrl: function(display, url){
    return bot.inlineButton(display, { url: url });
  },
  inlineButtonCallback: function(display, data){
    return bot.inlineButton(display, { callback: data })
  },
  sendMessage: function(msg, data, markup){
    return bot.sendMessage(msg.from.id, data, markup && markup);
  },
  editMessage: function(msg, data){
    return bot.editMessageText({chatId: msg.message.chat.id, messageId: msg.message.message_id}, data);
  },
  deleteMessage: function(msg){
    return bot.deleteMessage(msg.from.id, msg.message.message_id)
  }
}
