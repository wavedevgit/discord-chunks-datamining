/** Chunk was on 92521 **/
/** chunk id: 33806, original params: e,t,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => s
});
var Chunk178249 = require("./178249.js"),
  Chunk597796 = require("./597796.js");

function r(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
class a {
  start() {
    this.isPolling || (this.isPolling = true, this.pollIntervalId = setInterval(() => {
      this.poll()
    }, Chunk597796.G))
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
    r(this, "pollIntervalId", null), r(this, "isPolling", false), r(this, "eventPoller", true), this.eventPoller = new l.Z(e)
  }
}
let s = e => new a(e)