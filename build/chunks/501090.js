/** Chunk was on 81709 **/
/** chunk id: 501090, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => c,
  q: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk45474 = require("./45474.js"),
  Chunk981631 = require("./981631.js");
let o = (t, e, n) => {
  let [r, o] = i.useState(t), [u, d] = i.useState(Date.now()), [m] = i.useState(Date.now()), p = i.useCallback(t => {
    a.default.track(l.rMx.CANCELLATION_FLOW_STEP, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          var i;
          i = n[e], e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = i
        })
      }
      return t
    }({
      from_step: s.O[r],
      to_step: s.O[t],
      step_duration_ms: Date.now() - u,
      flow_duration_ms: Date.now() - m,
      location_stack: n
    }, c(e))), o(t), d(Date.now())
  }, [n, m, u, r, e]);
  return [r, p, u, m]
};

function c(t) {
  var e;
  return {
    subscription_id: t.id,
    subscription_type: t.type,
    subscription_plan_id: null == (e = (0, r.Af)(t)) ? true : e.id,
    subscription_plan_gateway_plan_id: t.paymentGatewayPlanId,
    subscription_status: t.status
  }
}