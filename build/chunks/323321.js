/** Chunk was on web.js **/
/** chunk id: 323321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => u,
  v: () => c
});
var Chunk845220 = require("./845220.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
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
      s(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null == (t = (0, o.Af)(e)) ? true : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
    subscription_status: e.status
  }
}

function u(e, t, n) {
  let o = null != n ? n : (0, r.b)();
  i.default.track(a.rMx.PREMIUM_RESUBSCRIBE_COMPLETED, l({
    location_stack: t,
    load_id: o
  }, c(e)))
}