/** Chunk was on web.js **/
/** chunk id: 259248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var r, Chunk735438 = require("./735438.js"),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk203632 = require("./203632.js");

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
    if (e.type !== a.R.PROFILE_EFFECT && e.type !== a.R.VARIANTS_GROUP) return r;
    let s = [...e.items, ...null != (t = null == (n = e.variants) ? true : n.flatMap(e => {
      let {
        items: t
      } = e;
      return t
    })) ? t : []].filter(l.C);
    for (let e of (0, i.uniqBy)(s, "skuId")) {
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
  h = e => {
    let {
      product: t
    } = e;
    return f(t)
  },
  m = e => {
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
class O extends(r = Chunk311907.Ay.Store) {
  getAllProfileEffects() {
    return Object.values(u)
  }
  getProfileEffect(e) {
    return null != e ? u[e] : true
  }
}
c(O, "displayName", "ProfileEffectStore");
let A = new O(Chunk73153.h, {
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: h,
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: m,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: g,
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: E,
  COLLECTIBLES_CLAIM_SUCCESS: b,
  LOGOUT: y
})