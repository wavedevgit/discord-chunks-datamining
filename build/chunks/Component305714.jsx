/** Chunk was on 5606 **/
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
  } = (0, c.Ay)(o.A.PREMIUM_MARKETING_FOOTER_CTA), y = (0, p.ar)(), j = (0, u.TM)(), T = i.useRef(null), [v, S] = i.useState(false);
  return i.useEffect(() => {
    !l || x || v || null == T.current || T.current.play()
  }, [l, x, v]), (0, r.jsx)(c.f5, {
    value: C,
    children: (0, r.jsxs)("div", {
      ref: t,
      className: s()(f.kL, n),
      children: [(0, r.jsx)(a.Heading, {
        className: f.RH,
        variant: "display-md",
        color: "text-strong",
        children: g.intl.string(g.t.lEw32m)
      }), (0, r.jsx)(_.KN, {
        subscriptionTier: O,
        inOfferExperience: y,
        containerClassName: f.Z5,
        isApplicationHome: true,
        isDarkMode: E
      }), (0, r.jsx)("div", {
        className: f.av,
        children: (0, r.jsx)(d.A, {
          playsInline: true,
          muted: true,
          preload: "auto",
          poster: h.A,
          className: f.dV,
          onEnded: () => {
            S(true)
          },
          ref: T,
          children: (0, r.jsx)("source", {
            src: j ? b.A : A.A,
            type: j ? m.a.MP4 : m.a.WEBM
          })
        })
      }), (0, r.jsx)("div", {
        className: f.es
      }), (0, r.jsx)("div", {
        className: f.fF
      })]
    })
  })
})