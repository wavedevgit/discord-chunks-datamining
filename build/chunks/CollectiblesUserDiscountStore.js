/** Chunk was on web.js **/
/** chunk id: 615006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
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
  u = () => {
    l = s
  };
class d extends(r = Chunk442837.ZP.Store) {
  getUserDiscounts() {
    return l
  }
}
a(d, "displayName", "CollectiblesUserDiscountStore");
let f = new d(Chunk570140.Z, {
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: c,
  LOGOUT: u
})