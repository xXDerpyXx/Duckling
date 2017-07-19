var state = client.login(token).then(aprint("login success"), athrow(Error, "login failed"));
var brain = Model();
defCurried(say, t(noun), noun.writes([ t ]));
defInterface(ShortTermMemory, null);
defInterface(Messages, null);
defInterface(NextResponse, null);
defInterface(Duckling, null, extend(EventEmitter.prototype), init(EventEmitter.call(this)), client(client), token(token), brain(brain), sett(channel, keys, task(this._channel = keys;)), gett(channel, task(print("getting channel", this._channel), ChannelSystem.find(this._channel))), state(state), defGeneric(reads, msg(), "takes data and introduces it to ducklings brain", task(print("reading"), (function() {
  if (!(msg.author.name === client.user.username)) {
    this._channel = [ msg.guild.name, msg.channel.name ];
    var t = msg.content.replace((new RegExp("[.!?]", undefined)));
    var o = t.split((new RegExp("\\s", undefined)));
    return this.emit("reads", o);
  }
}).call(this))), defGeneric(remembers, wordList(), task(this.brain.train(5, wordList), this.brain.degrade(this.brain.random().seq), this.emit("remembers", [ this.brain, wordList ]))), response([]), context([ null, null, null, null ]), var thinks = (function thinks$(model_words$1) {
  /* thinks Duckling.sibilant:69:2 */

  var model = model_words$1[0],
      words = model_words$1[1];

  print("attempting to think", model.total);
  return task(
    var r = model.given(
      this.context).random();
    , var token = r.token;
    , this.context = [ this.context.slice(1), token ];
    , print("likelyhood", r.likelyhood)
    , Promise.resolve((function() {
    if (null === token) {
      print("done thinking");
      this.emit("thinks", this.response);
      return this.response = [];
    } else {
      this.response.push(token);
      return (function() {
        if ((r.likelyhood < 0.1 || [ "Duckling", "duckling", "you", "your", "you're" ].some(=>(name(), name === token)))) {
          print("thinking hard...");
          return this.emit("remembers", [ model, words ]);
        }
      }).call(this).catch(aprint("borked"));
    }
  }).call(this)).catch(aprint("lost a thought....")));

});, defGeneric(writes, s([])(channel), var t = (s.join(" ") + ".");, task(then(channel, c, (function() {
  if (!(t === ".")) {
    c.startTyping();
    c.send(t);
    print("[DUCKLING] ", t);
    c.stopTyping(true);
    this.emit("writes", t);
    return Storage.save("./models/duckling-core", this.brain).then(aprint("saved duckling")).catch(aprint("failed to save duckling"));
  }
}).call(this)).catch(aprint("failed to write")))));