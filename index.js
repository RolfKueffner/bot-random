var package = require('./package.json');
var _ = require('lodash');


var Module = function (bot) {
  this.bot = bot;
  this.name = package.name;
  this.version = package.version;
  // add channel names as trings to only allow certain channels
  this.allowedChannels = [];
  this.help = function () {
    return {
      "coinflip": "Flip a coin and get Head or Tails",
      "dice": "Roll a dice",
      "randomnumber": "Get a random number. Usage: !randomnumber highestNumber lowestNumber"
    };
  };
  this.commands = {};


  this.commands.coinflip = function(channel, args, user) {
    var a = Math.floor(Math.random() * 2);
    var response;
    if(a = 0){
      response = "Head";
    }
    else{
      response = "Tail";
    }
    bot.postMessage(channel, response);
  };

  this.commands.dice = function(channel, args, user) {
    var dice = Math.floor(Math.random() * 6) + 1;
    bot.postMessage(channel, dice);
  };

  this.commands.randomnumber = function(channel, args, user) {
    splittedText = args.split(" ");
    var lowNo = 0;
    var highNo = 100;

    if(splittedText[0] && splittedText[0].length != 0){
      highNo = splittedText[0];
    }
    if(splittedText[1] && splittedText[1].length != 0){
      lowNo = splittedText[1];
    }
    response = Math.floor(Math.random() * (highNo + 1 - lowNo)) + lowNo;
    bot.postMessage(channel, response);

  };

};

Module.prototype.toString = function() {
  return this.name;
};


var exports = module.exports = Module;