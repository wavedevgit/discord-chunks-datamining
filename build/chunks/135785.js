/** Chunk was on 1815 **/
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(230711),
  o = n(63063),
  c = n(74538),
  d = n(140465),
  u = n(474936),
  m = n(981631),
  p = n(388032),
  g = n(503683);
let h = e => {
  let t, n, {
      premiumSubscription: i,
      className: h,
      isFullscreen: f = !1,
      textColor: b
    } = e,
    N = (0, d.Nx)();
  if (null == i) return null;
  let x = null != i ? c.ZP.getPremiumPlanItem(i) : null;
  if (c.ZP.isBoostOnlySubscription(i) ? t = p.NW.string(p.t.Uj0md3) : null != x && (t = c.ZP.getDisplayPremiumType(x.planId)), null == t) return null;
  let _ = () => l.Z.open(m.oAB.SUBSCRIPTIONS),
    E = (null != x ? c.ZP.getSkuIdForPlan(x.planId) : null) === u.Si.TIER_1;
  return n = null != b ? b : N || f ? "always-white" : "text-normal", (0, r.jsxs)(a.Zbd, {
    className: s()(g.container, h, {
      [g.lightTextLink]: f,
      [g.centerText]: N
    }),
    type: a.Zbd.Types.CUSTOM,
    children: [(0, r.jsx)(a.P4T, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: s()(g.icon, {
        [g.lightThemeColorOnly]: N || f
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: n,
      children: E ? p.NW.format(p.t["tYuv+f"], {
        helpdeskArticle: o.Z.getArticleURL(m.BhN.PREMIUM_DETAILS),
        onSubscriptionsClick: _
      }) : p.NW.format(p.t.xHRgU1, {
        subscriptionName: t,
        onSubscriptionsClick: _
      })
    })]
  })
}