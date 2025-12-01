/** Chunk was on web.js **/
/** chunk id: 25251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var r, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk212161 = require("./212161.js"),
  Chunk70956 = require("./70956.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {},
  d = Chunk70956.Z.Millis.MINUTE,
  f = Chunk70956.Z.Millis.HOUR,
  p = false,
  _ = 0,
  m = 0,
  h = e => Math.min(d * 2 ** e, f),
  g = (e, t) => !(0, i.isEqual)(u[e], t) && (u[e] = t, true),
  E = e => {
    let t = false;
    return e.items.forEach(n => {
      if (!(0, s.H)(n)) return;
      let r = {
        skuId: e.skuId,
        config: n
      };
      g(e.skuId, r) && (t = true)
    }), t
  },
  b = e => {
    let t = false;
    return e.forEach(e => {
      e.products.forEach(e => {
        E(e) && (t = true)
      })
    }), t
  },
  y = e => {
    let t = false;
    return e.forEach(e => {
      E(e) && (t = true)
    }), t
  },
  O = e => {
    p = true
  },
  v = e => {
    let {
      configs: t
    } = e;
    t.forEach(e => {
      g(e.skuId, {
        skuId: e.skuId,
        config: e
      })
    }), _ = 1 / 0, m = 0, p = false
  },
  S = e => {
    _ = Date.now() + h(m), m += 1, p = false
  },
  I = e => {
    let {
      product: t
    } = e;
    return E(t)
  },
  T = e => {
    let {
      categories: t
    } = e;
    return b(t)
  },
  A = e => {
    let {
      categories: t
    } = e;
    return b(t.categories)
  },
  C = e => {
    let {
      shopHome: t
    } = e;
    return b(t.categories)
  },
  N = e => {
    let {
      purchases: t
    } = e;
    return y(t)
  },
  P = e => {
    let {
      purchases: t
    } = e;
    return null != t && y(t)
  },
  R = e => {
    u = {}, p = false, _ = 0, m = 0
  };
class w extends(r = Chunk442837.ZP.Store) {
  getAllProfileEffects() {
    return Object.values(u)
  }
  getProfileEffect(e) {
    return null != e ? u[e] : true
  }
  get isFetchingAll() {
    return p
  }
  canFetchAll() {
    return Date.now() >= _
  }
}
c(w, "displayName", "ProfileEffectStore");
let D = new w(Chunk570140.Z, {
  PROFILE_EFFECTS_FETCH_ALL: O,
  PROFILE_EFFECTS_FETCH_ALL_SUCCESS: v,
  PROFILE_EFFECTS_FETCH_ALL_FAILURE: S,
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: I,
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: T,
  COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS: A,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: C,
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: N,
  COLLECTIBLES_CLAIM_SUCCESS: P,
  LOGOUT: R
})