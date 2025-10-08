/** Chunk was on 24975 **/
/** chunk id: 748714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A3: () => N,
  f4: () => A,
  f9: () => I,
  gY: () => S
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

function v(e) {
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

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = e => {
    let {
      orbAmount: t
    } = e;
    return (0, r.jsxs)(i.Text, {
      variant: "text-md/semibold",
      className: h.orbAmountTag,
      children: [(0, r.jsx)(O.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  P = e => {
    var {
      orbBalance: t,
      orbPriceAmount: n,
      loading: a,
      onClick: o
    } = e, s = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
    let c = v({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton",
      text: j.intl.string(j.t.wmcDys)
    }, s);
    return null === n ? (0, r.jsx)(i.ua7, {
      text: j.intl.string(j.t["c/rcUl"]),
      children: e => (0, r.jsx)(l.zxk, x(v({}, e, c), {
        disabled: true
      }))
    }) : null === t || n > t ? (0, r.jsx)(i.ua7, {
      text: j.intl.string(j.t.keFvXF),
      children: e => (0, r.jsx)(l.zxk, x(v({}, e, c), {
        disabled: true
      }))
    }) : (0, r.jsx)(l.zxk, x(v({}, c), {
      loading: a,
      onClick: o
    }))
  },
  _ = e => {
    let {
      orbPriceAmount: t,
      skuId: n
    } = e, {
      skusById: l
    } = (0, f.Z)({
      applicationId: (0, m.N)(n),
      skuIDs: [n],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), a = l[n];
    return true === a ? (0, r.jsx)(y.aO, {
      children: (0, r.jsx)(i.$jN, {
        type: i.$jN.Type.PULSING_ELLIPSIS,
        className: h.purchaseDetailsSpinner
      })
    }) : (0, r.jsx)(b.E, {
      sku: a,
      value: (0, r.jsx)(E, {
        orbAmount: t
      })
    })
  },
  C = e => {
    let {
      orbBalance: t
    } = e;
    return (0, r.jsxs)("div", {
      className: h.paymentSourceWrapper,
      children: [(0, r.jsx)(i.vwX, {
        children: j.intl.string(j.t.mmDvV1)
      }), (0, r.jsxs)("div", {
        className: h.paymentSourceItem,
        children: [(0, r.jsx)(i.Text, {
          className: h.displayFlex,
          variant: "text-md/medium",
          children: j.intl.string(j.t.y0WGqK)
        }), (0, r.jsx)(i.Text, {
          className: h.displayFlex,
          variant: "text-md/medium",
          children: (0, r.jsx)(E, {
            orbAmount: t
          })
        })]
      })]
    })
  },
  S = e => {
    let {
      error: t
    } = e;
    if (null == t) return;
    let n = "";
    return n = t.code === s.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? j.intl.string(j.t.keFvXF) : t.code === s.SM.ALREADY_PURCHASED ? j.intl.string(j.t.m371Mz) : j.intl.string(j.t.fqJZ19), (0, r.jsx)(i.kzN, {
      children: n
    })
  },
  A = e => {
    let {
      skuId: t
    } = e;
    return (0, c.N3)({
      skuId: t,
      isOrbsPurchase: true
    }) ? (0, r.jsx)(p.Z, {
      message: j.intl.format(j.t.fsOXXF, {})
    }) : null
  },
  N = e => {
    let {
      skuId: t,
      orbPriceAmount: n,
      orbBalance: l
    } = e;
    return (0, r.jsxs)("div", {
      className: h.stepBody,
      children: [(0, r.jsx)(i.vwX, {
        children: j.intl.string(j.t.sail9P)
      }), (0, r.jsx)(_, {
        skuId: t,
        orbPriceAmount: n
      }), (0, r.jsx)(C, {
        orbBalance: l
      }), (0, r.jsx)(o.Z, {
        forceShow: true,
        onChange: g.dG4,
        finePrint: (0, r.jsx)(a.Z, {
          isOrbCheckout: true,
          skuId: t,
          purchaseType: g.GZQ.ONE_TIME
        })
      })]
    })
  },
  I = e => {
    let {
      orbPriceAmount: t,
      orbBalance: n,
      isSubmitting: l,
      onClickCheckout: a
    } = e;
    return (0, r.jsxs)(i.mzw, {
      align: u.Z.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, r.jsx)(P, {
        orbBalance: n,
        orbPriceAmount: t,
        loading: l,
        onClick: a
      }), (0, r.jsx)(d.Z, {})]
    })
  }