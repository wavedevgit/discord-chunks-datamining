/** Chunk was on 6043 **/
/** chunk id: 383036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk594174 = require("./594174.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk223143 = require("./223143.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk832149 = require("./832149.jsx"),
  Chunk627911 = require("./627911.js");
let f = e => {
    let [t, n] = r.useState(0);
    return r.useLayoutEffect(() => {
      let e = d.Z.getPurchase;
      return d.Z.getPurchase = e => true, d.Z.emitChange(), n(1), () => {
        d.Z.getPurchase = e, d.Z.emitChange()
      }
    }, []), (0, a.jsx)("div", {
      className: h.previewProductCardContainer,
      children: (0, a.jsx)(m.Z, function(e) {
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
  x = () => {
    let e = (0, Chunk399606.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
      t = (0, Chunk399606.e7)([Chunk597688.Z], () => Chunk597688.Z.categories),
      n = (0, Chunk399606.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
      m = (0, Chunk399606.e7)([Chunk597688.Z], () => Chunk597688.Z.lastSuccessfulFetch),
      x = exports.size > 0 && require.size > 0 && null != Chunk653126,
      {
        isFetching: b,
        categories: g
      } = (0, Chunk223143.ZP)({
        logPerf: false,
        stalePurchasesOK: true,
        noOp: x
      }),
      v = x ? exports : g,
      j = x || !b && v.size > 0,
      [y, C] = Chunk473749.useState(""),
      [_, S] = Chunk473749.useState(null),
      [E, T] = Chunk473749.useState(null);
    return (Chunk473749.useEffect(() => {
      if ("" === y.trim() || !j) {
        S(null), T(null);
        return
      }
      let e = Chunk597688.Z.getProduct(y),
        t = Chunk597688.Z.getCategoryForProduct(y);
      null != module && null != exports ? (S(module), T(exports)) : (S(null), T(null))
    }, [y, j]), b) ? (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "Loading categories and collectibles..."
    }) : null == module ? (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "No user found"
    }) : (0, Chunk54381.jsxs)("div", {
      className: Chunk627911.container,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk627911.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Product Configuration"
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk627911.inputSection,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-md/semibold",
            className: Chunk627911.inputLabel,
            children: "Primary Product SKU ID"
          }), (0, Chunk54381.jsx)(Chunk481060.oil, {
            value: y,
            onChange: C,
            placeholder: "Enter product SKU ID"
          }), !j && "" !== y.trim() && (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            className: Chunk627911.loadingText,
            children: "Loading products..."
          }), j && "" !== y.trim() && null == _ && (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            className: Chunk627911.errorText,
            children: "Product not found"
          }), null != _ && (0, Chunk54381.jsxs)(Chunk481060.Text, {
            variant: "text-sm/normal",
            className: Chunk627911.successText,
            children: ["Found: ", _.name]
          })]
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk627911.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Product Preview"
        }), null != _ && null != E ? (0, Chunk54381.jsxs)("div", {
          className: Chunk627911.previewContainer,
          children: [(0, Chunk54381.jsx)(f, {
            skuId: _.skuId
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            onClick: () => {
              null != _ && null != module && (0, Chunk832149.Z)({
                product: _,
                analyticsLocations: [Chunk100527.Z.COLLECTIBLES_SHOP_CARD]
              })
            },
            text: "Show Collectibles Collected Modal"
          })]
        }) : (0, Chunk54381.jsx)("div", {
          className: Chunk627911.placeholder,
          children: (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            className: Chunk627911.mutedText,
            children: "Enter a valid product SKU ID to see the preview"
          })
        })]
      })]
    })
  }