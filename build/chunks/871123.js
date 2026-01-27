/** Chunk was on web.js **/
/** chunk id: 871123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cv: () => O,
  M$: () => y,
  OY: () => I,
  Q6: () => S,
  Xg: () => _,
  Ye: () => T,
  bF: () => h,
  fq: () => v,
  jz: () => g,
  pV: () => p,
  sq: () => E,
  ty: () => b,
  xf: () => A,
  zf: () => m
}), require("./228524.js"), require("./446912.js"), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk611010 = require("./611010.js"),
  Chunk731935 = require("./731935.js"),
  Chunk71393 = require("./71393.js"),
  Chunk371794 = require("./371794.js"),
  Chunk998218 = require("./998218.js"),
  Chunk916023 = require("./916023.js"),
  Chunk188275 = require("./188275.js"),
  Chunk652215 = require("./652215.js");
let p = Chunk371794.QB ? "webp" : "jpg";

function _(e) {
  return null != e && d.Pc.has(e.id)
}

function h(e) {
  return null != e && e.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM
}

function m() {
  let e = s.A.getGuild(d.v8);
  return null != e && e.features.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : d.Kf
}

function g(e) {
  var t, n;
  return e.id === m() || null != (t = null == (n = e.features) ? true : n.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) && t
}

function E(e) {
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
    application: null != e.application ? a.Ay.createFromServer(e.application) : true
  }
}

function y(e) {
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

function b(e) {
  return {
    skus: e.skus.map(e => o.A.createFromServer(e)),
    skusToRecommendationReasons: Object.fromEntries(Object.entries(e.skus_to_user_ids).map(e => {
      let [t, n] = e;
      return [t, n.map(e => ({
        userId: e.user_id,
        reason: e.reason
      }))]
    })),
    application: a.Ay.createFromServer(e.application)
  }
}

function O(e, t) {
  var n, r, i;
  if (null == t || (null == e || null == (i = e.tenantMetadata) || null == (r = i.socialLayer) ? true : r.carouselItems) == null || 0 === e.tenantMetadata.socialLayer.carouselItems.length) return {
    primaryIconAsset: true,
    primaryIconLabel: true
  };
  let a = e.tenantMetadata.socialLayer.carouselItems[0];
  return null == a.labelIconAssetId ? {
    primaryIconAsset: true,
    primaryIconLabel: true
  } : {
    primaryIconAsset: null != (n = c.A.toURLSafe((0, l.YE)(t, a.labelIconAssetId, 512, "webp"))) ? n : true,
    primaryIconLabel: a.label
  }
}

function v(e) {
  var t, n, r;
  let i = null == e ? true : e.applicationId,
    a = null != (t = null == e || null == (r = e.tenantMetadata) || null == (n = r.socialLayer) ? true : n.cardImageAssetId) ? t : null == e ? true : e.thumbnailAssetId;
  if (null != a && null != i) return c.A.toURLSafe((0, l.YE)(i, a, 512, "webp"))
}

function A(e) {
  var t, n;
  if ((null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardBackgroundImageAssetId) != null && (null == e ? true : e.applicationId) != null) return c.A.toURLSafe((0, l.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, p))
}

function I(e, t) {
  return "".concat(location.protocol).concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT).concat(f.BVt.GAME_SHOP(e, t.id, t.slug))
}

function S(e, t) {
  return "".concat(I(e, t), "\n\n")
}

function T(e, t) {
  let n = s.A.getGuild(e);
  return null != n && g(n) && (0, u.xD)({
    location: t
  })
}