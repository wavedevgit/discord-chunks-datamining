/** Chunk was on 96888 **/
/** chunk id: 882542, original params: e,t,n (module,exports,require) **/
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
    reasonCode: o,
    reasonDescription: s,
    variant: u,
    feedback: d,
    analyticsData: c
  } = t, b = l.Z.getSettings(), f = l.Z.getInputDeviceId(), O = l.Z.getInputDevices()[f], v = l.Z.getOutputDeviceId(), _ = l.Z.getOutputDevices()[v], m = l.Z.getVideoDeviceId(), E = l.Z.getVideoDevices()[m], p = l.Z.getNoiseCancellation(), g = l.Z.getMediaEngine().getAudioSubsystem(), h = l.Z.getMediaEngine().getAudioLayer(), S = await a.Z.getKrispModel();
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
    reason_code: o,
    reason_description: s,
    reason_variant: u,
    feedback: d,
    audio_input_mode: b.mode,
    automatic_audio_input_sensitivity_enabled: b.modeOptions.autoThreshold,
    audio_input_sensitivity: b.modeOptions.threshold,
    vad_use_advanced_voice_activity: b.modeOptions.vadUseKrisp,
    echo_cancellation_enabled: b.echoCancellation,
    noise_suppression_enabled: b.noiseSuppression,
    automatic_gain_control_enabled: b.automaticGainControl,
    voice_output_volume: b.outputVolume,
    noise_cancellation_enabled: p,
    input_device_name: null == O ? true : O.name,
    output_device_name: null == _ ? true : _.name,
    video_device_name: null == E ? true : E.name,
    audio_subsystem: g,
    audio_layer: h,
    automatic_audio_subsystem: b.automaticAudioSubsystem,
    krisp_nc_model: S
  }, c))
}