/** Chunk was on web.js **/
/** chunk id: 658137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
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
let R = (e, t) => {
    let {
      className: n,
      buttonClassName: i,
      subscriptionTier: a,
      isDarkMode: R,
      isEligibleForBogoPromotion: P,
      videoRef: D
    } = e, {
      analyticsLocations: x
    } = (0, f.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA), L = (0, g.QQ)(), j = (0, m.ar)(), M = (0, o.bG)([h.A], () => h.A.affinities), k = (0, E.A)(), U = null != k, G = R ? l.XD.WHITE : l.XD.BRAND, V = M.length > 0, F = S.intl.string(S.t.YCZldK), B = (0, _.TM)(), H = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, r.jsx)(f.f5, {
      value: x,
      children: (0, r.jsxs)("div", {
        className: s()(T.kL, T.qY, n),
        ref: t,
        "data-testid": "marketing-page-hero-header",
        children: [(0, r.jsx)("div", {
          className: T.kL,
          children: (0, r.jsxs)("div", {
            className: T.s8,
            children: [j && (0, r.jsx)(A.A, {}), (0, r.jsx)(c.Heading, {
              className: T.WT,
              variant: "display-sm",
              color: "text-strong",
              children: F
            }), U ? (0, r.jsx)(O.A, {
              referrer: k
            }) : V && (0, r.jsx)("div", {
              className: T.kb,
              children: (0, r.jsx)(b.A, {
                textColor: "text-default",
                smallerText: false,
                isApplicationHome: true
              })
            }), L ? (0, r.jsx)("div", {
              className: s()(T.UD, T.$F, {
                [T.In]: !(V || U)
              }),
              children: (0, r.jsx)(y.A, {
                className: s()(T.x6, i),
                color: G
              })
            }) : (0, r.jsx)(v.KN, {
              subscriptionTier: a,
              inOfferExperience: j,
              containerClassName: s()(T.$F, {
                [T.In]: !(V || U)
              }),
              buttonClassName: i,
              isApplicationHome: true,
              isDarkMode: R,
              isEligibleForBogoPromotion: P
            }), (0, r.jsx)(v.U9, {
              variant: "text-sm/normal",
              withBottomMargin: false,
              isApplicationHome: true
            })]
          })
        }), (0, r.jsx)("div", {
          className: T.TT,
          children: (0, r.jsx)(p.A, {
            autoPlay: !H,
            playsInline: true,
            preload: H ? "none" : "auto",
            poster: N.A,
            loop: true,
            className: T.gm,
            ref: D,
            children: (0, r.jsx)("source", {
              src: B ? C.A : w.A,
              type: B ? I.a.MP4 : I.a.WEBM
            })
          })
        })]
      })
    })
  },
  P = Chunk64700.forwardRef(R)