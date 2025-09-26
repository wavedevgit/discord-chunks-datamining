/** Chunk was on 84957 **/
/** chunk id: 277511, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk960048 = require("./960048.js"),
  Chunk22494 = require("./22494.js"),
  Chunk981631 = require("./981631.js");
let u = {
  async fetchWishlist(e) {
    i.Z.dispatch({
      type: "WISHLIST_FETCH_START",
      wishlistId: e
    });
    try {
      var t;
      let r = await n.tn.get({
        url: a.ANM.USER_WISHLIST(e),
        rejectWithError: true
      });
      (null == (t = r.body) ? true : t.wishlist_items) == null && o.Z.captureMessage("Wishlist items not found in response");
      let s = l.Z.fromServer(r.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: s
      })
    } catch (t) {
      i.Z.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: e,
        error: new s.Hx(t)
      }), o.Z.captureException(t)
    }
  },
  async addSkuToWishlist(e) {
    try {
      let t = await n.tn.post({
          url: a.ANM.USER_WISHLIST_ITEMS,
          body: {
            sku_id: e
          },
          rejectWithError: true
        }),
        r = l.Z.fromServer(t.body);
      i.Z.dispatch({
        type: "WISHLIST_ADD_SKU_SUCCESS",
        wishlistId: r.id,
        skuId: e,
        wishlistData: r
      })
    } catch (t) {
      throw i.Z.dispatch({
        type: "WISHLIST_ADD_SKU_FAILURE",
        skuId: e,
        error: new s.Hx(t)
      }), t
    }
  },
  async removeSkuFromWishlist(e, t) {
    try {
      let r = await n.tn.del({
          url: a.ANM.USER_WISHLIST_ITEM(e, t),
          rejectWithError: true
        }),
        s = l.Z.fromServer(r.body);
      i.Z.dispatch({
        type: "WISHLIST_REMOVE_SKU_SUCCESS",
        wishlistId: e,
        skuId: t,
        wishlistData: s
      })
    } catch (r) {
      throw i.Z.dispatch({
        type: "WISHLIST_REMOVE_SKU_FAILURE",
        wishlistId: e,
        skuId: t,
        error: new s.Hx(r)
      }), r
    }
  }
}