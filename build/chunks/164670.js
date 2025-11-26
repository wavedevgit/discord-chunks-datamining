/** Chunk was on web.js **/
/** chunk id: 164670, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Do: () => E,
  FE: () => g,
  K$: () => f,
  Uc: () => h,
  a7: () => b,
  ac: () => _,
  vg: () => O,
  wK: () => p,
  wQ: () => y,
  x6: () => m
}), require("./953529.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk973616 = require("./973616.js"),
  Chunk430824 = require("./430824.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk699955 = require("./699955.js"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  return null != e && e.productLine === d.POd.SOCIAL_LAYER_GAME_ITEM
}

function _() {
  let e = Chunk430824.Z.getGuild(Chunk582113.Kz);
  return null != module && module.features.has(Chunk981631.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? module.id : Chunk582113.ON
}

function p(e) {
  var t, n;
  return e.id === _() || null != (n = null == (t = e.features) ? true : t.has(d.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) && n
}

function h(e) {
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
    assets: i().keyBy(e.assets, "id"),
    application: null != e.application ? a.ZP.createFromServer(e.application) : true
  }
}

function m(e) {
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

function g(e, t) {
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
    primaryIconAsset: null != (i = l.Z.toURLSafe((0, s._W)(t, a.labelIconAssetId, 512, "png"))) ? i : true,
    primaryIconLabel: a.label
  }
}

function E(e) {
  var t, n, r;
  let i = null == e ? true : e.applicationId,
    a = null != (r = null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardImageAssetId) ? r : null == e ? true : e.thumbnailAssetId;
  if (null != a && null != i) return l.Z.toURLSafe((0, s._W)(i, a, 512, "png"))
}

function b(e) {
  var t, n;
  if ((null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardBackgroundImageAssetId) != null && (null == e ? true : e.applicationId) != null) return l.Z.toURLSafe((0, s._W)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))
}

function y(e, t) {
  return "".concat(location.protocol).concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT).concat(d.Z5c.GAME_SHOP(e, t.id, t.slug))
}

function O(e, t) {
  let n = o.Z.getGuild(e);
  return null != n && p(n) && (0, c.ne)({
    location: t
  })
}