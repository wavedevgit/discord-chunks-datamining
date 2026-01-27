/** Chunk was on web.js **/
/** chunk id: 94350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
}), require("./896048.js"), require("./638769.js");
var Chunk181370 = require("./181370.js"),
  i = require.n(Chunk181370),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk560542 = require("./560542.js"),
  Chunk626584 = require("./626584.js"),
  Chunk508675 = require("./508675.js"),
  Chunk679382 = require("./679382.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk661191 = require("./661191.js"),
  Chunk142120 = require("./142120.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = 2e3,
  y = new Chunk626584.A("EntityVersionsManager");
class b extends Chunk439372.A {
  _initialize() {
    o.h.subscribe("CONNECTION_OPEN", v)
  }
  _terminate() {
    o.h.unsubscribe("CONNECTION_OPEN", v)
  }
  constructor(...e) {
    super(...e), g(this, "actions", {
      GUILD_CREATE: A,
      DELETED_ENTITY_IDS: O
    })
  }
}

function O(e) {
  var t;
  let n = null == (t = _.A.getGuild(e.guild_id)) ? true : t.name;
  y.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(n, ")")), a.Ay.Emitter.batched(() => {
    null != e.channels && C(e.guild_id, new Set(e.channels)), null != e.roles && N(e.guild_id, new Set(e.roles)), null != e.emojis && w(e.guild_id, new Set(e.emojis)), null != e.stickers && R(e.guild_id, new Set(e.stickers))
  })
}

function v() {
  l.A.getAll().then(e => {
    e.forEach(e => I(e))
  })
}

function A(e) {
  let {
    guild: t
  } = e;
  t.unableToSyncDeletes && I(t.id)
}

function I(e) {
  setTimeout(() => S(e), Math.ceil(Math.random() * E))
}

function S(e) {
  var t, n, r;
  let i = null == (n = _.A.getGuild(e)) ? true : n.name;
  y.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(i, ")"));
  let a = T(Object.keys(f.A.getMutableBasicGuildChannelsForGuild(e))),
    o = T(p.A.getSortedRoles(e).map(e => e.id)),
    s = T(u.Ay.getGuildEmoji(e).map(e => e.id)),
    l = T(null != (t = null == (r = d.A.getStickersByGuildId(e)) ? true : r.map(e => e.id)) ? t : []);
  m.A.getSocket().getDeletedEntityIdsNotMatchingHash(e, a, o, s, l)
}

function T(e) {
  return i().v3(e.sort().join(",")).toString()
}

function C(e, t) {
  let n = h.default.keys(f.A.getMutableBasicGuildChannelsForGuild(e));
  y.fileOnly("syncChannels", {
    channelIdsInMemory: n,
    channelIdsFromServer: t
  }), n.forEach(n => {
    t.has(n) || o.h.dispatch({
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
  h.default.keys(p.A.getUnsafeMutableRoles(e)).forEach(n => {
    t.has(n) || o.h.dispatch({
      type: "GUILD_ROLE_DELETE",
      guildId: e,
      roleId: n
    })
  })
}

function w(e, t) {
  let n = u.Ay.getGuildEmoji(e),
    r = n.filter(e => t.has(e.id));
  n.length !== r.length && o.h.dispatch({
    type: "GUILD_EMOJIS_UPDATE",
    guildId: e,
    emojis: r
  })
}

function R(e, t) {
  var n;
  let r = null != (n = d.A.getStickersByGuildId(e)) ? n : [],
    i = r.filter(e => t.has(e.id));
  r.length !== i.length && o.h.dispatch({
    type: "GUILD_STICKERS_UPDATE",
    guildId: e,
    stickers: i
  })
}
let P = new b