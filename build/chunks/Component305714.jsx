/** Chunk was on 60667 **/
/** chunk id: 305714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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
let E = Chunk64700.forwardRef((e, t) => {
  let {
    className: n,
    isFooterVisible: l,
    isDarkMode: E,
    isReducedMotion: x,
    subscriptionTier: O
  } = e, {
    analyticsLocations: C
  } = (0, c.Ay)(o.A.PREMIUM_MARKETING_FOOTER_CTA), I = (0, _.ar)(), T = (0, u.TM)(), S = i.useRef(null), [j, v] = i.useState(false);
  return i.useEffect(() => {
    !l || x || j || null == S.current || S.current.play()
  }, [l, x, j]), (0, r.jsx)(c.f5, {
    value: C,
    children: (0, r.jsxs)("div", {
      ref: t,
      className: s()(A.kL, n),
      children: [(0, r.jsx)(a.Heading, {
        className: A.RH,
        variant: "display-md",
        color: "text-strong",
        children: g.intl.string(g.t.lEw32m)
      }), (0, r.jsx)(p.KN, {
        subscriptionTier: O,
        inOfferExperience: I,
        containerClassName: A.Z5,
        isApplicationHome: true,
        isDarkMode: E
      }), (0, r.jsx)("div", {
        className: A.av,
        children: (0, r.jsx)(d.A, {
          playsInline: true,
          muted: true,
          preload: "auto",
          poster: h.A,
          className: A.dV,
          onEnded: () => {
            v(true)
          },
          ref: S,
          children: (0, r.jsx)("source", {
            src: T ? f.A : b.A,
            type: T ? m.a.MP4 : m.a.WEBM
          })
        })
      }), (0, r.jsx)("div", {
        className: A.es
      }), (0, r.jsx)("div", {
        className: A.fF
      })]
    })
  })
})