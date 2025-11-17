/** Chunk was on web.js **/
/** chunk id: 846027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk460181 = require("./460181.js"),
  Chunk340332 = require("./340332.js"),
  Chunk569550 = require("./569550.js"),
  Chunk672339 = require("./672339.js"),
  Chunk463395 = require("./463395.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk557457 = require("./557457.js"),
  Chunk981631 = require("./981631.js"),
  Chunk509571 = require("./509571.js"),
  Chunk65154 = require("./65154.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let O = new Chunk710845.Z("AudioActionCreators");

function v() {
  (0, Chunk460181.GN)("mention3", true, true, true, Chunk509571.w.VOICE)
}

function I() {
  let e = Chunk131951.Z.getInputDevices()[Chunk131951.Z.getInputDeviceId()];
  return null != module ? module.name : ""
}

function T(e, t, n, r) {
  let {
    location: i,
    analyticsLocations: a
  } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {};
  if (t === n) return;
  let o = f.Z.getVoiceChannelId(),
    s = null != o ? u.Z.getChannel(o) : null,
    l = e[t],
    _ = e[n],
    h = d.Z.getMediaEngine().getAudioSubsystem(),
    g = d.Z.getMediaEngine().getAudioLayer();
  p.default.track(m.rMx.MEDIA_DEVICE_CHANGED, {
    device_from_name: c.Z.getCertifiedDeviceName(t, null != l ? l.name : ""),
    device_to_name: c.Z.getCertifiedDeviceName(n, null != _ ? _.name : ""),
    device_type: r,
    device_is_certified: c.Z.isCertified(n),
    location: i,
    location_stack: a,
    voice_channel_type: null == s ? true : s.type,
    audio_subsystem: h,
    audio_layer: g
  })
}
let S = {
    isNotSupported: () => false,
    enable: e => Promise.resolve(true),
    trackToggleSelfMute(e) {},
    trackToggleSelfDeaf(e) {}
  },
  {
    enable: A,
    isNotSupported: C,
    trackToggleSelfMute: N,
    trackToggleSelfDeaf: R
  } = S = require("./929782.jsx"),
  P = {
    enable: A,
    toggleSelfMute() {
      var e;
      let {
        context: t = Chunk65154.Yn.DEFAULT,
        syncRemote: n = true,
        usedKeybind: i = false,
        playSoundEffect: a = true,
        location: o
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return C() ? Promise.resolve() : (N({
        usedKeybind: Chunk710845,
        location: Chunk340332
      }), a = Chunk460181 && !Chunk131951.Z.hasActiveCallKitCall(), (null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && O.info("Toggling self mute"), Chunk131951.Z.isEnabled()) ? Chunk570140.Z.dispatch({
        type: "AUDIO_TOGGLE_SELF_MUTE",
        context: exports,
        syncRemote: require,
        playSoundEffect: Chunk460181
      }) : this.enable(true)
    },
    setSelfMute(e, t) {
      var n;
      let i = !(arguments.length > 2) || true === arguments[2] || arguments[2];
      C() || (i = i && !d.Z.hasActiveCallKitCall(), (null == (n = _.default.getCurrentUser()) ? true : n.isStaff()) && O.info("Setting self mute", t), r.Z.dispatch({
        type: "AUDIO_SET_SELF_MUTE",
        context: e,
        mute: t,
        playSoundEffect: i
      }))
    },
    setTemporarySelfMute(e) {
      var t;
      C() || ((null == (t = _.default.getCurrentUser()) ? true : t.isStaff()) && O.info("Setting temporary self mute", e), r.Z.dispatch({
        type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
        mute: e
      }))
    },
    toggleSelfDeaf() {
      let {
        context: e = Chunk65154.Yn.DEFAULT,
        syncRemote: t = true,
        usedKeybind: n = false,
        location: i
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      C() || (R({
        usedKeybind: require,
        location: Chunk710845
      }), Chunk570140.Z.dispatch({
        type: "AUDIO_TOGGLE_SELF_DEAF",
        context: module,
        syncRemote: exports
      }))
    },
    toggleLocalMute(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E.Yn.DEFAULT;
      C() || r.Z.dispatch({
        type: "AUDIO_TOGGLE_LOCAL_MUTE",
        context: t,
        userId: e
      })
    },
    toggleLocalSoundboardMute(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E.Yn.DEFAULT;
      r.Z.dispatch({
        type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
        context: t,
        userId: e
      })
    },
    setDisableLocalVideo(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : E.Yn.DEFAULT,
        i = !(arguments.length > 3) || true === arguments[3] || arguments[3],
        a = arguments.length > 4 && true !== arguments[4] && arguments[4];
      C() || r.Z.dispatch({
        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
        context: n,
        userId: e,
        videoToggleState: t,
        persist: i,
        isAutomatic: a
      })
    },
    setLocalVolume(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : E.Yn.DEFAULT;
      r.Z.dispatch({
        type: "AUDIO_SET_LOCAL_VOLUME",
        context: n,
        userId: e,
        volume: (0, o.r)(t, n)
      })
    },
    setLocalPan(e, t, n) {
      let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : E.Yn.DEFAULT;
      r.Z.dispatch({
        type: "AUDIO_SET_LOCAL_PAN",
        context: i,
        userId: e,
        left: t,
        right: n
      })
    },
    setMode(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : E.Yn.DEFAULT,
        {
          analyticsLocations: i
        } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      if (C()) return;
      let a = e !== d.Z.getMode(),
        o = d.Z.getModeOptions(n);
      if (r.Z.dispatch({
          type: "AUDIO_SET_MODE",
          context: n,
          mode: e,
          options: y({}, o, t)
        }), a) {
        let t = d.Z.getMediaEngine().getAudioSubsystem(),
          n = d.Z.getMediaEngine().getAudioLayer(),
          r = f.Z.getVoiceChannelId(),
          a = null != r ? u.Z.getChannel(r) : null,
          o = I();
        p.default.track(m.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
          mode: e,
          location_stack: i,
          voice_channel_type: null == a ? true : a.type,
          input_device_name: o,
          audio_subsystem: t,
          audio_layer: n
        })
      } else if (e === m.pM4.VOICE_ACTIVITY && o !== t) {
        let e = d.Z.getMediaEngine().getAudioSubsystem(),
          n = d.Z.getMediaEngine().getAudioLayer(),
          r = f.Z.getVoiceChannelId(),
          a = null != r ? u.Z.getChannel(r) : null,
          s = I();
        p.default.track(m.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
          location_stack: i,
          voice_channel_type: null == a ? true : a.type,
          input_device_name: s,
          audio_subsystem: e,
          audio_layer: n,
          old_threshold: o.threshold,
          new_threshold: t.threshold,
          old_auto_threshold: o.autoThreshold,
          new_auto_threshold: t.autoThreshold
        })
      }
    },
    setBypassSystemInputProcessing(e, t) {
      C() || r.Z.dispatch({
        type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING",
        bypassEnabled: e,
        location: t
      })
    },
    setInputVolume(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (C()) return;
      r.Z.dispatch({
        type: "AUDIO_SET_INPUT_VOLUME",
        volume: e
      });
      let n = f.Z.getVoiceChannelId(),
        i = null != n ? u.Z.getChannel(n) : null;
      p.default.track(m.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
        volume: e,
        location_stack: t,
        voice_channel_type: null == i ? true : i.type
      })
    },
    setOutputVolume(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (C()) return;
      r.Z.dispatch({
        type: "AUDIO_SET_OUTPUT_VOLUME",
        volume: e
      });
      let n = f.Z.getVoiceChannelId(),
        i = null != n ? u.Z.getChannel(n) : null;
      p.default.track(m.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
        volume: e,
        location_stack: t,
        voice_channel_type: null == i ? true : i.type
      })
    },
    setInputDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (C()) return;
      let i = d.Z.getInputDeviceId();
      (null != t || null != n) && T(d.Z.getInputDevices(), i, e, "Audio Input", {
        location: t,
        analyticsLocations: n
      }), r.Z.dispatch({
        type: "AUDIO_SET_INPUT_DEVICE",
        id: e,
        oldId: i
      }), v()
    },
    setOutputDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (C()) return;
      let i = d.Z.getOutputDeviceId();
      (null != t || null != n) && T(d.Z.getOutputDevices(), i, e, "Audio Output", {
        location: t,
        analyticsLocations: n
      }), r.Z.dispatch({
        type: "AUDIO_SET_OUTPUT_DEVICE",
        id: e,
        oldId: i
      }), v()
    },
    setVideoDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (C()) return;
      let i = d.Z.getVideoDeviceId();
      (null != t || null != n) && T(d.Z.getVideoDevices(), i, e, "Video", {
        location: t,
        analyticsLocations: n
      }), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
        id: e,
        oldId: i
      })
    },
    setActiveInputProfile(e) {
      var t;
      let {
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      C() || ((0, s.Z)("active_input_profile", e, null != (t = d.Z.getActiveInputProfile()) ? t : true, n), r.Z.dispatch({
        type: "AUDIO_SET_ACTIVE_INPUT_PROFILE",
        inputProfile: e
      }))
    },
    setEchoCancellation(e, t) {
      C() || r.Z.dispatch({
        type: "AUDIO_SET_ECHO_CANCELLATION",
        enabled: e,
        location: t
      })
    },
    setSidechainCompression(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      C() || ((0, s.Z)("stream_attenuation_enabled", e, d.Z.getSidechainCompression(), t), r.Z.dispatch({
        type: "AUDIO_SET_SIDECHAIN_COMPRESSION",
        enabled: e
      }))
    },
    setSidechainCompressionStrength(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      C() || ((0, s.Z)("stream_attenuation_strength", e, d.Z.getSidechainCompressionStrength(), t), r.Z.dispatch({
        type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH",
        strength: e
      }))
    },
    setLoopback(e, t) {
      C() || r.Z.dispatch({
        type: "AUDIO_SET_LOOPBACK",
        loopbackReason: e,
        enabled: t
      })
    },
    setNoiseSuppression(e, t) {
      C() || r.Z.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: e,
        location: t
      })
    },
    setNoiseCancellation(e, t) {
      C() || (r.Z.dispatch({
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
      C() || r.Z.dispatch({
        type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
        enabled: e,
        location: t
      })
    },
    setAttenuation(e, t, n) {
      C() || ((() => {
        let r = d.Z.getAttenuation(),
          i = d.Z.getAttenuateWhileSpeakingSelf(),
          a = d.Z.getAttenuateWhileSpeakingOthers();
        return r !== e ? (0, s.Z)("global_attenuation_strength", e, r) : i !== t ? (0, s.Z)("global_attenuation_for_self_speak_enabled", t, i) : a !== n && (0, s.Z)("global_attenuation_for_other_speak_enabled", n, a)
      })(), r.Z.dispatch({
        type: "AUDIO_SET_ATTENUATION",
        attenuation: e,
        attenuateWhileSpeakingSelf: t,
        attenuateWhileSpeakingOthers: n
      }))
    },
    setQoS(e) {
      C() || ((0, s.Z)("quality_of_service_packets_enabled", e, d.Z.getQoS()), r.Z.dispatch({
        type: "AUDIO_SET_QOS",
        enabled: e
      }))
    },
    reset() {
      C() || Chunk570140.Z.dispatch({
        type: "AUDIO_RESET"
      })
    },
    setSilenceWarning(e) {
      C() || ((0, s.Z)("silence_warning_enabled", e, d.Z.getEnableSilenceWarning()), r.Z.dispatch({
        type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
        enabled: e
      }))
    },
    async setDebugLogging(e) {
      C() || (await (0, s.Z)("debug_logging_enabled", e, d.Z.getDebugLogging()), r.Z.dispatch({
        type: "AUDIO_SET_DEBUG_LOGGING",
        enabled: e
      }))
    },
    setVideoHook(e) {
      C() || ((0, s.Z)("video_hook_enabled", e, d.Z.getVideoHook()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
        enabled: e
      }))
    },
    setExperimentalSoundshare(e) {
      C() || ((0, s.Z)("experimental_soundshare_enabled", e, d.Z.getExperimentalSoundshare()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
        enabled: e
      }))
    },
    setUseSystemScreensharePicker(e) {
      C() || ((0, s.Z)("system_screenshare_picker_enabled", e, d.Z.getUseSystemScreensharePicker()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER",
        enabled: e
      }))
    },
    async setAudioSubsystem(e) {
      C() || (await (0, s.Z)("audio_subsystem", e, d.Z.getAudioSubsystem()), r.Z.dispatch({
        type: "AUDIO_SET_SUBSYSTEM",
        subsystem: e
      }))
    },
    setVideoEnabled(e) {
      (0, l.eH)(), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
        enabled: e
      })
    },
    setGoLiveSource(e) {
      (null == e ? true : e.qualityOptions) != null && (0, h.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: e
      })
    },
    setAecDump(e) {
      C() || ((0, s.Z)("diagnostic_audio_recording_enabled", e, d.Z.getAecDump()), r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_AEC_DUMP",
        enabled: e
      }))
    },
    interact() {
      C() || Chunk570140.Z.dispatch({
        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
        required: false
      })
    },
    setEnableHardwareMuteNotice(e) {
      C() || r.Z.dispatch({
        type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE",
        enabled: e
      })
    },
    setKrispSuppressionLevel(e) {
      C() || r.Z.dispatch({
        type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL",
        level: e
      })
    },
    setKrispModelOverride(e) {
      !C() && (r.Z.dispatch({
        type: "AUDIO_SET_KRISP_MODEL_OVERRIDE",
        model: e
      }), d.Z.getNoiseCancellation() && (this.setNoiseCancellation(false), this.setNoiseCancellation(true)))
    },
    setNoiseCancellationEnableStats(e) {
      C() || r.Z.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS",
        enabled: e
      })
    },
    resetMediaEngineSettings(e) {
      r.Z.dispatch({
        type: "MEDIA_ENGINE_RESET_SETTINGS",
        overrides: e
      })
    }
  }