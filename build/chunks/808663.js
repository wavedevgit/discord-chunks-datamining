/** Chunk was on web.js **/
/** chunk id: 808663, original params: e,t,n (module,exports,re quire) **/
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
  Z: () => a
}), require("./539854.js");
class i {
  enqueue(e) {
    this.queue.push(e)
  }
  flush() {
    for (; this.queue.length > 0;) {
      var e;
      null == (e = this.queue.shift()) || e()
    }
  }
  constructor() {
    r(this, "queue", [])
  }
}
let a = new i