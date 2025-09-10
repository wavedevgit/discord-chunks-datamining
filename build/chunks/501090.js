/** Chunk was on 26526 **/
/** chunk id: 501090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk323321 = require("./323321.js"),
  Chunk45474 = require("./45474.js"),
  Chunk981631 = require("./981631.js");
let c = (e, t, n) => {
  let [c, i] = r.useState(e), [s, _] = r.useState(Date.now()), [f] = r.useState(Date.now()), O = r.useCallback(e => {
    a.default.track(u.rMx.CANCELLATION_FLOW_STEP, function(e) {
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
      from_step: l.O[c],
      to_step: l.O[e],
      step_duration_ms: Date.now() - s,
      flow_duration_ms: Date.now() - f,
      location_stack: n
    }, (0, o.v)(t))), i(e), _(Date.now())
  }, [n, f, s, c, t]);
  return [c, O, s, f]
}