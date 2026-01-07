/** Chunk was on web.js **/
/** chunk id: 93093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk442837.ZP.Store {
  allGuildIds() {
    return this.guildIds
  }
  isMember(e) {
    return this.guildIds.has(e)
  }
  handleConnectionOpen(e) {
    this.guildIds = new Set([...e.guilds.map(e => e.id), ...e.unavailableGuilds])
  }
  handleCacheLoaded(e) {
    this.guildIds = new Set(e.guilds.map(e => e.id))
  }
  handleCacheLoadedLazy(e) {
    for (let t of e.guilds) this.guildIds.add(t.id)
  }
  handleGuildCreate(e) {
    this.guildIds.add(e.guild.id)
  }
  handleGuildDelete(e) {
    true !== e.guild.unavailable && this.guildIds.delete(e.guild.id)
  }
  constructor() {
    super(i.Z, {
      CACHE_LOADED: e => this.handleCacheLoaded(e),
      CACHE_LOADED_LAZY: e => this.handleCacheLoadedLazy(e),
      CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      GUILD_CREATE: e => this.handleGuildCreate(e),
      GUILD_DELETE: e => this.handleGuildDelete(e)
    }, i.c.Early), a(this, "guildIds", new Set)
  }
}
let s = new o