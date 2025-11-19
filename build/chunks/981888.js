/** Chunk was on 98878 **/
/** chunk id: 981888, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js");

function a(e, n) {
  let [t, a] = i.useState(false), [l, o] = i.useState(null);
  return [async () => {
    a(true), o(null);
    try {
      let n = await e();
      return a(false), o(null), n
    } catch (t) {
      let e = new r.Hx(t);
      return null == n || n(e), o(e), a(false), null
    }
  }, {
    loading: t,
    error: l
  }]
}