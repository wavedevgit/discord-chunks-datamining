/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => C
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  l = n(481060),
  o = n(706454),
  c = n(594174),
  A = n(509545),
  d = n(78839),
  u = n(930153),
  g = n(74538),
  f = n(937615),
  m = n(474936),
  p = n(388032),
  h = n(355446);
let C = e => {
  var t;
  let {
    className: n
  } = e, i = (0, a.e7)([c.default], () => c.default.getCurrentUser()), C = (0, a.e7)([o.default], () => o.default.locale), b = (0, a.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()), v = (0, a.e7)([A.Z], () => null != b ? A.Z.get(b.planId) : void 0), x = null !== (t = (0, a.e7)([A.Z], () => null != v ? A.Z.getForSkuAndInterval((0, g.Wz)(m.Si.GUILD), v.interval, v.intervalCount) : void 0)) && void 0 !== t ? t : m.GP[m.Xh.PREMIUM_MONTH_GUILD];
  return (0, r.jsxs)("div", {
    className: s()(h.wrapper, n),
    children: [(0, r.jsx)(l.X6q, {
      className: h.heading,
      variant: "heading-xl/semibold",
      children: p.NW.string(p.t["3x1PFB"])
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      children: function(e) {
        let {
          currentUser: t,
          locale: n,
          guildBoostingPlanId: i,
          interval: s,
          intervalCount: a
        } = e, l = g.ZP.getDefaultPrice(i, g.ZP.isPremium(t)), o = g.ZP.getDefaultPrice(i, !1), c = (0, f.og)((0, f.T4)(l.amount, l.currency), s, a), A = (0, f.og)((0, f.T4)(o.amount, o.currency), s, a);
        return g.ZP.isPremium(t, m.p9.TIER_2) ? p.NW.format(p.t.N3Icb2, {
          price: c,
          originalPrice: A,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: h.originalPrice,
            children: e
          }, t),
          freeSubscriptionCount: m.cb,
          discountPercent: (0, u.T3)(n, m.Rr / 100)
        }) : g.ZP.isPremium(t, m.p9.TIER_1) ? p.NW.format(p.t.nQLVBA, {
          price: c,
          originalPrice: A,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: h.originalPrice,
            children: e
          }, t),
          discountPercent: (0, u.T3)(n, m.Rr / 100)
        }) : p.NW.format(p.t.Mmf63N, {
          price: c
        })
      }({
        currentUser: i,
        locale: C,
        guildBoostingPlanId: x.id,
        interval: x.interval,
        intervalCount: x.intervalCount
      })
    })]
  })
}