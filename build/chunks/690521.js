/** Chunk was on web.js **/
/** chunk id: 690521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => v,
  D_: () => A,
  Ez: () => I,
  N: () => S
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./321073.js");
var Chunk836039 = require("./836039.js"),
  Chunk770335 = require("./770335.js"),
  Chunk492494 = require("./492494.js"),
  Chunk95701 = require("./95701.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk300703 = require("./300703.js"),
  Chunk515718 = require("./515718.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js");
let h = 2097152,
  m = new Set([Chunk307731.Am.PREMIUM_LOCKED, Chunk307731.Am.ROLE_SUBSCRIPTION_LOCKED]),
  g = new Set([...m, Chunk307731.Am.GUILD_SUBSCRIPTION_UNAVAILABLE, Chunk307731.Am.ROLE_SUBSCRIPTION_UNAVAILABLE]),
  E = new Set([Chunk307731.Am.DISALLOW_CUSTOM, Chunk307731.Am.DISALLOW_EXTERNAL, Chunk307731.Am.GUILD_SUBSCRIPTION_UNAVAILABLE, Chunk307731.Am.ONLY_GUILD_EMOJIS_ALLOWED]);

function y(e) {
  return e.type === i.i.GUILD || null != e.guildId
}

function b(e, t) {
  return null != e && null != t && (!y(e) || t === e.guildId)
}

function O(e) {
  let {
    emoji: t,
    channel: n,
    guildId: i = null == n ? true : n.getGuildId(),
    intention: c,
    forceIncludeExternalGuilds: u
  } = e;
  if (!y(t)) return null;
  if (c === _.b_.GUILD_PROFILE) return _.Am.DISALLOW_CUSTOM;
  let d = null != n && (0, s.ke)(n.type),
    h = null != n && (0, s.ay)(n.type),
    m = b(t, i),
    g = o.A.can(p.xBc.USE_EXTERNAL_EMOJIS, n);
  if (c === _.b_.COMMUNITY_CONTENT) return m && null != t.guildId && t.available ? null : _.Am.DISALLOW_EXTERNAL;
  if (!(0, _.Re)(c) && !b(t, i) && !u || (d || h) && !m && !g) return _.Am.DISALLOW_EXTERNAL;
  if (null != t.id && !t.available) return _.Am.GUILD_SUBSCRIPTION_UNAVAILABLE;
  let E = l.default.getCurrentUser();
  if (!f.Ay.canUseEmojisEverywhere(E) && !m) {
    if (c === _.b_.STATUS) return _.Am.PREMIUM_LOCKED;
    else if (!t.managed) return _.Am.PREMIUM_LOCKED
  }
  return (0, a.JN)(t, null != i ? i : true) ? (0, r.tE)(t.guildId) ? _.Am.ROLE_SUBSCRIPTION_UNAVAILABLE : _.Am.ROLE_SUBSCRIPTION_LOCKED : !t.animated || f.Ay.canUseAnimatedEmojis(E) || (0, a.kT)(t) ? null : _.Am.PREMIUM_LOCKED
}
let v = {
  sanitizeEmojiName(e) {
    for (e = e.replace(_.ZT, "").slice(0, _.zj); e.length < 2;) e += "_";
    return e
  },
  filterUnsupportedEmojis: Chunk300703.A.filterUnsupportedEmojis,
  getURL: Chunk300703.A.getURL,
  isInternalEmojiForGuildId: b,
  getEmojiUnavailableReason: O,
  isCustomEmoji: y,
  getEmojiUnavailableReasons(e) {
    let {
      categoryEmojis: t,
      channel: n,
      guildId: r,
      intention: i
    } = e, a = new Set, s = [], o = 0, l = false;
    for (let e of t) {
      let t = O({
        emoji: e,
        channel: n,
        guildId: r,
        intention: i
      });
      if (null == t) {
        s.push(e);
        continue
      }
      E.has(t) || s.push(e), g.has(t) && (null != e.id && a.add(e.id), m.has(t) && (l || t !== _.Am.PREMIUM_LOCKED || (l = true), o++))
    }
    return {
      emojisDisabled: a,
      emojisUnfiltered: s,
      emojisPremiumLockedCount: o,
      emojiNitroLocked: l
    }
  },
  isEmojiFiltered(e) {
    let t = O(e);
    return E.has(t)
  },
  isEmojiPremiumLocked(e) {
    let t = O(e);
    return m.has(t)
  },
  isEmojiCategoryNitroLocked(e) {
    let {
      categoryEmojis: t,
      channel: n,
      guildId: r,
      intention: i
    } = e, a = false, s = 0;
    for (let e of t) {
      let t = O({
        emoji: e,
        channel: n,
        intention: i,
        guildId: r
      });
      t === _.Am.PREMIUM_LOCKED ? (a = true, s++) : t === _.Am.GUILD_SUBSCRIPTION_UNAVAILABLE && s++
    }
    return a && s === t.length
  },
  isEmojiFilteredOrLocked(e) {
    return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e)
  },
  isEmojiDisabled(e) {
    let t = O(e);
    return g.has(t)
  },
  isFileTooBig: e => e.size > h,
  isDataTooBig: e => (0, d.EW)(e) > _.W5
};
async function A(e) {
  return await u.A.getEmojiColors(e)
}

function I(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 32,
    {
      id: n,
      name: r,
      animated: i
    } = e;
  return null != n ? c.Ay.getEmojiURL({
    id: n,
    size: t,
    animated: null != i && i
  }) : u.A.getURL(r)
}

function S(e) {
  return "allNamesString" in e ? e.allNamesString : ":".concat(e.name, ":")
}