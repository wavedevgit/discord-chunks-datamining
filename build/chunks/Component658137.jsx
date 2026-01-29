/** Chunk was on 2827 **/
/** chunk id: 658137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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
let v = Chunk64700.forwardRef((e, t) => {
  let {
    className: n,
    buttonClassName: i,
    subscriptionTier: l,
    isDarkMode: v,
    isEligibleForBogoPromotion: P,
    videoRef: R
  } = e, {
    analyticsLocations: D
  } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), L = (0, f.QQ)(), w = (0, A.ar)(), M = (0, a.bG)([g.A], () => g.A.affinities), G = (0, b.A)(), U = null != G, k = v ? o.XD.WHITE : o.XD.BRAND, B = M.length > 0, H = T.intl.string(T.t.YCZldK), V = (0, m.TM)(), F = (0, a.bG)([d.A], () => d.A.useReducedMotion);
  return (0, r.jsx)(_.f5, {
    value: D,
    children: (0, r.jsxs)("div", {
      className: s()(I.kL, I.qY, n),
      ref: t,
      "data-testid": "marketing-page-hero-header",
      children: [(0, r.jsx)("div", {
        className: I.kL,
        children: (0, r.jsxs)("div", {
          className: I.s8,
          children: [w && (0, r.jsx)(x.A, {}), (0, r.jsx)(c.Heading, {
            className: I.WT,
            variant: "display-sm",
            color: "text-strong",
            children: H
          }), U ? (0, r.jsx)(O.A, {
            referrer: G
          }) : B && (0, r.jsx)("div", {
            className: I.kb,
            children: (0, r.jsx)(E.A, {
              textColor: "text-default",
              smallerText: false,
              isApplicationHome: true
            })
          }), L ? (0, r.jsx)("div", {
            className: s()(I.UD, I.$F, {
              [I.In]: !(B || U)
            }),
            children: (0, r.jsx)(h.A, {
              className: s()(I.x6, i),
              color: k
            })
          }) : (0, r.jsx)(C.KN, {
            subscriptionTier: l,
            inOfferExperience: w,
            containerClassName: s()(I.$F, {
              [I.In]: !(B || U)
            }),
            buttonClassName: i,
            isApplicationHome: true,
            isDarkMode: v,
            isEligibleForBogoPromotion: P
          }), (0, r.jsx)(C.U9, {
            variant: "text-sm/normal",
            withBottomMargin: false,
            isApplicationHome: true
          })]
        })
      }), (0, r.jsx)("div", {
        className: I.TT,
        children: (0, r.jsx)(p.A, {
          autoPlay: !F,
          playsInline: true,
          preload: F ? "none" : "auto",
          poster: N.A,
          loop: true,
          className: I.gm,
          ref: R,
          children: (0, r.jsx)("source", {
            src: V ? y.A : j.A,
            type: V ? S.a.MP4 : S.a.WEBM
          })
        })
      })]
    })
  })
})