/** Chunk was on 60667 **/
/** chunk id: 753894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => S,
  KN: () => C,
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
let C = e => {
    let {
      inOfferExperience: t,
      subscriptionTier: n,
      containerClassName: i,
      buttonClassName: l,
      isApplicationHome: a,
      isDarkMode: c,
      isEligibleForBogoPromotion: d
    } = e, u = d ? (0, r.jsx)(h.A, {
      color: c ? o.XD.BRAND_INVERTED : true,
      className: s()(O.x6, O.Ph, l, {
        [O.Sq]: t && a,
        [O.MF]: a && !c
      }),
      shinyButtonClassName: c ? true : O.PJ,
      subscriptionTier: n,
      hasActivePromotion: true
    }) : (0, r.jsx)(h.A, {
      color: c || !a ? o.XD.BRAND_INVERTED : true,
      className: s()(O.x6, O.Ph, l, {
        [O.Sq]: t && a,
        [O.MF]: a && !c
      }),
      subscriptionTier: n
    }), _ = t && a ? null : (0, r.jsx)(f.A, {
      className: s()(O.x6, l),
      color: a ? true : o.XD.WHITE
    });
    return (0, r.jsxs)("div", {
      className: s()(O.UD, i),
      children: [u, " ", _]
    })
  },
  I = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.p, {
      className: O.zd
    }), (0, r.jsx)(_.p, {
      className: O.G
    }), (0, r.jsx)(_.p, {
      className: O.zy
    }), (0, r.jsx)(_.p, {
      className: O.GX
    })]
  });

function T(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: n = true,
    isApplicationHome: i
  } = e, l = (0, E.N)();
  return (0, r.jsx)(c.Text, {
    variant: t,
    color: i ? "text-subtle" : "always-white",
    className: s()(O.h_, {
      [O.If]: n,
      [O.jn]: i
    }),
    children: x.intl.format(x.t.kt9wxs, {
      cheapestMonthlyPrice: l
    })
  })
}
let S = Chunk64700.forwardRef((e, t) => {
  let {
    className: n,
    buttonClassName: i,
    subscriptionTier: l,
    isDarkMode: _
  } = e, {
    analyticsLocations: h
  } = (0, u.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA), E = (0, A.QQ)(), S = (0, g.ar)(), j = (0, m.cg)(), v = (0, a.bG)([p.A], () => p.A.affinities).length > 0, N = x.intl.string(x.t.YCZldK);
  return (0, r.jsx)(u.f5, {
    value: h,
    children: (0, r.jsxs)("div", {
      ref: t,
      className: s()(O.kL, n, {
        [O.V1]: !S,
        [O.Q4]: !S && v
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, r.jsxs)("div", {
        className: S ? O.I6 : O.G1,
        children: [(0, r.jsx)(c.Heading, {
          variant: S ? "display-lg" : "display-md",
          color: "always-white",
          children: N
        }), v ? (0, r.jsx)("div", {
          className: O.DF,
          children: (0, r.jsx)(b.A, {
            textColor: "always-white",
            smallerText: !S
          })
        }) : (0, r.jsx)(T, {}), j || E ? (0, r.jsx)("div", {
          className: O.UD,
          children: (0, r.jsx)(f.A, {
            className: s()(O.x6, i),
            color: o.XD.WHITE
          })
        }) : (0, r.jsx)(C, {
          subscriptionTier: l,
          inOfferExperience: S,
          buttonClassName: i,
          isDarkMode: _
        }), v && (0, r.jsx)(T, {
          variant: "text-md/normal",
          withBottomMargin: false
        })]
      }), !S && (0, r.jsx)(I, {})]
    })
  })
})