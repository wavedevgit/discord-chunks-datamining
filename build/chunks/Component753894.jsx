/** Chunk was on web.js **/
/** chunk id: 753894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => C,
  KN: () => v,
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
let v = e => {
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
      className: s()(A.x6, A.Ph, a, {
        [A.Sq]: t && o,
        [A.MF]: o && !c
      }),
      shinyButtonClassName: c ? true : A.PJ,
      subscriptionTier: n,
      hasActivePromotion: true
    }) : (0, r.jsx)(E.A, {
      color: c || !o ? l.XD.BRAND_INVERTED : true,
      className: s()(A.x6, A.Ph, a, {
        [A.Sq]: t && o,
        [A.MF]: o && !c
      }),
      subscriptionTier: n
    }), f = t && o ? null : (0, r.jsx)(g.A, {
      className: s()(A.x6, a),
      color: o ? true : l.XD.WHITE
    });
    return (0, r.jsxs)("div", {
      className: s()(A.UD, i),
      children: [d, " ", f]
    })
  },
  S = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.p, {
      className: A.zd
    }), (0, r.jsx)(f.p, {
      className: A.G
    }), (0, r.jsx)(f.p, {
      className: A.zy
    }), (0, r.jsx)(f.p, {
      className: A.GX
    })]
  }),
  I = (e, t) => {
    let {
      className: n,
      buttonClassName: i,
      subscriptionTier: a,
      isDarkMode: f
    } = e, {
      analyticsLocations: E
    } = (0, d.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), y = (0, m.QQ)(), I = (0, h.ar)(), C = (0, _.cg)(), N = (0, o.bG)([p.A], () => p.A.affinities).length > 0, R = O.intl.string(O.t.YCZldK);
    return (0, r.jsx)(d.f5, {
      value: E,
      children: (0, r.jsxs)("div", {
        ref: t,
        className: s()(A.kL, n, {
          [A.V1]: !I,
          [A.Q4]: !I && N
        }),
        "data-testid": "v2-marketing-page-hero-header",
        children: [(0, r.jsxs)("div", {
          className: I ? A.I6 : A.G1,
          children: [(0, r.jsx)(c.Heading, {
            variant: I ? "display-lg" : "display-md",
            color: "always-white",
            children: R
          }), N ? (0, r.jsx)("div", {
            className: A.DF,
            children: (0, r.jsx)(b.A, {
              textColor: "always-white",
              smallerText: !I
            })
          }) : (0, r.jsx)(T, {}), C || y ? (0, r.jsx)("div", {
            className: A.UD,
            children: (0, r.jsx)(g.A, {
              className: s()(A.x6, i),
              color: l.XD.WHITE
            })
          }) : (0, r.jsx)(v, {
            subscriptionTier: a,
            inOfferExperience: I,
            buttonClassName: i,
            isDarkMode: f
          }), N && (0, r.jsx)(T, {
            variant: "text-md/normal",
            withBottomMargin: false
          })]
        }), !I && (0, r.jsx)(S, {})]
      })
    })
  };

function T(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: n = true,
    isApplicationHome: i
  } = e, a = (0, y.N)();
  return (0, r.jsx)(c.Text, {
    variant: t,
    color: i ? "text-subtle" : "always-white",
    className: s()(A.h_, {
      [A.If]: n,
      [A.jn]: i
    }),
    children: O.intl.format(O.t.kt9wxs, {
      cheapestMonthlyPrice: a
    })
  })
}
let C = Chunk64700.forwardRef(I)