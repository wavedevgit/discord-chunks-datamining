/** Chunk was on web.js **/
/** chunk id: 65457, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk205693 = require("./205693.js"),
  Chunk827343 = require("./827343.js"),
  Chunk439372 = require("./439372.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk855454 = require("./855454.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk439372.A {
  constructor(...e) {
    super(...e), d(this, "handlePostConnectionOpen", () => {
      null == r || r(), (0, l.isWeb)() || (r = c.C.subscribe({
        location: "KrispExperimentManager handlePostConnectionOpen"
      }, e => {
        var t;
        let {
          enableStats: n
        } = e;
        null == (t = a.A.setNoiseCancellationEnableStats) || t.call(a.A, n)
      }))
    }), d(this, "handleRtcConnectionState", e => {
      let {
        state: t,
        context: n
      } = e;
      (0, l.isWeb)() || n === i.x.DEFAULT && t !== u.S7L.DISCONNECTED && t === u.S7L.RTC_CONNECTED && s.A.getKrispEnableStats() && s.A.getNoiseCancellation() && (a.A.setNoiseCancellation(false), a.A.setNoiseCancellation(true))
    }), d(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RTC_CONNECTION_STATE: this.handleRtcConnectionState
    })
  }
}
let p = new f