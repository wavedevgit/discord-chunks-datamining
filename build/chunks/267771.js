/** Chunk was on 17534 **/
/** chunk id: 267771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return (0, r.useMemo)(() => {
    if (null == e) return 0;
    let t = (null == e ? true : e.features.has(i.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true ? 0 : i.M2T[i.TVA.TIER_3],
      n = Object.values(l.sy),
      r = Object.values(l.YV);
    return n.concat(r).forEach(n => {
      var r, l;
      null == n.includedInLevel && (null == (r = null == (l = n.isEnabled) ? true : l.call(n, e.id)) || r) && (t += n.boostPrice)
    }), t
  }, [e])
}