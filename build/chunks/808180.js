/** Chunk was on web.js **/
/** chunk id: 808180, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => d,
  X: () => p
});
var Chunk972347 = require("./972347.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk784113 = require("./784113.js"),
  Chunk927813 = require("./927813.js"),
  Chunk399307 = require("./399307.js");

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
class f extends Chunk972347.A {
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
    super(), u(this, "disableVideoTimer", new i.Ep), u(this, "discordVisible", true), u(this, "incomingVideoEnabled", true), u(this, "lastEnabledChange", performance.now()), u(this, "logger", new s.A("WindowVisibilityVideoManager")), u(this, "HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS", 30 * l.A.Millis.SECOND), u(this, "update", () => {
      this.discordVisible !== (0, c.A)() && (this.discordVisible = (0, c.A)(), this.emit("window-visibility-changed", this.discordVisible), this.discordVisible ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(true)) : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
        this.setIncomingVideoEnabled(false)
      }))
    }), a.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.update), a.h.subscribe("APP_STATE_UPDATE", this.update), o.A.addOnPipModeChangedListener(this.update)
  }
}
let p = new f