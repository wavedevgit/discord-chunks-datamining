/** Chunk was on web.js **/
/** chunk id: 615006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = [],
  l = s,
  c = e => {
    let t = e.shopHome.userDiscounts;
    l = null != t && t.length > 0 ? t : s
  },
  u = e => {
    let t = e.appliedUserDiscounts;
    null != t && t.length > 0 && (l = l.filter(e => !t.some(t => t.discount.id === e.discountId)))
  },
  d = () => {
    l = s
  };
class f extends(r = Chunk442837.ZP.Store) {
  getUserDiscounts() {
    return l
  }
}
o(f, "displayName", "CollectiblesUserDiscountStore");
let _ = new f(Chunk570140.Z, {
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: c,
  SKU_PURCHASE_SUCCESS: u,
  LOGOUT: d
})