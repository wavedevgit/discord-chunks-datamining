/** Chunk was on web.js **/
/** chunk id: 555045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk71393 = require("./71393.js");

function a(e) {
  return "contextless" === e.type ? {
    channel: true,
    guild: true
  } : {
    channel: e.channel,
    guild: i.A.getGuild(e.channel.guild_id)
  }
}

function s(e) {
  return r.useMemo(() => a(e), [e])
}