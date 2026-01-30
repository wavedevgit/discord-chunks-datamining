/** Chunk was on 78376 **/
/** chunk id: 753894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => I,
  KN: () => x,
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
let x = e => {
    let {
      inOfferExperience: t,
      subscriptionTier: n,
      containerClassName: i,
      buttonClassName: l,
      isApplicationHome: a,
      isDarkMode: c,
      isEligibleForBogoPromotion: d
    } = e, u = d ? (0, r.jsx)(b.A, {
      color: c ? o.XD.BRAND_INVERTED : true,
      className: s()(C.x6, C.Ph, l, {
        [C.Sq]: t && a,
        [C.MF]: a && !c
      }),
      shinyButtonClassName: c ? true : C.PJ,
      subscriptionTier: n,
      hasActivePromotion: true
    }) : (0, r.jsx)(b.A, {
      color: c || !a ? o.XD.BRAND_INVERTED : true,
      className: s()(C.x6, C.Ph, l, {
        [C.Sq]: t && a,
        [C.MF]: a && !c
      }),
      subscriptionTier: n
    }), _ = t && a ? null : (0, r.jsx)(f.A, {
      className: s()(C.x6, l),
      color: a ? true : o.XD.WHITE
    });
    return (0, r.jsxs)("div", {
      className: s()(C.UD, i),
      children: [u, " ", _]
    })
  },
  S = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.p, {
      className: C.zd
    }), (0, r.jsx)(_.p, {
      className: C.G
    }), (0, r.jsx)(_.p, {
      className: C.zy
    }), (0, r.jsx)(_.p, {
      className: C.GX
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
    className: s()(C.h_, {
      [C.If]: n,
      [C.jn]: i
    }),
    children: O.intl.format(O.t.kt9wxs, {
      cheapestMonthlyPrice: l
    })
  })
}
let I = Chunk64700.forwardRef((e, t) => {
  let {
    className: n,
    buttonClassName: i,
    subscriptionTier: l,
    isDarkMode: _
  } = e, {
    analyticsLocations: b
  } = (0, u.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA), E = (0, A.QQ)(), I = (0, g.ar)(), y = (0, m.cg)(), N = (0, a.bG)([p.A], () => p.A.affinities).length > 0, j = O.intl.string(O.t.YCZldK);
  return (0, r.jsx)(u.f5, {
    value: b,
    children: (0, r.jsxs)("div", {
      ref: t,
      className: s()(C.kL, n, {
        [C.V1]: !I,
        [C.Q4]: !I && N
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, r.jsxs)("div", {
        className: I ? C.I6 : C.G1,
        children: [(0, r.jsx)(c.Heading, {
          variant: I ? "display-lg" : "display-md",
          color: "always-white",
          children: j
        }), N ? (0, r.jsx)("div", {
          className: C.DF,
          children: (0, r.jsx)(h.A, {
            textColor: "always-white",
            smallerText: !I
          })
        }) : (0, r.jsx)(T, {}), y || E ? (0, r.jsx)("div", {
          className: C.UD,
          children: (0, r.jsx)(f.A, {
            className: s()(C.x6, i),
            color: o.XD.WHITE
          })
        }) : (0, r.jsx)(x, {
          subscriptionTier: l,
          inOfferExperience: I,
          buttonClassName: i,
          isDarkMode: _
        }), N && (0, r.jsx)(T, {
          variant: "text-md/normal",
          withBottomMargin: false
        })]
      }), !I && (0, r.jsx)(S, {})]
    })
  })
})