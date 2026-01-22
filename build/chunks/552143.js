/** Chunk was on web.js **/
/** chunk id: 552143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = 3e3;
class l extends Chunk439372.A {
  _terminate() {
    this.clearErrorTimeout.stop()
  }
  constructor(...e) {
    super(...e), s(this, "clearErrorTimeout", new r.Ep), s(this, "actions", {
      MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
    }), s(this, "handleNoiseCancellationError", () => {
      this.clearErrorTimeout.start(o, () => i.h.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET"
      }))
    })
  }
}
let c = new l