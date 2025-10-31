/** Chunk was on 48502 **/
/** chunk id: 724994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => c,
  U: () => s
});
var Chunk24217 = require("./24217.js"),
  l = require.n(Chunk24217),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk1870 = require("./1870.js");
let s = (e, t) => {
    var n, r, a;
    let o = null != e.getPurchase(t.skuId),
      s = null != (n = t.items) ? n : [],
      c = l()(s.map(t => e.getPurchase(t.skuId)));
    switch (null == t ? true : t.type) {
      case i.Z.BUNDLE:
        return {
          isPurchased: o || s.length > 0 && c.length === s.length, isPartiallyOwnedBundle: c.length > 0 && c.length < s.length, isPartiallyOwnedVariantsGroup: false
        };
      case i.Z.VARIANTS_GROUP:
        let u = null == (r = t.variants) ? true : r.every(t => null != e.getPurchase(t.skuId)),
          d = (null == (a = t.variants) ? true : a.some(t => null != e.getPurchase(t.skuId))) && !u;
        return {
          isPurchased: null != u && u, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null != d && d
        };
      default:
        return {
          isPurchased: o, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false
        }
    }
  },
  c = e => (0, a.cj)([o.Z], () => s(o.Z, e))