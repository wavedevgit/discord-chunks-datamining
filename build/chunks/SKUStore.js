/** Chunk was on web.js **/
/** chunk id: 55563, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./467055.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk706454 = require("./706454.js"),
  Chunk659181 = require("./659181.js"),
  Chunk77498 = require("./77498.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Map,
  f = new Set,
  _ = new Set,
  p = new Map,
  h = new Map,
  m = new Map;

function g(e) {
  var t;
  p.set(e.id, l.Z.createFromServer(e)), f.delete(e.id), _.delete(e.id), null == (t = e.bundled_sku_ids) || t.forEach(t => {
    d.set(t, e.id)
  }), h.has(e.application_id) || h.set(e.application_id, new Set), h.get(e.application_id).add(e.id)
}

function E(e) {
  g(e)
}

function b(e) {
  let {
    skuId: t
  } = e;
  f.add(t)
}

function y(e) {
  let {
    skuId: t
  } = e;
  f.add(t)
}

function O(e) {
  let {
    skuId: t
  } = e;
  f.delete(t), _.add(t)
}

function v(e) {
  let {
    skuId: t
  } = e;
  f.delete(t), _.add(t)
}

function I(e) {
  let {
    giftCode: t
  } = e;
  if (null == t.store_listing) returnfalse;
  g(t.store_listing.sku)
}

function S(e) {
  let {
    sku: t
  } = e;
  E(t)
}

function T(e) {
  let {
    guildId: t,
    skus: n
  } = e;
  for (let e of n) E(e);
  null != t && m.set(t, new Set(n.map(e => e.id)))
}

function A(e) {
  g(e.sku), null != e.child_skus && e.child_skus.forEach(e => g(e)), null != e.alternative_skus && e.alternative_skus.forEach(e => g(e))
}

function C(e) {
  let {
    storeListings: t
  } = e;
  for (let e of t) A(e)
}

function N(e) {
  let {
    storeListing: t
  } = e;
  A(t)
}

function R(e) {
  let {
    entitlements: t
  } = e;
  for (let e of t) null != e.sku && g(e.sku)
}

function P() {
  d = new Map, f = new Set, _ = new Set, p = new Map, h = new Map, m = new Map
}

function w() {
  if (r === Chunk706454.default.locale) returnfalse;
  r = Chunk706454.default.locale, P()
}
class D extends(i = Chunk442837.yh) {
  initialize() {
    this.waitFor(Chunk706454.default, Chunk77498.Z), this.syncWith([Chunk706454.default], w), r = Chunk706454.default.locale
  }
  get(e) {
    return p.get(e)
  }
  getForApplication(e) {
    let t = h.get(e);
    return null == t ? [] : Array.from(t).map(e => p.get(e))
  }
  isFetching(e) {
    return f.has(e)
  }
  getSKUs() {
    return Object.fromEntries(p)
  }
  getParentSKU(e) {
    let t = d.get(e);
    if (null != t) return this.get(t)
  }
  didFetchingSkuFail(e) {
    return _.has(e)
  }
}
u(D, "displayName", "SKUStore");
let L = new D(Chunk570140.Z, {
  STORE_LISTINGS_FETCH_START: b,
  STORE_LISTINGS_FETCH_FAIL: O,
  STORE_LISTINGS_FETCH_SUCCESS: C,
  STORE_LISTING_FETCH_SUCCESS: N,
  GIFT_CODE_RESOLVE_SUCCESS: I,
  SKU_FETCH_START: y,
  SKU_FETCH_SUCCESS: S,
  SKU_FETCH_FAIL: v,
  SKUS_FETCH_SUCCESS: T,
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: R,
  APPLICATION_STORE_CLEAR_DATA: P,
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: R,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: R
})