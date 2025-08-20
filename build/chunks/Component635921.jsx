/** Chunk was on web.js **/
/** chunk id: 635921, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PK: () => T,
  ZP: () => N,
  _O: () => C
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk535322 = require("./535322.jsx"),
  Chunk357355 = require("./357355.js"),
  Chunk367074 = require("./367074.js"),
  Chunk140465 = require("./140465.js"),
  Chunk775412 = require("./775412.js"),
  Chunk47280 = require("./47280.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk422034 = require("./422034.jsx"),
  Chunk206127 = require("./206127.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk876544 = require("./876544.js");
let T = e => {
    let {
      inOfferExperience: t,
      subscriptionTier: n,
      containerClassName: i,
      buttonClassName: a,
      isApplicationHome: s,
      isDarkMode: c,
      isEligibleForBogoPromotion: u
    } = e, d = u ? (0, r.jsx)(b.Z, {
      color: c ? l.Tt.BRAND_INVERTED : true,
      className: o()(I.button, I.subButton, a, {
        [I.extendedButton]: t && s,
        [I.whiteSubButton]: s && !c
      }),
      shinyButtonClassName: c ? true : I.tier2Gradient,
      subscriptionTier: n,
      hasActivePromotion: true
    }) : (0, r.jsx)(b.Z, {
      color: c || !s ? l.Tt.BRAND_INVERTED : true,
      className: o()(I.button, I.subButton, a, {
        [I.extendedButton]: t && s,
        [I.whiteSubButton]: s && !c
      }),
      subscriptionTier: n
    }), f = t && s ? null : (0, r.jsx)(E.Z, {
      className: o()(I.button, a),
      color: s ? true : l.Tt.WHITE
    });
    return (0, r.jsxs)("div", {
      className: o()(I.buttonContainer, i),
      children: [d, " ", f]
    })
  },
  S = () => (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk535322.A, {
      className: Chunk876544.settingsSparkleStar1
    }), (0, Chunk951288.jsx)(Chunk535322.A, {
      className: Chunk876544.settingsSparkleStar2
    }), (0, Chunk951288.jsx)(Chunk535322.A, {
      className: Chunk876544.settingsSparkleStar3
    }), (0, Chunk951288.jsx)(Chunk535322.A, {
      className: Chunk876544.settingsSparkleStar4
    })]
  }),
  A = (e, t) => {
    let {
      className: n,
      buttonClassName: i,
      subscriptionTier: a,
      isDarkMode: f
    } = e, {
      analyticsLocations: b
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), O = (0, m._O)(), A = (0, h.Nx)(), N = (0, p.Vi)(), R = (0, s.e7)([_.Z], () => _.Z.affinities).length > 0, P = (0, g.ZP)({
      location: "HeroHeading"
    }) ? v.intl.string(v.t["EW+VIS"]) : v.intl.string(v.t.YCZldH);
    return (0, r.jsx)(d.Gt, {
      value: b,
      children: (0, r.jsxs)("div", {
        ref: t,
        className: o()(I.container, n, {
          [I.settingsContainer]: !A,
          [I.affinityHeight]: !A && R
        }),
        "data-testid": "v2-marketing-page-hero-header",
        children: [(0, r.jsxs)("div", {
          className: A ? I.fullscreenTextContainer : I.settingsTextContainer,
          children: [(0, r.jsx)(c.X6q, {
            variant: A ? "display-lg" : "display-md",
            color: "always-white",
            children: P
          }), R ? (0, r.jsx)("div", {
            className: I.affinityDescription,
            children: (0, r.jsx)(y.Z, {
              textColor: "always-white",
              smallerText: !A
            })
          }) : (0, r.jsx)(C, {}), N || O ? (0, r.jsx)("div", {
            className: I.buttonContainer,
            children: (0, r.jsx)(E.Z, {
              className: o()(I.button, i),
              color: l.Tt.WHITE
            })
          }) : (0, r.jsx)(T, {
            subscriptionTier: a,
            inOfferExperience: A,
            buttonClassName: i,
            isDarkMode: f
          }), R && (0, r.jsx)(C, {
            variant: "text-md/normal",
            withBottomMargin: false
          })]
        }), !A && (0, r.jsx)(S, {})]
      })
    })
  };

function C(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: n = true,
    isApplicationHome: i
  } = e, a = (0, O.$)();
  return (0, r.jsx)(c.Text, {
    variant: t,
    color: i ? "text-secondary" : "always-white",
    className: o()(I.description, {
      [I.descriptionBottomMargin]: n,
      [I.descriptionV2]: i
    }),
    children: v.intl.format(v.t.kt9wxs, {
      cheapestMonthlyPrice: a
    })
  })
}
let N = Chunk647438.forwardRef(A)