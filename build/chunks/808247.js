/** Chunk was on web.js **/
/** chunk id: 808247, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk803306 = require("./803306.js"),
  Chunk198982 = require("./198982.js"),
  Chunk622543 = require("./622543.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk728458 = require("./728458.js"),
  Chunk594832 = require("./594832.js"),
  Chunk855052 = require("./855052.js"),
  Chunk652215 = require("./652215.js");
let _ = {
  async fetchWishlist(e, t, n) {
    i.h.dispatch({
      type: "WISHLIST_FETCH_START",
      wishlistId: e
    });
    try {
      var a;
      let o = await r.Bo.get({
        url: p.Rsh.USER_WISHLIST(e),
        query: {
          source: null != n ? n : d.B5.USER_PROFILE
        },
        rejectWithError: true
      });
      (null == (a = o.body) ? true : a.wishlist_items) == null && u.A.captureMessage("Wishlist items not found in response");
      let s = f.A.fromServer(o.body);
      i.h.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: s,
        updatedAt: t
      })
    } catch (t) {
      i.h.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: e,
        error: new o.LG(t)
      }), u.A.captureException(t)
    }
  },
  async addSkuToWishlist(e, t) {
    let n = null;
    try {
      n = await r.Bo.post({
        url: p.Rsh.USER_WISHLIST_ITEMS,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      let a = f.A.fromServer(n.body);
      if (i.h.dispatch({
          type: "WISHLIST_ADD_SKU_SUCCESS",
          wishlistId: a.id,
          skuId: e,
          wishlistData: a
        }), null != t) try {
        let n = a.getSkuIds();
        c.default.track(p.HAw.WISHLIST_UPDATED, {
          wishlist_id: a.id,
          action_type: "ADD",
          sku_id: e,
          sku_ids: n,
          location_stack: t
        })
      } catch (e) {}
    } catch (t) {
      throw i.h.dispatch({
        type: "WISHLIST_ADD_SKU_FAILURE",
        skuId: e,
        error: new o.LG(t)
      }), t
    }
    if (null == n) return;
    let u = l.default.getCurrentUser();
    if (null != u && null == s.A.getFirstWishlistId(u.id)) try {
      await (0, a.eO)(u.id)
    } catch (e) {}
  },
  async removeSkuFromWishlist(e, t, n) {
    try {
      let a = await r.Bo.del({
          url: p.Rsh.USER_WISHLIST_ITEM(e, t),
          rejectWithError: true
        }),
        o = f.A.fromServer(a.body);
      if (i.h.dispatch({
          type: "WISHLIST_REMOVE_SKU_SUCCESS",
          wishlistId: e,
          skuId: t,
          wishlistData: o
        }), null != n) try {
        let e = o.getSkuIds();
        c.default.track(p.HAw.WISHLIST_UPDATED, {
          wishlist_id: o.id,
          action_type: "REMOVE",
          sku_id: t,
          sku_ids: e,
          location_stack: n
        })
      } catch (e) {}
    } catch (n) {
      throw i.h.dispatch({
        type: "WISHLIST_REMOVE_SKU_FAILURE",
        wishlistId: e,
        skuId: t,
        error: new o.LG(n)
      }), n
    }
  },
  async updateWishlistVisibility(e, t) {
    let n = l.default.getCurrentUser();
    if (null != n) try {
      await r.Bo.patch({
        url: p.Rsh.USER_WISHLIST_PATCH(e),
        body: {
          visibility: t
        },
        rejectWithError: true
      }), i.h.dispatch({
        type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS",
        wishlistId: e,
        visibility: t
      });
      try {
        await (0, a.eO)(n.id)
      } catch (e) {}
    } catch (t) {
      throw i.h.dispatch({
        type: "WISHLIST_UPDATE_VISIBILITY_FAILURE",
        wishlistId: e,
        error: new o.LG(t)
      }), t
    }
  },
  async reorderWishlistItem(e, t, n) {
    let {
      previousSkuId: a,
      nextSkuId: s,
      newWishlistData: l,
      analyticsLocations: d
    } = n;
    i.h.dispatch({
      type: "WISHLIST_REORDER_START",
      wishlistId: e,
      skuId: t,
      previousSkuId: a,
      nextSkuId: s,
      newWishlistData: l
    });
    try {
      let n = await r.Bo.patch({
          url: p.Rsh.USER_WISHLIST_ITEM(e, t),
          body: {
            previous_sku_id: a,
            next_sku_id: s
          },
          rejectWithError: true
        }),
        o = f.A.fromServer(n.body);
      if (i.h.dispatch({
          type: "WISHLIST_REORDER_SUCCESS",
          wishlistId: e,
          wishlistData: o
        }), null != d) try {
        let n = o.getSkuIds();
        c.default.track(p.HAw.WISHLIST_UPDATED, {
          wishlist_id: e,
          action_type: "REORDER",
          sku_id: t,
          sku_ids: n,
          location_stack: d
        })
      } catch (e) {}
    } catch (n) {
      i.h.dispatch({
        type: "WISHLIST_REORDER_FAILURE",
        wishlistId: e,
        skuId: t,
        error: new o.LG(n)
      }), u.A.captureException(n)
    }
  }
}