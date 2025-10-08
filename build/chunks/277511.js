/** Chunk was on 18539 **/
/** chunk id: 277511, original params: t,e,r (module,exports,require) **/
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
  async fetchWishlist(t, e) {
    i.Z.dispatch({
      type: "WISHLIST_FETCH_START",
      wishlistId: t
    });
    try {
      var r;
      let s = await n.tn.get({
        url: S.ANM.USER_WISHLIST(t),
        rejectWithError: true
      });
      (null == (r = s.body) ? true : r.wishlist_items) == null && c.Z.captureMessage("Wishlist items not found in response");
      let o = d.Z.fromServer(s.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: t,
        wishlistData: o,
        updatedAt: e
      })
    } catch (e) {
      i.Z.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: t,
        error: new o.Hx(e)
      }), c.Z.captureException(e)
    }
  },
  async addSkuToWishlist(t, e) {
    let r = null;
    try {
      r = await n.tn.post({
        url: S.ANM.USER_WISHLIST_ITEMS,
        body: {
          sku_id: t
        },
        rejectWithError: true
      });
      let s = d.Z.fromServer(r.body);
      if (i.Z.dispatch({
          type: "WISHLIST_ADD_SKU_SUCCESS",
          wishlistId: s.id,
          skuId: t,
          wishlistData: s
        }), null != e) try {
        let r = s.getSkuIds();
        l.default.track(S.rMx.WISHLIST_UPDATED, {
          wishlist_id: s.id,
          action_type: "ADD",
          sku_id: t,
          sku_ids: r,
          location_stack: e
        })
      } catch (t) {}
    } catch (e) {
      throw i.Z.dispatch({
        type: "WISHLIST_ADD_SKU_FAILURE",
        skuId: t,
        error: new o.Hx(e)
      }), e
    }
    if (null == r) return;
    let c = a.default.getCurrentUser();
    if (null != c && null == u.Z.getFirstWishlistId(c.id)) try {
      await (0, s.In)(c.id)
    } catch (t) {}
  },
  async removeSkuFromWishlist(t, e, r) {
    try {
      let s = await n.tn.del({
          url: S.ANM.USER_WISHLIST_ITEM(t, e),
          rejectWithError: true
        }),
        o = d.Z.fromServer(s.body);
      if (i.Z.dispatch({
          type: "WISHLIST_REMOVE_SKU_SUCCESS",
          wishlistId: t,
          skuId: e,
          wishlistData: o
        }), null != r) try {
        let t = o.getSkuIds();
        l.default.track(S.rMx.WISHLIST_UPDATED, {
          wishlist_id: o.id,
          action_type: "REMOVE",
          sku_id: e,
          sku_ids: t,
          location_stack: r
        })
      } catch (t) {}
    } catch (r) {
      throw i.Z.dispatch({
        type: "WISHLIST_REMOVE_SKU_FAILURE",
        wishlistId: t,
        skuId: e,
        error: new o.Hx(r)
      }), r
    }
  },
  async updateWishlistVisibility(t, e) {
    let r = a.default.getCurrentUser();
    if (null != r) try {
      await n.tn.patch({
        url: S.ANM.USER_WISHLIST_PATCH(t),
        body: {
          visibility: e
        },
        rejectWithError: true
      }), i.Z.dispatch({
        type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS",
        wishlistId: t,
        visibility: e
      });
      try {
        await (0, s.In)(r.id)
      } catch (t) {}
    } catch (e) {
      throw i.Z.dispatch({
        type: "WISHLIST_UPDATE_VISIBILITY_FAILURE",
        wishlistId: t,
        error: new o.Hx(e)
      }), e
    }
  }
}