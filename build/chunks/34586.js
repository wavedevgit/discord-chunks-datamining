/** Chunk was on 7318 **/
/** chunk id: 34586, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  E: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk650774 = require("./650774.js"),
  Chunk206583 = require("./206583.js"),
  Chunk981631 = require("./981631.js");

function s(A) {
  return (0, n.e7)([r.Z], () => {
    if (null == A) return;
    let e = r.Z.getMemberCount(A.id),
      t = A.features.has(i.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
      n = A.features.has(i.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
      s = null != e && e < l.k4;
    return t || n ? t : s
  })
}