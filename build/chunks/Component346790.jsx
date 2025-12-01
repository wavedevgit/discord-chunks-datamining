/** Chunk was on web.js **/
/** chunk id: 346790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk853872 = require("./853872.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk276442 = require("./276442.js");

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
let f = {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(p, c({}, e)),
  options: {
    renderHeader: true
  }
};

function p(e) {
  let {
    isGift: t
  } = (0, a.wD)();
  return (0, r.jsx)(s.J, d(c({}, e), {
    breadcrumbSteps: [o.h8.ADD_PAYMENT_STEPS, o.h8.REVIEW, o.h8.CONFIRM],
    onReturn: () => {
      if (0 === Object.keys(i.Z.paymentSources).length) {
        if (t) return void e.handleStepChange(o.h8.GIFT_CUSTOMIZATION);
        e.handleClose()
      } else e.handleStepChange(o.h8.REVIEW, {
        trackedFromStep: o.h8.ADD_PAYMENT_STEPS
      })
    }
  }))
}