defInterface(ChannelSystem, null, var find = (function find$(server_channel$1) {
  /* find channel.sibilant:2:2 */

  var server = server_channel$1[0],
      channel = server_channel$1[1];

  return client.guilds.find(isNamed(server)).channels.find(isNamed(channel));
}););
defInterface(Channel, pair(), gett(guildName, this.pair[0]), gett(channelName, this.pair[1]), state(Duckling.state), var join = (function join$(pair, u) {
  /* join channel.sibilant:15:2 */

  return this.state = then(this.state, state, print("enquing task", "(function() {\n" +
  "  /* async.sibilant:4:78 */\n" +
  "\n" +
  "  u.channel = pair;\n" +
  "  return u;\n" +
  "}).call(this)"), u.channel = pair;, u);
}););