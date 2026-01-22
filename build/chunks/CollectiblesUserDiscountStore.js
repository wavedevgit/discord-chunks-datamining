/** Chunk was on web.js **/
/** chunk id: 248352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = [],
  l = o,
  c = e => {
    d(e.shopHome.userDiscounts)
  },
  u = e => {
    d(e.categories.userDiscounts)
  },
  d = e => {
    l = null != e && e.length > 0 ? e : o
  },
  f = e => {
    let t = e.appliedUserDiscounts;
    if (null != t && t.length > 0) {
      let e = l.filter(e => !t.some(t => t.discount.id === e.discountId));
      e.length !== l.length && (l = e)
    }
  },
  p = e => {
    let t = e.discountIds;
    if (t.length > 0) {
      let e = l.filter(e => !t.includes(e.discountId));
      e.length !== l.length && (l = e)
    }
  },
  _ = () => {
    l = o
  };
class h extends(r = Chunk311907.Ay.Store) {
  getUserDiscounts() {
    return l
  }
  getUserDiscount(e) {
    return l.find(t => t.discountId === e)
  }
}
s(h, "displayName", "CollectiblesUserDiscountStore");
let m = new h(Chunk73153.h, {
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: c,
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: u,
  SKU_PURCHASE_SUCCESS: f,
  COLLECTIBLES_USER_DISCOUNTS_EXPIRED: p,
  LOGOUT: _
})