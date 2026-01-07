/** Chunk was on 75909 **/
/** chunk id: 135751, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => c
});
var Chunk841992 = require("./841992.js"),
  Chunk579092 = require("./579092.js"),
  Chunk82328 = require("./82328.js"),
  Chunk869950 = require("./869950.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Chunk579092.Yd("SimpleMuxWrapper");
class c {
  initialize() {
    var e;
    let t = {
      debug: null != (e = this.config.debug) && e,
      disableCookies: true,
      respectDoNotTrack: true,
      data: l.v.mapDiscordToMuxMetadata(this.config, this.sessionId)
    };
    null != this.hlsInstance && (t.hlsjs = this.hlsInstance, t.Hls = this.hlsInstance.constructor);
    try {
      r.Z.monitor(this.videoElement, t), this.isMonitoring = true
    } catch (e) {
      s.error("Error creating Mux monitor", e), this.isMonitoring = false
    }
  }
  endSession() {
    if (this.isMonitoring) try {
      "function" == typeof r.Z.destroyMonitor && r.Z.destroyMonitor(this.videoElement), this.isMonitoring = false
    } catch (e) {
      s.error("Error ending Mux session", e)
    }
  }
  destroy() {
    if (this.isMonitoring) try {
      "function" == typeof r.Z.destroyMonitor && r.Z.destroyMonitor(this.videoElement), this.isMonitoring = false
    } catch (e) {
      s.error("Error destroying Mux monitor", e)
    }
  }
  getSessionId() {
    return this.sessionId
  }
  constructor(e) {
    a(this, "isMonitoring", false), a(this, "videoElement", true), a(this, "config", true), a(this, "sessionId", true), a(this, "hlsInstance", true), this.config = e, this.videoElement = e.videoElement, this.sessionId = i.S.generateSessionId(), this.hlsInstance = e.hlsInstance
  }
}