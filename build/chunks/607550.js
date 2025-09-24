/** Chunk was on 23254 **/
/** chunk id: 607550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let c = {},
  i = {
    data: null,
    status: "not_loaded"
  };

function a(e) {
  var t;
  return null != (t = c[e]) ? t : c[e] = i
}
class l extends Chunk442837.ZP.Store {
  get(e) {
    var t;
    return null != (t = c[e]) ? t : i
  }
  getWishlist(e) {
    return this.get(e).data
  }
  getWishlistItems(e) {
    var t, n;
    return null != (n = null == (t = this.get(e).data) ? true : t.getSkuIds()) ? n : []
  }
  hasSkuId(e, t) {
    var n, o;
    return null != (o = null == (n = this.get(e).data) ? true : n.hasSkuId(t)) && o
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
let s = new l(Chunk570140.Z, {
  WISHLIST_FETCH_START: function(e) {
    let {
      wishlistId: t
    } = e, n = a(t);
    n.status = "fetching", n.error = true
  },
  WISHLIST_FETCH_SUCCESS: function(e) {
    let {
      wishlistId: t,
      wishlistData: n
    } = e, o = a(t);
    o.data = n, o.status = "success", o.error = true
  },
  WISHLIST_FETCH_FAILURE: function(e) {
    let {
      wishlistId: t,
      error: n
    } = e, o = a(t);
    o.status = "error", o.error = n
  },
  WISHLIST_ADD_SKU: function(e) {
    let {} = e
  },
  WISHLIST_REMOVE_SKU: function(e) {
    let {} = e
  }
})