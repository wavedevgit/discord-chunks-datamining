/** Chunk was on web.js **/
/** chunk id: 305714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk607470 = require("./607470.jsx"),
  Chunk676279 = require("./676279.js"),
  Chunk526292 = require("./526292.js"),
  Chunk753894 = require("./753894.jsx"),
  Chunk693591 = require("./693591.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk942916 = require("./942916.js"),
  Chunk635736 = require("./635736.js"),
  Chunk917025 = require("./917025.js"),
  Chunk707621 = require("./707621.js");
let b = (e, t) => {
    let {
      className: n,
      isFooterVisible: a,
      isDarkMode: b,
      isReducedMotion: O,
      subscriptionTier: v
    } = e, {
      analyticsLocations: A
    } = (0, c.Ay)(l.A.PREMIUM_MARKETING_FOOTER_CTA), I = (0, f.ar)(), S = (0, d.TM)(), T = i.useRef(null), [C, N] = i.useState(false);
    return i.useEffect(() => {
      !a || O || C || null == T.current || T.current.play()
    }, [a, O, C]), (0, r.jsx)(c.f5, {
      value: A,
      children: (0, r.jsxs)("div", {
        ref: t,
        className: s()(m.kL, n),
        children: [(0, r.jsx)(o.Heading, {
          className: m.RH,
          variant: "display-md",
          color: "text-strong",
          children: h.intl.string(h.t.lEw32m)
        }), (0, r.jsx)(p.KN, {
          subscriptionTier: v,
          inOfferExperience: I,
          containerClassName: m.Z5,
          isApplicationHome: true,
          isDarkMode: b
        }), (0, r.jsx)("div", {
          className: m.av,
          children: (0, r.jsx)(u.A, {
            playsInline: true,
            muted: true,
            preload: "auto",
            poster: E.A,
            className: m.dV,
            onEnded: () => {
              N(true)
            },
            ref: T,
            children: (0, r.jsx)("source", {
              src: S ? g.A : y.A,
              type: S ? _.a.MP4 : _.a.WEBM
            })
          })
        }), (0, r.jsx)("div", {
          className: m.es
        }), (0, r.jsx)("div", {
          className: m.fF
        })]
      })
    })
  },
  O = Chunk64700.forwardRef(b)