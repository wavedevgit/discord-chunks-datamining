/** Chunk was on web.js **/
/** chunk id: 226846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73079 = require("./73079.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk252561 = require("./252561.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk825057 = require("./825057.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = {
  name: "Choose Payment Source Type",
  id: "choose-payment-source-type",
  component: function(e) {
    let {
      isEligibleForTrial: t,
      onlyStripeCardEnabled: n,
      paymentRequestWalletsEnabled: u
    } = e, f = {
      onChooseType: () => {},
      onStripePaymentMethodReceived: e => {
        console.log("onStripePaymentMethodReceived called: ", e)
      },
      isEligibleForTrial: t,
      paymentRequestWallets: u ? ["googlePay", "applePay"] : [],
      paymentSourceTypeRestrictions: n ? [l.he.CARD.valueOf()] : null
    };
    return (0, r.jsx)(o.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, r.jsxs)(s.wn, {
        children: [(0, r.jsx)(i.Heading, {
          variant: "heading-xl/semibold",
          children: "Choose Payment Source Type"
        }), (0, r.jsx)(s.e_, {
          className: c.Bt,
          children: (0, r.jsx)("div", {
            className: c.VS,
            children: (0, r.jsx)(a.A, d({}, f))
          })
        })]
      })
    })
  },
  controls: {
    isEligibleForTrial: {
      label: "Is Eligible for Trial",
      type: "boolean",
      defaultValue: false
    },
    onlyStripeCardEnabled: {
      label: "Only Stripe Card Enabled",
      type: "boolean",
      defaultValue: false
    },
    paymentRequestWalletsEnabled: {
      label: "Payment Request Wallets Enabled",
      type: "boolean",
      defaultValue: true
    }
  }
}