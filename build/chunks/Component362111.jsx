/** Chunk was on web.js **/
/** chunk id: 362111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk998678 = require("./998678.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk893659 = require("./893659.js");

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
    onAddPaymentSource: o,
    toastContent: f,
    initialStep: p = l.pn.PAYMENT_TYPE,
    overwriteSubscriptionPaymentSource: _ = false
  } = e, h = (0, c.KP)(), m = (0, c.Y)({
    paymentModalArgs: h,
    initialStep: p,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      i()
    },
    onComplete: (e, t) => {
      a()(null != t, "paymentSource missing"), null == o || o(t), i()
    },
    onStepChange: () => {},
    header: (0, r.jsx)(s.rQ0, {
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
  return (0, r.jsx)(s.dWK, {
    transitionState: t,
    onClose: i,
    size: "sm",
    "aria-label": u.intl.string(u.t.eQ2bLp),
    children: (0, r.jsx)("form", {
      className: d.Zd,
      onSubmit: g,
      children: m
    })
  })
}

function h(e) {
  let t = null;
  return (0, r.jsx)(o.PaymentContextProvider, {
    activeSubscription: t,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(_, p({}, e))
  })
}