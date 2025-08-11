/** Chunk was on web.js **/
/** chunk id: 396124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => a
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
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
  put(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.Sn.Replace;
    return this.transaction(r => r.put(e, t, n), "".concat(this.prefix, " put"))
  }
  putAll(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.Sn.Replace;
    return this.transaction(r => r.putAll(e, t, n), "".concat(this.prefix, " putAll"))
  }
  replaceAll(e, t) {
    return this.transaction(n => n.replaceAll(e, t), "".concat(this.prefix, " replaceAll"))
  }
  delete(e, t) {
    return this.transaction(n => n.delete(e, t), "".concat(this.prefix, " delete"))
  }
  deleteGeneration(e, t) {
    return this.transaction(n => n.deleteGeneration(e, t), "".concat(this.prefix, " deleteGeneration"))
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
  static cell(e, t, n) {
    return {
      key: [e, t.id],
      data: t,
      generation: n
    }
  }
  constructor(e, t, n, r = true) {
    o(this, "originalPrefix", true), o(this, "table", true), this.originalPrefix = e, this.table = new i.i([e], t, n, r)
  }
}
class s {
  static fromDatabaseTransaction(e, t, n) {
    return new s(new i.E(e, t, n))
  }
  put(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.Sn.Replace;
    return this.putWithGeneration(e, t, null, n)
  }
  putWithGeneration(e, t, n) {
    let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r.Sn.Replace;
    return this.transaction.put(a.cell(e, t, n), i)
  }
  putAll(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.Sn.Replace;
    return this.transaction.putAll(t.map(t => a.cell(e, t, null)), n)
  }
  replaceAll(e, t) {
    this.delete(e), this.putAll(e, t)
  }
  delete(e, t) {
    switch (arguments.length) {
      case 0:
        return this.transaction.delete([]);
      case 1:
        return this.transaction.delete([e]);
      default:
        return this.transaction.delete([e, t])
    }
  }
  deleteGeneration(e, t) {
    return this.transaction.deleteGeneration([], e, t)
  }
  constructor(e) {
    o(this, "transaction", true), this.transaction = e
  }
}