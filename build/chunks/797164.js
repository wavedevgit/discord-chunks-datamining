/** Chunk was on web.js **/
/** chunk id: 797164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk306173 = require("./306173.js"),
  Chunk439372 = require("./439372.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk439372.A {
  _initialize() {
    if ((0, r.xd)()) {
      let e = "https:".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/bad-hash-delta");
      (0, r.kk)(e);
      return
    }
  }
  constructor(...e) {
    super(...e), a(this, "intervalID", true)
  }
}
let o = new s