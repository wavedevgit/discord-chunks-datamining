/** Chunk was on web.js **/
/** chunk id: 731896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => f
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk873626 = require("./873626.js"),
  Chunk212161 = require("./212161.js"),
  Chunk365943 = require("./365943.js"),
  Chunk25251 = require("./25251.js");
let f = e => {
  var t;
  let n = (0, i.e7)([o.Z], () => {
      if (null == e) return;
      let t = o.Z.getProduct(e);
      if ((0, c.H)(null == t ? true : t.items[0])) return {
        id: t.items[0].id,
        skuId: t.items[0].skuId,
        config: t.items[0]
      }
    }),
    f = (0, i.e7)([s.Z], () => {
      if (null == e) return;
      let t = s.Z.getPurchase(e);
      if ((0, c.H)(null == t ? true : t.items[0])) return {
        id: t.items[0].id,
        skuId: t.items[0].skuId,
        config: t.items[0]
      }
    }),
    _ = (0, i.e7)([d.Z], () => d.Z.getProfileEffect(e)),
    p = null != (t = null != n ? n : f) ? t : _,
    h = null != e && null == p,
    m = (0, l.F)("useProfileEffectPreset");
  return r.useEffect(() => {
    h && (m ? (0, a.lW)(e) : (0, u.t)(true))
  }, [h, e, m]), p
}