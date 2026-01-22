/** Chunk was on web.js **/
/** chunk id: 272355, original params: e,t,n (module,exports,re quire) **/
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
  A: () => i
}), require("./896048.js"), require("./423034.js");
class i {
  initialize() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    this.isInitialized || (this.isInitialized = true, this._initialize(...t))
  }
  terminate() {
    this.isInitialized && (this.isInitialized = false, this._terminate())
  }
  constructor() {
    r(this, "isInitialized", false)
  }
}