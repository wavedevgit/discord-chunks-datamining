/** Chunk was on web.js **/
/** chunk id: 1870, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var o, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Map,
  f = d,
  _ = false,
  p = false,
  h = e => {
    _ = true, i = true
  },
  m = e => {
    let {
      error: t
    } = e;
    f = d, _ = false, i = t, p = true
  },
  g = e => {
    0 === e.purchases.length ? f = d : (0, s.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map(e => [e.skuId, e]))), p = true, _ = false, i = true
  },
  E = e => {
    r = e.skuId, a = true
  },
  b = e => {
    null == e.purchases || 0 === e.purchases.length ? f = d : (0, s.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map(e => [e.skuId, e]))), r = true, a = true
  },
  y = e => {
    let {
      error: t,
      skuId: n
    } = e;
    r = n, a = t
  },
  O = e => {
    f = d, _ = false, r = true, i = true, a = true, p = false
  };
class v extends(o = Chunk442837.ZP.Store) {
  get isFetching() {
    return _
  }
  get isClaiming() {
    return r
  }
  get purchases() {
    return f
  }
  get fetchError() {
    return i
  }
  get claimError() {
    return a
  }
  get hasPreviouslyFetched() {
    return p
  }
  getPurchase(e) {
    return null != e ? f.get(e) : true
  }
  getPurchases(e) {
    return null != e ? e.map(e => f.get(e)).filter(e => null != e) : true
  }
}
u(v, "displayName", "CollectiblesPurchaseStore");
let I = new v(Chunk570140.Z, {
  COLLECTIBLES_PURCHASES_FETCH: h,
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: g,
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: m,
  COLLECTIBLES_CLAIM: E,
  COLLECTIBLES_CLAIM_SUCCESS: b,
  COLLECTIBLES_CLAIM_FAILURE: y,
  LOGOUT: O
})