/** Chunk was on 89001 **/
/** chunk id: 621490, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A3: () => A,
  f9: () => v,
  gY: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224550 = require("./224550.jsx"),
  Chunk672971 = require("./672971.jsx"),
  Chunk128069 = require("./128069.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk612853 = require("./612853.jsx"),
  Chunk712297 = require("./712297.js"),
  Chunk982204 = require("./982204.jsx"),
  Chunk811334 = require("./811334.jsx"),
  Chunk152521 = require("./152521.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk56207 = require("./56207.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let j = e => {
    let {
      orbAmount: t
    } = e;
    return (0, n.jsxs)(i.Text, {
      variant: "text-md/semibold",
      className: _.orbAmountTag,
      children: [(0, n.jsx)(y.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  P = e => {
    var {
      orbBalance: t,
      orbPriceAmount: r,
      loading: o,
      onClick: a
    } = e, s = function(e, t) {
      if (null == e) return {};
      var r, n, l = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
      }
      return l
    }(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
    let c = x({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton",
      text: E.intl.string(E.t.wmcDys)
    }, s);
    return null === r ? (0, n.jsx)(i.ua7, {
      text: E.intl.string(E.t["c/rcUl"]),
      children: e => (0, n.jsx)(l.zx, f(x({}, e, c), {
        disabled: true
      }))
    }) : null === t || r > t ? (0, n.jsx)(i.ua7, {
      text: E.intl.string(E.t.keFvXF),
      children: e => (0, n.jsx)(l.zx, f(x({}, e, c), {
        disabled: true
      }))
    }) : (0, n.jsx)(l.zx, f(x({}, c), {
      loading: o,
      onClick: a
    }))
  },
  C = e => {
    let {
      orbPriceAmount: t,
      skuId: r
    } = e, {
      skusById: l
    } = (0, d.Z)({
      applicationId: (0, b.N)(r),
      skuIDs: [r],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), o = l[r];
    return true === o ? (0, n.jsx)(O.aO, {
      children: (0, n.jsx)(i.$jN, {
        type: i.$jN.Type.PULSING_ELLIPSIS,
        className: _.purchaseDetailsSpinner
      })
    }) : (0, n.jsx)(p.E, {
      sku: o,
      value: (0, n.jsx)(j, {
        orbAmount: t
      })
    })
  },
  g = e => {
    let {
      orbBalance: t
    } = e;
    return (0, n.jsxs)("div", {
      className: _.paymentSourceWrapper,
      children: [(0, n.jsx)(i.vwX, {
        tag: i.RB0.H5,
        children: E.intl.string(E.t.mmDvV1)
      }), (0, n.jsxs)("div", {
        className: _.paymentSourceItem,
        children: [(0, n.jsx)(i.Text, {
          className: _.displayFlex,
          variant: "text-md/medium",
          children: E.intl.string(E.t.y0WGqK)
        }), (0, n.jsx)(i.Text, {
          className: _.displayFlex,
          variant: "text-md/medium",
          children: (0, n.jsx)(j, {
            orbAmount: t
          })
        })]
      })]
    })
  },
  h = e => {
    let {
      error: t
    } = e;
    if (null == t) return;
    let r = "";
    return r = t.code === s.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? E.intl.string(E.t.keFvXF) : t.code === s.SM.ALREADY_PURCHASED ? E.intl.string(E.t.m371Mz) : E.intl.string(E.t.fqJZ19), (0, n.jsx)("div", {
      className: _.formErrorContainer,
      children: (0, n.jsx)(i.kzN, {
        children: r
      })
    })
  },
  A = e => {
    let {
      skuId: t,
      orbPriceAmount: r,
      orbBalance: l
    } = e;
    return (0, n.jsxs)("div", {
      className: _.stepBody,
      children: [(0, n.jsx)(i.vwX, {
        tag: i.RB0.H5,
        children: E.intl.string(E.t.sail9P)
      }), (0, n.jsx)(C, {
        skuId: t,
        orbPriceAmount: r
      }), (0, n.jsx)(g, {
        orbBalance: l
      }), (0, n.jsx)(a.Z, {
        forceShow: true,
        onChange: m.dG4,
        finePrint: (0, n.jsx)(o.Z, {
          isOrbCheckout: true,
          skuId: t,
          purchaseType: m.GZQ.ONE_TIME
        })
      })]
    })
  },
  v = e => {
    let {
      orbPriceAmount: t,
      orbBalance: r,
      isSubmitting: l,
      onClickCheckout: o
    } = e;
    return (0, n.jsxs)(i.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, n.jsx)(P, {
        orbBalance: r,
        orbPriceAmount: t,
        loading: l,
        onClick: o
      }), (0, n.jsx)(u.Z, {})]
    })
  }