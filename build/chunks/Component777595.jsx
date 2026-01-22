/** Chunk was on web.js **/
/** chunk id: 777595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk735305 = require("./735305.js"),
  Chunk412463 = require("./412463.jsx"),
  Chunk652215 = require("./652215.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = [{
    key: Chunk166532.pn.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(c.x, h(p({}, e), {
      breadcrumbSteps: [l.pn.ADD_PAYMENT_STEPS],
      onReturn: () => {}
    })),
    options: {
      renderHeader: true
    }
  }, {
    key: Chunk166532.pn.REVIEW,
    renderStep: e => (0, r.jsx)(u.eO, h(p({}, e), {
      originStep: l.pn.ADD_PAYMENT_STEPS,
      text: "Review Step Placeholder"
    })),
    options: {}
  }],
  g = {
    name: "Add Payment Step",
    id: "add-payment-step",
    component: e => {
      let {
        useStripeElements: t
      } = e, {
        analyticsLocations: n
      } = (0, o.Ay)(s.A.PAYMENT_FLOW_TEST_PAGE), l = i.useMemo(() => (0, a.A)(), []), c = i.useCallback(() => {}, []);
      return (0, r.jsx)(u.dL, {
        stepConfigs: m,
        analyticsLocations: n,
        applicationId: d.FYj,
        initialPlanId: true,
        skuId: null,
        isGift: false,
        hideErrors: false,
        loadId: l,
        purchaseType: d.VVm.ONE_TIME,
        disablePurchases: true,
        excludeSubscriptionPlansBySKU: true,
        renderHeader: () => null,
        onClose: c,
        onComplete: () => {},
        paymentContextOverrides: {
          paymentElementsEnabled: t
        }
      }, "".concat(l, "-").concat(t))
    },
    controls: {
      useStripeElements: {
        label: "Use Stripe Elements",
        type: "boolean",
        defaultValue: false
      }
    }
  }