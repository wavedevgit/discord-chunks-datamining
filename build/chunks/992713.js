/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => P
}), n(47120), n(230036);
var r = n(108131),
  i = n.n(r),
  o = n(442837),
  a = n(570140),
  s = n(147913),
  l = n(662896),
  c = n(710845),
  u = n(339085),
  d = n(926491),
  f = n(592125),
  p = n(430824),
  _ = n(709054),
  h = n(38618);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = 2e3,
  E = new c.Z("EntityVersionsManager");
class v extends s.Z {
  _initialize() {
    a.Z.subscribe("CONNECTION_OPEN", y)
  }
  _terminate() {
    a.Z.unsubscribe("CONNECTION_OPEN", y)
  }
  constructor(...e) {
    super(...e), m(this, "actions", {
      GUILD_CREATE: O,
      DELETED_ENTITY_IDS: b
    })
  }
}

function b(e) {
  var t;
  let n = null === (t = p.Z.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
  E.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(n, ")")), o.ZP.Emitter.batched(() => {
    null != e.channels && N(e.guild_id, new Set(e.channels)), null != e.roles && A(e.guild_id, new Set(e.roles)), null != e.emojis && C(e.guild_id, new Set(e.emojis)), null != e.stickers && R(e.guild_id, new Set(e.stickers))
  })
}

function y() {
  l.Z.getAll().then(e => {
    e.forEach(e => S(e))
  })
}

function O(e) {
  let {
    guild: t
  } = e;
  t.unableToSyncDeletes && S(t.id)
}

function S(e) {
  setTimeout(() => I(e), Math.ceil(Math.random() * g))
}

function I(e) {
  var t, n, r;
  let i = null === (t = p.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
  E.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(i, ")"));
  let o = T(Object.keys(f.Z.getMutableBasicGuildChannelsForGuild(e))),
    a = T(Object.keys(p.Z.getRoles(e))),
    s = T(u.ZP.getGuildEmoji(e).map(e => e.id)),
    l = T(null !== (r = null === (n = d.Z.getStickersByGuildId(e)) || void 0 === n ? void 0 : n.map(e => e.id)) && void 0 !== r ? r : []);
  h.Z.getSocket().getDeletedEntityIdsNotMatchingHash(e, o, a, s, l)
}

function T(e) {
  return i().v3(e.sort().join(",")).toString()
}

function N(e, t) {
  let n = _.default.keys(f.Z.getMutableBasicGuildChannelsForGuild(e));
  E.fileOnly("syncChannels", {
    channelIdsInMemory: n,
    channelIdsFromServer: t
  }), n.forEach(n => {
    t.has(n) || a.Z.dispatch({
      type: "CHANNEL_DELETE",
      channel: {
        guild_id: e,
        id: n,
        parent_id: void 0
      }
    })
  })
}

function A(e, t) {
  _.default.keys(p.Z.getRoles(e)).forEach(n => {
    t.has(n) || a.Z.dispatch({
      type: "GUILD_ROLE_DELETE",
      guildId: e,
      roleId: n
    })
  })
}

function C(e, t) {
  let n = u.ZP.getGuildEmoji(e),
    r = n.filter(e => t.has(e.id));
  n.length !== r.length && a.Z.dispatch({
    type: "GUILD_EMOJIS_UPDATE",
    guildId: e,
    emojis: r
  })
}

function R(e, t) {
  var n;
  let r = null !== (n = d.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [],
    i = r.filter(e => t.has(e.id));
  r.length !== i.length && a.Z.dispatch({
    type: "GUILD_STICKERS_UPDATE",
    guildId: e,
    stickers: i
  })
}
let P = new v