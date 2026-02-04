/** Chunk was on 9207 **/
/** chunk id: 974005, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk511484 = require("./511484.js"),
  Chunk356309 = require("./356309.jsx"),
  Chunk121304 = require("./121304.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk11297 = require("./11297.js"),
  Chunk115292 = require("./115292.js"),
  Chunk799919 = require("./799919.js");

function C(e) {
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
let S = e => {
    let {
      includes: t
    } = e;
    return t ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.BNr, {
        size: "sm",
        color: a.A.colors.TEXT_STRONG,
        "aria-hidden": true
      }), (0, r.jsx)(o.AC4, {
        children: h.intl.string(h.t["tq+6t/"])
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.aoi, {
        size: "xs",
        color: a.A.colors.TEXT_STRONG,
        "aria-hidden": true
      }), (0, r.jsx)(o.AC4, {
        children: h.intl.string(h.t.l4qZrp)
      })]
    })
  },
  T = e => {
    let {
      label: t,
      tier0ColumnData: n,
      tier2ColumnData: i
    } = e;
    return (0, r.jsxs)("tr", {
      className: s()(E.nM, E.WQ),
      children: [(0, r.jsx)("th", {
        scope: "row",
        className: E.nx,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          children: t
        })
      }), (0, r.jsx)("td", {
        className: E.Hn,
        children: null != n.text ? (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          children: n.text
        }) : (0, r.jsx)(S, {
          includes: !!n.includes
        })
      }), (0, r.jsx)("td", {
        className: E.Hn,
        children: null != i.text ? (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          children: i.text
        }) : (0, r.jsx)(S, {
          includes: !!i.includes
        })
      })]
    })
  },
  I = e => {
    let {
      title: t,
      rows: n
    } = e;
    return (0, r.jsxs)("tbody", {
      children: [(0, r.jsx)("tr", {
        className: s()(E.nM, E.Gf),
        children: (0, r.jsx)("td", {
          className: E.nx,
          colSpan: 3,
          children: (0, r.jsx)(o.Heading, {
            variant: "heading-lg/bold",
            children: t
          })
        })
      }), n.map(e => (0, r.jsx)(T, C({}, e), e.id))]
    })
  },
  N = e => {
    let {
      premiumType: t,
      priceString: n
    } = e, i = t === b.PremiumTypes.TIER_0 ? h.intl.string(h.t.tUbSDK) : h.intl.string(h.t.Ipxkog);
    return (0, r.jsxs)("div", {
      className: E.nn,
      children: [(0, r.jsxs)("div", {
        className: E.KS,
        children: [(0, r.jsx)(o.tvc, {
          colorClass: E.oG
        }), (0, r.jsx)(o.Heading, {
          variant: "heading-sm/semibold",
          children: i
        })]
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-sm/semibold",
        children: n
      })]
    })
  },
  y = e => {
    let {
      tier0Price: t,
      tier2Price: n,
      shouldUseDiscountPrice: i,
      tier2DiscountedPriceString: l
    } = e, s = i ? l : (0, _.$g)(n.amount, n.currency);
    return (0, r.jsx)("thead", {
      children: (0, r.jsxs)("tr", {
        className: E.U1,
        children: [(0, r.jsx)("th", {
          scope: "col",
          className: E.Cr,
          children: (0, r.jsx)(o.Heading, {
            variant: "heading-xl/bold",
            children: h.intl.string(h.t.ED4UVD)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          className: E.Hn,
          children: (0, r.jsx)(N, {
            premiumType: b.PremiumTypes.TIER_0,
            priceString: (0, _.$g)(t.amount, t.currency)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          className: E.Hn,
          children: (0, r.jsx)(N, {
            premiumType: b.PremiumTypes.TIER_2,
            priceString: s
          })
        })]
      })
    })
  },
  v = e => {
    var t;
    let n, {
        className: l,
        hidePill: a = false,
        selectedPlanTier: _ = b.PremiumTypes.TIER_2
      } = e,
      {
        analyticsLocations: S
      } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PLAN_COMPARISON),
      T = (0, m.V)(),
      N = null == T || null == (t = T.subscription_trial) ? true : t.sku_id,
      v = (0, p.O)(),
      j = null != v && (0, g.U9)(v, b.pe.TIER_2),
      P = (0, g.N1)(b.gD.PREMIUM_MONTH_TIER_2),
      R = "".concat(P, "/").concat((0, u.FJ)(b.WT.MONTH)),
      D = (0, u.JM)(b.gD.PREMIUM_MONTH_TIER_0),
      L = (0, u.JM)(b.gD.PREMIUM_MONTH_TIER_2),
      w = (0, f.g)();
    if (a) n = null;
    else {
      let e = null != T ? h.intl.string(h.t.IBYG5U) : h.intl.string(h.t.TR2B4T);
      n = (0, r.jsx)(A.D, {
        className: s()(E.Io, E.SP),
        text: e
      })
    }
    let M = N === b.pe.TIER_0 || _ === b.PremiumTypes.TIER_0;
    return (0, r.jsx)(d.f5, {
      value: S,
      children: (0, r.jsxs)("div", {
        className: s()(E.zr, l),
        children: [(0, r.jsx)(o.Heading, {
          className: E.Qw,
          variant: "display-md",
          color: "text-strong",
          children: h.intl.string(h.t.DbPgAd)
        }), (0, r.jsxs)("div", {
          className: E.wY,
          children: [(0, r.jsxs)("div", {
            className: s()(E.fO, {
              [E.Vd]: M,
              [E.hA]: !M
            }),
            children: [!M && n, (0, r.jsx)("div", {
              className: E.xQ
            }), (0, r.jsxs)("div", {
              className: E.wN,
              children: [(0, r.jsx)("img", {
                src: x,
                alt: "",
                className: E.kQ
              }), (0, r.jsx)("img", {
                src: O,
                alt: "",
                className: E.kQ
              })]
            })]
          }), (0, r.jsxs)("table", {
            className: E.tp,
            children: [(0, r.jsx)(y, {
              tier0Price: D,
              tier2Price: L,
              shouldUseDiscountPrice: j,
              tier2DiscountedPriceString: R
            }), w.map(e => {
              var t, n;
              return (0, i.createElement)(I, (t = C({}, e), n = n = {
                key: e.id
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), t))
            })]
          })]
        })]
      })
    })
  }