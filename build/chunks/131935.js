/** Chunk was on 51997 **/
/** chunk id: 131935, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk559633 = require("./559633.js"),
  Chunk430452 = require("./430452.js"),
  Chunk954571 = require("./954571.js");
async function l(e, t) {
  let {
    rating: o,
    category: l,
    reasonCode: _,
    reasonDescription: c,
    variant: r,
    feedback: s,
    analyticsData: d
  } = t, u = n.A.getSettings(), b = n.A.getInputDeviceId(), m = n.A.getInputDevices()[b], p = n.A.getOutputDeviceId(), v = n.A.getOutputDevices()[p], g = n.A.getVideoDeviceId(), A = n.A.getVideoDevices()[g], y = n.A.getNoiseCancellation(), h = n.A.getMediaEngine().getAudioSubsystem(), O = n.A.getMediaEngine().getAudioLayer(), f = await i.A.getKrispModel();
  a.default.track(e, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
        return Object.getOwnPropertyDescriptor(o, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = o[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({
    rating: null != o ? o : "no response",
    category: l,
    reason_code: _,
    reason_description: c,
    reason_variant: r,
    feedback: s,
    audio_input_mode: u.mode,
    automatic_audio_input_sensitivity_enabled: u.modeOptions.autoThreshold,
    audio_input_sensitivity: u.modeOptions.threshold,
    vad_use_advanced_voice_activity: u.modeOptions.vadUseKrisp,
    echo_cancellation_enabled: u.echoCancellation,
    noise_suppression_enabled: u.noiseSuppression,
    automatic_gain_control_enabled: u.automaticGainControl,
    voice_output_volume: u.outputVolume,
    noise_cancellation_enabled: y,
    input_device_name: null == m ? true : m.name,
    output_device_name: null == v ? true : v.name,
    video_device_name: null == A ? true : A.name,
    audio_subsystem: h,
    audio_layer: O,
    automatic_audio_subsystem: u.automaticAudioSubsystem,
    krisp_nc_model: f
  }, d))
}