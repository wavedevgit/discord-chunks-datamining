/** Chunk was on 44799 **/
/** chunk id: 975706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  return (0, r.e7)([i.Z], () => {
    var t;
    return (null == (t = i.Z.getGuild(e)) ? true : t.features.has(o.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true
  }) ? {
    shouldShow: true,
    text: a.intl.string(l.default.l9n4QZ)
  } : {
    shouldShow: false,
    text: ""
  }
}