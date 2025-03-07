/** Chunk was on 51724 **/
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(100527),
  c = n(906732),
  d = n(70097),
  u = n(526167),
  m = n(140465),
  p = n(104494),
  g = n(639119),
  h = n(635921),
  f = n(474936),
  x = n(869783),
  b = n(388032),
  N = n(761675),
  _ = n(839526),
  E = n(4046),
  C = n(423741);
let j = e => {
  var t, n;
  let {
    className: s,
    isFooterVisible: j,
    isDarkMode: O,
    isReducedMotion: v
  } = e, {
    analyticsLocations: S
  } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA), T = (0, p.Ng)(), I = (0, p.Wp)(T, f.Si.TIER_2) ? f.Si.TIER_2 : void 0, y = (0, g.N)(), A = (0, m.Nx)(), P = (0, u.rO)(), R = i.useRef(null), [D, Z] = i.useState(!1);
  return i.useEffect(() => {
    !j || v || D || null == R.current || R.current.play()
  }, [j, v, D]), (0, r.jsx)(c.Gt, {
    value: S,
    children: (0, r.jsxs)("div", {
      className: a()(N.container, s),
      children: [(0, r.jsx)(l.X6q, {
        className: N.footerHeader,
        variant: "display-md",
        color: "header-primary",
        children: b.NW.string(b.t.lEw32t)
      }), (0, r.jsx)(h.PK, {
        subscriptionTier: null !== (n = null == y ? void 0 : null === (t = y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : I,
        inOfferExperience: A,
        containerClassName: N.footerCTAContainer,
        isMarketingPageV2Enabled: !0,
        isDarkMode: O
      }), (0, r.jsx)("div", {
        className: N.footerArtContainer,
        children: (0, r.jsx)(d.Z, {
          playsInline: !0,
          preload: "auto",
          poster: E.Z,
          className: N.footerArt,
          onEnded: () => {
            Z(!0)
          },
          ref: R,
          children: (0, r.jsx)("source", {
            src: P ? _.Z : C.Z,
            type: P ? x.m.MP4 : x.m.WEBM
          })
        })
      }), (0, r.jsx)("div", {
        className: N.leftGradient
      }), (0, r.jsx)("div", {
        className: N.rightGradient
      })]
    })
  })
}