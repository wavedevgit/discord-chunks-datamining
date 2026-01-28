/** Chunk was on 60667 **/
/** chunk id: 658137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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
let y = Chunk64700.forwardRef((e, t) => {
  let {
    className: n,
    buttonClassName: i,
    subscriptionTier: l,
    isDarkMode: y,
    isEligibleForBogoPromotion: P,
    videoRef: R
  } = e, {
    analyticsLocations: D
  } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), w = (0, f.QQ)(), L = (0, A.ar)(), M = (0, a.bG)([g.A], () => g.A.affinities), U = (0, h.A)(), G = null != U, k = y ? o.XD.WHITE : o.XD.BRAND, V = M.length > 0, H = I.intl.string(I.t.YCZldK), B = (0, m.TM)(), F = (0, a.bG)([d.A], () => d.A.useReducedMotion);
  return (0, r.jsx)(_.f5, {
    value: D,
    children: (0, r.jsxs)("div", {
      className: s()(S.kL, S.qY, n),
      ref: t,
      "data-testid": "marketing-page-hero-header",
      children: [(0, r.jsx)("div", {
        className: S.kL,
        children: (0, r.jsxs)("div", {
          className: S.s8,
          children: [L && (0, r.jsx)(C.A, {}), (0, r.jsx)(c.Heading, {
            className: S.WT,
            variant: "display-sm",
            color: "text-strong",
            children: H
          }), G ? (0, r.jsx)(x.A, {
            referrer: U
          }) : V && (0, r.jsx)("div", {
            className: S.kb,
            children: (0, r.jsx)(E.A, {
              textColor: "text-default",
              smallerText: false,
              isApplicationHome: true
            })
          }), w ? (0, r.jsx)("div", {
            className: s()(S.UD, S.$F, {
              [S.In]: !(V || G)
            }),
            children: (0, r.jsx)(b.A, {
              className: s()(S.x6, i),
              color: k
            })
          }) : (0, r.jsx)(O.KN, {
            subscriptionTier: l,
            inOfferExperience: L,
            containerClassName: s()(S.$F, {
              [S.In]: !(V || G)
            }),
            buttonClassName: i,
            isApplicationHome: true,
            isDarkMode: y,
            isEligibleForBogoPromotion: P
          }), (0, r.jsx)(O.U9, {
            variant: "text-sm/normal",
            withBottomMargin: false,
            isApplicationHome: true
          })]
        })
      }), (0, r.jsx)("div", {
        className: S.TT,
        children: (0, r.jsx)(p.A, {
          autoPlay: !F,
          playsInline: true,
          preload: F ? "none" : "auto",
          poster: v.A,
          loop: true,
          className: S.gm,
          ref: R,
          children: (0, r.jsx)("source", {
            src: B ? j.A : N.A,
            type: B ? T.a.MP4 : T.a.WEBM
          })
        })
      })]
    })
  })
})