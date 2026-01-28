/** Chunk was on web.js **/
/** chunk id: 415202, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk239266 = require("./239266.js"),
  Chunk439372 = require("./439372.js"),
  Chunk927813 = require("./927813.js"),
  Chunk961250 = require("./961250.js"),
  Chunk895944 = require("./895944.js"),
  Chunk649032 = require("./649032.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk439372.A {
  _initializeProgramRewards() {
    let e = s.A.getRewardForProgram(l.W.NITRO),
      t = null == e ? true : e.next_reward_date;
    null == e || null != t && (0, r.A)(new Date(t)) ? (0, o.uM)() : (0, o.Ay)(), null != this.intervalId && clearInterval(this.intervalId), this.intervalId = setInterval(() => {
      (0, o.Ay)()
    }, a.A.Millis.HOUR)
  }
  _terminate() {
    null != this.intervalId && (clearInterval(this.intervalId), this.intervalId = true)
  }
  constructor(...e) {
    super(...e), c(this, "intervalId", true), c(this, "actions", {
      POST_CONNECTION_OPEN: () => this._initializeProgramRewards(),
      BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, o.uM)(),
      CURRENT_USER_UPDATE: () => (0, o.uM)(),
      VIRTUAL_CURRENCY_BALANCE_UPDATE: () => (0, o.uM)()
    })
  }
}
let d = new u