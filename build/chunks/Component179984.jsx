/** Chunk was on web.js **/
/** chunk id: 179984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => W
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
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk230916 = require("./230916.js"),
  Chunk346497 = require("./346497.js"),
  Chunk382791 = require("./382791.jsx"),
  Chunk21023 = require("./21023.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk17355 = require("./17355.js"),
  Chunk102655 = require("./102655.js"),
  Chunk768236 = require("./768236.js"),
  Chunk314907 = require("./314907.js"),
  Chunk826701 = require("./826701.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Z = () => {
    let e = (0, Chunk346497.W)();
    return (0, Chunk54381.jsx)(Chunk382791.Cy, {
      text: module,
      className: Chunk17355.bogoPillWithSparkles,
      colorOptions: Chunk382791.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  F = () => (0, Chunk54381.jsx)("div", {
    className: Chunk17355.mostPopularPill,
    children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
      className: Chunk17355.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: Chunk388032.intl.string(Chunk388032.t["o/oRJB"])
    })
  }),
  V = e => {
    let t, {
        premiumType: n
      } = e,
      i = (0, d.ZP)();
    t = n === P.PremiumTypes.TIER_0 ? (0, l.wj)(i) ? x : L : (0, l.wj)(i) ? M : k;
    let a = (0, E.Px)(n);
    return (0, r.jsx)("img", {
      src: t,
      className: w.logo,
      alt: a
    })
  },
  H = e => {
    let {
      label: t,
      column1: n,
      column2: i
    } = e;
    return (0, r.jsxs)("tr", {
      className: o()(w.headerRow, w.rowBottomBorder, w.topBorderRadius),
      children: [(0, r.jsx)("th", {
        scope: "col",
        className: w.headerLabelCell,
        children: t
      }), (0, r.jsx)("th", {
        scope: "col",
        className: w.headerCell,
        children: n
      }), (0, r.jsx)("th", {
        scope: "col",
        className: o()(w.headerCell, w.topBorderRadius),
        children: i
      })]
    })
  },
  Y = e => {
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
      className: o()(w.row, {
        [w.wideRow]: c,
        [w.topBorderRadius]: s,
        [w.bottomBorderRadius]: l,
        [w.rowBottomBorder]: a,
        [w.shortRow]: u
      }),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: w.labelCell,
        children: t
      }), (0, r.jsx)("td", {
        className: o()(w.cell, {
          [w.buttonsCell]: c
        }),
        children: n
      }), (0, r.jsx)("td", {
        className: o()(w.cell, {
          [w.topBorderRadius]: s,
          [w.bottomBorderRadius]: l,
          [w.buttonsCell]: c
        }),
        children: i
      })]
    })
  },
  W = e => {
    var t;
    let n, {
        className: a,
        hideCTAs: C = false,
        headingOverride: x,
        hidePill: L = false,
        selectedPlanColumnClassName: M,
        selectedPlanTier: k = P.PremiumTypes.TIER_2
      } = e,
      {
        analyticsLocations: j
      } = (0, _.ZP)(f.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
      G = (0, s.e7)([g.Z], () => g.Z.hasFetchedSubscriptions()),
      W = (0, h.V)(P.nS),
      K = (0, d.ZP)(),
      z = (0, l.ap)(K),
      q = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
      X = (0, E.M5)(q, P.PremiumTypes.TIER_2),
      Q = (0, I.N)(),
      J = null == Q || null == (t = Q.subscription_trial) ? true : t.sku_id,
      $ = (0, y.rT)(),
      ee = (0, v.N)(),
      et = null != ee && (0, A.Wp)(ee, P.Si.TIER_2),
      en = (0, A.Aq)(P.Xh.PREMIUM_MONTH_TIER_2),
      er = "".concat(en, "/").concat((0, E.eP)(P.rV.MONTH)),
      ei = (0, E.CY)(P.Xh.PREMIUM_MONTH_TIER_0),
      ea = (0, E.CY)(P.Xh.PREMIUM_MONTH_TIER_2),
      eo = (0, p.Z)(),
      es = (0, R.n)(ei, ea, et, er, eo.fractionalState),
      el = (0, b.Vi)(),
      {
        enabled: ec
      } = O.T.useExperiment({
        location: "PlanComparisonTable"
      });
    if (!G || !W) return null;
    let eu = ec ? D.intl.string(D.t.XXENra) : D.intl.string(D.t.ED4UVD),
      ed = {
        label: (0, r.jsx)(u.Heading, {
          className: w.__invalid_textColor,
          variant: "heading-lg/extrabold",
          children: eu
        }),
        column1: (0, r.jsx)(V, {
          premiumType: P.PremiumTypes.TIER_0
        }),
        column2: (0, r.jsx)(V, {
          premiumType: P.PremiumTypes.TIER_2
        })
      };
    C ? es.push({
      label: null,
      column1: null,
      column2: null,
      withBottomBorder: false,
      withBottomBorderRadius: true,
      buttonsRow: false,
      shortRow: true
    }) : es.push({
      label: null,
      column1: (0, r.jsxs)(r.Fragment, {
        children: [J === P.Si.TIER_2 || el ? (0, r.jsx)(S.Z, {
          className: w.button,
          subscriptionTier: P.Si.TIER_0,
          showIcon: false,
          look: c.iL.OUTLINED,
          color: z ? c.Tt.BRAND : c.Tt.WHITE
        }) : (0, r.jsx)(S.Z, {
          className: w.button,
          subscriptionTier: P.Si.TIER_0,
          showIcon: false
        }), $ === P.PremiumTypes.TIER_2 || null != J ? null : (0, r.jsx)(T.Z, {
          className: w.button,
          subscriptionTier: P.Si.TIER_0
        })]
      }),
      column2: (0, r.jsxs)(r.Fragment, {
        children: [J === P.Si.TIER_0 ? (0, r.jsx)(S.Z, {
          className: w.button,
          subscriptionTier: P.Si.TIER_2,
          showIcon: false,
          look: c.iL.OUTLINED,
          color: z ? c.Tt.BRAND : c.Tt.WHITE
        }) : (0, r.jsx)(S.Z, {
          className: w.button,
          subscriptionTier: P.Si.TIER_2,
          showIcon: false,
          hasActivePromotion: el
        }), $ === P.PremiumTypes.TIER_0 || null != J ? null : (0, r.jsx)(T.Z, {
          className: w.button,
          subscriptionTier: P.Si.TIER_2
        })]
      }),
      withBottomBorder: false,
      withBottomBorderRadius: true,
      buttonsRow: null == J
    }), n = L ? null : null != J || null != $ ? (0, r.jsx)(N.Cy, {
      text: null != J ? D.intl.string(D.t.IBYG5U) : D.intl.string(D.t.ce1v3V),
      className: w.freeTrialPillWithSparkles,
      colorOptions: J === P.Si.TIER_0 ? z ? N.VE.PREMIUM_TIER_0_GRADIENT_FILL : N.VE.PREMIUM_TIER_0_WHITE_FILL : z ? X ? N.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : N.VE.PREMIUM_TIER_2_WHITE_FILL
    }) : el ? (0, r.jsx)(Z, {}) : (0, r.jsx)(F, {});
    let ef = J === P.Si.TIER_0 || $ === P.PremiumTypes.TIER_0 || k === P.PremiumTypes.TIER_0;
    return (0, r.jsx)(_.Gt, {
      value: j,
      children: (0, r.jsxs)("div", {
        className: o()(w.root, a),
        "data-testid": "v2-marketing-page-comparison-table",
        children: [(0, r.jsx)(u.Heading, {
          className: o()(w.titleText, w.__invalid_textColor),
          variant: "heading-xxl/extrabold",
          children: null != x ? x : D.intl.string(D.t.FIbMh9)
        }), (0, r.jsxs)("div", {
          className: w.tableWrapper,
          children: [(0, r.jsx)("div", {
            className: o()(M, {
              [w.tier0ColumnOuter]: ef,
              [w.tier2ColumnOuter]: !ef
            }),
            children: !ef && n
          }), (0, r.jsxs)("table", {
            className: w.table,
            children: [(0, r.jsx)("thead", {
              children: (0, r.jsx)(H, U({}, ed))
            }), (0, r.jsx)("tbody", {
              children: es.map((e, t) => (0, i.createElement)(Y, B(U({}, e), {
                key: t
              })))
            })]
          })]
        })]
      })
    })
  }