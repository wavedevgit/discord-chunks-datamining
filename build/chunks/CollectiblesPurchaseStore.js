/** Chunk was on web.js **/
/** chunk id: 4227, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  A: () => A
}), require("./896048.js");
var s, Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

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
  p = false,
  _ = false,
  h = e => {
    p = true, i = true
  },
  m = e => {
    let {
      error: t
    } = e;
    f = d, p = false, i = t, _ = true
  },
  g = e => {
    0 === e.purchases.length ? f = d : (0, o.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map(e => [e.skuId, e]))), _ = true, p = false, i = true
  },
  E = e => {
    r = e.skuId, a = true
  },
  y = e => {
    null == e.purchases || 0 === e.purchases.length ? f = d : (0, o.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map(e => [e.skuId, e]))), r = true, a = true
  },
  b = e => {
    let {
      error: t,
      skuId: n
    } = e;
    r = n, a = t
  },
  O = e => {
    f = d, p = false, r = true, i = true, a = true, _ = false
  };
class v extends(s = Chunk311907.Ay.Store) {
  get isFetching() {
    return p
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
    return _
  }
  getPurchase(e) {
    return null != e ? f.get(e) : true
  }
  getPurchases(e) {
    return e.map(e => f.get(e)).filter(e => null != e)
  }
}
u(v, "displayName", "CollectiblesPurchaseStore");
let A = new v(Chunk73153.h, {
  COLLECTIBLES_PURCHASES_FETCH: h,
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: g,
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: m,
  COLLECTIBLES_CLAIM: E,
  COLLECTIBLES_CLAIM_SUCCESS: y,
  COLLECTIBLES_CLAIM_FAILURE: b,
  LOGOUT: O
})