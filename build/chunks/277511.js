/** Chunk was on 93886 **/
/** chunk id: 277511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk232567 = require("./232567.js"),
  Chunk881052 = require("./881052.js"),
  Chunk621853 = require("./621853.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
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
      let n = await r.tn.get({
        url: p.ANM.USER_WISHLIST(e),
        rejectWithError: true
      });
      (null == (t = n.body) ? true : t.wishlist_items) == null && u.Z.captureMessage("Wishlist items not found in response");
      let l = d.Z.fromServer(n.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: l
      })
    } catch (t) {
      i.Z.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: e,
        error: new a.Hx(t)
      }), u.Z.captureException(t)
    }
  },
  async addSkuToWishlist(e, t) {
    let n = null;
    try {
      n = await r.tn.post({
        url: p.ANM.USER_WISHLIST_ITEMS,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      let l = d.Z.fromServer(n.body);
      if (i.Z.dispatch({
          type: "WISHLIST_ADD_SKU_SUCCESS",
          wishlistId: l.id,
          skuId: e,
          wishlistData: l
        }), null != t) try {
        let n = l.getSkuIds();
        c.default.track(p.rMx.WISHLIST_UPDATED, {
          wishlist_id: l.id,
          action_type: "ADD",
          sku_id: e,
          sku_ids: n,
          location_stack: t
        })
      } catch (e) {}
    } catch (t) {
      throw i.Z.dispatch({
        type: "WISHLIST_ADD_SKU_FAILURE",
        skuId: e,
        error: new a.Hx(t)
      }), t
    }
    if (null == n) return;
    let u = s.default.getCurrentUser();
    if (null != u && null == o.Z.getFirstWishlistId(u.id)) try {
      await (0, l.In)(u.id)
    } catch (e) {}
  },
  async removeSkuFromWishlist(e, t, n) {
    try {
      let l = await r.tn.del({
          url: p.ANM.USER_WISHLIST_ITEM(e, t),
          rejectWithError: true
        }),
        a = d.Z.fromServer(l.body);
      if (i.Z.dispatch({
          type: "WISHLIST_REMOVE_SKU_SUCCESS",
          wishlistId: e,
          skuId: t,
          wishlistData: a
        }), null != n) try {
        let e = a.getSkuIds();
        c.default.track(p.rMx.WISHLIST_UPDATED, {
          wishlist_id: a.id,
          action_type: "REMOVE",
          sku_id: t,
          sku_ids: e,
          location_stack: n
        })
      } catch (e) {}
    } catch (n) {
      throw i.Z.dispatch({
        type: "WISHLIST_REMOVE_SKU_FAILURE",
        wishlistId: e,
        skuId: t,
        error: new a.Hx(n)
      }), n
    }
  }
}