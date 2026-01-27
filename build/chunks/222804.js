/** Chunk was on web.js **/
/** chunk id: 222804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk197094 = require("./197094.js"),
  Chunk439372 = require("./439372.js"),
  Chunk626584 = require("./626584.js"),
  Chunk430452 = require("./430452.js"),
  Chunk873985 = require("./873985.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk731854 = require("./731854.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = +Chunk927813.A.Millis.SECOND,
  p = 30 * Chunk927813.A.Millis.SECOND,
  _ = 360,
  h = new Chunk626584.A("RTCLatencyTestManager");
h.enableNativeLogger(true);
class m extends Chunk439372.A {
  _terminate() {
    null != this.refetchTimeout && clearTimeout(this.refetchTimeout)
  }
  constructor(...e) {
    super(...e), d(this, "refetchTimeout", true), d(this, "actions", {
      POST_CONNECTION_OPEN: () => this._handleConnectionOpen()
    }), d(this, "_handleTestRegionsResponse", e => {
      let t = e.map(e => e.region);
      s.A.shouldPerformLatencyTest(t) ? o.A.getMediaEngine().rankRtcRegions(e).then(e => {
        h.verbose("RTC region latency test completed, ranked regions are: ", e), (0, r.b)(e, t)
      }).catch(e => h.warn(e)) : h.verbose("RTC cached ranked preferred regions are ".concat(s.A.getPreferredRegions()))
    }), d(this, "_fetchAndScheduleRefetch", () => {
      let e = o.A.supports(u.O5.PORT_AWARE_LATENCY_TESTING) ? 2 : 1;
      (0, r.B)(e).then(e => this._handleTestRegionsResponse(e.body)).catch(e => h.warn(e)), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, _ * l.A.Millis.MINUTE)
    }), d(this, "_handleConnectionOpen", () => {
      if (c.isPlatformEmbedded && !__OVERLAY__) {
        let e = Math.floor(f + Math.random() * p);
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e)
      }
    })
  }
}
let g = new m