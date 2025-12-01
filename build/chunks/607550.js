/** Chunk was on web.js **/
/** chunk id: 607550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./539854.js"), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let s = {},
  l = 2;

function c(e) {
  let t = [];
  for (let n of e.items)
    if (n.skuProductLine === o.POd.SOCIAL_LAYER_GAME_ITEM && t.push(n), t.length === l) break;
  let n = new Set(t.map(e => e.skuId)),
    r = e.items.filter(e => !n.has(e.skuId));
  return e.items = [...t, ...r], e
}
let u = () => ({
  data: null,
  status: "not_loaded"
});

function d(e) {
  var t, n, r;
  return null != (r = (t = s)[n = e]) ? r : t[n] = u()
}

function f(e) {
  let {
    wishlistId: t
  } = e, n = d(t);
  n.status = "fetching", n.error = true
}

function p(e) {
  let {
    wishlistId: t,
    wishlistData: n,
    updatedAt: r
  } = e, i = d(t);
  i.data = c(n), i.status = "success", i.error = true, i.updatedAt = r
}

function _(e) {
  let {
    wishlistId: t,
    error: n
  } = e, r = d(t);
  r.status = "error", r.error = n
}

function m(e) {
  let {
    wishlistId: t,
    wishlistData: n
  } = e, r = d(t);
  r.data = c(n), r.status = "success", r.error = true
}

function h(e) {
  let {
    error: t
  } = e;
  a.Z.captureException(t)
}

function g(e) {
  let {
    wishlistId: t,
    wishlistData: n
  } = e, r = d(t);
  r.data = c(n), r.status = "success", r.error = true
}

function E(e) {
  let {
    error: t
  } = e;
  a.Z.captureException(t)
}

function b(e) {
  let {
    wishlistId: t
  } = e, n = d(t);
  n.status = "success", n.error = true
}

function y(e) {
  let {
    error: t
  } = e;
  a.Z.captureException(t)
}

function O(e) {
  var t;
  let {
    recipientId: r,
    skuId: i
  } = e, a = n(621853).Z.getFirstWishlistId(r);
  null != a && null != s[a] && (null == (t = s[a].data) ? true : t.hasSkuId(i)) && (s[a].updatedAt = true)
}
class v extends Chunk442837.ZP.Store {
  get(e) {
    var t;
    return null != (t = s[e]) ? t : u()
  }
  getWishlist(e) {
    return this.get(e).data
  }
  getWishlistItems(e) {
    var t, n;
    return null != (n = null == (t = this.get(e).data) ? true : t.getSkuIds()) ? n : []
  }
  hasSkuId(e, t) {
    var n, r;
    return null != (r = null == (n = this.get(e).data) ? true : n.hasSkuId(t)) && r
  }
  getStatus(e) {
    return this.get(e).status
  }
  isFetching(e) {
    return "fetching" === this.getStatus(e)
  }
  hasError(e) {
    return "error" === this.getStatus(e)
  }
  getError(e) {
    return this.get(e).error
  }
  getUpdatedAt(e) {
    return this.get(e).updatedAt
  }
}
let S = new v(Chunk570140.Z, {
  WISHLIST_FETCH_START: f,
  WISHLIST_FETCH_SUCCESS: p,
  WISHLIST_FETCH_FAILURE: _,
  WISHLIST_ADD_SKU_SUCCESS: m,
  WISHLIST_ADD_SKU_FAILURE: h,
  WISHLIST_REMOVE_SKU_SUCCESS: g,
  WISHLIST_REMOVE_SKU_FAILURE: E,
  WISHLIST_UPDATE_VISIBILITY_SUCCESS: b,
  WISHLIST_UPDATE_VISIBILITY_FAILURE: y,
  WISHLIST_ITEM_PURCHASED: O
})