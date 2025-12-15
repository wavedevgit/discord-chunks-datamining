/** Chunk was on web.js **/
/** chunk id: 662630, original params: e,t,n (module,exports,re quire) **/
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
  o: () => i
});
class i {
  constructor() {
    r(this, "promise", true), r(this, "resolve", true), r(this, "reject", true), this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t
    })
  }
}