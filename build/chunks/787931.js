/** Chunk was on web.js **/
/** chunk id: 787931, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk473145 = require("./473145.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js");

function s(e, t, n, s) {
  if (null == e || null == e.quality && null == e.guildPremiumTier) returntrue;
  let o = false;
  return null != e.quality && (e.quality === a.uP.HIGH_STREAMING_QUALITY ? o = o || i.Ay.canStreamQuality(i.Ay.StreamQuality.HIGH, t) : e.quality === a.uP.MID_STREAMING_QUALITY && (o = o || i.Ay.canStreamQuality(i.Ay.StreamQuality.MID, t))), null != e.guildPremiumTier && (o = o || (0, r.yS)(n, e.guildPremiumTier)), o
}