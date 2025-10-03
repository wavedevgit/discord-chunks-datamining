/** Chunk was on 98878 **/
/** chunk id: 981888, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js");

function r(e, n) {
  let [t, r] = i.useState(false), [l, o] = i.useState(null);
  return [async () => {
    r(true), o(null);
    try {
      let n = await e();
      return r(false), o(null), n
    } catch (t) {
      let e = new a.Hx(t);
      return null == n || n(e), o(e), r(false), null
    }
  }, {
    loading: t,
    error: l
  }]
}