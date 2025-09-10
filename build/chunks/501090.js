/** Chunk was on 26526 **/
/** chunk id: 501090, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => s,
  q: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk45474 = require("./45474.js"),
  Chunk981631 = require("./981631.js");
let l = (t, e, n) => {
  let [o, l] = r.useState(t), [c, _] = r.useState(Date.now()), [d] = r.useState(Date.now()), f = r.useCallback(t => {
    a.default.track(i.rMx.CANCELLATION_FLOW_STEP, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), r.forEach(function(e) {
          var r;
          r = n[e], e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = r
        })
      }
      return t
    }({
      from_step: u.O[o],
      to_step: u.O[t],
      step_duration_ms: Date.now() - c,
      flow_duration_ms: Date.now() - d,
      location_stack: n
    }, s(e))), l(t), _(Date.now())
  }, [n, d, c, o, e]);
  return [o, f, c, d]
};

function s(t) {
  var e;
  return {
    subscription_id: t.id,
    subscription_type: t.type,
    subscription_plan_id: null == (e = (0, o.Af)(t)) ? true : e.id,
    subscription_plan_gateway_plan_id: t.paymentGatewayPlanId,
    subscription_status: t.status
  }
}