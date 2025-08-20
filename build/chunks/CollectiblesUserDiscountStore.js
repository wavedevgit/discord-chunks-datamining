/** Chunk was on web.js **/
/** chunk id: 615006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
    if (null != t && t.length > 0) {
      let e = l.filter(e => !t.some(t => t.discount.id === e.discountId));
      e.length !== l.length && (l = e)
    }
  },
  d = e => {
    let t = e.discountIds;
    if (t.length > 0) {
      let e = l.filter(e => !t.includes(e.discountId));
      e.length !== l.length && (l = e)
    }
  },
  f = () => {
    l = s
  };
class _ extends(r = Chunk442837.ZP.Store) {
  getUserDiscounts() {
    return l
  }
}
o(_, "displayName", "CollectiblesUserDiscountStore");
let p = new _(Chunk570140.Z, {
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: c,
  SKU_PURCHASE_SUCCESS: u,
  COLLECTIBLES_USER_DISCOUNTS_EXPIRED: d,
  LOGOUT: f
})