/** Chunk was on web.js **/
/** chunk id: 621490, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => P,
  f9: () => w,
  gY: () => R
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let S = e => {
    let {
      orbAmount: t
    } = e;
    return (0, r.jsxs)(a.Text, {
      variant: "text-md/semibold",
      className: E.orbAmountTag,
      children: [(0, r.jsx)(h.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  A = e => {
    var {
      orbBalance: t,
      orbPriceAmount: n,
      loading: o,
      onClick: s
    } = e, l = I(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
    let c = y({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton",
      text: g.intl.string(g.t.wmcDys)
    }, l);
    return null === n ? (0, r.jsx)(a.ua7, {
      text: g.intl.string(g.t["c/rcUl"]),
      children: e => (0, r.jsx)(i.zx, v(y({}, e, c), {
        disabled: true
      }))
    }) : null === t || n > t ? (0, r.jsx)(a.ua7, {
      text: g.intl.string(g.t.keFvXF),
      children: e => (0, r.jsx)(i.zx, v(y({}, e, c), {
        disabled: true
      }))
    }) : (0, r.jsx)(i.zx, v(y({}, c), {
      loading: o,
      onClick: s
    }))
  },
  C = e => {
    let {
      orbPriceAmount: t,
      skuId: n
    } = e, {
      skusById: i
    } = (0, d.Z)({
      applicationId: (0, p.N)(n),
      skuIDs: [n],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), o = i[n];
    return true === o ? (0, r.jsx)(_.aO, {
      children: (0, r.jsx)(a.$jN, {
        type: a.$jN.Type.PULSING_ELLIPSIS,
        className: E.purchaseDetailsSpinner
      })
    }) : (0, r.jsx)(f.E, {
      sku: o,
      value: (0, r.jsx)(S, {
        orbAmount: t
      })
    })
  },
  N = e => {
    let {
      orbBalance: t
    } = e;
    return (0, r.jsxs)("div", {
      className: E.paymentSourceWrapper,
      children: [(0, r.jsx)(a.vwX, {
        tag: a.RB0.H5,
        children: g.intl.string(g.t.mmDvV1)
      }), (0, r.jsxs)("div", {
        className: E.paymentSourceItem,
        children: [(0, r.jsx)(a.Text, {
          className: E.displayFlex,
          variant: "text-md/medium",
          children: g.intl.string(g.t.y0WGqK)
        }), (0, r.jsx)(a.Text, {
          className: E.displayFlex,
          variant: "text-md/medium",
          children: (0, r.jsx)(S, {
            orbAmount: t
          })
        })]
      })]
    })
  },
  R = e => {
    let {
      error: t
    } = e;
    if (null == t) return;
    let n = "";
    return n = t.code === l.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? g.intl.string(g.t.keFvXF) : t.code === l.SM.ALREADY_PURCHASED ? g.intl.string(g.t.m371Mz) : g.intl.string(g.t.fqJZ19), (0, r.jsx)("div", {
      className: E.formErrorContainer,
      children: (0, r.jsx)(a.kzN, {
        children: n
      })
    })
  },
  P = e => {
    let {
      skuId: t,
      orbPriceAmount: n,
      orbBalance: i
    } = e;
    return (0, r.jsxs)("div", {
      className: E.stepBody,
      children: [(0, r.jsx)(a.vwX, {
        tag: a.RB0.H5,
        children: g.intl.string(g.t.sail9P)
      }), (0, r.jsx)(C, {
        skuId: t,
        orbPriceAmount: n
      }), (0, r.jsx)(N, {
        orbBalance: i
      }), (0, r.jsx)(s.Z, {
        forceShow: true,
        onChange: m.dG4,
        finePrint: (0, r.jsx)(o.Z, {
          isOrbCheckout: true,
          skuId: t,
          purchaseType: m.GZQ.ONE_TIME
        })
      })]
    })
  },
  w = e => {
    let {
      orbPriceAmount: t,
      orbBalance: n,
      isSubmitting: i,
      onClickCheckout: o
    } = e;
    return (0, r.jsxs)(a.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, r.jsx)(A, {
        orbBalance: n,
        orbPriceAmount: t,
        loading: i,
        onClick: o
      }), (0, r.jsx)(u.Z, {})]
    })
  }