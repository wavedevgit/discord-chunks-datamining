/** Chunk was on web.js **/
/** chunk id: 190313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => c,
  i: () => l
}), require("./415506.js");
var Chunk503461 = require("./503461.js"),
  Chunk218521 = require("./218521.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e, t) {
  return 0 === t.length ? e : {
    key: (0, i.m)(t, e.key),
    data: e.data,
    generation: e.generation
  }
}

function s(e, t) {
  return 0 === t.length ? e : e.map(e => o(e, t))
}
class l {
  close() {
    this.database.close()
  }
  async get(e) {
    var t;
    return null != (t = (await this.getMany(e, {
      limit: 1
    }))[0]) ? t : null
  }
  getMany() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 ? arguments[1] : true;
    return this.database.execute({
      type: "kv.get_many",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module),
      ordering: null == exports ? true : exports.ordering,
      limit: null == exports ? true : exports.limit
    }, this.defaultDebugTag)
  }
  getRange(e, t, n) {
    let r = (0, i.m)(this.prefix, e),
      a = (0, i.m)(this.prefix, t);
    return this.database.execute({
      type: "kv.get_range",
      table: this.tableId,
      range: [r, a],
      ordering: null == n ? true : n.ordering,
      limit: null == n ? true : n.limit
    }, this.defaultDebugTag)
  }
  getKvEntries() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    return this.database.execute({
      type: "kv.get_kv_entries",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module)
    }, this.defaultDebugTag)
  }
  getMapEntries() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    return this.database.execute({
      type: "kv.get_map_entries",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module)
    }, this.defaultDebugTag)
  }
  getChildIds() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    return this.database.execute({
      type: "kv.get_child_ids",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module)
    }, this.defaultDebugTag)
  }
  getParentId() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    return this.database.execute({
      type: "kv.get_parent_id",
      table: this.tableId,
      key: (0, Chunk218521.m)(this.prefix, module)
    }, this.defaultDebugTag)
  }
  put(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.Sn.Replace;
    return this.database.execute({
      type: "kv.put_one",
      table: this.tableId,
      cell: o(e, this.prefix),
      overwrite: t === r.Sn.Replace
    }, this.defaultDebugTag)
  }
  putAll(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.Sn.Replace;
    return this.database.execute({
      type: "kv.put_many",
      table: this.tableId,
      cells: s(e, this.prefix),
      overwrite: t === r.Sn.Replace
    }, this.defaultDebugTag)
  }
  replaceAll(e) {
    return this.transaction(t => {
      t.delete(), t.putAll(e)
    }, this.defaultDebugTag)
  }
  delete() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    return this.database.execute({
      type: "kv.delete_many",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module)
    }, this.defaultDebugTag)
  }
  deleteRange(e, t) {
    let n = (0, i.m)(this.prefix, e),
      r = (0, i.m)(this.prefix, t);
    return this.database.execute({
      type: "kv.delete_range",
      table: this.tableId,
      range: [n, r]
    }, this.defaultDebugTag)
  }
  deleteGeneration() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 ? arguments[1] : true,
      n = arguments.length > 2 ? arguments[2] : true;
    return this.database.execute({
      type: "kv.delete_generation",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module),
      generation: require,
      comparer: exports
    }, this.defaultDebugTag)
  }
  transaction(e, t) {
    return this.database.transaction(t => e(new c(this.prefix, this.tableId, t)), t)
  }
  upgradeTransaction(e) {
    return new c(this.prefix, this.tableId, e)
  }
  getManySyncUnsafe() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 ? arguments[1] : true;
    return this.database.executeSync({
      type: "kv.get_many",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module),
      ordering: null == exports ? true : exports.ordering,
      limit: null == exports ? true : exports.limit
    })
  }
  getMapEntriesSyncUnsafe() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    return this.database.executeSync({
      type: "kv.get_map_entries",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module)
    })
  }
  constructor(e, t, n, r) {
    a(this, "prefix", true), a(this, "tableId", true), a(this, "database", true), a(this, "defaultDebugTag", true), a(this, "messages", {
      getLatest: e => this.database.execute({
        type: "messages.get_latest",
        table: this.tableId,
        guildId: e
      }, this.defaultDebugTag)
    }), this.prefix = e, this.tableId = t, this.database = n, this.defaultDebugTag = r ? true : null
  }
}
class c {
  static fromDatabaseTransaction(e, t, n) {
    return new c(e, t, n)
  }
  put(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.Sn.Replace;
    this.transaction.add({
      type: "kv.put_one",
      table: this.tableId,
      cell: o(e, this.prefix),
      overwrite: t === r.Sn.Replace
    })
  }
  putAll(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.Sn.Replace;
    this.transaction.add({
      type: "kv.put_many",
      table: this.tableId,
      cells: s(e, this.prefix),
      overwrite: t === r.Sn.Replace
    })
  }
  replaceAll(e) {
    this.delete(), this.putAll(e)
  }
  delete() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    this.transaction.add({
      type: "kv.delete_many",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module)
    })
  }
  deleteRange(e, t) {
    let n = (0, i.m)(this.prefix, e),
      r = (0, i.m)(this.prefix, t);
    this.transaction.add({
      type: "kv.delete_range",
      table: this.tableId,
      range: [n, r]
    })
  }
  deleteGeneration() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 ? arguments[1] : true,
      n = arguments.length > 2 ? arguments[2] : true;
    this.transaction.add({
      type: "kv.delete_generation",
      table: this.tableId,
      key: (0, Chunk218521.d)(this.prefix, module),
      generation: require,
      comparer: exports
    })
  }
  constructor(e, t, n) {
    a(this, "prefix", true), a(this, "tableId", true), a(this, "transaction", true), a(this, "messages", {
      trimOrphans: e => {
        if (1 !== this.prefix.length || 1 !== e.length) throw Error("trimOrphans: only one prefix component is supported at this time");
        this.transaction.add({
          type: "messages.trim_orphans",
          table: this.tableId,
          channelKey: e[0],
          messageKey: this.prefix[0]
        })
      },
      trimChannel: (e, t) => {
        this.transaction.add({
          type: "messages.trim_channel",
          table: this.tableId,
          key: (0, i.m)(this.prefix, e),
          limit: t
        })
      },
      trimChannelsIn: (e, t) => {
        if (1 !== this.prefix.length || 1 !== e.length) throw Error("trimChannelsIn: only one prefix component is supported at this time");
        this.transaction.add({
          type: "messages.trim_channels_in",
          table: this.tableId,
          channelKey: e[0],
          messageKey: this.prefix[0],
          limit: t
        })
      },
      trimChannelsNotIn: (e, t) => {
        if (1 !== this.prefix.length || 1 !== e.length) throw Error("trimChannelsNotIn: only one prefix component is supported at this time");
        this.transaction.add({
          type: "messages.trim_channels_not_in",
          table: this.tableId,
          channelKey: e[0],
          messageKey: this.prefix[0],
          limit: t
        })
      }
    }), this.prefix = e, this.tableId = t, this.transaction = n
  }
}