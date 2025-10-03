/** Chunk was on web.js **/
/** chunk id: 164670, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K$: () => i,
  Uc: () => o,
  wK: () => a,
  x6: () => s
}), require("./953529.js");
var Chunk981631 = require("./981631.js");

function i(e) {
  return null != e && e.productLine === r.POd.SOCIAL_LAYER_GAME_ITEM
}

function a(e) {
  return null != e && e.features.has(r.oNc.SOCIAL_LAYER_STOREFRONT)
}

function o(e) {
  return {
    applicationId: e.application_id,
    title: e.title,
    logoAssetId: e.logo_asset_id,
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
    }))
  }
}

function s(e) {
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