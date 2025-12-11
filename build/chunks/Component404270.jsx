/** Chunk was on 9536 **/
/** chunk id: 404270, original params: e,t,n (module,exports,require) **/
"use strict";
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
  Chunk897065 = require("./897065.js");
let x = e => {
  var t;
  let {
    className: n
  } = e, i = (0, a.e7)([c.default], () => c.default.getCurrentUser()), x = (0, a.e7)([o.default], () => o.default.locale), j = (0, a.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()), v = (0, a.e7)([d.Z], () => null != j ? d.Z.get(j.planId) : true), O = null != (t = (0, a.e7)([d.Z], () => null != v ? d.Z.getForSkuAndInterval((0, m.Wz)(p.Si.GUILD), v.interval, v.intervalCount) : true)) ? t : p.GP[p.Xh.PREMIUM_MONTH_GUILD];
  return (0, r.jsxs)("div", {
    className: l()(h.wrapper, n),
    children: [(0, r.jsx)(s.Heading, {
      className: h.heading,
      variant: "heading-xl/semibold",
      children: b.intl.string(b.t["3x1PFE"])
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: function(e) {
        let {
          currentUser: t,
          locale: n,
          guildBoostingPlanId: i,
          interval: l,
          intervalCount: a
        } = e, s = m.ZP.getDefaultPrice(i, m.ZP.isPremium(t)), o = m.ZP.getDefaultPrice(i, false), c = (0, f.og)((0, f.T4)(s.amount, s.currency), l, a), d = (0, f.og)((0, f.T4)(o.amount, o.currency), l, a);
        return m.ZP.isPremium(t, p.PremiumTypes.TIER_2) ? b.intl.format(b.t.N3Icb2, {
          price: c,
          originalPrice: d,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: h.originalPrice,
            children: e
          }, t),
          freeSubscriptionCount: p.cb,
          discountPercent: (0, g.T3)(n, p.Rr / 100)
        }) : m.ZP.isPremium(t, p.PremiumTypes.TIER_1) ? b.intl.format(b.t.nQLVBF, {
          price: c,
          originalPrice: d,
          originalPriceHook: (e, t) => (0, r.jsx)("span", {
            className: h.originalPrice,
            children: e
          }, t),
          discountPercent: (0, g.T3)(n, p.Rr / 100)
        }) : b.intl.format(b.t.Mmf63F, {
          price: c
        })
      }({
        currentUser: i,
        locale: x,
        guildBoostingPlanId: O.id,
        interval: O.interval,
        intervalCount: O.intervalCount
      })
    })]
  })
}