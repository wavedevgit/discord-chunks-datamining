/** Chunk was on 20447 **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(642128),
  o = n(481060),
  l = n(410030),
  c = n(104494),
  d = n(639119),
  u = n(318747),
  m = n(409100),
  g = n(474936),
  p = n(981631),
  h = n(600383);
let f = function(e) {
  var t, n;
  let {
    isVisible: i,
    isFullscreen: f,
    subscriptionTier: N,
    isMarketingPageV2: b
  } = e, x = null === (t = (0, d.N)()) || void 0 === t ? void 0 : t.subscription_trial, _ = (0, c.Ng)(), E = (0, c.Wp)(_, g.Si.TIER_2) ? g.Si.TIER_2 : void 0, j = (0, o.q_F)({
    transform: i ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!i,
    config: {
      tension: 120,
      friction: 12
    }
  }), O = {
    section: p.jXE.MARKETING_FLOATING_CTA
  }, C = (0, l.ZP)(), S = (0, o.wjy)(C);
  return (0, r.jsx)(a.animated.div, {
    className: s()(h.wrapper, {
      [h.fullscreenWrapper]: f,
      [h.invisible]: !i
    }),
    style: j,
    children: (0, r.jsxs)("div", {
      className: b ? h.innerWrapperV2 : h.innerWrapperV1,
      children: [(0, r.jsx)(m.Z, {
        className: s()(h.button, {
          [h.subButton]: S
        }),
        subscriptionTier: null !== (n = null != N ? N : null == x ? void 0 : x.sku_id) && void 0 !== n ? n : E,
        premiumModalAnalyticsLocation: O,
        isPersistentCTA: !0
      }), (0, r.jsx)(u.Z, {
        className: h.button,
        premiumModalAnalyticsLocation: O
      })]
    })
  })
}