//constants and requires
const Discord = require("discord.js");
const oldMarkov = require("./libraries/markov.js");
const format = require("./libraries/format.js");
const lm = require("./language-model/index.js");
const markov = require("./libraries/cage.js");
console.log("[Duckling] ALL DEPENDANCIES LOADED");
const duckling = new Discord.Client();
const token = require("./../token.js");
console.log("[Duckling] DISCORD SET-UP PROPERLY: "+token);

//basic variables
var wpm = 110;
//models
var models = {
	emotion:{},
	topics:{},
	user:{},
	channel:{}
};

//emotions
models.emotion = {
	positive:10,
	negative:10,
	agressive:10,
	passive:10
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
  console.log("Logged in as "+duckling.user.tag);
});

//♥

duckling.on('message', msg => {

});

//basic talk message
function say(msg,text){
	msg.channel.startTyping();
	setTimeout(function() {
		msg.channel.send(text);
		console.log("[DUCKLING] "+text);
		msg.channel.stopTyping(true);
	},((wc*(60/wpm))*1000));
}

function saveMessage(msg,location){ //save message

}

function catagorize(msg){ //decide where to put th message

}

function makeResponse(msg){ //come up with a snappy remark
	return response;
}

function magic(){ //main function that everyting else lives in

}

duckling.login(token);

