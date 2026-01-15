/** Chunk was on web.js **/
/** chunk id: 176354, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B6: () => S,
  ZP: () => v,
  nY: () => T,
  qc: () => I
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk738774 = require("./738774.js"),
  Chunk906411 = require("./906411.js"),
  Chunk889564 = require("./889564.js"),
  Chunk131704 = require("./131704.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk563114 = require("./563114.js"),
  Chunk956664 = require("./956664.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js");
let h = 2097152,
  m = new Set([Chunk185923.Z5.PREMIUM_LOCKED, Chunk185923.Z5.ROLE_SUBSCRIPTION_LOCKED]),
  g = new Set([...m, Chunk185923.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, Chunk185923.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
  E = new Set([Chunk185923.Z5.DISALLOW_CUSTOM, Chunk185923.Z5.DISALLOW_EXTERNAL, Chunk185923.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, Chunk185923.Z5.ONLY_GUILD_EMOJIS_ALLOWED]);

function b(e) {
  return e.type === i.B.GUILD || null != e.guildId
}

function y(e, t) {
  return null != e && null != t && (!b(e) || t === e.guildId)
}

function O(e) {
  let {
    emoji: t,
    channel: n,
    guildId: i = null == n ? true : n.getGuildId(),
    intention: c,
    forceIncludeExternalGuilds: u
  } = e;
  if (!b(t)) return null;
  if (c === _.Hz.GUILD_PROFILE) return _.Z5.DISALLOW_CUSTOM;
  let d = null != n && (0, o.zi)(n.type),
    h = null != n && (0, o.bw)(n.type),
    m = y(t, i),
    g = s.Z.can(p.Plq.USE_EXTERNAL_EMOJIS, n);
  if (c === _.Hz.COMMUNITY_CONTENT) return m && null != t.guildId && t.available ? null : _.Z5.DISALLOW_EXTERNAL;
  if (!(0, _.Gt)(c) && !y(t, i) && !u || (d || h) && !m && !g) return _.Z5.DISALLOW_EXTERNAL;
  if (null != t.id && !t.available) return _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
  let E = l.default.getCurrentUser();
  if (!f.ZP.canUseEmojisEverywhere(E) && !m) {
    if (c === _.Hz.STATUS) return _.Z5.PREMIUM_LOCKED;
    else if (!t.managed) return _.Z5.PREMIUM_LOCKED
  }
  return (0, a.Fv)(t, null != i ? i : true) ? (0, r.Ol)(t.guildId) ? _.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : _.Z5.ROLE_SUBSCRIPTION_LOCKED : !t.animated || f.ZP.canUseAnimatedEmojis(E) || (0, a.yH)(t) ? null : _.Z5.PREMIUM_LOCKED
}
let v = {
  sanitizeEmojiName(e) {
    for (e = e.replace(_.sW, "").slice(0, _.Yc); e.length < 2;) e += "_";
    return e
  },
  filterUnsupportedEmojis: Chunk563114.Z.filterUnsupportedEmojis,
  getURL: Chunk563114.Z.getURL,
  isInternalEmojiForGuildId: y,
  getEmojiUnavailableReason: O,
  isCustomEmoji: b,
  getEmojiUnavailableReasons(e) {
    let {
      categoryEmojis: t,
      channel: n,
      guildId: r,
      intention: i
    } = e, a = new Set, o = [], s = 0, l = false;
    for (let e of t) {
      let t = O({
        emoji: e,
        channel: n,
        guildId: r,
        intention: i
      });
      if (null == t) {
        o.push(e);
        continue
      }
      E.has(t) || o.push(e), g.has(t) && (null != e.id && a.add(e.id), m.has(t) && (l || t !== _.Z5.PREMIUM_LOCKED || (l = true), s++))
    }
    return {
      emojisDisabled: a,
      emojisUnfiltered: o,
      emojisPremiumLockedCount: s,
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
    } = e, a = false, o = 0;
    for (let e of t) {
      let t = O({
        emoji: e,
        channel: n,
        intention: i,
        guildId: r
      });
      t === _.Z5.PREMIUM_LOCKED ? (a = true, o++) : t === _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && o++
    }
    return a && o === t.length
  },
  isEmojiFilteredOrLocked(e) {
    return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e)
  },
  isEmojiDisabled(e) {
    let t = O(e);
    return g.has(t)
  },
  isFileTooBig: e => e.size > h,
  isDataTooBig: e => (0, d.QB)(e) > _.h_
};
async function S(e) {
  return await u.Z.getEmojiColors(e)
}

function I(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 32,
    {
      id: n,
      name: r,
      animated: i
    } = e;
  return null != n ? c.ZP.getEmojiURL({
    id: n,
    size: t,
    animated: null != i && i
  }) : u.Z.getURL(r)
}

function T(e) {
  return "allNamesString" in e ? e.allNamesString : ":".concat(e.name, ":")
}