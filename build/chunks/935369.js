/** Chunk was on 91173 **/
/** chunk id: 935369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let [t, n] = r.useState(false), [a, o] = r.useState(null);
  return [r.useCallback(async function() {
    for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
    try {
      return o(null), n(true), await e(...r)
    } catch (e) {
      e.message !== l.intl.string(l.t.N2yb9f) && o(e instanceof i.Z ? e : new i.Z(e))
    } finally {
      n(false)
    }
  }, [e]), {
    loading: t,
    error: a
  }]
}