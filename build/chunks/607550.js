/** Chunk was on web.js **/
/** chunk id: 607550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = {},
  o = {
    data: null,
    status: "not_loaded"
  };

function s(e) {
  var t, n, r;
  return null != (r = (t = a)[n = e]) ? r : t[n] = o
}

function l(e) {
  let {
    wishlistId: t
  } = e, n = s(t);
  n.status = "fetching", n.error = true
}

function c(e) {
  let {
    wishlistId: t,
    wishlistData: n
  } = e, r = s(t);
  r.data = n, r.status = "success", r.error = true
}

function u(e) {
  let {
    wishlistId: t,
    error: n
  } = e, r = s(t);
  r.status = "error", r.error = n
}

function d(e) {
  let {} = e
}

function f(e) {
  let {} = e
}
class _ extends Chunk442837.ZP.Store {
  get(e) {
    var t;
    return null != (t = a[e]) ? t : o
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
}
let p = new _(Chunk570140.Z, {
  WISHLIST_FETCH_START: l,
  WISHLIST_FETCH_SUCCESS: c,
  WISHLIST_FETCH_FAILURE: u,
  WISHLIST_ADD_SKU: d,
  WISHLIST_REMOVE_SKU: f
})