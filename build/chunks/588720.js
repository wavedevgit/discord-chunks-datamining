/** Chunk was on web.js **/
/** chunk id: 588720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk503461 = require("./503461.js"),
  Chunk190313 = require("./190313.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  get prefix() {
    return this.table.prefix
  }
  withoutLogging() {
    return new o(this.originalPrefix, this.table.tableId, this.table.database, false)
  }
  get(e) {
    return this.table.get([e])
  }
  getMany(e) {
    return this.table.getMany([], e)
  }
  getRange(e, t, n) {
    return this.table.getRange([e], [t], n)
  }
  getKvEntries() {
    return this.table.getKvEntries()
  }
  getMapEntries() {
    return this.table.getMapEntries()
  }
  getIds() {
    return this.table.getChildIds([])
  }
  getParentId(e) {
    return this.table.getParentId([null, e])
  }
  put(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.Sn.Replace;
    return this.table.put({
      key: [e],
      data: t,
      generation: null
    }, n)
  }
  delete(e) {
    return 0 == arguments.length ? this.table.delete() : this.table.delete([e])
  }
  transaction(e, t) {
    return this.table.transaction(t => e(new s(t)), t)
  }
  upgradeTransaction(e) {
    return new s(this.table.upgradeTransaction(e))
  }
  getManySyncUnsafe(e) {
    return this.table.getManySyncUnsafe([], e)
  }
  getMapEntriesSyncUnsafe() {
    return this.table.getMapEntriesSyncUnsafe()
  }
  constructor(e, t, n, r = true) {
    a(this, "originalPrefix", true), a(this, "table", true), this.originalPrefix = e, this.table = new i.i([e], t, n, r)
  }
}
class s {
  static fromDatabaseTransaction(e, t, n) {
    return new s(new i.E(e, t, n))
  }
  put(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.Sn.Replace;
    this.transaction.put({
      key: [e],
      data: t,
      generation: null
    }, n)
  }
  delete(e) {
    return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e])
  }
  constructor(e) {
    a(this, "transaction", true), this.transaction = e
  }
}