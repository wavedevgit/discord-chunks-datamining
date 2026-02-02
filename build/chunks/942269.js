/** Chunk was on web.js **/
/** chunk id: 942269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  yW: () => g
}), require("./228524.js"), require("./321073.js"), require("./896048.js"), require("./65821.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk747465 = require("./747465.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let c = Symbol("version"),
  u = Object.freeze({}),
  d = "0",
  f = new Chunk626584.A("LibdiscoreStore"),
  p = e => e;
class _ {
  getK1Key(e) {
    return "kv" === this.type ? d : "string" == typeof this.k1key ? e[this.k1key] : this.k1key(e)
  }
  getK2Key(e) {
    let t = "kv" === this.type ? this.k1key : this.k2key;
    if ((null == this.shouldIndex || this.shouldIndex(e)) && null != t) return "string" == typeof t ? e[t] : t(e)
  }
  constructor(e, t, n, r, i) {
    s(this, "type", true), s(this, "kkvDatabase", true), s(this, "k1key", true), s(this, "k2key", true), s(this, "shouldIndex", true), this.type = e, this.kkvDatabase = t, this.k1key = n, this.k2key = r, this.shouldIndex = i
  }
}
class h {
  set(e, t) {
    this.kkvDatabase.setRecord(this.partition, e, t)
  }
  get(e) {
    return this.kkvDatabase.getRecord(this.partition, e)
  }
  has(e) {
    return this.kkvDatabase.hasRecord(this.partition, e)
  }
  getAllRecords() {
    return this.kkvDatabase.getPartition(this.partition)
  }
  remove(e) {
    return this.kkvDatabase.removeRecord(this.partition, e)
  }
  clear() {
    this.kkvDatabase.removePartition(this.partition), this.kkvDatabase.setPartition(this.partition, {})
  }
  length() {
    return this.kkvDatabase.partitionLength(this.partition)
  }
  version() {
    var e;
    return null != (e = this.kkvDatabase.partitionVersion(this.partition)) ? e : this.kkvDatabase.version()
  }
  memoized(e, t) {
    return this.kkvDatabase.memoizedSinglePartition(this.partition, e, t)
  }
  constructor(e, t) {
    s(this, "kkvDatabase", true), s(this, "partition", true), this.kkvDatabase = e, this.partition = t
  }
}
class m {
  addSecondaryKVIndex(e, t) {
    let n = new m(this.nextVersion),
      r = new _("kv", n, e, true, t);
    return this.secondaryIndexes.push(r), n.intoKV()
  }
  addSecondaryKKVIndex(e, t, n) {
    let r = new m(this.nextVersion),
      i = new _("kkv", r, e, t, n);
    return this.secondaryIndexes.push(i), r
  }
  intoKV(e) {
    return new h(this, null != e ? e : d)
  }
  version() {
    return this.state.version
  }
  partitionVersion(e) {
    let t = this.state.root[e];
    return null == t ? this.version() : this._derivedVersion(t.derived.memoized)
  }
  hasPartition(e) {
    return null != this.state.root[e]
  }
  hasRecord(e, t) {
    var n;
    return (null == (n = this.state.root[e]) ? true : n.root[t]) != null
  }
  getRecord(e, t) {
    var n;
    return null == (n = this.state.root[e]) ? true : n.root[t]
  }
  getManyRecords(e, t) {
    let n = this.state.root[e];
    if (null == n) return [];
    let r = [];
    for (let e of t) {
      let t = n.root[e];
      null != t && r.push(t)
    }
    return r
  }
  getPartition(e) {
    let t = this.state.root[e];
    return null != t ? t.root : u
  }
  getAllPartitions() {
    return this.state.root
  }
  getPartitionKeys() {
    return Object.keys(this.state.root)
  }
  partitionLength(e) {
    let t = this.state.root[e];
    return null == t ? 0 : t.derived.length
  }
  length() {
    return this.state.derived.length
  }
  numPartitions() {
    return this.state.derived.numPartitions
  }
  getNullablePartition(e) {
    let t = this.state.root[e];
    return null == t ? null : t.root
  }
  _derivedVersion(e) {
    let t = e[c];
    return null == t && (e[c] = t = this.nextVersion()), t
  }
  mapPartitions(e) {
    let t = [],
      {
        root: n
      } = this.state;
    for (let r in n) t.push({
      partitionKey: r,
      values: e(n[r].root, r)
    });
    return t
  }
  memoizedPartition(e, t) {
    let n = Symbol(),
      r = true !== t ? t : e("", {});
    return t => {
      let i = this.state.root[t];
      if (null == i) return r;
      let {
        root: a,
        derived: {
          memoized: o
        }
      } = i, s = o[n];
      return Object.hasOwnProperty.call(o, n) || (s = e(t, a), o[n] = s), s
    }
  }
  memoizedSinglePartition(e, t, n) {
    let r = Symbol(),
      i = true !== n ? n : t(u);
    return () => {
      let n = this.state.root[e];
      if (null == n) return i;
      let {
        root: a,
        derived: {
          memoized: o
        }
      } = n, s = o[r];
      return Object.hasOwnProperty.call(o, r) || (s = t(a), o[r] = s), s
    }
  }
  memoized(e) {
    let t = Symbol();
    return () => {
      let {
        memoized: n
      } = this.state.derived, r = n[t];
      return Object.hasOwnProperty.call(n, t) || (r = e(this.state.root), n[t] = r), r
    }
  }
  emptyState() {
    return {
      root: {},
      version: this.nextVersion(),
      derived: {
        length: 0,
        numPartitions: 0,
        memoized: {}
      }
    }
  }
  emptyPartitionState(e) {
    return {
      root: {},
      version: null != e ? e : this.nextVersion(),
      derived: {
        length: 0,
        memoized: {}
      }
    }
  }
  clear() {
    for (let e of (this.state = this.emptyState(), this.secondaryIndexes)) e.kkvDatabase.clear()
  }
  removePartition(e, t) {
    null != t || (t = this.nextVersion());
    let n = this.state.root[e];
    return null != n && (this.updateSecondaryIndexes(true, Object.values(n.root), t), delete this.state.root[e], this.state.derived.numPartitions--, this.state.version = t, this.state.derived.memoized = {}, this.state.derived.length -= n.derived.length, true)
  }
  removeRecord(e, t, n) {
    null != n || (n = this.nextVersion());
    let r = this.state.root[e];
    if (null == r) returnfalse;
    let i = r.root[t];
    return null != i && (this.updateSecondaryIndexes(true, [i], n), delete r.root[t], r.derived.length--, 0 === r.derived.length ? (delete this.state.root[e], this.state.derived.numPartitions--) : r.derived.memoized = {}, this.state.derived.length--, this.state.version = n, this.state.derived.memoized = {}, true)
  }
  updateRecord(e, t, n, r, i) {
    if (null != i || (i = this.nextVersion()), null == this.state.root[e]) throw Error("Partition ".concat(e, " does not exist"));
    if (null == this.state.root[e].root[t]) throw Error("Record ".concat(t, " does not exist in partition ").concat(e));
    let a = this.state.root[e].root[t],
      o = r(l({}, a, n));
    return this.updateSecondaryIndexes([o], [a], i), this.touchPartition(e, i).root[t] = o, true
  }
  touchPartition(e, t) {
    return null != t || (t = this.nextVersion()), null == this.state.root[e] ? (this.state.root[e] = this.emptyPartitionState(t), this.state.derived.numPartitions++) : (this.state.root[e].version = t, this.state.root[e].derived.memoized = {}), this.state.version = t, this.state.derived.memoized = {}, this.state.root[e]
  }
  setRecord(e, t, n, r) {
    null != r || (r = this.nextVersion());
    let i = this.touchPartition(e, r);
    return null == i.root[t] && (i.derived.length++, this.state.derived.length++), i.root[t] = n, this.updateSecondaryIndexes([n], true, r), true
  }
  setPartition(e, t, n) {
    null != n || (n = this.nextVersion()), this.removePartition(e, n);
    let r = Object.keys(t).length;
    if (0 === r) returntrue;
    this.updateSecondaryIndexes(Object.values(t), true, n);
    let i = this.touchPartition(e, n);
    return i.root = t, i.derived.length = r, this.state.derived.length += r, true
  }
  updateSecondaryIndexes(e, t, n) {
    for (let r of this.secondaryIndexes) {
      if (true !== t)
        for (let e of t) {
          let t = r.getK1Key(e),
            i = r.getK2Key(e);
          null != t && null != i && r.kkvDatabase.removeRecord(t, i, n)
        }
      if (true !== e)
        for (let t of e) {
          let e = r.getK1Key(t),
            i = r.getK2Key(t);
          null != e && null != i && r.kkvDatabase.setRecord(e, i, t, n)
        }
    }
  }
  constructor(e) {
    s(this, "nextVersion", true), s(this, "state", true), s(this, "secondaryIndexes", true), this.nextVersion = e, this.secondaryIndexes = [], this.state = this.emptyState()
  }
}
class g extends Chunk311907.il {
  getMode() {
    return this.mode
  }
  connectWithLibdiscore(e) {
    if ("typescript" === this.mode) throw Error("connectWithLibdiscore should not be called in TypeScript mode.");
    let {
      storeToken: t,
      initialState: n
    } = e.connectStore({
      storeName: this.getName(),
      databases: Object.keys(this.state.databases).map(e => ({
        name: e,
        type: "kkv"
      }))
    });
    return this.applyChanges(n), "typescript-libdiscore-dual-read" === this.mode && this.setupDualReadValidation(), t
  }
  setupDualReadValidation() {
    let e = Symbol("didValidatePartition"),
      t = {
        root: {},
        derived: {
          length: 0,
          memoized: {}
        }
      };
    this.addChangeListener(() => {
      let n = this.shadowDatabases;
      if (null != n)
        for (let r in this.state.databases) {
          let i = this.state.databases[r],
            a = n[r];
          if (null == a) {
            f.warn("Shadow database ".concat(r, " not found for dual-read validation"));
            continue
          }
          let s = i.getAllPartitions(),
            l = a.getAllPartitions();
          (0, o.R7)("".concat(this.getName(), ":").concat(r), "Kkv", n => {
            let r = Object.keys(s),
              i = Object.keys(l);
            for (let i of r) {
              let r = s[i];
              if (!Object.prototype.hasOwnProperty.call(l, i)) {
                n(r, t);
                continue
              }
              let a = l[i],
                o = r.derived.memoized[e],
                c = a.derived.memoized[e];
              if (null != o && o === c) continue;
              n(r, a);
              let u = {};
              r.derived.memoized[e] = u, a.derived.memoized[e] = u
            }
            for (let e of i) Object.prototype.hasOwnProperty.call(s, e) || n(t, l[e])
          })
        }
    })
  }
  addKKVDatabase(e, t) {
    let n = new m(this.nextVersion.bind(this));
    if (this.state.databases[e] = n, this.recordCreators.set(e, null != t ? t : p), null != this.shadowDatabases) {
      let n = new m(this.nextVersion.bind(this));
      this.shadowDatabases[e] = n, this.shadowRecordCreators.set(e, null != t ? t : p)
    }
    return n
  }
  addKVDatabase(e, t) {
    let n = new m(this.nextVersion.bind(this)),
      r = n.intoKV();
    if (this.state.databases[e] = n, this.recordCreators.set(e, null != t ? t : p), null != this.shadowDatabases) {
      let n = new m(this.nextVersion.bind(this));
      this.shadowDatabases[e] = n, this.shadowRecordCreators.set(e, null != t ? t : p)
    }
    return r
  }
  applyChanges(e) {
    let t = "typescript-libdiscore-dual-read" === this.mode;
    for (let n of e) this.executeDatabaseChange(n, t)
  }
  clearAllDatabases() {
    for (let e in this.state.databases) this.state.databases[e].clear()
  }
  markDirty() {
    this._nextVersion++
  }
  executeDatabaseChange(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      {
        databaseName: n,
        opcodes: r
      } = e,
      i = this.nextVersion(),
      a = t ? this.shadowDatabases : this.state.databases,
      o = t ? this.shadowRecordCreators : this.recordCreators,
      s = a[n];
    if (null == s) throw Error("Database ".concat(n, " does not exist"));
    let l = o.get(n);
    for (let e of r) switch (e.opcode) {
      case "removePartition":
        s.removePartition(e.partitionKey, i);
        break;
      case "setPartition": {
        let t = e.partition;
        for (let e in t) t[e] = l(t[e]);
        s.setPartition(e.partitionKey, t, i);
        break
      }
      case "updateRecord":
        s.updateRecord(e.partitionKey, e.clusteringKey, e.value, l, i);
        break;
      case "setRecord":
        s.setRecord(e.partitionKey, e.clusteringKey, l(e.value), i);
        break;
      case "removeRecord":
        s.removeRecord(e.partitionKey, e.clusteringKey, i);
        break;
      case "clearDatabase":
        s.clear()
    }
  }
  nextVersion() {
    return this._nextVersion++
  }
  constructor(e, t = "typescript") {
    const n = {};
    if ("typescript" === t || "typescript-libdiscore-dual-read" === t)
      for (const t in e) {
        const r = e[t],
          i = e => {
            var t;
            null != (t = this.wrappedState) || (this.wrappedState = this.stateWrapper());
            let n = this._nextVersion;
            if (r(e, this.wrappedState), this._nextVersion === n) returnfalse
          };
        n[t] = i
      }
    super(i.h, n), s(this, "mode", true), s(this, "state", true), s(this, "_nextVersion", true), s(this, "recordCreators", true), s(this, "wrappedState", true), s(this, "shadowDatabases", true), s(this, "shadowRecordCreators", true), this.mode = t, this._nextVersion = 0, this.recordCreators = new Map, this.wrappedState = null, this.shadowDatabases = null, this.shadowRecordCreators = null, this.state = {
      databases: {}
    }, "typescript-libdiscore-dual-read" === t && (this.shadowDatabases = {}, this.shadowRecordCreators = new Map)
  }
}