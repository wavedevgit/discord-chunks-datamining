/** Chunk was on web.js **/
/** chunk id: 982291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk166532 = require("./166532.js"),
  Chunk735305 = require("./735305.js"),
  Chunk295405 = require("./295405.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = e => {
    let {
      paymentModalStepProps: t,
      returnStep: n = a.pn.REVIEW,
      returnStepIfNoPaymentSources: r
    } = e;
    if (0 === Object.keys(o.A.paymentSources).length) {
      if (null != r) return void t.handleStepChange(r);
      t.handleClose()
    } else t.handleStepChange(n, {
      trackedFromStep: a.pn.ADD_PAYMENT_STEPS
    })
  },
  p = e => {
    let {
      returnStep: t = a.pn.REVIEW,
      returnStepIfNoPaymentSources: n,
      paymentModalStepProps: o
    } = e, l = i.useCallback(() => f({
      returnStep: t,
      returnStepIfNoPaymentSources: n,
      paymentModalStepProps: o
    }), [t, n, o]);
    return (0, r.jsx)(s.x, d(c({}, o), {
      onReturn: l
    }))
  }