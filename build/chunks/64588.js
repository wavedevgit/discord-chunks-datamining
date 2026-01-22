/** Chunk was on 72820 **/
/** chunk id: 64588, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk954571 = require("./954571.js"),
  Chunk501957 = require("./501957.js"),
  Chunk473702 = require("./473702.js"),
  Chunk652215 = require("./652215.js");
let u = (t, e, n) => {
  let [u, o] = a.useState(t), [c, d] = a.useState(Date.now()), [m] = a.useState(Date.now()), f = a.useCallback(t => {
    r.default.track(s.HAw.CANCELLATION_FLOW_STEP, function(t) {
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
      from_step: l.T[u],
      to_step: l.T[t],
      step_duration_ms: Date.now() - c,
      flow_duration_ms: Date.now() - m,
      location_stack: n
    }, (0, i.j)(e))), o(t), d(Date.now())
  }, [n, m, c, u, e]);
  return [u, f, c, m]
}