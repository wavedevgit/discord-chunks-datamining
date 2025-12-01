/** Chunk was on web.js **/
/** chunk id: 635921, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PK: () => S,
  ZP: () => C,
  _O: () => A
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let S = e => {
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
  I = () => (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk535322.A, {
      className: Chunk876544.settingsSparkleStar1
    }), (0, Chunk54381.jsx)(Chunk535322.A, {
      className: Chunk876544.settingsSparkleStar2
    }), (0, Chunk54381.jsx)(Chunk535322.A, {
      className: Chunk876544.settingsSparkleStar3
    }), (0, Chunk54381.jsx)(Chunk535322.A, {
      className: Chunk876544.settingsSparkleStar4
    })]
  }),
  T = (e, t) => {
    let {
      className: n,
      buttonClassName: i,
      subscriptionTier: a,
      isDarkMode: f
    } = e, {
      analyticsLocations: E
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), y = (0, h._O)(), T = (0, m.Nx)(), C = (0, _.Vi)(), N = (0, s.e7)([p.Z], () => p.Z.affinities).length > 0, P = O.intl.string(O.t.YCZldK);
    return (0, r.jsx)(d.Gt, {
      value: E,
      children: (0, r.jsxs)("div", {
        ref: t,
        className: o()(v.container, n, {
          [v.settingsContainer]: !T,
          [v.affinityHeight]: !T && N
        }),
        "data-testid": "v2-marketing-page-hero-header",
        children: [(0, r.jsxs)("div", {
          className: T ? v.fullscreenTextContainer : v.settingsTextContainer,
          children: [(0, r.jsx)(c.Heading, {
            variant: T ? "display-lg" : "display-md",
            color: "always-white",
            children: P
          }), N ? (0, r.jsx)("div", {
            className: v.affinityDescription,
            children: (0, r.jsx)(b.Z, {
              textColor: "always-white",
              smallerText: !T
            })
          }) : (0, r.jsx)(A, {}), C || y ? (0, r.jsx)("div", {
            className: v.buttonContainer,
            children: (0, r.jsx)(g.Z, {
              className: o()(v.button, i),
              color: l.Tt.WHITE
            })
          }) : (0, r.jsx)(S, {
            subscriptionTier: a,
            inOfferExperience: T,
            buttonClassName: i,
            isDarkMode: f
          }), N && (0, r.jsx)(A, {
            variant: "text-md/normal",
            withBottomMargin: false
          })]
        }), !T && (0, r.jsx)(I, {})]
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
let C = Chunk473749.forwardRef(T)