/** Chunk was on web.js **/
/** chunk id: 551428, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./415506.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk706454 = require("./706454.js"),
  Chunk156570 = require("./156570.js"),
  Chunk823379 = require("./823379.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {},
  f = {},
  p = {},
  _ = {},
  h = new Set;

function m(e) {
  let t = e.id,
    n = e.sku.id,
    r = d[t],
    i = l.Z.createFromServer(e);
  null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion() || (false === e.published ? (null == p[n] && (p[n] = new Set), p[n].add(t)) : _[n] = t, d[t] = i, h.delete(e.sku.id))
}

function g(e, t) {
  return "".concat(e, ":").concat(t)
}

function E(e) {
  let {
    storeListings: t
  } = e;
  for (let e of t) m(e)
}

function b(e) {
  let {
    storeListing: t,
    channelId: n
  } = e;
  if (null != n) {
    let e = l.Z.createFromServer(t);
    f[g(n, e.skuId)] = e, _[e.skuId] = e.id
  } else m(t)
}

function y(e) {
  let {
    giftCode: t
  } = e;
  if (null == t.store_listing) returnfalse;
  m(t.store_listing)
}

function O(e) {
  let {
    skuId: t
  } = e;
  h.add(t)
}

function v(e) {
  let {
    skuId: t
  } = e;
  h.delete(t)
}

function S() {
  d = {}, _ = {}, p = {}, f = {}, h = new Set
}

function I() {
  if (r === s.default.locale) returnfalse;
  S(), r = s.default.locale
}
class T extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.default), this.syncWith([s.default], I), r = s.default.locale
  }
  get(e) {
    return d[e]
  }
  getForSKU(e, t) {
    let n = _[e];
    return null != t ? f[g(t, e)] : null != n ? d[n] : null
  }
  getUnpublishedForSKU(e) {
    let t = p[e];
    return null == t ? [] : Array.from(t).map(e => d[e]).filter(c.lm)
  }
  getForChannel(e, t) {
    return f[g(e, t)]
  }
  isFetchingForSKU(e) {
    return h.has(e)
  }
  getStoreListing(e) {
    let {
      storeListingId: t,
      skuId: n,
      channelId: r,
      isTestMode: i
    } = e;
    if (i && null != n) {
      let e = this.getUnpublishedForSKU(n);
      if (null != e && e.length > 0) return e[0]
    }
    if (null != t) return this.get(t);
    if (null != r) {
      if (null == n) throw Error("getStoreListing with channel expects a skuId");
      return this.getForChannel(r, n)
    }
    return null != n ? this.getForSKU(n) : null
  }
}
u(T, "displayName", "StoreListingStore");
let C = new T(Chunk570140.Z, {
  STORE_LISTINGS_FETCH_START: O,
  STORE_LISTINGS_FETCH_FAIL: v,
  STORE_LISTINGS_FETCH_SUCCESS: E,
  STORE_LISTING_FETCH_SUCCESS: b,
  USER_SETTINGS_PROTO_UPDATE: I,
  APPLICATION_STORE_CLEAR_DATA: S,
  GIFT_CODE_RESOLVE_SUCCESS: y
})