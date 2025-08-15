/** Chunk was on 81709 **/
/** chunk id: 501090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => c,
  q: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk45474 = require("./45474.js"),
  Chunk981631 = require("./981631.js");
let l = (e, t, n) => {
  let [a, l] = i.useState(e), [u, d] = i.useState(Date.now()), [m] = i.useState(Date.now()), p = i.useCallback(e => {
    r.default.track(s.rMx.CANCELLATION_FLOW_STEP, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({
      from_step: o.O[a],
      to_step: o.O[e],
      step_duration_ms: Date.now() - u,
      flow_duration_ms: Date.now() - m,
      location_stack: n
    }, c(t))), l(e), d(Date.now())
  }, [n, m, u, a, t]);
  return [a, p, u, m]
};

function c(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null == (t = (0, a.Af)(e)) ? true : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
    subscription_status: e.status
  }
}