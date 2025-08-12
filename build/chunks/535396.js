/** Chunk was on web.js **/
/** chunk id: 535396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => N,
  Cp: () => m,
  Du: () => C,
  Fq: () => h,
  H2: () => O,
  Hk: () => S,
  IN: () => b,
  If: () => y,
  NL: () => R,
  NO: () => u,
  Q1: () => E,
  Rx: () => A,
  T1: () => g,
  Tg: () => v,
  Us: () => c,
  XW: () => _,
  ad: () => p,
  am: () => w,
  d5: () => T,
  os: () => P,
  uc: () => I
}), require("./388685.js");
var Chunk494497 = require("./494497.js"),
  Chunk704215 = require("./704215.js"),
  Chunk267642 = require("./267642.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  c = function(e) {
    return e.PERK = "perk", e.LEVEL = "level", e
  }({});
let u = "1340102344645283891",
  d = "1341586379779604621",
  f = "1341586379779604622",
  _ = "1341586379779604623",
  p = new Set([d, f, _]),
  h = "525479941211684874",
  m = {
    [Chunk981631.Eu4.TIER_1]: d,
    [Chunk981631.Eu4.TIER_2]: f,
    [Chunk981631.Eu4.TIER_3]: _,
    [Chunk981631.Eu4.NONE]: true
  },
  g = {
    [d]: Chunk981631.Eu4.TIER_1,
    [f]: Chunk981631.Eu4.TIER_2,
    [_]: Chunk981631.Eu4.TIER_3
  },
  E = {
    [Chunk981631.Eu4.TIER_1]: Chunk704215.C.GUILD_POWERUP_LEVEL_1_COACHMARK,
    [Chunk981631.Eu4.TIER_2]: Chunk704215.C.GUILD_POWERUP_LEVEL_2_COACHMARK,
    [Chunk981631.Eu4.TIER_3]: Chunk704215.C.GUILD_POWERUP_LEVEL_3_COACHMARK,
    [Chunk981631.Eu4.NONE]: true
  },
  b = "1351706802684952639",
  y = "1354906318279807056",
  O = "guild_powerup_modal",
  v = [
    [b],
    [y],
    [Chunk494497.A$],
    [Chunk494497.MB, Chunk494497.Vk]
  ],
  I = new Set([b, y, Chunk494497.A$]),
  T = () => ({
    [Chunk981631.oNc.VIDEO_BITRATE_ENHANCED]: {
      perkIcon: Chunk267642.Ro.STREAM,
      description: Chunk388032.intl.string(Chunk388032.t.y4ft4O)
    },
    [Chunk981631.oNc.AUDIO_BITRATE_128_KBPS]: {
      perkIcon: Chunk267642.Ro.AUDIO,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t.zoT1ZG, {
        bitrate: Chunk474936.HO[Chunk981631.Eu4.TIER_1].limits.bitrate / 1e3
      })
    },
    [Chunk981631.oNc.INVITE_SPLASH]: {
      perkIcon: Chunk267642.Ro.CUSTOMIZATION,
      description: Chunk388032.intl.string(Chunk388032.t.Qwlpoq)
    },
    [Chunk981631.oNc.ANIMATED_ICON]: {
      perkIcon: Chunk267642.Ro.ANIMATED,
      description: Chunk388032.intl.string(Chunk388032.t.PbAyub)
    },
    [Chunk981631.oNc.AUDIO_BITRATE_256_KBPS]: {
      perkIcon: Chunk267642.Ro.AUDIO,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t.zoT1ZG, {
        bitrate: Chunk474936.HO[Chunk981631.Eu4.TIER_2].limits.bitrate / 1e3
      })
    },
    [Chunk981631.oNc.ROLE_ICONS]: {
      perkIcon: Chunk267642.Ro.CUSTOM_ROLE_ICON,
      description: Chunk388032.intl.string(Chunk388032.t["6PV6QU"])
    },
    [Chunk981631.oNc.MAX_FILE_SIZE_50_MB]: {
      perkIcon: Chunk267642.Ro.UPLOAD,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t["aFRl5+"], {
        uploadSizeLimit: Chunk388032.intl.string(Chunk388032.t.M6qV8v)
      })
    },
    [Chunk981631.oNc.BANNER]: {
      perkIcon: Chunk267642.Ro.CUSTOMIZATION,
      description: Chunk388032.intl.string(Chunk388032.t["1a5rjo"])
    },
    [Chunk981631.oNc.ANIMATED_BANNER]: {
      perkIcon: Chunk267642.Ro.ANIMATED,
      description: Chunk388032.intl.string(Chunk388032.t["1+Vmh4"])
    },
    [Chunk981631.oNc.AUDIO_BITRATE_384_KBPS]: {
      perkIcon: Chunk267642.Ro.AUDIO,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t.zoT1ZG, {
        bitrate: Chunk474936.HO[Chunk981631.Eu4.TIER_3].limits.bitrate / 1e3
      })
    },
    [Chunk981631.oNc.VANITY_URL]: {
      perkIcon: Chunk267642.Ro.VANITY,
      description: Chunk388032.intl.string(Chunk388032.t["5XZKy8"])
    },
    [Chunk981631.oNc.MAX_FILE_SIZE_100_MB]: {
      perkIcon: Chunk267642.Ro.UPLOAD,
      description: Chunk388032.intl.formatToPlainString(Chunk388032.t["aFRl5+"], {
        uploadSizeLimit: Chunk388032.intl.string(Chunk388032.t.yMOW8P)
      })
    }
  }),
  S = {
    [Chunk981631.oNc.VANITY_URL]: {
      boostPrice: 5,
      includedInLevel: Chunk981631.Eu4.TIER_3
    },
    [Chunk981631.oNc.GUILD_TAGS]: {
      boostPrice: 3,
      includedInLevel: true
    },
    [Chunk981631.oNc.ENHANCED_ROLE_COLORS]: {
      boostPrice: 3,
      includedInLevel: true
    },
    [Chunk981631.oNc.GUILD_TAGS_BADGE_PACK_PETS]: {
      boostPrice: 3,
      includedInLevel: true
    },
    [Chunk981631.oNc.GUILD_TAGS_BADGE_PACK_FLEX]: {
      boostPrice: 5,
      includedInLevel: true
    }
  },
  A = {
    [Chunk494497.A$]: Chunk981631.Eu4.TIER_3
  };
var N = function(e) {
    return e.INACTIVE = "inactive", e.POWERUP_ACTIVATED = "powerup_activated", e.LEVEL_ACTIVATED = "level_activated", e.TIER_OVERRIDE_ACTIVATED = "tier_override_activated", e
  }({}),
  C = function(e) {
    return e[e.VANITY_URL = 1] = "VANITY_URL", e[e.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE", e
  }({});
let R = new Set([Chunk494497.MB, Chunk494497.Vk]),
  P = {
    1: new Set([Chunk494497.A$]),
    2: R
  },
  w = "powerupId"