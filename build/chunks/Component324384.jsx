/** Chunk was on web.js **/
/** chunk id: 324384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I$: () => w,
  J6: () => I,
  cL: () => R,
  l7: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk821891 = require("./821891.jsx"),
  Chunk953689 = require("./953689.jsx"),
  Chunk981036 = require("./981036.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk999784 = require("./999784.jsx"),
  Chunk516248 = require("./516248.jsx"),
  Chunk252293 = require("./252293.js"),
  Chunk319820 = require("./319820.jsx"),
  Chunk735164 = require("./735164.jsx"),
  Chunk310829 = require("./310829.js"),
  Chunk106799 = require("./106799.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk725682 = require("./725682.js");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = e => {
    let {
      orbAmount: t
    } = e;
    return (0, r.jsxs)(a.Text, {
      variant: "text-md/semibold",
      className: b.Ay,
      children: [(0, r.jsx)(m.A, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  I = e => {
    let {
      orbBalance: t,
      orbPriceAmount: n,
      rentalDuration: r
    } = e, a = (0, i.useMemo)(() => 3 === r ? E.intl.string(E.t.lpAQT0) : 7 === r ? E.intl.string(E.t["8Nn0ZK"]) : null != r ? E.intl.string(E.t["2n5l8j"]) : E.intl.string(E.t.wmcDyu), [r]), {
      disabled: s,
      tooltipText: o
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
      disabled: s,
      tooltipText: o,
      text: a
    }
  },
  T = e => {
    let {
      orbPriceAmount: t,
      skuId: n,
      rentalDuration: i
    } = e, {
      skusById: s
    } = (0, f.A)({
      applicationId: (0, h.p)(n),
      skuIDs: [n],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), o = s[n];
    return true === o ? (0, r.jsx)(_.Yx, {
      children: (0, r.jsx)(a.y$y, {
        type: a.y$y.Type.PULSING_ELLIPSIS,
        className: b.nJ
      })
    }) : (0, r.jsx)(p.U, {
      sku: o,
      value: (0, r.jsx)(S, {
        orbAmount: t
      }),
      rentalDuration: i
    })
  },
  C = e => {
    let {
      orbBalance: t
    } = e;
    return (0, r.jsx)(a.D0$, {
      label: E.intl.string(E.t["mmDvV+"]),
      children: (0, r.jsxs)(a.FON, {
        className: b.nQ,
        children: [(0, r.jsx)(a.Text, {
          className: b.OL,
          variant: "text-md/medium",
          children: E.intl.string(E.t.y0WGqP)
        }), (0, r.jsx)(a.Text, {
          className: b.OL,
          variant: "text-md/medium",
          children: (0, r.jsx)(S, {
            orbAmount: t
          })
        })]
      })
    })
  },
  N = () => (0, r.jsx)(d.A, {
    message: E.intl.format(E.t.fsOXXO, {})
  }),
  R = e => {
    let {
      skuId: t,
      orbPriceAmount: n,
      orbBalance: i,
      renderWithoutContainer: l,
      rentalDuration: c
    } = e, u = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.D0$, {
        label: E.intl.string(E.t.sail9P),
        children: (0, r.jsx)(T, {
          skuId: t,
          orbPriceAmount: n,
          rentalDuration: c
        })
      }), (0, r.jsx)(C, {
        orbBalance: i
      }), (0, r.jsx)(o.A, {
        forceShow: true,
        onChange: g.tEg,
        finePrint: (0, r.jsx)(s.A, {
          rentalDuration: c,
          isOrbCheckout: true,
          skuId: t,
          purchaseType: g.VVm.ONE_TIME
        })
      })]
    });
    return l ? u : (0, r.jsx)("div", {
      className: b.Du,
      children: u
    })
  },
  w = e => {
    let {
      orbPriceAmount: t,
      orbBalance: n,
      isSubmitting: s,
      onClickCheckout: o,
      rentalDuration: d
    } = e, {
      disabled: f,
      tooltipText: p,
      text: _
    } = I({
      orbBalance: n,
      orbPriceAmount: t,
      rentalDuration: d
    }), h = (0, i.useMemo)(() => ({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton"
    }), []);
    return (0, r.jsxs)(a.jlY, {
      align: c.A.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, r.jsx)(l.p, v(O({}, h), {
        onClick: o,
        loading: s,
        disabled: f,
        tooltipText: p,
        text: _
      })), (0, r.jsx)(u.A, {})]
    })
  }