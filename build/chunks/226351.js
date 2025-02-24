/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
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
  o: () => i
});
class i {
  constructor() {
    r(this, "promise", void 0), r(this, "resolve", void 0), r(this, "reject", void 0), this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t
    })
  }
}