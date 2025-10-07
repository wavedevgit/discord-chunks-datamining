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
      let r = await n.tn.get({
        url: S.ANM.USER_WISHLIST(e),
        rejectWithError: true
      });
      (null == (t = r.body) ? true : t.wishlist_items) == null && l.Z.captureMessage("Wishlist items not found in response");
      let s = d.Z.fromServer(r.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: s
      })
    } catch (t) {
      i.Z.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: e,
        error: new o.Hx(t)
      }), l.Z.captureException(t)
    }
  },
  async addSkuToWishlist(e, t) {
    let r = null;
    try {
      r = await n.tn.post({
        url: S.ANM.USER_WISHLIST_ITEMS,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      let s = d.Z.fromServer(r.body);
      if (i.Z.dispatch({
          type: "WISHLIST_ADD_SKU_SUCCESS",
          wishlistId: s.id,
          skuId: e,
          wishlistData: s
        }), null != t) try {
        let r = s.getSkuIds();
        a.default.track(S.rMx.WISHLIST_UPDATED, {
          wishlist_id: s.id,
          action_type: "ADD",
          sku_id: e,
          sku_ids: r,
          location_stack: t
        })
      } catch (e) {}
    } catch (t) {
      throw i.Z.dispatch({
        type: "WISHLIST_ADD_SKU_FAILURE",
        skuId: e,
        error: new o.Hx(t)
      }), t
    }
    if (null == r) return;
    let l = c.default.getCurrentUser();
    if (null != l && null == u.Z.getFirstWishlistId(l.id)) try {
      await (0, s.In)(l.id)
    } catch (e) {}
  },
  async removeSkuFromWishlist(e, t, r) {
    try {
      let s = await n.tn.del({
          url: S.ANM.USER_WISHLIST_ITEM(e, t),
          rejectWithError: true
        }),
        o = d.Z.fromServer(s.body);
      if (i.Z.dispatch({
          type: "WISHLIST_REMOVE_SKU_SUCCESS",
          wishlistId: e,
          skuId: t,
          wishlistData: o
        }), null != r) try {
        let e = o.getSkuIds();
        a.default.track(S.rMx.WISHLIST_UPDATED, {
          wishlist_id: o.id,
          action_type: "REMOVE",
          sku_id: t,
          sku_ids: e,
          location_stack: r
        })
      } catch (e) {}
    } catch (r) {
      throw i.Z.dispatch({
        type: "WISHLIST_REMOVE_SKU_FAILURE",
        wishlistId: e,
        skuId: t,
        error: new o.Hx(r)
      }), r
    }
  },
  async updateWishlistVisibility(e, t) {
    let r = c.default.getCurrentUser();
    if (null != r) try {
      await n.tn.patch({
        url: S.ANM.USER_WISHLIST_PATCH(e),
        body: {
          visibility: t
        },
        rejectWithError: true
      }), i.Z.dispatch({
        type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS",
        wishlistId: e,
        visibility: t
      });
      try {
        await (0, s.In)(r.id)
      } catch (e) {}
    } catch (t) {
      throw i.Z.dispatch({
        type: "WISHLIST_UPDATE_VISIBILITY_FAILURE",
        wishlistId: e,
        error: new o.Hx(t)
      }), t
    }
  }
}