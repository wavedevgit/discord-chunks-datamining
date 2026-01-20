/** Chunk was on 66788 **/
/** chunk id: 445102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk311473 = require("./311473.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js");
async function r(e, t) {
  let {
    rating: n,
    category: r,
    reasonCode: l,
    reasonDescription: c,
    variant: d,
    feedback: s,
    analyticsData: u
  } = t, b = o.Z.getSettings(), _ = o.Z.getInputDeviceId(), m = o.Z.getInputDevices()[_], p = o.Z.getOutputDeviceId(), f = o.Z.getOutputDevices()[p], g = o.Z.getVideoDeviceId(), v = o.Z.getVideoDevices()[g], O = o.Z.getNoiseCancellation(), y = o.Z.getMediaEngine().getAudioSubsystem(), F = o.Z.getMediaEngine().getAudioLayer(), h = await a.Z.getKrispModel();
  i.default.track(e, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({
    rating: null != n ? n : "no response",
    category: r,
    reason_code: l,
    reason_description: c,
    reason_variant: d,
    feedback: s,
    audio_input_mode: b.mode,
    automatic_audio_input_sensitivity_enabled: b.modeOptions.autoThreshold,
    audio_input_sensitivity: b.modeOptions.threshold,
    vad_use_advanced_voice_activity: b.modeOptions.vadUseKrisp,
    echo_cancellation_enabled: b.echoCancellation,
    noise_suppression_enabled: b.noiseSuppression,
    automatic_gain_control_enabled: b.automaticGainControl,
    voice_output_volume: b.outputVolume,
    noise_cancellation_enabled: O,
    input_device_name: null == m ? true : m.name,
    output_device_name: null == f ? true : f.name,
    video_device_name: null == v ? true : v.name,
    audio_subsystem: y,
    audio_layer: F,
    automatic_audio_subsystem: b.automaticAudioSubsystem,
    krisp_nc_model: h
  }, u))
}