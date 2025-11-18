/** Chunk was on 32923 **/
/** chunk id: 404270, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk205371 = require("./205371.js");
let x = e => {
  var t;
  let {
    className: n
  } = e, i = (0, a.e7)([c.default], () => c.default.getCurrentUser()), x = (0, a.e7)([o.default], () => o.default.locale), j = (0, a.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()), _ = (0, a.e7)([d.Z], () => null != j ? d.Z.get(j.planId) : true), v = null != (t = (0, a.e7)([d.Z], () => null != _ ? d.Z.getForSkuAndInterval((0, m.Wz)(f.Si.GUILD), _.interval, _.intervalCount) : true)) ? t : f.GP[f.Xh.PREMIUM_MONTH_GUILD];
  return (0, r.jsxs)("div", {
    className: l()(b.wrapper, n),
    children: [(0, r.jsx)(s.Heading, {
      className: b.heading,
      variant: "heading-xl/semibold",
      children: h.intl.string(h.t["3x1PFE"])
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: function(e) {
        let {
          currentUser: t,
          locale: n,
          guildBoostingPlanId: i,
          interval: l,
          intervalCount: a
        } = e, s = m.ZP.getDefaultPrice(i, m.ZP.isPremium(t)), o = m.ZP.getDefaultPrice(i, false), c = (0, p.og)((0, p.T4)(s.amount, s.currency), l, a), d = (0, p.og)((0, p.T4)(o.amount, o.currency), l, a);
        return m.ZP.isPremium(t, f.PremiumTypes.TIER_2) ? h.intl.format(h.t.N3Icb2, {
          price: c,
          originalPrice: d,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: b.originalPrice,
            children: e
          }, t),
          freeSubscriptionCount: f.cb,
          discountPercent: (0, g.T3)(n, f.Rr / 100)
        }) : m.ZP.isPremium(t, f.PremiumTypes.TIER_1) ? h.intl.format(h.t.nQLVBF, {
          price: c,
          originalPrice: d,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: b.originalPrice,
            children: e
          }, t),
          discountPercent: (0, g.T3)(n, f.Rr / 100)
        }) : h.intl.format(h.t.Mmf63F, {
          price: c
        })
      }({
        currentUser: i,
        locale: x,
        guildBoostingPlanId: v.id,
        interval: v.interval,
        intervalCount: v.intervalCount
      })
    })]
  })
}