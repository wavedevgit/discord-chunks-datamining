/** Chunk was on web.js **/
/** chunk id: 773104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js");

function c(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: n,
    onNonSubscriber: c,
    onTier0TrialOffer: u,
    onTier2TrialOffer: d,
    onTier0TrialPeriod: f,
    onTier2TrialPeriod: p,
    onNonTier2Subscriber: _,
    onTier2Subscriber: m,
    onCustomCriteria: h
  } = e, g = (0, s.N)(), E = (0, a.N)(), b = (0, r.e7)([i.Z], () => i.Z.getPremiumTypeSubscription()), y = o.ZP.getPremiumTypeFromSubscription(b);
  if (null != h) {
    let e = h();
    if (null != e) return e
  }
  return null != g && l.nG[g.trial_id].skus.includes(l.Si.TIER_0) ? null != u ? u : t : null != g && l.nG[g.trial_id].skus.includes(l.Si.TIER_2) ? null != d ? d : t : null != b && b.hasActiveTrial && y === l.PremiumTypes.TIER_0 ? null != f ? f : t : null != b && b.hasActiveTrial && y === l.PremiumTypes.TIER_2 ? null != p ? p : t : null != E ? null != n ? n : t : null == y ? null != c ? c : t : y === l.PremiumTypes.TIER_0 || y === l.PremiumTypes.TIER_1 ? null != _ ? _ : t : y === l.PremiumTypes.TIER_2 && null != m ? m : t
}