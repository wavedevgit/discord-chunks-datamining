/** Chunk was on web.js **/
/** chunk id: 836332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk526167 = require("./526167.js"),
  Chunk140465 = require("./140465.js"),
  Chunk635921 = require("./635921.jsx"),
  Chunk869783 = require("./869783.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942292 = require("./942292.js"),
  Chunk839526 = require("./839526.js"),
  Chunk4046 = require("./4046.js"),
  Chunk423741 = require("./423741.js");
let y = (e, t) => {
    let {
      className: n,
      isFooterVisible: a,
      isDarkMode: y,
      isReducedMotion: O,
      subscriptionTier: v
    } = e, {
      analyticsLocations: I
    } = (0, c.ZP)(l.Z.PREMIUM_MARKETING_FOOTER_CTA), T = (0, f.Nx)(), S = (0, d.rO)(), A = i.useRef(null), [C, N] = i.useState(false);
    return i.useEffect(() => {
      !a || O || C || null == A.current || A.current.play()
    }, [a, O, C]), (0, r.jsx)(c.Gt, {
      value: I,
      children: (0, r.jsxs)("div", {
        ref: t,
        className: o()(m.container, n),
        children: [(0, r.jsx)(s.Heading, {
          className: m.footerHeader,
          variant: "display-md",
          color: "header-primary",
          children: h.intl.string(h.t.lEw32m)
        }), (0, r.jsx)(_.PK, {
          subscriptionTier: v,
          inOfferExperience: T,
          containerClassName: m.footerCTAContainer,
          isApplicationHome: true,
          isDarkMode: y
        }), (0, r.jsx)("div", {
          className: m.footerArtContainer,
          children: (0, r.jsx)(u.Z, {
            playsInline: true,
            muted: true,
            preload: "auto",
            poster: E.Z,
            className: m.footerArt,
            onEnded: () => {
              N(true)
            },
            ref: A,
            children: (0, r.jsx)("source", {
              src: S ? g.Z : b.Z,
              type: S ? p.m.MP4 : p.m.WEBM
            })
          })
        }), (0, r.jsx)("div", {
          className: m.leftGradient
        }), (0, r.jsx)("div", {
          className: m.rightGradient
        })]
      })
    })
  },
  O = Chunk647438.forwardRef(y)