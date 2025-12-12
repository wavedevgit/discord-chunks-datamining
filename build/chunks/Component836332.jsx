/** Chunk was on web.js **/
/** chunk id: 836332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let y = (e, t) => {
    let {
      className: n,
      isFooterVisible: o,
      isDarkMode: y,
      isReducedMotion: O,
      subscriptionTier: v
    } = e, {
      analyticsLocations: S
    } = (0, c.ZP)(l.Z.PREMIUM_MARKETING_FOOTER_CTA), I = (0, f.Nx)(), T = (0, d.rO)(), C = i.useRef(null), [A, N] = i.useState(false);
    return i.useEffect(() => {
      !o || O || A || null == C.current || C.current.play()
    }, [o, O, A]), (0, r.jsx)(c.Gt, {
      value: S,
      children: (0, r.jsxs)("div", {
        ref: t,
        className: a()(h.container, n),
        children: [(0, r.jsx)(s.Heading, {
          className: h.footerHeader,
          variant: "display-md",
          color: "text-strong",
          children: m.intl.string(m.t.lEw32m)
        }), (0, r.jsx)(p.PK, {
          subscriptionTier: v,
          inOfferExperience: I,
          containerClassName: h.footerCTAContainer,
          isApplicationHome: true,
          isDarkMode: y
        }), (0, r.jsx)("div", {
          className: h.footerArtContainer,
          children: (0, r.jsx)(u.Z, {
            playsInline: true,
            muted: true,
            preload: "auto",
            poster: E.Z,
            className: h.footerArt,
            onEnded: () => {
              N(true)
            },
            ref: C,
            children: (0, r.jsx)("source", {
              src: T ? g.Z : b.Z,
              type: T ? _.m.MP4 : _.m.WEBM
            })
          })
        }), (0, r.jsx)("div", {
          className: h.leftGradient
        }), (0, r.jsx)("div", {
          className: h.rightGradient
        })]
      })
    })
  },
  O = Chunk473749.forwardRef(y)