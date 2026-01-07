/** Chunk was on web.js **/
/** chunk id: 188274, original params: e,t,n (module,exports,re quire) **/
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
}), require("./388685.js");
class i extends Array {
  push() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    for (let e of t) this.length >= this.maxSize && this.shift(), super.push(e);
    return this.length
  }
  constructor(e) {
    super(), r(this, "maxSize", true), this.maxSize = e
  }
}
let a = i