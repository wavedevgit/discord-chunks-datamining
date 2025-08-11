/** Chunk was on 75708 **/
/** chunk id: 635921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PK: () => v,
  ZP: () => I,
  _O: () => T
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk909176 = require("./909176.js");
let v = e => {
    let {
      inOfferExperience: t,
      subscriptionTier: n,
      containerClassName: r,
      buttonClassName: s,
      isApplicationHome: l,
      isDarkMode: c,
      isEligibleForBogoPromotion: d
    } = e, u = d ? (0, i.jsx)(_.Z, {
      color: c ? o.Tt.BRAND_INVERTED : true,
      className: a()(O.button, O.subButton, s, {
        [O.extendedButton]: t && l,
        [O.whiteSubButton]: l && !c
      }),
      shinyButtonClassName: c ? true : O.tier2Gradient,
      subscriptionTier: n,
      hasActivePromotion: true
    }) : (0, i.jsx)(_.Z, {
      color: c || !l ? o.Tt.BRAND_INVERTED : true,
      className: a()(O.button, O.subButton, s, {
        [O.extendedButton]: t && l,
        [O.whiteSubButton]: l && !c
      }),
      subscriptionTier: n
    }), m = t && l ? null : (0, i.jsx)(x.Z, {
      className: a()(O.button, s),
      color: l ? true : o.Tt.WHITE
    });
    return (0, i.jsxs)("div", {
      className: a()(O.buttonContainer, r),
      children: [u, " ", m]
    })
  },
  S = () => (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)(Chunk535322.A, {
      className: Chunk909176.settingsSparkleStar1
    }), (0, Chunk255367.jsx)(Chunk535322.A, {
      className: Chunk909176.settingsSparkleStar2
    }), (0, Chunk255367.jsx)(Chunk535322.A, {
      className: Chunk909176.settingsSparkleStar3
    }), (0, Chunk255367.jsx)(Chunk535322.A, {
      className: Chunk909176.settingsSparkleStar4
    })]
  });

function T(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: n = true,
    isApplicationHome: r
  } = e, s = (0, E.$)();
  return (0, i.jsx)(c.Text, {
    variant: t,
    color: r ? "text-secondary" : "always-white",
    className: a()(O.description, {
      [O.descriptionBottomMargin]: n,
      [O.descriptionV2]: r
    }),
    children: C.intl.format(C.t.kt9wxs, {
      cheapestMonthlyPrice: s
    })
  })
}
let I = Chunk73800.forwardRef((e, t) => {
  let {
    className: n,
    buttonClassName: r,
    subscriptionTier: s,
    isDarkMode: m
  } = e, {
    analyticsLocations: _
  } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), E = (0, f._O)(), I = (0, h.Nx)(), N = (0, g.Vi)(), y = (0, l.e7)([p.Z], () => p.Z.affinities).length > 0, A = (0, b.Z)({
    location: "HeroHeading"
  }) ? C.intl.string(C.t["EW+VIS"]) : C.intl.string(C.t.YCZldH);
  return (0, i.jsx)(u.Gt, {
    value: _,
    children: (0, i.jsxs)("div", {
      ref: t,
      className: a()(O.container, n, {
        [O.settingsContainer]: !I,
        [O.affinityHeight]: !I && y
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, i.jsxs)("div", {
        className: I ? O.fullscreenTextContainer : O.settingsTextContainer,
        children: [(0, i.jsx)(c.X6q, {
          variant: I ? "display-lg" : "display-md",
          color: "always-white",
          children: A
        }), y ? (0, i.jsx)("div", {
          className: O.affinityDescription,
          children: (0, i.jsx)(j.Z, {
            textColor: "always-white",
            smallerText: !I
          })
        }) : (0, i.jsx)(T, {}), N || E ? (0, i.jsx)("div", {
          className: O.buttonContainer,
          children: (0, i.jsx)(x.Z, {
            className: a()(O.button, r),
            color: o.Tt.WHITE
          })
        }) : (0, i.jsx)(v, {
          subscriptionTier: s,
          inOfferExperience: I,
          buttonClassName: r,
          isDarkMode: m
        }), y && (0, i.jsx)(T, {
          variant: "text-md/normal",
          withBottomMargin: false
        })]
      }), !I && (0, i.jsx)(S, {})]
    })
  })
})