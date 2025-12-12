/** Chunk was on web.js **/
/** chunk id: 856472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./804061.js");
var Chunk710845 = require("./710845.js"),
  Chunk287328 = require("./287328.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = new Chunk710845.Z("GuildStickers");
class s {
  async getAsync(e) {
    let t = performance.now(),
      n = await i.Z.stickers(e).getMapEntries(),
      r = performance.now();
    return a.log("asynchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
  }
  handleConnectionOpen(e, t) {
    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
  }
  handleGuildCreate(e, t) {
    this.handleOneGuildCreate(e.guild, t)
  }
  handleGuildUpdate(e, t) {
    this.replace(e.guild.id, e.guild.stickers, t)
  }
  handleGuildDelete(e, t) {
    this.delete(e.guild.id, t)
  }
  handleGuildStickersUpdate(e, t) {
    this.replace(e.guildId, e.stickers, t)
  }
  handleBackgroundSync(e, t) {
    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
      if ("unavailable" === e.dataMode) return Promise.resolve();
      "full" === e.dataMode ? (a.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (a.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
    })))
  }
  handleOneGuildCreate(e, t) {
    let {
      id: n,
      stickers: r
    } = e;
    switch (r.op) {
      case "full_sync":
        this.replace(n, r.items, t);
        break;
      case "update":
        this.update(n, r.writes, r.deletes, t)
    }
  }
  resetInMemoryState() {}
  replace(e, t, n) {
    i.Z.stickersTransaction(n).replaceAll(e, t)
  }
  delete(e, t) {
    i.Z.stickersTransaction(t).delete(e)
  }
  update(e, t, n, r) {
    let o = i.Z.stickersTransaction(r);
    for (let r of (o.putAll(e, t), n)) o.delete(e, r)
  }
  constructor() {
    o(this, "actions", {
      BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
      GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
      GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
      GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
    })
  }
}
let l = new s