/** Chunk was on 40655 **/
/** chunk id: 981888, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js");

function i(e, n) {
  let [t, i] = a.useState(false), [o, l] = a.useState(null);
  return [async () => {
    i(true), l(null);
    try {
      let n = await e();
      return i(false), l(null), n
    } catch (t) {
      let e = new r.Hx(t);
      return null == n || n(e), l(e), i(false), null
    }
  }, {
    loading: t,
    error: o
  }]
}