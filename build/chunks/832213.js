/** Chunk was on web.js **/
/** chunk id: 832213, original params: e,t,n (module,exports,re quire) **/
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
  D: () => i
});
class i {
  getCPUCoreCount() {
    return this.cpuCoreCount
  }
  constructor() {
    r(this, "cpuCoreCount", true)
  }
}