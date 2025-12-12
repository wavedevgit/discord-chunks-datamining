/** Chunk was on web.js **/
/** chunk id: 496158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk430824 = require("./430824.js");

function o(e) {
  return "contextless" === e.type ? {
    channel: true,
    guild: true
  } : {
    channel: e.channel,
    guild: i.Z.getGuild(e.channel.guild_id)
  }
}

function a(e) {
  return r.useMemo(() => o(e), [e])
}