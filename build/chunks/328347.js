/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
let r;
n.d(t, {
  Z: () => h
});
var i, o = n(442837),
  a = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = [],
  c = l,
  u = null,
  d = e => {
    var t, n;
    c = null !== (t = e.analyticsLocations) && void 0 !== t ? t : l, u = null !== (n = e.analyticsSource) && void 0 !== n ? n : null, r = e.initialProductSkuId
  },
  f = e => {
    c = l, u = null
  },
  p = e => {
    e.item.skuId === r && (r = void 0)
  };
class _ extends(i = o.ZP.Store) {
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
let h = new _(a.Z, {
  COLLECTIBLES_SHOP_OPEN: d,
  COLLECTIBLES_SHOP_CLOSE: f,
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: p,
  LOGOUT: f
})