/** Chunk was on web.js **/
/** chunk id: 107563, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk728458 = require("./728458.js");
let o = {},
  s = () => ({
    data: null,
    status: "not_loaded"
  });

function l(e) {
  var t, n, r;
  return null != (r = (t = o)[n = e]) ? r : t[n] = s()
}

function c(e) {
  let {
    wishlistId: t
  } = e, n = l(t);
  n.status = "fetching", n.error = true
}

function u(e) {
  let {
    wishlistId: t,
    wishlistData: n,
    updatedAt: r
  } = e, i = l(t);
  i.data = n, i.status = "success", i.error = true, i.updatedAt = r
}

function d(e) {
  let {
    wishlistId: t,
    error: n
  } = e, r = l(t);
  r.status = "error", r.error = n
}

function f(e) {
  let {
    wishlistId: t,
    wishlistData: n
  } = e, r = l(t);
  r.data = n, r.status = "success", r.error = true
}

function p(e) {
  let {
    error: t
  } = e;
  a.A.captureException(t)
}

function _(e) {
  let {
    wishlistId: t,
    wishlistData: n
  } = e, r = l(t);
  r.data = n, r.status = "success", r.error = true
}

function h(e) {
  let {
    error: t
  } = e;
  a.A.captureException(t)
}

function m(e) {
  let {
    wishlistId: t
  } = e, n = l(t);
  n.status = "success", n.error = true
}

function g(e) {
  let {
    error: t
  } = e;
  a.A.captureException(t)
}

function E(e) {
  let {
    wishlistId: t,
    newWishlistData: n
  } = e;
  l(t).data = n
}

function y(e) {
  let {
    wishlistId: t,
    wishlistData: n
  } = e, r = l(t);
  r.data = n, r.status = "success", r.error = true
}

function b(e) {
  let {
    wishlistId: t,
    error: n
  } = e;
  l(t).updatedAt = true, a.A.captureException(n)
}

function O(e) {
  var t;
  let {
    recipientId: r,
    skuId: i
  } = e, a = n(622543).A.getFirstWishlistId(r);
  null != a && null != o[a] && (null == (t = o[a].data) ? true : t.hasSkuId(i)) && (o[a].updatedAt = true)
}
class v extends Chunk311907.Ay.Store {
  get(e) {
    var t;
    return null != (t = o[e]) ? t : s()
  }
  getWishlist(e) {
    return this.get(e).data
  }
  getWishlistItems(e) {
    var t, n;
    return null != (t = null == (n = this.get(e).data) ? true : n.getSkuIds()) ? t : []
  }
  hasSkuId(e, t) {
    var n, r;
    return null != (n = null == (r = this.get(e).data) ? true : r.hasSkuId(t)) && n
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
let A = new v(Chunk73153.h, {
  WISHLIST_FETCH_START: c,
  WISHLIST_FETCH_SUCCESS: u,
  WISHLIST_FETCH_FAILURE: d,
  WISHLIST_ADD_SKU_SUCCESS: f,
  WISHLIST_ADD_SKU_FAILURE: p,
  WISHLIST_REMOVE_SKU_SUCCESS: _,
  WISHLIST_REMOVE_SKU_FAILURE: h,
  WISHLIST_UPDATE_VISIBILITY_SUCCESS: m,
  WISHLIST_UPDATE_VISIBILITY_FAILURE: g,
  WISHLIST_REORDER_START: E,
  WISHLIST_REORDER_SUCCESS: y,
  WISHLIST_REORDER_FAILURE: b,
  WISHLIST_ITEM_PURCHASED: O
})