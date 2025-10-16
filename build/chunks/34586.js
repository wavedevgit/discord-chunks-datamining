/** Chunk was on 66201 **/
/** chunk id: 34586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk650774 = require("./650774.js"),
  Chunk206583 = require("./206583.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  return (0, r.e7)([l.Z], () => {
    if (null == e) return;
    let t = l.Z.getMemberCount(e.id),
      n = e.features.has(s.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
      r = e.features.has(s.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
      a = null != t && t < i.k4;
    return n || r ? n : a
  })
}