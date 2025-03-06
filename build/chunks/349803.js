/** Chunk was on 51724 **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(642128),
  l = n(481060),
  o = n(410030),
  c = n(104494),
  d = n(639119),
  u = n(318747),
  m = n(409100),
  p = n(474936),
  g = n(981631),
  h = n(600383);
let f = function(e) {
  var t, n;
  let {
    isVisible: i,
    isFullscreen: f,
    subscriptionTier: x,
    isMarketingPageV2: b
  } = e, N = null === (t = (0, d.N)()) || void 0 === t ? void 0 : t.subscription_trial, _ = (0, c.Ng)(), E = (0, c.Wp)(_, p.Si.TIER_2) ? p.Si.TIER_2 : void 0, j = (0, l.q_F)({
    transform: i ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!i,
    config: {
      tension: 120,
      friction: 12
    }
  }), C = {
    section: g.jXE.MARKETING_FLOATING_CTA
  }, O = (0, o.ZP)(), v = (0, l.wjy)(O);
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
          [h.subButton]: v
        }),
        subscriptionTier: null !== (n = null != x ? x : null == N ? void 0 : N.sku_id) && void 0 !== n ? n : E,
        premiumModalAnalyticsLocation: C,
        isPersistentCTA: !0
      }), (0, r.jsx)(u.Z, {
        className: h.button,
        premiumModalAnalyticsLocation: C
      })]
    })
  })
}