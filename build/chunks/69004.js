/** Chunk was on web.js **/
/** chunk id: 69004, original params: e,t,n (module,exports,re quire) **/
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
class i extends Map {
  set(e, t) {
    return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t)
  }
  constructor(e) {
    super(), r(this, "maxSize", true), this.maxSize = e
  }
}
let a = i