/** Chunk was on web.js **/
/** chunk id: 179984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk15640 = require("./15640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk367074 = require("./367074.js"),
  Chunk775412 = require("./775412.js"),
  Chunk46062 = require("./46062.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk863257 = require("./863257.jsx"),
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk230916 = require("./230916.js"),
  Chunk346497 = require("./346497.js"),
  Chunk382791 = require("./382791.jsx"),
  Chunk21023 = require("./21023.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk948295 = require("./948295.js"),
  Chunk102655 = require("./102655.js"),
  Chunk768236 = require("./768236.js"),
  Chunk314907 = require("./314907.js"),
  Chunk826701 = require("./826701.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let B = () => {
    let e = (0, N.W)();
    return (0, r.jsx)(P.Cy, {
      text: e,
      className: x.bogoPillWithSparkles,
      colorOptions: P.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  V = () => (0, r.jsx)("div", {
    className: x.mostPopularPill,
    children: (0, r.jsx)(u.Heading, {
      className: x.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: D.intl.string(D.t["o/oRJB"])
    })
  }),
  H = e => {
    let t, {
        premiumType: n,
        isPremiumGroup: i
      } = e,
      a = (0, d.ZP)();
    if (i)
      if (n === w.PremiumTypes.TIER_0) return (0, r.jsx)(u.Heading, {
        variant: "display-md",
        className: x.textLogo,
        children: D.intl.string(D.t.tUbSDK)
      });
      else return (0, r.jsx)(u.Heading, {
        variant: "display-md",
        className: x.textLogo,
        children: D.intl.string(D.t.Ipxkog)
      });
    t = n === w.PremiumTypes.TIER_0 ? (0, l.wj)(a) ? L : j : (0, l.wj)(a) ? M : k;
    let o = (0, E.Px)(n);
    return (0, r.jsx)("img", {
      src: t,
      className: x.logo,
      alt: o
    })
  },
  Y = e => {
    let {
      label: t,
      column1: n,
      column2: i
    } = e;
    return (0, r.jsxs)("tr", {
      className: o()(x.headerRow, x.rowBottomBorder, x.topBorderRadius),
      children: [(0, r.jsx)("th", {
        scope: "col",
        className: x.headerLabelCell,
        children: t
      }), (0, r.jsx)("th", {
        scope: "col",
        className: x.headerCell,
        children: n
      }), (0, r.jsx)("th", {
        scope: "col",
        className: o()(x.headerCell, x.topBorderRadius),
        children: i
      })]
    })
  },
  W = e => {
    let {
      label: t,
      column1: n,
      column2: i,
      withBottomBorder: a = true,
      withTopBorderRadius: s = false,
      withBottomBorderRadius: l = false,
      buttonsRow: c = false,
      shortRow: u = false
    } = e;
    return (0, r.jsxs)("tr", {
      className: o()(x.row, {
        [x.wideRow]: c,
        [x.topBorderRadius]: s,
        [x.bottomBorderRadius]: l,
        [x.rowBottomBorder]: a,
        [x.shortRow]: u
      }),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: x.labelCell,
        children: t
      }), (0, r.jsx)("td", {
        className: o()(x.cell, {
          [x.buttonsCell]: c
        }),
        children: n
      }), (0, r.jsx)("td", {
        className: o()(x.cell, {
          [x.topBorderRadius]: s,
          [x.bottomBorderRadius]: l,
          [x.buttonsCell]: c
        }),
        children: i
      })]
    })
  },
  K = e => {
    var t;
    let n, {
        className: a,
        hideCTAs: N = false,
        headingOverride: L,
        hidePill: j = false,
        selectedPlanColumnClassName: M,
        selectedPlanTier: k = w.PremiumTypes.TIER_2
      } = e,
      {
        analyticsLocations: U
      } = (0, p.ZP)(f.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
      Z = (0, s.e7)([g.Z], () => g.Z.hasFetchedSubscriptions()),
      K = (0, m.V)(w.nS),
      z = (0, d.ZP)(),
      q = (0, l.ap)(z),
      Q = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
      X = null != Q && Q.isPremiumWithPremiumGroup(),
      J = (0, E.M5)(Q, w.PremiumTypes.TIER_2),
      $ = (0, S.N)(),
      ee = null == $ || null == (t = $.subscription_trial) ? true : t.sku_id,
      et = (0, y.rT)(),
      en = (0, v.N)(),
      er = null != en && (0, A.Wp)(en, w.Si.TIER_2),
      ei = (0, A.Aq)(w.Xh.PREMIUM_MONTH_TIER_2),
      ea = "".concat(ei, "/").concat((0, E.eP)(w.rV.MONTH)),
      eo = (0, E.CY)(w.Xh.PREMIUM_MONTH_TIER_0),
      es = (0, E.CY)(w.Xh.PREMIUM_MONTH_TIER_2),
      el = (0, _.Z)(),
      ec = (0, R.n)(eo, es, er, ea, el.fractionalState),
      eu = (0, b.Vi)(),
      {
        enabled: ed
      } = O.T.useExperiment({
        location: "PlanComparisonTable"
      });
    if (!Z || !K) return null;
    let ef = ed ? D.intl.string(D.t.XXENra) : D.intl.string(D.t.ED4UVD),
      ep = {
        label: (0, r.jsx)(u.Heading, {
          className: x.__invalid_textColor,
          variant: "heading-lg/extrabold",
          children: ef
        }),
        column1: (0, r.jsx)(H, {
          premiumType: w.PremiumTypes.TIER_0,
          isPremiumGroup: X
        }),
        column2: (0, r.jsx)(H, {
          premiumType: w.PremiumTypes.TIER_2,
          isPremiumGroup: X
        })
      };
    N ? ec.push({
      label: null,
      column1: null,
      column2: null,
      withBottomBorder: false,
      withBottomBorderRadius: true,
      buttonsRow: false,
      shortRow: true
    }) : ec.push({
      label: null,
      column1: (0, r.jsxs)(r.Fragment, {
        children: [ee === w.Si.TIER_2 || eu ? (0, r.jsx)(C.Z, {
          className: x.button,
          subscriptionTier: w.Si.TIER_0,
          showIcon: false,
          look: c.iL.OUTLINED,
          color: q ? c.Tt.BRAND : c.Tt.WHITE
        }) : (0, r.jsx)(C.Z, {
          className: x.button,
          subscriptionTier: w.Si.TIER_0,
          showIcon: false
        }), et === w.PremiumTypes.TIER_2 || null != ee ? null : (0, r.jsx)(T.Z, {
          className: x.button,
          subscriptionTier: w.Si.TIER_0
        })]
      }),
      column2: (0, r.jsxs)(r.Fragment, {
        children: [ee === w.Si.TIER_0 ? (0, r.jsx)(C.Z, {
          className: x.button,
          subscriptionTier: w.Si.TIER_2,
          showIcon: false,
          look: c.iL.OUTLINED,
          color: q ? c.Tt.BRAND : c.Tt.WHITE
        }) : (0, r.jsx)(C.Z, {
          className: x.button,
          subscriptionTier: w.Si.TIER_2,
          showIcon: false,
          hasActivePromotion: eu
        }), et === w.PremiumTypes.TIER_0 || null != ee ? null : (0, r.jsx)(T.Z, {
          className: x.button,
          subscriptionTier: w.Si.TIER_2
        })]
      }),
      withBottomBorder: false,
      withBottomBorderRadius: true,
      buttonsRow: null == ee
    }), n = j ? null : null != ee || null != et ? (0, r.jsx)(P.Cy, {
      text: null != ee ? D.intl.string(D.t.IBYG5U) : D.intl.string(D.t.ce1v3V),
      className: x.freeTrialPillWithSparkles,
      colorOptions: ee === w.Si.TIER_0 ? q ? P.VE.PREMIUM_TIER_0_GRADIENT_FILL : P.VE.PREMIUM_TIER_0_WHITE_FILL : q ? J ? P.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : P.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : P.VE.PREMIUM_TIER_2_WHITE_FILL
    }) : eu ? (0, r.jsx)(B, {}) : (0, r.jsx)(V, {});
    let e_ = ee === w.Si.TIER_0 || et === w.PremiumTypes.TIER_0 || k === w.PremiumTypes.TIER_0;
    return (0, r.jsx)(p.Gt, {
      value: U,
      children: (0, r.jsxs)("div", {
        className: o()(x.root, a),
        "data-testid": "v2-marketing-page-comparison-table",
        children: [(0, r.jsx)(u.Heading, {
          className: o()(x.titleText, x.__invalid_textColor),
          variant: "heading-xxl/extrabold",
          children: null != L ? L : D.intl.string(D.t.FIbMh9)
        }), X && (0, r.jsx)(I.Z, {
          premiumGroupRole: Q.premiumGroupRole,
          className: x.premiumGroupCard
        }), (0, r.jsxs)("div", {
          className: x.tableWrapper,
          children: [(0, r.jsx)("div", {
            className: o()(M, {
              [x.tier0ColumnOuter]: e_,
              [x.tier2ColumnOuter]: !e_ && !X
            }),
            children: !e_ && n
          }), (0, r.jsxs)("table", {
            className: x.table,
            children: [(0, r.jsx)("thead", {
              children: (0, r.jsx)(Y, G({}, ep))
            }), (0, r.jsx)("tbody", {
              children: ec.map((e, t) => (0, i.createElement)(W, F(G({}, e), {
                key: t
              })))
            })]
          })]
        })]
      })
    })
  }