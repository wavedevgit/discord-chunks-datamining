/** Chunk was on web.js **/
/** chunk id: 799422, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./205816.js");
var Chunk136722 = require("./136722.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  static has(e, t) {
    return (e & t) != 0
  }
  static asBasicFlag(e) {
    let t = 20;
    return r.pG(t, e)
  }
  static asBigFlag(e) {
    return Object.hasOwn(this.cache, e) || (this.cache[e] = r.iu(e)), this.cache[e]
  }
}
i(a, "cache", {})