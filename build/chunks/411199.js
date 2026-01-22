/** Chunk was on web.js **/
/** chunk id: 411199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk247775 = require("./247775.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk723702 = require("./723702.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
  }
  _terminate() {
    i.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
  }
  constructor(...e) {
    super(...e), o(this, "handleConnectionOpen", e => {
      ((0, s.isWindows)() || (0, s.isMac)()) && r.encryptAndStoreTokens()
    })
  }
}
let c = new l