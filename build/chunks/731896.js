/** Chunk was on web.js **/
/** chunk id: 731896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk873626 = require("./873626.js"),
  Chunk212161 = require("./212161.js"),
  Chunk365943 = require("./365943.js"),
  Chunk25251 = require("./25251.js");
let f = e => {
  let t = (0, i.e7)([d.Z], () => d.Z.getProfileEffect(e)),
    n = (0, i.e7)([o.Z, s.Z], () => {
      if (null == e) return;
      let t = o.Z.getProduct(e);
      if ((0, c.H)(null == t ? true : t.items[0])) return t.items[0];
      let n = s.Z.getPurchase(e);
      if ((0, c.H)(null == n ? true : n.items[0])) return n.items[0]
    }),
    f = r.useMemo(() => null != n ? {
      skuId: n.skuId,
      config: n
    } : t, [n, t]),
    _ = null != e && null == f,
    p = (0, l.F)("useProfileEffectPreset");
  return r.useEffect(() => {
    _ && (p ? (0, a.lW)(e) : (0, u.t)(true))
  }, [_, e, p]), f
}