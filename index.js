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
      "randomnumber": "Get a random number. Usage: !randomnumber number1-number2 "
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
    splittedText = args.split("-");
    var lowNo = 0;
    var highNo = 100;


    if(splittedText[0] && splittedText[0].length != 0){
      highNo = parseFloat(splittedText[0]);
    }
    if(splittedText[1] && splittedText[1].length != 0){
      lowNo = parseFloat(splittedText[1]);
    }
    var multi = (highNo + 1 - lowNo)
    var response = Math.floor(Math.random() * multi) + lowNo;
    bot.postMessage(channel, response);

  };

  this.commands.rps = function(channel, args, user) {

    choice = ["Rock", "Spock", "Paper", "Lizard", "Scissors"];

    art = [["", "My Spock vaporizes your Rock", "My Paper covers your Rock", "Your Rock crushes my Lizard", "Your rock crushes my Scissors"],
      ["Your Spock vaporizes my Rock", "", "My Paper disproves Spock", "My Lizard poisons your Spock", "Your Spock smashes my Scissors"],
      ["Your Paper covers my Rock", "Your Paper disproves my Spock", "", "My Lizard eats your Paper", "My Scissors cuts your Paper"],
      ["My Rock crushes your Lizard", "Your Lizard poisons my Spock", "Your Lizard eats my Paper", "", "My Scissors decapitates your Lizard"],
      ["My Rock crushes your Scissors", "My Spock smashes your Scissors", "Your Scissors cuts my Paper", "Your Scissors decapitates my Lizard", ""]];
    var choiceN;

    switch (args.toUpperCase()) {
      case "STEIN":
        choiceN = 0;
        break;
      case "SPOCK":
        choiceN = 1;
        break;
      case "PAPIER":
        choiceN = 2;
        break;
      case "ECHSE":
        choiceN = 3;
        break;
      case "SCHERE":
        choiceN = 4;
        break;
      case "ROCK":
        choiceN = 0;
        break;
      case "PAPER":
        choiceN = 2;
        break;
      case "LIZARD":
        choiceN = 3;
        break;
      case "SCISSORS":
        choiceN = 4;
        break;
      default:
        choiceN = -1;
        bot.postMessage(channel, "The games called: Rock, Paper, Scissors, Lizard, Spock" );
        break;
    }

    if (choiceN != -1){
      compChoice = Math.floor(Math.random() * 5);
      var diff = choiceN - compChoice;
      var test = (((diff%5)+5)%5);

      if (diff === 0) {
        bot.postMessage(channel, "TIE: We both chose "+choice[compChoice]+"!");
      }
      else if (test === 3 ||test === 4){
        bot.postMessage(channel, "YOU LOST: "+art[choiceN][compChoice]);

      }
      else if (test === 1 || test === 2){
        bot.postMessage(channel, "YOU WON: "+art[choiceN][compChoice]);
      }
    }
  };


};

Module.prototype.toString = function() {
  return this.name;
};


var exports = module.exports = Module;