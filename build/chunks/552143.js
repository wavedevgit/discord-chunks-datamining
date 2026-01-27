/** Chunk was on web.js **/
/** chunk id: 552143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 3e3;
class l extends Chunk439372.A {
  _terminate() {
    this.clearErrorTimeout.stop()
  }
  constructor(...e) {
    super(...e), o(this, "clearErrorTimeout", new r.Ep), o(this, "actions", {
      MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
    }), o(this, "handleNoiseCancellationError", () => {
      this.clearErrorTimeout.start(s, () => i.h.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET"
      }))
    })
  }
}
let c = new l