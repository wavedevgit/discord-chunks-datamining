/** Chunk was on web.js **/
/** chunk id: 21055, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => a
});
var Chunk503461 = require("./503461.js"),
  Chunk190313 = require("./190313.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  get prefix() {
    return this.table.prefix
  }
  withoutLogging() {
    return new a(this.originalPrefix, this.table.tableId, this.table.database, false)
  }
  get(e, t) {
    return this.table.get([e, t])
  }
  getMany(e, t) {
    return this.table.getMany([e], t)
  }
  getRange(e, t, n, r) {
    return this.table.getRange([e, t], [e, n], r)
  }
  getKvEntries() {
    return this.table.getKvEntries()
  }
  getMapEntries() {
    return this.table.getMapEntries()
  }
  getIds(e) {
    return this.table.getChildIds([e])
  }
  getGuildIds() {
    return this.table.getChildIds([])
  }
  getGuildId(e) {
    return this.table.getParentId([null, e])
  }
  put(e, t, n) {
    let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r.Sn.Replace;
    return this.putWithGeneration(e, t, n, null, i)
  }
  putWithGeneration(e, t, n, i) {
    let o = arguments.length > 4 && true !== arguments[4] ? arguments[4] : r.Sn.Replace;
    return this.table.put({
      key: [e, t],
      data: n,
      generation: i
    }, o)
  }
  delete(e, t) {
    switch (arguments.length) {
      case 0:
        return this.table.delete([]);
      case 1:
        return this.table.delete([e]);
      default:
        return this.table.delete([e, t])
    }
  }
  deleteGeneration(e, t) {
    return this.table.deleteGeneration([], e, t)
  }
  transaction(e, t) {
    return this.table.transaction(t => e(new s(t)), t)
  }
  upgradeTransaction(e) {
    return new s(this.table.upgradeTransaction(e))
  }
  getManySyncUnsafe(e, t) {
    return this.table.getManySyncUnsafe([e], t)
  }
  getMapEntriesSyncUnsafe() {
    return this.table.getMapEntriesSyncUnsafe()
  }
  constructor(e, t, n, r = true) {
    o(this, "originalPrefix", true), o(this, "table", true), this.originalPrefix = e, this.table = new i.i([e], t, n, r)
  }
}
class s {
  static fromDatabaseTransaction(e, t, n) {
    return new s(new i.E(e, t, n))
  }
  put(e, t, n) {
    let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r.Sn.Replace;
    this.putWithGeneration(e, t, n, null, i)
  }
  putWithGeneration(e, t, n, i) {
    let o = arguments.length > 4 && true !== arguments[4] ? arguments[4] : r.Sn.Replace;
    return this.state.put({
      key: [e, t],
      data: n,
      generation: i
    }, o)
  }
  delete(e, t) {
    switch (arguments.length) {
      case 0:
        this.state.delete([]);
        break;
      case 1:
        this.state.delete([e]);
        break;
      default:
        this.state.delete([e, t])
    }
  }
  deleteGeneration(e, t) {
    return this.state.deleteGeneration([], e, t)
  }
  constructor(e) {
    o(this, "state", true), this.state = e
  }
}