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
  Z: () => o
}), n(653041);
class i {
  enqueue(e) {
    this.queue.push(e)
  }
  flush() {
    for (; this.queue.length > 0;) {
      var e;
      null === (e = this.queue.shift()) || void 0 === e || e()
    }
  }
  constructor() {
    r(this, "queue", [])
  }
}
let o = new i