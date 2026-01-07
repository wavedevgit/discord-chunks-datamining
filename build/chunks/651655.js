/** Chunk was on web.js **/
/** chunk id: 651655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./539854.js"), require("./358797.js"), require("./290780.js");
var Chunk427786 = require("./427786.js"),
  i = require.n(Chunk427786);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new(require("./710845.js")).Z("Queue");
class s {
  enqueue(e, t, n) {
    this.queue.push({
      message: e,
      success: t,
      logId: n
    }), this._drainIfNecessary()
  }
  get length() {
    return this.queue.length
  }
  _drainIfNecessary() {
    if (null !== this.timeout || 0 === this.queue.length || true === this.draining) return;
    this.draining = true;
    let e = this.queue.shift(),
      {
        message: t,
        success: n,
        logId: r
      } = e,
      i = (t, i) => {
        if (this.logger.log("Finished draining message from queue LogId:".concat(r, " QueueLength: ").concat(this.queue.length)), this.draining = false, null == t) {
          setImmediate(() => this._drainIfNecessary());
          try {
            n(i)
          } catch (e) {
            this.logger.error("", e)
          }
        } else {
          var a;
          let n = null != (a = t.retryAfter) ? a : this.defaultRetryAfter;
          this.logger.info("Rate limited. Delaying draining of queue for ".concat(n, " ms. LogId:").concat(r, " QueueLength: ").concat(this.queue.length)), this.timeout = setTimeout(() => {
            this.queue.unshift(e), this.timeout = null, this._drainIfNecessary()
          }, n)
        }
      };
    this.logger.log("Draining message from queue LogId:".concat(r, " QueueLength: ").concat(this.queue.length)), this.drain(t, i)
  }
  constructor(e = o, t = 100) {
    a(this, "logger", true), a(this, "defaultRetryAfter", true), a(this, "queue", true), a(this, "timeout", true), a(this, "draining", true), this.logger = e, this.defaultRetryAfter = t, this.queue = new(i()), this.timeout = null, this.draining = false
  }
}