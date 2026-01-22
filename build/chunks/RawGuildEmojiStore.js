/** Chunk was on web.js **/
/** chunk id: 608960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk810531 = require("./810531.js"),
  Chunk548965 = require("./548965.js"),
  Chunk952526 = require("./952526.js"),
  Chunk770335 = require("./770335.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e, t) {
  let n = {};
  for (let i of t) n[i.id] = {
    [r.L]: "RawGuildEmoji",
    guildId: e,
    id: i.id,
    animated: i.animated,
    name: i.name,
    require_colons: i.require_colons,
    available: i.available,
    roles: i.roles,
    managed: i.managed,
    version: i.version,
    type: s.i.GUILD
  };
  return n
}
class c extends Chunk952526.U {
  getGuildEmojis(e) {
    return this.getNullablePartition(e)
  }
}
o(c, "displayName", "RawGuildEmojiStore");
let u = new c({
  LOGOUT: (e, t) => t.reset(),
  BACKGROUND_SYNC: (e, t) => t.reset(),
  CONNECTION_OPEN: (e, t) => {
    t.reset(t => {
      for (let n of e.guilds) null != n.emojis.items && (t[n.id] = l(n.id, n.emojis.items))
    })
  },
  OVERLAY_INITIALIZE: (e, t) => {
    t.reset(t => {
      Object.entries(e.emojis).forEach(e => {
        let [n, r] = e;
        t[n] = l(n, r)
      })
    })
  },
  CACHED_EMOJIS_LOADED: (e, t) => {
    for (let [n, r] of e.emojis) t.setPartition(n, l(n, r))
  },
  GUILD_CREATE: (e, t) => {
    var n;
    t.setPartition(e.guild.id, l(e.guild.id, null != (n = e.guild.emojis.items) ? n : []))
  },
  GUILD_UPDATE: (e, t) => {
    t.setPartition(e.guild.id, l(e.guild.id, e.guild.emojis))
  },
  GUILD_EMOJIS_UPDATE: (e, t) => {
    t.setPartition(e.guildId, l(e.guildId, e.emojis))
  },
  GUILD_DELETE: (e, t) => {
    t.removePartition(e.guild.id)
  }
}, Chunk548965.ys.getCachedBridgedStoreMode())