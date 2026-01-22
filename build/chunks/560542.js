/** Chunk was on web.js **/
/** chunk id: 560542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk723176 = require("./723176.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  async getAll() {
    let e = r.A.guildsRequiringDeletedIdsSync();
    return null == e ? new Set : new Set((await e.getMany()).map(e => e.id))
  }
  handleConnectionOpen(e, t) {
    let {
      guilds: n
    } = e, i = n.filter(e => e.unableToSyncDeletes).map(e => ({
      id: e.id
    }));
    i.length > 0 && r.A.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i)
  }
  handleBackgroundSync(e, t) {
    let {
      guilds: n
    } = e, i = n.filter(e => "partial" === e.data_mode && e.unable_to_sync_deletes).map(e => ({
      id: e.id
    }));
    i.length > 0 && r.A.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i)
  }
  handleGuildCreate(e, t) {
    let {
      guild: n
    } = e;
    n.unableToSyncDeletes && r.A.guildsRequiringDeletedIdsSyncTransaction(t).put({
      id: n.id
    })
  }
  handleDeletedEntityIds(e, t) {
    r.A.guildsRequiringDeletedIdsSyncTransaction(t).delete(e.guild_id)
  }
  resetInMemoryState() {}
  constructor() {
    i(this, "actions", {
      BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
      DELETED_ENTITY_IDS: (e, t) => this.handleDeletedEntityIds(e, t)
    })
  }
}
let s = new a