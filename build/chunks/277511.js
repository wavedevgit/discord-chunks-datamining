/** Chunk was on 18539 **/
/** chunk id: 277511, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk232567 = require("./232567.js"),
  Chunk881052 = require("./881052.js"),
  Chunk621853 = require("./621853.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk22494 = require("./22494.js"),
  Chunk981631 = require("./981631.js");
let f = {
  async fetchWishlist(e) {
    i.Z.dispatch({
      type: "WISHLIST_FETCH_START",
      wishlistId: e
    });
    try {
      var t;
      let r = await n.tn.get({
        url: d.ANM.USER_WISHLIST(e),
        rejectWithError: true
      });
      (null == (t = r.body) ? true : t.wishlist_items) == null && c.Z.captureMessage("Wishlist items not found in response");
      let o = l.Z.fromServer(r.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: o
      })
    } catch (t) {
      i.Z.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: e,
        error: new s.Hx(t)
      }), c.Z.captureException(t)
    }
  },
  async addSkuToWishlist(e) {
    let t = null;
    try {
      t = await n.tn.post({
        url: d.ANM.USER_WISHLIST_ITEMS,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      let r = l.Z.fromServer(t.body);
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
    if (null == t) return;
    let r = a.default.getCurrentUser();
    if (null != r && null == u.Z.getFirstWishlistId(r.id)) try {
      await (0, o.In)(r.id)
    } catch (e) {}
  },
  async removeSkuFromWishlist(e, t) {
    try {
      let r = await n.tn.del({
          url: d.ANM.USER_WISHLIST_ITEM(e, t),
          rejectWithError: true
        }),
        o = l.Z.fromServer(r.body);
      i.Z.dispatch({
        type: "WISHLIST_REMOVE_SKU_SUCCESS",
        wishlistId: e,
        skuId: t,
        wishlistData: o
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