/** Chunk was on web.js **/
/** chunk id: 328347, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => h
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = [],
  c = l,
  u = null,
  d = e => {
    var t, n;
    c = null != (t = e.analyticsLocations) ? t : l, u = null != (n = e.analyticsSource) ? n : null, r = e.initialProductSkuId
  },
  f = e => {
    c = l, u = null
  },
  p = e => {
    e.item.skuId === r && (r = true)
  };
class _ extends(i = Chunk442837.ZP.Store) {
  get analyticsLocations() {
    return c
  }
  get analyticsSource() {
    return u
  }
  get initialProductSkuId() {
    return r
  }
  getAnalytics() {
    return {
      analyticsLocations: c,
      analyticsSource: u
    }
  }
}
s(_, "displayName", "CollectiblesShopStore");
let h = new _(Chunk570140.Z, {
  COLLECTIBLES_SHOP_OPEN: d,
  COLLECTIBLES_SHOP_CLOSE: f,
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: p,
  LOGOUT: f
})