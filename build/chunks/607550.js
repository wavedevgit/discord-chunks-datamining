/** Chunk was on 84957 **/
/** chunk id: 607550, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk960048 = require("./960048.js");
let o = {},
  l = () => ({
    data: null,
    status: "not_loaded"
  });

function a(e) {
  var t;
  return null != (t = o[e]) ? t : o[e] = l()
}
class u extends Chunk442837.ZP.Store {
  get(e) {
    var t;
    return null != (t = o[e]) ? t : l()
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
let c = new u(Chunk570140.Z, {
  WISHLIST_FETCH_START: function(e) {
    let {
      wishlistId: t
    } = e, r = a(t);
    r.status = "fetching", r.error = true
  },
  WISHLIST_FETCH_SUCCESS: function(e) {
    let {
      wishlistId: t,
      wishlistData: r
    } = e, n = a(t);
    n.data = r, n.status = "success", n.error = true
  },
  WISHLIST_FETCH_FAILURE: function(e) {
    let {
      wishlistId: t,
      error: r
    } = e, n = a(t);
    n.status = "error", n.error = r
  },
  WISHLIST_ADD_SKU_SUCCESS: function(e) {
    let {
      wishlistId: t,
      wishlistData: r
    } = e, n = a(t);
    n.data = r, n.status = "success", n.error = true
  },
  WISHLIST_ADD_SKU_FAILURE: function(e) {
    let {
      error: t
    } = e;
    s.Z.captureException(t)
  },
  WISHLIST_REMOVE_SKU_SUCCESS: function(e) {
    let {
      wishlistId: t,
      wishlistData: r
    } = e, n = a(t);
    n.data = r, n.status = "success", n.error = true
  },
  WISHLIST_REMOVE_SKU_FAILURE: function(e) {
    let {
      error: t
    } = e;
    s.Z.captureException(t)
  }
})