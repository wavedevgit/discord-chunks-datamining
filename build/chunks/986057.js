/** Chunk was on web.js **/
/** chunk id: 986057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk846027 = require("./846027.js"),
  Chunk147913 = require("./147913.js"),
  Chunk353926 = require("./353926.js"),
  Chunk294629 = require("./294629.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk743498 = require("./743498.js"),
  Chunk875527 = require("./875527.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p() {
  return (0, Chunk875527.wt)({
    location: "VoiceFilterLoopbackManager",
    autoTrackExposure: false
  })
}

function _() {
  if (!p() || !Chunk131951.Z.getVoiceFilterPlaybackEnabled() || !Chunk19780.Z.isConnected() || null == Chunk131951.Z.getActiveVoiceFilter()) returnfalse;
  let e = Chunk19780.Z.getChannelId(),
    t = null != module ? Chunk592125.Z.getChannel(module) : null,
    {
      mute: n,
      selfMute: r,
      suppress: i
    } = (0, Chunk294629.b)({
      channel: exports
    });
  return !(require || Chunk846027 || Chunk147913)
}
class m extends Chunk147913.Z {
  handleExperimentStateChange() {
    !p() && Chunk131951.Z.getVoiceFilterPlaybackEnabled() && (0, Chunk743498._j)(false)
  }
  updateLoopbackState() {
    let e = _();
    module !== Chunk131951.Z.getLoopbackReasons().has("voice_filter") && Chunk846027.Z.setLoopback("voice_filter", module)
  }
  constructor(...e) {
    super(...e), f(this, "actions", {
      VOICE_FILTER_LOOPBACK_TOGGLE: this.updateLoopbackState,
      RTC_CONNECTION_STATE: this.updateLoopbackState,
      VOICE_FILTER_APPLIED: this.updateLoopbackState,
      AUDIO_TOGGLE_SELF_MUTE: this.updateLoopbackState,
      AUDIO_SET_TEMPORARY_SELF_MUTE: this.updateLoopbackState,
      AUDIO_SET_SELF_MUTE: this.updateLoopbackState
    }), f(this, "stores", new Map().set(a.Z, this.handleExperimentStateChange))
  }
}
let h = new m