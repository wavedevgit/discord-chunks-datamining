/** Chunk was on web.js **/
/** chunk id: 748714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => L,
  f4: () => x,
  f9: () => M,
  gY: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk28664 = require("./28664.jsx"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let N = e => {
    let {
      orbAmount: t
    } = e;
    return (0, r.jsxs)(o.Text, {
      variant: "text-md/semibold",
      className: O.orbAmountTag,
      children: [(0, r.jsx)(E.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  R = e => {
    var {
      orbBalance: t,
      orbPriceAmount: n,
      loading: o,
      onClick: s
    } = e, l = A(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
    let c = I({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton",
      text: y.intl.string(y.t.wmcDyu)
    }, l);
    return null === n ? (0, r.jsx)(i.u, {
      text: y.intl.string(y.t["c/rcUu"]),
      asContainer: true,
      children: (0, r.jsx)(a.zxk, S(I({}, c), {
        disabled: true
      }))
    }) : null === t || n > t ? (0, r.jsx)(i.u, {
      text: y.intl.string(y.t.keFvXM),
      asContainer: true,
      children: (0, r.jsx)(a.zxk, S(I({}, c), {
        disabled: true
      }))
    }) : (0, r.jsx)(a.zxk, S(I({}, c), {
      loading: o,
      onClick: s
    }))
  },
  P = e => {
    let {
      orbPriceAmount: t,
      skuId: n
    } = e, {
      skusById: i
    } = (0, p.Z)({
      applicationId: (0, g.Nb)(n),
      skuIDs: [n],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), a = i[n];
    return true === a ? (0, r.jsx)(m.aO, {
      children: (0, r.jsx)(o.$jN, {
        type: o.$jN.Type.PULSING_ELLIPSIS,
        className: O.purchaseDetailsSpinner
      })
    }) : (0, r.jsx)(h.E, {
      sku: a,
      value: (0, r.jsx)(N, {
        orbAmount: t
      })
    })
  },
  D = e => {
    let {
      orbBalance: t
    } = e;
    return (0, r.jsx)(o.gNt, {
      label: y.intl.string(y.t["mmDvV+"]),
      children: (0, r.jsxs)(o.UPk, {
        className: O.paymentSourceItem,
        children: [(0, r.jsx)(o.Text, {
          className: O.displayFlex,
          variant: "text-md/medium",
          children: y.intl.string(y.t.y0WGqP)
        }), (0, r.jsx)(o.Text, {
          className: O.displayFlex,
          variant: "text-md/medium",
          children: (0, r.jsx)(N, {
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
    return n = t.code === c.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? y.intl.string(y.t.keFvXM) : t.code === c.SM.ALREADY_PURCHASED ? y.intl.string(y.t.m371Mx) : y.intl.string(y.t.fqJZ11), (0, r.jsx)(o.M14, {
      type: "critical",
      children: n
    })
  },
  x = e => {
    let {
      skuId: t
    } = e;
    return (0, u.N3)({
      skuId: t,
      isOrbsPurchase: true
    }) ? (0, r.jsx)(_.Z, {
      message: y.intl.format(y.t.fsOXXO, {})
    }) : null
  },
  L = e => {
    let {
      skuId: t,
      orbPriceAmount: n,
      orbBalance: i
    } = e;
    return (0, r.jsxs)("div", {
      className: O.stepBody,
      children: [(0, r.jsx)(o.gNt, {
        label: y.intl.string(y.t.sail9P),
        children: (0, r.jsx)(P, {
          skuId: t,
          orbPriceAmount: n
        })
      }), (0, r.jsx)(D, {
        orbBalance: i
      }), (0, r.jsx)(l.Z, {
        forceShow: true,
        onChange: b.dG4,
        finePrint: (0, r.jsx)(s.Z, {
          isOrbCheckout: true,
          skuId: t,
          purchaseType: b.GZQ.ONE_TIME
        })
      })]
    })
  },
  M = e => {
    let {
      orbPriceAmount: t,
      orbBalance: n,
      isSubmitting: i,
      onClickCheckout: a
    } = e;
    return (0, r.jsxs)(o.mzw, {
      align: d.Z.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, r.jsx)(R, {
        orbBalance: n,
        orbPriceAmount: t,
        loading: i,
        onClick: a
      }), (0, r.jsx)(f.Z, {})]
    })
  }