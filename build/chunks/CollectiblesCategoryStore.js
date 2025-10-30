/** Chunk was on web.js **/
/** chunk id: 597688, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var o, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk109213 = require("./109213.js"),
  Chunk706454 = require("./706454.js"),
  Chunk884697 = require("./884697.js"),
  Chunk215023 = require("./215023.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = new Map,
  g = new Map,
  E = new Map,
  b = new Map,
  y = [],
  O = m,
  v = g,
  I = E,
  S = [],
  T = b,
  A = y,
  C = null,
  N = false,
  R = new Set,
  P = new Map,
  w = new Map,
  D = {},
  L = 0,
  x = e => {
    let {
      skuId: t
    } = e;
    (R = new Set(R)).add(t), (P = new Map(P)).delete(t), (w = new Map(w)).delete(t)
  },
  M = e => {
    let {
      skuId: t,
      error: n
    } = e;
    (R = new Set(R)).delete(t), (P = new Map(P)).set(t, n), (w = new Map(w)).set(t, Date.now())
  },
  k = e => {
    let {
      skuId: t,
      product: n
    } = e;
    v.set(t, n), (R = new Set(R)).delete(t), (P = new Map(P)).delete(t), (w = new Map(w)).delete(t)
  },
  j = e => {
    N = true, r = true, a = true, D = e.options
  },
  U = e => {
    let {
      error: t
    } = e;
    O = m, v = g, A = y, N = false, R = new Set, r = t, a = Date.now()
  },
  G = e => {
    Z(e.categories, e.noOp)
  },
  B = e => {
    Z(e.categories.categories, e.noOp)
  },
  Z = (e, t) => {
    if (0 === e.length) O = m, v = g;
    else if (!(0, s.isEqual)([...O.values()], e) && !t) {
      let t = new Map(e.map(e => [e.skuId, e])),
        n = new Date;
      O.forEach((e, r) => {
        !t.has(r) && (null == e.unpublishedAt || e.unpublishedAt > n) && t.set(r, e)
      }), T = new Map([...(O = t).values()].map(e => [e.storeListingId, e])), v = new Map((0, _.Cs)(O, true).map(e => [e.skuId, e])), S = [...(I = new Map((0, _.Cs)(O, false).map(e => [e.storeListingId, e]))).values()]
    }
    V(e, v), i = Date.now(), N = false, r = true, a = true
  },
  F = e => {
    if (0 === e.shopHome.categories.length) return;
    let t = new Map(e.shopHome.categories.map(e => [e.skuId, e]));
    T = new Map([...(O = new Map([...O, ...t])).values()].map(e => [e.storeListingId, e])), v = new Map((0, _.Cs)(O, true).map(e => [e.skuId, e]))
  },
  V = (e, t) => {
    if (0 === e.length) {
      A = y;
      return
    }
    switch (C) {
      case d.u.POPULAR:
        A = p.HU;
        break;
      case d.u.RECENT:
        A = (0, _.x0)(e, t);
        break;
      case d.u.NONE:
      default:
        A = y
    }
  },
  H = () => {
    O = m, v = g, A = y, i = true, N = false, R = new Set, r = true, a = true, D = {}, L = 0
  },
  Y = () => {
    if (!Chunk353926.Z.hasLoadedExperiments) return;
    let {
      giftRecommendationAlgorithm: e
    } = Chunk109213.G.getCurrentConfig({
      location: "CollectiblesCategoryStore handleExperimentChange"
    }, {
      autoTrackExposure: false
    });
    module !== C && (i = true), C = module
  },
  W = e => {
    L = e.skipNumCategories
  };
class K extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk706454.default], H), this.syncWith([Chunk353926.Z], Y)
  }
  get isFetchingCategories() {
    return N
  }
  isFetchingProduct(e) {
    return null != e && R.has(e)
  }
  get error() {
    return r
  }
  get lastErrorTimestamp() {
    return a
  }
  get lastSuccessfulFetch() {
    return i
  }
  get lastFetchOptions() {
    return D
  }
  get categories() {
    return O
  }
  get products() {
    return v
  }
  get productsWithVariantsAsGroup() {
    return S
  }
  get recommendedGiftSkuIds() {
    return A
  }
  get skipNumCategories() {
    return L
  }
  getCategory(e) {
    return null != e ? O.get(e) : true
  }
  getProduct(e) {
    return null != e ? v.get(e) : true
  }
  getProductsBySkus(e) {
    return e.map(e => v.get(e)).filter(e => null != e)
  }
  getProductFetchError(e) {
    return null != e ? P.get(e) : true
  }
  getProductFetchErrorTimestamp(e) {
    return null != e ? w.get(e) : true
  }
  getProductByStoreListingId(e) {
    return null != e ? I.get(e) : true
  }
  getCategoryByStoreListingId(e) {
    return null != e ? T.get(e) : true
  }
  getCategoryForProduct(e) {
    let t = this.getProduct(e);
    return this.getCategory(null == t ? true : t.categorySkuId)
  }
}
h(K, "displayName", "CollectiblesCategoryStore");
let z = new K(Chunk570140.Z, {
  COLLECTIBLES_CATEGORIES_FETCH: j,
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: G,
  COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS: B,
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: U,
  COLLECTIBLES_PRODUCT_FETCH: x,
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: k,
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: M,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: F,
  COLLECTIBLES_SKIP_NUM_CATEGORIES: W,
  LOGOUT: H
})