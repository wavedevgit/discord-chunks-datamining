/** Chunk was on web.js **/
/** chunk id: 535396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => I,
  Cp: () => _,
  Du: () => T,
  Fq: () => p,
  H2: () => g,
  Hk: () => O,
  NL: () => C,
  NO: () => d,
  P2: () => R,
  Q1: () => h,
  Rx: () => S,
  T1: () => m,
  Tg: () => E,
  Us: () => u,
  ad: () => f,
  am: () => N,
  br: () => P,
  cG: () => v,
  d5: () => y,
  m: () => w,
  os: () => A,
  uc: () => b,
  vW: () => D
}), require("./388685.js");
var Chunk494497 = require("./494497.js"),
  Chunk704215 = require("./704215.js"),
  Chunk267642 = require("./267642.js"),
  Chunk755458 = require("./755458.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  u = function(e) {
    return e.PERK = "perk", e.LEVEL = "level", e
  }({});
let d = "1340102344645283891",
  f = new Set([Chunk494497.h_, Chunk494497.NJ, Chunk494497.XW]),
  p = "525479941211684874",
  _ = {
    [Chunk981631.Eu4.TIER_1]: Chunk494497.h_,
    [Chunk981631.Eu4.TIER_2]: Chunk494497.NJ,
    [Chunk981631.Eu4.TIER_3]: Chunk494497.XW,
    [Chunk981631.Eu4.NONE]: true
  },
  m = {
    [Chunk494497.h_]: Chunk981631.Eu4.TIER_1,
    [Chunk494497.NJ]: Chunk981631.Eu4.TIER_2,
    [Chunk494497.XW]: Chunk981631.Eu4.TIER_3
  },
  h = {
    [Chunk981631.Eu4.TIER_1]: Chunk704215.C.GUILD_POWERUP_LEVEL_1_COACHMARK,
    [Chunk981631.Eu4.TIER_2]: Chunk704215.C.GUILD_POWERUP_LEVEL_2_COACHMARK,
    [Chunk981631.Eu4.TIER_3]: Chunk704215.C.GUILD_POWERUP_LEVEL_3_COACHMARK,
    [Chunk981631.Eu4.NONE]: true
  },
  g = "guild_powerup_modal",
  E = [
    [Chunk494497.IN],
    [Chunk494497.If],
    [Chunk494497.A$],
    [Chunk494497.MB, Chunk494497.Vk]
  ],
  b = new Set([Chunk494497.IN, Chunk494497.If, Chunk494497.A$, Chunk494497.MB, Chunk494497.Vk]),
  y = () => ({
    [Chunk981631.GuildFeatures.VIDEO_BITRATE_ENHANCED]: {
      perkIcon: Chunk267642.Ro.STREAM,
      description: Chunk388032.intl.string(Chunk388032.t.y4ft4D)
    },
    [Chunk981631.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
      perkIcon: Chunk267642.Ro.AUDIO,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t.zoT1ZE, {
        bitrate: Chunk474936.HO[Chunk981631.Eu4.TIER_1].limits.bitrate / 1e3
      })
    },
    [Chunk981631.GuildFeatures.INVITE_SPLASH]: {
      perkIcon: Chunk267642.Ro.CUSTOMIZATION,
      description: Chunk388032.intl.string(Chunk388032.t.Qwlpov)
    },
    [Chunk981631.GuildFeatures.ANIMATED_ICON]: {
      perkIcon: Chunk267642.Ro.ANIMATED,
      description: Chunk388032.intl.string(Chunk388032.t.PbAyub)
    },
    [Chunk981631.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
      perkIcon: Chunk267642.Ro.AUDIO,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t.zoT1ZE, {
        bitrate: Chunk474936.HO[Chunk981631.Eu4.TIER_2].limits.bitrate / 1e3
      })
    },
    [Chunk981631.GuildFeatures.ROLE_ICONS]: {
      perkIcon: Chunk267642.Ro.CUSTOM_ROLE_ICON,
      description: Chunk388032.intl.string(Chunk388032.t["6PV6Qc"])
    },
    [Chunk981631.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
      perkIcon: Chunk267642.Ro.UPLOAD,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t.aFRl53, {
        uploadSizeLimit: Chunk388032.intl.string(Chunk388032.t.M6qV8j)
      })
    },
    [Chunk981631.GuildFeatures.BANNER]: {
      perkIcon: Chunk267642.Ro.CUSTOMIZATION,
      description: Chunk388032.intl.string(Chunk388032.t["1a5rjl"])
    },
    [Chunk981631.GuildFeatures.ANIMATED_BANNER]: {
      perkIcon: Chunk267642.Ro.ANIMATED,
      description: Chunk388032.intl.string(Chunk388032.t["1+Vmh9"])
    },
    [Chunk981631.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
      perkIcon: Chunk267642.Ro.AUDIO,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t.zoT1ZE, {
        bitrate: Chunk474936.HO[Chunk981631.Eu4.TIER_3].limits.bitrate / 1e3
      })
    },
    [Chunk981631.GuildFeatures.VANITY_URL]: {
      perkIcon: Chunk267642.Ro.VANITY,
      description: Chunk388032.intl.string(Chunk388032.t["5XZKy/"])
    },
    [Chunk981631.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
      perkIcon: Chunk267642.Ro.UPLOAD,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t.aFRl53, {
        uploadSizeLimit: Chunk388032.intl.string(Chunk388032.t.yMOW8D)
      })
    }
  }),
  O = {
    [Chunk981631.GuildFeatures.VANITY_URL]: {
      boostPrice: 5,
      includedInLevel: Chunk981631.Eu4.TIER_3
    },
    [Chunk981631.GuildFeatures.GUILD_TAGS]: {
      boostPrice: 3
    },
    [Chunk981631.GuildFeatures.ENHANCED_ROLE_COLORS]: {
      boostPrice: 3
    },
    [Chunk981631.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: {
      boostPrice: 3
    },
    [Chunk981631.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: {
      boostPrice: 5
    }
  },
  v = {
    [Chunk981631.GuildFeatures.GAME_SERVERS]: {
      boostPrice: 3,
      isEnabled: e => (0, a.v$)(e, "GuildPowerupsConstants")
    }
  },
  S = {
    [Chunk494497.A$]: Chunk981631.Eu4.TIER_3
  };
var I = function(e) {
    return e.INACTIVE = "inactive", e.POWERUP_ACTIVATED = "powerup_activated", e.LEVEL_ACTIVATED = "level_activated", e.TIER_OVERRIDE_ACTIVATED = "tier_override_activated", e
  }({}),
  T = function(e) {
    return e[e.VANITY_URL = 1] = "VANITY_URL", e[e.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE", e[e.GAME_SERVER_HOSTING = 3] = "GAME_SERVER_HOSTING", e
  }({});
let C = new Set([Chunk494497.MB, Chunk494497.Vk]),
  A = {
    1: new Set([Chunk494497.A$]),
    2: C,
    3: new Set
  },
  N = "powerupId";
var P = function(e) {
    return e[e.AVAILABLE = 0] = "AVAILABLE", e[e.SPENT = 1] = "SPENT", e[e.TOTAL = 2] = "TOTAL", e
  }({}),
  R = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.LEVEL = 1] = "LEVEL", e[e.PERK = 2] = "PERK", e
  }({}),
  w = function(e) {
    return e.START = "start", e.MIDDLE = "middle", e.END = "end", e
  }({}),
  D = function(e) {
    return e.FULL = "full", e.HALF = "half", e.NONE = "none", e
  }({})