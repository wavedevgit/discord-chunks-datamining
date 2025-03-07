/** Chunk was on 51724 **/
n.d(t, {
  Z: () => D
}), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(780384),
  c = n(481060),
  d = n(634894),
  u = n(410030),
  m = n(100527),
  p = n(906732),
  g = n(15640),
  h = n(78839),
  f = n(74538),
  x = n(104494),
  b = n(639119),
  N = n(230916),
  _ = n(694338),
  E = n(474936),
  C = n(388032),
  j = n(214117),
  O = n(102655),
  v = n(768236),
  S = n(314907),
  T = n(826701);
let I = () => (0, r.jsx)("div", {
    className: j.comparisonTablePill,
    children: (0, r.jsx)(c.X6q, {
      className: j.mostPopularText,
      variant: "text-xs/bold",
      children: C.NW.string(C.t.TR2B4e)
    })
  }),
  y = () => (0, r.jsx)("div", {
    className: j.comparisonTablePill,
    children: (0, r.jsx)(c.X6q, {
      className: j.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: C.NW.string(C.t.IBYG5e)
    })
  }),
  A = e => {
    let t, {
        premiumType: n
      } = e,
      i = (0, u.ZP)();
    t = n === E.p9.TIER_0 ? (0, o.wj)(i) ? O : v : (0, o.wj)(i) ? S : T;
    let s = (0, f.Px)(n);
    return (0, r.jsx)("img", {
      src: t,
      className: j.logo,
      alt: s
    })
  },
  P = () => (0, r.jsx)("thead", {
    children: (0, r.jsxs)("tr", {
      className: a()(j.headerRow, j.topBorderRadius),
      children: [(0, r.jsx)("th", {
        scope: "col",
        className: j.headerLabelCell,
        children: (0, r.jsx)(c.X6q, {
          className: j.__invalid_textColor,
          variant: "heading-xl/semibold",
          children: C.NW.string(C.t.XXENra)
        })
      }), (0, r.jsx)("th", {
        scope: "col",
        className: j.headerCell,
        children: (0, r.jsx)(A, {
          premiumType: E.p9.TIER_0
        })
      }), (0, r.jsx)("th", {
        scope: "col",
        className: a()(j.headerCell, j.topBorderRadius),
        children: (0, r.jsx)(A, {
          premiumType: E.p9.TIER_2
        })
      })]
    })
  }),
  R = e => {
    let {
      label: t,
      tier0Column: n,
      tier2Column: i,
      withBottomBorder: s = !0,
      withBottomMargin: l = !1
    } = e;
    return (0, r.jsxs)("tr", {
      className: a()(j.row, {
        [j.rowBottomBorder]: s,
        [j.bottomMargin]: l
      }),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: j.labelCell,
        children: t
      }), (0, r.jsx)("td", {
        className: j.cell,
        children: n
      }), (0, r.jsx)("td", {
        className: j.cell,
        children: i
      })]
    })
  },
  D = e => {
    var t;
    let n, {
        className: s,
        hidePill: o = !1,
        selectedPlanColumnClassName: c,
        selectedPlanTier: u = E.p9.TIER_2
      } = e,
      {
        analyticsLocations: C
      } = (0, p.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
      O = (0, l.e7)([h.ZP], () => h.ZP.hasFetchedSubscriptions()),
      v = (0, g.V)(),
      S = "PlanComparisonTable";
    (0, d.j)({
      location: S + " auto on",
      autoTrackExposure: !0
    }), (0, d.j)({
      location: S + " auto off",
      autoTrackExposure: !1
    });
    let T = (0, b.N)(),
      A = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
      D = (0, x.Ng)(),
      Z = null != D && (0, x.Wp)(D, E.Si.TIER_2),
      w = (0, N.A)(E.Xh.PREMIUM_MONTH_TIER_2),
      k = "".concat(w, "/").concat((0, f.eP)(E.rV.MONTH)),
      W = (0, f.CY)(E.Xh.PREMIUM_MONTH_TIER_0),
      L = (0, f.CY)(E.Xh.PREMIUM_MONTH_TIER_2),
      B = (0, _.a)(W, L, Z, k);
    if (!O || !v) return null;
    B.push({
      label: null,
      tier0Column: null,
      tier2Column: null,
      withBottomBorder: !1
    }), n = o ? null : null != T ? (0, r.jsx)(y, {}) : (0, r.jsx)(I, {});
    let M = A === E.Si.TIER_0 || u === E.p9.TIER_0;
    return (0, r.jsx)(p.Gt, {
      value: C,
      children: (0, r.jsx)("div", {
        className: a()(j.root, s),
        "data-testid": "v2-marketing-page-comparison-table",
        children: (0, r.jsxs)("div", {
          className: j.tableWrapper,
          children: [(0, r.jsxs)("div", {
            className: a()(c, {
              [j.tier0ColumnPosition]: M,
              [j.tier2ColumnPosition]: !M
            }),
            children: [!M && n, (0, r.jsx)("div", {
              className: a()({
                [j.tier0ColumnOuter]: M,
                [j.tier2ColumnOuter]: !M
              })
            })]
          }), (0, r.jsxs)("table", {
            className: j.table,
            children: [(0, r.jsx)(P, {}), (0, r.jsx)("tbody", {
              children: B.map((e, t) => {
                var n, r;
                return (0, i.createElement)(R, (n = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                      var r;
                      r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      }) : e[t] = r
                    })
                  }
                  return e
                }({}, e), r = r = {
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
        })
      })
    })
  }