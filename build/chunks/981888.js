/** Chunk was on 96492 **/
/** chunk id: 981888, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk881052 = require("./881052.js");

function r(e, n) {
  let [t, r] = l.useState(false), [o, c] = l.useState(null);
  return [async () => {
    r(true), c(null);
    try {
      let n = await e();
      return r(false), c(null), n
    } catch (t) {
      let e = new i.Hx(t);
      return null == n || n(e), c(e), r(false), null
    }
  }, {
    loading: t,
    error: o
  }]
}