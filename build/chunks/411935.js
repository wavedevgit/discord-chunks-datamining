/** Chunk was on web.js **/
/** chunk id: 411935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xp: () => O,
  YL: () => g,
  g$: () => y,
  m0: () => b,
  y: () => E
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk164670 = require("./164670.js"),
  Chunk210218 = require("./210218.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = 6,
  _ = 30 * Chunk70956.Z.Millis.SECOND,
  m = 30 * Chunk70956.Z.Millis.MINUTE,
  h = 5;
async function g(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      eager: n = false,
      forceFetch: a = false
    } = t,
    c = s.Z.getStorefrontData(e),
    u = (null == c ? true : c.state) === "loading",
    d = (null == c ? true : c.state) === "error" && (null == c ? true : c.fetchedAt) != null && Date.now() - c.fetchedAt < _,
    f = (null == c ? true : c.state) === "fetched" && (null == c ? true : c.fetchedAt) != null && Date.now() - c.fetchedAt < m;
  if (!(u || d || f) || a) try {
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
      storefront: (0, o.Uc)(t.body)
    }), i.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: null != (p = t.body.store_listings) ? p : []
    })
  } catch (t) {
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
      guildId: e,
      eager: n
    })
  }
}
async function E(e, t) {
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
      storefront: (0, o.Uc)({
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

function b(e, t, n) {
  i.Z.dispatch({
    type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
    guildId: e,
    pageIndex: t,
    skuId: n
  })
}
async function y(e) {
  let {
    applicationId: t,
    userIds: n,
    maxRecommendations: a = p,
    includeWishlists: c = false
  } = e;
  if (0 === n.length) return;
  let d = s.Z.recommendationsByApplicationsAndUsers(t, n);
  if (null != d && ("error" === d.state || "loading" === d.state || "success" === d.state && d.data.numItemsRequested >= a)) return;
  let _ = n.slice(0, h);
  try {
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START",
      applicationId: t,
      userIds: _
    });
    let e = await r.tn.get({
        url: l.ANM.SOCIAL_LAYER_APPLCIATION_RECOMMENDATIONS(t),
        rejectWithError: true,
        query: {
          user_ids: _,
          max_recommendations: a,
          include_wishlists: c
        }
      }),
      n = (0, o.X0)(e.body);
    return i.Z.dispatch(f(u({
      type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS"
    }, n), {
      userIds: _,
      numItemsRequested: a
    })), n
  } catch (e) {
    return i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE",
      applicationId: t,
      userIds: _
    }), null
  }
}
async function O(e) {
  try {
    let t = (await r.tn.get({
      url: l.ANM.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e),
      rejectWithError: true
    })).body;
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS",
      guildId: e,
      announcement: {
        id: t.id,
        applicationId: t.application_id,
        applicationName: t.application_name,
        assetId: t.asset_id,
        backgroundImageAssetId: t.background_image_asset_id
      }
    })
  } catch (t) {
    i.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE",
      guildId: e
    })
  }
}