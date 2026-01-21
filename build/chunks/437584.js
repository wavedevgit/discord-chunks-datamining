/** Chunk was on web.js **/
/** chunk id: 437584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk70956 = require("./70956.js"),
  Chunk588956 = require("./588956.js"),
  Chunk468208 = require("./468208.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk147913.Z {
  _terminate() {
    null != this.intervalId && (clearInterval(this.intervalId), this.intervalId = true)
  }
  constructor(...e) {
    super(...e), s(this, "intervalId", true), s(this, "actions", {
      POST_CONNECTION_OPEN: () => {
        (0, a.Z)(), null != this.intervalId && clearInterval(this.intervalId), this.intervalId = setInterval(() => {
          (0, a.Z)()
        }, i.Z.Millis.HOUR)
      },
      BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => this._handleUserStateUpdate(),
      CURRENT_USER_UPDATE: () => this._handleUserStateUpdate()
    }), s(this, "_handleUserStateUpdate", () => {
      o.Z.isInProperTreatments() && o.Z.hasNecessaryPremiumSubscriptionStatus() && (0, a.K)()
    })
  }
}
let c = new l