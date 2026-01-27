/** Chunk was on web.js **/
/** chunk id: 69945, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk980504 = require("./980504.js"),
  Chunk818348 = require("./818348.js");

function c(e, t, n) {
  let c = r.A.getChannel(n);
  if ((null == e ? true : e.guildId) === s.mV || (null == e ? true : e.guildId) === (null == c ? true : c.guild_id) || (null == e ? true : e.guildId) === t) returntrue;
  let u = o.Ay.canUseSoundboardEverywhere(a.default.getCurrentUser());
  return (null == c || null == c.guild_id || i.A.can(l.xB.USE_EXTERNAL_SOUNDS, c)) && u
}