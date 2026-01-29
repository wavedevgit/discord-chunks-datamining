/** Chunk was on 87557 **/
/** chunk id: 439895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk287809 = require("./287809.js"),
  Chunk590180 = require("./590180.js"),
  Chunk4227 = require("./4227.js"),
  Chunk841702 = require("./841702.js"),
  Chunk751304 = require("./751304.jsx"),
  Chunk61750 = require("./61750.jsx"),
  Chunk841015 = require("./841015.js");
let x = e => {
    let [t, n] = l.useState(0);
    return l.useLayoutEffect(() => {
      let e = d.A.getPurchase;
      return d.A.getPurchase = e => true, d.A.emitChange(), n(1), () => {
        d.A.getPurchase = e, d.A.emitChange()
      }
    }, []), (0, a.jsx)("div", {
      className: h.Do,
      children: (0, a.jsx)(m.A, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({}, e), t)
    })
  },
  g = () => {
    let e = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
      t = (0, r.bG)([c.A], () => c.A.categories),
      n = (0, r.bG)([d.A], () => d.A.purchases),
      m = (0, r.bG)([c.A], () => c.A.lastSuccessfulFetch),
      g = t.size > 0 && n.size > 0 && null != m,
      {
        isFetching: f,
        categories: b
      } = (0, u.Ay)({
        logPerf: false,
        stalePurchasesOK: true,
        noOp: g
      }),
      v = g ? t : b,
      j = g || !f && v.size > 0,
      [_, y] = l.useState(""),
      [A, C] = l.useState(null),
      [S, O] = l.useState(null);
    return (l.useEffect(() => {
      if ("" === _.trim() || !j) {
        C(null), O(null);
        return
      }
      let e = c.A.getProduct(_),
        t = c.A.getCategoryForProduct(_);
      null != e && null != t ? (C(e), O(t)) : (C(null), O(null))
    }, [_, j]), f) ? (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: "Loading categories and collectibles..."
    }) : null == e ? (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: "No user found"
    }) : (0, a.jsxs)("div", {
      className: h.kL,
      children: [(0, a.jsxs)("div", {
        className: h.uW,
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          children: "Product Configuration"
        }), (0, a.jsxs)("div", {
          className: h.qp,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-md/semibold",
            className: h.NB,
            children: "Primary Product SKU ID"
          }), (0, a.jsx)(i.ksK, {
            value: _,
            onChange: y,
            placeholder: "Enter product SKU ID"
          }), !j && "" !== _.trim() && (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            className: h.KQ,
            children: "Loading products..."
          }), j && "" !== _.trim() && null == A && (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            className: h.kc,
            children: "Product not found"
          }), null != A && (0, a.jsxs)(i.Text, {
            variant: "text-sm/normal",
            className: h.xT,
            children: ["Found: ", A.name]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: h.uW,
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          children: "Product Preview"
        }), null != A && null != S ? (0, a.jsxs)("div", {
          className: h.i1,
          children: [(0, a.jsx)(x, {
            skuId: A.skuId
          }), (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: () => {
              null != A && null != e && (0, p.A)({
                product: A,
                analyticsLocations: [s.A.COLLECTIBLES_SHOP_CARD]
              })
            },
            text: "Show Collectibles Collected Modal"
          })]
        }) : (0, a.jsx)("div", {
          className: h.qf,
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            className: h.X2,
            children: "Enter a valid product SKU ID to see the preview"
          })
        })]
      })]
    })
  }