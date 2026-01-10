/** Chunk was on 76246 **/
/** chunk id: 981888, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js");

function r(e, n) {
  let [t, r] = a.useState(false), [l, o] = a.useState(null);
  return [async () => {
    r(true), o(null);
    try {
      let n = await e();
      return r(false), o(null), n
    } catch (t) {
      let e = new i.Hx(t);
      return null == n || n(e), o(e), r(false), null
    }
  }, {
    loading: t,
    error: l
  }]
}