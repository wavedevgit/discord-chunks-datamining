/** Chunk was on web.js **/
/** chunk id: 434564, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  G: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk864310 = require("./864310.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  var t, n;
  let r = (0, a.Z)(e),
    o = null != (t = null == (n = i.A.getGuild(e)) ? true : n.premiumTier) ? t : s.TVA.NONE;
  return s.M2T[o] + r.available
}

function l(e) {
  let t = (0, a.A)(e),
    n = (0, r.bG)([i.A], () => {
      var t, n;
      return null != (t = null == (n = i.A.getGuild(e)) ? true : n.premiumTier) ? t : s.TVA.NONE
    });
  return ((0, r.bG)([i.A], () => {
    var t;
    return (null == (t = i.A.getGuild(e)) ? true : t.features.has(s.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true
  }) ? 0 : s.M2T[n]) + t.available
}