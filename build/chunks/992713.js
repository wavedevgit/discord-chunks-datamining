/** Chunk was on web.js **/
/** chunk id: 992713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./642613.js");
var Chunk108131 = require("./108131.js"),
  i = require.n(Chunk108131),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk662896 = require("./662896.js"),
  Chunk710845 = require("./710845.js"),
  Chunk339085 = require("./339085.js"),
  Chunk926491 = require("./926491.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk709054 = require("./709054.js"),
  Chunk38618 = require("./38618.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = 2e3,
  b = new Chunk710845.Z("EntityVersionsManager");
class y extends Chunk147913.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", v)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CONNECTION_OPEN", v)
  }
  constructor(...e) {
    super(...e), g(this, "actions", {
      GUILD_CREATE: S,
      DELETED_ENTITY_IDS: O
    })
  }
}

function O(e) {
  var t;
  let n = null == (t = _.Z.getGuild(e.guild_id)) ? true : t.name;
  b.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(n, ")")), a.ZP.Emitter.batched(() => {
    null != e.channels && A(e.guild_id, new Set(e.channels)), null != e.roles && N(e.guild_id, new Set(e.roles)), null != e.emojis && P(e.guild_id, new Set(e.emojis)), null != e.stickers && R(e.guild_id, new Set(e.stickers))
  })
}

function v() {
  Chunk662896.Z.getAll().then(e => {
    e.forEach(e => I(e))
  })
}

function S(e) {
  let {
    guild: t
  } = e;
  t.unableToSyncDeletes && I(t.id)
}

function I(e) {
  setTimeout(() => T(e), Math.ceil(Math.random() * E))
}

function T(e) {
  var t, n, r;
  let i = null == (t = _.Z.getGuild(e)) ? true : t.name;
  b.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(i, ")"));
  let a = C(Object.keys(f.Z.getMutableBasicGuildChannelsForGuild(e))),
    o = C(p.Z.getSortedRoles(e).map(e => e.id)),
    s = C(u.ZP.getGuildEmoji(e).map(e => e.id)),
    l = C(null != (r = null == (n = d.Z.getStickersByGuildId(e)) ? true : n.map(e => e.id)) ? r : []);
  h.Z.getSocket().getDeletedEntityIdsNotMatchingHash(e, a, o, s, l)
}

function C(e) {
  return i().v3(e.sort().join(",")).toString()
}

function A(e, t) {
  let n = m.default.keys(f.Z.getMutableBasicGuildChannelsForGuild(e));
  b.fileOnly("syncChannels", {
    channelIdsInMemory: n,
    channelIdsFromServer: t
  }), n.forEach(n => {
    t.has(n) || o.Z.dispatch({
      type: "CHANNEL_DELETE",
      channel: {
        guild_id: e,
        id: n,
        parent_id: true
      }
    })
  })
}

function N(e, t) {
  m.default.keys(p.Z.getUnsafeMutableRoles(e)).forEach(n => {
    t.has(n) || o.Z.dispatch({
      type: "GUILD_ROLE_DELETE",
      guildId: e,
      roleId: n
    })
  })
}

function P(e, t) {
  let n = u.ZP.getGuildEmoji(e),
    r = n.filter(e => t.has(e.id));
  n.length !== r.length && o.Z.dispatch({
    type: "GUILD_EMOJIS_UPDATE",
    guildId: e,
    emojis: r
  })
}

function R(e, t) {
  var n;
  let r = null != (n = d.Z.getStickersByGuildId(e)) ? n : [],
    i = r.filter(e => t.has(e.id));
  r.length !== i.length && o.Z.dispatch({
    type: "GUILD_STICKERS_UPDATE",
    guildId: e,
    stickers: i
  })
}
let D = new y