/** Chunk was on web.js **/
/** chunk id: 437584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk111361 = require("./111361.js"),
  Chunk588956 = require("./588956.js"),
  Chunk468208 = require("./468208.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk147913.Z {
  _terminate() {
    null != this.intervalId && (clearInterval(this.intervalId), this.intervalId = true)
  }
  constructor(...e) {
    super(...e), c(this, "intervalId", true), c(this, "actions", {
      POST_CONNECTION_OPEN: () => {
        (0, s.Z)(), null != this.intervalId && clearInterval(this.intervalId), this.intervalId = setInterval(() => {
          (0, s.Z)()
        }, a.Z.Millis.HOUR)
      },
      BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => this._handleUserStateUpdate(),
      CURRENT_USER_UPDATE: () => this._handleUserStateUpdate()
    }), c(this, "_handleUserStateUpdate", () => {
      l.Z.isInProperTreatments() && (0, o.I5)(i.default.getCurrentUser()) && (0, s.K)()
    })
  }
}
let d = new u