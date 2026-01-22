/** Chunk was on web.js **/
/** chunk id: 767413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
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
class s {
  get prefix() {
    return this.table.prefix
  }
  withoutLogging() {
    return new s(this.originalPrefix, this.table.tableId, this.table.database, false)
  }
  get(e, t, n) {
    return this.table.get([e, t, c(n)])
  }
  getLatest(e, t, n) {
    return this.table.getMany([e, t], {
      ordering: r.J.Descending,
      limit: n
    })
  }
  getRange(e, t, n, r, i) {
    return this.table.getRange([e, t, c(n)], [e, t, c(r)], i)
  }
  getMostRecents(e) {
    return this.table.messages.getLatest(e)
  }
  put(e, t, n) {
    let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r.hh.Replace;
    return this.table.put(l(e, t, n), i)
  }
  putAll(e, t, n) {
    let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r.hh.Replace,
      a = n.map(n => l(e, t, n));
    return this.table.putAll(a, i)
  }
  deleteAll() {
    return this.table.delete()
  }
  deleteGuild(e) {
    return this.table.delete([e])
  }
  deleteChannel(e, t) {
    return this.table.delete([e, t])
  }
  deleteMessage(e, t, n) {
    return this.table.delete([e, t, c(n)])
  }
  transaction(e, t) {
    return this.table.transaction(t => e(new o(t)), t)
  }
  upgradeTransaction(e) {
    return new o(this.table.upgradeTransaction(e))
  }
  constructor(e, t, n, r = true) {
    a(this, "originalPrefix", true), a(this, "table", true), this.originalPrefix = e, this.table = new i.X([e], t, n, r)
  }
}
class o {
  static fromTableTransaction(e) {
    return new o(e)
  }
  static fromDatabaseTransaction(e, t, n) {
    return new o(new i.l(e, t, n))
  }
  put(e, t, n) {
    let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r.hh.Replace;
    this.transaction.put(l(e, t, n), i)
  }
  putAll(e, t, n) {
    let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r.hh.Replace,
      a = n.map(n => l(e, t, n));
    this.transaction.putAll(a, i)
  }
  replaceChannel(e, t, n) {
    this.deleteChannel(e, t), this.putAll(e, t, n)
  }
  deleteAll() {
    this.transaction.delete()
  }
  deleteGuild(e) {
    this.transaction.delete([e])
  }
  deleteChannel(e, t) {
    this.transaction.delete([e, t])
  }
  deleteMessage(e, t, n) {
    this.transaction.delete([e, t, c(n)])
  }
  trimOrphans(e) {
    this.transaction.messages.trimOrphans(e)
  }
  trimChannel(e, t, n) {
    this.transaction.messages.trimChannel([e, t], n)
  }
  trimChannelsIn(e, t) {
    this.transaction.messages.trimChannelsIn(e, t)
  }
  trimChannelsNotIn(e, t) {
    this.transaction.messages.trimChannelsNotIn(e, t)
  }
  constructor(e) {
    a(this, "transaction", true), this.transaction = e
  }
}

function l(e, t, n) {
  let r = c(n.id);
  return {
    key: [e, t, r],
    data: n,
    generation: r
  }
}

function c(e) {
  let t = 19;
  return e.padStart(t, "0")
}