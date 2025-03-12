/** Chunk was on 9710 **/
"use strict";
s.d(t, {
  m: () => b
}), s(47120);
var r = s(192379),
  n = s(442837),
  i = s(594174),
  o = s(78839),
  l = s(431),
  a = s(111361),
  c = s(74538),
  u = s(557017),
  d = s(474936);
let p = e => {
    var t;
    let s = new Date;
    return (s.setDate(s.getDate() - 10), (null === (t = e.metadata) || void 0 === t ? void 0 : t.ended_at) != null) ? new Date(e.metadata.ended_at) >= s : e.currentPeriodEnd >= s
  },
  f = e => {
    var t;
    let s = null === (t = (0, c.Af)(e)) || void 0 === t ? void 0 : t.planId;
    return void 0 === s || c.ZP.getPremiumType(s) !== d.p9.TIER_2
  };

function b(e) {
  let {
    location: t
  } = e, [s, c] = r.useState(null), b = u.t.useExperiment({
    location: t
  }), g = (0, n.e7)([o.ZP], () => o.ZP.getMostRecentPremiumTypeSubscription()), O = (0, n.e7)([l.Z], () => l.Z.hasFetchedOffer()), x = (0, n.e7)([o.ZP], () => o.ZP.hasFetchedMostRecentPremiumTypeSubscription()), m = (0, n.e7)([i.default], () => i.default.getCurrentUser()), h = (null == m ? void 0 : m.hadPremiumSubscription()) && !x, j = !(0, a.I5)(m) && !O;
  return r.useEffect(() => {
    if (!1 === b.enabled) {
      c(!1);
      return
    }
    if (!h && !j) {
      if (null === g) {
        (0, a.I5)(m, d.p9.TIER_2) ? c(!1): c(!0);
        return
      }
      g.isPaused ? c(!0) : g.isEnded ? l.Z.hasAnyUnexpiredOffer() || l.Z.hasAnyUnexpiredDiscountOffer() || p(g) ? c(!1) : c(!0) : g.isActive ? c(f(g)) : c(!1)
    }
  }, [b.enabled, g, h, j, m]), s
}