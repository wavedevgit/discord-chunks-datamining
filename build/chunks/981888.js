/** Chunk was on 61231 **/
/** chunk id: 981888, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js");

function o(e, n) {
  let [t, o] = a.useState(false), [i, l] = a.useState(null);
  return [async () => {
    o(true), l(null);
    try {
      let n = await e();
      return o(false), l(null), n
    } catch (t) {
      let e = new r.Hx(t);
      return null == n || n(e), l(e), o(false), null
    }
  }, {
    loading: t,
    error: i
  }]
}