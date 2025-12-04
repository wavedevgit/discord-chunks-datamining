/** Chunk was on 19919 **/
/** chunk id: 298505, original params: e,l,s (module,exports,require) **/
require.d(exports, {
  R: () => i
}), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk1870 = require("./1870.js");
let n = (e, l) => {
    let s = l.get(e.skuId);
    return null == s ? 0 : null != s.expiresAt ? 1 : 2
  },
  i = e => {
    let l = (0, t.e7)([a.Z], () => a.Z.purchases);
    return (0, r.useMemo)(() => [...e].sort((e, s) => n(e, l) - n(s, l)), [e, l])
  }