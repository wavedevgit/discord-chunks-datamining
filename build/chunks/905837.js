/** Chunk was on 64062 **/
/** chunk id: 905837, original params: e,t,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => a
});
var Chunk69747 = require("./69747.js");

function r(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
require("./64683.js");
class n {
  start() {
    this.isPolling || (this.isPolling = true, this.pollIntervalId = setInterval(() => {
      this.poll()
    }, 1e3))
  }
  stop() {
    this.isPolling && (this.isPolling = false, null != this.pollIntervalId && (clearInterval(this.pollIntervalId), this.pollIntervalId = null), this.eventPoller.reset())
  }
  getState() {
    return {
      isPolling: this.isPolling
    }
  }
  async poll() {
    await this.eventPoller.poll()
  }
  constructor(e) {
    r(this, "pollIntervalId", null), r(this, "isPolling", false), r(this, "eventPoller", true), this.eventPoller = new l.A(e)
  }
}
let a = e => new n(e)