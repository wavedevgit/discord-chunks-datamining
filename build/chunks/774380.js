/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(98278),
  l = n(823188),
  o = n(594174),
  A = n(74538),
  c = n(474936),
  d = n(388032),
  u = n(378649);
let g = e => {
    let {
      onOpenPremiumClick: t
    } = e, n = (0, r.jsx)(s.zxk, {
      className: u.tier0Button,
      color: s.zxk.Colors.BRAND_INVERTED,
      onClick: () => {
        (0, a.z)(), null != t && t()
      },
      children: d.NW.string(d.t.hvVgAQ)
    });
    return (0, r.jsxs)("div", {
      className: u.tier0Container,
      children: [(0, r.jsx)(s.X6q, {
        className: u.tier0Heading,
        variant: "heading-xxl/extrabold",
        children: d.NW.string(d.t["qUl+Ky"])
      }), (0, r.jsx)(l.wp, {
        className: u.tier0Card,
        ctaButton: n,
        featureSet: l.uZ.BOOSTING,
        showWumpus: !0,
        showYearlyPrice: !0
      })]
    })
  },
  f = e => {
    let {
      onOpenPremiumClick: t
    } = e, n = (0, i.e7)([o.default], () => o.default.getCurrentUser());
    return A.ZP.isPremium(n, c.p9.TIER_2) ? null : (0, r.jsx)(g, {
      onOpenPremiumClick: t
    })
  }