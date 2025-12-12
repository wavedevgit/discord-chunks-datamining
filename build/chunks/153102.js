/** Chunk was on web.js **/
/** chunk id: 153102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./358797.js"), require("./388685.js"), require("./415506.js"), require("./17089.js");
var Chunk579092 = require("./579092.js"),
  Chunk625306 = require("./625306.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = new Chunk579092.Yd("Flux"),
  s = 100,
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
    this.isPaused = true, null !== this.pauseTimer && clearTimeout(this.pauseTimer), null !== module && (this.pauseTimer = setTimeout(() => {
      this.pauseTimer = null, this.resume()
    }, module))
  }
  resume() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    clearTimeout(this.pauseTimer), this.pauseTimer = null, this.isPaused && (this.isPaused = false, module && this.changedStores.size > 0 && setImmediate(() => this.emit()))
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
          if (++module > 100) throw a.error("LastFewActions", Chunk625306.qC()), Error("change emit loop detected, aborting");
          this.emitNonReactOnce(exports, require)
        }
        for (; this.reactChangedStores.size > 0;) {
          if (++module > 100) throw a.error("LastFewActions", Chunk625306.qC()), Error("react change emit loop detected, aborting");
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
        !e.has(r) && (e.add(r), false === r() || t.has(i) || (t.add(i), this.markChanged(i)))
      })
    });
    let o = Date.now();
    o - n > s && a.verbose("Slow batch emitChanges took ".concat(o - n, "ms recentActions:"), i.qC())
  }
  emitReactOnce() {
    let e = Date.now(),
      t = this.reactChangedStores;
    this.reactChangedStores = new Set, exports.forEach(e => {
      e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e)
    });
    let n = Date.now();
    require - module > s && a.verbose("Slow batch emitReactChanges took ".concat(require - module, "ms recentActions:"), Chunk625306.qC())
  }
  constructor() {
    o(this, "changedStores", new Set), o(this, "reactChangedStores", new Set), o(this, "changeSentinel", 0), o(this, "isBatchEmitting", false), o(this, "isDispatching", false), o(this, "isPaused", false), o(this, "pauseTimer", null)
  }
}
let u = new c