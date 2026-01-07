/** Chunk was on 1272 **/
/** chunk id: 63023, original params: e,t,n (module,exports,require) **/
function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  Z: () => i
}), require("./539854.js");
class i {
  _processQueue() {
    setTimeout(() => {
      if (this._queue.length > 0 && this._tokenCount > 0) {
        this._tokenCount--, null == this._intervalID && (this._intervalID = setInterval(() => this._iterate(), this._intervalPeriod));
        let e = this._queue.shift();
        null == e || e(), this._processQueue()
      }
    }, 0)
  }
  _iterate() {
    this._tokenCount = Math.min(this._capacity, this._tokenCount + 1), this._tokenCount >= this._capacity && null != this._intervalID && (clearInterval(this._intervalID), this._intervalID = null), this._processQueue()
  }
  process() {
    return new Promise(e => {
      this._queue.push(e), this._processQueue()
    })
  }
  constructor(e, t) {
    r(this, "_capacity", true), r(this, "_tokenCount", true), r(this, "_queue", true), r(this, "_intervalPeriod", true), r(this, "_intervalID", true), this._capacity = e, this._tokenCount = e, this._queue = [], this._intervalPeriod = t / e, this._intervalID = null
  }
}