/** Chunk was on 8458 **/
/** chunk id: 716610, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  l: () => s,
  v: () => r
});
var n, Chunk652215 = require("./652215.js"),
  r = ((n = {}).INELIGIBLE = "ineligible", n.DISQUALIFIED = "disqualified", n.ELIGIBLE_DISABLED = "eligible_disabled", n.ELIGIBLE_ENABLED = "eligible_enabled", n);

function s(e, i) {
  let t = e.features.has(l.GuildFeatures.VERIFIED),
    n = e.features.has(l.GuildFeatures.DISCOVERABLE);
  if (t) return n ? "eligible_enabled" : "eligible_disabled";
  if (n) {
    let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date;
    return i.sufficient || e ? "eligible_enabled" : "disqualified"
  }
  return i.sufficient ? "eligible_disabled" : "ineligible"
}