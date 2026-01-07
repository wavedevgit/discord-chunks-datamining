/** Chunk was on web.js **/
/** chunk id: 519159, original params: e,t,n (module,exports,re quire) **/
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
  m: () => i
}), require("./539854.js");
class i {
  clear() {
    this.timeline.length = 0
  }
  updateLength(e) {
    this.timelineLength = e, this.cull()
  }
  add(e) {
    if (0 === this.timeline.length || this.timeline[this.timeline.length - 1].timestamp <= e.timestamp) {
      this.timeline.push(e), this.cull();
      return
    }
    let t = this.timeline.length;
    for (let n = this.timeline.length - 1; n >= 0; n--)
      if (this.timeline[n].timestamp <= e.timestamp) {
        t = n + 1;
        break
      } t === this.timeline.length && this.timeline[0].timestamp > e.timestamp && (t = 0), this.timeline.splice(t, 0, e), this.cull()
  }
  read() {
    return this.cull(), this.timeline
  }
  cull() {
    let e = Date.now() - this.timelineLength;
    for (; this.timeline.length > 0 && this.timeline[0].timestamp < e;) this.timeline.shift()
  }
  constructor(e = 3e5) {
    r(this, "timeline", []), r(this, "timelineLength", true), this.timelineLength = e
  }
}