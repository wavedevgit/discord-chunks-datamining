/** Chunk was on web.js **/
/** chunk id: 750343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk405139 = require("./405139.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk19311 = require("./19311.jsx"),
  Chunk869177 = require("./869177.jsx"),
  Chunk252561 = require("./252561.jsx"),
  Chunk985018 = require("./985018.jsx");

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
      loadingComponent: (0, r.jsx)(a.y$y, {
        style: {
          marginTop: 16
        },
        type: a.tVU.PULSING_ELLIPSIS
      })
    };
  return e.renderStepBody ? (0, r.jsx)(c.V, p({}, n, e)) : "applePay" === e.paymentRequestWallet ? (0, r.jsx)(s.Mv, p({}, n, e)) : (0, r.jsx)(s.dP, p({}, n, e))
}

function h(e) {
  let {
    paymentRequestWallet: t
  } = e, n = i.useRef(null), [a, s] = i.useState(false), o = () => {
    null != n.current && n.current.show()
  };
  return (0, r.jsx)(u.e_, {
    footer: (0, r.jsx)(l.A, {
      primaryCTA: l.A.CTAType.CONTINUE,
      primaryText: d.intl.string("applePay" === t ? d.t.WoXvJL : d.t.wnVVr0),
      primaryDisabled: !a,
      onPrimary: () => o(),
      onBack: () => {}
    }),
    children: (0, r.jsx)(_, {
      renderConnectorView: true,
      renderStepBody: true,
      paymentRequestWallet: t,
      paymentRequestRef: n,
      onValidPaymentRequest: () => s(true)
    })
  })
}
let m = {
  name: "Payment Request",
  component: function(e) {
    let {
      paymentRequestWallet: t
    } = e;
    return (0, r.jsx)(o.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, r.jsxs)(u.wn, {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: "Payment Request"
        }), (0, r.jsx)(u.Hq, {
          label: "Default View",
          children: (0, r.jsx)(_, {
            paymentRequestWallet: t
          })
        }), (0, r.jsx)(u.Hq, {
          label: "Connector View",
          children: (0, r.jsx)(_, {
            paymentRequestWallet: t,
            renderConnectorView: true
          })
        }), (0, r.jsx)(u.Hq, {
          label: "Add Payment Step Body Connector View",
          children: (0, r.jsx)(h, {
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