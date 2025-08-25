/** Chunk was on web.js **/
/** chunk id: 70655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk70780 = require("./70780.js"),
  Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk131951 = require("./131951.js"),
  Chunk936349 = require("./936349.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = +Chunk70956.Z.Millis.SECOND,
  f = 30 * Chunk70956.Z.Millis.SECOND,
  _ = 360,
  p = new Chunk710845.Z("RTCLatencyTestManager");
p.enableNativeLogger(true);
class h extends Chunk147913.Z {
  _terminate() {
    null != this.refetchTimeout && clearTimeout(this.refetchTimeout)
  }
  constructor(...e) {
    super(...e), u(this, "refetchTimeout", true), u(this, "actions", {
      POST_CONNECTION_OPEN: () => this._handleConnectionOpen()
    }), u(this, "_handleTestRegionsResponse", e => {
      let t = e.map(e => e.region);
      s.Z.shouldPerformLatencyTest(t) ? a.Z.getMediaEngine().rankRtcRegions(e).then(e => {
        p.verbose("RTC region latency test completed, ranked regions are: ", e), (0, r.o)(e, t)
      }).catch(e => p.warn(e)) : p.verbose("RTC cached ranked preferred regions are ".concat(s.Z.getPreferredRegions()))
    }), u(this, "_fetchAndScheduleRefetch", () => {
      (0, r.J)().then(e => this._handleTestRegionsResponse(e.body)).catch(e => p.warn(e)), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, _ * l.Z.Millis.MINUTE)
    }), u(this, "_handleConnectionOpen", () => {
      if (c.isPlatformEmbedded && !__OVERLAY__) {
        let e = Math.floor(d + Math.random() * f);
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e)
      }
    })
  }
}
let m = new h