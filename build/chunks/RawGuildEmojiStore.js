/** Chunk was on web.js **/
/** chunk id: 608960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk810531 = require("./810531.js"),
  Chunk942269 = require("./942269.js"),
  Chunk770335 = require("./770335.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e, t) {
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
    type: a.i.GUILD
  };
  return n
}
class l extends Chunk942269.yW {
  stateWrapper() {
    return this.database
  }
  getGuildEmojis(e) {
    return this.database.getNullablePartition(e)
  }
  constructor(...e) {
    super(...e), o(this, "database", this.addKKVDatabase("guild_emojis"))
  }
}
o(l, "displayName", "RawGuildEmojiStore");
let c = new l({
  LOGOUT: (e, t) => t.clear(),
  BACKGROUND_SYNC: (e, t) => t.clear(),
  CONNECTION_OPEN: (e, t) => {
    for (let n of (t.clear(), e.guilds)) null != n.emojis.items && t.setPartition(n.id, s(n.id, n.emojis.items))
  },
  OVERLAY_INITIALIZE: (e, t) => {
    t.clear(), Object.entries(e.emojis).forEach(e => {
      let [n, r] = e;
      t.setPartition(n, s(n, r))
    })
  },
  CACHED_EMOJIS_LOADED: (e, t) => {
    for (let [n, r] of e.emojis) t.setPartition(n, s(n, r))
  },
  GUILD_CREATE: (e, t) => {
    var n;
    t.setPartition(e.guild.id, s(e.guild.id, null != (n = e.guild.emojis.items) ? n : []))
  },
  GUILD_UPDATE: (e, t) => {
    t.setPartition(e.guild.id, s(e.guild.id, e.guild.emojis))
  },
  GUILD_EMOJIS_UPDATE: (e, t) => {
    t.setPartition(e.guildId, s(e.guildId, e.emojis))
  },
  GUILD_DELETE: (e, t) => {
    t.removePartition(e.guild.id)
  }
})