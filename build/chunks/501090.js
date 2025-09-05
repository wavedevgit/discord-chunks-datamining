/** Chunk was on 26526 **/
/** chunk id: 501090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => c,
  q: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk45474 = require("./45474.js"),
  Chunk981631 = require("./981631.js");
let s = (e, t, n) => {
  let [u, s] = r.useState(e), [l, _] = r.useState(Date.now()), [p] = r.useState(Date.now()), f = r.useCallback(e => {
    a.default.track(i.rMx.CANCELLATION_FLOW_STEP, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      from_step: o.O[u],
      to_step: o.O[e],
      step_duration_ms: Date.now() - l,
      flow_duration_ms: Date.now() - p,
      location_stack: n
    }, c(t))), s(e), _(Date.now())
  }, [n, p, l, u, t]);
  return [u, f, l, p]
};

function c(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null == (t = (0, u.Af)(e)) ? true : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
    subscription_status: e.status
  }
}