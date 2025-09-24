/** Chunk was on 18539 **/
/** chunk id: 277511, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk960048 = require("./960048.js"),
  Chunk22494 = require("./22494.js"),
  Chunk981631 = require("./981631.js");
let l = {
  async fetchWishlist(e) {
    i.Z.dispatch({
      type: "WISHLIST_FETCH_START",
      wishlistId: e
    });
    try {
      var t;
      let r = await n.tn.get({
        url: c.ANM.USER_WISHLIST(e),
        rejectWithError: true
      });
      (null == (t = r.body) ? true : t.wishlist_items) == null && s.Z.captureMessage("Wishlist items not found in response");
      let o = u.Z.fromServer(r.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: o
      })
    } catch (t) {
      i.Z.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: e,
        error: new o.Hx(t)
      }), s.Z.captureException(t)
    }
  },
  addSkuToWishlist(e, t) {
    i.Z.dispatch({
      type: "WISHLIST_ADD_SKU",
      wishlistId: e,
      skuId: t
    })
  },
  removeSkuFromWishlist(e, t) {
    i.Z.dispatch({
      type: "WISHLIST_REMOVE_SKU",
      wishlistId: e,
      skuId: t
    })
  }
}