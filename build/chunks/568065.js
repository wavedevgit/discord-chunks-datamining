/** Chunk was on web.js **/
/** chunk id: 568065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  At: () => P,
  Fq: () => g,
  G0: () => N,
  HO: () => y,
  On: () => m,
  Pn: () => R,
  Wb: () => d,
  YV: () => v,
  a8: () => _,
  aH: () => T,
  b_: () => I,
  mB: () => p,
  o2: () => f,
  o9: () => u,
  oN: () => E,
  q: () => S,
  r9: () => C,
  sy: () => O,
  w$: () => b,
  wr: () => A,
  y7: () => h,
  yG: () => w,
  z0: () => D
}), require("./896048.js"), require("./64700.js");
var Chunk512750 = require("./512750.js"),
  Chunk554146 = require("./554146.js"),
  Chunk473145 = require("./473145.js"),
  Chunk488803 = require("./488803.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  u = function(e) {
    return e.PERK = "perk", e.LEVEL = "level", e
  }({});
let d = "1340102344645283891",
  f = new Set([Chunk512750.ec, Chunk512750.RV, Chunk512750.YG]),
  p = "525479941211684874",
  _ = {
    [Chunk652215.TVA.TIER_1]: Chunk512750.ec,
    [Chunk652215.TVA.TIER_2]: Chunk512750.RV,
    [Chunk652215.TVA.TIER_3]: Chunk512750.YG,
    [Chunk652215.TVA.NONE]: true
  },
  h = {
    [Chunk512750.ec]: Chunk652215.TVA.TIER_1,
    [Chunk512750.RV]: Chunk652215.TVA.TIER_2,
    [Chunk512750.YG]: Chunk652215.TVA.TIER_3
  },
  m = {
    [Chunk652215.TVA.TIER_1]: Chunk554146.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
    [Chunk652215.TVA.TIER_2]: Chunk554146.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
    [Chunk652215.TVA.TIER_3]: Chunk554146.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
    [Chunk652215.TVA.NONE]: true
  },
  g = "guild_powerup_modal",
  E = [
    [Chunk512750.SL],
    [Chunk512750.aN],
    [Chunk512750.FB],
    [Chunk512750.OJ, Chunk512750.jF]
  ],
  y = new Set([Chunk512750.SL, Chunk512750.aN, Chunk512750.FB, Chunk512750.OJ, Chunk512750.jF]);
Chunk512750.aN;
let b = () => ({
    [l.GuildFeatures.VIDEO_BITRATE_ENHANCED]: {
      perkIcon: a.TP.STREAM,
      description: c.intl.string(c.t.y4ft4D)
    },
    [l.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
      perkIcon: a.TP.AUDIO,
      description: c.intl.formatToPlainString(c.t.zoT1ZE, {
        bitrate: s.TG[l.TVA.TIER_1].limits.bitrate / 1e3
      })
    },
    [l.GuildFeatures.INVITE_SPLASH]: {
      perkIcon: a.TP.CUSTOMIZATION,
      description: c.intl.string(c.t.Qwlpov)
    },
    [l.GuildFeatures.ANIMATED_ICON]: {
      perkIcon: a.TP.ANIMATED,
      description: c.intl.string(c.t.PbAyub)
    },
    [l.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
      perkIcon: a.TP.AUDIO,
      description: c.intl.formatToPlainString(c.t.zoT1ZE, {
        bitrate: s.TG[l.TVA.TIER_2].limits.bitrate / 1e3
      })
    },
    [l.GuildFeatures.ROLE_ICONS]: {
      perkIcon: a.TP.CUSTOM_ROLE_ICON,
      description: c.intl.string(c.t["6PV6Qc"])
    },
    [l.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
      perkIcon: a.TP.UPLOAD,
      description: c.intl.formatToPlainString(c.t.aFRl53, {
        uploadSizeLimit: c.intl.string(c.t.M6qV8j)
      })
    },
    [l.GuildFeatures.BANNER]: {
      perkIcon: a.TP.CUSTOMIZATION,
      description: c.intl.string(c.t["1a5rjl"])
    },
    [l.GuildFeatures.ANIMATED_BANNER]: {
      perkIcon: a.TP.ANIMATED,
      description: c.intl.string(c.t["1+Vmh9"])
    },
    [l.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
      perkIcon: a.TP.AUDIO,
      description: c.intl.formatToPlainString(c.t.zoT1ZE, {
        bitrate: s.TG[l.TVA.TIER_3].limits.bitrate / 1e3
      })
    },
    [l.GuildFeatures.VANITY_URL]: {
      perkIcon: a.TP.VANITY,
      description: c.intl.string(c.t["5XZKy/"])
    },
    [l.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
      perkIcon: a.TP.UPLOAD,
      description: c.intl.formatToPlainString(c.t.aFRl53, {
        uploadSizeLimit: c.intl.string(c.t.yMOW8D)
      })
    }
  }),
  O = {
    [Chunk652215.GuildFeatures.VANITY_URL]: {
      boostPrice: 5,
      includedInLevel: Chunk652215.TVA.TIER_3
    },
    [Chunk652215.GuildFeatures.GUILD_TAGS]: {
      boostPrice: 3
    },
    [Chunk652215.GuildFeatures.ENHANCED_ROLE_COLORS]: {
      boostPrice: 3
    },
    [Chunk652215.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: {
      boostPrice: 3
    },
    [Chunk652215.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: {
      boostPrice: 5
    }
  },
  v = {
    [Chunk652215.GuildFeatures.GAME_SERVERS]: {
      boostPrice: 3,
      isEnabled: e => (0, o.TS)(e, "GuildPowerupsConstants")
    }
  },
  A = {
    [Chunk512750.FB]: Chunk652215.TVA.TIER_3
  };
var I = function(e) {
    return e.INACTIVE = "inactive", e.POWERUP_ACTIVATED = "powerup_activated", e.LEVEL_ACTIVATED = "level_activated", e.TIER_OVERRIDE_ACTIVATED = "tier_override_activated", e
  }({}),
  S = function(e) {
    return e[e.VANITY_URL = 1] = "VANITY_URL", e[e.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE", e[e.GAME_SERVER_HOSTING = 3] = "GAME_SERVER_HOSTING", e
  }({});
let T = new Set([Chunk512750.OJ, Chunk512750.jF]),
  C = {
    1: new Set([Chunk512750.FB]),
    2: T,
    3: new Set
  },
  N = "powerupId";
var w = function(e) {
    return e[e.AVAILABLE = 0] = "AVAILABLE", e[e.SPENT = 1] = "SPENT", e[e.TOTAL = 2] = "TOTAL", e
  }({}),
  R = function(e) {
    return e[e.LEVEL = 0] = "LEVEL", e[e.PERK = 1] = "PERK", e
  }({}),
  P = function(e) {
    return e.START = "start", e.MIDDLE = "middle", e.END = "end", e
  }({}),
  D = function(e) {
    return e.FULL = "full", e.HALF = "half", e.NONE = "none", e
  }({})