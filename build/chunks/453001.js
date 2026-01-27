/** Chunk was on web.js **/
/** chunk id: 453001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./446912.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk184989 = require("./184989.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = new Chunk626584.A("BasicChannelCacheStore"),
  c = false;
class u extends Chunk311907.Ay.Store {
  hasChannel(e) {
    return this.channels.has(e)
  }
  hasGuild(e) {
    return this.guilds.has(e)
  }
  getBasicChannel(e) {
    var t;
    return c && l.verbose("getting basic_channel (channel: ".concat(e, ", exists: ").concat(this.channels.has(e), ")")), null != (t = this.channels.get(e)) ? t : null
  }
  getGuildBasicChannels(e) {
    var t;
    return c && l.verbose("getting guild_basic_channels (guild: ".concat(e, ", exists: ").concat(this.guilds.has(e), ")")), null != (t = this.guilds.get(e)) ? t : null
  }
  invalidate(e) {
    this.delete(e)
  }
  restored(e) {
    this.delete(e)
  }
  initialize() {
    this.waitFor(o.A)
  }
  handleCacheLoadedLazy(e) {
    for (let [t, n] of(this.guilds = new Map, this.channels = new Map, e.basicGuildChannels))
      for (let e of (this.guilds.set(t, Object.fromEntries(n.map(e => [e.id, e]))), n)) this.channels.set(e.id, e)
  }
  handleCacheLoadedLazyNoCache(e) {
    this.guilds.clear(), this.channels.clear()
  }
  handleConnectionOpen(e) {
    let t = o.A.allGuildIds();
    for (let e of this.guilds.keys()) t.has(e) || this.delete(e)
  }
  handleLogout(e) {
    this.guilds.clear(), this.channels.clear()
  }
  delete(e) {
    var t;
    for (let n in c && l.verbose("deleting basic_channels (guild: ".concat(e, ", exists: ").concat(this.guilds.has(e), ")")), null != (t = this.guilds.get(e)) ? t : {}) this.channels.delete(n);
    this.guilds.delete(e)
  }
  constructor() {
    super(i.h, {
      CACHE_LOADED_LAZY_NO_CACHE: e => this.handleCacheLoadedLazyNoCache(e),
      CACHE_LOADED_LAZY: e => this.handleCacheLoadedLazy(e),
      CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      LOGOUT: e => this.handleLogout(e)
    }), s(this, "channels", new Map), s(this, "guilds", new Map)
  }
}
let d = new u