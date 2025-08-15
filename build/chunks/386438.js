/** Chunk was on web.js **/
/** chunk id: 386438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./825670.js");
var Chunk149765 = require("./149765.js");

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
    return r.ug(t, e)
  }
  static asBigFlag(e) {
    return Object.hasOwn(this.cache, e) || (this.cache[e] = r.vB(e)), this.cache[e]
  }
}
i(a, "cache", {})