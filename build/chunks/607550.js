/** Chunk was on 18539 **/
/** chunk id: 607550, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk960048 = require("./960048.js");
let o = {},
  u = () => ({
    data: null,
    status: "not_loaded"
  });

function a(t) {
  var e;
  return null != (e = o[t]) ? e : o[t] = u()
}
class l extends Chunk442837.ZP.Store {
  get(t) {
    var e;
    return null != (e = o[t]) ? e : u()
  }
  getWishlist(t) {
    return this.get(t).data
  }
  getWishlistItems(t) {
    var e, r;
    return null != (r = null == (e = this.get(t).data) ? true : e.getSkuIds()) ? r : []
  }
  hasSkuId(t, e) {
    var r, n;
    return null != (n = null == (r = this.get(t).data) ? true : r.hasSkuId(e)) && n
  }
  getStatus(t) {
    return this.get(t).status
  }
  isFetching(t) {
    return "fetching" === this.getStatus(t)
  }
  hasError(t) {
    return "error" === this.getStatus(t)
  }
  getError(t) {
    return this.get(t).error
  }
  getUpdatedAt(t) {
    return this.get(t).updatedAt
  }
}
let c = new l(Chunk570140.Z, {
  WISHLIST_FETCH_START: function(t) {
    let {
      wishlistId: e
    } = t, r = a(e);
    r.status = "fetching", r.error = true
  },
  WISHLIST_FETCH_SUCCESS: function(t) {
    let {
      wishlistId: e,
      wishlistData: r,
      updatedAt: n
    } = t, i = a(e);
    i.data = r, i.status = "success", i.error = true, i.updatedAt = n
  },
  WISHLIST_FETCH_FAILURE: function(t) {
    let {
      wishlistId: e,
      error: r
    } = t, n = a(e);
    n.status = "error", n.error = r
  },
  WISHLIST_ADD_SKU_SUCCESS: function(t) {
    let {
      wishlistId: e,
      wishlistData: r
    } = t, n = a(e);
    n.data = r, n.status = "success", n.error = true
  },
  WISHLIST_ADD_SKU_FAILURE: function(t) {
    let {
      error: e
    } = t;
    s.Z.captureException(e)
  },
  WISHLIST_REMOVE_SKU_SUCCESS: function(t) {
    let {
      wishlistId: e,
      wishlistData: r
    } = t, n = a(e);
    n.data = r, n.status = "success", n.error = true
  },
  WISHLIST_REMOVE_SKU_FAILURE: function(t) {
    let {
      error: e
    } = t;
    s.Z.captureException(e)
  },
  WISHLIST_UPDATE_VISIBILITY_SUCCESS: function(t) {
    let {
      wishlistId: e
    } = t, r = a(e);
    r.status = "success", r.error = true
  },
  WISHLIST_UPDATE_VISIBILITY_FAILURE: function(t) {
    let {
      error: e
    } = t;
    s.Z.captureException(e)
  }
})