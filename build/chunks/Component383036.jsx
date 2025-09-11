/** Chunk was on web.js **/
/** chunk id: 383036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk958675 = require("./958675.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}
let E = e => {
    let [t, n] = i.useState(0);
    return i.useLayoutEffect(() => {
      let e = u.Z.getPurchase;
      return u.Z.getPurchase = e => true, u.Z.emitChange(), n(1), () => {
        u.Z.getPurchase = e, u.Z.emitChange()
      }
    }, []), (0, r.jsx)(f.Z, g({}, e), t)
  },
  b = () => {
    let e = (0, Chunk399606.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
      t = (0, Chunk399606.e7)([Chunk597688.Z], () => Chunk597688.Z.categories),
      n = (0, Chunk399606.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
      f = (0, Chunk399606.e7)([Chunk597688.Z], () => Chunk597688.Z.lastSuccessfulFetch),
      m = exports.size > 0 && require.size > 0 && null != Chunk709999,
      {
        isFetching: g,
        categories: b
      } = (0, Chunk223143.ZP)({
        logPerf: false,
        stalePurchasesOK: true,
        noOp: m
      }),
      y = m ? exports : b,
      O = m || !g && y.size > 0,
      [v, I] = Chunk647438.useState(""),
      [T, S] = Chunk647438.useState(null),
      [A, C] = Chunk647438.useState(null);
    Chunk647438.useEffect(() => {
      if ("" === v.trim() || !O) {
        S(null), C(null);
        return
      }
      let e = Chunk597688.Z.getProduct(v),
        t = Chunk597688.Z.getCategoryForProduct(v);
      null != module && null != exports ? (S(module), C(exports)) : (S(null), C(null))
    }, [v, O]);
    let N = () => {
      null != T && null != module && (0, Chunk832149.Z)({
        product: T,
        analyticsLocations: [Chunk100527.Z.COLLECTIBLES_SHOP_CARD]
      })
    };
    return g ? (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "Loading categories and collectibles..."
    }) : null == module ? (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "No user found"
    }) : (0, Chunk951288.jsxs)("div", {
      className: Chunk958675.container,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk958675.leftPanel,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          className: Chunk958675.section,
          children: "Product Configuration"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk958675.inputSection,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/semibold",
            className: Chunk958675.inputLabel,
            children: "Primary Product SKU ID"
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: v,
            onChange: I,
            placeholder: "Enter product SKU ID"
          }), !O && "" !== v.trim() && (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            className: Chunk958675.loadingText,
            children: "Loading products..."
          }), O && "" !== v.trim() && null == T && (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            className: Chunk958675.errorText,
            children: "Product not found"
          }), null != T && (0, Chunk951288.jsxs)(Chunk481060.Text, {
            variant: "text-sm/normal",
            className: Chunk958675.successText,
            children: ["Found: ", T.name]
          })]
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk958675.rightPanel,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          className: Chunk958675.section,
          children: "Product Preview"
        }), null != T && null != A ? (0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk958675.previewContainer,
            children: (0, Chunk951288.jsx)(E, {
              product: T,
              user: module,
              category: A,
              tab: Chunk215023.AW.HOME
            })
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            onClick: N,
            text: "Show Collectibles Collected Modal"
          })]
        }) : (0, Chunk951288.jsx)("div", {
          className: Chunk958675.placeholder,
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            className: Chunk958675.mutedText,
            children: "Enter a valid product SKU ID to see the preview"
          })
        })]
      })]
    })
  }