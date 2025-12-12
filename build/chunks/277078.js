/** Chunk was on web.js **/
/** chunk id: 277078, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk710111 = require("./710111.js"),
  Chunk231338 = require("./231338.js");

function c(e, t, n) {
  let c = r.Z.getChannel(n);
  if ((null == e ? true : e.guildId) === s.X8 || (null == e ? true : e.guildId) === (null == c ? true : c.guild_id) || (null == e ? true : e.guildId) === t) returntrue;
  let u = a.ZP.canUseSoundboardEverywhere(o.default.getCurrentUser());
  return (null == c || null == c.guild_id || i.Z.can(l.Pl.USE_EXTERNAL_SOUNDS, c)) && u
}