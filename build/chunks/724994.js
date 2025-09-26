/** Chunk was on 84957 **/
/** chunk id: 724994, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  L: () => u,
  U: () => a
});
var Chunk24217 = require("./24217.js"),
  i = require.n(Chunk24217),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk1870 = require("./1870.js");
let a = (e, t) => {
    var r, n, o;
    let l = null != e.getPurchase(t.skuId),
      a = null != (r = t.items) ? r : [],
      u = i()(a.map(t => e.getPurchase(t.skuId)));
    switch (null == t ? true : t.type) {
      case s.Z.BUNDLE:
        return {
          isPurchased: l || a.length > 0 && u.length === a.length, isPartiallyOwnedBundle: u.length > 0 && u.length < a.length, isPartiallyOwnedVariantsGroup: false
        };
      case s.Z.VARIANTS_GROUP:
        let c = null == (n = t.variants) ? true : n.every(t => null != e.getPurchase(t.skuId)),
          d = (null == (o = t.variants) ? true : o.some(t => null != e.getPurchase(t.skuId))) && !c;
        return {
          isPurchased: null != c && c, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null != d && d
        };
      default:
        return {
          isPurchased: l, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false
        }
    }
  },
  u = e => (0, o.cj)([l.Z], () => a(l.Z, e))