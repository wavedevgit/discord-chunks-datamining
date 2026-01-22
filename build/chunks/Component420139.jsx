/** Chunk was on web.js **/
/** chunk id: 420139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk391048 = require("./391048.js"),
  Chunk158032 = require("./158032.js"),
  Chunk362111 = require("./362111.jsx"),
  Chunk821189 = require("./821189.jsx"),
  Chunk637141 = require("./637141.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk160946 = require("./160946.js"),
  Chunk351906 = require("./351906.js"),
  Chunk295405 = require("./295405.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk83617 = require("./83617.js"),
  Chunk615396 = require("./615396.js"),
  Chunk543767 = require("./543767.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk752375 = require("./752375.js"),
  Chunk20976 = require("./20976.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    subscription: t,
    onPaymentSourceAdded: n,
    highlightAddPaymentMethodButton: a,
    dropdownClassName: o,
    analyticsLocation: R,
    currentInvoicePreview: P,
    disabled: x = false
  } = e, j = (0, c.bG)([E.A], () => E.A.hidePersonalInformation), [M, k] = (0, c.yK)([b.A], () => [b.A.paymentSources, b.A.hasFetchedPaymentSources]), U = (0, g.Y)((0, v.MP)(t)), {
    analyticsLocations: G
  } = (0, m.Ay)(), V = i.useMemo(() => Object.values(M).filter(e => !e.invalid), [M]), [F, B] = i.useState(false), [H, Y] = i.useState(t.currency), W = async (e, n, r) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await f.r6(t, n, r, G, R) : await f.uK(t, e, n, r, G, R), B(false), Y(n)
  }, K = async (e, n, r) => {
    B(true);
    let i = await (0, S.OQ)({
        subscriptionId: t.id,
        paymentSourceId: null == e ? true : e.id,
        renewal: true,
        currency: n,
        analyticsLocations: G,
        analyticsLocation: R
      }),
      a = {
        amount: i.subtotal,
        currency: i.currency
      };
    P.currency !== i.currency || P.currency === i.currency && P.total !== i.total ? await L(i, () => {
      r(e, n, a)
    }, () => {
      B(false)
    }) : r(e, n, a)
  }, z = e => {
    let n = y.A.get(t.planIdForCurrencies);
    l()(null != e, "paymentSource not specified for change"), l()(null != n, "Unable to fetch plan");
    let r = (0, A._w)(n.id, e.id, false);
    return r.length > 0 ? r[0] : I.Yri.USD
  }, q = e => {
    null != e && K(e, z(e), W)
  }, X = e => {
    (0, A.c_)(e.id, (0, v.MP)(t)).then(() => {
      K(e, z(e), W)
    }), "function" == typeof n && n(e.id)
  }, Z = () => {
    (0, u.mMO)(async () => e => (0, r.jsx)(p.default, D(w({}, e), {
      onAddPaymentSource: X,
      analyticsLocation: R
    })), {
      onCloseCallback: () => {
        (0, d.ET)()
      },
      onCloseRequest: I.tEg
    })
  }, Q = () => {
    let e = t.paymentSourceId;
    return (0, r.jsx)(h.Ay, {
      prependOption: null == e ? {
        label: T.intl.string(T.t.iA5vA1),
        value: null
      } : null,
      className: o,
      paymentSources: V,
      hidePersonalInformation: j,
      selectedPaymentSourceId: e,
      onChange: q,
      onPaymentSourceAdd: Z,
      dropdownLoading: F,
      disabled: x,
      paymentGatewayRestrictions: t.eligiblePaymentGateways
    })
  }, $ = () => (0, r.jsx)(u.Button, {
    fullWidth: true,
    variant: a ? "primary" : "secondary",
    onClick: Z,
    text: T.intl.string(T.t.CpOiEO)
  }), J = e => {
    l()(null != e.paymentGateway, "Expected payment gateway when managed externally");
    let t = (0, O.tW)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
    return (0, r.jsx)(u.MzZ, {
      href: t,
      useDefaultUnderlineStyles: false,
      className: C.uZ,
      children: (0, r.jsx)(u.Button, {
        variant: "secondary",
        text: T.intl.string(T.t.SgX7Ra),
        fullWidth: true
      })
    })
  };
  if (t.isPurchasedExternally) return J(t);
  if (!k || !U) return (0, r.jsx)(u.y$y, {});
  if (!(V.length > 0)) return $();
  {
    let e = y.A.get(t.planIdForCurrencies);
    l()(null != e, "Unable to fetch plan");
    let n = (0, A._w)(e, t.paymentSourceId, false);
    return (0, r.jsxs)(r.Fragment, {
      children: [Q(), null != t.paymentSourceId ? (0, r.jsx)(_.f, {
        currencies: n,
        children: (0, r.jsx)("div", {
          className: s()(C.Gl, N.Uu, N.Hu),
          children: (0, r.jsx)(_.A, {
            label: T.intl.string(T.t["0YjaXf"]),
            selectedCurrency: H,
            currencies: n,
            onChange: e => {
              K(true, e, W)
            }
          })
        })
      }) : null]
    })
  }
}
let L = async (e, t, i) => {
  let a = await (0, u.mMO)(async () => {
    let {
      default: a
    } = await n.e("49297").then(n.bind(n, 760941));
    return n => (0, r.jsx)(a, {
      newInvoice: e,
      onConfirm: t,
      onCancel: i,
      modalProps: n
    })
  }, {
    onCloseRequest: () => {
      null != a && (0, u.OoC)(a), i()
    }
  })
}