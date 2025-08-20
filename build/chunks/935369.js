/** Chunk was on 26434 **/
/** chunk id: 935369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let [t, n] = r.useState(false), [o, a] = r.useState(null);
  return [r.useCallback(async function() {
    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
    try {
      return a(null), n(true), await e(...r)
    } catch (e) {
      e.message !== l.intl.string(l.t.N2yb9f) && a(e instanceof i.Z ? e : new i.Z(e))
    } finally {
      n(false)
    }
  }, [e]), {
    loading: t,
    error: o
  }]
}