/** Chunk was on 5606 **/
/** chunk id: 658137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk607470 = require("./607470.jsx"),
  Chunk676279 = require("./676279.js"),
  Chunk560138 = require("./560138.js"),
  Chunk526292 = require("./526292.js"),
  Chunk89366 = require("./89366.js"),
  Chunk236834 = require("./236834.js"),
  Chunk194509 = require("./194509.jsx"),
  Chunk224850 = require("./224850.jsx"),
  Chunk797255 = require("./797255.jsx"),
  Chunk753894 = require("./753894.jsx"),
  Chunk288351 = require("./288351.jsx"),
  Chunk693591 = require("./693591.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk413515 = require("./413515.js"),
  Chunk182514 = require("./182514.js"),
  Chunk619947 = require("./619947.js"),
  Chunk733907 = require("./733907.js");
let N = Chunk64700.forwardRef((e, t) => {
  let {
    className: n,
    buttonClassName: i,
    subscriptionTier: l,
    isDarkMode: N,
    isEligibleForBogoPromotion: P,
    videoRef: R
  } = e, {
    analyticsLocations: D
  } = (0, p.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), w = (0, b.QQ)(), L = (0, f.ar)(), M = (0, a.bG)([g.A], () => g.A.affinities), G = (0, h.A)(), U = null != G, k = N ? o.XD.WHITE : o.XD.BRAND, H = M.length > 0, B = j.intl.string(j.t.YCZldK), V = (0, m.TM)(), F = (0, a.bG)([d.A], () => d.A.useReducedMotion);
  return (0, r.jsx)(p.f5, {
    value: D,
    children: (0, r.jsxs)("div", {
      className: s()(T.kL, T.qY, n),
      ref: t,
      "data-testid": "marketing-page-hero-header",
      children: [(0, r.jsx)("div", {
        className: T.kL,
        children: (0, r.jsxs)("div", {
          className: T.s8,
          children: [L && (0, r.jsx)(C.A, {}), (0, r.jsx)(c.Heading, {
            className: T.WT,
            variant: "display-sm",
            color: "text-strong",
            children: B
          }), U ? (0, r.jsx)(x.A, {
            referrer: G
          }) : H && (0, r.jsx)("div", {
            className: T.kb,
            children: (0, r.jsx)(E.A, {
              textColor: "text-default",
              smallerText: false,
              isApplicationHome: true
            })
          }), w ? (0, r.jsx)("div", {
            className: s()(T.UD, T.$F, {
              [T.In]: !(H || U)
            }),
            children: (0, r.jsx)(A.A, {
              className: s()(T.x6, i),
              color: k
            })
          }) : (0, r.jsx)(O.KN, {
            subscriptionTier: l,
            inOfferExperience: L,
            containerClassName: s()(T.$F, {
              [T.In]: !(H || U)
            }),
            buttonClassName: i,
            isApplicationHome: true,
            isDarkMode: N,
            isEligibleForBogoPromotion: P
          }), (0, r.jsx)(O.U9, {
            variant: "text-sm/normal",
            withBottomMargin: false,
            isApplicationHome: true
          })]
        })
      }), (0, r.jsx)("div", {
        className: T.TT,
        children: (0, r.jsx)(_.A, {
          autoPlay: !F,
          playsInline: true,
          preload: F ? "none" : "auto",
          poster: S.A,
          loop: true,
          className: T.gm,
          ref: R,
          children: (0, r.jsx)("source", {
            src: V ? v.A : I.A,
            type: V ? y.a.MP4 : y.a.WEBM
          })
        })
      })]
    })
  })
})