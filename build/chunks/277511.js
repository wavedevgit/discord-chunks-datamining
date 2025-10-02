/** Chunk was on 88614 **/
/** chunk id: 277511, original params: e,t,r (module,exports,require) **/
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
  Chunk22494 = require("./22494.js"),
  Chunk981631 = require("./981631.js");
let _ = {
  async fetchWishlist(e) {
    i.Z.dispatch({
      type: "WISHLIST_FETCH_START",
      wishlistId: e
    });
    try {
      var t;
      let r = await n.tn.get({
        url: p.ANM.USER_WISHLIST(e),
        rejectWithError: true
      });
      (null == (t = r.body) ? true : t.wishlist_items) == null && d.Z.captureMessage("Wishlist items not found in response");
      let a = u.Z.fromServer(r.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: a
      })
    } catch (t) {
      i.Z.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: e,
        error: new l.Hx(t)
      }), d.Z.captureException(t)
    }
  },
  async addSkuToWishlist(e, t) {
    let r = null;
    try {
      r = await n.tn.post({
        url: p.ANM.USER_WISHLIST_ITEMS,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      let a = u.Z.fromServer(r.body);
      if (i.Z.dispatch({
          type: "WISHLIST_ADD_SKU_SUCCESS",
          wishlistId: a.id,
          skuId: e,
          wishlistData: a
        }), null != t) try {
        let r = a.getSkuIds();
        c.default.track(p.rMx.WISHLIST_UPDATED, {
          wishlist_id: a.id,
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
        error: new l.Hx(t)
      }), t
    }
    if (null == r) return;
    let d = s.default.getCurrentUser();
    if (null != d && null == o.Z.getFirstWishlistId(d.id)) try {
      await (0, a.In)(d.id)
    } catch (e) {}
  },
  async removeSkuFromWishlist(e, t, r) {
    try {
      let a = await n.tn.del({
          url: p.ANM.USER_WISHLIST_ITEM(e, t),
          rejectWithError: true
        }),
        l = u.Z.fromServer(a.body);
      if (i.Z.dispatch({
          type: "WISHLIST_REMOVE_SKU_SUCCESS",
          wishlistId: e,
          skuId: t,
          wishlistData: l
        }), null != r) try {
        let e = l.getSkuIds();
        c.default.track(p.rMx.WISHLIST_UPDATED, {
          wishlist_id: l.id,
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
        error: new l.Hx(r)
      }), r
    }
  }
}