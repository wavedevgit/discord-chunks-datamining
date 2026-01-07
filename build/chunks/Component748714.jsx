/** Chunk was on web.js **/
/** chunk id: 748714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => P,
  Do: () => T,
  f4: () => N,
  f9: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224550 = require("./224550.jsx"),
  Chunk672971 = require("./672971.jsx"),
  Chunk81088 = require("./81088.jsx"),
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
  Chunk564087 = require("./564087.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
    let {
      orbAmount: t
    } = e;
    return (0, r.jsxs)(a.Text, {
      variant: "text-md/semibold",
      className: b.orbAmountTag,
      children: [(0, r.jsx)(h.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  T = e => {
    let {
      orbBalance: t,
      orbPriceAmount: n,
      rentalDuration: r
    } = e, a = (0, i.useMemo)(() => 3 === r ? E.intl.string(E.t.lpAQT0) : 7 === r ? E.intl.string(E.t["8Nn0ZK"]) : null != r ? E.intl.string(E.t["2n5l8j"]) : E.intl.string(E.t.wmcDyu), [r]), {
      disabled: o,
      tooltipText: s
    } = (0, i.useMemo)(() => null == n ? {
      disabled: true,
      tooltipText: E.intl.string(E.t["c/rcUu"])
    } : null == t || n > t ? {
      disabled: true,
      tooltipText: E.intl.string(E.t.keFvXM)
    } : {
      disabled: false,
      tooltipText: null
    }, [n, t]);
    return {
      disabled: o,
      tooltipText: s,
      text: a
    }
  },
  C = e => {
    let {
      orbPriceAmount: t,
      skuId: n,
      rentalDuration: i
    } = e, {
      skusById: o
    } = (0, f.Z)({
      applicationId: (0, m.Nb)(n),
      skuIDs: [n],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), s = o[n];
    return true === s ? (0, r.jsx)(_.aO, {
      children: (0, r.jsx)(a.$jN, {
        type: a.$jN.Type.PULSING_ELLIPSIS,
        className: b.purchaseDetailsSpinner
      })
    }) : (0, r.jsx)(p.E, {
      sku: s,
      value: (0, r.jsx)(I, {
        orbAmount: t
      }),
      rentalDuration: i
    })
  },
  A = e => {
    let {
      orbBalance: t
    } = e;
    return (0, r.jsx)(a.gNt, {
      label: E.intl.string(E.t["mmDvV+"]),
      children: (0, r.jsxs)(a.UPk, {
        className: b.paymentSourceItem,
        children: [(0, r.jsx)(a.Text, {
          className: b.displayFlex,
          variant: "text-md/medium",
          children: E.intl.string(E.t.y0WGqP)
        }), (0, r.jsx)(a.Text, {
          className: b.displayFlex,
          variant: "text-md/medium",
          children: (0, r.jsx)(I, {
            orbAmount: t
          })
        })]
      })
    })
  },
  N = () => (0, r.jsx)(d.Z, {
    message: E.intl.format(E.t.fsOXXO, {})
  }),
  P = e => {
    let {
      skuId: t,
      orbPriceAmount: n,
      orbBalance: i,
      renderWithoutContainer: l,
      rentalDuration: c
    } = e, u = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.gNt, {
        label: E.intl.string(E.t.sail9P),
        children: (0, r.jsx)(C, {
          skuId: t,
          orbPriceAmount: n,
          rentalDuration: c
        })
      }), (0, r.jsx)(A, {
        orbBalance: i
      }), (0, r.jsx)(s.Z, {
        forceShow: true,
        onChange: g.dG4,
        finePrint: (0, r.jsx)(o.Z, {
          rentalDuration: c,
          isOrbCheckout: true,
          skuId: t,
          purchaseType: g.GZQ.ONE_TIME
        })
      })]
    });
    return l ? u : (0, r.jsx)("div", {
      className: b.stepBody,
      children: u
    })
  },
  R = e => {
    let {
      orbPriceAmount: t,
      orbBalance: n,
      isSubmitting: o,
      onClickCheckout: s,
      rentalDuration: d
    } = e, {
      disabled: f,
      tooltipText: p,
      text: _
    } = T({
      orbBalance: n,
      orbPriceAmount: t,
      rentalDuration: d
    }), m = (0, i.useMemo)(() => ({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton"
    }), []);
    return (0, r.jsxs)(a.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, r.jsx)(l.Ko, S(O({}, m), {
        onClick: s,
        loading: o,
        disabled: f,
        tooltipText: p,
        text: _
      })), (0, r.jsx)(u.Z, {})]
    })
  }