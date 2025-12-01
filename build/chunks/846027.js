/** Chunk was on web.js **/
/** chunk id: 846027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
});
var Chunk954955 = require("./954955.js"),
  i = require.n(Chunk954955),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk460181 = require("./460181.js"),
  Chunk340332 = require("./340332.js"),
  Chunk569550 = require("./569550.js"),
  Chunk672339 = require("./672339.js"),
  Chunk463395 = require("./463395.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk557457 = require("./557457.js"),
  Chunk981631 = require("./981631.js"),
  Chunk509571 = require("./509571.js"),
  Chunk65154 = require("./65154.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}
let I = new Chunk710845.Z("AudioActionCreators");

function T() {
  (0, Chunk460181.GN)("mention3", true, true, true, Chunk509571.w.VOICE)
}

function A() {
  let e = Chunk131951.Z.getInputDevices()[Chunk131951.Z.getInputDeviceId()];
  return null != module ? module.name : ""
}

function C(e, t, n, r) {
  let {
    location: i,
    analyticsLocations: a
  } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {};
  if (t === n) return;
  let o = m.Z.getVoiceChannelId(),
    s = null != o ? f.Z.getChannel(o) : null,
    l = e[t],
    c = e[n],
    u = p.Z.getMediaEngine().getAudioSubsystem(),
    _ = p.Z.getMediaEngine().getAudioLayer();
  g.default.track(b.rMx.MEDIA_DEVICE_CHANGED, {
    device_from_name: d.Z.getCertifiedDeviceName(t, null != l ? l.name : ""),
    device_to_name: d.Z.getCertifiedDeviceName(n, null != c ? c.name : ""),
    device_type: r,
    device_is_certified: d.Z.isCertified(n),
    location: i,
    location_stack: a,
    voice_channel_type: null == s ? true : s.type,
    audio_subsystem: u,
    audio_layer: _
  })
}
let N = i()((e, t, n) => {
    g.default.track(b.rMx.USER_VOLUME_SETTING_UPDATED, {
      target_user_id: e,
      context: t,
      volume: n,
      media_session_id: _.Z.getMediaSessionId(),
      rtc_connection_id: _.Z.getRTCConnectionId()
    })
  }, 300),
  P = {
    isNotSupported: () => false,
    enable: e => Promise.resolve(true),
    trackToggleSelfMute(e) {},
    trackToggleSelfDeaf(e) {}
  },
  {
    enable: R,
    isNotSupported: w,
    trackToggleSelfMute: D,
    trackToggleSelfDeaf: x
  } = P = require("./929782.jsx"),
  L = {
    enable: R,
    toggleSelfMute() {
      var e;
      let {
        context: t = Chunk65154.Yn.DEFAULT,
        syncRemote: n = true,
        usedKeybind: r = false,
        playSoundEffect: i = true,
        location: o
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return w() ? Promise.resolve() : (D({
        usedKeybind: Chunk954955,
        location: Chunk710845
      }), i = i && !Chunk131951.Z.hasActiveCallKitCall(), (null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && I.info("Toggling self mute"), Chunk131951.Z.isEnabled()) ? Chunk570140.Z.dispatch({
        type: "AUDIO_TOGGLE_SELF_MUTE",
        context: exports,
        syncRemote: require,
        playSoundEffect: i
      }) : this.enable(true)
    },
    setSelfMute(e, t) {
      var n;
      let r = !(arguments.length > 2) || true === arguments[2] || arguments[2];
      w() || (r = r && !p.Z.hasActiveCallKitCall(), (null == (n = h.default.getCurrentUser()) ? true : n.isStaff()) && I.info("Setting self mute", t), a.Z.dispatch({
        type: "AUDIO_SET_SELF_MUTE",
        context: e,
        mute: t,
        playSoundEffect: r
      }))
    },
    setTemporarySelfMute(e) {
      var t;
      w() || ((null == (t = h.default.getCurrentUser()) ? true : t.isStaff()) && I.info("Setting temporary self mute", e), a.Z.dispatch({
        type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
        mute: e
      }))
    },
    toggleSelfDeaf() {
      let {
        context: e = Chunk65154.Yn.DEFAULT,
        syncRemote: t = true,
        usedKeybind: n = false,
        location: r
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      w() || (x({
        usedKeybind: require,
        location: Chunk954955
      }), Chunk570140.Z.dispatch({
        type: "AUDIO_TOGGLE_SELF_DEAF",
        context: module,
        syncRemote: exports
      }))
    },
    toggleLocalMute(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : O.Yn.DEFAULT;
      w() || a.Z.dispatch({
        type: "AUDIO_TOGGLE_LOCAL_MUTE",
        context: t,
        userId: e
      })
    },
    toggleLocalSoundboardMute(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : O.Yn.DEFAULT;
      a.Z.dispatch({
        type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
        context: t,
        userId: e
      })
    },
    setDisableLocalVideo(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : O.Yn.DEFAULT,
        r = !(arguments.length > 3) || true === arguments[3] || arguments[3],
        i = arguments.length > 4 && true !== arguments[4] && arguments[4];
      w() || a.Z.dispatch({
        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
        context: n,
        userId: e,
        videoToggleState: t,
        persist: r,
        isAutomatic: i
      })
    },
    setLocalVolume(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : O.Yn.DEFAULT,
        r = (0, l.r)(t, n);
      a.Z.dispatch({
        type: "AUDIO_SET_LOCAL_VOLUME",
        context: n,
        userId: e,
        volume: r
      }), N(e, n, r)
    },
    setLocalPan(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : O.Yn.DEFAULT;
      a.Z.dispatch({
        type: "AUDIO_SET_LOCAL_PAN",
        context: r,
        userId: e,
        left: t,
        right: n
      })
    },
    setMode(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : O.Yn.DEFAULT,
        {
          analyticsLocations: r
        } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      if (w()) return;
      let i = e !== p.Z.getMode(),
        o = p.Z.getModeOptions(n);
      if (a.Z.dispatch({
          type: "AUDIO_SET_MODE",
          context: n,
          mode: e,
          options: S({}, o, t)
        }), i) {
        let t = p.Z.getMediaEngine().getAudioSubsystem(),
          n = p.Z.getMediaEngine().getAudioLayer(),
          i = m.Z.getVoiceChannelId(),
          a = null != i ? f.Z.getChannel(i) : null,
          o = A();
        g.default.track(b.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
          mode: e,
          location_stack: r,
          voice_channel_type: null == a ? true : a.type,
          input_device_name: o,
          audio_subsystem: t,
          audio_layer: n
        })
      } else if (e === b.pM4.VOICE_ACTIVITY && o !== t) {
        let e = p.Z.getMediaEngine().getAudioSubsystem(),
          n = p.Z.getMediaEngine().getAudioLayer(),
          i = m.Z.getVoiceChannelId(),
          a = null != i ? f.Z.getChannel(i) : null,
          s = A();
        g.default.track(b.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
          location_stack: r,
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
      w() || a.Z.dispatch({
        type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING",
        bypassEnabled: e,
        location: t
      })
    },
    setInputVolume(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (w()) return;
      a.Z.dispatch({
        type: "AUDIO_SET_INPUT_VOLUME",
        volume: e
      });
      let n = m.Z.getVoiceChannelId(),
        r = null != n ? f.Z.getChannel(n) : null;
      g.default.track(b.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
        volume: e,
        location_stack: t,
        voice_channel_type: null == r ? true : r.type
      })
    },
    setOutputVolume(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (w()) return;
      a.Z.dispatch({
        type: "AUDIO_SET_OUTPUT_VOLUME",
        volume: e
      });
      let n = m.Z.getVoiceChannelId(),
        r = null != n ? f.Z.getChannel(n) : null;
      g.default.track(b.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
        volume: e,
        location_stack: t,
        voice_channel_type: null == r ? true : r.type
      })
    },
    setInputDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (w()) return;
      let r = p.Z.getInputDeviceId();
      (null != t || null != n) && C(p.Z.getInputDevices(), r, e, "Audio Input", {
        location: t,
        analyticsLocations: n
      }), a.Z.dispatch({
        type: "AUDIO_SET_INPUT_DEVICE",
        id: e,
        oldId: r
      }), T()
    },
    setOutputDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (w()) return;
      let r = p.Z.getOutputDeviceId();
      (null != t || null != n) && C(p.Z.getOutputDevices(), r, e, "Audio Output", {
        location: t,
        analyticsLocations: n
      }), a.Z.dispatch({
        type: "AUDIO_SET_OUTPUT_DEVICE",
        id: e,
        oldId: r
      }), T()
    },
    setVideoDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (w()) return;
      let r = p.Z.getVideoDeviceId();
      (null != t || null != n) && C(p.Z.getVideoDevices(), r, e, "Video", {
        location: t,
        analyticsLocations: n
      }), a.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
        id: e,
        oldId: r
      })
    },
    setActiveInputProfile(e) {
      var t;
      let {
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      w() || ((0, c.Z)("active_input_profile", e, null != (t = p.Z.getActiveInputProfile()) ? t : true, n), a.Z.dispatch({
        type: "AUDIO_SET_ACTIVE_INPUT_PROFILE",
        inputProfile: e
      }))
    },
    setEchoCancellation(e, t) {
      w() || a.Z.dispatch({
        type: "AUDIO_SET_ECHO_CANCELLATION",
        enabled: e,
        location: t
      })
    },
    setSidechainCompression(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      w() || ((0, c.Z)("stream_attenuation_enabled", e, p.Z.getSidechainCompression(), t), a.Z.dispatch({
        type: "AUDIO_SET_SIDECHAIN_COMPRESSION",
        enabled: e
      }))
    },
    setSidechainCompressionStrength(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      w() || ((0, c.Z)("stream_attenuation_strength", e, p.Z.getSidechainCompressionStrength(), t), a.Z.dispatch({
        type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH",
        strength: e
      }))
    },
    setLoopback(e, t) {
      w() || a.Z.dispatch({
        type: "AUDIO_SET_LOOPBACK",
        loopbackReason: e,
        enabled: t
      })
    },
    setNoiseSuppression(e, t) {
      w() || a.Z.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: e,
        location: t
      })
    },
    setNoiseCancellation(e, t) {
      w() || (a.Z.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION",
        enabled: e,
        location: t
      }), a.Z.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: !e,
        location: t
      }))
    },
    setAutomaticGainControl(e, t) {
      w() || a.Z.dispatch({
        type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
        enabled: e,
        location: t
      })
    },
    setAttenuation(e, t, n) {
      w() || ((() => {
        let r = p.Z.getAttenuation(),
          i = p.Z.getAttenuateWhileSpeakingSelf(),
          a = p.Z.getAttenuateWhileSpeakingOthers();
        return r !== e ? (0, c.Z)("global_attenuation_strength", e, r) : i !== t ? (0, c.Z)("global_attenuation_for_self_speak_enabled", t, i) : a !== n && (0, c.Z)("global_attenuation_for_other_speak_enabled", n, a)
      })(), a.Z.dispatch({
        type: "AUDIO_SET_ATTENUATION",
        attenuation: e,
        attenuateWhileSpeakingSelf: t,
        attenuateWhileSpeakingOthers: n
      }))
    },
    setQoS(e) {
      w() || ((0, c.Z)("quality_of_service_packets_enabled", e, p.Z.getQoS()), a.Z.dispatch({
        type: "AUDIO_SET_QOS",
        enabled: e
      }))
    },
    reset() {
      w() || Chunk570140.Z.dispatch({
        type: "AUDIO_RESET"
      })
    },
    setSilenceWarning(e) {
      w() || ((0, c.Z)("silence_warning_enabled", e, p.Z.getEnableSilenceWarning()), a.Z.dispatch({
        type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
        enabled: e
      }))
    },
    async setDebugLogging(e) {
      w() || (await (0, c.Z)("debug_logging_enabled", e, p.Z.getDebugLogging()), a.Z.dispatch({
        type: "AUDIO_SET_DEBUG_LOGGING",
        enabled: e
      }))
    },
    setVideoHook(e) {
      w() || ((0, c.Z)("video_hook_enabled", e, p.Z.getVideoHook()), a.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
        enabled: e
      }))
    },
    setExperimentalSoundshare(e) {
      w() || ((0, c.Z)("experimental_soundshare_enabled", e, p.Z.getExperimentalSoundshare()), a.Z.dispatch({
        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
        enabled: e
      }))
    },
    setUseSystemScreensharePicker(e) {
      w() || ((0, c.Z)("system_screenshare_picker_enabled", e, p.Z.getUseSystemScreensharePicker()), a.Z.dispatch({
        type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER",
        enabled: e
      }))
    },
    async setAudioSubsystem(e) {
      w() || (await (0, c.Z)("audio_subsystem", e, p.Z.getAudioSubsystem()), a.Z.dispatch({
        type: "AUDIO_SET_SUBSYSTEM",
        subsystem: e
      }))
    },
    setVideoEnabled(e) {
      (0, u.eH)(), a.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
        enabled: e
      })
    },
    setGoLiveSource(e) {
      (null == e ? true : e.qualityOptions) != null && (0, E.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), a.Z.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: e
      })
    },
    setAecDump(e) {
      w() || ((0, c.Z)("diagnostic_audio_recording_enabled", e, p.Z.getAecDump()), a.Z.dispatch({
        type: "MEDIA_ENGINE_SET_AEC_DUMP",
        enabled: e
      }))
    },
    interact() {
      w() || Chunk570140.Z.dispatch({
        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
        required: false
      })
    },
    setEnableHardwareMuteNotice(e) {
      w() || a.Z.dispatch({
        type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE",
        enabled: e
      })
    },
    setKrispSuppressionLevel(e) {
      w() || a.Z.dispatch({
        type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL",
        level: e
      })
    },
    setKrispModelOverride(e) {
      !w() && (a.Z.dispatch({
        type: "AUDIO_SET_KRISP_MODEL_OVERRIDE",
        model: e
      }), p.Z.getNoiseCancellation() && (this.setNoiseCancellation(false), this.setNoiseCancellation(true)))
    },
    setNoiseCancellationEnableStats(e) {
      w() || a.Z.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS",
        enabled: e
      })
    },
    resetMediaEngineSettings: e => a.Z.dispatch({
      type: "MEDIA_ENGINE_RESET_SETTINGS",
      overrides: e
    })
  }