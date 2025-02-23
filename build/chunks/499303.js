/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n.d(t, {
  I: () => i
});
class i {
  schedule(e, t) {
    this.unschedule(), this.timeoutId = setTimeout(() => {
      this.timeoutId = null, e()
    }, t)
  }
  unschedule() {
    this.scheduled() && (clearTimeout(this.timeoutId), this.timeoutId = null)
  }
  scheduled() {
    return null !== this.timeoutId
  }
  constructor() {
    r(this, "timeoutId", null)
  }
}