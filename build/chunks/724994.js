/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  L: () => c,
  U: () => s
});
var n = r(24217),
  i = r.n(n),
  l = r(979554),
  o = r(442837),
  a = r(1870);
let s = (e, t) => {
    var r, n, o;
    let a = null != e.getPurchase(t.skuId),
      s = null !== (r = t.items) && void 0 !== r ? r : [],
      c = i()(s.map(t => e.getPurchase(t.skuId)));
    switch (null == t ? void 0 : t.type) {
      case l.Z.BUNDLE:
        return {
          isPurchased: a || s.length > 0 && c.length === s.length, isPartiallyOwnedBundle: c.length > 0 && c.length < s.length, isPartiallyOwnedVariantsGroup: !1
        };
      case l.Z.VARIANTS_GROUP:
        let d = null === (n = t.variants) || void 0 === n ? void 0 : n.every(t => null != e.getPurchase(t.skuId)),
          u = (null === (o = t.variants) || void 0 === o ? void 0 : o.some(t => null != e.getPurchase(t.skuId))) && !d;
        return {
          isPurchased: null != d && d, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: null != u && u
        };
      default:
        return {
          isPurchased: a, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
        }
    }
  },
  c = e => (0, o.cj)([a.Z], () => s(a.Z, e))