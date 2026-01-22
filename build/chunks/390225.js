/** Chunk was on web.js **/
/** chunk id: 390225, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./142703.js"), require("./896048.js"), require("./65821.js"), require("./423034.js");
var Chunk118356 = require("./118356.js"),
  Chunk39304 = require("./39304.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Chunk118356.Vy("Flux"),
  o = 100,
  l = e => e();
class c {
  destroy() {
    this.changedStores.clear(), this.reactChangedStores.clear(), l = e => e()
  }
  injectBatchEmitChanges(e) {
    l = e
  }
  pause() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
    this.isPaused = true, null !== this.pauseTimer && clearTimeout(this.pauseTimer), null !== e && (this.pauseTimer = setTimeout(() => {
      this.pauseTimer = null, this.resume()
    }, e))
  }
  resume() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    clearTimeout(this.pauseTimer), this.pauseTimer = null, this.isPaused && (this.isPaused = false, e && this.changedStores.size > 0 && setImmediate(() => this.emit()))
  }
  batched(e) {
    if (this.isPaused) return e();
    try {
      return this.isPaused = true, e()
    } finally {
      this.resume(false), this.emit()
    }
  }
  emit() {
    this.isBatchEmitting || this.isPaused || l(() => {
      try {
        this.isBatchEmitting = true, this.changeSentinel++;
        let e = 0,
          t = new Set,
          n = new Set;
        for (; this.changedStores.size > 0;) {
          if (++e > 100) throw s.error("LastFewActions", i.lK()), Error("change emit loop detected, aborting");
          this.emitNonReactOnce(t, n)
        }
        for (; this.reactChangedStores.size > 0;) {
          if (++e > 100) throw s.error("LastFewActions", i.lK()), Error("react change emit loop detected, aborting");
          this.emitReactOnce()
        }
      } finally {
        this.isBatchEmitting = false
      }
    })
  }
  getChangeSentinel() {
    return this.changeSentinel
  }
  getIsPaused() {
    return this.isPaused
  }
  markChanged(e) {
    (e._changeCallbacks.hasAny() || e._syncWiths.length > 0) && this.changedStores.add(e), e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e), this.isBatchEmitting || this.isDispatching || this.isPaused || this.emit()
  }
  emitNonReactOnce(e, t) {
    let n = Date.now(),
      r = this.changedStores;
    this.changedStores = new Set, r.forEach(e => {
      t.add(e), e._changeCallbacks.invokeAll(), this.changedStores.delete(e)
    }), r.forEach(n => {
      n._syncWiths.forEach(n => {
        let {
          func: r,
          store: i
        } = n;
        e.has(r) || (e.add(r), false === r() || t.has(i) || (t.add(i), this.markChanged(i)))
      })
    });
    let a = Date.now();
    a - n > o && s.verbose("Slow batch emitChanges took ".concat(a - n, "ms recentActions:"), i.lK())
  }
  emitReactOnce() {
    let e = Date.now(),
      t = this.reactChangedStores;
    this.reactChangedStores = new Set, t.forEach(e => {
      e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e)
    });
    let n = Date.now();
    n - e > o && s.verbose("Slow batch emitReactChanges took ".concat(n - e, "ms recentActions:"), i.lK())
  }
  constructor() {
    a(this, "changedStores", new Set), a(this, "reactChangedStores", new Set), a(this, "changeSentinel", 0), a(this, "isBatchEmitting", false), a(this, "isDispatching", false), a(this, "isPaused", false), a(this, "pauseTimer", null)
  }
}
let u = new c