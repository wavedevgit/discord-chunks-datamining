/** Chunk was on web.js **/
/** chunk id: 164670, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Do: () => m,
  FE: () => h,
  K$: () => u,
  Uc: () => _,
  a7: () => g,
  ac: () => d,
  wK: () => f,
  wQ: () => E,
  x6: () => p
}), require("./953529.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk430824 = require("./430824.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  return null != e && e.productLine === c.POd.SOCIAL_LAYER_GAME_ITEM
}

function d() {
  let e = Chunk430824.Z.getGuild(Chunk582113.Kz);
  return null != module && module.features.has(Chunk981631.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? module.id : Chunk582113.ON
}

function f(e) {
  var t, n;
  return e.id === d() || null != (n = null == (t = e.features) ? true : t.has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) && n
}

function _(e) {
  return {
    applicationId: e.application_id,
    title: e.title,
    logoAssetId: e.logo_asset_id,
    lightThemeLogoAssetId: e.light_theme_logo_asset_id,
    pages: e.pages.map(e => ({
      title: e.title,
      leaderboard: null != e.leaderboard ? {
        title: e.leaderboard.title,
        description: e.leaderboard.description,
        backgroundImageAssetId: e.leaderboard.background_image_asset_id
      } : true,
      skuIds: e.sku_ids,
      sections: null != e.sections ? e.sections.map(e => ({
        title: e.title,
        skuIds: e.sku_ids
      })) : true
    })),
    assets: i().keyBy(e.assets, "id")
  }
}

function p(e) {
  if (null != e) return {
    carouselItems: e.carousel_items.map(e => ({
      thumbnailAssetId: e.thumbnail_asset_id,
      assetId: e.asset_id,
      backgroundAssetId: e.background_asset_id,
      youtubeVideoId: e.youtube_video_id,
      label: e.label,
      labelIconAssetId: e.label_icon_asset_id
    })),
    label: e.label,
    expiresAt: null != e.expires_at ? new Date(e.expires_at) : true,
    cardImageAssetId: e.card_image_asset_id,
    cardBackgroundImageAssetId: e.card_background_image_asset_id
  }
}

function h(e, t) {
  var n, r, i;
  if (null == t || (null == e || null == (r = e.tenantMetadata) || null == (n = r.socialLayer) ? true : n.carouselItems) == null || 0 === e.tenantMetadata.socialLayer.carouselItems.length) return {
    primaryIconAsset: true,
    primaryIconLabel: true
  };
  let a = e.tenantMetadata.socialLayer.carouselItems[0];
  return null == a.labelIconAssetId ? {
    primaryIconAsset: true,
    primaryIconLabel: true
  } : {
    primaryIconAsset: null != (i = s.Z.toURLSafe((0, o._W)(t, a.labelIconAssetId, 512, "png"))) ? i : true,
    primaryIconLabel: a.label
  }
}

function m(e) {
  var t, n, r;
  let i = null == e ? true : e.applicationId,
    a = null != (r = null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardImageAssetId) ? r : null == e ? true : e.thumbnailAssetId;
  if (null != a && null != i) return s.Z.toURLSafe((0, o._W)(i, a, 512, "png"))
}

function g(e) {
  var t, n;
  if ((null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardBackgroundImageAssetId) != null && (null == e ? true : e.applicationId) != null) return s.Z.toURLSafe((0, o._W)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))
}

function E(e, t) {
  return "".concat(location.protocol).concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT).concat(c.Z5c.GAME_SHOP(e, t.id, t.slug))
}