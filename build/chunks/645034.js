/** Chunk was on 96110 **/
/** chunk id: 645034, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js");

function i(e, n) {
  let [t, i] = a.useState(false), [l, o] = a.useState(null);
  return [async () => {
    i(true), o(null);
    try {
      let n = await e();
      return i(false), o(null), n
    } catch (t) {
      let e = new r.LG(t);
      return null == n || n(e), o(e), i(false), null
    }
  }, {
    loading: t,
    error: l
  }]
}