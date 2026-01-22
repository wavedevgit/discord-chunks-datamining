/** Chunk was on 96110 **/
/** chunk id: 645034, original params: e,c,a (module,exports,require) **/
require.d(exports, {
  A: () => t
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js");

function t(e, c) {
  let [a, t] = n.useState(false), [d, r] = n.useState(null);
  return [async () => {
    t(true), r(null);
    try {
      let c = await e();
      return t(false), r(null), c
    } catch (a) {
      let e = new l.LG(a);
      return null == c || c(e), r(e), t(false), null
    }
  }, {
    loading: a,
    error: d
  }]
}