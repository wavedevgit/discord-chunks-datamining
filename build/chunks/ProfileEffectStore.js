/** Chunk was on web.js **/
/** chunk id: 25251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var r, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk212161 = require("./212161.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {},
  u = (e, t) => !(0, i.isEqual)(c[e], t) && (c[e] = t, true),
  d = e => {
    let t = false;
    return e.items.forEach(n => {
      if (!(0, s.H)(n)) return;
      let r = {
        skuId: e.skuId,
        config: n
      };
      u(e.skuId, r) && (t = true)
    }), t
  },
  f = e => {
    let t = false;
    return e.forEach(e => {
      e.products.forEach(e => {
        d(e) && (t = true)
      })
    }), t
  },
  p = e => {
    let t = false;
    return e.forEach(e => {
      d(e) && (t = true)
    }), t
  },
  _ = e => {
    let {
      product: t
    } = e;
    return d(t)
  },
  m = e => {
    let {
      categories: t
    } = e;
    return f(t.categories)
  },
  h = e => {
    let {
      shopHome: t
    } = e;
    return f(t.categories)
  },
  g = e => {
    let {
      purchases: t
    } = e;
    return p(t)
  },
  E = e => {
    let {
      purchases: t
    } = e;
    return null != t && p(t)
  },
  b = e => {
    c = {}
  };
class y extends(r = Chunk442837.ZP.Store) {
  getAllProfileEffects() {
    return Object.values(c)
  }
  getProfileEffect(e) {
    return null != e ? c[e] : true
  }
}
l(y, "displayName", "ProfileEffectStore");
let O = new y(Chunk570140.Z, {
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: _,
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: m,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: h,
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: g,
  COLLECTIBLES_CLAIM_SUCCESS: E,
  LOGOUT: b
})