/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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
  h: () => i
});
class i {
  getCPUCoreCount() {
    return this.cpuCoreCount
  }
  constructor() {
    r(this, "cpuCoreCount", void 0)
  }
}