/** Chunk was on web.js **/
/** chunk id: 797156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => s
}), require("./35282.js");
var Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js"),
  Chunk574176 = require("./574176.js");
let o = [null, null];

function s(e, t) {
  var n, s;
  if (null == t) return o;
  let l = null == (n = r.Z.getChannel(null == (s = i.Z.getVoiceStateForUser(e)) ? true : s.channelId)) ? true : n.guild_id,
    {
      defaultStatusVariant: c
    } = (0, a.gx)({
      guildId: l,
      location: "parseHangStatus"
    }),
    u = t.split(":");
  return u.length > 1 && u[1] !== c ? [u[0], c] : u
}