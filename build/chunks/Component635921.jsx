/** Chunk was on web.js **/
/** chunk id: 635921, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PK: () => I,
  ZP: () => C,
  _O: () => A
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
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk422034 = require("./422034.jsx"),
  Chunk206127 = require("./206127.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk876544 = require("./876544.js");
let I = e => {
    let {
      inOfferExperience: t,
      subscriptionTier: n,
      containerClassName: i,
      buttonClassName: a,
      isApplicationHome: s,
      isDarkMode: c,
      isEligibleForBogoPromotion: u
    } = e, d = u ? (0, r.jsx)(E.Z, {
      color: c ? l.Tt.BRAND_INVERTED : true,
      className: o()(v.button, v.subButton, a, {
        [v.extendedButton]: t && s,
        [v.whiteSubButton]: s && !c
      }),
      shinyButtonClassName: c ? true : v.tier2Gradient,
      subscriptionTier: n,
      hasActivePromotion: true
    }) : (0, r.jsx)(E.Z, {
      color: c || !s ? l.Tt.BRAND_INVERTED : true,
      className: o()(v.button, v.subButton, a, {
        [v.extendedButton]: t && s,
        [v.whiteSubButton]: s && !c
      }),
      subscriptionTier: n
    }), f = t && s ? null : (0, r.jsx)(g.Z, {
      className: o()(v.button, a),
      color: s ? true : l.Tt.WHITE
    });
    return (0, r.jsxs)("div", {
      className: o()(v.buttonContainer, i),
      children: [d, " ", f]
    })
  },
  T = () => (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
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
  S = (e, t) => {
    let {
      className: n,
      buttonClassName: i,
      subscriptionTier: a,
      isDarkMode: f
    } = e, {
      analyticsLocations: E
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), y = (0, m._O)(), S = (0, h.Nx)(), C = (0, p.Vi)(), N = (0, s.e7)([_.Z], () => _.Z.affinities).length > 0, R = O.intl.string(O.t.YCZldK);
    return (0, r.jsx)(d.Gt, {
      value: E,
      children: (0, r.jsxs)("div", {
        ref: t,
        className: o()(v.container, n, {
          [v.settingsContainer]: !S,
          [v.affinityHeight]: !S && N
        }),
        "data-testid": "v2-marketing-page-hero-header",
        children: [(0, r.jsxs)("div", {
          className: S ? v.fullscreenTextContainer : v.settingsTextContainer,
          children: [(0, r.jsx)(c.Heading, {
            variant: S ? "display-lg" : "display-md",
            color: "always-white",
            children: R
          }), N ? (0, r.jsx)("div", {
            className: v.affinityDescription,
            children: (0, r.jsx)(b.Z, {
              textColor: "always-white",
              smallerText: !S
            })
          }) : (0, r.jsx)(A, {}), C || y ? (0, r.jsx)("div", {
            className: v.buttonContainer,
            children: (0, r.jsx)(g.Z, {
              className: o()(v.button, i),
              color: l.Tt.WHITE
            })
          }) : (0, r.jsx)(I, {
            subscriptionTier: a,
            inOfferExperience: S,
            buttonClassName: i,
            isDarkMode: f
          }), N && (0, r.jsx)(A, {
            variant: "text-md/normal",
            withBottomMargin: false
          })]
        }), !S && (0, r.jsx)(T, {})]
      })
    })
  };

function A(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: n = true,
    isApplicationHome: i
  } = e, a = (0, y.$)();
  return (0, r.jsx)(c.Text, {
    variant: t,
    color: i ? "text-secondary" : "always-white",
    className: o()(v.description, {
      [v.descriptionBottomMargin]: n,
      [v.descriptionV2]: i
    }),
    children: O.intl.format(O.t.kt9wxs, {
      cheapestMonthlyPrice: a
    })
  })
}
let C = Chunk647438.forwardRef(S)