/** Chunk was on web.js **/
/** chunk id: 399907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk668757 = require("./668757.js"),
  Chunk147913 = require("./147913.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk147913.Z {
  _initialize() {
    if ((0, r.un)()) {
      let e = "https:".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/bad-hash-delta");
      (0, r.pf)(e);
      return
    }
  }
  constructor(...e) {
    super(...e), a(this, "intervalID", true)
  }
}
let s = new o