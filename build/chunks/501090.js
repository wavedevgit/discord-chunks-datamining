/** Chunk was on 26526 **/
/** chunk id: 501090, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  q: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk323321 = require("./323321.js"),
  Chunk45474 = require("./45474.js"),
  Chunk981631 = require("./981631.js");
let o = (t, e, n) => {
  let [o, u] = a.useState(t), [c, d] = a.useState(Date.now()), [O] = a.useState(Date.now()), f = a.useCallback(t => {
    r.default.track(s.rMx.CANCELLATION_FLOW_STEP, function(t) {
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
      from_step: i.O[o],
      to_step: i.O[t],
      step_duration_ms: Date.now() - c,
      flow_duration_ms: Date.now() - O,
      location_stack: n
    }, (0, l.v)(e))), u(t), d(Date.now())
  }, [n, O, c, o, e]);
  return [o, f, c, O]
}