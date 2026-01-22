/** Chunk was on web.js **/
/** chunk id: 869177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk405139 = require("./405139.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk802177 = require("./802177.js");

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
      paymentLabel: s.intl.string(s.t.ZURqX0),
      paymentRequestRef: f,
      renderConnectorView: true,
      onStripePaymentMethodReceived: l,
      onPaymentRequestFailure: u,
      onValidPaymentRequest: d,
      onChooseType: n,
      loadingComponent: (0, r.jsx)(i.y$y, {
        style: {
          marginTop: 16
        },
        type: i.tVU.PULSING_ELLIPSIS
      })
    };
  return t = "applePay" === p ? (0, r.jsx)(a.Mv, c({}, _)) : (0, r.jsx)(a.dP, c({}, _)), (0, r.jsx)("div", {
    className: o.r,
    children: (0, r.jsx)(i.D0$, {
      label: s.intl.string(s.t.eQ2bLp),
      children: t
    })
  })
}