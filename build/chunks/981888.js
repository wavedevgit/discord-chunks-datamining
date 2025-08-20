/** Chunk was on 56236 **/
/** chunk id: 981888, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js");

function l(e, n) {
  let [t, l] = i.useState(false), [o, c] = i.useState(null);
  return [async () => {
    l(true), c(null);
    try {
      let n = await e();
      return l(false), c(null), n
    } catch (t) {
      let e = new r.Hx(t);
      return null == n || n(e), c(e), l(false), null
    }
  }, {
    loading: t,
    error: o
  }]
}