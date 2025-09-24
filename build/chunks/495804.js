/** Chunk was on 51727 **/
/** chunk id: 495804, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk901005 = require("./901005.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  let n = (0, i.i)(null == e ? true : e.id, t);
  return (0, r.useMemo)(() => {
    if (null == e) return 0;
    let t = (null == e ? true : e.features.has(o.oNc.PREMIUM_TIER_3_OVERRIDE)) === true ? 0 : o.oCV[o.Eu4.TIER_3];
    return Object.keys(l.Hk).filter(e => !!n || e !== o.oNc.GUILD_TAGS_BADGE_PACK_PETS && e !== o.oNc.GUILD_TAGS_BADGE_PACK_FLEX).forEach(e => {
      let n = l.Hk[e];
      null != n && null == n.includedInLevel && (t += n.boostPrice)
    }), t
  }, [e, n])
}