/** Chunk was on web.js **/
/** chunk id: 486472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk430824 = require("./430824.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Chunk710845.Z("GuildAvailabilityStore"),
  u = new Set;

function d(e) {
  u = new Set(e.unavailableGuilds), e.unavailableGuilds.length > 0 && c.warn("".concat(e.unavailableGuilds.length, " guilds are unavailable on connection open: ").concat(e.unavailableGuilds))
}

function f(e) {
  if (!u.has(e.guildId)) returnfalse;
  u.delete(e.guildId)
}

function p(e) {
  if (u.has(e.guildId)) returnfalse;
  let t = s.Z.getGuild(e.guildId),
    n = "???";
  null != t && null != t.name && (n = t.name), c.warn("Guild has gone unavailable: ".concat(e.guildId, " (").concat(n, ")")), u.add(e.guildId)
}

function _(e) {
  if (!u.has(e.guild.id)) returnfalse;
  u.delete(e.guild.id), c.info("Guild has become available: ".concat(e.guild.id))
}

function m(e) {
  true !== e.guild.unavailable && u.delete(e.guild.id)
}
class h extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z)
  }
  isUnavailable(e) {
    return null != e && u.has(e)
  }
  get totalGuilds() {
    return Chunk430824.Z.getGuildCount() + u.size
  }
  get totalUnavailableGuilds() {
    return u.size
  }
  get unavailableGuilds() {
    return Array.from(u)
  }
}
l(h, "displayName", "GuildAvailabilityStore");
let g = new h(Chunk570140.Z, {
  CONNECTION_OPEN: d,
  OVERLAY_INITIALIZE: d,
  GUILD_UNAVAILABLE: p,
  GUILD_DELETE: m,
  GUILD_CREATE: _,
  GUILD_UPDATE: _,
  GUILD_GEO_RESTRICTED: f
})