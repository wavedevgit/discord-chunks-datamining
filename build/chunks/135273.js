/** Chunk was on web.js **/
/** chunk id: 135273, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r;

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  Z: () => l
}), require("./980754.js"), require("./290780.js"), require("./539854.js");
let a = null != (r = globalThis.__getTotalRequireTime) ? r : () => 0,
  o = "undefined" != typeof performance;
class s {
  get isTracing() {
    return !!o && !!this.isTracing_ && (!(Date.now() > this.endTime_) || (this.isTracing_ = false, false))
  }
  get endTime() {
    return this.endTime_
  }
  set endTime(e) {
    this.endTime_ = e, this.isTracing_ = true
  }
  resumeTracing() {
    this.isTracing || (this.logGroups.unshift({
      index: this.logGroups.length,
      timestamp: Date.now(),
      logs: [],
      nativeLogs: []
    }), this.logs = this.logGroups[0].logs), this.endTime = Date.now() + 1e4
  }
  mark(e, t, n) {
    this.isTracing && (this.logs.push({
      emoji: e,
      prefix: "".concat(this.prefix),
      log: t,
      delta: n,
      timestamp: Date.now()
    }), this.addImportLogDetail())
  }
  markAndLog(e, t, n, r) {
    e.log(n), this.isTracing && (this.logs.push({
      emoji: t,
      prefix: this.prefix,
      log: n,
      delta: r,
      timestamp: Date.now()
    }), this.addImportLogDetail())
  }
  addImportLogDetail() {
    let e = a();
    e - this.lastImportDuration > 25 && (this.addDetail("JS Imports", Math.ceil(e) + "ms"), this.lastImportDuration = e)
  }
  markWithDelta(e, t) {
    let n = this.logs[this.logs.length - 1];
    this.mark(e, t, null != n && null != n.timestamp ? Date.now() - n.timestamp : true)
  }
  markAt(e, t, n) {
    var r, i;
    if (!this.isTracing) return;
    let a = 0;
    for (; a < this.logs.length; a++) {
      let {
        timestamp: e
      } = this.logs[a];
      if (null != e && e > n) break
    }
    this.logs.splice(a, 0, {
      emoji: e,
      log: t,
      timestamp: n,
      prefix: null != (i = null == (r = this.logs[a]) ? true : r.prefix) ? i : ""
    })
  }
  addDetail(e, t) {
    this.isTracing && this.logs.push({
      emoji: this.logs[this.logs.length - 1].emoji,
      prefix: this.prefix,
      log: "  ↪ ".concat(e, " ").concat(t)
    })
  }
  time(e, t, n) {
    if (!this.isTracing) return n();
    let r = this.prefix;
    this.mark(e, "Start ".concat(t)), this.prefix += "| ";
    let i = Date.now(),
      a = n(),
      o = Date.now() - i;
    return this.prefix = r, this.mark(e, "Finish ".concat(t), o), a
  }
  async timeAsync(e, t, n) {
    if (!this.isTracing) return n();
    this.mark(e, "Start ".concat(t));
    let r = Date.now(),
      i = await n(),
      a = Date.now() - r;
    return this.mark(e, "Finish ".concat(t), a), i
  }
  setServerTrace(e) {
    this.logGroups[0].serverTrace = e
  }
  constructor() {
    i(this, "isTracing_", true), i(this, "endTime_", Date.now() + 15e3), i(this, "lastImportDuration", 0), i(this, "logGroups", [{
      index: 0,
      timestamp: Date.now(),
      logs: [],
      nativeLogs: []
    }]), i(this, "logs", this.logGroups[0].logs), i(this, "prefix", "")
  }
}
let l = new s