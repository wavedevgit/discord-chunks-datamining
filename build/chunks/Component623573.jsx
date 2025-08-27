/** Chunk was on web.js **/
/** chunk id: 623573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk257465 = require("./257465.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk3409 = require("./3409.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214820 = require("./214820.js"),
  Chunk149715 = require("./149715.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e) {
  let {
    transitionState: t,
    analyticsLocation: n,
    onClose: i,
    onAddPaymentSource: o,
    toastContent: d,
    initialStep: g = f.h8.PAYMENT_TYPE,
    overwriteSubscriptionPaymentSource: E = false
  } = e, b = (0, _.fL)(), y = (0, _.vP)({
    paymentModalArgs: b,
    initialStep: g,
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
      className: a()(h.modalTitle, m.flex, m.justifyBetween, m.alignCenter),
      children: [(0, r.jsx)(u.vwX, {
        tag: u.RB0.H4,
        children: p.intl.string(p.t.eQ2bLi)
      }), (0, r.jsx)(c.o, {})]
    }),
    analyticsLocation: n,
    hideBreadcrumbs: true,
    toastContent: d,
    overwriteSubscriptionPaymentSource: E
  });

  function O(e) {
    e.preventDefault()
  }
  return (0, r.jsx)(l.I, {
    transitionState: t,
    onClose: i,
    size: "sm",
    "aria-label": p.intl.string(p.t.eQ2bLi),
    children: (0, r.jsx)("form", {
      className: h.form,
      onSubmit: O,
      children: y
    })
  })
}

function y(e) {
  let t = null;
  return (0, r.jsx)(d.PaymentContextProvider, {
    activeSubscription: t,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(b, E({}, e))
  })
}