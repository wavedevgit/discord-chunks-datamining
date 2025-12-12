/** Chunk was on web.js **/
/** chunk id: 597688, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var o, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk109213 = require("./109213.js"),
  Chunk706454 = require("./706454.js"),
  Chunk884697 = require("./884697.js"),
  Chunk215023 = require("./215023.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = new Map,
  g = new Map,
  E = new Map,
  b = new Map,
  y = [],
  O = h,
  v = g,
  S = E,
  I = [],
  T = b,
  C = y,
  A = null,
  N = false,
  P = new Set,
  R = new Map,
  w = new Map,
  D = {},
  x = 0,
  L = e => {
    let {
      skuId: t
    } = e;
    (P = new Set(P)).add(t), (R = new Map(R)).delete(t), (w = new Map(w)).delete(t)
  },
  j = e => {
    let {
      skuId: t,
      error: n
    } = e;
    (P = new Set(P)).delete(t), (R = new Map(R)).set(t, n), (w = new Map(w)).set(t, Date.now())
  },
  M = e => {
    let {
      skuId: t,
      product: n
    } = e;
    v.set(t, n), (P = new Set(P)).delete(t), (R = new Map(R)).delete(t), (w = new Map(w)).delete(t)
  },
  k = e => {
    N = true, r = true, a = true, D = e.options
  },
  U = e => {
    let {
      error: t
    } = e;
    O = h, v = g, C = y, N = false, P = new Set, r = t, a = Date.now()
  },
  G = e => {
    let t = e.categories.categories;
    if (0 === t.length) O = h, v = g;
    else if (!(0, s.isEqual)([...O.values()], t) && !e.noOp) {
      let e = new Map(t.map(e => [e.skuId, e])),
        n = new Date;
      O.forEach((t, r) => {
        !e.has(r) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(r, t)
      }), T = new Map([...(O = e).values()].map(e => [e.storeListingId, e])), v = new Map((0, p.Cs)(O, true).map(e => [e.skuId, e])), I = [...(S = new Map((0, p.Cs)(O, false).map(e => [e.storeListingId, e]))).values()]
    }
    F(t, v), i = Date.now(), N = false, r = true, a = true
  },
  Z = e => {
    if (0 === e.shopHome.categories.length) return;
    let t = new Map(e.shopHome.categories.map(e => [e.skuId, e]));
    T = new Map([...(O = new Map([...O, ...t])).values()].map(e => [e.storeListingId, e])), v = new Map((0, p.Cs)(O, true).map(e => [e.skuId, e]))
  },
  F = (e, t) => {
    if (0 === e.length) {
      C = y;
      return
    }
    switch (A) {
      case d.u.POPULAR:
        C = _.HU;
        break;
      case d.u.RECENT:
        C = (0, p.x0)(e, t);
        break;
      case d.u.NONE:
      default:
        C = y
    }
  },
  B = () => {
    O = h, v = g, C = y, i = true, N = false, P = new Set, r = true, a = true, D = {}, x = 0
  },
  V = () => {
    if (!Chunk353926.Z.hasLoadedExperiments) return;
    let {
      giftRecommendationAlgorithm: e
    } = Chunk109213.G.getCurrentConfig({
      location: "CollectiblesCategoryStore handleExperimentChange"
    }, {
      autoTrackExposure: false
    });
    module !== A && (i = true), A = module
  },
  H = e => {
    x = e.skipNumCategories
  };
class Y extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk706454.default], B), this.syncWith([Chunk353926.Z], V)
  }
  get isFetchingCategories() {
    return N
  }
  isFetchingProduct(e) {
    return null != e && P.has(e)
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
    return C
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
    return null != e ? R.get(e) : true
  }
  getProductFetchErrorTimestamp(e) {
    return null != e ? w.get(e) : true
  }
  getProductByStoreListingId(e) {
    return null != e ? S.get(e) : true
  }
  getCategoryByStoreListingId(e) {
    return null != e ? T.get(e) : true
  }
  getCategoryForProduct(e) {
    let t = this.getProduct(e);
    return this.getCategory(null == t ? true : t.categorySkuId)
  }
}
m(Y, "displayName", "CollectiblesCategoryStore");
let W = new Y(Chunk570140.Z, {
  COLLECTIBLES_CATEGORIES_FETCH: k,
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: G,
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: U,
  COLLECTIBLES_PRODUCT_FETCH: L,
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: M,
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: j,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: Z,
  COLLECTIBLES_SKIP_NUM_CATEGORIES: H,
  LOGOUT: B
})