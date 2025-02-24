/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => A
});
var r = n(570140),
  i = n(460181),
  o = n(340332),
  a = n(569550),
  s = n(672339),
  l = n(463395),
  c = n(592125),
  u = n(131951),
  d = n(944486),
  f = n(626135),
  p = n(557457),
  _ = n(981631),
  h = n(509571),
  m = n(65154);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function v() {
  (0, i.GN)("mention3", void 0, void 0, void 0, h.w.VOICE)
}

function b() {
  let e = u.Z.getInputDevices()[u.Z.getInputDeviceId()];
  return null != e ? e.name : ""
}

function y(e, t, n, r) {
  let {
    location: i,
    analyticsLocations: o
  } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
  if (t === n) return;
  let a = d.Z.getVoiceChannelId(),
    s = null != a ? c.Z.getChannel(a) : null,
    p = e[t],
    h = e[n],
    m = u.Z.getMediaEngine().getAudioSubsystem(),
    g = u.Z.getMediaEngine().getAudioLayer();
  f.default.track(_.rMx.MEDIA_DEVICE_CHANGED, {
    device_from_name: l.Z.getCertifiedDeviceName(t, null != p ? p.name : ""),
    device_to_name: l.Z.getCertifiedDeviceName(n, null != h ? h.name : ""),
    device_type: r,
    device_is_certified: l.Z.isCertified(n),
    location: i,
    location_stack: o,
    voice_channel_type: null == s ? void 0 : s.type,
    audio_subsystem: m,
    audio_layer: g
  })
}
let O = {
    isNotSupported: () => !1,
    enable: e => Promise.resolve(!0),
    trackToggleSelfMute(e) {},
    trackToggleSelfDeaf(e) {}
  },
  {
    enable: S,
    isNotSupported: I,
    trackToggleSelfMute: T,
    trackToggleSelfDeaf: N
  } = O = n(929782),
  A = {
    enable: S,
    toggleSelfMute() {
      let {
        context: e = m.Yn.DEFAULT,
        syncRemote: t = !0,
        usedKeybind: n = !1,
        playSoundEffect: i = !0,
        location: o
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return I() ? Promise.resolve() : (T({
        usedKeybind: n,
        location: o
      }), u.Z.isEnabled()) ? r.Z.dispatch({
        type: "AUDIO_TOGGLE_SELF_MUTE",
        context: e,
        syncRemote: t,
        skipMuteUnmuteSoundEffect: !i
      }) : this.enable(!0)
    },
    setSelfMute(e, t) {
      I() || r.Z.dispatch({
        type: "AUDIO_SET_SELF_MUTE",
        context: e,
        mute: t
      })
    },
    setTemporarySelfMute(e) {
      I() || r.Z.dispatch({
        type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
        mute: e
      })
    },
    toggleSelfDeaf() {
      let {
        context: e = m.Yn.DEFAULT,
        syncRemote: t = !0,
        usedKeybind: n = !1,
        location: i
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      I() || (N({
        usedKeybind: n,
        location: i
      }), r.Z.dispatch({
        type: "AUDIO_TOGGLE_SELF_DEAF",
        context: e,
        syncRemote: t
      }))
    },
    toggleLocalMute(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT;
      I() || r.Z.dispatch({
        type: "AUDIO_TOGGLE_LOCAL_MUTE",
        context: t,
        userId: e
      })
    },
    toggleLocalSoundboardMute(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT;
      r.Z.dispatch({
        type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
        context: t,
        userId: e
      })
    },
    setDisableLocalVideo(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT,
        i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      I() || r.Z.dispatch({
        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
        context: n,
        userId: e,
        videoToggleState: t,
        persist: i,
        isAutomatic: o
      })
    },
    setLocalVolume(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT;
      r.Z.dispatch({
        type: "AUDIO_SET_LOCAL_VOLUME",
        context: n,
        userId: e,
        volume: (0, o.r)(t, n)
      })
    },
    setLocalPan(e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m.Yn.DEFAULT;
      r.Z.dispatch({
        type: "AUDIO_SET_LOCAL_PAN",
        context: i,
        userId: e,
        left: t,
        right: n
      })
    },
    setMode(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT,
        {
          analyticsLocations: i
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (I()) return;
      let o = e !== u.Z.getMode(),
        a = u.Z.getModeOptions(n);
      if (r.Z.dispatch({
          type: "AUDIO_SET_MODE",
          context: n,
          mode: e,
          options: E({}, a, t)
        }), o) {
        let t = u.Z.getMediaEngine().getAudioSubsystem(),
          n = u.Z.getMediaEngine().getAudioLayer(),
          r = d.Z.getVoiceChannelId(),
          o = null != r ? c.Z.getChannel(r) : null,
          a = b();
        f.default.track(_.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
          mode: e,
          location_stack: i,
          voice_channel_type: null == o ? void 0 : o.type,
          input_device_name: a,
          audio_subsystem: t,
          audio_layer: n
        })
      } else if (e === _.pM4.VOICE_ACTIVITY && a !== t) {
        let e = u.Z.getMediaEngine().getAudioSubsystem(),
          n = u.Z.getMediaEngine().getAudioLayer(),
          r = d.Z.getVoiceChannelId(),
          o = null != r ? c.Z.getChannel(r) : null,
          s = b();
        f.default.track(_.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
          location_stack: i,
          voice_channel_type: null == o ? void 0 : o.type,
          input_device_name: s,
          audio_subsystem: e,
          audio_layer: n,
          old_threshold: a.threshold,
          new_threshold: t.threshold,
          old_auto_threshold: a.autoThreshold,
          new_auto_threshold: t.autoThreshold
        })
      }
    },
    setInputVolume(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (I()) return;
      r.Z.dispatch({
        type: "AUDIO_SET_INPUT_VOLUME",
        volume: e
      });
      let n = d.Z.getVoiceChannelId(),
        i = null != n ? c.Z.getChannel(n) : null;
      f.default.track(_.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
        volume: e,
        location_stack: t,
        voice_channel_type: null == i ? void 0 : i.type
      })
    },
    setOutputVolume(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (I()) return;
      r.Z.dispatch({
        type: "AUDIO_SET_OUTPUT_VOLUME",
        volume: e
      });
      let n = d.Z.getVoiceChannelId(),
        i = null != n ? c.Z.getChannel(n) : null;
      f.default.track(_.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
        volume: e,
        location_stack: t,
        voice_channel_type: null == i ? void 0 : i.type
      })
    },
    setInputDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      !I() && ((null != t || null != n) && y(u.Z.getInputDevices(), u.Z.getInputDeviceId(), e, "Audio Input", {
        location: t,
        analyticsLocations: n
      }), r.Z.dispatch({
        type: "AUDIO_SET_INPUT_DEVICE",
        id: e
      }), v())
    },
    setOutputDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      !I() && ((null != t || null != n) && y(u.Z.getOutputDevices(), u.Z.getOutputDeviceId(), e, "Audio Output", {
        location: t,
        analyticsLocations: n
      }), r.Z.dispatch({
        type: "AUDIO_SET_OUTPUT_DEVICE",
        id: e
      }), v())
    },
    setVideoDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      !I() && ((null != t || null != n) && y(u.Z.getVideoDevices(), u.Z.getVideoDeviceId(), e, "Video", {
        location: t,
        analyticsLocations: n
      }), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
        id: e
      }))
    },
    setEchoCancellation(e, t) {
      I() || r.Z.dispatch({
        type: "AUDIO_SET_ECHO_CANCELLATION",
        enabled: e,
        location: t
      })
    },
    setSidechainCompression(e) {
      I() || ((0, a.Z)("stream_attenuation_enabled", e, u.Z.getSidechainCompression()), r.Z.dispatch({
        type: "AUDIO_SET_SIDECHAIN_COMPRESSION",
        enabled: e
      }))
    },
    setSidechainCompressionStrength(e) {
      I() || ((0, a.Z)("stream_attenuation_strength", e, u.Z.getSidechainCompressionStrength()), r.Z.dispatch({
        type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH",
        strength: e
      }))
    },
    setLoopback(e, t) {
      I() || r.Z.dispatch({
        type: "AUDIO_SET_LOOPBACK",
        loopbackReason: e,
        enabled: t
      })
    },
    setNoiseSuppression(e, t) {
      I() || r.Z.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: e,
        location: t
      })
    },
    setNoiseCancellation(e, t) {
      I() || (r.Z.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION",
        enabled: e,
        location: t
      }), r.Z.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: !e,
        location: t
      }))
    },
    setAutomaticGainControl(e, t) {
      I() || r.Z.dispatch({
        type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
        enabled: e,
        location: t
      })
    },
    setExperimentalEncoders(e) {
      I() || ((0, a.Z)("experimental_encoders_enabled", e, u.Z.getExperimentalEncoders()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
        enabled: e
      }))
    },
    setHardwareEncoding(e) {
      I() || ((0, a.Z)("hardware_acceleration_enabled", e, u.Z.getHardwareEncoding()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_HARDWARE_ENCODING",
        enabled: e
      }))
    },
    setAttenuation(e, t, n) {
      I() || ((() => {
        let r = u.Z.getAttenuation(),
          i = u.Z.getAttenuateWhileSpeakingSelf(),
          o = u.Z.getAttenuateWhileSpeakingOthers();
        return r !== e ? (0, a.Z)("global_attenuation_strength", e, r) : i !== t ? (0, a.Z)("global_attenuation_for_self_speak_enabled", t, i) : o !== n ? (0, a.Z)("global_attenuation_for_other_speak_enabled", n, o) : void 0
      })(), r.Z.dispatch({
        type: "AUDIO_SET_ATTENUATION",
        attenuation: e,
        attenuateWhileSpeakingSelf: t,
        attenuateWhileSpeakingOthers: n
      }))
    },
    setQoS(e) {
      I() || ((0, a.Z)("quality_of_service_packets_enabled", e, u.Z.getQoS()), r.Z.dispatch({
        type: "AUDIO_SET_QOS",
        enabled: e
      }))
    },
    reset() {
      I() || r.Z.dispatch({
        type: "AUDIO_RESET"
      })
    },
    setSilenceWarning(e) {
      I() || ((0, a.Z)("silence_warning_enabled", e, u.Z.getEnableSilenceWarning()), r.Z.dispatch({
        type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
        enabled: e
      }))
    },
    async setDebugLogging(e) {
      I() || (await (0, a.Z)("debug_logging_enabled", e, u.Z.getDebugLogging()), r.Z.dispatch({
        type: "AUDIO_SET_DEBUG_LOGGING",
        enabled: e
      }))
    },
    setVideoHook(e) {
      I() || ((0, a.Z)("video_hook_enabled", e, u.Z.getVideoHook()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
        enabled: e
      }))
    },
    setExperimentalSoundshare(e) {
      I() || ((0, a.Z)("experimental_soundshare_enabled", e, u.Z.getExperimentalSoundshare()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
        enabled: e
      }))
    },
    setUseSystemScreensharePicker(e) {
      I() || ((0, a.Z)("system_screenshare_picker_enabled", e, u.Z.getUseSystemScreensharePicker()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER",
        enabled: e
      }))
    },
    async setAudioSubsystem(e) {
      I() || (await (0, a.Z)("audio_subsystem", e, u.Z.getAudioSubsystem()), r.Z.dispatch({
        type: "AUDIO_SET_SUBSYSTEM",
        subsystem: e
      }))
    },
    setVideoEnabled(e) {
      (0, s.eH)(), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
        enabled: e
      })
    },
    setGoLiveSource(e) {
      (null == e ? void 0 : e.qualityOptions) != null && (0, p.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: e
      })
    },
    setOpenH264(e) {
      I() || ((0, a.Z)("open_h264_enabled", e, u.Z.getOpenH264()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_OPEN_H264",
        enabled: e
      }))
    },
    setAecDump(e) {
      I() || ((0, a.Z)("diagnostic_audio_recording_enabled", e, u.Z.getAecDump()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_AEC_DUMP",
        enabled: e
      }))
    },
    interact() {
      I() || r.Z.dispatch({
        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
        required: !1
      })
    },
    setEnableHardwareMuteNotice(e) {
      I() || r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE",
        enabled: e
      })
    }
  }