/** Chunk was on web.js **/
/** chunk id: 466459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => c,
  o: () => l
});
var Chunk791282 = require("./791282.js"),
  i = require.n(Chunk791282),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk4227 = require("./4227.js");
let l = (e, t) => {
    var n, r, s, o;
    let l = e.getPurchase(t.skuId),
      c = null != l,
      u = null != (n = null == l ? true : l.expiresAt) ? n : null,
      d = null != u,
      f = null != (r = t.items) ? r : [],
      p = i()(f.map(t => e.getPurchase(t.skuId)));
    switch (null == t ? true : t.type) {
      case a.R.BUNDLE:
        return {
          isPurchased: c || f.length > 0 && p.length === f.length, isPartiallyOwnedBundle: p.length > 0 && p.length < f.length, isPartiallyOwnedVariantsGroup: false, isRented: false, rentalExpiresAt: null
        };
      case a.R.VARIANTS_GROUP:
        let _ = null == (s = t.variants) ? true : s.every(t => null != e.getPurchase(t.skuId)),
          h = (null == (o = t.variants) ? true : o.some(t => null != e.getPurchase(t.skuId))) && !_;
        return {
          isPurchased: null != _ && _, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null != h && h, isRented: d, rentalExpiresAt: u
        };
      default:
        return {
          isPurchased: c, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false, isRented: d, rentalExpiresAt: u
        }
    }
  },
  c = e => (0, s.cf)([o.A], () => l(o.A, e))