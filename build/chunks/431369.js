/** Chunk was on 46062 **/
t.d(n, {
  g: () => s
}), t(415506), t(388685);
var r = t(512722),
  o = t.n(r),
  i = t(509545),
  l = t(74538),
  a = t(474936),
  c = t(981631);

function s(e, n) {
  let t = i.Z.get(e.planId);
  o()(null != t, "missing premium subscription plan");
  let r = i.Z.getForSkuAndInterval((0, l.Wz)(a.Si.GUILD), t.interval, t.intervalCount);
  o()(null != r, "missing premium guild plan");
  let s = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    p = (e.status === c.O0b.CANCELED ? 0 : (0, l.uV)(s)) + n,
    _ = s.filter(e => e.planId !== r.id);
  if (p < 0) throw Error("Invalid adjustment");
  return 0 === p ? _ : [..._, {
    planId: r.id,
    quantity: p
  }]
}