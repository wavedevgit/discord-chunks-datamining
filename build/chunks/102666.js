/** Chunk was on 83855 **/
/** chunk id: 102666, original params: e,s,l (module,exports,require) **/
require.d(exports, {
  m: () => r
}), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk4227 = require("./4227.js");
let d = (e, s) => {
    let l = s.get(e.skuId);
    return null == l ? 0 : null != l.expiresAt ? 1 : 2
  },
  r = e => {
    let s = (0, a.bG)([i.A], () => i.A.purchases);
    return (0, t.useMemo)(() => [...e].sort((e, l) => d(e, s) - d(l, s)), [e, s])
  }