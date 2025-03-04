/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  L: () => c,
  U: () => a
});
var n = r(24217),
  l = r.n(n),
  i = r(979554),
  o = r(442837),
  s = r(1870);
let a = (e, t) => {
    var r, n, o;
    let s = null != e.getPurchase(t.skuId),
      a = null !== (r = t.items) && void 0 !== r ? r : [],
      c = l()(a.map(t => e.getPurchase(t.skuId)));
    switch (null == t ? void 0 : t.type) {
      case i.Z.BUNDLE:
        return {
          isPurchased: s || a.length > 0 && c.length === a.length, isPartiallyOwnedBundle: c.length > 0 && c.length < a.length, isPartiallyOwnedVariantsGroup: !1
        };
      case i.Z.VARIANTS_GROUP:
        let u = null === (n = t.variants) || void 0 === n ? void 0 : n.every(t => null != e.getPurchase(t.skuId)),
          d = (null === (o = t.variants) || void 0 === o ? void 0 : o.some(t => null != e.getPurchase(t.skuId))) && !u;
        return {
          isPurchased: null != u && u, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: null != d && d
        };
      default:
        return {
          isPurchased: s, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
        }
    }
  },
  c = e => (0, o.cj)([s.Z], () => a(s.Z, e))