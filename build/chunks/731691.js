/** Chunk was on web.js **/
/** chunk id: 731691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => o
}), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk860407 = require("./860407.js"),
  Chunk180944 = require("./180944.js");

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
  put(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.hh.Replace;
    return this.transaction(n => n.put(e, t), "".concat(this.prefix, " put"))
  }
  putAll(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.hh.Replace;
    return this.transaction(n => n.putAll(e, t), "".concat(this.prefix, " putAll"))
  }
  replaceAll(e) {
    return this.transaction(t => t.replaceAll(e), "".concat(this.prefix, " replaceAll"))
  }
  delete(e) {
    return this.transaction(t => t.delete(e), "".concat(this.prefix, " delete"))
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
  static cell(e, t) {
    return {
      key: [e.id],
      data: e,
      generation: t
    }
  }
  constructor(e, t, n, r = true) {
    a(this, "originalPrefix", true), a(this, "table", true), this.originalPrefix = e, this.table = new i.X([e], t, n, r)
  }
}
class s {
  static fromDatabaseTransaction(e, t, n) {
    return new s(new i.l(e, t, n))
  }
  put(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.hh.Replace;
    return this.transaction.put(o.cell(e, null), t)
  }
  putAll(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.hh.Replace;
    return this.transaction.putAll(e.map(e => o.cell(e, null)), t)
  }
  replaceAll(e) {
    this.delete(), this.putAll(e)
  }
  delete(e) {
    return 0 == arguments.length ? this.transaction.delete([]) : this.transaction.delete([e])
  }
  constructor(e) {
    a(this, "transaction", true), this.transaction = e
  }
}