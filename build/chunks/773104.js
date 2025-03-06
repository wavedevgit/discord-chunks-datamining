/** Chunk was on 51724 **/
n.d(t, {
  _: () => c
});
var r = n(442837),
  i = n(78839),
  s = n(74538),
  a = n(104494),
  l = n(639119),
  o = n(474936);

function c(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: n,
    onNonSubscriber: c,
    onTier0TrialOffer: d,
    onTier2TrialOffer: u,
    onTier0TrialPeriod: m,
    onTier2TrialPeriod: p,
    onNonTier2Subscriber: g,
    onTier2Subscriber: h,
    onCustomCriteria: f
  } = e, x = (0, l.N)(), b = (0, a.Ng)(), N = (0, r.e7)([i.ZP], () => i.ZP.getPremiumTypeSubscription()), _ = s.ZP.getPremiumTypeFromSubscription(N);
  if (null != f) {
    let e = f();
    if (null != e) return e
  }
  return null != x && o.nG[x.trial_id].skus.includes(o.Si.TIER_0) ? null != d ? d : t : null != x && o.nG[x.trial_id].skus.includes(o.Si.TIER_2) ? null != u ? u : t : null != N && null != N.trialId && _ === o.p9.TIER_0 ? null != m ? m : t : null != N && null != N.trialId && _ === o.p9.TIER_2 ? null != p ? p : t : null != b ? null != n ? n : t : null == _ ? null != c ? c : t : _ === o.p9.TIER_0 || _ === o.p9.TIER_1 ? null != g ? g : t : _ === o.p9.TIER_2 && null != h ? h : t
}