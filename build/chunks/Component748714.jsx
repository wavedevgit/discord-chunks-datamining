/** Chunk was on 48502 **/
/** chunk id: 748714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A3: () => N,
  f4: () => S,
  f9: () => I,
  gY: () => A
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

function P(e, t) {
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
      className: v.orbAmountTag,
      children: [(0, r.jsx)(m.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  x = e => {
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
    let c = j({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton",
      text: h.intl.string(h.t.wmcDyu)
    }, s);
    return null === n ? (0, r.jsx)(i.aML, {
      "data-migration-pending": true,
      text: h.intl.string(h.t["c/rcUu"]),
      children: e => (0, r.jsx)(l.zxk, P(j({}, e, c), {
        disabled: true
      }))
    }) : null === t || n > t ? (0, r.jsx)(i.aML, {
      text: h.intl.string(h.t.keFvXM),
      children: e => (0, r.jsx)(l.zxk, P(j({}, e, c), {
        disabled: true
      }))
    }) : (0, r.jsx)(l.zxk, P(j({}, c), {
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
      applicationId: (0, O.N)(n),
      skuIDs: [n],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), a = l[n];
    return true === a ? (0, r.jsx)(y.aO, {
      children: (0, r.jsx)(i.$jN, {
        type: i.$jN.Type.PULSING_ELLIPSIS,
        className: v.purchaseDetailsSpinner
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
    return (0, r.jsx)(i.gNt, {
      label: h.intl.string(h.t["mmDvV+"]),
      children: (0, r.jsxs)(i.UPk, {
        className: v.paymentSourceItem,
        children: [(0, r.jsx)(i.Text, {
          className: v.displayFlex,
          variant: "text-md/medium",
          children: h.intl.string(h.t.y0WGqP)
        }), (0, r.jsx)(i.Text, {
          className: v.displayFlex,
          variant: "text-md/medium",
          children: (0, r.jsx)(E, {
            orbAmount: t
          })
        })]
      })
    })
  },
  A = e => {
    let {
      error: t
    } = e;
    if (null == t) return;
    let n = "";
    return n = t.code === s.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? h.intl.string(h.t.keFvXM) : t.code === s.SM.ALREADY_PURCHASED ? h.intl.string(h.t.m371Mx) : h.intl.string(h.t.fqJZ11), (0, r.jsx)(i.M14, {
      type: "critical",
      children: n
    })
  },
  S = e => {
    let {
      skuId: t
    } = e;
    return (0, c.N3)({
      skuId: t,
      isOrbsPurchase: true
    }) ? (0, r.jsx)(p.Z, {
      message: h.intl.format(h.t.fsOXXO, {})
    }) : null
  },
  N = e => {
    let {
      skuId: t,
      orbPriceAmount: n,
      orbBalance: l
    } = e;
    return (0, r.jsxs)("div", {
      className: v.stepBody,
      children: [(0, r.jsx)(i.gNt, {
        label: h.intl.string(h.t.sail9P),
        children: (0, r.jsx)(_, {
          skuId: t,
          orbPriceAmount: n
        })
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
      children: [(0, r.jsx)(x, {
        orbBalance: n,
        orbPriceAmount: t,
        loading: l,
        onClick: a
      }), (0, r.jsx)(d.Z, {})]
    })
  }