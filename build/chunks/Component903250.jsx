/** Chunk was on web.js **/
/** chunk id: 903250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk47280 = require("./47280.js"),
  Chunk105759 = require("./105759.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk422034 = require("./422034.jsx"),
  Chunk710220 = require("./710220.jsx"),
  Chunk635921 = require("./635921.jsx"),
  Chunk638631 = require("./638631.jsx"),
  Chunk869783 = require("./869783.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk452761 = require("./452761.js"),
  Chunk181960 = require("./181960.js"),
  Chunk313199 = require("./313199.js"),
  Chunk821969 = require("./821969.js");
let w = (e, t) => {
    let {
      className: n,
      buttonClassName: i,
      subscriptionTier: a,
      isDarkMode: w,
      isEligibleForBogoPromotion: D,
      videoRef: x
    } = e, {
      analyticsLocations: L
    } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), j = (0, g._O)(), M = (0, m.Nx)(), k = (0, s.e7)([h.Z], () => h.Z.affinities), U = (0, b.Z)(), G = null != U, B = w ? l.Tt.WHITE : l.Tt.BRAND, Z = k.length > 0, F = (0, E.ZP)({
      location: "HeroHeading"
    }) ? A.intl.string(A.t["EW+VIS"]) : A.intl.string(A.t.YCZldH), V = (0, p.rO)(), H = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsx)(f.Gt, {
      value: L,
      children: (0, r.jsxs)("div", {
        className: o()(C.container, C.heroHeadingContainer, n),
        ref: t,
        "data-testid": "marketing-page-hero-header",
        children: [(0, r.jsx)("div", {
          className: C.container,
          children: (0, r.jsxs)("div", {
            className: C.marketingPageTextContainer,
            children: [M && (0, r.jsx)(T.Z, {}), (0, r.jsx)(c.X6q, {
              className: C.marketingPageHeading,
              variant: "display-sm",
              color: "header-primary",
              children: F
            }), G ? (0, r.jsx)(v.Z, {
              referrer: U
            }) : Z && (0, r.jsx)("div", {
              className: C.affinityDescriptionContainer,
              children: (0, r.jsx)(O.Z, {
                textColor: "text-default",
                smallerText: false,
                isApplicationHome: true
              })
            }), j ? (0, r.jsx)("div", {
              className: o()(C.buttonContainer, C.marketingPageCTAContainer, {
                [C.marketingPageCTAMargin]: !(Z || G)
              }),
              children: (0, r.jsx)(y.Z, {
                className: o()(C.button, i),
                color: B
              })
            }) : (0, r.jsx)(I.PK, {
              subscriptionTier: a,
              inOfferExperience: M,
              containerClassName: o()(C.marketingPageCTAContainer, {
                [C.marketingPageCTAMargin]: !(Z || G)
              }),
              buttonClassName: i,
              isApplicationHome: true,
              isDarkMode: w,
              isEligibleForBogoPromotion: D
            }), (0, r.jsx)(I._O, {
              variant: "text-sm/normal",
              withBottomMargin: false,
              isApplicationHome: true
            })]
          })
        }), (0, r.jsx)("div", {
          className: C.heroHeadingV2ArtContainer,
          children: (0, r.jsx)(_.Z, {
            autoPlay: !H,
            playsInline: true,
            preload: H ? "none" : "auto",
            poster: R.Z,
            loop: true,
            className: C.heroHeadingV2Art,
            ref: x,
            children: (0, r.jsx)("source", {
              src: V ? N.Z : P.Z,
              type: V ? S.m.MP4 : S.m.WEBM
            })
          })
        })]
      })
    })
  },
  D = Chunk647438.forwardRef(w)