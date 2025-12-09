/** Chunk was on web.js **/
/** chunk id: 903250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk526167 = require("./526167.js"),
  Chunk357355 = require("./357355.js"),
  Chunk140465 = require("./140465.js"),
  Chunk775412 = require("./775412.js"),
  Chunk105759 = require("./105759.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk422034 = require("./422034.jsx"),
  Chunk710220 = require("./710220.jsx"),
  Chunk635921 = require("./635921.jsx"),
  Chunk638631 = require("./638631.jsx"),
  Chunk869783 = require("./869783.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk876544 = require("./876544.js"),
  Chunk181960 = require("./181960.js"),
  Chunk313199 = require("./313199.js"),
  Chunk821969 = require("./821969.js");
let R = (e, t) => {
    let {
      className: n,
      buttonClassName: i,
      subscriptionTier: a,
      isDarkMode: R,
      isEligibleForBogoPromotion: D,
      videoRef: w
    } = e, {
      analyticsLocations: x
    } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), L = (0, g._O)(), j = (0, h.Nx)(), M = (0, s.e7)([m.Z], () => m.Z.affinities), k = (0, E.Z)(), U = null != k, G = R ? l.Tt.WHITE : l.Tt.BRAND, Z = M.length > 0, B = T.intl.string(T.t.YCZldK), F = (0, _.rO)(), V = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsx)(f.Gt, {
      value: x,
      children: (0, r.jsxs)("div", {
        className: o()(A.container, A.heroHeadingContainer, n),
        ref: t,
        "data-testid": "marketing-page-hero-header",
        children: [(0, r.jsx)("div", {
          className: A.container,
          children: (0, r.jsxs)("div", {
            className: A.marketingPageTextContainer,
            children: [j && (0, r.jsx)(S.Z, {}), (0, r.jsx)(c.Heading, {
              className: A.marketingPageHeading,
              variant: "display-sm",
              color: "header-primary",
              children: B
            }), U ? (0, r.jsx)(O.Z, {
              referrer: k
            }) : Z && (0, r.jsx)("div", {
              className: A.affinityDescriptionContainer,
              children: (0, r.jsx)(y.Z, {
                textColor: "text-default",
                smallerText: false,
                isApplicationHome: true
              })
            }), L ? (0, r.jsx)("div", {
              className: o()(A.buttonContainer, A.marketingPageCTAContainer, {
                [A.marketingPageCTAMargin]: !(Z || U)
              }),
              children: (0, r.jsx)(b.Z, {
                className: o()(A.button, i),
                color: G
              })
            }) : (0, r.jsx)(v.PK, {
              subscriptionTier: a,
              inOfferExperience: j,
              containerClassName: o()(A.marketingPageCTAContainer, {
                [A.marketingPageCTAMargin]: !(Z || U)
              }),
              buttonClassName: i,
              isApplicationHome: true,
              isDarkMode: R,
              isEligibleForBogoPromotion: D
            }), (0, r.jsx)(v._O, {
              variant: "text-sm/normal",
              withBottomMargin: false,
              isApplicationHome: true
            })]
          })
        }), (0, r.jsx)("div", {
          className: A.heroHeadingV2ArtContainer,
          children: (0, r.jsx)(p.Z, {
            autoPlay: !V,
            playsInline: true,
            preload: V ? "none" : "auto",
            poster: N.Z,
            loop: true,
            className: A.heroHeadingV2Art,
            ref: w,
            children: (0, r.jsx)("source", {
              src: F ? C.Z : P.Z,
              type: F ? I.m.MP4 : I.m.WEBM
            })
          })
        })]
      })
    })
  },
  D = Chunk473749.forwardRef(R)