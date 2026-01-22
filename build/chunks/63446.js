/** Chunk was on web.js **/
/** chunk id: 63446, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk287809 = require("./287809.js"),
  Chunk38050 = require("./38050.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk439372.A {
  constructor(...e) {
    super(...e), s(this, "actions", {
      HAVEN_DISCONNECT: e => this.handleHavenDisconnect(e)
    }), s(this, "handleHavenDisconnect", e => {
      let t = i.default.getCurrentUser();
      e.userId === (null == t ? true : t.id) && a.n.getState().resetPlayback()
    })
  }
}
let l = new o