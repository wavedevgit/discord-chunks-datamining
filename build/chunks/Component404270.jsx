/** Chunk was on 384 **/
/** chunk id: 404270, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk723116 = require("./723116.js");
let b = e => {
  var t;
  let {
    className: n
  } = e, i = (0, s.e7)([c.default], () => c.default.getCurrentUser()), b = (0, s.e7)([o.default], () => o.default.locale), j = (0, s.e7)([d.Z], () => d.Z.getPremiumTypeSubscription()), _ = (0, s.e7)([u.Z], () => null != j ? u.Z.get(j.planId) : true), v = null != (t = (0, s.e7)([u.Z], () => null != _ ? u.Z.getForSkuAndInterval((0, m.Wz)(f.Si.GUILD), _.interval, _.intervalCount) : true)) ? t : f.GP[f.Xh.PREMIUM_MONTH_GUILD];
  return (0, r.jsxs)("div", {
    className: l()(x.wrapper, n),
    children: [(0, r.jsx)(a.Heading, {
      className: x.heading,
      variant: "heading-xl/semibold",
      children: h.intl.string(h.t["3x1PFE"])
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: function(e) {
        let {
          currentUser: t,
          locale: n,
          guildBoostingPlanId: i,
          interval: l,
          intervalCount: s
        } = e, a = m.ZP.getDefaultPrice(i, m.ZP.isPremium(t)), o = m.ZP.getDefaultPrice(i, false), c = (0, p.og)((0, p.T4)(a.amount, a.currency), l, s), u = (0, p.og)((0, p.T4)(o.amount, o.currency), l, s);
        return m.ZP.isPremium(t, f.PremiumTypes.TIER_2) ? h.intl.format(h.t.N3Icb2, {
          price: c,
          originalPrice: u,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: x.originalPrice,
            children: e
          }, t),
          freeSubscriptionCount: f.cb,
          discountPercent: (0, g.T3)(n, f.Rr / 100)
        }) : m.ZP.isPremium(t, f.PremiumTypes.TIER_1) ? h.intl.format(h.t.nQLVBF, {
          price: c,
          originalPrice: u,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: x.originalPrice,
            children: e
          }, t),
          discountPercent: (0, g.T3)(n, f.Rr / 100)
        }) : h.intl.format(h.t.Mmf63F, {
          price: c
        })
      }({
        currentUser: i,
        locale: b,
        guildBoostingPlanId: v.id,
        interval: v.interval,
        intervalCount: v.intervalCount
      })
    })]
  })
}