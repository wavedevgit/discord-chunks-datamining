/** Chunk was on web.js **/
/** chunk id: 955204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EP: () => o,
  F7: () => c,
  LG: () => s,
  hn: () => a,
  oX: () => l
});
var Chunk641033 = require("./641033.js"),
  Chunk388032 = require("./388032.jsx"),
  a = function(e) {
    return e[e.ENABLE_POGGERMODE = 0] = "ENABLE_POGGERMODE", e[e.DISABLE_POGGERMODE = 1] = "DISABLE_POGGERMODE", e[e.PING_SOMEONE = 2] = "PING_SOMEONE", e[e.PING_ME = 3] = "PING_ME", e[e.COMBO_MULTI_LEVEL_1 = 4] = "COMBO_MULTI_LEVEL_1", e[e.COMBO_MULTI_LEVEL_2 = 5] = "COMBO_MULTI_LEVEL_2", e[e.COMBO_MULTI_LEVEL_3 = 6] = "COMBO_MULTI_LEVEL_3", e[e.COMBO_MULTI_LEVEL_4 = 7] = "COMBO_MULTI_LEVEL_4", e[e.TOTAL_SCORE_LEVEL_1 = 8] = "TOTAL_SCORE_LEVEL_1", e[e.TOTAL_SCORE_LEVEL_2 = 9] = "TOTAL_SCORE_LEVEL_2", e[e.TOTAL_SCORE_LEVEL_3 = 10] = "TOTAL_SCORE_LEVEL_3", e[e.TOTAL_SCORE_LEVEL_4 = 11] = "TOTAL_SCORE_LEVEL_4", e[e.TOTAL_SCORE_LEVEL_5 = 12] = "TOTAL_SCORE_LEVEL_5", e[e.VISITOR_100 = 13] = "VISITOR_100", e[e.CUSTOMIZE_CONFETTI = 14] = "CUSTOMIZE_CONFETTI", e[e.MORE = 15] = "MORE", e[e.COMBO_VALUE_LEVEL_1 = 16] = "COMBO_VALUE_LEVEL_1", e[e.COMBO_VALUE_LEVEL_2 = 17] = "COMBO_VALUE_LEVEL_2", e[e.COMBO_VALUE_LEVEL_3 = 18] = "COMBO_VALUE_LEVEL_3", e[e.COMBO_VALUE_LEVEL_4 = 19] = "COMBO_VALUE_LEVEL_4", e
  }({}),
  o = function(e) {
    return e[e.COMMON = 0] = "COMMON", e[e.UNCOMMON = 1] = "UNCOMMON", e[e.RARE = 2] = "RARE", e[e.EPIC = 3] = "EPIC", e[e.LEGENDARY = 4] = "LEGENDARY", e
  }({});
let s = {
  0: {
    id: 0,
    name: () => Chunk388032.intl.string(Chunk388032.t["CRLcO+"]),
    description: () => Chunk388032.intl.string(Chunk388032.t["9+4/CD"]),
    rarity: 0,
    hideDescriptionUntilUnlock: false
  },
  1: {
    id: 1,
    name: () => Chunk388032.intl.string(Chunk388032.t.PlhJTk),
    description: () => Chunk388032.intl.string(Chunk388032.t["+QxFMr"]),
    rarity: 1,
    hideDescriptionUntilUnlock: false
  },
  13: {
    id: 13,
    name: () => Chunk388032.intl.string(Chunk388032.t["+91bDx"]),
    description: () => Chunk388032.intl.string(Chunk388032.t["6Zakdf"]),
    rarity: 4,
    hideDescriptionUntilUnlock: true,
    onAction: () => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
  },
  14: {
    id: 14,
    name: () => Chunk388032.intl.string(Chunk388032.t.OdenKS),
    description: () => Chunk388032.intl.string(Chunk388032.t["06/08A"]),
    rarity: 0,
    hideDescriptionUntilUnlock: false
  },
  15: {
    id: 15,
    name: () => Chunk388032.intl.string(Chunk388032.t["C88+vm"]),
    description: () => Chunk388032.intl.string(Chunk388032.t.w4SYNC),
    rarity: 1,
    hideDescriptionUntilUnlock: false
  },
  2: {
    id: 2,
    name: () => Chunk388032.intl.string(Chunk388032.t["7q1avI"]),
    description: () => Chunk388032.intl.string(Chunk388032.t.XwAgCF),
    rarity: 0,
    hideDescriptionUntilUnlock: false
  },
  3: {
    id: 3,
    name: () => Chunk388032.intl.formatToMarkdownString(Chunk388032.t.NgKcOi, {}),
    description: () => Chunk388032.intl.string(Chunk388032.t.jmzQrA),
    rarity: 1,
    hideDescriptionUntilUnlock: false
  },
  4: {
    id: 4,
    name: () => Chunk388032.intl.string(Chunk388032.t.q3ekQx),
    description: () => Chunk388032.intl.string(Chunk388032.t.KDk6IG),
    rarity: 0,
    hideDescriptionUntilUnlock: false,
    checkUnlock: e => e.multiplier >= 2
  },
  5: {
    id: 5,
    name: () => Chunk388032.intl.string(Chunk388032.t.k6NlxZ),
    description: () => Chunk388032.intl.string(Chunk388032.t.A4Bi5z),
    rarity: 1,
    hideDescriptionUntilUnlock: false,
    checkUnlock: e => e.multiplier >= 4
  },
  6: {
    id: 6,
    name: () => Chunk388032.intl.string(Chunk388032.t.EPQN54),
    description: () => Chunk388032.intl.string(Chunk388032.t["NS/QvW"]),
    rarity: 2,
    hideDescriptionUntilUnlock: false,
    checkUnlock: e => e.multiplier >= 5
  },
  7: {
    id: 7,
    name: () => Chunk388032.intl.string(Chunk388032.t["H/xC9h"]),
    description: () => Chunk388032.intl.string(Chunk388032.t.NECb4t),
    rarity: 2,
    hideDescriptionUntilUnlock: false,
    checkUnlock: e => e.multiplier >= 7
  },
  8: {
    id: 8,
    name: () => Chunk388032.intl.string(Chunk388032.t["24aD8g"]),
    description: () => Chunk388032.intl.string(Chunk388032.t.YtKoSd),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 430 === (0, r.Eo)(e)
  },
  9: {
    id: 9,
    name: () => Chunk388032.intl.string(Chunk388032.t.vZm483),
    description: () => Chunk388032.intl.string(Chunk388032.t.QKxjeQ),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 555 === (0, r.Eo)(e)
  },
  10: {
    id: 10,
    name: () => Chunk388032.intl.string(Chunk388032.t.SxLn1y),
    description: () => Chunk388032.intl.string(Chunk388032.t["7tuql7"]),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 898 === (0, r.Eo)(e)
  },
  11: {
    id: 11,
    name: () => Chunk388032.intl.string(Chunk388032.t.hK1RPg),
    description: () => Chunk388032.intl.string(Chunk388032.t.okzLOT),
    rarity: 4,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 1337 === (0, r.Eo)(e)
  },
  12: {
    id: 12,
    name: () => Chunk388032.intl.string(Chunk388032.t.Pa8olZ),
    description: () => Chunk388032.intl.string(Chunk388032.t.KSzHjj),
    rarity: 4,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 2048 === (0, r.Eo)(e)
  },
  16: {
    id: 16,
    name: () => Chunk388032.intl.string(Chunk388032.t.lXhhWS),
    description: () => Chunk388032.intl.string(Chunk388032.t.OxvobM),
    rarity: 2,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 64 === e.value
  },
  17: {
    id: 17,
    name: () => Chunk388032.intl.string(Chunk388032.t.M4ErfE),
    description: () => Chunk388032.intl.string(Chunk388032.t["sjzx+z"]),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 88 === e.value
  },
  18: {
    id: 18,
    name: () => Chunk388032.intl.string(Chunk388032.t.RawXaF),
    description: () => Chunk388032.intl.string(Chunk388032.t.iOsWL1),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 99 === e.value
  },
  19: {
    id: 19,
    name: () => Chunk388032.intl.string(Chunk388032.t.irv64I),
    description: () => Chunk388032.intl.string(Chunk388032.t.shGZwx),
    rarity: 4,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 113 === e.value
  }
};

function l(e) {
  return s[e]
}
let c = e => {
  switch (e) {
    case 0:
      return {
        color: "#1ABC9C"
      };
    case 1:
      return {
        color: "#3498DB"
      };
    case 2:
      return {
        color: "#9B59B6"
      };
    case 3:
      return {
        color: "#E91E63"
      };
    case 4:
      return {
        color: "#E67E22"
      }
  }
}