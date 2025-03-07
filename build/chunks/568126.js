/** Chunk was on 1815 **/
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(706454),
  l = n(78839),
  o = n(985754),
  c = n(222727),
  d = n(474494),
  u = n(981631),
  m = n(839791);
let p = function(e) {
  let {
    localizedPricingPromo: t
  } = e, n = t.countryCode, p = (0, i.e7)([a.default], () => a.default.locale);
  (0, c.U)(u.jXE.SETTINGS_PREMIUM_BANNER, n);
  let g = (0, i.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
    {
      localizedPricingBannerBody: h
    } = (0, o.vB)({
      localizedPricingPromo: t,
      subscription: g,
      forceSingleLine: !0,
      userLocale: p
    });
  return (0, r.jsxs)("div", {
    className: m.bannerContainer,
    children: [(0, r.jsx)(d.Z, {
      className: m.badge,
      countryCode: n
    }), (0, r.jsx)("div", {
      className: m.bannerBodyContainer,
      children: (0, r.jsx)(s.Text, {
        color: "none",
        variant: "text-md/normal",
        className: m.bannerBody,
        children: h
      })
    })]
  })
}