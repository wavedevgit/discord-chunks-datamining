/** Chunk was on 23628 **/
/** chunk id: 531443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c
});
var Chunk141711 = require("./141711.js"),
  Chunk118356 = require("./118356.js"),
  Chunk740644 = require("./740644.js"),
  Chunk497329 = require("./497329.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = new Chunk118356.Vy("SimpleMuxWrapper");
class c {
  initialize() {
    var e;
    let t = {
      debug: null != (e = this.config.debug) && e,
      disableCookies: true,
      respectDoNotTrack: true,
      data: o.H.mapDiscordToMuxMetadata(this.config, this.sessionId)
    };
    null != this.hlsInstance && (t.hlsjs = this.hlsInstance, t.Hls = this.hlsInstance.constructor);
    try {
      r.A.monitor(this.videoElement, t), this.isMonitoring = true
    } catch (e) {
      a.error("Error creating Mux monitor", e), this.isMonitoring = false
    }
  }
  endSession() {
    if (this.isMonitoring) try {
      "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement), this.isMonitoring = false
    } catch (e) {
      a.error("Error ending Mux session", e)
    }
  }
  destroy() {
    if (this.isMonitoring) try {
      "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement), this.isMonitoring = false
    } catch (e) {
      a.error("Error destroying Mux monitor", e)
    }
  }
  getSessionId() {
    return this.sessionId
  }
  constructor(e) {
    s(this, "isMonitoring", false), s(this, "videoElement", true), s(this, "config", true), s(this, "sessionId", true), s(this, "hlsInstance", true), this.config = e, this.videoElement = e.videoElement, this.sessionId = i.C.generateSessionId(), this.hlsInstance = e.hlsInstance
  }
}