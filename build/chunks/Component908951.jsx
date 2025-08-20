/** Chunk was on web.js **/
/** chunk id: 908951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk318877 = require("./318877.js"),
  Chunk149715 = require("./149715.js");

function P(e, t, n) {
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
      P(e, t, n[t])
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

function x(e, t) {
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
    analyticsLocation: P,
    currentInvoicePreview: D,
    disabled: L = false
  } = e, M = (0, c.e7)([b.Z], () => b.Z.hidePersonalInformation), [k, U] = (0, c.Wu)([y.Z], () => [y.Z.paymentSources, y.Z.hasFetchedPaymentSources]), G = (0, E.V)((0, T.yb)(t)), {
    analyticsLocations: B
  } = (0, g.ZP)(), Z = i.useMemo(() => Object.values(k).filter(e => !e.invalid), [k]), [V, F] = i.useState(false), [H, Y] = i.useState(t.currency), W = async (e, n, r) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await _.fG(t, n, r, B, P) : await _.tq(t, e, n, r, B, P), F(false), Y(n)
  }, K = async (e, n, r) => {
    F(true);
    let i = await (0, S.hz)({
        subscriptionId: t.id,
        paymentSourceId: null == e ? true : e.id,
        renewal: true,
        currency: n,
        analyticsLocations: B,
        analyticsLocation: P
      }),
      a = {
        amount: i.subtotal,
        currency: i.currency
      };
    D.currency !== i.currency || D.currency === i.currency && D.total !== i.total ? await j(i, () => {
      r(e, n, a)
    }, () => {
      F(false)
    }) : r(e, n, a)
  }, z = e => {
    let n = O.Z.get(t.planIdForCurrencies);
    l()(null != e, "paymentSource not specified for change"), l()(null != n, "Unable to fetch plan");
    let r = (0, I.DE)(n.id, e.id, false);
    return r.length > 0 ? r[0] : A.pKx.USD
  }, q = e => {
    null != e && K(e, z(e), W)
  }, X = e => {
    (0, I.i1)(e.id, (0, T.yb)(t)).then(() => {
      K(e, z(e), W)
    }), "function" == typeof n && n(e.id)
  }, Q = () => {
    (0, d.ZDy)(async () => e => (0, r.jsx)(p.default, x(w({}, e), {
      onAddPaymentSource: X,
      analyticsLocation: P
    })), {
      onCloseCallback: () => {
        (0, f.fw)()
      },
      onCloseRequest: A.dG4
    })
  }, J = () => {
    let e = t.paymentSourceId;
    return (0, r.jsx)(m.ZP, {
      prependOption: null == e ? {
        label: C.intl.string(C.t.iA5vAw),
        value: null
      } : null,
      className: s,
      paymentSources: Z,
      hidePersonalInformation: M,
      selectedPaymentSourceId: e,
      onChange: q,
      onPaymentSourceAdd: Q,
      dropdownLoading: V,
      disabled: L,
      paymentGatewayRestrictions: t.eligiblePaymentGateways
    })
  }, $ = () => (0, r.jsx)(u.zx, {
    fullWidth: true,
    look: u.zx.Looks.FILLED,
    color: a ? u.zx.Colors.BRAND : u.zx.Colors.PRIMARY,
    onClick: Q,
    children: C.intl.string(C.t.CpOiEB)
  }), ee = e => {
    l()(null != e.paymentGateway, "Expected payment gateway when managed externally");
    let t = (0, v.JE)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
    return (0, r.jsx)(d.eee, {
      href: t,
      useDefaultUnderlineStyles: false,
      className: N.externalLink,
      children: (0, r.jsx)(d.zxk, {
        variant: "secondary",
        text: C.intl.string(C.t.SgX7RU),
        fullWidth: true
      })
    })
  };
  if (t.isPurchasedExternally) return ee(t);
  if (!U || !G) return (0, r.jsx)(d.$jN, {});
  if (!(Z.length > 0)) return $();
  {
    let e = O.Z.get(t.planIdForCurrencies);
    l()(null != e, "Unable to fetch plan");
    let n = (0, I.DE)(e, t.paymentSourceId, false);
    return (0, r.jsxs)(r.Fragment, {
      children: [J(), null != t.paymentSourceId ? (0, r.jsx)(h.b, {
        currencies: n,
        children: (0, r.jsxs)("div", {
          className: o()(N.currency, R.flex, R.alignCenter),
          children: [(0, r.jsx)("div", {
            children: C.intl.string(C.t["0YjaXV"])
          }), (0, r.jsx)(h.Z, {
            className: N.currencyDropdown,
            selectedCurrency: H,
            currencies: n,
            onChange: e => {
              K(true, e, W)
            }
          })]
        })
      }) : null]
    })
  }
}
let j = async (e, t, i) => {
  let a = await (0, d.ZDy)(async () => {
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
      null != a && (0, d.Mr3)(a), i()
    }
  })
}