/** Chunk was on web.js **/
/** chunk id: 277511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
let p = {
  async fetchWishlist(e, t) {
    i.Z.dispatch({
      type: "WISHLIST_FETCH_START",
      wishlistId: e
    });
    try {
      var n;
      let a = await r.tn.get({
        url: f.ANM.USER_WISHLIST(e),
        rejectWithError: true
      });
      (null == (n = a.body) ? true : n.wishlist_items) == null && u.Z.captureMessage("Wishlist items not found in response");
      let o = d.Z.fromServer(a.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: o,
        updatedAt: t
      })
    } catch (t) {
      i.Z.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: e,
        error: new o.Hx(t)
      }), u.Z.captureException(t)
    }
  },
  async addSkuToWishlist(e, t) {
    let n = null;
    try {
      n = await r.tn.post({
        url: f.ANM.USER_WISHLIST_ITEMS,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      let a = d.Z.fromServer(n.body);
      if (i.Z.dispatch({
          type: "WISHLIST_ADD_SKU_SUCCESS",
          wishlistId: a.id,
          skuId: e,
          wishlistData: a
        }), null != t) try {
        let n = a.getSkuIds();
        c.default.track(f.rMx.WISHLIST_UPDATED, {
          wishlist_id: a.id,
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
        error: new o.Hx(t)
      }), t
    }
    if (null == n) return;
    let u = l.default.getCurrentUser();
    if (null != u && null == s.Z.getFirstWishlistId(u.id)) try {
      await (0, a.In)(u.id)
    } catch (e) {}
  },
  async removeSkuFromWishlist(e, t, n) {
    try {
      let a = await r.tn.del({
          url: f.ANM.USER_WISHLIST_ITEM(e, t),
          rejectWithError: true
        }),
        o = d.Z.fromServer(a.body);
      if (i.Z.dispatch({
          type: "WISHLIST_REMOVE_SKU_SUCCESS",
          wishlistId: e,
          skuId: t,
          wishlistData: o
        }), null != n) try {
        let e = o.getSkuIds();
        c.default.track(f.rMx.WISHLIST_UPDATED, {
          wishlist_id: o.id,
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
        error: new o.Hx(n)
      }), n
    }
  },
  async updateWishlistVisibility(e, t) {
    let n = l.default.getCurrentUser();
    if (null != n) try {
      await r.tn.patch({
        url: f.ANM.USER_WISHLIST_PATCH(e),
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
        await (0, a.In)(n.id)
      } catch (e) {}
    } catch (t) {
      throw i.Z.dispatch({
        type: "WISHLIST_UPDATE_VISIBILITY_FAILURE",
        wishlistId: e,
        error: new o.Hx(t)
      }), t
    }
  },
  async reorderWishlistItem(e, t, n) {
    let {
      previousSkuId: a,
      nextSkuId: s,
      newWishlistData: l,
      analyticsLocations: p
    } = n;
    i.Z.dispatch({
      type: "WISHLIST_REORDER_START",
      wishlistId: e,
      skuId: t,
      previousSkuId: a,
      nextSkuId: s,
      newWishlistData: l
    });
    try {
      let n = await r.tn.patch({
          url: f.ANM.USER_WISHLIST_ITEM(e, t),
          body: {
            previous_sku_id: a,
            next_sku_id: s
          },
          rejectWithError: true
        }),
        o = d.Z.fromServer(n.body);
      if (i.Z.dispatch({
          type: "WISHLIST_REORDER_SUCCESS",
          wishlistId: e,
          wishlistData: o
        }), null != p) try {
        let n = o.getSkuIds();
        c.default.track(f.rMx.WISHLIST_UPDATED, {
          wishlist_id: e,
          action_type: "REORDER",
          sku_id: t,
          sku_ids: n,
          location_stack: p
        })
      } catch (e) {}
    } catch (n) {
      i.Z.dispatch({
        type: "WISHLIST_REORDER_FAILURE",
        wishlistId: e,
        skuId: t,
        error: new o.Hx(n)
      }), u.Z.captureException(n)
    }
  }
}