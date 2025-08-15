/** Chunk was on web.js **/
/** chunk id: 350167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => u
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
var Chunk579092 = require("./579092.js"),
  Chunk198584 = require("./198584.js"),
  Chunk444675 = require("./444675.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 1e6,
  l = "1" === Chunk444675.env.KV_STORAGE_LOGGING,
  c = new Chunk579092.Yd("Runtime");
class u {
  static nextId() {
    return ++this.counter
  }
  static executeAsync(e, t) {
    return this.initialize(), new Promise((n, r) => {
      let i = this.nextId();
      t(i), this.pending.set(i, {
        id: i,
        tag: e,
        started: performance.now(),
        resolve: n,
        reject: r
      })
    })
  }
  static addCompletionCallback(e) {
    return this.completionCallbacks.push(e), e
  }
  static addDatabaseStateCallback(e) {
    return this.dbStateCallbacks.push(e), e
  }
  static removeCompletionCallback(e) {
    this.completionCallbacks = this.completionCallbacks.filter(t => t !== e)
  }
  static removeDatabaseStateCallback(e) {
    this.dbStateCallbacks = this.dbStateCallbacks.filter(t => t !== e)
  }
  static onResponse(e, t) {
    let n = performance.now(),
      r = this.pending.get(e.id);
    null != r && (this.pending.delete(e.id), e.timings.materializationTimeNanoseconds = null != t ? t : 0, this.completeOperation(r, e, n), this.resolveOperation(r, e))
  }
  static onStatus(e) {
    for (let t of this.dbStateCallbacks) t(e.handle, e.state)
  }
  static resolveOperation(e, t) {
    t.ok ? e.resolve(t.data) : e.reject("string" == typeof t.data ? Error(t.data) : t.data)
  }
  static completeOperation(e, t, n) {
    if (this.completionCallbacks.length > 0) {
      let r = {
        id: e.id,
        tag: e.tag,
        ok: t.ok,
        value: t.data,
        timings: {
          queue: t.timings.queueTimeNanoseconds / s,
          execution: t.timings.executionTimeNanoseconds / s,
          materialization: t.timings.materializationTimeNanoseconds / s,
          ccTotal: t.timings.totalTimeNanoseconds / s,
          jsTotal: n - e.started
        }
      };
      for (let e of this.completionCallbacks) e(r)
    }
  }
  static initialize() {
    this.initialized || (Chunk198584.d.setCallbacks({
      status: e => this.onStatus(e),
      response: (e, t) => this.onResponse(e, t)
    }), l && (this.addCompletionCallback(e => {
      let t = e.ok ? "completed" : "failed",
        n = ["".concat(e.timings.execution.toFixed(3), "ms execution"), "".concat(e.timings.materialization.toFixed(3), "ms js materialization"), "".concat(e.timings.ccTotal.toFixed(3), "ms cc completion"), "".concat(e.timings.jsTotal.toFixed(3), "ms js reception")].join(", ");
      c.info("".concat(e.tag, " (#").concat(e.id, ") ").concat(t, " in ").concat(e.timings.ccTotal.toFixed(3), "ms (").concat(n, ")."))
    }), this.addDatabaseStateCallback((e, t) => c.info("".concat(e, " (state: ").concat(t, ")")))), this.initialized = true)
  }
}
o(u, "counter", 0), o(u, "pending", new Map), o(u, "initialized", false), o(u, "dbStateCallbacks", []), o(u, "completionCallbacks", [])