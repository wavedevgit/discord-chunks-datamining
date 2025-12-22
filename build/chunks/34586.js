/** Chunk was on 15718 **/
/** chunk id: 34586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk650774 = require("./650774.js"),
  Chunk206583 = require("./206583.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return (0, r.e7)([l.Z], () => {
    if (null == e) return;
    let t = l.Z.getMemberCount(e.id),
      n = e.features.has(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
      r = e.features.has(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
      s = null != t && t < i.k4;
    return n || r ? n : s
  })
}