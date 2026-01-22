/** Chunk was on web.js **/
/** chunk id: 423805, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk827343 = require("./827343.js"),
  Chunk439372 = require("./439372.js"),
  Chunk49463 = require("./49463.js"),
  Chunk173660 = require("./173660.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk504292 = require("./504292.js"),
  Chunk996744 = require("./996744.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p() {
  return (0, d.Lb)({
    location: "VoiceFilterLoopbackManager",
    autoTrackExposure: false
  })
}

function _() {
  if (!p() || !l.A.getVoiceFilterPlaybackEnabled() || !c.A.isConnected() || null == l.A.getActiveVoiceFilter()) returnfalse;
  let e = c.A.getChannelId(),
    t = null != e ? o.A.getChannel(e) : null,
    {
      mute: n,
      selfMute: r,
      suppress: i
    } = (0, s.k)({
      channel: t
    });
  return !(n || r || i)
}
class h extends Chunk439372.A {
  handleExperimentStateChange() {
    !p() && l.A.getVoiceFilterPlaybackEnabled() && (0, u.KM)(false)
  }
  updateLoopbackState() {
    let e = _();
    e !== l.A.getLoopbackReasons().has("voice_filter") && r.A.setLoopback("voice_filter", e)
  }
  constructor(...e) {
    super(...e), f(this, "actions", {
      VOICE_FILTER_LOOPBACK_TOGGLE: this.updateLoopbackState,
      RTC_CONNECTION_STATE: this.updateLoopbackState,
      VOICE_FILTER_APPLIED: this.updateLoopbackState,
      AUDIO_TOGGLE_SELF_MUTE: this.updateLoopbackState,
      AUDIO_SET_TEMPORARY_SELF_MUTE: this.updateLoopbackState,
      AUDIO_SET_SELF_MUTE: this.updateLoopbackState
    }), f(this, "stores", new Map().set(a.A, this.handleExperimentStateChange))
  }
}
let m = new h