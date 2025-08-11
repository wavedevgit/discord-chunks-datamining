/** Chunk was on web.js **/
/** chunk id: 398463, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  HO: () => a,
  Hb: () => l,
  II: () => s,
  Lj: () => d,
  Ls: () => u,
  Lu: () => i,
  OT: () => c,
  TC: () => o
});
let i = 1e3 / 60 * 3,
  o = 1e3 / 60 * 3,
  a = 1e3 / 60 / 8,
  s = 1e3 / 60 * 12,
  l = 1e3,
  c = 2,
  u = 50;
class d {
  timeRemaining() {
    let e = performance.now() - this._startMs;
    return Math.max(0, this._deadlineMs - module)
  }
  get didTimeout() {
    return this._firedDueToMaxTimeout
  }
  get timeSinceExpiration() {
    return performance.now() - (this._startMs + this._deadlineMs)
  }
  generateDeadlineMetrics() {
    return {
      isDeadlineNotIdeal: this._browserDeadlineMs < a,
      deadlineMs: this._deadlineMs.toFixed(2),
      timeSinceStartMs: (performance.now() - this._startMs).toFixed(2)
    }
  }
  constructor(e, t = false) {
    r(this, "_browserDeadlineMs", true), r(this, "_deadlineMs", true), r(this, "_startMs", true), r(this, "_firedDueToMaxTimeout", true), this._deadlineMs = Math.max(a, e), this._browserDeadlineMs = e, this._firedDueToMaxTimeout = t, this._startMs = performance.now()
  }
}