/** Chunk was on web.js **/
"use strict";
let r, i, o;
n.d(t, {
  Z: () => Z
}), n(47120);
var a, s = n(392711),
  l = n(442837),
  c = n(570140),
  u = n(353926),
  d = n(109213),
  f = n(706454),
  _ = n(884697),
  p = n(215023);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = new Map,
  m = new Map,
  E = new Map,
  v = new Map,
  b = [],
  y = g,
  O = m,
  S = E,
  I = v,
  T = b,
  N = null,
  A = !1,
  C = new Set,
  R = new Map,
  P = new Map,
  D = {},
  w = e => {
    let {
      skuId: t
    } = e;
    (C = new Set(C)).add(t), (R = new Map(R)).delete(t), (P = new Map(P)).delete(t)
  },
  L = e => {
    let {
      skuId: t,
      error: n
    } = e;
    (C = new Set(C)).delete(t), (R = new Map(R)).set(t, n), (P = new Map(P)).set(t, Date.now())
  },
  x = e => {
    let {
      skuId: t,
      product: n
    } = e;
    O.set(t, n), (C = new Set(C)).delete(t), (R = new Map(R)).delete(t), (P = new Map(P)).delete(t)
  },
  M = e => {
    A = !0, r = void 0, o = void 0, D = e.options
  },
  j = e => {
    let {
      error: t
    } = e;
    y = g, O = m, T = b, A = !1, C = new Set, r = t, o = Date.now()
  },
  k = e => {
    if (0 === e.categories.length) y = g, O = m;
    else if (!(0, s.isEqual)([...y.values()], e.categories) && !e.noOp) {
      let t = new Map(e.categories.map(e => [e.skuId, e])),
        n = new Date;
      y.forEach((e, r) => {
        !t.has(r) && (null == e.unpublishedAt || e.unpublishedAt > n) && t.set(r, e)
      }), I = new Map([...(y = t).values()].map(e => [e.storeListingId, e])), O = new Map((0, _.Cs)(y, !0).map(e => [e.skuId, e])), S = new Map((0, _.Cs)(y, !1).map(e => [e.storeListingId, e]))
    }
    G(e.categories, O), i = Date.now(), A = !1, r = void 0, o = void 0
  },
  U = e => {
    if (0 === e.shopHome.categories.length) return;
    let t = new Map(e.shopHome.categories.map(e => [e.skuId, e]));
    y = new Map([...y, ...t]), O = new Map((0, _.Cs)(y, !0).map(e => [e.skuId, e]))
  },
  G = (e, t) => {
    if (0 === e.length) {
      T = b;
      return
    }
    switch (N) {
      case d.u.POPULAR:
        T = p.HU;
        break;
      case d.u.RECENT:
        T = (0, _.x0)(e, t);
        break;
      case d.u.NONE:
      default:
        T = b
    }
  },
  B = () => {
    y = g, O = m, T = b, i = void 0, A = !1, C = new Set, r = void 0, o = void 0, D = {}
  },
  F = () => {
    if (!u.Z.hasLoadedExperiments) return;
    let {
      giftRecommendationAlgorithm: e
    } = d.G.getCurrentConfig({
      location: "CollectiblesCategoryStore handleExperimentChange"
    }, {
      autoTrackExposure: !1
    });
    e !== N && (i = void 0), N = e
  };
class V extends(a = l.ZP.Store) {
  initialize() {
    this.syncWith([f.default], B), this.syncWith([u.Z], F)
  }
  get isFetchingCategories() {
    return A
  }
  isFetchingProduct(e) {
    return null != e && C.has(e)
  }
  get error() {
    return r
  }
  get lastErrorTimestamp() {
    return o
  }
  get lastSuccessfulFetch() {
    return i
  }
  get lastFetchOptions() {
    return D
  }
  get categories() {
    return y
  }
  get products() {
    return O
  }
  get recommendedGiftSkuIds() {
    return T
  }
  getCategory(e) {
    return null != e ? y.get(e) : void 0
  }
  getProduct(e) {
    return null != e ? O.get(e) : void 0
  }
  getProductFetchError(e) {
    return null != e ? R.get(e) : void 0
  }
  getProductFetchErrorTimestamp(e) {
    return null != e ? P.get(e) : void 0
  }
  getProductByStoreListingId(e) {
    return null != e ? S.get(e) : void 0
  }
  getCategoryByStoreListingId(e) {
    return null != e ? I.get(e) : void 0
  }
  getCategoryForProduct(e) {
    let t = this.getProduct(e);
    return this.getCategory(null == t ? void 0 : t.categorySkuId)
  }
}
h(V, "displayName", "CollectiblesCategoryStore");
let Z = new V(c.Z, {
  COLLECTIBLES_CATEGORIES_FETCH: M,
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: k,
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: j,
  COLLECTIBLES_PRODUCT_FETCH: w,
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: x,
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: L,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: U,
  LOGOUT: B
})