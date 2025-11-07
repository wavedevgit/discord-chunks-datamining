/** Chunk was on web.js **/
/** chunk id: 496158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk430824 = require("./430824.js");

function a(e) {
  return "contextless" === e.type ? {
    channel: true,
    guild: true
  } : {
    channel: e.channel,
    guild: i.Z.getGuild(e.channel.guild_id)
  }
}

function o(e) {
  return r.useMemo(() => a(e), [e])
}