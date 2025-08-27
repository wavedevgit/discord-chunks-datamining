/** Chunk was on web.js **/
/** chunk id: 137412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk213919 = require("./213919.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk358085 = require("./358085.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
  }
  constructor(...e) {
    super(...e), s(this, "handleConnectionOpen", e => {
      ((0, o.isWindows)() || (0, o.isMac)()) && r.encryptAndStoreTokens()
    })
  }
}
let c = new l