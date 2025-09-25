/** Chunk was on 44686 **/
/** chunk id: 386885, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  U: () => r,
  V: () => s
});
var n, Chunk981631 = require("./981631.js"),
  r = ((n = {}).INELIGIBLE = "ineligible", n.DISQUALIFIED = "disqualified", n.ELIGIBLE_DISABLED = "eligible_disabled", n.ELIGIBLE_ENABLED = "eligible_enabled", n);

function s(e, i) {
  let t = e.features.has(l.oNc.VERIFIED),
    n = e.features.has(l.oNc.DISCOVERABLE);
  if (t) return n ? "eligible_enabled" : "eligible_disabled";
  if (n) {
    let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date;
    return i.sufficient || e ? "eligible_enabled" : "disqualified"
  }
  return i.sufficient ? "eligible_disabled" : "ineligible"
}