/** Chunk was on web.js **/
/** chunk id: 751446, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk291823 = require("./291823.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk439372.A {
  constructor(...e) {
    super(...e), a(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), a(this, "handlePostConnectionOpen", () => {
      (0, i.J)()
    })
  }
}
let s = new o