/** Chunk was on web.js **/
/** chunk id: 277511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk232567 = require("./232567.js"),
  Chunk881052 = require("./881052.js"),
  Chunk621853 = require("./621853.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk602733 = require("./602733.js"),
  Chunk22494 = require("./22494.js"),
  Chunk981631 = require("./981631.js");
let _ = {
  async fetchWishlist(e, t, n) {
    i.Z.dispatch({
      type: "WISHLIST_FETCH_START",
      wishlistId: e
    });
    try {
      var o;
      let a = await r.tn.get({
        url: p.ANM.USER_WISHLIST(e),
        query: {
          source: null != n ? n : d.Yw.USER_PROFILE
        },
        rejectWithError: true
      });
      (null == (o = a.body) ? true : o.wishlist_items) == null && u.Z.captureMessage("Wishlist items not found in response");
      let s = f.Z.fromServer(a.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: s,
        updatedAt: t
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
      let o = f.Z.fromServer(n.body);
      if (i.Z.dispatch({
          type: "WISHLIST_ADD_SKU_SUCCESS",
          wishlistId: o.id,
          skuId: e,
          wishlistData: o
        }), null != t) try {
        let n = o.getSkuIds();
        c.default.track(p.rMx.WISHLIST_UPDATED, {
          wishlist_id: o.id,
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
    let u = l.default.getCurrentUser();
    if (null != u && null == s.Z.getFirstWishlistId(u.id)) try {
      await (0, o.In)(u.id)
    } catch (e) {}
  },
  async removeSkuFromWishlist(e, t, n) {
    try {
      let o = await r.tn.del({
          url: p.ANM.USER_WISHLIST_ITEM(e, t),
          rejectWithError: true
        }),
        a = f.Z.fromServer(o.body);
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
  },
  async updateWishlistVisibility(e, t) {
    let n = l.default.getCurrentUser();
    if (null != n) try {
      await r.tn.patch({
        url: p.ANM.USER_WISHLIST_PATCH(e),
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
        await (0, o.In)(n.id)
      } catch (e) {}
    } catch (t) {
      throw i.Z.dispatch({
        type: "WISHLIST_UPDATE_VISIBILITY_FAILURE",
        wishlistId: e,
        error: new a.Hx(t)
      }), t
    }
  },
  async reorderWishlistItem(e, t, n) {
    let {
      previousSkuId: o,
      nextSkuId: s,
      newWishlistData: l,
      analyticsLocations: d
    } = n;
    i.Z.dispatch({
      type: "WISHLIST_REORDER_START",
      wishlistId: e,
      skuId: t,
      previousSkuId: o,
      nextSkuId: s,
      newWishlistData: l
    });
    try {
      let n = await r.tn.patch({
          url: p.ANM.USER_WISHLIST_ITEM(e, t),
          body: {
            previous_sku_id: o,
            next_sku_id: s
          },
          rejectWithError: true
        }),
        a = f.Z.fromServer(n.body);
      if (i.Z.dispatch({
          type: "WISHLIST_REORDER_SUCCESS",
          wishlistId: e,
          wishlistData: a
        }), null != d) try {
        let n = a.getSkuIds();
        c.default.track(p.rMx.WISHLIST_UPDATED, {
          wishlist_id: e,
          action_type: "REORDER",
          sku_id: t,
          sku_ids: n,
          location_stack: d
        })
      } catch (e) {}
    } catch (n) {
      i.Z.dispatch({
        type: "WISHLIST_REORDER_FAILURE",
        wishlistId: e,
        skuId: t,
        error: new a.Hx(n)
      }), u.Z.captureException(n)
    }
  }
}