/** Chunk was on web.js **/
/** chunk id: 280098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js");

function o(e, t, n, o) {
  if (null == e || null == e.quality && null == e.guildPremiumTier) returntrue;
  let s = false;
  return null != e.quality && (e.quality === a.ys.HIGH_STREAMING_QUALITY ? s = s || i.ZP.canStreamQuality(i.ZP.StreamQuality.HIGH, t) : e.quality === a.ys.MID_STREAMING_QUALITY && (s = s || i.ZP.canStreamQuality(i.ZP.StreamQuality.MID, t))), null != e.guildPremiumTier && (s = s || (0, r.tb)(n, e.guildPremiumTier)), s
}