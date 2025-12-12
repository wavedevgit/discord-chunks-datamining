/** Chunk was on web.js **/
/** chunk id: 439021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk502109 = require("./502109.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk527094 = require("./527094.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e) {
  let t, {
      onChooseType: n,
      onStripePaymentMethodReceived: l,
      onPaymentRequestFailure: u,
      onValidPaymentRequest: d,
      paymentRequestRef: f,
      paymentRequestWallet: p
    } = e,
    _ = {
      paymentLabel: a.intl.string(a.t.ZURqX0),
      paymentRequestRef: f,
      renderConnectorView: true,
      onStripePaymentMethodReceived: l,
      onPaymentRequestFailure: u,
      onValidPaymentRequest: d,
      onChooseType: n,
      loadingComponent: (0, r.jsx)(i.$jN, {
        style: {
          marginTop: 16
        },
        type: i.RAz.PULSING_ELLIPSIS
      })
    };
  return t = "applePay" === p ? (0, r.jsx)(o.Ch, c({}, _)) : (0, r.jsx)(o.Tr, c({}, _)), (0, r.jsx)("div", {
    className: s.body,
    children: (0, r.jsx)(i.gNt, {
      label: a.intl.string(a.t.eQ2bLp),
      children: t
    })
  })
}