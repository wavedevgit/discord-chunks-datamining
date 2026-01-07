/** Chunk was on web.js **/
/** chunk id: 194806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => d
}), require("./415506.js"), require("./539854.js"), require("./388685.js");
var Chunk135273 = require("./135273.js"),
  Chunk930145 = require("./930145.js"),
  Chunk350167 = require("./350167.js"),
  Chunk503461 = require("./503461.js");

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

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class d {
  static async open(e, t) {
    return new d(await i.A.open(e, t))
  }
  static openSyncUnsafe(e, t) {
    return new d(i.A.openSyncUnsafe(e, t))
  }
  static delete(e) {
    return i.A.delete(e)
  }
  close() {
    var e;
    this.lastState = o.hi.Closed, null == (e = this.raw) || e.close(), this.raw = null, a.r.removeCompletionCallback(this.databaseStateCallback)
  }
  disable(e) {
    return null == this.raw ? Promise.resolve() : (this.lastState = o.hi.Disabled, this.execute({
      type: "db.disable",
      handle: 0,
      reason: e
    }))
  }
  execute(e, t) {
    if (null == this.raw) throw Error("database is no longer open (database: ".concat(this));
    let n = "key" in e ? e.key[0] : e.table,
      i = () => a.r.executeAsync(null != t ? t : e.type, t => {
        this.raw.execute(t, u(l({}, e), {
          handle: 0
        }))
      });
    return null === t ? i() : r.Z.timeAsync("\uD83D\uDCBE", "".concat(null != t ? t : e.type, " ").concat(null != n ? n : ""), i)
  }
  executeSync(e) {
    if (null == this.raw) throw Error("database is no longer open (database: ".concat(this));
    let t = "key" in e ? e.key[0] : e.table;
    return r.Z.time("\uD83D\uDCBE", "SYNC: ".concat(e.type, " ").concat(null != t ? t : ""), () => this.raw.execute(null, u(l({}, e), {
      handle: 0
    }), {
      synchronous: true
    }))
  }
  fullVacuum() {
    return this.execute({
      type: "db.vacuum",
      handle: 0,
      complete: true
    })
  }
  fsInfo() {
    return this.execute({
      type: "db.fs_info",
      handle: 0
    })
  }
  incrementalVacuum() {
    return this.execute({
      type: "db.vacuum",
      handle: 0,
      complete: false
    })
  }
  instantaneousState() {
    return null == this.raw ? o.hi.Closed : this.lastState = this.executeSync({
      type: "db.state"
    })
  }
  async instantaneousStateAsync() {
    return null == this.raw ? o.hi.Closed : this.lastState = await this.execute({
      type: "db.state"
    })
  }
  state() {
    return this.lastState
  }
  transaction(e, t) {
    let n = new f(this);
    return Promise.resolve(e(n)).then(() => n.operations.length > 0 ? this.execute({
      type: "db.transaction",
      operations: n.complete()
    }, t) : Promise.resolve())
  }
  constructor(e) {
    s(this, "name", true), s(this, "handle", true), s(this, "raw", true), s(this, "lastState", true), s(this, "databaseStateCallback", true), this.raw = e, this.name = e.name, this.lastState = o.hi.Open, this.handle = e.handle, this.databaseStateCallback = a.r.addDatabaseStateCallback((e, t) => {
      this.handle === e && (this.lastState = t)
    })
  }
}
class f {
  add(e) {
    this.operations.push(e)
  }
  complete() {
    for (let e of this.operations) e.handle = 0;
    return this.operations
  }
  toString() {
    return "[DatabaseTransaction ".concat(this.database.handle, ": ").concat(this.operations.length, " ops]")
  }
  constructor(e) {
    s(this, "database", true), s(this, "operations", true), this.database = e, this.operations = []
  }
}