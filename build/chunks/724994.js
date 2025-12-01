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
    var n, r, o, s;
    let l = e.getPurchase(t.skuId),
      c = null != l,
      u = null != (n = null == l ? true : l.expiresAt) ? n : null,
      d = null != u,
      f = null != (r = t.items) ? r : [],
      p = i()(f.map(t => e.getPurchase(t.skuId)));
    switch (null == t ? true : t.type) {
      case a.Z.BUNDLE:
        return {
          isPurchased: c || f.length > 0 && p.length === f.length, isPartiallyOwnedBundle: p.length > 0 && p.length < f.length, isPartiallyOwnedVariantsGroup: false, isRented: false, rentalExpiresAt: null
        };
      case a.Z.VARIANTS_GROUP:
        let _ = null == (o = t.variants) ? true : o.every(t => null != e.getPurchase(t.skuId)),
          m = (null == (s = t.variants) ? true : s.some(t => null != e.getPurchase(t.skuId))) && !_;
        return {
          isPurchased: null != _ && _, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null != m && m, isRented: d, rentalExpiresAt: u
        };
      default:
        return {
          isPurchased: c, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false, isRented: d, rentalExpiresAt: u
        }
    }
  },
  c = e => (0, o.cj)([s.Z], () => l(s.Z, e))