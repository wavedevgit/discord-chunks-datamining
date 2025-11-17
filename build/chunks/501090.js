/** Chunk was on 26526 **/
/** chunk id: 501090, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  q: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk626135 = require("./626135.js"),
  Chunk323321 = require("./323321.js"),
  Chunk45474 = require("./45474.js"),
  Chunk981631 = require("./981631.js");
let s = (t, e, n) => {
  let [s, c] = a.useState(t), [u, d] = a.useState(Date.now()), [_] = a.useState(Date.now()), m = a.useCallback(t => {
    r.default.track(o.rMx.CANCELLATION_FLOW_STEP, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), a.forEach(function(e) {
          var a;
          a = n[e], e in t ? Object.defineProperty(t, e, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = a
        })
      }
      return t
    }({
      from_step: l.O[s],
      to_step: l.O[t],
      step_duration_ms: Date.now() - u,
      flow_duration_ms: Date.now() - _,
      location_stack: n
    }, (0, i.v)(e))), c(t), d(Date.now())
  }, [n, _, u, s, e]);
  return [s, m, u, _]
}