/** Chunk was on 2827 **/
/** chunk id: 584767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk160946 = require("./160946.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk511484 = require("./511484.js"),
  Chunk121304 = require("./121304.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk976543 = require("./976543.js"),
  Chunk196093 = require("./196093.js"),
  Chunk979653 = require("./979653.js"),
  Chunk255631 = require("./255631.js"),
  Chunk193023 = require("./193023.js");

function y(e) {
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

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = () => (0, r.jsx)("div", {
    className: C.Zr,
    children: (0, r.jsx)(c.Heading, {
      className: C.uC,
      variant: "text-xs/bold",
      children: O.intl.string(O.t.TR2B4T)
    })
  }),
  v = () => (0, r.jsx)("div", {
    className: C.Zr,
    children: (0, r.jsx)(c.Heading, {
      className: C.uC,
      variant: "heading-deprecated-12/extrabold",
      children: O.intl.string(O.t.IBYG5U)
    })
  }),
  P = e => {
    let {
      text: t,
      badge: n,
      variant: i
    } = e;
    return (0, r.jsxs)(c.Text, {
      color: "none",
      variant: null != i ? i : "text-md/medium",
      className: C.wb,
      children: [t, null != n && (0, r.jsxs)(r.Fragment, {
        children: [" ", n]
      })]
    })
  },
  R = e => {
    let {
      isIncluded: t,
      isTier0: n
    } = e;
    return t ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.A9s, {
        size: "md",
        color: "currentColor",
        className: n ? C.M0 : C.PE,
        "aria-hidden": true
      }), (0, r.jsx)(c.AC4, {
        children: O.intl.string(O.t["tq+6t/"])
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.PGe, {
        size: "md",
        color: "currentColor",
        className: C.ut,
        "aria-hidden": true
      }), (0, r.jsx)(c.AC4, {
        children: O.intl.string(O.t.l4qZrp)
      })]
    })
  },
  D = e => {
    let {
      label: t,
      tier0ColumnData: n,
      tier2ColumnData: i,
      withBottomMargin: l
    } = e;
    return (0, r.jsxs)("tr", {
      className: s()(C.nM, C.YI, {
        [C.ML]: l
      }),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: C.nx,
        children: (0, r.jsx)(P, {
          text: t
        })
      }), (0, r.jsx)("td", {
        className: C.Hn,
        children: null != n.text ? (0, r.jsx)(P, {
          text: n.text
        }) : (0, r.jsx)(R, {
          isIncluded: !!n.includes,
          isTier0: true
        })
      }), (0, r.jsx)("td", {
        className: C.Hn,
        children: null != i.text ? (0, r.jsx)(P, {
          text: i.text
        }) : (0, r.jsx)(R, {
          isIncluded: !!i.includes
        })
      })]
    })
  },
  L = e => {
    let {
      title: t,
      rows: n
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("tr", {
        className: C.nM,
        children: [(0, r.jsx)("th", {
          scope: "row",
          className: C.nx,
          children: (0, r.jsx)(P, {
            text: t,
            variant: "text-lg/bold"
          })
        }), (0, r.jsx)("td", {}), (0, r.jsx)("td", {})]
      }), n.map((e, t) => (0, r.jsx)(D, N(y({}, e), {
        withBottomMargin: t === n.length - 1
      }), e.id))]
    })
  },
  w = e => {
    let t, {
        premiumType: n
      } = e,
      i = (0, d.Ay)();
    t = n === E.PremiumTypes.TIER_0 ? (0, o.Mw)(i) ? x : S : (0, o.Mw)(i) ? T : I;
    let l = (0, g.Dd)(n);
    return (0, r.jsx)("img", {
      src: t,
      className: C.wm,
      alt: l
    })
  },
  M = () => (0, r.jsx)("thead", {
    children: (0, r.jsxs)("tr", {
      className: s()(C.U1, C.Y9),
      children: [(0, r.jsx)("th", {
        scope: "col",
        className: C.Cr,
        children: (0, r.jsx)(c.Heading, {
          className: C.__invalid_textColor,
          variant: "heading-xl/semibold",
          children: O.intl.string(O.t.XXENra)
        })
      }), (0, r.jsx)("th", {
        scope: "col",
        className: C.e4,
        children: (0, r.jsx)(w, {
          premiumType: E.PremiumTypes.TIER_0
        })
      }), (0, r.jsx)("th", {
        scope: "col",
        className: s()(C.e4, C.Y9),
        children: (0, r.jsx)(w, {
          premiumType: E.PremiumTypes.TIER_2
        })
      })]
    })
  }),
  G = e => {
    let {
      tier0MonthlyPrice: t,
      tier2MonthlyPrice: n,
      shouldUseDiscountPrice: i,
      tier2DiscountedPriceString: l
    } = e;
    return (0, r.jsxs)("tr", {
      className: s()(C.nM, C.YI, C.ML),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: C.nx,
        children: (0, r.jsx)(P, {
          text: O.intl.string(O.t["09yRK3"]),
          variant: "text-lg/bold"
        })
      }), (0, r.jsx)("td", {
        className: C.Hn,
        children: (0, r.jsx)(P, {
          text: g.Ay.formatPriceString(t, E.WT.MONTH)
        })
      }), (0, r.jsx)("td", {
        className: C.Hn,
        children: (0, r.jsx)(P, {
          text: i ? l : g.Ay.formatPriceString(n, E.WT.MONTH)
        })
      })]
    })
  },
  U = e => {
    var t;
    let n, {
        className: l,
        hidePill: o = false,
        selectedPlanColumnClassName: c,
        selectedPlanTier: d = E.PremiumTypes.TIER_2
      } = e,
      {
        analyticsLocations: O
      } = (0, _.Ay)(u.A.PREMIUM_MARKETING_PLAN_COMPARISON),
      x = (0, a.bG)([m.A], () => m.A.hasFetchedSubscriptions()),
      S = (0, p.Y)(E.T7),
      T = (0, f.V)(),
      I = null == T || null == (t = T.subscription_trial) ? true : t.sku_id,
      P = (0, A.O)(),
      R = null != P && (0, b.U9)(P, E.pe.TIER_2),
      D = (0, b.N1)(E.gD.PREMIUM_MONTH_TIER_2),
      w = "".concat(D, "/").concat((0, g.FJ)(E.WT.MONTH)),
      U = (0, g.JM)(E.gD.PREMIUM_MONTH_TIER_0),
      k = (0, g.JM)(E.gD.PREMIUM_MONTH_TIER_2),
      B = (0, h.g)();
    if (!x || !S) return null;
    n = o ? null : null != T ? (0, r.jsx)(v, {}) : (0, r.jsx)(j, {});
    let H = I === E.pe.TIER_0 || d === E.PremiumTypes.TIER_0;
    return (0, r.jsx)(_.f5, {
      value: O,
      children: (0, r.jsx)("div", {
        className: s()(C.zr, l),
        "data-testid": "application-home-marketing-page-comparison-table",
        children: (0, r.jsxs)("div", {
          className: C.wY,
          children: [(0, r.jsxs)("div", {
            className: s()(c, {
              [C.sO]: H,
              [C.Yr]: !H
            }),
            children: [!H && n, (0, r.jsx)("div", {
              className: s()({
                [C.A9]: H,
                [C.ce]: !H
              })
            })]
          }), (0, r.jsxs)("table", {
            className: C.tp,
            children: [(0, r.jsx)(M, {}), (0, r.jsxs)("tbody", {
              children: [(0, r.jsx)(G, {
                tier0MonthlyPrice: U,
                tier2MonthlyPrice: k,
                shouldUseDiscountPrice: R,
                tier2DiscountedPriceString: w
              }), B.map(e => (0, i.createElement)(L, N(y({}, e), {
                key: e.id
              })))]
            })]
          })]
        })
      })
    })
  }