/** Chunk was on 5606 **/
/** chunk id: 545334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk788868 = require("./788868.js");

function c(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: n,
    onNonSubscriber: c,
    onTier0TrialOffer: d,
    onTier2TrialOffer: u,
    onTier0TrialPeriod: p,
    onTier2TrialPeriod: _,
    onNonTier2Subscriber: m,
    onTier2Subscriber: g,
    onCustomCriteria: f
  } = e, b = (0, a.V)(), h = (0, s.O)(), A = (0, r.bG)([i.A], () => i.A.getPremiumTypeSubscription()), E = l.Ay.getPremiumTypeFromSubscription(A);
  if (null != f) {
    let e = f();
    if (null != e) return e
  }
  return null != b && o.TP[b.trial_id].skus.includes(o.pe.TIER_0) ? null != d ? d : t : null != b && o.TP[b.trial_id].skus.includes(o.pe.TIER_2) ? null != u ? u : t : null != A && A.hasActiveTrial && E === o.PremiumTypes.TIER_0 ? null != p ? p : t : null != A && A.hasActiveTrial && E === o.PremiumTypes.TIER_2 ? null != _ ? _ : t : null != h ? null != n ? n : t : null == E ? null != c ? c : t : E === o.PremiumTypes.TIER_0 || E === o.PremiumTypes.TIER_1 ? null != m ? m : t : E === o.PremiumTypes.TIER_2 && null != g ? g : t
}