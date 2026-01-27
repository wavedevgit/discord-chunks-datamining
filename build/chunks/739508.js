/** Chunk was on web.js **/
/** chunk id: 739508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  eS: () => u,
  hD: () => p,
  ob: () => d,
  pM: () => f
});
var Chunk184015 = require("./184015.js"),
  Chunk728458 = require("./728458.js"),
  Chunk818348 = require("./818348.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e, t) {
  let n = new Date;
  return n.setMonth(e - 1), n.toLocaleString(t, {
    month: "short"
  })
}
async function d(e) {
  let t = null;
  if (null != e && e.paymentGateway === a.kM.BRAINTREE) {
    let e = await (0, r.Z)();
    null != e && (t = {
      braintree_device_data: e
    })
  }
  return t
}

function f(e, t) {
  i.A.captureException(e, c(s({}, t), {
    tags: c(s({}, null == t ? true : t.tags), {
      app_context: "billing"
    })
  }))
}

function p(e, t) {
  i.A.captureMessage(e, c(s({}, t), {
    tags: c(s({}, null == t ? true : t.tags), {
      app_context: "billing"
    })
  }))
}