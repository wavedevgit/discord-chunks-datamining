/** Chunk was on web.js **/
/** chunk id: 358957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => o
}), require("./747238.js");
var Chunk734057 = require("./734057.js"),
  Chunk977997 = require("./977997.js"),
  Chunk140547 = require("./140547.js");
let s = [null, null];

function o(e, t) {
  var n, o;
  if (null == t) return s;
  let l = null == (n = r.A.getChannel(null == (o = i.A.getVoiceStateForUser(e)) ? true : o.channelId)) ? true : n.guild_id,
    {
      defaultStatusVariant: c
    } = (0, a.ko)({
      guildId: l,
      location: "parseHangStatus"
    }),
    u = t.split(":");
  return u.length > 1 && u[1] !== c ? [u[0], c] : u
}