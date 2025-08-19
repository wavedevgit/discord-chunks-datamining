/** Chunk was on 49882 **/
/** chunk id: 955204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EP: () => s,
  F7: () => d,
  LG: () => c,
  hn: () => a,
  oX: () => u
});
var r, i, Chunk641033 = require("./641033.js"),
  Chunk388032 = require("./388032.jsx"),
  a = ((r = {})[r.ENABLE_POGGERMODE = 0] = "ENABLE_POGGERMODE", r[r.DISABLE_POGGERMODE = 1] = "DISABLE_POGGERMODE", r[r.PING_SOMEONE = 2] = "PING_SOMEONE", r[r.PING_ME = 3] = "PING_ME", r[r.COMBO_MULTI_LEVEL_1 = 4] = "COMBO_MULTI_LEVEL_1", r[r.COMBO_MULTI_LEVEL_2 = 5] = "COMBO_MULTI_LEVEL_2", r[r.COMBO_MULTI_LEVEL_3 = 6] = "COMBO_MULTI_LEVEL_3", r[r.COMBO_MULTI_LEVEL_4 = 7] = "COMBO_MULTI_LEVEL_4", r[r.TOTAL_SCORE_LEVEL_1 = 8] = "TOTAL_SCORE_LEVEL_1", r[r.TOTAL_SCORE_LEVEL_2 = 9] = "TOTAL_SCORE_LEVEL_2", r[r.TOTAL_SCORE_LEVEL_3 = 10] = "TOTAL_SCORE_LEVEL_3", r[r.TOTAL_SCORE_LEVEL_4 = 11] = "TOTAL_SCORE_LEVEL_4", r[r.TOTAL_SCORE_LEVEL_5 = 12] = "TOTAL_SCORE_LEVEL_5", r[r.VISITOR_100 = 13] = "VISITOR_100", r[r.CUSTOMIZE_CONFETTI = 14] = "CUSTOMIZE_CONFETTI", r[r.MORE = 15] = "MORE", r[r.COMBO_VALUE_LEVEL_1 = 16] = "COMBO_VALUE_LEVEL_1", r[r.COMBO_VALUE_LEVEL_2 = 17] = "COMBO_VALUE_LEVEL_2", r[r.COMBO_VALUE_LEVEL_3 = 18] = "COMBO_VALUE_LEVEL_3", r[r.COMBO_VALUE_LEVEL_4 = 19] = "COMBO_VALUE_LEVEL_4", r),
  s = ((i = {})[i.COMMON = 0] = "COMMON", i[i.UNCOMMON = 1] = "UNCOMMON", i[i.RARE = 2] = "RARE", i[i.EPIC = 3] = "EPIC", i[i.LEGENDARY = 4] = "LEGENDARY", i);
let c = {
  0: {
    id: 0,
    name: () => Chunk388032.intl.string(Chunk388032.t.CRLcOz),
    description: () => Chunk388032.intl.string(Chunk388032.t["9+4/CA"]),
    rarity: 0,
    hideDescriptionUntilUnlock: false
  },
  1: {
    id: 1,
    name: () => Chunk388032.intl.string(Chunk388032.t.PlhJTk),
    description: () => Chunk388032.intl.string(Chunk388032.t["+QxFMj"]),
    rarity: 1,
    hideDescriptionUntilUnlock: false
  },
  13: {
    id: 13,
    name: () => Chunk388032.intl.string(Chunk388032.t["+91bDw"]),
    description: () => Chunk388032.intl.string(Chunk388032.t["6ZakdX"]),
    rarity: 4,
    hideDescriptionUntilUnlock: true,
    onAction: () => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
  },
  14: {
    id: 14,
    name: () => Chunk388032.intl.string(Chunk388032.t.OdenKS),
    description: () => Chunk388032.intl.string(Chunk388032.t["06/08P"]),
    rarity: 0,
    hideDescriptionUntilUnlock: false
  },
  15: {
    id: 15,
    name: () => Chunk388032.intl.string(Chunk388032.t["C88+vr"]),
    description: () => Chunk388032.intl.string(Chunk388032.t.w4SYND),
    rarity: 1,
    hideDescriptionUntilUnlock: false
  },
  2: {
    id: 2,
    name: () => Chunk388032.intl.string(Chunk388032.t["7q1avL"]),
    description: () => Chunk388032.intl.string(Chunk388032.t.XwAgCA),
    rarity: 0,
    hideDescriptionUntilUnlock: false
  },
  3: {
    id: 3,
    name: () => Chunk388032.intl.formatToMarkdownString(Chunk388032.t.NgKcOj, {}),
    description: () => Chunk388032.intl.string(Chunk388032.t.jmzQrK),
    rarity: 1,
    hideDescriptionUntilUnlock: false
  },
  4: {
    id: 4,
    name: () => Chunk388032.intl.string(Chunk388032.t.q3ekQ0),
    description: () => Chunk388032.intl.string(Chunk388032.t.KDk6IC),
    rarity: 0,
    hideDescriptionUntilUnlock: false,
    checkUnlock: e => e.multiplier >= 2
  },
  5: {
    id: 5,
    name: () => Chunk388032.intl.string(Chunk388032.t.k6Nlxc),
    description: () => Chunk388032.intl.string(Chunk388032.t["A4Bi5+"]),
    rarity: 1,
    hideDescriptionUntilUnlock: false,
    checkUnlock: e => e.multiplier >= 4
  },
  6: {
    id: 6,
    name: () => Chunk388032.intl.string(Chunk388032.t["EPQN5+"]),
    description: () => Chunk388032.intl.string(Chunk388032.t["NS/Qvb"]),
    rarity: 2,
    hideDescriptionUntilUnlock: false,
    checkUnlock: e => e.multiplier >= 5
  },
  7: {
    id: 7,
    name: () => Chunk388032.intl.string(Chunk388032.t["H/xC9v"]),
    description: () => Chunk388032.intl.string(Chunk388032.t.NECb4u),
    rarity: 2,
    hideDescriptionUntilUnlock: false,
    checkUnlock: e => e.multiplier >= 7
  },
  8: {
    id: 8,
    name: () => Chunk388032.intl.string(Chunk388032.t["24aD8v"]),
    description: () => Chunk388032.intl.string(Chunk388032.t.YtKoSU),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 430 === (0, l.Eo)(e)
  },
  9: {
    id: 9,
    name: () => Chunk388032.intl.string(Chunk388032.t["vZm48/"]),
    description: () => Chunk388032.intl.string(Chunk388032.t.QKxjeX),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 555 === (0, l.Eo)(e)
  },
  10: {
    id: 10,
    name: () => Chunk388032.intl.string(Chunk388032.t.SxLn19),
    description: () => Chunk388032.intl.string(Chunk388032.t["7tuql5"]),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 898 === (0, l.Eo)(e)
  },
  11: {
    id: 11,
    name: () => Chunk388032.intl.string(Chunk388032.t.hK1RPj),
    description: () => Chunk388032.intl.string(Chunk388032.t.okzLOT),
    rarity: 4,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 1337 === (0, l.Eo)(e)
  },
  12: {
    id: 12,
    name: () => Chunk388032.intl.string(Chunk388032.t.Pa8olZ),
    description: () => Chunk388032.intl.string(Chunk388032.t.KSzHjo),
    rarity: 4,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 2048 === (0, l.Eo)(e)
  },
  16: {
    id: 16,
    name: () => Chunk388032.intl.string(Chunk388032.t.lXhhWV),
    description: () => Chunk388032.intl.string(Chunk388032.t.OxvobG),
    rarity: 2,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 64 === e.value
  },
  17: {
    id: 17,
    name: () => Chunk388032.intl.string(Chunk388032.t.M4ErfH),
    description: () => Chunk388032.intl.string(Chunk388032.t["sjzx+/"]),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 88 === e.value
  },
  18: {
    id: 18,
    name: () => Chunk388032.intl.string(Chunk388032.t.RawXaG),
    description: () => Chunk388032.intl.string(Chunk388032.t.iOsWLy),
    rarity: 3,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 99 === e.value
  },
  19: {
    id: 19,
    name: () => Chunk388032.intl.string(Chunk388032.t.irv64O),
    description: () => Chunk388032.intl.string(Chunk388032.t.shGZw8),
    rarity: 4,
    hideDescriptionUntilUnlock: true,
    checkUnlock: e => 113 === e.value
  }
};

function u(e) {
  return c[e]
}
let d = e => {
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