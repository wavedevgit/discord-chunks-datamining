/** Chunk was on web.js **/
/** chunk id: 451988, original params: e,t,n (module,exports,re quire) **/
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
  BK: () => s,
  Ep: () => i,
  IX: () => o,
  J_: () => a
});
class i {
  start(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    (!this.isStarted() || n) && (this.stop(), this._ref = window.setTimeout(() => {
      this._ref = null, t()
    }, e))
  }
  stop() {
    null != this._ref && (clearTimeout(this._ref), this._ref = null)
  }
  isStarted() {
    return null != this._ref
  }
  constructor() {
    r(this, "_ref", true)
  }
}
class a {
  set(e) {
    return this._delay = e, this
  }
  delay() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    this._timeout.start(this._delay, this._handler, e)
  }
  cancel() {
    this._timeout.stop()
  }
  isDelayed() {
    return this._timeout.isStarted()
  }
  constructor(e, t) {
    r(this, "_timeout", true), r(this, "_delay", true), r(this, "_handler", true), this._delay = e, this._handler = t, this._timeout = new i
  }
}
class o {
  start(e, t) {
    this.stop(), this._ref = window.setInterval(t, e)
  }
  stop() {
    null != this._ref && (clearInterval(this._ref), this._ref = null)
  }
  isStarted() {
    return null != this._ref
  }
  constructor() {
    r(this, "_ref", true)
  }
}

function s(e) {
  return new Promise(t => {
    setTimeout(() => t(), e)
  })
}