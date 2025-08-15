/** Chunk was on 30202 **/
/** chunk id: 836332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk526167 = require("./526167.js"),
  Chunk140465 = require("./140465.js"),
  Chunk635921 = require("./635921.jsx"),
  Chunk869783 = require("./869783.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk264502 = require("./264502.js"),
  Chunk839526 = require("./839526.js"),
  Chunk4046 = require("./4046.js"),
  Chunk423741 = require("./423741.js");
let j = Chunk73800.forwardRef((e, t) => {
  let {
    className: n,
    isFooterVisible: s,
    isDarkMode: j,
    isReducedMotion: E,
    subscriptionTier: C
  } = e, {
    analyticsLocations: O
  } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA), v = (0, m.Nx)(), S = (0, u.rO)(), T = r.useRef(null), [I, N] = r.useState(false);
  return r.useEffect(() => {
    !s || E || I || null == T.current || T.current.play()
  }, [s, E, I]), (0, i.jsx)(c.Gt, {
    value: O,
    children: (0, i.jsxs)("div", {
      ref: t,
      className: a()(f.container, n),
      children: [(0, i.jsx)(l.X6q, {
        className: f.footerHeader,
        variant: "display-md",
        color: "header-primary",
        children: h.intl.string(h.t.lEw32t)
      }), (0, i.jsx)(p.PK, {
        subscriptionTier: C,
        inOfferExperience: v,
        containerClassName: f.footerCTAContainer,
        isApplicationHome: true,
        isDarkMode: j
      }), (0, i.jsx)("div", {
        className: f.footerArtContainer,
        children: (0, i.jsx)(d.Z, {
          playsInline: true,
          muted: true,
          preload: "auto",
          poster: x.Z,
          className: f.footerArt,
          onEnded: () => {
            N(true)
          },
          ref: T,
          children: (0, i.jsx)("source", {
            src: S ? b.Z : _.Z,
            type: S ? g.m.MP4 : g.m.WEBM
          })
        })
      }), (0, i.jsx)("div", {
        className: f.leftGradient
      }), (0, i.jsx)("div", {
        className: f.rightGradient
      })]
    })
  })
})