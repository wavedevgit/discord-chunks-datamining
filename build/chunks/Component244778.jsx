/** Chunk was on 60667 **/
/** chunk id: 244778, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Y
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk160946 = require("./160946.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk40185 = require("./40185.js"),
  Chunk89366 = require("./89366.js"),
  Chunk411268 = require("./411268.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk863156 = require("./863156.jsx"),
  Chunk194509 = require("./194509.jsx"),
  Chunk396375 = require("./396375.jsx"),
  Chunk511484 = require("./511484.js"),
  Chunk231265 = require("./231265.js"),
  Chunk795269 = require("./795269.jsx"),
  Chunk38720 = require("./38720.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk562628 = require("./562628.js"),
  Chunk196093 = require("./196093.js"),
  Chunk979653 = require("./979653.js"),
  Chunk255631 = require("./255631.js"),
  Chunk193023 = require("./193023.js");

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let k = () => {
    let e = (0, v._)();
    return (0, r.jsx)(N.ir, {
      text: e,
      className: D.QR,
      colorOptions: N.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  V = () => (0, r.jsx)("div", {
    className: D.Wm,
    children: (0, r.jsx)(d.Heading, {
      className: D.uC,
      variant: "heading-deprecated-12/extrabold",
      children: R.intl.string(R.t["o/oRJB"])
    })
  }),
  H = e => {
    let t, {
        premiumType: n,
        isPremiumGroup: i
      } = e,
      l = (0, u.Ay)();
    if (i)
      if (n === P.PremiumTypes.TIER_0) return (0, r.jsx)(d.Heading, {
        variant: "display-md",
        className: D.dW,
        children: R.intl.string(R.t.tUbSDK)
      });
      else return (0, r.jsx)(d.Heading, {
        variant: "display-md",
        className: D.dW,
        children: R.intl.string(R.t.Ipxkog)
      });
    t = n === P.PremiumTypes.TIER_0 ? (0, o.Mw)(l) ? w : L : (0, o.Mw)(l) ? M : U;
    let s = (0, h.Dd)(n);
    return (0, r.jsx)("img", {
      src: t,
      className: D.wm,
      alt: s
    })
  },
  B = e => {
    let {
      label: t,
      column1: n,
      column2: i
    } = e;
    return (0, r.jsxs)("tr", {
      className: s()(D.U1, D.YI, D.Y9),
      children: [(0, r.jsx)("th", {
        scope: "col",
        className: D.Cr,
        children: t
      }), (0, r.jsx)("th", {
        scope: "col",
        className: D.e4,
        children: n
      }), (0, r.jsx)("th", {
        scope: "col",
        className: s()(D.e4, D.Y9),
        children: i
      })]
    })
  },
  F = e => {
    let {
      label: t,
      column1: n,
      column2: i,
      withBottomBorder: l = true,
      withTopBorderRadius: a = false,
      withBottomBorderRadius: o = false,
      buttonsRow: c = false,
      shortRow: d = false
    } = e;
    return (0, r.jsxs)("tr", {
      className: s()(D.nM, {
        [D.EE]: c,
        [D.Y9]: a,
        [D.kS]: o,
        [D.YI]: l,
        [D.vs]: d
      }),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: D.nx,
        children: t
      }), (0, r.jsx)("td", {
        className: s()(D.Hn, {
          [D.SD]: c
        }),
        children: n
      }), (0, r.jsx)("td", {
        className: s()(D.Hn, {
          [D.Y9]: a,
          [D.kS]: o,
          [D.SD]: c
        }),
        children: i
      })]
    })
  },
  Y = e => {
    var t;
    let n, {
        className: l,
        hideCTAs: v = false,
        headingOverride: w,
        hidePill: L = false,
        selectedPlanColumnClassName: M,
        selectedPlanTier: U = P.PremiumTypes.TIER_2
      } = e,
      {
        analyticsLocations: Y
      } = (0, p.Ay)(_.A.PREMIUM_MARKETING_PLAN_COMPARISON),
      W = (0, a.bG)([f.A], () => f.A.hasFetchedSubscriptions()),
      z = (0, g.Y)(P.T7),
      K = (0, u.Ay)(),
      Z = (0, o.qB)(K),
      X = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
      q = null != X && X.isPremiumWithPremiumGroup(),
      J = (0, h.YE)(X, P.PremiumTypes.TIER_2),
      Q = (0, C.V)(),
      $ = null == Q || null == (t = Q.subscription_trial) ? true : t.sku_id,
      ee = (0, E.Us)(),
      et = (0, O.O)(),
      en = null != et && (0, j.U9)(et, P.pe.TIER_2),
      er = (0, j.N1)(P.gD.PREMIUM_MONTH_TIER_2),
      ei = "".concat(er, "/").concat((0, h.FJ)(P.WT.MONTH)),
      el = (0, h.JM)(P.gD.PREMIUM_MONTH_TIER_0),
      es = (0, h.JM)(P.gD.PREMIUM_MONTH_TIER_2),
      ea = (0, m.A)(),
      eo = (0, y.R)(el, es, en, ei, ea.fractionalState),
      ec = (0, b.cg)(),
      {
        enabled: ed
      } = x.K.useExperiment({
        location: "PlanComparisonTable"
      });
    if (!W || !z) return null;
    let eu = ed ? R.intl.string(R.t.XXENra) : R.intl.string(R.t.ED4UVD),
      e_ = {
        label: (0, r.jsx)(d.Heading, {
          className: D.__invalid_textColor,
          variant: "heading-lg/extrabold",
          children: eu
        }),
        column1: (0, r.jsx)(H, {
          premiumType: P.PremiumTypes.TIER_0,
          isPremiumGroup: q
        }),
        column2: (0, r.jsx)(H, {
          premiumType: P.PremiumTypes.TIER_2,
          isPremiumGroup: q
        })
      };
    v ? eo.push({
      label: null,
      column1: null,
      column2: null,
      withBottomBorder: false,
      withBottomBorderRadius: true,
      buttonsRow: false,
      shortRow: true
    }) : eo.push({
      label: null,
      column1: (0, r.jsxs)(r.Fragment, {
        children: [$ === P.pe.TIER_2 || ec ? (0, r.jsx)(S.A, {
          className: D.x6,
          subscriptionTier: P.pe.TIER_0,
          showIcon: false,
          look: c.pR.OUTLINED,
          color: Z ? c.XD.BRAND : c.XD.WHITE
        }) : (0, r.jsx)(S.A, {
          className: D.x6,
          subscriptionTier: P.pe.TIER_0,
          showIcon: false
        }), ee === P.PremiumTypes.TIER_2 || null != $ ? null : (0, r.jsx)(I.A, {
          className: D.x6,
          subscriptionTier: P.pe.TIER_0
        })]
      }),
      column2: (0, r.jsxs)(r.Fragment, {
        children: [$ === P.pe.TIER_0 ? (0, r.jsx)(S.A, {
          className: D.x6,
          subscriptionTier: P.pe.TIER_2,
          showIcon: false,
          look: c.pR.OUTLINED,
          color: Z ? c.XD.BRAND : c.XD.WHITE
        }) : (0, r.jsx)(S.A, {
          className: D.x6,
          subscriptionTier: P.pe.TIER_2,
          showIcon: false,
          hasActivePromotion: ec
        }), ee === P.PremiumTypes.TIER_0 || null != $ ? null : (0, r.jsx)(I.A, {
          className: D.x6,
          subscriptionTier: P.pe.TIER_2
        })]
      }),
      withBottomBorder: false,
      withBottomBorderRadius: true,
      buttonsRow: null == $
    }), n = L ? null : null != $ || null != ee ? (0, r.jsx)(N.ir, {
      text: null != $ ? R.intl.string(R.t.IBYG5U) : R.intl.string(R.t.ce1v3V),
      className: D.ls,
      colorOptions: $ === P.pe.TIER_0 ? Z ? N.at.PREMIUM_TIER_0_GRADIENT_FILL : N.at.PREMIUM_TIER_0_WHITE_FILL : Z ? J ? N.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL : N.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL : N.at.PREMIUM_TIER_2_WHITE_FILL
    }) : ec ? (0, r.jsx)(k, {}) : (0, r.jsx)(V, {});
    let ep = $ === P.pe.TIER_0 || ee === P.PremiumTypes.TIER_0 || U === P.PremiumTypes.TIER_0;
    return (0, r.jsx)(p.f5, {
      value: Y,
      children: (0, r.jsxs)("div", {
        className: s()(D.zr, l),
        "data-testid": "v2-marketing-page-comparison-table",
        children: [(0, r.jsx)(d.Heading, {
          className: s()(D.Qw, D.__invalid_textColor),
          variant: "heading-xxl/extrabold",
          children: null != w ? w : R.intl.string(R.t.FIbMh9)
        }), q && (0, r.jsx)(T.A, {
          premiumGroupRole: X.premiumGroupRole,
          className: D.vg
        }), (0, r.jsxs)("div", {
          className: D.wY,
          children: [(0, r.jsx)("div", {
            className: s()(M, {
              [D.A9]: ep,
              [D.ce]: !ep && !q
            }),
            children: !ep && n
          }), (0, r.jsxs)("table", {
            className: D.tp,
            children: [(0, r.jsx)("thead", {
              children: (0, r.jsx)(B, G({}, e_))
            }), (0, r.jsx)("tbody", {
              children: eo.map((e, t) => {
                var n, r;
                return (0, i.createElement)(F, (n = G({}, e), r = r = {
                  key: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(r)).forEach(function(e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n))
              })
            })]
          })]
        })]
      })
    })
  }