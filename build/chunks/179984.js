/** Chunk was on 13323 **/
n.d(t, {
  Z: () => U
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
  g = n(906732),
  p = n(975298),
  h = n(15640),
  f = n(594174),
  N = n(78839),
  b = n(74538),
  x = n(775412),
  _ = n(104494),
  E = n(639119),
  j = n(230916),
  C = n(346497),
  O = n(823188),
  S = n(21023),
  v = n(318747),
  T = n(409100),
  I = n(474936),
  A = n(388032),
  y = n(67431),
  P = n(102655),
  R = n(768236),
  D = n(314907),
  Z = n(826701);

function w(e) {
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
}
let k = () => {
    let e = (0, C.W1)();
    return (0, r.jsx)(O.Cy, {
      text: e,
      className: y.bogoPillWithSparkles,
      colorOptions: O.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  W = () => (0, r.jsx)("div", {
    className: y.mostPopularPill,
    children: (0, r.jsx)(c.X6q, {
      className: y.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: A.NW.string(A.t["o/oRJC"])
    })
  }),
  L = e => {
    let t, {
        premiumType: n
      } = e,
      i = (0, u.ZP)();
    t = n === I.p9.TIER_0 ? (0, o.wj)(i) ? P : R : (0, o.wj)(i) ? D : Z;
    let s = (0, b.Px)(n);
    return (0, r.jsx)("img", {
      src: t,
      className: y.logo,
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
      className: a()(y.headerRow, y.rowBottomBorder, y.topBorderRadius),
      children: [(0, r.jsx)("th", {
        scope: "col",
        className: y.headerLabelCell,
        children: t
      }), (0, r.jsx)("th", {
        scope: "col",
        className: y.headerCell,
        children: n
      }), (0, r.jsx)("th", {
        scope: "col",
        className: a()(y.headerCell, y.topBorderRadius),
        children: i
      })]
    })
  },
  M = e => {
    let {
      label: t,
      column1: n,
      column2: i,
      withBottomBorder: s = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: c = !1,
      shortRow: d = !1
    } = e;
    return (0, r.jsxs)("tr", {
      className: a()(y.row, {
        [y.wideRow]: c,
        [y.topBorderRadius]: l,
        [y.bottomBorderRadius]: o,
        [y.rowBottomBorder]: s,
        [y.shortRow]: d
      }),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: y.labelCell,
        children: t
      }), (0, r.jsx)("td", {
        className: a()(y.cell, {
          [y.buttonsCell]: c
        }),
        children: n
      }), (0, r.jsx)("td", {
        className: a()(y.cell, {
          [y.topBorderRadius]: l,
          [y.bottomBorderRadius]: o,
          [y.buttonsCell]: c
        }),
        children: i
      })]
    })
  },
  U = e => {
    var t;
    let n, {
        className: s,
        hideCTAs: P = !1,
        headingOverride: R,
        hidePill: D = !1,
        selectedPlanColumnClassName: Z,
        selectedPlanTier: U = I.p9.TIER_2
      } = e,
      {
        analyticsLocations: V
      } = (0, g.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
      G = (0, l.e7)([N.ZP], () => N.ZP.hasFetchedSubscriptions()),
      F = (0, h.V)(),
      H = "PlanComparisonTable";
    (0, d.j)({
      location: H + " auto on",
      autoTrackExposure: !0
    }), (0, d.j)({
      location: H + " auto off",
      autoTrackExposure: !1
    });
    let z = (0, u.ZP)(),
      Y = (0, o.ap)(z),
      K = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
      q = (0, b.M5)(K, I.p9.TIER_2),
      X = (0, E.N)(),
      J = null == X ? void 0 : null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
      Q = (0, x.rT)(),
      $ = (0, _.Ng)(),
      ee = null != $ && (0, _.Wp)($, I.Si.TIER_2),
      et = (0, j.A)(I.Xh.PREMIUM_MONTH_TIER_2),
      en = "".concat(et, "/").concat((0, b.eP)(I.rV.MONTH)),
      er = (0, b.CY)(I.Xh.PREMIUM_MONTH_TIER_0),
      ei = (0, b.CY)(I.Xh.PREMIUM_MONTH_TIER_2),
      es = (0, p.Z)(),
      ea = (0, S.n)(er, ei, ee, en, es.fractionalState),
      el = (0, C.Vi)();
    if (!G || !F) return null;
    let eo = {
      label: (0, r.jsx)(c.X6q, {
        className: y.__invalid_textColor,
        variant: "heading-lg/extrabold",
        children: A.NW.string(A.t.ED4UVF)
      }),
      column1: (0, r.jsx)(L, {
        premiumType: I.p9.TIER_0
      }),
      column2: (0, r.jsx)(L, {
        premiumType: I.p9.TIER_2
      })
    };
    P ? ea.push({
      label: null,
      column1: null,
      column2: null,
      withBottomBorder: !1,
      withBottomBorderRadius: !0,
      buttonsRow: !1,
      shortRow: !0
    }) : ea.push({
      label: null,
      column1: (0, r.jsxs)(r.Fragment, {
        children: [J === I.Si.TIER_2 || el ? (0, r.jsx)(T.Z, {
          className: y.button,
          subscriptionTier: I.Si.TIER_0,
          showIcon: !1,
          look: c.iLD.OUTLINED,
          color: Y ? c.Ttl.BRAND : c.Ttl.WHITE,
          buttonShineClassName: void 0
        }) : (0, r.jsx)(T.Z, {
          className: y.button,
          subscriptionTier: I.Si.TIER_0,
          showIcon: !1
        }), Q === I.p9.TIER_2 || null != J ? null : (0, r.jsx)(v.Z, {
          className: y.button,
          subscriptionTier: I.Si.TIER_0
        })]
      }),
      column2: (0, r.jsxs)(r.Fragment, {
        children: [J === I.Si.TIER_0 ? (0, r.jsx)(T.Z, {
          className: y.button,
          subscriptionTier: I.Si.TIER_2,
          showIcon: !1,
          look: c.iLD.OUTLINED,
          color: Y ? c.Ttl.BRAND : c.Ttl.WHITE,
          buttonShineClassName: void 0
        }) : (0, r.jsx)(T.Z, {
          className: y.button,
          subscriptionTier: I.Si.TIER_2,
          showIcon: !1,
          hasActivePromotion: el
        }), Q === I.p9.TIER_0 || null != J ? null : (0, r.jsx)(v.Z, {
          className: y.button,
          subscriptionTier: I.Si.TIER_2
        })]
      }),
      withBottomBorder: !1,
      withBottomBorderRadius: !0,
      buttonsRow: null == J
    }), n = D ? null : null != J || null != Q ? (0, r.jsx)(O.Cy, {
      text: null != J ? A.NW.string(A.t.IBYG5e) : A.NW.string(A.t.ce1v3d),
      className: y.freeTrialPillWithSparkles,
      colorOptions: J === I.Si.TIER_0 ? Y ? O.VE.PREMIUM_TIER_0_GRADIENT_FILL : O.VE.PREMIUM_TIER_0_WHITE_FILL : Y ? q ? O.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : O.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : O.VE.PREMIUM_TIER_2_WHITE_FILL
    }) : el ? (0, r.jsx)(k, {}) : (0, r.jsx)(W, {});
    let ec = J === I.Si.TIER_0 || Q === I.p9.TIER_0 || U === I.p9.TIER_0;
    return (0, r.jsx)(g.Gt, {
      value: V,
      children: (0, r.jsxs)("div", {
        className: a()(y.root, s),
        "data-testid": "v2-marketing-page-comparison-table",
        children: [(0, r.jsx)(c.X6q, {
          className: a()(y.titleText, y.__invalid_textColor),
          variant: "heading-xxl/extrabold",
          children: null != R ? R : A.NW.string(A.t.FIbMh4)
        }), (0, r.jsxs)("div", {
          className: y.tableWrapper,
          children: [(0, r.jsx)("div", {
            className: a()(Z, {
              [y.tier0ColumnOuter]: ec,
              [y.tier2ColumnOuter]: !ec
            }),
            children: !ec && n
          }), (0, r.jsxs)("table", {
            className: y.table,
            children: [(0, r.jsx)("thead", {
              children: (0, r.jsx)(B, w({}, eo))
            }), (0, r.jsx)("tbody", {
              children: ea.map((e, t) => {
                var n, r;
                return (0, i.createElement)(M, (n = w({}, e), r = r = {
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