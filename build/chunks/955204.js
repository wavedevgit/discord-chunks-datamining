/** Chunk was on 27805 **/
i.d(t, {
  EP: () => a,
  F7: () => u,
  LG: () => c,
  hn: () => l,
  oX: () => d
});
var n, r, o = i(641033),
  s = i(388032),
  l = ((n = {})[n.ENABLE_POGGERMODE = 0] = "ENABLE_POGGERMODE", n[n.DISABLE_POGGERMODE = 1] = "DISABLE_POGGERMODE", n[n.PING_SOMEONE = 2] = "PING_SOMEONE", n[n.PING_ME = 3] = "PING_ME", n[n.COMBO_MULTI_LEVEL_1 = 4] = "COMBO_MULTI_LEVEL_1", n[n.COMBO_MULTI_LEVEL_2 = 5] = "COMBO_MULTI_LEVEL_2", n[n.COMBO_MULTI_LEVEL_3 = 6] = "COMBO_MULTI_LEVEL_3", n[n.COMBO_MULTI_LEVEL_4 = 7] = "COMBO_MULTI_LEVEL_4", n[n.TOTAL_SCORE_LEVEL_1 = 8] = "TOTAL_SCORE_LEVEL_1", n[n.TOTAL_SCORE_LEVEL_2 = 9] = "TOTAL_SCORE_LEVEL_2", n[n.TOTAL_SCORE_LEVEL_3 = 10] = "TOTAL_SCORE_LEVEL_3", n[n.TOTAL_SCORE_LEVEL_4 = 11] = "TOTAL_SCORE_LEVEL_4", n[n.TOTAL_SCORE_LEVEL_5 = 12] = "TOTAL_SCORE_LEVEL_5", n[n.VISITOR_100 = 13] = "VISITOR_100", n[n.CUSTOMIZE_CONFETTI = 14] = "CUSTOMIZE_CONFETTI", n[n.MORE = 15] = "MORE", n[n.COMBO_VALUE_LEVEL_1 = 16] = "COMBO_VALUE_LEVEL_1", n[n.COMBO_VALUE_LEVEL_2 = 17] = "COMBO_VALUE_LEVEL_2", n[n.COMBO_VALUE_LEVEL_3 = 18] = "COMBO_VALUE_LEVEL_3", n[n.COMBO_VALUE_LEVEL_4 = 19] = "COMBO_VALUE_LEVEL_4", n),
  a = ((r = {})[r.COMMON = 0] = "COMMON", r[r.UNCOMMON = 1] = "UNCOMMON", r[r.RARE = 2] = "RARE", r[r.EPIC = 3] = "EPIC", r[r.LEGENDARY = 4] = "LEGENDARY", r);
let c = {
  0: {
    id: 0,
    name: () => s.NW.string(s.t.CRLcOz),
    description: () => s.NW.string(s.t["9+4/CA"]),
    rarity: 0,
    hideDescriptionUntilUnlock: !1
  },
  1: {
    id: 1,
    name: () => s.NW.string(s.t.PlhJTk),
    description: () => s.NW.string(s.t["+QxFMj"]),
    rarity: 1,
    hideDescriptionUntilUnlock: !1
  },
  13: {
    id: 13,
    name: () => s.NW.string(s.t["+91bDw"]),
    description: () => s.NW.string(s.t["6ZakdX"]),
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    onAction: () => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
  },
  14: {
    id: 14,
    name: () => s.NW.string(s.t.OdenKS),
    description: () => s.NW.string(s.t["06/08P"]),
    rarity: 0,
    hideDescriptionUntilUnlock: !1
  },
  15: {
    id: 15,
    name: () => s.NW.string(s.t["C88+vr"]),
    description: () => s.NW.string(s.t.w4SYND),
    rarity: 1,
    hideDescriptionUntilUnlock: !1
  },
  2: {
    id: 2,
    name: () => s.NW.string(s.t["7q1avL"]),
    description: () => s.NW.string(s.t.XwAgCA),
    rarity: 0,
    hideDescriptionUntilUnlock: !1
  },
  3: {
    id: 3,
    name: () => s.NW.formatToMarkdownString(s.t.NgKcOj, {}),
    description: () => s.NW.string(s.t.jmzQrK),
    rarity: 1,
    hideDescriptionUntilUnlock: !1
  },
  4: {
    id: 4,
    name: () => s.NW.string(s.t.q3ekQ0),
    description: () => s.NW.string(s.t.KDk6IC),
    rarity: 0,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 2
  },
  5: {
    id: 5,
    name: () => s.NW.string(s.t.k6Nlxc),
    description: () => s.NW.string(s.t["A4Bi5+"]),
    rarity: 1,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 4
  },
  6: {
    id: 6,
    name: () => s.NW.string(s.t["EPQN5+"]),
    description: () => s.NW.string(s.t["NS/Qvb"]),
    rarity: 2,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 5
  },
  7: {
    id: 7,
    name: () => s.NW.string(s.t["H/xC9v"]),
    description: () => s.NW.string(s.t.NECb4u),
    rarity: 2,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 7
  },
  8: {
    id: 8,
    name: () => s.NW.string(s.t["24aD8v"]),
    description: () => s.NW.string(s.t.YtKoSU),
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 430 === (0, o.Eo)(e)
  },
  9: {
    id: 9,
    name: () => s.NW.string(s.t["vZm48/"]),
    description: () => s.NW.string(s.t.QKxjeX),
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 555 === (0, o.Eo)(e)
  },
  10: {
    id: 10,
    name: () => s.NW.string(s.t.SxLn19),
    description: () => s.NW.string(s.t["7tuql5"]),
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 898 === (0, o.Eo)(e)
  },
  11: {
    id: 11,
    name: () => s.NW.string(s.t.hK1RPj),
    description: () => s.NW.string(s.t.okzLOT),
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 1337 === (0, o.Eo)(e)
  },
  12: {
    id: 12,
    name: () => s.NW.string(s.t.Pa8olZ),
    description: () => s.NW.string(s.t.KSzHjo),
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 2048 === (0, o.Eo)(e)
  },
  16: {
    id: 16,
    name: () => s.NW.string(s.t.lXhhWV),
    description: () => s.NW.string(s.t.OxvobG),
    rarity: 2,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 64 === e.value
  },
  17: {
    id: 17,
    name: () => s.NW.string(s.t.M4ErfH),
    description: () => s.NW.string(s.t["sjzx+/"]),
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 88 === e.value
  },
  18: {
    id: 18,
    name: () => s.NW.string(s.t.RawXaG),
    description: () => s.NW.string(s.t.iOsWLy),
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 99 === e.value
  },
  19: {
    id: 19,
    name: () => s.NW.string(s.t.irv64O),
    description: () => s.NW.string(s.t.shGZw8),
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 113 === e.value
  }
};

function d(e) {
  return c[e]
}
let u = e => {
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