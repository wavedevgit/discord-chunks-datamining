/** Chunk was on web.js **/
/** chunk id: 590180, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  A: () => K
}), require("./896048.js");
var s, Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk547065 = require("./547065.js"),
  Chunk773669 = require("./773669.js"),
  Chunk993408 = require("./993408.js"),
  Chunk758836 = require("./758836.js");

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
  y = new Map,
  b = [],
  O = m,
  v = g,
  A = E,
  I = [],
  S = y,
  T = b,
  C = null,
  N = false,
  R = new Set,
  w = new Map,
  P = new Map,
  D = {},
  x = 0,
  L = e => {
    let {
      skuId: t
    } = e;
    (R = new Set(R)).add(t), (w = new Map(w)).delete(t), (P = new Map(P)).delete(t)
  },
  j = e => {
    let {
      skuId: t,
      error: n
    } = e;
    (R = new Set(R)).delete(t), (w = new Map(w)).set(t, n), (P = new Map(P)).set(t, Date.now())
  },
  M = e => {
    let {
      skuId: t,
      product: n
    } = e;
    v.set(t, n), (R = new Set(R)).delete(t), (w = new Map(w)).delete(t), (P = new Map(P)).delete(t)
  },
  k = e => {
    N = true, r = true, a = true, D = e.options
  },
  U = e => {
    let {
      error: t
    } = e;
    O = m, v = g, T = b, N = false, R = new Set, r = t, a = Date.now()
  },
  G = e => {
    let t = e.categories.categories;
    if (0 === t.length) O = m, v = g;
    else if (!(0, o.isEqual)([...O.values()], t) && !e.noOp) {
      let e = new Map(t.map(e => [e.skuId, e])),
        n = new Date;
      O.forEach((t, r) => {
        !e.has(r) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(r, t)
      }), S = new Map([...(O = e).values()].map(e => [e.storeListingId, e])), v = new Map((0, p.P_)(O, true).map(e => [e.skuId, e])), I = [...(A = new Map((0, p.P_)(O, false).map(e => [e.storeListingId, e]))).values()]
    }
    F(t, v), i = Date.now(), N = false, r = true, a = true
  },
  V = e => {
    if (0 === e.shopHome.categories.length) return;
    let t = new Map(e.shopHome.categories.map(e => [e.skuId, e]));
    S = new Map([...(O = new Map([...O, ...t])).values()].map(e => [e.storeListingId, e])), v = new Map((0, p.P_)(O, true).map(e => [e.skuId, e]))
  },
  F = (e, t) => {
    if (0 === e.length) {
      T = b;
      return
    }
    switch (C) {
      case d.J.POPULAR:
        T = _.xG;
        break;
      case d.J.RECENT:
        T = (0, p.H1)(e, t);
        break;
      case d.J.NONE:
      default:
        T = b
    }
  },
  B = () => {
    O = m, v = g, T = b, i = true, N = false, R = new Set, r = true, a = true, D = {}, x = 0
  },
  H = () => {
    if (!u.A.hasLoadedExperiments) return;
    let {
      giftRecommendationAlgorithm: e
    } = d.P.getCurrentConfig({
      location: "CollectiblesCategoryStore handleExperimentChange"
    }, {
      autoTrackExposure: false
    });
    e !== C && (i = true), C = e
  },
  Y = e => {
    x = e.skipNumCategories
  };
class W extends(s = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([f.default], B), this.syncWith([u.A], H)
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
    return I
  }
  get recommendedGiftSkuIds() {
    return T
  }
  get skipNumCategories() {
    return x
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
    return null != e ? w.get(e) : true
  }
  getProductFetchErrorTimestamp(e) {
    return null != e ? P.get(e) : true
  }
  getProductByStoreListingId(e) {
    return null != e ? A.get(e) : true
  }
  getCategoryByStoreListingId(e) {
    return null != e ? S.get(e) : true
  }
  getCategoryForProduct(e) {
    let t = this.getProduct(e);
    return this.getCategory(null == t ? true : t.categorySkuId)
  }
}
h(W, "displayName", "CollectiblesCategoryStore");
let K = new W(Chunk73153.h, {
  COLLECTIBLES_CATEGORIES_FETCH: k,
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: G,
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: U,
  COLLECTIBLES_PRODUCT_FETCH: L,
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: M,
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: j,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: V,
  COLLECTIBLES_SKIP_NUM_CATEGORIES: Y,
  LOGOUT: B
})