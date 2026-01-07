/** Chunk was on web.js **/
/** chunk id: 798681, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => d,
  w: () => p
});
var Chunk47770 = require("./47770.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk646047 = require("./646047.js"),
  Chunk70956 = require("./70956.js"),
  Chunk27414 = require("./27414.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var d = function(e) {
  return e.WindowVisibilityChanged = "window-visibility-changed", e.IncomingVideoEnabledChanged = "incoming-video-enabled-changed", e
}({});
class f extends Chunk47770.Z {
  isIncomingVideoEnabled() {
    return this.incomingVideoEnabled
  }
  lastIncomingVideoEnabledChangeTime() {
    return this.lastEnabledChange
  }
  setIncomingVideoEnabled(e) {
    let t = this.incomingVideoEnabled !== e;
    this.incomingVideoEnabled = e, t && (this.logger.info("Incoming video enabled changed, incomingVideoEnabled = ".concat(this.incomingVideoEnabled)), this.lastEnabledChange = performance.now(), this.emit("incoming-video-enabled-changed", this.incomingVideoEnabled))
  }
  constructor() {
    super(), u(this, "disableVideoTimer", new i.V7), u(this, "discordVisible", true), u(this, "incomingVideoEnabled", true), u(this, "lastEnabledChange", performance.now()), u(this, "logger", new o.Z("WindowVisibilityVideoManager")), u(this, "HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS", 30 * l.Z.Millis.SECOND), u(this, "update", () => {
      this.discordVisible !== (0, c.Z)() && (this.discordVisible = (0, c.Z)(), this.emit("window-visibility-changed", this.discordVisible), this.discordVisible ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(true)) : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
        this.setIncomingVideoEnabled(false)
      }))
    }), a.Z.subscribe("WINDOW_VISIBILITY_CHANGE", this.update), a.Z.subscribe("APP_STATE_UPDATE", this.update), s.Z.addOnPipModeChangedListener(this.update)
  }
}
let p = new f