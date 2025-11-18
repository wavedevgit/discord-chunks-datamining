/** Chunk was on web.js **/
/** chunk id: 276113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk801937 = require("./801937.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk29594 = require("./29594.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk823795 = require("./823795.js");

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
      paymentSourceTypeRestrictions: n ? [l.He.CARD.valueOf()] : null
    };
    return (0, r.jsx)(o.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, r.jsxs)(s.$0, {
        children: [(0, r.jsx)(i.Heading, {
          variant: "heading-xl/semibold",
          children: "Choose Payment Source Type"
        }), (0, r.jsx)(s.yL, {
          className: c.choosePaymentTypeModal,
          children: (0, r.jsx)("div", {
            className: c.choosePaymentTypeContainer,
            children: (0, r.jsx)(a.Z, d({}, f))
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