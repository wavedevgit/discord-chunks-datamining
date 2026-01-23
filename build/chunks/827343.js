/** Chunk was on web.js **/
/** chunk id: 827343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
});
var Chunk111956 = require("./111956.js"),
  i = require.n(Chunk111956),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk400492 = require("./400492.js"),
  Chunk409826 = require("./409826.js"),
  Chunk698723 = require("./698723.js"),
  Chunk413339 = require("./413339.js"),
  Chunk347481 = require("./347481.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk650338 = require("./650338.js"),
  Chunk652215 = require("./652215.js"),
  Chunk257645 = require("./257645.js"),
  Chunk731854 = require("./731854.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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
let I = new Chunk626584.A("AudioActionCreators");

function S() {
  (0, o.Ak)("mention3", true, true, true, b.a.VOICE)
}

function T() {
  let e = p.A.getInputDevices()[p.A.getInputDeviceId()];
  return null != e ? e.name : ""
}

function C(e, t, n, r) {
  let {
    location: i,
    analyticsLocations: a
  } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {};
  if (t === n) return;
  let s = h.A.getVoiceChannelId(),
    o = null != s ? f.A.getChannel(s) : null,
    l = e[t],
    c = e[n],
    u = p.A.getMediaEngine().getAudioSubsystem(),
    _ = p.A.getMediaEngine().getAudioLayer();
  g.default.track(y.HAw.MEDIA_DEVICE_CHANGED, {
    device_from_name: d.A.getCertifiedDeviceName(t, null != l ? l.name : ""),
    device_to_name: d.A.getCertifiedDeviceName(n, null != c ? c.name : ""),
    device_type: r,
    device_is_certified: d.A.isCertified(n),
    location: i,
    location_stack: a,
    voice_channel_type: null == o ? true : o.type,
    audio_subsystem: u,
    audio_layer: _
  })
}
let N = i()((e, t, n) => {
    g.default.track(y.HAw.USER_VOLUME_SETTING_UPDATED, {
      target_user_id: e,
      context: t,
      volume: n,
      media_session_id: _.A.getMediaSessionId(),
      rtc_connection_id: _.A.getRTCConnectionId()
    })
  }, 300),
  R = {
    isNotSupported: () => false,
    enable: e => Promise.resolve(true),
    trackToggleSelfMute(e) {},
    trackToggleSelfDeaf(e) {}
  },
  {
    enable: w,
    isNotSupported: P,
    trackToggleSelfMute: D,
    trackToggleSelfDeaf: x
  } = R = require("./401124.jsx"),
  L = {
    enable: w,
    toggleSelfMute() {
      var e;
      let {
        context: t = O.x.DEFAULT,
        syncRemote: n = true,
        usedKeybind: r = false,
        playSoundEffect: i = true,
        location: s
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return P() ? Promise.resolve() : (D({
        usedKeybind: r,
        location: s
      }), i = i && !p.A.hasActiveCallKitCall(), (null == (e = m.default.getCurrentUser()) ? true : e.isStaff()) && I.info("Toggling self mute"), p.A.isEnabled()) ? a.h.dispatch({
        type: "AUDIO_TOGGLE_SELF_MUTE",
        context: t,
        syncRemote: n,
        playSoundEffect: i
      }) : this.enable(true)
    },
    setSelfMute(e, t) {
      var n;
      let r = !(arguments.length > 2) || true === arguments[2] || arguments[2];
      P() || (r = r && !p.A.hasActiveCallKitCall(), (null == (n = m.default.getCurrentUser()) ? true : n.isStaff()) && I.info("Setting self mute", t), a.h.dispatch({
        type: "AUDIO_SET_SELF_MUTE",
        context: e,
        mute: t,
        playSoundEffect: r
      }))
    },
    setTemporarySelfMute(e) {
      var t;
      P() || ((null == (t = m.default.getCurrentUser()) ? true : t.isStaff()) && I.info("Setting temporary self mute", e), a.h.dispatch({
        type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
        mute: e
      }))
    },
    toggleSelfDeaf() {
      let {
        context: e = O.x.DEFAULT,
        syncRemote: t = true,
        usedKeybind: n = false,
        location: r
      } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      P() || (x({
        usedKeybind: n,
        location: r
      }), a.h.dispatch({
        type: "AUDIO_TOGGLE_SELF_DEAF",
        context: e,
        syncRemote: t
      }))
    },
    toggleLocalMute(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : O.x.DEFAULT;
      P() || a.h.dispatch({
        type: "AUDIO_TOGGLE_LOCAL_MUTE",
        context: t,
        userId: e
      })
    },
    toggleLocalSoundboardMute(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : O.x.DEFAULT;
      a.h.dispatch({
        type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
        context: t,
        userId: e
      })
    },
    setDisableLocalVideo(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : O.x.DEFAULT,
        r = !(arguments.length > 3) || true === arguments[3] || arguments[3],
        i = arguments.length > 4 && true !== arguments[4] && arguments[4];
      P() || a.h.dispatch({
        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
        context: n,
        userId: e,
        videoToggleState: t,
        persist: r,
        isAutomatic: i
      })
    },
    setLocalVolume(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : O.x.DEFAULT,
        r = (0, l.z)(t, n);
      a.h.dispatch({
        type: "AUDIO_SET_LOCAL_VOLUME",
        context: n,
        userId: e,
        volume: r
      }), N(e, n, r)
    },
    setLocalPan(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : O.x.DEFAULT;
      a.h.dispatch({
        type: "AUDIO_SET_LOCAL_PAN",
        context: r,
        userId: e,
        left: t,
        right: n
      })
    },
    setMode(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : O.x.DEFAULT,
        {
          analyticsLocations: r
        } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      if (P()) return;
      let i = e !== p.A.getMode(),
        s = p.A.getModeOptions(n);
      if (a.h.dispatch({
          type: "AUDIO_SET_MODE",
          context: n,
          mode: e,
          options: A({}, s, t)
        }), i) {
        let t = p.A.getMediaEngine().getAudioSubsystem(),
          n = p.A.getMediaEngine().getAudioLayer(),
          i = h.A.getVoiceChannelId(),
          a = null != i ? f.A.getChannel(i) : null,
          s = T();
        g.default.track(y.HAw.VOICE_ACTIVATION_MODE_CHANGED, {
          mode: e,
          location_stack: r,
          voice_channel_type: null == a ? true : a.type,
          input_device_name: s,
          audio_subsystem: t,
          audio_layer: n
        })
      } else if (e === y.TBI.VOICE_ACTIVITY && s !== t) {
        let e = p.A.getMediaEngine().getAudioSubsystem(),
          n = p.A.getMediaEngine().getAudioLayer(),
          i = h.A.getVoiceChannelId(),
          a = null != i ? f.A.getChannel(i) : null,
          o = T();
        g.default.track(y.HAw.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
          location_stack: r,
          voice_channel_type: null == a ? true : a.type,
          input_device_name: o,
          audio_subsystem: e,
          audio_layer: n,
          old_threshold: s.threshold,
          new_threshold: t.threshold,
          old_auto_threshold: s.autoThreshold,
          new_auto_threshold: t.autoThreshold
        })
      }
    },
    setBypassSystemInputProcessing(e, t) {
      P() || a.h.dispatch({
        type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING",
        bypassEnabled: e,
        location: t
      })
    },
    setInputVolume(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (P()) return;
      a.h.dispatch({
        type: "AUDIO_SET_INPUT_VOLUME",
        volume: e
      });
      let n = h.A.getVoiceChannelId(),
        r = null != n ? f.A.getChannel(n) : null;
      g.default.track(y.HAw.MEDIA_INPUT_VOLUME_CHANGED, {
        volume: e,
        location_stack: t,
        voice_channel_type: null == r ? true : r.type
      })
    },
    setOutputVolume(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (P()) return;
      a.h.dispatch({
        type: "AUDIO_SET_OUTPUT_VOLUME",
        volume: e
      });
      let n = h.A.getVoiceChannelId(),
        r = null != n ? f.A.getChannel(n) : null;
      g.default.track(y.HAw.MEDIA_OUTPUT_VOLUME_CHANGED, {
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
      if (P()) return;
      let r = p.A.getInputDeviceId();
      (null != t || null != n) && C(p.A.getInputDevices(), r, e, "Audio Input", {
        location: t,
        analyticsLocations: n
      }), a.h.dispatch({
        type: "AUDIO_SET_INPUT_DEVICE",
        id: e,
        oldId: r
      }), S()
    },
    setOutputDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (P()) return;
      let r = p.A.getOutputDeviceId();
      (null != t || null != n) && C(p.A.getOutputDevices(), r, e, "Audio Output", {
        location: t,
        analyticsLocations: n
      }), a.h.dispatch({
        type: "AUDIO_SET_OUTPUT_DEVICE",
        id: e,
        oldId: r
      }), S()
    },
    setVideoDevice(e) {
      let {
        location: t,
        analyticsLocations: n
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (P()) return;
      let r = p.A.getVideoDeviceId();
      (null != t || null != n) && C(p.A.getVideoDevices(), r, e, "Video", {
        location: t,
        analyticsLocations: n
      }), a.h.dispatch({
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
      P() || ((0, c.A)("active_input_profile", e, null != (t = p.A.getActiveInputProfile()) ? t : true, n), a.h.dispatch({
        type: "AUDIO_SET_ACTIVE_INPUT_PROFILE",
        inputProfile: e
      }))
    },
    setEchoCancellation(e, t) {
      P() || a.h.dispatch({
        type: "AUDIO_SET_ECHO_CANCELLATION",
        enabled: e,
        location: t
      })
    },
    setSidechainCompression(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      P() || ((0, c.A)("stream_attenuation_enabled", e, p.A.getSidechainCompression(), t), a.h.dispatch({
        type: "AUDIO_SET_SIDECHAIN_COMPRESSION",
        enabled: e
      }))
    },
    setSidechainCompressionStrength(e) {
      let {
        analyticsLocations: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      P() || ((0, c.A)("stream_attenuation_strength", e, p.A.getSidechainCompressionStrength(), t), a.h.dispatch({
        type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH",
        strength: e
      }))
    },
    setLoopback(e, t) {
      P() || a.h.dispatch({
        type: "AUDIO_SET_LOOPBACK",
        loopbackReason: e,
        enabled: t
      })
    },
    setNoiseSuppression(e, t) {
      P() || a.h.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: e,
        location: t
      })
    },
    setNoiseCancellation(e, t) {
      P() || (a.h.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION",
        enabled: e,
        location: t
      }), a.h.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: !e,
        location: t
      }))
    },
    setAutomaticGainControl(e, t) {
      P() || a.h.dispatch({
        type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
        enabled: e,
        location: t
      })
    },
    setAttenuation(e, t, n) {
      P() || ((() => {
        let r = p.A.getAttenuation(),
          i = p.A.getAttenuateWhileSpeakingSelf(),
          a = p.A.getAttenuateWhileSpeakingOthers();
        return r !== e ? (0, c.A)("global_attenuation_strength", e, r) : i !== t ? (0, c.A)("global_attenuation_for_self_speak_enabled", t, i) : a !== n && (0, c.A)("global_attenuation_for_other_speak_enabled", n, a)
      })(), a.h.dispatch({
        type: "AUDIO_SET_ATTENUATION",
        attenuation: e,
        attenuateWhileSpeakingSelf: t,
        attenuateWhileSpeakingOthers: n
      }))
    },
    setQoS(e) {
      P() || ((0, c.A)("quality_of_service_packets_enabled", e, p.A.getQoS()), a.h.dispatch({
        type: "AUDIO_SET_QOS",
        enabled: e
      }))
    },
    reset() {
      P() || a.h.dispatch({
        type: "AUDIO_RESET"
      })
    },
    setSilenceWarning(e) {
      P() || ((0, c.A)("silence_warning_enabled", e, p.A.getEnableSilenceWarning()), a.h.dispatch({
        type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
        enabled: e
      }))
    },
    async setDebugLogging(e) {
      P() || (await (0, c.A)("debug_logging_enabled", e, p.A.getDebugLogging()), a.h.dispatch({
        type: "AUDIO_SET_DEBUG_LOGGING",
        enabled: e
      }))
    },
    setVideoHook(e) {
      P() || ((0, c.A)("video_hook_enabled", e, p.A.getVideoHook()), a.h.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
        enabled: e
      }))
    },
    setExperimentalSoundshare(e) {
      P() || ((0, c.A)("experimental_soundshare_enabled", e, p.A.getExperimentalSoundshare()), a.h.dispatch({
        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
        enabled: e
      }))
    },
    setUseSystemScreensharePicker(e) {
      P() || ((0, c.A)("system_screenshare_picker_enabled", e, p.A.getUseSystemScreensharePicker()), a.h.dispatch({
        type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER",
        enabled: e
      }))
    },
    async setAudioSubsystem(e) {
      P() || (await (0, c.A)("audio_subsystem", e, p.A.getAudioSubsystem()), a.h.dispatch({
        type: "AUDIO_SET_SUBSYSTEM",
        subsystem: e
      }))
    },
    setVideoEnabled(e) {
      (0, u.PX)(), a.h.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
        enabled: e
      })
    },
    setGoLiveSource(e) {
      (null == e ? true : e.qualityOptions) != null && (0, E.K2)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), a.h.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: e
      })
    },
    setAecDump(e) {
      P() || ((0, c.A)("diagnostic_audio_recording_enabled", e, p.A.getAecDump()), a.h.dispatch({
        type: "MEDIA_ENGINE_SET_AEC_DUMP",
        enabled: e
      }))
    },
    interact() {
      P() || a.h.dispatch({
        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
        required: false
      })
    },
    setEnableHardwareMuteNotice(e) {
      P() || a.h.dispatch({
        type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE",
        enabled: e
      })
    },
    setKrispSuppressionLevel(e) {
      P() || a.h.dispatch({
        type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL",
        level: e
      })
    },
    setKrispModelOverride(e) {
      !P() && (a.h.dispatch({
        type: "AUDIO_SET_KRISP_MODEL_OVERRIDE",
        model: e
      }), p.A.getNoiseCancellation() && (this.setNoiseCancellation(false), this.setNoiseCancellation(true)))
    },
    setNoiseCancellationEnableStats(e) {
      P() || a.h.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS",
        enabled: e
      })
    },
    resetMediaEngineSettings: e => a.h.dispatch({
      type: "MEDIA_ENGINE_RESET_SETTINGS",
      overrides: e
    })
  }