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

    choice = ["Stein", "Spock", "Papier", "Echse", "Schere"];

    art = [["", "Mein Spock verdampft deinen Stein", "Mein Papier bedeckt deinen Stein", "Dein Stein zerquetscht meine Echse", "Dein Stein schleift meine Schere"],
      ["Dein Spock verdampft meinen Stein", "", "Mein Papier widerlegt deinen Spock", "Meine Echse vergiftet deinen Spock", "Dein Spock zertrümmert meine Schere"],
      ["Dein Papier bedeckt meinen Stein", "Dein Papier widerlegt meinen Spock", "", "Meine Echse frisst dein Papier", "Meine Schere schneidet dein Papier"],
      ["Mein Stein zerquetscht deine Echse", "Deine Echse vergiftet meinen Spock", "Deine Echse frisst mein Papier", "", "Meine Schere köpft deine Echse"],
      ["Mein Stein schleift deine Schere", "Mein Spock zertrümmert deine Schere", "Deine Schere schneidet mein Papier", "Deine Schere köpft meine Echse", ""]];
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
      default:
        choiceN = -1;
        bot.postMessage(data.channel, "Das Spiel heisst SCHERE, STEIN, PAPIER, SPOCK, ECHSE OHNE " + choice + ".");
        break;
    }

    if (choiceN != -1){
      var diff = choiceN - compChoice;
      var test = (((diff%5)+5)%5);

      if (diff === 0) {
        bot.postMessage(data.channel, "UNENTSCHIEDEN: Wir haben beide "+choice[compChoice]+" gewählt!");
      }
      else if (test === 3 ||test === 4){
        bot.postMessage(data.channel, "VERLOREN: "+art[userChoice][compChoice]);

      }
      else if (test === 1 || test === 2){
        bot.postMessage(data.channel, "GEWONNEN: "+art[userChoice][compChoice]);
      }
    }
  };
  compChoice = Math.floor(Math.random() * 5);

};

Module.prototype.toString = function() {
  return this.name;
};


var exports = module.exports = Module;