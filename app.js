
require('dotenv').config();
const axios = require('axios');
const express = require("express");
const bodyParser = require("body-parser");
const bot = require("./plugins/bot");
const callBackHandler = require("./handlers/callback");
const messageHandler = require("./handlers/message");
const keepAlive = require("./plugins/keepAlive");
const app = express();
const { topics } = require("./templates/topics");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get(/(.+)/, function(req, res){
  res.send("This is a Telegram Bot. Communicate through Telegram");
});

keepAlive();
bot.on('callbackQuery', (msg) => callBackHandler(msg));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('Server Started on ' + PORT ));
