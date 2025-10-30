/** Chunk was on web.js **/
/** chunk id: 149694, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./953529.js"), require("./388685.js"), require("./781311.js"), require("./539854.js");
var Chunk732870 = require("./732870.js"),
  Chunk633302 = require("./633302.js"),
  Chunk429091 = require("./429091.js"),
  Chunk430824 = require("./430824.js"),
  Chunk373228 = require("./373228.js"),
  Chunk378233 = require("./378233.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  return {
    id: e.id,
    tags: e.tags,
    type: e.type,
    name: e.name,
    description: e.description,
    format_type: e.format_type,
    guild_id: e.guild_id,
    available: e.available,
    version: e.version,
    user_id: e.user_id,
    [r.O]: "GuildSticker"
  }
}

function p(e) {
  let t = {};
  for (let n of e) t[n.id] = _(n);
  return t
}

function h(e, t) {
  let n = [],
    {
      tags: r
    } = t,
    a = {
      type: s.MO.STICKER_NAME,
      value: t.name.trim().toLocaleLowerCase()
    };
  if (n.push(a), null != r) {
    let t = {
      type: s.MO.TAG,
      value: r.trim().toLocaleLowerCase()
    };
    n.push(t);
    let a = o.Z.getGuild(e);
    if (null != a) {
      let e = a.name.trim().toLocaleLowerCase();
      null != e && "" !== e && n.push({
        type: s.MO.GUILD_NAME,
        value: e
      })
    }
    let l = i.ZP.getByName(r);
    null != l && (n.push({
      type: s.MO.CORRELATED_EMOJI,
      value: l.surrogates
    }), l.forEachDiversity(e => n.push({
      type: s.MO.CORRELATED_EMOJI,
      value: e.surrogates
    })))
  }
  return n
}
class m extends Chunk429091.d {
  constructor(...e) {
    super(...e), c(this, "getAllGuildStickers", this.memoized(e => {
      let t = new Map;
      for (let n in e) t.set(n, Object.values(e[n].root));
      return t
    })), c(this, "getStickersByGuildId", this.memoizedPartition((e, t) => Object.values(t))), c(this, "getStickerMetadataMap", this.memoized(e => {
      let t = new Map;
      for (let n in e)
        for (let [r, i] of Object.entries(e[n].root)) t.set(r, h(n, i));
      return t
    })), c(this, "getStickerById", this.memoizedSecondaryIndex())
  }
}
c(m, "displayName", "GuildStickersStore");
let g = new m({
  LOGOUT: (e, t) => t.reset(),
  BACKGROUND_SYNC: (e, t) => t.reset(),
  CONNECTION_OPEN: (e, t) => {
    let n = new Set(t.getPartitionKeys());
    for (let r of e.guilds) n.delete(r.id), null != r.stickers.items && t.setPartition(r.id, p(r.stickers.items));
    for (let t of e.unavailableGuilds) n.delete(t);
    for (let e of n) t.removePartition(e)
  },
  GUILD_CREATE: (e, t) => {
    var n;
    if (null == e.guild.joined_at || null == e.guild.stickers.items) returnfalse;
    t.setPartition(e.guild.id, p(null != (n = e.guild.stickers.items) ? n : []))
  },
  GUILD_DELETE: (e, t) => {
    t.removePartition(e.guild.id)
  },
  GUILD_STICKERS_CREATE_SUCCESS: (e, t) => {
    t.set(e.guildId, e.sticker.id, _(e.sticker))
  },
  STICKER_FETCH_SUCCESS: (e, t) => {
    if (!(0, l.J8)(e.sticker)) returnfalse;
    t.set(e.sticker.guild_id, e.sticker.id, _(e.sticker))
  },
  GUILD_STICKERS_UPDATE: (e, t) => {
    let n = t.getPartition(e.guildId),
      r = p(e.stickers);
    if (null != n)
      for (let e in r) {
        let t = r[e],
          i = n[e];
        null != i && null == t.user_id && null != i.user_id && (r[e] = f(u({}, t), {
          user_id: i.user_id
        }))
      }
    t.setPartition(e.guildId, r)
  },
  CACHED_STICKERS_LOADED: (e, t) => {
    for (let [n, r] of e.stickers) t.setPartition(n, p(r))
  },
  GUILD_STICKERS_FETCH_SUCCESS: (e, t) => {
    t.setPartition(e.guildId, p(e.stickers))
  }
}, "typescript")