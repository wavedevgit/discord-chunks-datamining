/** Chunk was on web.js **/
/** chunk id: 489033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./804061.js");
var Chunk710845 = require("./710845.js"),
  Chunk287328 = require("./287328.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new Chunk710845.Z("GuildEmojis");
class s {
  async getAsync(e) {
    let t = performance.now(),
      n = await i.Z.emojis(e).getMapEntries(),
      r = performance.now();
    return o.log("asynchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
  }
  handleConnectionOpen(e, t) {
    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
  }
  handleGuildCreate(e, t) {
    this.handleOneGuildCreate(e.guild, t)
  }
  handleGuildUpdate(e, t) {
    this.replace(e.guild.id, e.guild.emojis, t)
  }
  handleGuildDelete(e, t) {
    this.delete(e.guild.id, t)
  }
  handleGuildEmojisUpdate(e, t) {
    this.replace(e.guildId, e.emojis, t)
  }
  handleBackgroundSync(e, t) {
    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.emojis.map(e => {
      if ("unavailable" === e.dataMode) return Promise.resolve();
      "full" === e.dataMode ? (o.verbose("Replacing ".concat(e.entities.length, " emojis for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (o.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " emojis for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
    })))
  }
  handleOneGuildCreate(e, t) {
    switch (e.emojis.op) {
      case "full_sync":
        this.replace(e.id, e.emojis.items, t);
        break;
      case "update":
        this.update(e.id, e.emojis.writes, e.emojis.deletes, t);
        break;
      default:
        e.emojis;
        return
    }
  }
  resetInMemoryState() {}
  replace(e, t, n) {
    i.Z.emojisTransaction(n).replaceAll(e, t)
  }
  delete(e, t) {
    i.Z.emojisTransaction(t).delete(e)
  }
  update(e, t, n, r) {
    let a = i.Z.emojisTransaction(r);
    for (let r of (a.putAll(e, t), n)) a.delete(e, r)
  }
  constructor() {
    a(this, "actions", {
      BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
      GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
      GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
      GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
    })
  }
}
let l = new s