/** Chunk was on web.js **/
/** chunk id: 733391, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kh: () => O,
  Rw: () => g,
  SP: () => y,
  Xg: () => b,
  g9: () => m,
  qf: () => E
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk871123 = require("./871123.js"),
  Chunk832163 = require("./832163.js"),
  Chunk652215 = require("./652215.js");

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
  _ = 30 * Chunk927813.A.Millis.SECOND,
  h = 30 * Chunk927813.A.Millis.MINUTE,
  m = 5;
async function g(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      eager: n = false,
      forceFetch: a = false
    } = t,
    c = s.A.getStorefrontData(e),
    u = (null == c ? true : c.state) === "loading",
    d = (null == c ? true : c.state) === "error" && (null == c ? true : c.fetchedAt) != null && Date.now() - c.fetchedAt < _,
    f = (null == c ? true : c.state) === "fetched" && (null == c ? true : c.fetchedAt) != null && Date.now() - c.fetchedAt < h;
  if (!(u || d || f) || a) try {
    var p;
    i.h.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD",
      guildId: e
    });
    let t = await r.Bo.get({
      url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
      rejectWithError: true,
      retries: 3
    });
    i.h.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
      guildId: e,
      storefront: (0, o.sq)(t.body)
    }), i.h.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: null != (p = t.body.store_listings) ? p : []
    })
  } catch (t) {
    i.h.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
      guildId: e,
      eager: n
    })
  }
}
async function E(e, t) {
  try {
    i.h.dispatch({
      type: "STORE_LISTINGS_FETCH_START",
      skuId: t
    });
    let n = await r.Bo.get({
      url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t),
      rejectWithError: true
    });
    if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
    i.h.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
      guildId: e,
      storefront: (0, o.sq)({
        application_id: n.body.store_listing.sku.application_id,
        title: "",
        logo_asset_id: true,
        light_theme_logo_asset_id: true,
        pages: [],
        store_listings: [],
        assets: n.body.assets
      })
    }), i.h.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: n.body.store_listing
    })
  } catch (e) {
    i.h.dispatch({
      type: "STORE_LISTINGS_FETCH_FAIL",
      skuId: t
    })
  }
}

function y(e, t, n) {
  i.h.dispatch({
    type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
    guildId: e,
    pageIndex: t,
    skuId: n
  })
}
async function b(e) {
  let {
    applicationId: t,
    userIds: n,
    maxRecommendations: a = p,
    includeWishlists: c = false
  } = e;
  if (0 === n.length) return;
  let d = s.A.recommendationsByApplicationsAndUsers(t, n);
  if (null == d || "error" !== d.state && "loading" !== d.state && ("success" !== d.state || !(d.data.numItemsRequested >= a))) try {
    i.h.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START",
      applicationId: t,
      userIds: n
    });
    let e = await r.Bo.get({
        url: l.Rsh.SOCIAL_LAYER_APPLCIATION_RECOMMENDATIONS(t),
        rejectWithError: true,
        query: {
          user_ids: n,
          max_recommendations: a,
          include_wishlists: c
        }
      }),
      s = (0, o.ty)(e.body);
    return i.h.dispatch(f(u({
      type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS"
    }, s), {
      userIds: n,
      numItemsRequested: a
    })), s
  } catch (e) {
    return i.h.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE",
      applicationId: t,
      userIds: n
    }), null
  }
}
async function O(e) {
  try {
    let t = (await r.Bo.get({
      url: l.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e),
      rejectWithError: true
    })).body;
    i.h.dispatch({
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
    i.h.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE",
      guildId: e
    })
  }
}