/** Chunk was on web.js **/
/** chunk id: 753894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => C,
  KN: () => A,
  U9: () => T
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk953143 = require("./953143.jsx"),
  Chunk560138 = require("./560138.js"),
  Chunk40185 = require("./40185.js"),
  Chunk526292 = require("./526292.js"),
  Chunk89366 = require("./89366.js"),
  Chunk194509 = require("./194509.jsx"),
  Chunk396375 = require("./396375.jsx"),
  Chunk224850 = require("./224850.jsx"),
  Chunk552554 = require("./552554.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk413515 = require("./413515.js");
let A = e => {
    let {
      inOfferExperience: t,
      subscriptionTier: n,
      containerClassName: i,
      buttonClassName: a,
      isApplicationHome: o,
      isDarkMode: c,
      isEligibleForBogoPromotion: u
    } = e, d = u ? (0, r.jsx)(E.A, {
      color: c ? l.XD.BRAND_INVERTED : true,
      className: s()(v.x6, v.Ph, a, {
        [v.Sq]: t && o,
        [v.MF]: o && !c
      }),
      shinyButtonClassName: c ? true : v.PJ,
      subscriptionTier: n,
      hasActivePromotion: true
    }) : (0, r.jsx)(E.A, {
      color: c || !o ? l.XD.BRAND_INVERTED : true,
      className: s()(v.x6, v.Ph, a, {
        [v.Sq]: t && o,
        [v.MF]: o && !c
      }),
      subscriptionTier: n
    }), f = t && o ? null : (0, r.jsx)(g.A, {
      className: s()(v.x6, a),
      color: o ? true : l.XD.WHITE
    });
    return (0, r.jsxs)("div", {
      className: s()(v.UD, i),
      children: [d, " ", f]
    })
  },
  I = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.p, {
      className: v.zd
    }), (0, r.jsx)(f.p, {
      className: v.G
    }), (0, r.jsx)(f.p, {
      className: v.zy
    }), (0, r.jsx)(f.p, {
      className: v.GX
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
    } = (0, d.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), b = (0, m.QQ)(), S = (0, h.ar)(), C = (0, _.cg)(), N = (0, o.bG)([p.A], () => p.A.affinities).length > 0, R = O.intl.string(O.t.YCZldK);
    return (0, r.jsx)(d.f5, {
      value: E,
      children: (0, r.jsxs)("div", {
        ref: t,
        className: s()(v.kL, n, {
          [v.V1]: !S,
          [v.Q4]: !S && N
        }),
        "data-testid": "v2-marketing-page-hero-header",
        children: [(0, r.jsxs)("div", {
          className: S ? v.I6 : v.G1,
          children: [(0, r.jsx)(c.Heading, {
            variant: S ? "display-lg" : "display-md",
            color: "always-white",
            children: R
          }), N ? (0, r.jsx)("div", {
            className: v.DF,
            children: (0, r.jsx)(y.A, {
              textColor: "always-white",
              smallerText: !S
            })
          }) : (0, r.jsx)(T, {}), C || b ? (0, r.jsx)("div", {
            className: v.UD,
            children: (0, r.jsx)(g.A, {
              className: s()(v.x6, i),
              color: l.XD.WHITE
            })
          }) : (0, r.jsx)(A, {
            subscriptionTier: a,
            inOfferExperience: S,
            buttonClassName: i,
            isDarkMode: f
          }), N && (0, r.jsx)(T, {
            variant: "text-md/normal",
            withBottomMargin: false
          })]
        }), !S && (0, r.jsx)(I, {})]
      })
    })
  };

function T(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: n = true,
    isApplicationHome: i
  } = e, a = (0, b.N)();
  return (0, r.jsx)(c.Text, {
    variant: t,
    color: i ? "text-subtle" : "always-white",
    className: s()(v.h_, {
      [v.If]: n,
      [v.jn]: i
    }),
    children: O.intl.format(O.t.kt9wxs, {
      cheapestMonthlyPrice: a
    })
  })
}
let C = Chunk64700.forwardRef(S)