/** Chunk was on 19919 **/
/** chunk id: 298505, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  R: () => n
}), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk1870 = require("./1870.js");
let d = (e, l) => {
    let a = l.get(e.skuId);
    return null == a ? 0 : null != a.expiresAt ? 1 : 2
  },
  n = e => {
    let l = (0, r.e7)([t.Z], () => t.Z.purchases);
    return (0, s.useMemo)(() => [...e].sort((e, a) => d(e, l) - d(a, l)), [e, l])
  }