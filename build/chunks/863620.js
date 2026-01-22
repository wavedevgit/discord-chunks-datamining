/** Chunk was on web.js **/
/** chunk id: 863620, original params: e,t,n (module,exports,re quire) **/
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
  u: () => i
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