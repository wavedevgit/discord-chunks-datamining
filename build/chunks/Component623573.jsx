/** Chunk was on web.js **/
/** chunk id: 623573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk3409 = require("./3409.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214820 = require("./214820.js");

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
  let {
    transitionState: t,
    analyticsLocation: n,
    onClose: i,
    onAddPaymentSource: s,
    toastContent: f,
    initialStep: p = l.h8.PAYMENT_TYPE,
    overwriteSubscriptionPaymentSource: _ = false
  } = e, m = (0, c.fL)(), h = (0, c.vP)({
    paymentModalArgs: m,
    initialStep: p,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      i()
    },
    onComplete: (e, t) => {
      a()(null != t, "paymentSource missing"), null == s || s(t), i()
    },
    onStepChange: () => {},
    header: (0, r.jsx)(o.xBx, {
      title: u.intl.string(u.t.eQ2bLp)
    }),
    analyticsLocation: n,
    hideBreadcrumbs: true,
    toastContent: f,
    overwriteSubscriptionPaymentSource: _
  });

  function g(e) {
    e.preventDefault()
  }
  return (0, r.jsx)(o.IX, {
    transitionState: t,
    onClose: i,
    size: "sm",
    "aria-label": u.intl.string(u.t.eQ2bLp),
    children: (0, r.jsx)("form", {
      className: d.form,
      onSubmit: g,
      children: h
    })
  })
}

function m(e) {
  let t = null;
  return (0, r.jsx)(s.PaymentContextProvider, {
    activeSubscription: t,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(_, p({}, e))
  })
}