/** Chunk was on 61231 **/
/** chunk id: 981888, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js");

function i(e, n) {
  let [t, i] = a.useState(false), [o, c] = a.useState(null);
  return [async () => {
    i(true), c(null);
    try {
      let n = await e();
      return i(false), c(null), n
    } catch (t) {
      let e = new r.Hx(t);
      return null == n || n(e), c(e), i(false), null
    }
  }, {
    loading: t,
    error: o
  }]
}