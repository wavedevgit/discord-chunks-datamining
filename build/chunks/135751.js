/** Chunk was on 32249 **/
/** chunk id: 135751, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => c
});
var Chunk745200 = require("./745200.js"),
  Chunk579092 = require("./579092.js"),
  Chunk82328 = require("./82328.js"),
  Chunk869950 = require("./869950.js");

function i(e, t, n) {
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
    var e, t, n;
    let o = null != (t = null == (e = window.GLOBAL_ENV) ? true : module.MUX_ENV_KEY) ? exports : null;
    if (null == Chunk579092 || 0 === Chunk579092.length) return;
    let l = {
      debug: null != (n = this.config.debug) && require,
      disableCookies: true,
      respectDoNotTrack: true,
      data: Chunk82328.v.mapDiscordToMuxMetadata(this.config, this.sessionId)
    };
    null != this.hlsInstance && (Chunk869950.hlsjs = this.hlsInstance, Chunk869950.Hls = this.hlsInstance.constructor);
    try {
      Chunk745200.Z.monitor(this.videoElement, Chunk869950), this.isMonitoring = true
    } catch (e) {
      s.error("Error creating Mux monitor", module), this.isMonitoring = false
    }
  }
  endSession() {
    if (this.isMonitoring) try {
      "function" == typeof Chunk745200.Z.destroyMonitor && Chunk745200.Z.destroyMonitor(this.videoElement), this.isMonitoring = false
    } catch (e) {
      s.error("Error ending Mux session", module)
    }
  }
  destroy() {
    if (this.isMonitoring) try {
      "function" == typeof Chunk745200.Z.destroyMonitor && Chunk745200.Z.destroyMonitor(this.videoElement), this.isMonitoring = false
    } catch (e) {
      s.error("Error destroying Mux monitor", module)
    }
  }
  getSessionId() {
    return this.sessionId
  }
  constructor(e) {
    i(this, "isMonitoring", false), i(this, "videoElement", true), i(this, "config", true), i(this, "sessionId", true), i(this, "hlsInstance", true), this.config = e, this.videoElement = e.videoElement, this.sessionId = l.S.generateSessionId(), this.hlsInstance = e.hlsInstance
  }
}