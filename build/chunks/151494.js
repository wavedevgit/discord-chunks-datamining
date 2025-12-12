/** Chunk was on web.js **/
/** chunk id: 151494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => s,
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk317169 = require("./317169.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  var t, n;
  let r = (0, a.I)(e),
    s = null != (n = null == (t = i.Z.getGuild(e)) ? true : t.premiumTier) ? n : o.Eu4.NONE;
  return o.oCV[s] + r.available
}

function l(e) {
  let t = (0, a.Z)(e),
    n = (0, r.e7)([i.Z], () => {
      var t, n;
      return null != (n = null == (t = i.Z.getGuild(e)) ? true : t.premiumTier) ? n : o.Eu4.NONE
    });
  return ((0, r.e7)([i.Z], () => {
    var t;
    return (null == (t = i.Z.getGuild(e)) ? true : t.features.has(o.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true
  }) ? 0 : o.oCV[n]) + t.available
}