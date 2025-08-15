/** Chunk was on 6049 **/
/** chunk id: 404270, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk930153 = require("./930153.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk723116 = require("./723116.js");
let x = e => {
  var t;
  let {
    className: n
  } = e, i = (0, a.e7)([c.default], () => c.default.getCurrentUser()), x = (0, a.e7)([o.default], () => o.default.locale), j = (0, a.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()), v = (0, a.e7)([d.Z], () => null != j ? d.Z.get(j.planId) : true), _ = null != (t = (0, a.e7)([d.Z], () => null != v ? d.Z.getForSkuAndInterval((0, g.Wz)(h.Si.GUILD), v.interval, v.intervalCount) : true)) ? t : h.GP[h.Xh.PREMIUM_MONTH_GUILD];
  return (0, r.jsxs)("div", {
    className: l()(b.wrapper, n),
    children: [(0, r.jsx)(s.X6q, {
      className: b.heading,
      variant: "heading-xl/semibold",
      children: f.intl.string(f.t["3x1PFB"])
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: function(e) {
        let {
          currentUser: t,
          locale: n,
          guildBoostingPlanId: i,
          interval: l,
          intervalCount: a
        } = e, s = g.ZP.getDefaultPrice(i, g.ZP.isPremium(t)), o = g.ZP.getDefaultPrice(i, false), c = (0, p.og)((0, p.T4)(s.amount, s.currency), l, a), d = (0, p.og)((0, p.T4)(o.amount, o.currency), l, a);
        return g.ZP.isPremium(t, h.p9.TIER_2) ? f.intl.format(f.t.N3Icb2, {
          price: c,
          originalPrice: d,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: b.originalPrice,
            children: e
          }, t),
          freeSubscriptionCount: h.cb,
          discountPercent: (0, m.T3)(n, h.Rr / 100)
        }) : g.ZP.isPremium(t, h.p9.TIER_1) ? f.intl.format(f.t.nQLVBA, {
          price: c,
          originalPrice: d,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: b.originalPrice,
            children: e
          }, t),
          discountPercent: (0, m.T3)(n, h.Rr / 100)
        }) : f.intl.format(f.t.Mmf63N, {
          price: c
        })
      }({
        currentUser: i,
        locale: x,
        guildBoostingPlanId: _.id,
        interval: _.interval,
        intervalCount: _.intervalCount
      })
    })]
  })
}