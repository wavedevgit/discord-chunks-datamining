/** Chunk was on web.js **/
/** chunk id: 415202, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk927813 = require("./927813.js"),
  Chunk961250 = require("./961250.js"),
  Chunk895944 = require("./895944.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk439372.A {
  _terminate() {
    null != this.intervalId && (clearInterval(this.intervalId), this.intervalId = true)
  }
  constructor(...e) {
    super(...e), s(this, "intervalId", true), s(this, "actions", {
      POST_CONNECTION_OPEN: () => {
        (0, a.A)(), null != this.intervalId && clearInterval(this.intervalId), this.intervalId = setInterval(() => {
          (0, a.A)()
        }, i.A.Millis.HOUR)
      },
      BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => this._handleUserStateUpdate(),
      CURRENT_USER_UPDATE: () => this._handleUserStateUpdate()
    }), s(this, "_handleUserStateUpdate", () => {
      o.A.isInProperTreatments() && o.A.hasNecessaryPremiumSubscriptionStatus() && (0, a.t)()
    })
  }
}
let c = new l