/** Chunk was on web.js **/
/** chunk id: 8231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk15640 = require("./15640.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk230916 = require("./230916.js"),
  Chunk694338 = require("./694338.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk893296 = require("./893296.js"),
  Chunk102655 = require("./102655.js"),
  Chunk768236 = require("./768236.js"),
  Chunk314907 = require("./314907.js"),
  Chunk826701 = require("./826701.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = () => (0, Chunk951288.jsx)("div", {
    className: Chunk893296.comparisonTablePill,
    children: (0, Chunk951288.jsx)(Chunk481060.Heading, {
      className: Chunk893296.mostPopularText,
      variant: "text-xs/bold",
      children: Chunk388032.intl.string(Chunk388032.t.TR2B4T)
    })
  }),
  D = () => (0, Chunk951288.jsx)("div", {
    className: Chunk893296.comparisonTablePill,
    children: (0, Chunk951288.jsx)(Chunk481060.Heading, {
      className: Chunk893296.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: Chunk388032.intl.string(Chunk388032.t.IBYG5U)
    })
  }),
  L = e => {
    let {
      text: t,
      badge: n,
      variant: i
    } = e;
    return (0, r.jsxs)(c.Text, {
      color: "none",
      variant: null != i ? i : "text-md/medium",
      className: v.rowLabelText,
      children: [t, null != n && (0, r.jsxs)(r.Fragment, {
        children: [" ", n]
      })]
    })
  },
  x = e => {
    let {
      isIncluded: t,
      isTier0: n
    } = e;
    return t ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: n ? v.basicCheckMark : v.premiumCheckMark,
        "aria-hidden": true
      }), (0, r.jsx)(c.nn4, {
        children: O.intl.string(O.t["tq+6t/"])
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: v.closeIcon,
        "aria-hidden": true
      }), (0, r.jsx)(c.nn4, {
        children: O.intl.string(O.t.l4qZrp)
      })]
    })
  },
  M = e => {
    let {
      label: t,
      tier0ColumnData: n,
      tier2ColumnData: i,
      withBottomMargin: a
    } = e;
    return (0, r.jsxs)("tr", {
      className: o()(v.row, v.rowBottomBorder, {
        [v.bottomMargin]: a
      }),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: v.labelCell,
        children: (0, r.jsx)(L, {
          text: t
        })
      }), (0, r.jsx)("td", {
        className: v.cell,
        children: null != n.text ? (0, r.jsx)(L, {
          text: n.text
        }) : (0, r.jsx)(x, {
          isIncluded: !!n.includes,
          isTier0: true
        })
      }), (0, r.jsx)("td", {
        className: v.cell,
        children: null != i.text ? (0, r.jsx)(L, {
          text: i.text
        }) : (0, r.jsx)(x, {
          isIncluded: !!i.includes
        })
      })]
    })
  },
  k = e => {
    let {
      title: t,
      rows: n
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("tr", {
        className: v.row,
        children: [(0, r.jsx)("th", {
          scope: "row",
          className: v.labelCell,
          children: (0, r.jsx)(L, {
            text: t,
            variant: "text-lg/bold"
          })
        }), (0, r.jsx)("td", {}), (0, r.jsx)("td", {})]
      }), n.map((e, t) => (0, r.jsx)(M, P(N({}, e), {
        withBottomMargin: t === n.length - 1
      }), e.id))]
    })
  },
  j = e => {
    let t, {
        premiumType: n
      } = e,
      i = (0, u.ZP)();
    t = n === y.PremiumTypes.TIER_0 ? (0, l.wj)(i) ? I : T : (0, l.wj)(i) ? S : A;
    let a = (0, h.Px)(n);
    return (0, r.jsx)("img", {
      src: t,
      className: v.logo,
      alt: a
    })
  },
  U = () => (0, Chunk951288.jsx)("thead", {
    children: (0, Chunk951288.jsxs)("tr", {
      className: o()(Chunk893296.headerRow, Chunk893296.topBorderRadius),
      children: [(0, Chunk951288.jsx)("th", {
        scope: "col",
        className: Chunk893296.headerLabelCell,
        children: (0, Chunk951288.jsx)(Chunk481060.Heading, {
          className: Chunk893296.__invalid_textColor,
          variant: "heading-xl/semibold",
          children: Chunk388032.intl.string(Chunk388032.t.XXENra)
        })
      }), (0, Chunk951288.jsx)("th", {
        scope: "col",
        className: Chunk893296.headerCell,
        children: (0, Chunk951288.jsx)(j, {
          premiumType: Chunk474936.PremiumTypes.TIER_0
        })
      }), (0, Chunk951288.jsx)("th", {
        scope: "col",
        className: o()(Chunk893296.headerCell, Chunk893296.topBorderRadius),
        children: (0, Chunk951288.jsx)(j, {
          premiumType: Chunk474936.PremiumTypes.TIER_2
        })
      })]
    })
  }),
  G = e => {
    let {
      tier0MonthlyPrice: t,
      tier2MonthlyPrice: n,
      shouldUseDiscountPrice: i,
      tier2DiscountedPriceString: a
    } = e;
    return (0, r.jsxs)("tr", {
      className: o()(v.row, v.rowBottomBorder, v.bottomMargin),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: v.labelCell,
        children: (0, r.jsx)(L, {
          text: O.intl.string(O.t["09yRK3"]),
          variant: "text-lg/bold"
        })
      }), (0, r.jsx)("td", {
        className: v.cell,
        children: (0, r.jsx)(L, {
          text: h.ZP.formatPriceString(t, y.rV.MONTH)
        })
      }), (0, r.jsx)("td", {
        className: v.cell,
        children: (0, r.jsx)(L, {
          text: i ? a : h.ZP.formatPriceString(n, y.rV.MONTH)
        })
      })]
    })
  },
  B = e => {
    var t;
    let n, {
        className: a,
        hidePill: l = false,
        selectedPlanColumnClassName: c,
        selectedPlanTier: u = y.PremiumTypes.TIER_2
      } = e,
      {
        analyticsLocations: O
      } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
      I = (0, s.e7)([p.Z], () => p.Z.hasFetchedSubscriptions()),
      T = (0, _.V)(y.nS),
      S = (0, g.N)(),
      A = null == S || null == (t = S.subscription_trial) ? true : t.sku_id,
      C = (0, m.Ng)(),
      R = null != C && (0, m.Wp)(C, y.Si.TIER_2),
      L = (0, E.Aq)(y.Xh.PREMIUM_MONTH_TIER_2),
      x = "".concat(L, "/").concat((0, h.eP)(y.rV.MONTH)),
      M = (0, h.CY)(y.Xh.PREMIUM_MONTH_TIER_0),
      j = (0, h.CY)(y.Xh.PREMIUM_MONTH_TIER_2),
      B = (0, b.e)();
    if (!I || !T) return null;
    n = l ? null : null != S ? (0, r.jsx)(D, {}) : (0, r.jsx)(w, {});
    let Z = A === y.Si.TIER_0 || u === y.PremiumTypes.TIER_0;
    return (0, r.jsx)(f.Gt, {
      value: O,
      children: (0, r.jsx)("div", {
        className: o()(v.root, a),
        "data-testid": "application-home-marketing-page-comparison-table",
        children: (0, r.jsxs)("div", {
          className: v.tableWrapper,
          children: [(0, r.jsxs)("div", {
            className: o()(c, {
              [v.tier0ColumnPosition]: Z,
              [v.tier2ColumnPosition]: !Z
            }),
            children: [!Z && n, (0, r.jsx)("div", {
              className: o()({
                [v.tier0ColumnOuter]: Z,
                [v.tier2ColumnOuter]: !Z
              })
            })]
          }), (0, r.jsxs)("table", {
            className: v.table,
            children: [(0, r.jsx)(U, {}), (0, r.jsxs)("tbody", {
              children: [(0, r.jsx)(G, {
                tier0MonthlyPrice: M,
                tier2MonthlyPrice: j,
                shouldUseDiscountPrice: R,
                tier2DiscountedPriceString: x
              }), B.map(e => (0, i.createElement)(k, P(N({}, e), {
                key: e.id
              })))]
            })]
          })]
        })
      })
    })
  }