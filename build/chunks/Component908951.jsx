/** Chunk was on web.js **/
/** chunk id: 908951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk159351 = require("./159351.js"),
  Chunk366939 = require("./366939.js"),
  Chunk623573 = require("./623573.jsx"),
  Chunk190947 = require("./190947.jsx"),
  Chunk275850 = require("./275850.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk15640 = require("./15640.js"),
  Chunk246946 = require("./246946.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk212895 = require("./212895.js"),
  Chunk296848 = require("./296848.js"),
  Chunk374649 = require("./374649.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk474157 = require("./474157.js"),
  Chunk465106 = require("./465106.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
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

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  let {
    subscription: t,
    onPaymentSourceAdded: n,
    highlightAddPaymentMethodButton: a,
    dropdownClassName: s,
    analyticsLocation: R,
    currentInvoicePreview: D,
    disabled: L = false
  } = e, M = (0, c.e7)([E.Z], () => E.Z.hidePersonalInformation), [j, k] = (0, c.Wu)([b.Z], () => [b.Z.paymentSources, b.Z.hasFetchedPaymentSources]), U = (0, g.V)((0, I.yb)(t)), {
    analyticsLocations: G
  } = (0, m.ZP)(), B = i.useMemo(() => Object.values(j).filter(e => !e.invalid), [j]), [Z, F] = i.useState(false), [V, H] = i.useState(t.currency), Y = async (e, n, r) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await f.fG(t, n, r, G, R) : await f.tq(t, e, n, r, G, R), F(false), H(n)
  }, W = async (e, n, r) => {
    F(true);
    let i = await (0, T.hz)({
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
    D.currency !== i.currency || D.currency === i.currency && D.total !== i.total ? await x(i, () => {
      r(e, n, a)
    }, () => {
      F(false)
    }) : r(e, n, a)
  }, K = e => {
    let n = y.Z.get(t.planIdForCurrencies);
    l()(null != e, "paymentSource not specified for change"), l()(null != n, "Unable to fetch plan");
    let r = (0, v.DE)(n.id, e.id, false);
    return r.length > 0 ? r[0] : S.pKx.USD
  }, z = e => {
    null != e && W(e, K(e), Y)
  }, q = e => {
    (0, v.i1)(e.id, (0, I.yb)(t)).then(() => {
      W(e, K(e), Y)
    }), "function" == typeof n && n(e.id)
  }, X = () => {
    (0, u.ZDy)(async () => e => (0, r.jsx)(_.default, w(P({}, e), {
      onAddPaymentSource: q,
      analyticsLocation: R
    })), {
      onCloseCallback: () => {
        (0, d.fw)()
      },
      onCloseRequest: S.dG4
    })
  }, Q = () => {
    let e = t.paymentSourceId;
    return (0, r.jsx)(h.ZP, {
      prependOption: null == e ? {
        label: A.intl.string(A.t.iA5vA1),
        value: null
      } : null,
      className: s,
      paymentSources: B,
      hidePersonalInformation: M,
      selectedPaymentSourceId: e,
      onChange: z,
      onPaymentSourceAdd: X,
      dropdownLoading: Z,
      disabled: L,
      paymentGatewayRestrictions: t.eligiblePaymentGateways
    })
  }, J = () => (0, r.jsx)(u.Button, {
    fullWidth: true,
    variant: a ? "primary" : "secondary",
    onClick: X,
    text: A.intl.string(A.t.CpOiEO)
  }), $ = e => {
    l()(null != e.paymentGateway, "Expected payment gateway when managed externally");
    let t = (0, O.JE)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
    return (0, r.jsx)(u.Anchor, {
      href: t,
      useDefaultUnderlineStyles: false,
      className: C.externalLink,
      children: (0, r.jsx)(u.Button, {
        variant: "secondary",
        text: A.intl.string(A.t.SgX7Ra),
        fullWidth: true
      })
    })
  };
  if (t.isPurchasedExternally) return $(t);
  if (!k || !U) return (0, r.jsx)(u.$jN, {});
  if (!(B.length > 0)) return J();
  {
    let e = y.Z.get(t.planIdForCurrencies);
    l()(null != e, "Unable to fetch plan");
    let n = (0, v.DE)(e, t.paymentSourceId, false);
    return (0, r.jsxs)(r.Fragment, {
      children: [Q(), null != t.paymentSourceId ? (0, r.jsx)(p.b, {
        currencies: n,
        children: (0, r.jsxs)("div", {
          className: o()(C.currency, N.flex, N.alignCenter),
          children: [(0, r.jsx)("div", {
            children: A.intl.string(A.t["0YjaXf"])
          }), (0, r.jsx)(p.Z, {
            className: C.currencyDropdown,
            selectedCurrency: V,
            currencies: n,
            onChange: e => {
              W(true, e, Y)
            }
          })]
        })
      }) : null]
    })
  }
}
let x = async (e, t, i) => {
  let a = await (0, u.ZDy)(async () => {
    let {
      default: a
    } = await n.e("97516").then(n.bind(n, 358927));
    return n => (0, r.jsx)(a, {
      newInvoice: e,
      onConfirm: t,
      onCancel: i,
      modalProps: n
    })
  }, {
    onCloseRequest: () => {
      null != a && (0, u.Mr3)(a), i()
    }
  })
}