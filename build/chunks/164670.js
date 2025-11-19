/** Chunk was on web.js **/
/** chunk id: 164670, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Do: () => _,
  FE: () => f,
  K$: () => l,
  Uc: () => u,
  a7: () => p,
  wK: () => c,
  wQ: () => h,
  x6: () => d
}), require("./953529.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  return null != e && e.productLine === s.POd.SOCIAL_LAYER_GAME_ITEM
}

function c(e) {
  return null != e && e.features.has(s.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
}

function u(e) {
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

function d(e) {
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

function f(e, t) {
  var n, r, i;
  if (null == t || (null == e || null == (r = e.tenantMetadata) || null == (n = r.socialLayer) ? true : n.carouselItems) == null || 0 === e.tenantMetadata.socialLayer.carouselItems.length) return {
    primaryIconAsset: true,
    primaryIconLabel: true
  };
  let s = e.tenantMetadata.socialLayer.carouselItems[0];
  return null == s.labelIconAssetId ? {
    primaryIconAsset: true,
    primaryIconLabel: true
  } : {
    primaryIconAsset: null != (i = o.Z.toURLSafe((0, a._W)(t, s.labelIconAssetId, 512, "png"))) ? i : true,
    primaryIconLabel: s.label
  }
}

function _(e) {
  var t, n, r;
  let i = null == e ? true : e.applicationId,
    s = null != (r = null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardImageAssetId) ? r : null == e ? true : e.thumbnailAssetId;
  if (null != s && null != i) return o.Z.toURLSafe((0, a._W)(i, s, 512, "png"))
}

function p(e) {
  var t, n;
  if ((null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardBackgroundImageAssetId) != null && (null == e ? true : e.applicationId) != null) return o.Z.toURLSafe((0, a._W)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))
}

function h(e, t) {
  return "".concat(location.protocol).concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT).concat(s.Z5c.GAME_SHOP(e, t.id, t.slug))
}