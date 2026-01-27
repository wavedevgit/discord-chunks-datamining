/** Chunk was on web.js **/
/** chunk id: 199944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk913612 = require("./913612.js"),
  Chunk942405 = require("./942405.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk439372.A {
  handlePostConnectionOpen() {
    (0, i.C)(), (0, a.Tn)("startup")
  }
  handleLogout() {
    (0, a.AV)()
  }
  constructor(...e) {
    super(...e), o(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      LOGOUT: this.handleLogout
    })
  }
}
let l = new s