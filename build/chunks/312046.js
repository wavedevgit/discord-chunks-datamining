/** Chunk was on web.js **/
/** chunk id: 312046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => o,
  s: () => s
});
var Chunk666977 = require("./666977.js"),
  Chunk418793 = require("./418793.js"),
  Chunk460597 = require("./460597.js");
let o = e => ({
  id: e.id,
  configVersion: 2,
  startsAt: e.starts_at,
  expiresAt: e.expires_at,
  features: e.features,
  application: {
    id: e.application.id,
    name: e.application.name
  },
  assets: {
    hero: e.assets.hero,
    heroVideo: e.assets.hero_video,
    questBarHero: e.assets.quest_bar_hero,
    questBarHeroVideo: e.assets.quest_bar_hero_video,
    gameTile: e.assets.game_tile,
    logotype: e.assets.logotype,
    gameTileLight: e.assets.game_tile_light,
    gameTileDark: e.assets.game_tile_dark,
    logotypeLight: e.assets.logotype_light,
    logotypeDark: e.assets.logotype_dark
  },
  colors: {
    primary: e.colors.primary,
    secondary: e.colors.secondary
  },
  messages: {
    questName: e.messages.quest_name,
    gameTitle: e.messages.game_title,
    gamePublisher: e.messages.game_publisher
  },
  taskConfigV2: (0, a._)(e.task_config_v2),
  rewardsConfig: (0, i.v)(e.rewards_config),
  cosponsorMetadata: s(e.cosponsor_metadata),
  sharePolicy: e.share_policy,
  ctaConfig: (0, r.D)(e.cta_config)
});

function s(e) {
  if (null != e) return {
    name: e.name,
    logotype: e.logotype,
    redemptionInstructions: e.redemption_instructions,
    logotypeLight: e.logotype_light,
    logotypeDark: e.logotype_dark
  }
}