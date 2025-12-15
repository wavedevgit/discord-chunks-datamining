/** Chunk was on 19919 **/
/** chunk id: 298505, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  R: () => n
}), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk1870 = require("./1870.js");
let d = (e, a) => {
    let l = a.get(e.skuId);
    return null == l ? 0 : null != l.expiresAt ? 1 : 2
  },
  n = e => {
    let a = (0, s.e7)([r.Z], () => r.Z.purchases);
    return (0, t.useMemo)(() => [...e].sort((e, l) => d(e, a) - d(l, a)), [e, a])
  }