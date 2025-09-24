/** Chunk was on 18539 **/
/** chunk id: 607550, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {},
  s = {
    data: null,
    status: "not_loaded"
  };

function u(e) {
  var t;
  return null != (t = o[e]) ? t : o[e] = s
}
class c extends Chunk442837.ZP.Store {
  get(e) {
    var t;
    return null != (t = o[e]) ? t : s
  }
  getWishlist(e) {
    return this.get(e).data
  }
  getWishlistItems(e) {
    var t, r;
    return null != (r = null == (t = this.get(e).data) ? true : t.getSkuIds()) ? r : []
  }
  hasSkuId(e, t) {
    var r, n;
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
}
let l = new c(Chunk570140.Z, {
  WISHLIST_FETCH_START: function(e) {
    let {
      wishlistId: t
    } = e, r = u(t);
    r.status = "fetching", r.error = true
  },
  WISHLIST_FETCH_SUCCESS: function(e) {
    let {
      wishlistId: t,
      wishlistData: r
    } = e, n = u(t);
    n.data = r, n.status = "success", n.error = true
  },
  WISHLIST_FETCH_FAILURE: function(e) {
    let {
      wishlistId: t,
      error: r
    } = e, n = u(t);
    n.status = "error", n.error = r
  },
  WISHLIST_ADD_SKU: function(e) {
    let {} = e
  },
  WISHLIST_REMOVE_SKU: function(e) {
    let {} = e
  }
})