/** Chunk was on web.js **/
/** chunk id: 903250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
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
  Chunk904256 = require("./904256.js"),
  Chunk678393 = require("./678393.js"),
  Chunk77874 = require("./77874.js"),
  Chunk36426 = require("./36426.js");
let R = (e, t) => {
    let {
      className: n,
      buttonClassName: i,
      subscriptionTier: a,
      isDarkMode: R,
      isEligibleForBogoPromotion: w,
      videoRef: D
    } = e, {
      analyticsLocations: x
    } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), L = (0, g._O)(), j = (0, h.Nx)(), M = (0, s.e7)([m.Z], () => m.Z.affinities), k = (0, E.Z)(), U = null != k, G = R ? l.Tt.WHITE : l.Tt.BRAND, Z = M.length > 0, F = T.intl.string(T.t.YCZldK), B = (0, _.rO)(), V = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsx)(f.Gt, {
      value: x,
      children: (0, r.jsxs)("div", {
        className: o()(C.container, C.heroHeadingContainer, n),
        ref: t,
        "data-testid": "marketing-page-hero-header",
        children: [(0, r.jsx)("div", {
          className: C.container,
          children: (0, r.jsxs)("div", {
            className: C.marketingPageTextContainer,
            children: [j && (0, r.jsx)(S.Z, {}), (0, r.jsx)(c.Heading, {
              className: C.marketingPageHeading,
              variant: "display-sm",
              color: "text-strong",
              children: F
            }), U ? (0, r.jsx)(O.Z, {
              referrer: k
            }) : Z && (0, r.jsx)("div", {
              className: C.affinityDescriptionContainer,
              children: (0, r.jsx)(y.Z, {
                textColor: "text-default",
                smallerText: false,
                isApplicationHome: true
              })
            }), L ? (0, r.jsx)("div", {
              className: o()(C.buttonContainer, C.marketingPageCTAContainer, {
                [C.marketingPageCTAMargin]: !(Z || U)
              }),
              children: (0, r.jsx)(b.Z, {
                className: o()(C.button, i),
                color: G
              })
            }) : (0, r.jsx)(v.PK, {
              subscriptionTier: a,
              inOfferExperience: j,
              containerClassName: o()(C.marketingPageCTAContainer, {
                [C.marketingPageCTAMargin]: !(Z || U)
              }),
              buttonClassName: i,
              isApplicationHome: true,
              isDarkMode: R,
              isEligibleForBogoPromotion: w
            }), (0, r.jsx)(v._O, {
              variant: "text-sm/normal",
              withBottomMargin: false,
              isApplicationHome: true
            })]
          })
        }), (0, r.jsx)("div", {
          className: C.heroHeadingV2ArtContainer,
          children: (0, r.jsx)(p.Z, {
            autoPlay: !V,
            playsInline: true,
            preload: V ? "none" : "auto",
            poster: N.Z,
            loop: true,
            className: C.heroHeadingV2Art,
            ref: D,
            children: (0, r.jsx)("source", {
              src: B ? A.Z : P.Z,
              type: B ? I.m.MP4 : I.m.WEBM
            })
          })
        })]
      })
    })
  },
  w = Chunk473749.forwardRef(R)