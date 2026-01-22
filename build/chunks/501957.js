/** Chunk was on web.js **/
/** chunk id: 501957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => u,
  j: () => c
});
var Chunk925847 = require("./925847.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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

function c(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null == (t = (0, a.EL)(e)) ? true : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
    subscription_status: e.status
  }
}

function u(e, t, n) {
  let a = null != n ? n : (0, r.A)();
  i.default.track(s.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, l({
    location_stack: t,
    load_id: a
  }, c(e)))
}