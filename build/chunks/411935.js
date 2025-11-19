/** Chunk was on web.js **/
/** chunk id: 411935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YL: () => s,
  m0: () => c,
  y: () => l
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk164670 = require("./164670.js"),
  Chunk981631 = require("./981631.js");
async function s(e) {
  try {
    var t;
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD",
      guildId: e
    });
    let n = await r.tn.get({
      url: o.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
      rejectWithError: true
    });
    if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront");
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
      guildId: e,
      storefront: (0, a.Uc)(n.body)
    }), i.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: null != (t = n.body.store_listings) ? t : []
    })
  } catch (t) {
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
      guildId: e
    })
  }
}
async function l(e, t) {
  try {
    i.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_START",
      skuId: t
    });
    let n = await r.tn.get({
      url: o.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t),
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

function c(e, t, n) {
  i.Z.dispatch({
    type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
    guildId: e,
    pageIndex: t,
    skuId: n
  })
}