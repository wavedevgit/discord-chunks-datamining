/** Chunk was on web.js **/
/** chunk id: 724994, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => c,
  U: () => l
});
var Chunk24217 = require("./24217.js"),
  i = require.n(Chunk24217),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk1870 = require("./1870.js");
let l = (e, t) => {
    var n, r, o;
    let s = null != e.getPurchase(t.skuId),
      l = null != (n = t.items) ? n : [],
      c = i()(l.map(t => e.getPurchase(t.skuId)));
    switch (null == t ? true : t.type) {
      case a.Z.BUNDLE:
        return {
          isPurchased: s || l.length > 0 && c.length === l.length, isPartiallyOwnedBundle: c.length > 0 && c.length < l.length, isPartiallyOwnedVariantsGroup: false
        };
      case a.Z.VARIANTS_GROUP:
        let u = null == (r = t.variants) ? true : r.every(t => null != e.getPurchase(t.skuId)),
          d = (null == (o = t.variants) ? true : o.some(t => null != e.getPurchase(t.skuId))) && !u;
        return {
          isPurchased: null != u && u, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null != d && d
        };
      default:
        return {
          isPurchased: s, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false
        }
    }
  },
  c = e => (0, o.cj)([s.Z], () => l(s.Z, e))