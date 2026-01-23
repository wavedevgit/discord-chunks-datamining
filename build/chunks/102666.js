/** Chunk was on 83855 **/
/** chunk id: 102666, original params: e,l,s (module,exports,require) **/
require.d(exports, {
  m: () => n
}), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk4227 = require("./4227.js");
let i = (e, l) => {
    let s = l.get(e.skuId);
    return null == s ? 0 : null != s.expiresAt ? 1 : 2
  },
  n = e => {
    let l = (0, a.bG)([r.A], () => r.A.purchases);
    return (0, t.useMemo)(() => [...e].sort((e, s) => i(e, l) - i(s, l)), [e, l])
  }