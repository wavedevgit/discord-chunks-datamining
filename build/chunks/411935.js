/** Chunk was on web.js **/
/** chunk id: 411935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YL: () => d,
  m0: () => p,
  y: () => f
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk164670 = require("./164670.js"),
  Chunk210218 = require("./210218.js"),
  Chunk981631 = require("./981631.js");
let c = 30 * Chunk70956.Z.Millis.SECOND,
  u = 30 * Chunk70956.Z.Millis.MINUTE;
async function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = s.Z.getStorefrontData(e),
    o = (null == n ? true : n.state) === "loading",
    d = (null == n ? true : n.state) === "error" && (null == n ? true : n.fetchedAt) != null && Date.now() - n.fetchedAt < c,
    f = (null == n ? true : n.state) === "fetched" && (null == n ? true : n.fetchedAt) != null && Date.now() - n.fetchedAt < u;
  if (!o && !d && !f) try {
    var p;
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD",
      guildId: e
    });
    let t = await r.tn.get({
      url: l.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
      rejectWithError: true,
      retries: 3
    });
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
      guildId: e,
      storefront: (0, a.Uc)(t.body)
    }), i.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: null != (p = t.body.store_listings) ? p : []
    })
  } catch (n) {
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
      guildId: e,
      eager: t
    })
  }
}
async function f(e, t) {
  try {
    i.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_START",
      skuId: t
    });
    let n = await r.tn.get({
      url: l.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t),
      rejectWithError: true
    });
    if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
      guildId: e,
      storefront: (0, a.Uc)({
        application_id: n.body.store_listing.sku.application_id,
        title: "",
        logo_asset_id: true,
        light_theme_logo_asset_id: true,
        pages: [],
        store_listings: [],
        assets: n.body.assets
      })
    }), i.Z.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: n.body.store_listing
    })
  } catch (e) {
    i.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_FAIL",
      skuId: t
    })
  }
}

function p(e, t, n) {
  i.Z.dispatch({
    type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
    guildId: e,
    pageIndex: t,
    skuId: n
  })
}