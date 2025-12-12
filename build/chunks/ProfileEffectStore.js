/** Chunk was on web.js **/
/** chunk id: 25251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var r, Chunk392711 = require("./392711.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk212161 = require("./212161.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {},
  d = (e, t) => !(0, i.isEqual)(u[e], t) && (u[e] = t, true),
  f = e => {
    var t, n;
    let r = false;
    if (e.type !== a.Z.PROFILE_EFFECT && e.type !== a.Z.VARIANTS_GROUP) return r;
    let o = [...e.items, ...null != (n = null == (t = e.variants) ? true : t.flatMap(e => e.items)) ? n : []].filter(l.H);
    for (let e of (0, i.uniqBy)(o, "skuId")) {
      let t = {
        skuId: e.skuId,
        config: e
      };
      d(e.skuId, t) && (r = true)
    }
    return r
  },
  p = e => {
    let t = false;
    return e.forEach(e => {
      e.products.forEach(e => {
        f(e) && (t = true)
      })
    }), t
  },
  _ = e => {
    let t = false;
    return e.forEach(e => {
      f(e) && (t = true)
    }), t
  },
  m = e => {
    let {
      product: t
    } = e;
    return f(t)
  },
  h = e => {
    let {
      categories: t
    } = e;
    return p(t.categories)
  },
  g = e => {
    let {
      shopHome: t
    } = e;
    return p(t.categories)
  },
  E = e => {
    let {
      purchases: t
    } = e;
    return _(t)
  },
  b = e => {
    let {
      purchases: t
    } = e;
    return null != t && _(t)
  },
  y = e => {
    u = {}
  };
class O extends(r = Chunk442837.ZP.Store) {
  getAllProfileEffects() {
    return Object.values(u)
  }
  getProfileEffect(e) {
    return null != e ? u[e] : true
  }
}
c(O, "displayName", "ProfileEffectStore");
let v = new O(Chunk570140.Z, {
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: m,
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: h,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: g,
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: E,
  COLLECTIBLES_CLAIM_SUCCESS: b,
  LOGOUT: y
})