/** Chunk was on web.js **/
/** chunk id: 418793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => s
}), require("./388685.js");
var Chunk887003 = require("./887003.js"),
  Chunk49436 = require("./49436.js");

function o(e) {
  let t = {};
  for (let n of Object.keys(e)) {
    let r = parseInt(n);
    i.xw.has(r) && (t[r] = e[n])
  }
  return t
}
let a = e => {
    switch (e.type) {
      case r.w.REWARD_CODE:
        return {
          type: r.w.REWARD_CODE, skuId: e.sku_id, asset: e.asset, assetVideo: e.asset_video, messages: {
            redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }, approximateCount: e.approximate_count, redemptionLink: e.redemption_link
        };
      case r.w.COLLECTIBLE:
        return {
          type: r.w.COLLECTIBLE, skuId: e.sku_id, asset: e.asset, assetVideo: e.asset_video, messages: {
            redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }, expiresAt: e.expires_at, expirationMode: e.expiration_mode, expiresAtPremium: e.expires_at_premium
        };
      case r.w.VIRTUAL_CURRENCY:
        return {
          type: r.w.VIRTUAL_CURRENCY, skuId: e.sku_id, messages: {
            redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }, orbQuantity: e.orb_quantity
        };
      case r.w.FRACTIONAL_PREMIUM:
        return {
          type: r.w.FRACTIONAL_PREMIUM, skuId: e.sku_id, asset: e.asset, assetVideo: e.asset_video, quantity: e.quantity, messages: {
            redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }
        };
      case r.w.IN_GAME:
        return {
          type: r.w.IN_GAME, skuId: e.sku_id, asset: e.asset, assetVideo: e.asset_video, messages: {
            redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }
        }
    }
  },
  s = e => ({
    assignmentMethod: e.assignment_method,
    rewards: e.rewards.map(a),
    rewardsExpireAt: e.rewards_expire_at,
    platforms: e.platforms
  })