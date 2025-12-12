/** Chunk was on web.js **/
/** chunk id: 731896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk212161 = require("./212161.js"),
  Chunk25251 = require("./25251.js");
let u = e => {
  let t = (0, i.e7)([c.Z], () => c.Z.getProfileEffect(e)),
    n = (0, i.e7)([a.Z, s.Z], () => {
      if (null == e) return;
      let t = a.Z.getProduct(e);
      if ((0, l.H)(null == t ? true : t.items[0])) return t.items[0];
      let n = s.Z.getPurchase(e);
      if ((0, l.H)(null == n ? true : n.items[0])) return n.items[0]
    }),
    u = r.useMemo(() => null != n ? {
      skuId: n.skuId,
      config: n
    } : t, [n, t]),
    d = null != e && null == u;
  return r.useEffect(() => {
    d && (0, o.lW)(e)
  }, [d, e]), u
}