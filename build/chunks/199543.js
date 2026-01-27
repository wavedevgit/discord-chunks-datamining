/** Chunk was on web.js **/
/** chunk id: 199543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk966597 = require("./966597.js"),
  Chunk216623 = require("./216623.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s() {
  i.A.getCurrentConfig({
    location: "saved_messages_manager"
  }, {
    autoTrackExposure: false
  }).enabled && (0, a.AX)()
}
class l extends Chunk439372.A {
  constructor(...e) {
    super(...e), o(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), o(this, "handlePostConnectionOpen", () => {
      s()
    })
  }
}
let c = new l