

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry((f, a) => {
	
  return a.map(f);

});
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");


(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry((f, a) => {
	
  return a.map(f);

});
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var Discord = require("discord.js"),
    { 
  format,
  mWordList:makeWordList
 } = require("./libraries/format.js"),
    ai = require("ai"),
    { 
  Interface
 } = require("ai/lib/interface.js"),
    { 
  TreeMap
 } = require("ai/lib/tree"),
    { 
  EventEmitter
 } = require("events"),
    token = require("./../token.js");
var isNamed = R.curry((name, v) => {
	
  return v.name === name;

});
var treeMap = create(TreeMap);
var Model = create(ai.Model);
var client = (new Discord.Client());
var state = client.login(token).then((function(b, ...others) {
  /* node_modules/kit/inc/console.sibilant:10:8 */

  console.log("login success", b, ...others);
  return b;
}), athrow("login failed"));
var brain = Model();
var say = R.curry((t, noun) => {
	
  return noun.writes([ t ]);

});
var ShortTermMemory = Interface.define("ShortTermMemory", { 
  init(  ){ 
    
      
      return this;
    
   }
 });
var Messages = Interface.define("Messages", { 
  init(  ){ 
    
      
      return this;
    
   }
 });
var NextResponse = Interface.define("NextResponse", { 
  init(  ){ 
    
      
      return this;
    
   }
 });
var Duckling = Interface.define("Duckling", { 
  init(  ){ 
    
      
      EventEmitter.call(this);
      return this;
    
   },
  extend:EventEmitter.prototype,
  client:client,
  token:token,
  brain:brain,
  set channel( keys ){ 
    
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* async.sibilant:4:78 */\n" +
        "\n" +
        "  return this._channel = keys;\n" +
        "}).call(this)");
        return this._channel = keys;
      
      }).catch((err)=>{
          console.log("ignore:"+err);
        }
      );
    
   },
  get channel(  ){ 
    
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* async.sibilant:4:78 */\n" +
        "\n" +
        "  return ChannelSystem.find(this._channel);\n" +
        "}).call(this)");
        return ChannelSystem.find(this._channel);
      
      }).catch((err)=>{
          console.log("ignore:"+err);
        }
      );
    
   },
  state:state,
  reads( msg = this.msg ){ 
    
      "takes data and introduces it to ducklings brain";
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* async.sibilant:4:78 */\n" +
        "\n" +
        "  return (function() {\n" +
        "    if (!(msg.author.name === \"Duckling (Error)\")) {\n" +
        "      this._channel = [ msg.guild.name, msg.channel.name ];\n" +
        "      var t = msg.content.replace((new RegExp(\"[.!?]\", undefined)), \" <s> \");\n" +
        "      var o = t.split((new RegExp(\"\\\\s\", undefined)));\n" +
        "      this.emit(\"reads\", o);\n" +
        "      return (function() {\n" +
        "        if (t.includes(\"!duckling\")) {\n" +
        "          return this.writes(this.brain.randomSequence(20));\n" +
        "        }\n" +
        "      }).call(this);\n" +
        "    }\n" +
        "  }).call(this);\n" +
        "}).call(this)");
        return (function() {
          if (!(msg.author.name === "Duckling (Error)")) {
            this._channel = [ msg.guild.name, msg.channel.name ];
            var t = msg.content.replace((new RegExp("[.!?]", undefined)), " <s> ");
            var o = t.split((new RegExp("\\s", undefined)));
            this.emit("reads", o);
            return (function() {
              if (t.includes("!duckling")) {
                return this.writes(this.brain.randomSequence(20));
              }
            }).call(this);
          }
        }).call(this);
      
      });
    
   },
  remembers( wordList = this.wordList ){ 
    
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* async.sibilant:4:78 */\n" +
        "\n" +
        "  this.brain.train(2, wordList);\n" +
        "  this.brain.degrade(this.brain.random().seq);\n" +
        "  return this.emit(\"remembers\", this.brain);\n" +
        "}).call(this)");
        this.brain.train(2, wordList);
        this.brain.degrade(this.brain.random().seq);
        return this.emit("remembers", this.brain);
      
      }).catch((err)=>{
          console.log("ignore:"+err);
        }
      );
    
   },
  response:[],
  context:[ null ],
  thinks( model = this.model,response = this.response,context = this.context ){ 
    
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* async.sibilant:4:78 */\n" +
        "\n" +
        "  var r = model.given(context).random();\n" +
        "  var e = r.token;\n" +
        "  this.context = [ ...context.slice(1), e ];\n" +
        "  return (function() {\n" +
        "    if (null === e) {\n" +
        "      this.emit(\"thinks\", response);\n" +
        "      return this.response = [];\n" +
        "    } else if (r.likelyhood > 0.05) {\n" +
        "      return this.thinks(model);\n" +
        "    } else {\n" +
        "      return response.push(e);\n" +
        "    }\n" +
        "  }).call(this);\n" +
        "}).call(this)");
        var r = model.given(context).random();
        var e = r.token;
        this.context = [ ...context.slice(1), e ];
        return (function() {
          if (null === e) {
            this.emit("thinks", response);
            return this.response = [];
          } else if (r.likelyhood > 0.05) {
            return this.thinks(model);
          } else {
            return response.push(e);
          }
        }).call(this);
      
      }).catch((err)=>{
          console.log("ignore:"+err);
        }
      );
    
   },
  writes( s = [],channel = this.channel ){ 
    
      var t = s.join(" ");
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* async.sibilant:4:78 */\n" +
        "\n" +
        "  return channel.then((c) => {\n" +
        "  	\n" +
        "    c.startTyping();\n" +
        "    c.send(t);\n" +
        "    console.log(\"[DUCKLING] \", t);\n" +
        "    c.stopTyping(true);\n" +
        "    return this.emit(\"writes\", t);\n" +
        "  \n" +
        "  });\n" +
        "}).call(this)");
        return channel.then((c) => {
        	
          c.startTyping();
          c.send(t);
          console.log("[DUCKLING] ", t);
          c.stopTyping(true);
          return this.emit("writes", t);
        
        });
      
      }).catch((err)=>{
          console.log("ignore:"+err);
        }
      );
    
   }
 });
say("I am too stupid to talk with out a puppetteer right now", Duckling);
var ChannelSystem = Interface.define("ChannelSystem", { 
  init(  ){ 
    
      
      return this;
    
   },
  find( [ server, channel ] ){ 
    
      return client.guilds.find(isNamed(server)).channels.find(isNamed(channel));
    
   }
 });
var Channel = Interface.define("Channel", { 
  init( pair = this.pair ){ 
    
      this.pair = pair;
      return this;
    
   },
  get guildName(  ){ 
    
      return this.pair[0];
    
   },
  get channelName(  ){ 
    
      return this.pair[1];
    
   },
  state:Duckling.state,
  join( pair,u ){ 
    
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* async.sibilant:4:78 */\n" +
        "\n" +
        "  u.channel = pair;\n" +
        "  return u;\n" +
        "}).call(this)");
        u.channel = pair;
        return u;
      
      }).catch((err)=>{
          console.log("ignore:"+err);
        }
      );
    
   }
 });
console.log(Duckling.state);
console.log(Channel.state);
var wpm = 150;
var wc = 100;
null;
Duckling.init();
client.on("message", (...args) => {
	
  return Duckling.reads.call(Duckling, ...args);

});
Duckling.on("reads", (...args) => {
	
  return Duckling.remembers.call(Duckling, ...args);

});
Duckling.on("remembers", (...args) => {
	
  return Duckling.thinks.call(Duckling, ...args);

});
Duckling.on("thinks", (...args) => {
	
  return Duckling.writes.call(Duckling, ...args);

});
var fs = require("fs");
fs.readFile("./safeMessages.log", "utf8", (err, d) => {
	
  var st = d.split("/");
  return st.forEach((s) => {
  	
    return Duckling.brain.train(2, s.split((new RegExp("\\s", undefined))));
  
  });

});