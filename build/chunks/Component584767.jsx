/** Chunk was on 60667 **/
/** chunk id: 584767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => G
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

function j(e) {
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

function v(e, t) {
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
let N = () => (0, r.jsx)("div", {
    className: O.Zr,
    children: (0, r.jsx)(c.Heading, {
      className: O.uC,
      variant: "text-xs/bold",
      children: x.intl.string(x.t.TR2B4T)
    })
  }),
  y = () => (0, r.jsx)("div", {
    className: O.Zr,
    children: (0, r.jsx)(c.Heading, {
      className: O.uC,
      variant: "heading-deprecated-12/extrabold",
      children: x.intl.string(x.t.IBYG5U)
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
      className: O.wb,
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
        className: n ? O.M0 : O.PE,
        "aria-hidden": true
      }), (0, r.jsx)(c.AC4, {
        children: x.intl.string(x.t["tq+6t/"])
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.PGe, {
        size: "md",
        color: "currentColor",
        className: O.ut,
        "aria-hidden": true
      }), (0, r.jsx)(c.AC4, {
        children: x.intl.string(x.t.l4qZrp)
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
      className: s()(O.nM, O.YI, {
        [O.ML]: l
      }),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: O.nx,
        children: (0, r.jsx)(P, {
          text: t
        })
      }), (0, r.jsx)("td", {
        className: O.Hn,
        children: null != n.text ? (0, r.jsx)(P, {
          text: n.text
        }) : (0, r.jsx)(R, {
          isIncluded: !!n.includes,
          isTier0: true
        })
      }), (0, r.jsx)("td", {
        className: O.Hn,
        children: null != i.text ? (0, r.jsx)(P, {
          text: i.text
        }) : (0, r.jsx)(R, {
          isIncluded: !!i.includes
        })
      })]
    })
  },
  w = e => {
    let {
      title: t,
      rows: n
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("tr", {
        className: O.nM,
        children: [(0, r.jsx)("th", {
          scope: "row",
          className: O.nx,
          children: (0, r.jsx)(P, {
            text: t,
            variant: "text-lg/bold"
          })
        }), (0, r.jsx)("td", {}), (0, r.jsx)("td", {})]
      }), n.map((e, t) => (0, r.jsx)(D, v(j({}, e), {
        withBottomMargin: t === n.length - 1
      }), e.id))]
    })
  },
  L = e => {
    let t, {
        premiumType: n
      } = e,
      i = (0, d.Ay)();
    t = n === E.PremiumTypes.TIER_0 ? (0, o.Mw)(i) ? C : T : (0, o.Mw)(i) ? I : S;
    let l = (0, g.Dd)(n);
    return (0, r.jsx)("img", {
      src: t,
      className: O.wm,
      alt: l
    })
  },
  M = () => (0, r.jsx)("thead", {
    children: (0, r.jsxs)("tr", {
      className: s()(O.U1, O.Y9),
      children: [(0, r.jsx)("th", {
        scope: "col",
        className: O.Cr,
        children: (0, r.jsx)(c.Heading, {
          className: O.__invalid_textColor,
          variant: "heading-xl/semibold",
          children: x.intl.string(x.t.XXENra)
        })
      }), (0, r.jsx)("th", {
        scope: "col",
        className: O.e4,
        children: (0, r.jsx)(L, {
          premiumType: E.PremiumTypes.TIER_0
        })
      }), (0, r.jsx)("th", {
        scope: "col",
        className: s()(O.e4, O.Y9),
        children: (0, r.jsx)(L, {
          premiumType: E.PremiumTypes.TIER_2
        })
      })]
    })
  }),
  U = e => {
    let {
      tier0MonthlyPrice: t,
      tier2MonthlyPrice: n,
      shouldUseDiscountPrice: i,
      tier2DiscountedPriceString: l
    } = e;
    return (0, r.jsxs)("tr", {
      className: s()(O.nM, O.YI, O.ML),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: O.nx,
        children: (0, r.jsx)(P, {
          text: x.intl.string(x.t["09yRK3"]),
          variant: "text-lg/bold"
        })
      }), (0, r.jsx)("td", {
        className: O.Hn,
        children: (0, r.jsx)(P, {
          text: g.Ay.formatPriceString(t, E.WT.MONTH)
        })
      }), (0, r.jsx)("td", {
        className: O.Hn,
        children: (0, r.jsx)(P, {
          text: i ? l : g.Ay.formatPriceString(n, E.WT.MONTH)
        })
      })]
    })
  },
  G = e => {
    var t;
    let n, {
        className: l,
        hidePill: o = false,
        selectedPlanColumnClassName: c,
        selectedPlanTier: d = E.PremiumTypes.TIER_2
      } = e,
      {
        analyticsLocations: x
      } = (0, _.Ay)(u.A.PREMIUM_MARKETING_PLAN_COMPARISON),
      C = (0, a.bG)([m.A], () => m.A.hasFetchedSubscriptions()),
      T = (0, p.Y)(E.T7),
      I = (0, f.V)(),
      S = null == I || null == (t = I.subscription_trial) ? true : t.sku_id,
      P = (0, A.O)(),
      R = null != P && (0, h.U9)(P, E.pe.TIER_2),
      D = (0, h.N1)(E.gD.PREMIUM_MONTH_TIER_2),
      L = "".concat(D, "/").concat((0, g.FJ)(E.WT.MONTH)),
      G = (0, g.JM)(E.gD.PREMIUM_MONTH_TIER_0),
      k = (0, g.JM)(E.gD.PREMIUM_MONTH_TIER_2),
      V = (0, b.g)();
    if (!C || !T) return null;
    n = o ? null : null != I ? (0, r.jsx)(y, {}) : (0, r.jsx)(N, {});
    let H = S === E.pe.TIER_0 || d === E.PremiumTypes.TIER_0;
    return (0, r.jsx)(_.f5, {
      value: x,
      children: (0, r.jsx)("div", {
        className: s()(O.zr, l),
        "data-testid": "application-home-marketing-page-comparison-table",
        children: (0, r.jsxs)("div", {
          className: O.wY,
          children: [(0, r.jsxs)("div", {
            className: s()(c, {
              [O.sO]: H,
              [O.Yr]: !H
            }),
            children: [!H && n, (0, r.jsx)("div", {
              className: s()({
                [O.A9]: H,
                [O.ce]: !H
              })
            })]
          }), (0, r.jsxs)("table", {
            className: O.tp,
            children: [(0, r.jsx)(M, {}), (0, r.jsxs)("tbody", {
              children: [(0, r.jsx)(U, {
                tier0MonthlyPrice: G,
                tier2MonthlyPrice: k,
                shouldUseDiscountPrice: R,
                tier2DiscountedPriceString: L
              }), V.map(e => (0, i.createElement)(w, v(j({}, e), {
                key: e.id
              })))]
            })]
          })]
        })
      })
    })
  }