//constants and requires
const Discord = require("discord.js");
const oldMarkov = require("./libraries/markov.js");
const format = require("./libraries/format.js");
const ai = require("ai");
const markov = require("./libraries/cage.js");

const {Interface} = require("ai/lib/interface");

var EventEmitter = require("events").EventEmitter;

console.log("[Duckling] ALL DEPENDANCIES LOADED");

const duckling = new Discord.Client();
const token = require("./../token.js");

const Duckling = Interface.define("Duckling",{
    extend:EventEmitter.prototype,
    client:duckling,
    token,
    model:create(ai.Model)(),
    init() {},
    say() {},
    categorize() {},
    send(message) {},
    magic() {}
});


console.log("[Duckling] DISCORD SET-UP PROPERLY: " + token);




//basic variables
var wpm = 110;
//concepts
//const concepts = Concept.createMap(2, "users", "server", "channel", "duckling");

//emotions
emotion = {
    positive: 10,
    negative: 10,
    agressive: 10,
    passive: 10
};

/* brain below
       _---~~(~~-_.
     _{        )   )
   ,   ) -~~- ( ,-' )_
  (  `-,_..`., )-- '_,)
 ( ` _)  (  -~( -_ `,  }
 (_-  _  ~_-~~~~`,  ,' )
   `~ -^(    __;-,((()))
         ~~~~ {_ -_(())
                `\  }
                  { }
*/



duckling.on('ready', () => {
    console.log("Logged in as " + duckling.user.tag);
});

//♥

var model = create(ai.Model)()

duckling.on('message', msg => {
    var user = msg.author.username;
    var server = msg.guild.name;
    var channel = msg.channel.name;





});

//basic talk message
function say(msg, text) {
    msg.channel.startTyping();
    setTimeout(function() {
        msg.channel.send(text);
        console.log("[DUCKLING] " + text);
        msg.channel.stopTyping(true);
    }, ((wc * (60 / wpm)) * 1000));
}

function saveMessage(msg, location) { //save message

}

function catagorize(msg) { //decide where to put th message

}

function makeResponse(msg) { //come up with a snappy remark
    return response;
}

function magic() { //main function that everyting else lives in

}

duckling.state = duckling.login(token);

:
