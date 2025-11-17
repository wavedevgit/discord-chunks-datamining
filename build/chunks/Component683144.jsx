/** Chunk was on web.js **/
/** chunk id: 683144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk276442 = require("./276442.js"),
  Chunk610005 = require("./610005.jsx"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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

function p(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = [{
    key: Chunk409813.h8.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(c.J, h(_({}, e), {
      breadcrumbSteps: [l.h8.ADD_PAYMENT_STEPS],
      onReturn: () => {}
    })),
    options: {
      renderHeader: true
    }
  }, {
    key: Chunk409813.h8.REVIEW,
    renderStep: e => (0, r.jsx)(u.Gy, h(_({}, e), {
      originStep: l.h8.ADD_PAYMENT_STEPS,
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
      } = (0, s.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE), l = i.useMemo(() => (0, a.Z)(), []), c = i.useCallback(() => {}, []);
      return (0, r.jsx)(u.Vy, {
        stepConfigs: m,
        analyticsLocations: n,
        applicationId: d.XAJ,
        initialPlanId: true,
        skuId: null,
        isGift: false,
        hideErrors: false,
        loadId: l,
        purchaseType: d.GZQ.ONE_TIME,
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