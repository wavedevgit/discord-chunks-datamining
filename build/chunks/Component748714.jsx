/** Chunk was on 204 **/
/** chunk id: 748714, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A3: () => A,
  f4: () => I,
  f9: () => w,
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

function j(e) {
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

function P(e, t) {
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
let _ = e => {
    let {
      orbAmount: t
    } = e;
    return (0, n.jsxs)(i.Text, {
      variant: "text-md/semibold",
      className: v.orbAmountTag,
      children: [(0, n.jsx)(y.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  E = e => {
    var {
      orbBalance: t,
      orbPriceAmount: r,
      loading: a,
      onClick: o
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
    let c = j({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton",
      text: O.intl.string(O.t.wmcDys)
    }, s);
    return null === r ? (0, n.jsx)(i.ua7, {
      text: O.intl.string(O.t["c/rcUl"]),
      children: e => (0, n.jsx)(l.zxk, P(j({}, e, c), {
        disabled: true
      }))
    }) : null === t || r > t ? (0, n.jsx)(i.ua7, {
      text: O.intl.string(O.t.keFvXF),
      children: e => (0, n.jsx)(l.zxk, P(j({}, e, c), {
        disabled: true
      }))
    }) : (0, n.jsx)(l.zxk, P(j({}, c), {
      loading: a,
      onClick: o
    }))
  },
  x = e => {
    let {
      orbPriceAmount: t,
      skuId: r
    } = e, {
      skusById: l
    } = (0, f.Z)({
      applicationId: (0, g.N)(r),
      skuIDs: [r],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), a = l[r];
    return true === a ? (0, n.jsx)(h.aO, {
      children: (0, n.jsx)(i.$jN, {
        type: i.$jN.Type.PULSING_ELLIPSIS,
        className: v.purchaseDetailsSpinner
      })
    }) : (0, n.jsx)(b.E, {
      sku: a,
      value: (0, n.jsx)(_, {
        orbAmount: t
      })
    })
  },
  C = e => {
    let {
      orbBalance: t
    } = e;
    return (0, n.jsxs)("div", {
      className: v.paymentSourceWrapper,
      children: [(0, n.jsx)(i.vwX, {
        children: O.intl.string(O.t.mmDvV1)
      }), (0, n.jsxs)("div", {
        className: v.paymentSourceItem,
        children: [(0, n.jsx)(i.Text, {
          className: v.displayFlex,
          variant: "text-md/medium",
          children: O.intl.string(O.t.y0WGqK)
        }), (0, n.jsx)(i.Text, {
          className: v.displayFlex,
          variant: "text-md/medium",
          children: (0, n.jsx)(_, {
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
    let r = "";
    return r = t.code === s.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? O.intl.string(O.t.keFvXF) : t.code === s.SM.ALREADY_PURCHASED ? O.intl.string(O.t.m371Mz) : O.intl.string(O.t.fqJZ19), (0, n.jsx)(i.kzN, {
      children: r
    })
  },
  I = e => {
    let {
      skuId: t
    } = e;
    return (0, c.N3)({
      skuId: t,
      isOrbsPurchase: true
    }) ? (0, n.jsx)(p.Z, {
      message: O.intl.format(O.t.fsOXXF, {})
    }) : null
  },
  A = e => {
    let {
      skuId: t,
      orbPriceAmount: r,
      orbBalance: l
    } = e;
    return (0, n.jsxs)("div", {
      className: v.stepBody,
      children: [(0, n.jsx)(i.vwX, {
        children: O.intl.string(O.t.sail9P)
      }), (0, n.jsx)(x, {
        skuId: t,
        orbPriceAmount: r
      }), (0, n.jsx)(C, {
        orbBalance: l
      }), (0, n.jsx)(o.Z, {
        forceShow: true,
        onChange: m.dG4,
        finePrint: (0, n.jsx)(a.Z, {
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
      orbBalance: r,
      isSubmitting: l,
      onClickCheckout: a
    } = e;
    return (0, n.jsxs)(i.mzw, {
      align: u.Z.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, n.jsx)(E, {
        orbBalance: r,
        orbPriceAmount: t,
        loading: l,
        onClick: a
      }), (0, n.jsx)(d.Z, {})]
    })
  }