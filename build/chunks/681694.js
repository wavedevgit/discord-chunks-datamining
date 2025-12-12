/** Chunk was on web.js **/
/** chunk id: 681694, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 3e3;
class l extends Chunk147913.Z {
  _terminate() {
    this.clearErrorTimeout.stop()
  }
  constructor(...e) {
    super(...e), a(this, "clearErrorTimeout", new r.V7), a(this, "actions", {
      MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
    }), a(this, "handleNoiseCancellationError", () => {
      this.clearErrorTimeout.start(s, () => i.Z.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET"
      }))
    })
  }
}
let c = new l