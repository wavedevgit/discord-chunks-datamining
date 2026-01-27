/** Chunk was on web.js **/
/** chunk id: 919638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk71393 = require("./71393.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Chunk626584.A("GuildAvailabilityStore"),
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
  let t = s.A.getGuild(e.guildId),
    n = "???";
  null != t && null != t.name && (n = t.name), c.warn("Guild has gone unavailable: ".concat(e.guildId, " (").concat(n, ")")), u.add(e.guildId)
}

function _(e) {
  if (!u.has(e.guild.id)) returnfalse;
  u.delete(e.guild.id), c.info("Guild has become available: ".concat(e.guild.id))
}

function h(e) {
  true !== e.guild.unavailable && u.delete(e.guild.id)
}
class m extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A)
  }
  isUnavailable(e) {
    return null != e && u.has(e)
  }
  get totalGuilds() {
    return s.A.getGuildCount() + u.size
  }
  get totalUnavailableGuilds() {
    return u.size
  }
  get unavailableGuilds() {
    return Array.from(u)
  }
}
l(m, "displayName", "GuildAvailabilityStore");
let g = new m(Chunk73153.h, {
  CONNECTION_OPEN: d,
  OVERLAY_INITIALIZE: d,
  GUILD_UNAVAILABLE: p,
  GUILD_DELETE: h,
  GUILD_CREATE: _,
  GUILD_UPDATE: _,
  GUILD_GEO_RESTRICTED: f
})