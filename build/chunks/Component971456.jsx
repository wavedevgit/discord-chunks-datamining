/** Chunk was on web.js **/
/** chunk id: 971456, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk295405 = require("./295405.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk735305 = require("./735305.js");

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
    key: Chunk166532.pn.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(_, c({}, e)),
    options: {
      renderHeader: true
    }
  },
  p = (e, t) => {
    if (0 === Object.keys(i.A.paymentSources).length) {
      if (t) return void e.handleStepChange(o.pn.GIFT_CUSTOMIZATION);
      e.handleClose()
    } else e.handleStepChange(o.pn.REVIEW, {
      trackedFromStep: o.pn.ADD_PAYMENT_STEPS
    })
  };

function _(e) {
  let {
    isGift: t
  } = (0, a.Pv)();
  return (0, r.jsx)(s.x, d(c({}, e), {
    breadcrumbSteps: [o.pn.ADD_PAYMENT_STEPS, o.pn.REVIEW, o.pn.CONFIRM],
    onReturn: () => p(e, t)
  }))
}