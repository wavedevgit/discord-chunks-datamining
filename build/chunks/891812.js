/** Chunk was on web.js **/
/** chunk id: 891812, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk46973 = require("./46973.js"),
  Chunk846027 = require("./846027.js"),
  Chunk147913 = require("./147913.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk375538 = require("./375538.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk147913.Z {
  constructor(...e) {
    super(...e), d(this, "handlePostConnectionOpen", () => {
      null == r || r(), (0, l.isWeb)() || (r = c.g.subscribe({
        location: "KrispExperimentManager handlePostConnectionOpen"
      }, e => {
        var t;
        let {
          enableStats: n
        } = e;
        null == (t = o.Z.setNoiseCancellationEnableStats) || t.call(o.Z, n)
      }))
    }), d(this, "handleRtcConnectionState", e => {
      let {
        state: t,
        context: n
      } = e;
      !(0, l.isWeb)() && n === i.Yn.DEFAULT && t !== u.hes.DISCONNECTED && t === u.hes.RTC_CONNECTED && s.Z.getKrispEnableStats() && s.Z.getNoiseCancellation() && (o.Z.setNoiseCancellation(false), o.Z.setNoiseCancellation(true))
    }), d(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RTC_CONNECTION_STATE: this.handleRtcConnectionState
    })
  }
}
let p = new f