/** Chunk was on web.js **/
/** chunk id: 988746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk579092 = require("./579092.js"),
  Chunk46973 = require("./46973.js"),
  Chunk65154 = require("./65154.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Chunk579092.Yd("ConnectionEventFramerateReducer");
class l {
  initialize() {
    this.userSpeakingChange(true)
  }
  userSpeakingChange(e) {
    if (!this.connection.hasDesktopSource()) {
      if (this.destroyFramerateScaleFactorTimers(), !e) {
        this.sinkWants.isMuted && (this.sinkWants.isMuted = false, this.updateRemoteWantsFramerate());
        return
      }
      this.framerateReductionTimeout = setTimeout(() => {
        this.connection.destroyed || (s.info("BaseConnection.userSpeakingChange: Reduced framerate after ".concat(o.u$, " ms.")), this.framerateReductionTimeout = true, this.sinkWants.isMuted = true, this.updateRemoteWantsFramerate())
      }, o.u$)
    }
  }
  destroyFramerateScaleFactorTimers() {
    "number" == typeof this.framerateReductionTimeout && (clearTimeout(this.framerateReductionTimeout), this.framerateReductionTimeout = true)
  }
  updateRemoteWantsFramerate() {
    this.connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"])
  }
  destroy() {
    this.destroyFramerateScaleFactorTimers()
  }
  constructor(e, t) {
    a(this, "connection", true), a(this, "sinkWants", true), a(this, "framerateReductionTimeout", true), a(this, "handleSpeaking", true), a(this, "handleSelfMute", true), this.connection = e, this.sinkWants = t, this.handleSpeaking = (e, t) => {
      e === this.connection.userId && this.userSpeakingChange(t === o.Dg.NONE)
    }, this.handleSelfMute = e => {
      this.connection.hasDesktopSource() || (this.destroyFramerateScaleFactorTimers(), this.sinkWants.isMuted = e, this.updateRemoteWantsFramerate())
    }, s.enableNativeLogger(true), e.on(i.Sh.Speaking, this.handleSpeaking), e.on(i.Sh.Mute, this.handleSelfMute), this.initialize()
  }
}