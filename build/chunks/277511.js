/** Chunk was on web.js **/
/** chunk id: 277511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk960048 = require("./960048.js"),
  Chunk22494 = require("./22494.js"),
  Chunk981631 = require("./981631.js");
let c = {
  async fetchWishlist(e) {
    i.Z.dispatch({
      type: "WISHLIST_FETCH_START",
      wishlistId: e
    });
    try {
      var t;
      let n = await r.tn.get({
        url: l.ANM.USER_WISHLIST(e),
        rejectWithError: true
      });
      (null == (t = n.body) ? true : t.wishlist_items) == null && o.Z.captureMessage("Wishlist items not found in response");
      let a = s.Z.fromServer(n.body);
      i.Z.dispatch({
        type: "WISHLIST_FETCH_SUCCESS",
        wishlistId: e,
        wishlistData: a
      })
    } catch (t) {
      i.Z.dispatch({
        type: "WISHLIST_FETCH_FAILURE",
        wishlistId: e,
        error: new a.Hx(t)
      }), o.Z.captureException(t)
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