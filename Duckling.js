

(function(a, b, c) {
  /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

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
  /* is.empty? ../../../../node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow ../../../../node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of ../../../../node_modules/kit/inc/core/fp.sibilant:17:0 */

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
  /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;


(function(a, b, c) {
  /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

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
  /* is.empty? ../../../../node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow ../../../../node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of ../../../../node_modules/kit/inc/core/fp.sibilant:17:0 */

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
  format
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
var treeMap = create(TreeMap);
var Model = create(ai.Model);
var client = (new Discord.Client());
var isNamed = R.curry((name, v) => {
	
  return v.name === name;

});
var ChannelSystem = Interface.define("ChannelSystem", { 
  init(  ){ 
    
      
      return this;
    
   },
  find( [ server, channel ] ){ 
    
      return client.guilds.find(isNamed(server)).channels.find(isNamed(channel));
    
   }
 });
console.log(ChannelSystem.find([ "Error log", "bot-tests" ]));
console.log(client.guilds.find((v) => {
	
  return v.name === "Error log";

}));
console.log(client.guilds);
console.log(client);
var wpm = 150;
var wc = 100;
var Duckling = Interface.define("Duckling", { 
  init(  ){ 
    
      
      return this;
    
   },
  events:(new EventEmitter()),
  client:client,
  token:token,
  set channel( keys ){ 
    
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* Duckling.sibilant:24:80 */\n" +
        "\n" +
        "  return this._channel = keys;\n" +
        "}).call(this)");
        return this._channel = keys;
      
      });
    
   },
  get channel(  ){ 
    
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* Duckling.sibilant:24:80 */\n" +
        "\n" +
        "  return ChannelSystem.find(this._channel);\n" +
        "}).call(this)");
        return ChannelSystem.find(this._channel);
      
      });
    
   },
  state:client.login(token).then((function(b, ...others) {
    /* ../../../../node_modules/kit/inc/console.sibilant:10:8 */
  
    console.log("login success", b, ...others);
    return b;
  }), athrow("login failed")),
  heard(  ){ 
    
   },
  said( s = [],channel = this.channel ){ 
    
      var t = s.join(".");
      return this.state = this.state.then((state) => {
      	
        console.log("enquing task", "(function() {\n" +
        "  /* Duckling.sibilant:24:80 */\n" +
        "\n" +
        "  return channel.then((c) => {\n" +
        "  	\n" +
        "    c.startTyping();\n" +
        "    c.send(t);\n" +
        "    console.log(\"[DUCKLING] \", t);\n" +
        "    return c.stopTyping(true);\n" +
        "  \n" +
        "  });\n" +
        "}).call(this)");
        return channel.then((c) => {
        	
          c.startTyping();
          c.send(t);
          console.log("[DUCKLING] ", t);
          return c.stopTyping(true);
        
        });
      
      });
    
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
  get state(  ){ 
    
      return Duckling.state;
    
   },
  join( pair,u ){ 
    
      u.channel = pair;
      return u;
    
   }
 });
var say = R.curry((t, noun) => {
	
  return noun.said([ t ]);

});
Channel.join([ "Error log", "bot-tests" ], Duckling);
say("I like potatos", Duckling);
console.log(Duckling._channel);