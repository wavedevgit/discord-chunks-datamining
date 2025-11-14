/** Chunk was on 65354 **/
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
    let t = (null == e ? true : e.features.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true ? 0 : l.oCV[l.Eu4.TIER_3],
      n = Object.values(i.Hk),
      r = Object.values(i.cG);
    return n.concat(r).forEach(n => {
      var r, i;
      null == n.includedInLevel && (null == (i = null == (r = n.isEnabled) ? true : r.call(n, e.id)) || i) && (t += n.boostPrice)
    }), t
  }, [e])
}