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
    user:create(lm.Model)(),
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


var {EventEmitter} = require("events");

class Tokenizer {
    constructor() {

    }
}
function tokenize (s){
    return s.replace(/([.!?])/g, "<s>").replace(",","<ph>").split(/\s+/);
}

class Concept extends EventEmitter {
    constructor (name,context){

        this.name = name;

        this.models = new Map();
        this.storage = new Map();

        super();

        this.on("message",this.handleMessage.bind(this));
    }
    addModel(name) {
        if(!this.models.has(name)) {
            this.models.set(name,create(lm.Model)());
            this.storage.set(name,create(lm.Storage)());
        }
    }
    classify(string) {

        var gram = new Array(this.context).map(() => null);

        return tokenize(string).reduce((r,t,i) => {

            gram.shift();
            gram.push(t);

            this.models.forEach((m,k) => {
                r[k] = (r[k]||1) * m.likelyhood(gram);
            });

            return r;
        },{});
    }
    static createMap(n,...names) {
        var o = {};
        for(name of names) {
            o[name] = new Concept(name,n);
        }
        return o;
    }
    train(name,tokens) {
        if(!this.models.has(name)) {
            this.addModel(name);
        }
        this.models.get(name).train(this.context,tokens);
    }
    generateMessage(length) {
        return this.models.get(name).generateRandomPhrase(length);
    }
    handleMessage(k,msg) {
        this.train(k,tokenize(msg));
    }

}

const concepts = Concept.createMap("users", "server","channel","duckling");

duckling.on('message', msg => {
    var user = msg.author.username;
    var server = msg.guild.name;
    var channel = msg.channel.name;
    concepts.users.emit("message",user,msg.content);
    concepts.server.emit("message",server,msg.content);
    concepts.channel.emit("message",server,msg.content);



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

