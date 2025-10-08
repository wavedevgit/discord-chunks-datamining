/** Chunk was on web.js **/
/** chunk id: 623573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk3409 = require("./3409.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk148233 = require("./148233.js"),
  Chunk465106 = require("./465106.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  let {
    transitionState: t,
    analyticsLocation: n,
    onClose: i,
    onAddPaymentSource: o,
    toastContent: u,
    initialStep: m = d.h8.PAYMENT_TYPE,
    overwriteSubscriptionPaymentSource: g = false
  } = e, E = (0, f.fL)(), b = (0, f.vP)({
    paymentModalArgs: E,
    initialStep: m,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      i()
    },
    onComplete: (e, t) => {
      s()(null != t, "paymentSource missing"), null == o || o(t), i()
    },
    onStepChange: () => {},
    header: (0, r.jsxs)("div", {
      className: a()(p.modalTitle, h.flex, h.justifyBetween, h.alignCenter),
      children: [(0, r.jsx)(c.vwX, {
        tag: c.RB0.H4,
        children: _.intl.string(_.t.eQ2bLi)
      }), (0, r.jsx)(l.olH, {})]
    }),
    analyticsLocation: n,
    hideBreadcrumbs: true,
    toastContent: u,
    overwriteSubscriptionPaymentSource: g
  });

  function y(e) {
    e.preventDefault()
  }
  return (0, r.jsx)(l.IX, {
    transitionState: t,
    onClose: i,
    size: "sm",
    "aria-label": _.intl.string(_.t.eQ2bLi),
    children: (0, r.jsx)("form", {
      className: p.form,
      onSubmit: y,
      children: b
    })
  })
}

function b(e) {
  let t = null;
  return (0, r.jsx)(u.PaymentContextProvider, {
    activeSubscription: t,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(E, g({}, e))
  })
}