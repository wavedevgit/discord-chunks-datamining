/** Chunk was on 81899 **/
/** chunk id: 645034, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js");

function c(e, t) {
  let [n, c] = l.useState(false), [i, r] = l.useState(null);
  return [async () => {
    c(true), r(null);
    try {
      let t = await e();
      return c(false), r(null), t
    } catch (n) {
      let e = new a.LG(n);
      return null == t || t(e), r(e), c(false), null
    }
  }, {
    loading: n,
    error: i
  }]
}