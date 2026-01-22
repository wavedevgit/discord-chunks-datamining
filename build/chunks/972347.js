/** Chunk was on web.js **/
/** chunk id: 972347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk143236 = require("./143236.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  on(e, t) {
    this.emitter.on(e, t)
  }
  off(e, t) {
    this.emitter.off(e, t)
  }
  once(e, t) {
    this.emitter.once(e, t)
  }
  addListener(e, t) {
    this.emitter.addListener(e, t)
  }
  removeListener(e, t) {
    this.emitter.removeListener(e, t)
  }
  removeAllListeners() {
    this.emitter.removeAllListeners()
  }
  emit(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    this.emitter.emit(e, ...n)
  }
  emitUnsafe(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    this.emitter.emit(e, ...n)
  }
  listenerCount(e) {
    return this.emitter.listenerCount(e)
  }
  constructor() {
    i(this, "emitter", new r.EventEmitter)
  }
}