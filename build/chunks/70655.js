/** Chunk was on web.js **/
/** chunk id: 70655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk70780 = require("./70780.js"),
  Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk131951 = require("./131951.js"),
  Chunk936349 = require("./936349.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk65154 = require("./65154.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = +Chunk70956.Z.Millis.SECOND,
  p = 30 * Chunk70956.Z.Millis.SECOND,
  _ = 360,
  h = new Chunk710845.Z("RTCLatencyTestManager");
h.enableNativeLogger(true);
class m extends Chunk147913.Z {
  _terminate() {
    null != this.refetchTimeout && clearTimeout(this.refetchTimeout)
  }
  constructor(...e) {
    super(...e), d(this, "refetchTimeout", true), d(this, "actions", {
      POST_CONNECTION_OPEN: () => this._handleConnectionOpen()
    }), d(this, "_handleTestRegionsResponse", e => {
      let t = e.map(e => e.region);
      s.Z.shouldPerformLatencyTest(t) ? o.Z.getMediaEngine().rankRtcRegions(e).then(e => {
        h.verbose("RTC region latency test completed, ranked regions are: ", e), (0, r.o)(e, t)
      }).catch(e => h.warn(e)) : h.verbose("RTC cached ranked preferred regions are ".concat(s.Z.getPreferredRegions()))
    }), d(this, "_fetchAndScheduleRefetch", () => {
      let e = o.Z.supports(u.AN.PORT_AWARE_LATENCY_TESTING) ? 2 : 1;
      (0, r.J)(e).then(e => this._handleTestRegionsResponse(e.body)).catch(e => h.warn(e)), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, _ * l.Z.Millis.MINUTE)
    }), d(this, "_handleConnectionOpen", () => {
      if (c.isPlatformEmbedded && !__OVERLAY__) {
        let e = Math.floor(f + Math.random() * p);
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e)
      }
    })
  }
}
let g = new m