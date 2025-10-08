/** Chunk was on 51727 **/
/** chunk id: 495804, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return (0, r.useMemo)(() => {
    if (null == e) return 0;
    let t = (null == e ? true : e.features.has(l.oNc.PREMIUM_TIER_3_OVERRIDE)) === true ? 0 : l.oCV[l.Eu4.TIER_3];
    return Object.keys(i.Hk).forEach(e => {
      let n = i.Hk[e];
      null != n && null == n.includedInLevel && (t += n.boostPrice)
    }), t
  }, [e])
}