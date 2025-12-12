/** Chunk was on web.js **/
/** chunk id: 827857, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk502109 = require("./502109.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk586585 = require("./586585.jsx"),
  Chunk439021 = require("./439021.jsx"),
  Chunk261538 = require("./261538.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e) {
  let t = i.useRef(null),
    n = {
      paymentLabel: d.intl.string(d.t.ZURqX0),
      paymentRequestRef: t,
      onStripePaymentMethodReceived: () => {},
      onPaymentRequestFailure: () => {},
      onValidPaymentRequest: () => {},
      onChooseType: () => {},
      loadingComponent: (0, r.jsx)(a.$jN, {
        style: {
          marginTop: 16
        },
        type: a.RAz.PULSING_ELLIPSIS
      })
    };
  return e.renderStepBody ? (0, r.jsx)(c.t, p({}, n, e)) : "applePay" === e.paymentRequestWallet ? (0, r.jsx)(o.Ch, p({}, n, e)) : (0, r.jsx)(o.Tr, p({}, n, e))
}

function m(e) {
  let {
    paymentRequestWallet: t
  } = e, n = i.useRef(null), [a, o] = i.useState(false), s = () => {
    null != n.current && n.current.show()
  };
  return (0, r.jsx)(u.yL, {
    footer: (0, r.jsx)(l.Z, {
      primaryCTA: l.Z.CTAType.CONTINUE,
      primaryText: d.intl.string("applePay" === t ? d.t.WoXvJL : d.t.wnVVr0),
      primaryDisabled: !a,
      onPrimary: () => s(),
      onBack: () => {}
    }),
    children: (0, r.jsx)(_, {
      renderConnectorView: true,
      renderStepBody: true,
      paymentRequestWallet: t,
      paymentRequestRef: n,
      onValidPaymentRequest: () => o(true)
    })
  })
}
let h = {
  name: "Payment Request",
  component: function(e) {
    let {
      paymentRequestWallet: t
    } = e;
    return (0, r.jsx)(s.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, r.jsxs)(u.$0, {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: "Payment Request"
        }), (0, r.jsx)(u.E_, {
          label: "Default View",
          children: (0, r.jsx)(_, {
            paymentRequestWallet: t
          })
        }), (0, r.jsx)(u.E_, {
          label: "Connector View",
          children: (0, r.jsx)(_, {
            paymentRequestWallet: t,
            renderConnectorView: true
          })
        }), (0, r.jsx)(u.E_, {
          label: "Add Payment Step Body Connector View",
          children: (0, r.jsx)(m, {
            paymentRequestWallet: t
          })
        })]
      })
    })
  },
  id: "payment-request",
  controls: {
    paymentRequestWallet: {
      label: "Payment Request Wallet",
      type: "select",
      options: [{
        value: "googlePay",
        label: "Google Pay"
      }, {
        value: "applePay",
        label: "Apple Pay"
      }],
      defaultValue: "googlePay"
    }
  }
}