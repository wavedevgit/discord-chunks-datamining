/** Chunk was on 82875 **/
/** chunk id: 981888, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk881052 = require("./881052.js");

function i(e, n) {
  let [t, i] = r.useState(false), [a, l] = r.useState(null);
  return [async () => {
    i(true), l(null);
    try {
      let n = await e();
      return i(false), l(null), n
    } catch (t) {
      let e = new o.Hx(t);
      return null == n || n(e), l(e), i(false), null
    }
  }, {
    loading: t,
    error: a
  }]
}