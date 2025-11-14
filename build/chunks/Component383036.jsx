/** Chunk was on 99904 **/
/** chunk id: 383036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk594174 = require("./594174.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk223143 = require("./223143.js"),
  Chunk709999 = require("./709999.jsx"),
  Chunk832149 = require("./832149.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk277790 = require("./277790.js");
let g = e => {
    let [t, n] = r.useState(0);
    return r.useLayoutEffect(() => {
      let e = d.Z.getPurchase;
      return d.Z.getPurchase = e => true, d.Z.emitChange(), n(1), () => {
        d.Z.getPurchase = e, d.Z.emitChange()
      }
    }, []), (0, a.jsx)(m.Z, function(e) {
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
  },
  f = () => {
    let e = (0, Chunk399606.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
      t = (0, Chunk399606.e7)([Chunk597688.Z], () => Chunk597688.Z.categories),
      n = (0, Chunk399606.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
      m = (0, Chunk399606.e7)([Chunk597688.Z], () => Chunk597688.Z.lastSuccessfulFetch),
      f = exports.size > 0 && require.size > 0 && null != Chunk709999,
      {
        isFetching: b,
        categories: v
      } = (0, Chunk223143.ZP)({
        logPerf: false,
        stalePurchasesOK: true,
        noOp: f
      }),
      j = f ? exports : v,
      _ = f || !b && j.size > 0,
      [y, C] = Chunk647438.useState(""),
      [S, E] = Chunk647438.useState(null),
      [T, O] = Chunk647438.useState(null);
    return (Chunk647438.useEffect(() => {
      if ("" === y.trim() || !_) {
        E(null), O(null);
        return
      }
      let e = Chunk597688.Z.getProduct(y),
        t = Chunk597688.Z.getCategoryForProduct(y);
      null != module && null != exports ? (E(module), O(exports)) : (E(null), O(null))
    }, [y, _]), b) ? (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "Loading categories and collectibles..."
    }) : null == module ? (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "No user found"
    }) : (0, Chunk951288.jsxs)("div", {
      className: Chunk277790.container,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk277790.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Product Configuration"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk277790.inputSection,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/semibold",
            className: Chunk277790.inputLabel,
            children: "Primary Product SKU ID"
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: y,
            onChange: C,
            placeholder: "Enter product SKU ID"
          }), !_ && "" !== y.trim() && (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            className: Chunk277790.loadingText,
            children: "Loading products..."
          }), _ && "" !== y.trim() && null == S && (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            className: Chunk277790.errorText,
            children: "Product not found"
          }), null != S && (0, Chunk951288.jsxs)(Chunk481060.Text, {
            variant: "text-sm/normal",
            className: Chunk277790.successText,
            children: ["Found: ", S.name]
          })]
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk277790.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Product Preview"
        }), null != S && null != T ? (0, Chunk951288.jsxs)("div", {
          className: Chunk277790.previewContainer,
          children: [(0, Chunk951288.jsx)(g, {
            product: S,
            user: module,
            category: T,
            tab: Chunk215023.AW.HOME
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            onClick: () => {
              null != S && null != module && (0, Chunk832149.Z)({
                product: S,
                analyticsLocations: [Chunk100527.Z.COLLECTIBLES_SHOP_CARD]
              })
            },
            text: "Show Collectibles Collected Modal"
          })]
        }) : (0, Chunk951288.jsx)("div", {
          className: Chunk277790.placeholder,
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            className: Chunk277790.mutedText,
            children: "Enter a valid product SKU ID to see the preview"
          })
        })]
      })]
    })
  }