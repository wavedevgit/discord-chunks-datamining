/** Chunk was on web.js **/
/** chunk id: 748714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => x,
  f4: () => D,
  f9: () => L,
  gY: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224550 = require("./224550.jsx"),
  Chunk672971 = require("./672971.jsx"),
  Chunk128069 = require("./128069.js"),
  Chunk445794 = require("./445794.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk612853 = require("./612853.jsx"),
  Chunk658114 = require("./658114.jsx"),
  Chunk712297 = require("./712297.js"),
  Chunk982204 = require("./982204.jsx"),
  Chunk811334 = require("./811334.jsx"),
  Chunk152521 = require("./152521.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk66360 = require("./66360.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = e => {
    let {
      orbAmount: t
    } = e;
    return (0, r.jsxs)(a.Text, {
      variant: "text-md/semibold",
      className: y.orbAmountTag,
      children: [(0, r.jsx)(g.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  N = e => {
    var {
      orbBalance: t,
      orbPriceAmount: n,
      loading: o,
      onClick: s
    } = e, l = S(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
    let c = v({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton",
      text: b.intl.string(b.t.wmcDyu)
    }, l);
    return null === n ? (0, r.jsx)(a.aML, {
      "data-migration-pending": true,
      text: b.intl.string(b.t["c/rcUu"]),
      children: e => (0, r.jsx)(i.zxk, T(v({}, e, c), {
        disabled: true
      }))
    }) : null === t || n > t ? (0, r.jsx)(a.aML, {
      text: b.intl.string(b.t.keFvXM),
      children: e => (0, r.jsx)(i.zxk, T(v({}, e, c), {
        disabled: true
      }))
    }) : (0, r.jsx)(i.zxk, T(v({}, c), {
      loading: o,
      onClick: s
    }))
  },
  R = e => {
    let {
      orbPriceAmount: t,
      skuId: n
    } = e, {
      skusById: i
    } = (0, _.Z)({
      applicationId: (0, m.N)(n),
      skuIDs: [n],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), o = i[n];
    return true === o ? (0, r.jsx)(h.aO, {
      children: (0, r.jsx)(a.$jN, {
        type: a.$jN.Type.PULSING_ELLIPSIS,
        className: y.purchaseDetailsSpinner
      })
    }) : (0, r.jsx)(p.E, {
      sku: o,
      value: (0, r.jsx)(C, {
        orbAmount: t
      })
    })
  },
  P = e => {
    let {
      orbBalance: t
    } = e;
    return (0, r.jsx)(a.gNt, {
      label: b.intl.string(b.t["mmDvV+"]),
      children: (0, r.jsxs)(a.UPk, {
        className: y.paymentSourceItem,
        children: [(0, r.jsx)(a.Text, {
          className: y.displayFlex,
          variant: "text-md/medium",
          children: b.intl.string(b.t.y0WGqP)
        }), (0, r.jsx)(a.Text, {
          className: y.displayFlex,
          variant: "text-md/medium",
          children: (0, r.jsx)(C, {
            orbAmount: t
          })
        })]
      })
    })
  },
  w = e => {
    let {
      error: t
    } = e;
    if (null == t) return;
    let n = "";
    return n = t.code === l.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? b.intl.string(b.t.keFvXM) : t.code === l.SM.ALREADY_PURCHASED ? b.intl.string(b.t.m371Mx) : b.intl.string(b.t.fqJZ11), (0, r.jsx)(a.M14, {
      type: "critical",
      children: n
    })
  },
  D = e => {
    let {
      skuId: t
    } = e;
    return (0, c.N3)({
      skuId: t,
      isOrbsPurchase: true
    }) ? (0, r.jsx)(f.Z, {
      message: b.intl.format(b.t.fsOXXO, {})
    }) : null
  },
  x = e => {
    let {
      skuId: t,
      orbPriceAmount: n,
      orbBalance: i
    } = e;
    return (0, r.jsxs)("div", {
      className: y.stepBody,
      children: [(0, r.jsx)(a.gNt, {
        label: b.intl.string(b.t.sail9P),
        children: (0, r.jsx)(R, {
          skuId: t,
          orbPriceAmount: n
        })
      }), (0, r.jsx)(P, {
        orbBalance: i
      }), (0, r.jsx)(s.Z, {
        forceShow: true,
        onChange: E.dG4,
        finePrint: (0, r.jsx)(o.Z, {
          isOrbCheckout: true,
          skuId: t,
          purchaseType: E.GZQ.ONE_TIME
        })
      })]
    })
  },
  L = e => {
    let {
      orbPriceAmount: t,
      orbBalance: n,
      isSubmitting: i,
      onClickCheckout: o
    } = e;
    return (0, r.jsxs)(a.mzw, {
      align: u.Z.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, r.jsx)(N, {
        orbBalance: n,
        orbPriceAmount: t,
        loading: i,
        onClick: o
      }), (0, r.jsx)(d.Z, {})]
    })
  }