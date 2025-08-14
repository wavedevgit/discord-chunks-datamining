/** Chunk was on 7384 **/
/** chunk id: 903250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk876544 = require("./876544.js"),
  Chunk181960 = require("./181960.js"),
  Chunk313199 = require("./313199.js"),
  Chunk821969 = require("./821969.js");
let P = Chunk73800.forwardRef((e, t) => {
  let {
    className: n,
    buttonClassName: r,
    subscriptionTier: s,
    isDarkMode: P,
    isEligibleForBogoPromotion: R,
    videoRef: D
  } = e, {
    analyticsLocations: Z
  } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), w = (0, b._O)(), k = (0, f.Nx)(), L = (0, l.e7)([h.Z], () => h.Z.affinities), B = (0, _.Z)(), M = null != B, U = P ? o.Tt.WHITE : o.Tt.BRAND, V = L.length > 0, G = (0, x.ZP)({
    location: "HeroHeading"
  }) ? T.intl.string(T.t["EW+VIS"]) : T.intl.string(T.t.YCZldH), F = (0, g.rO)(), H = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, i.jsx)(m.Gt, {
    value: Z,
    children: (0, i.jsxs)("div", {
      className: a()(I.container, I.heroHeadingContainer, n),
      ref: t,
      "data-testid": "marketing-page-hero-header",
      children: [(0, i.jsx)("div", {
        className: I.container,
        children: (0, i.jsxs)("div", {
          className: I.marketingPageTextContainer,
          children: [k && (0, i.jsx)(v.Z, {}), (0, i.jsx)(c.X6q, {
            className: I.marketingPageHeading,
            variant: "display-sm",
            color: "header-primary",
            children: G
          }), M ? (0, i.jsx)(C.Z, {
            referrer: B
          }) : V && (0, i.jsx)("div", {
            className: I.affinityDescriptionContainer,
            children: (0, i.jsx)(E.Z, {
              textColor: "text-default",
              smallerText: false,
              isApplicationHome: true
            })
          }), w ? (0, i.jsx)("div", {
            className: a()(I.buttonContainer, I.marketingPageCTAContainer, {
              [I.marketingPageCTAMargin]: !(V || M)
            }),
            children: (0, i.jsx)(j.Z, {
              className: a()(I.button, r),
              color: U
            })
          }) : (0, i.jsx)(O.PK, {
            subscriptionTier: s,
            inOfferExperience: k,
            containerClassName: a()(I.marketingPageCTAContainer, {
              [I.marketingPageCTAMargin]: !(V || M)
            }),
            buttonClassName: r,
            isApplicationHome: true,
            isDarkMode: P,
            isEligibleForBogoPromotion: R
          }), (0, i.jsx)(O._O, {
            variant: "text-sm/normal",
            withBottomMargin: false,
            isApplicationHome: true
          })]
        })
      }), (0, i.jsx)("div", {
        className: I.heroHeadingV2ArtContainer,
        children: (0, i.jsx)(p.Z, {
          autoPlay: !H,
          playsInline: true,
          preload: H ? "none" : "auto",
          poster: y.Z,
          loop: true,
          className: I.heroHeadingV2Art,
          ref: D,
          children: (0, i.jsx)("source", {
            src: F ? N.Z : A.Z,
            type: F ? S.m.MP4 : S.m.WEBM
          })
        })
      })]
    })
  })
})