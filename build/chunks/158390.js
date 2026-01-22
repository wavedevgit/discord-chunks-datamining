/** Chunk was on web.js **/
/** chunk id: 158390, original params: e,t,n (module,exports,re quire) **/
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
  A: () => i
}), require("./65821.js");
class i {
  get fails() {
    return this._fails
  }
  get current() {
    return this._current
  }
  get pending() {
    return null != this._timeoutId
  }
  succeed() {
    this.cancel(), this._fails = 0, this._current = this.min
  }
  fail(e) {
    this._fails += 1;
    let t = 2 * this._current;
    if (this.jitter && (t *= Math.random()), this._current = Math.min(this._current + t, this.max), null != e) {
      if (null != this._timeoutId)
        if (this._callback !== e) throw Error("callback already pending");
        else this.cancel();
      this._callback = e, this._timeoutId = setTimeout(() => {
        try {
          null != e && e()
        } finally {
          this.cancel()
        }
      }, this._current)
    }
    return this._current
  }
  cancel() {
    this._callback = null, null != this._timeoutId && (clearTimeout(this._timeoutId), this._timeoutId = null)
  }
  constructor(e = 500, t = null, n = true) {
    if (r(this, "min", true), r(this, "max", true), r(this, "jitter", true), r(this, "_current", true), r(this, "_timeoutId", true), r(this, "_callback", true), r(this, "_fails", 0), e <= 0) throw Error("Backoff min value must be greater than zero or backoff will never back-off.");
    this.min = e, this.max = null != t ? t : 10 * e, this.jitter = n, this._current = e
  }
}