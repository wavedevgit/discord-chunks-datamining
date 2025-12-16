/** Chunk was on web.js **/
/** chunk id: 164670, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $p: () => _,
  Do: () => v,
  FE: () => O,
  K$: () => m,
  Uc: () => E,
  X0: () => y,
  _Z: () => p,
  a7: () => S,
  ac: () => h,
  vg: () => T,
  wK: () => g,
  wQ: () => I,
  x6: () => b
}), require("./953529.js"), require("./467055.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk973616 = require("./973616.js"),
  Chunk659181 = require("./659181.js"),
  Chunk430824 = require("./430824.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk699955 = require("./699955.js"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js");
let p = Chunk73346.$k ? "webp" : "jpg";

function _(e) {
  return null != e && d.Nx.has(e.id)
}

function m(e) {
  return null != e && e.productLine === f.POd.SOCIAL_LAYER_GAME_ITEM
}

function h() {
  let e = Chunk430824.Z.getGuild(Chunk582113.Kz);
  return null != module && module.features.has(Chunk981631.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? module.id : Chunk582113.ON
}

function g(e) {
  var t, n;
  return e.id === h() || null != (n = null == (t = e.features) ? true : t.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) && n
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
    application: null != e.application ? a.ZP.createFromServer(e.application) : true
  }
}

function b(e) {
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

function y(e) {
  return {
    skus: e.skus.map(e => o.Z.createFromServer(e)),
    skusToRecommendationReasons: Object.fromEntries(Object.entries(e.skus_to_user_ids).map(e => {
      let [t, n] = e;
      return [t, n.map(e => ({
        userId: e.user_id,
        reason: e.reason
      }))]
    })),
    application: a.ZP.createFromServer(e.application)
  }
}

function O(e, t) {
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
    primaryIconAsset: null != (i = c.Z.toURLSafe((0, l._W)(t, a.labelIconAssetId, 512, "webp"))) ? i : true,
    primaryIconLabel: a.label
  }
}

function v(e) {
  var t, n, r;
  let i = null == e ? true : e.applicationId,
    a = null != (r = null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardImageAssetId) ? r : null == e ? true : e.thumbnailAssetId;
  if (null != a && null != i) return c.Z.toURLSafe((0, l._W)(i, a, 512, "webp"))
}

function S(e) {
  var t, n;
  if ((null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardBackgroundImageAssetId) != null && (null == e ? true : e.applicationId) != null) return c.Z.toURLSafe((0, l._W)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, p))
}

function I(e, t) {
  return "".concat(location.protocol).concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT).concat(f.Z5c.GAME_SHOP(e, t.id, t.slug))
}

function T(e, t) {
  let n = s.Z.getGuild(e);
  return null != n && g(n) && (0, u.ne)({
    location: t
  })
}