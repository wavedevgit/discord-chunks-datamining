/** Chunk was on 96888 **/
n.d(t, {
  Z: () => s
});
var o = n(131951),
  i = n(626135),
  a = n(981631);

function s(e, t, n, s, l) {
  let r = o.Z.getSettings(),
    c = o.Z.getInputDeviceId(),
    u = o.Z.getInputDevices()[c],
    d = o.Z.getOutputDeviceId(),
    _ = o.Z.getOutputDevices()[d],
    m = o.Z.getVideoDeviceId(),
    b = o.Z.getVideoDevices()[m],
    h = o.Z.getNoiseCancellation(),
    p = o.Z.getMediaEngine().getAudioSubsystem(),
    f = o.Z.getMediaEngine().getAudioLayer();
  i.default.track(a.rMx.CALL_REPORT_PROBLEM, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), o.forEach(function(t) {
        var o;
        o = n[t], t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = o
      })
    }
    return e
  }({
    rating: null != e ? e : "no response",
    reason_code: t,
    reason_description: n,
    feedback: s,
    audio_input_mode: r.mode,
    automatic_audio_input_sensitivity_enabled: r.modeOptions.autoThreshold,
    audio_input_sensitivity: r.modeOptions.threshold,
    echo_cancellation_enabled: r.echoCancellation,
    noise_suppression_enabled: r.noiseSuppression,
    automatic_gain_control_enabled: r.automaticGainControl,
    voice_output_volume: r.outputVolume,
    noise_cancellation_enabled: h,
    input_device_name: null == u ? void 0 : u.name,
    output_device_name: null == _ ? void 0 : _.name,
    video_device_name: null == b ? void 0 : b.name,
    audio_subsystem: p,
    audio_layer: f,
    automatic_audio_subsystem: r.automaticAudioSubsystem
  }, l))
}