/** Chunk was on web.js **/
/** chunk id: 743426, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./35282.js"), require("./388685.js"), require("./415506.js");
var Chunk264344 = require("./264344.js"),
  i = require.n(Chunk264344),
  Chunk47770 = require("./47770.js"),
  Chunk579092 = require("./579092.js"),
  Chunk46973 = require("./46973.js"),
  Chunk734298 = require("./734298.js"),
  Chunk997545 = require("./997545.js"),
  Chunk501950 = require("./501950.js"),
  Chunk992774 = require("./992774.js"),
  Chunk656795 = require("./656795.jsx"),
  Chunk650886 = require("./650886.js"),
  Chunk65154 = require("./65154.js"),
  Chunk149396 = require("./149396.js"),
  h = require("./413135.js").Buffer;

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  return (null != e ? e : m.Qx) / m.Qx
}

function v(e, t, n) {
  return t + (n - t) * e / 100
}
class S extends Chunk47770.Z {
  destroy() {
    this.eachConnection(e => e.destroy()), this.emit(Chunk46973.aB.Destroy), this.removeAllListeners()
  }
  interact() {}
  static supported() {
    return (0, Chunk992774.Zh)()
  }
  supported() {
    returntrue
  }
  supports(e) {
    switch (e) {
      case m.AN.LEGACY_AUDIO_SUBSYSTEM:
        return (0, d.eJ)(m.eR.VOICE_LEGACY_SUBSYSTEM);
      case m.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
        return (0, d.eJ)(m.eR.VOICE_EXPERIMENTAL_SUBSYSTEM);
      case m.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
        return (0, d.eJ)(m.eR.VOICE_AUTOMATIC_SUBSYSTEM);
      case m.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
        return (0, d.eJ)(m.eR.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
      case m.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING:
        return (0, d.eJ)(m.eR.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
      case m.AN.DEBUG_LOGGING:
        return (0, d.eJ)(m.eR.DEBUG_LOGGING);
      case m.AN.SOUNDSHARE:
        return (0, d.eJ)(m.eR.SOUNDSHARE);
      case m.AN.SCREEN_SOUNDSHARE:
        return (0, d.eJ)(m.eR.SCREEN_SOUNDSHARE);
      case m.AN.ELEVATED_HOOK:
        return (0, d.eJ)(m.eR.ELEVATED_HOOK);
      case m.AN.LOOPBACK:
        return (0, d.eJ)(m.eR.LOOPBACK);
      case m.AN.WUMPUS_VIDEO:
        return (0, d.eJ)(m.eR.WUMPUS_VIDEO);
      case m.AN.HYBRID_VIDEO:
        return (0, d.eJ)(m.eR.HYBRID_VIDEO);
      case m.AN.ATTENUATION:
      case m.AN.VIDEO_HOOK:
        var t;
        return (null === i() || true === i() || null == (t = i().os) ? true : t.family) != null && /^win/i.test(i().os.family);
      case m.AN.EXPERIMENTAL_SOUNDSHARE:
        return (0, d.eJ)(m.eR.SOUNDSHARE_LOOPBACK);
      case m.AN.REMOTE_LOCUS_NETWORK_CONTROL:
        return (0, d.eJ)(m.eR.REMOTE_LOCUS_NETWORK_CONTROL);
      case m.AN.SCREEN_PREVIEWS:
        return (0, d.eJ)(m.eR.SCREEN_PREVIEWS);
      case m.AN.CLIPS:
        return (0, d.eJ)(m.eR.CLIPS);
      case m.AN.WINDOW_PREVIEWS:
        return (0, d.eJ)(m.eR.WINDOW_PREVIEWS);
      case m.AN.AUDIO_DEBUG_STATE:
        return (0, d.eJ)(m.eR.AUDIO_DEBUG_STATE);
      case m.AN.CONNECTION_REPLAY:
        return (0, d.eJ)(m.eR.CONNECTION_REPLAY);
      case m.AN.SIMULCAST:
        return (0, d.eJ)(m.eR.SIMULCAST) && (0, d.eJ)(m.eR.SIMULCAST_BUGFIX);
      case m.AN.RTC_REGION_RANKING:
        return (0, d.eJ)(m.eR.RTC_REGION_RANKING);
      case m.AN.ELECTRON_VIDEO:
        return (0, d.eJ)(m.eR.ELECTRON_VIDEO);
      case m.AN.MEDIAPIPE:
        return (0, d.eJ)(m.eR.MEDIAPIPE);
      case m.AN.FIXED_KEYFRAME_INTERVAL:
        return (0, d.eJ)(m.eR.FIXED_KEYFRAME_INTERVAL);
      case m.AN.FIRST_FRAME_CALLBACK:
        return (0, d.eJ)(m.eR.FIRST_FRAME_CALLBACK);
      case m.AN.REMOTE_USER_MULTI_STREAM:
        return (0, d.eJ)(m.eR.REMOTE_USER_MULTI_STREAM);
      case m.AN.IMAGE_QUALITY_MEASUREMENT:
        return (0, d.eJ)(m.eR.IMAGE_QUALITY_MEASUREMENT);
      case m.AN.GO_LIVE_HARDWARE:
        return (0, d.eJ)(m.eR.GO_LIVE_HARDWARE);
      case m.AN.SCREEN_CAPTURE_KIT:
        return (0, d.eJ)(m.eR.SCREEN_CAPTURE_KIT);
      case m.AN.NATIVE_SCREENSHARE_PICKER:
        return (0, d.eJ)(m.eR.NATIVE_SCREENSHARE_PICKER);
      case m.AN.MLS_PAIRWISE_FINGERPRINTS:
        return (0, d.eJ)(m.eR.MLS_PAIRWISE_FINGERPRINTS);
      case m.AN.OFFLOAD_ADM_CONTROLS:
        return (0, d.eJ)(m.eR.OFFLOAD_ADM_CONTROLS);
      case m.AN.VAAPI:
        return (0, d.eJ)(m.eR.VAAPI);
      case m.AN.GAMESCOPE_CAPTURE:
        return (0, d.eJ)(m.eR.GAMESCOPE_CAPTURE);
      case m.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT:
        return (0, d.eJ)(m.eR.ASYNC_VIDEO_INPUT_DEVICE_INIT);
      case m.AN.ASYNC_CLIPS_SOURCE_DEINIT:
        return (0, d.eJ)(m.eR.ASYNC_CLIPS_SOURCE_DEINIT);
      case m.AN.PORT_AWARE_LATENCY_TESTING:
        return (0, d.eJ)(m.eR.PORT_AWARE_LATENCY_TESTING);
      case m.AN.DIAGNOSTICS:
      case m.AN.NATIVE_PING:
      case m.AN.AUTOMATIC_VAD:
      case m.AN.AUDIO_INPUT_DEVICE:
      case m.AN.AUDIO_OUTPUT_DEVICE:
      case m.AN.QOS:
      case m.AN.VOICE_PROCESSING:
      case m.AN.AUTO_ENABLE:
      case m.AN.VIDEO:
      case m.AN.DESKTOP_CAPTURE:
      case m.AN.DESKTOP_CAPTURE_FORMAT:
      case m.AN.DESKTOP_CAPTURE_APPLICATIONS:
      case m.AN.VOICE_PANNING:
      case m.AN.AEC_DUMP:
      case m.AN.DISABLE_VIDEO:
      case m.AN.SAMPLE_PLAYBACK:
      case m.AN.NOISE_SUPPRESSION:
      case m.AN.AUTOMATIC_GAIN_CONTROL:
      case m.AN.SIDECHAIN_COMPRESSION:
        returntrue;
      default:
        returnfalse
    }
  }
  connect(e, t, n) {
    (0, d.eJ)(m.eR.EXPERIMENT_CONFIG) || (n.experiments = true);
    let r = c.Z.create(e, t, n);
    return r.on(s.Sh.Destroy, e => {
      this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(m.uJ.NORMAL)
    }), r.on(s.Sh.Connected, () => {
      r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r))
    }), r.on(s.Sh.Silence, e => {
      this.emit(s.aB.Silence, e)
    }), this.connections.add(r), (0, d.p8)(m.uJ.HIGH), this.emit(s.aB.Connection, r), r
  }
  shouldConnectionBroadcastVideo(e) {
    return e.context === m.Yn.DEFAULT && this.videoInputDeviceId !== m.Av || e.hasDesktopSource()
  }
  eachConnection(e, t) {
    this.connections.forEach(n => {
      (null == t || n.context === t) && e(n)
    })
  }
  enable() {
    return Promise.resolve()
  }
  setAudioInputBypassSystemProcessing(e) {
    (0, d.zS)().setTransportOptions({
      bypassSystemProcessing: e
    })
  }
  setInputVolume(e) {
    (0, d.zS)().setInputVolume(O(e))
  }
  setOutputVolume(e) {
    (0, d.zS)().setOutputVolume(O(e))
  }
  getAudioInputDevices() {
    return (0, Chunk501950.Hg)()
  }
  getNoiseCancellationStats() {
    return new Promise(e => {
      let t = (0, d.zS)();
      if (null == t.getNoiseCancellationStats) return void e(null);
      t.getNoiseCancellationStats(t => e(JSON.parse(t)))
    })
  }
  setNoiseCancellationEnableStats(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).setNoiseCancellationEnableStats) || t.call(n, e)
  }
  setAudioInputDevice(e) {
    let t = this.audioInputDeviceId;
    this.audioInputDeviceId = e, (0, d.eJ)(m.eR.SET_AUDIO_DEVICE_BY_ID) ? (0, d.zS)().setInputDevice(e) : (0, u.Hg)().then(t => {
      var n;
      let r = null != (n = t.find(t => t.id === e)) ? n : t[0];
      null != r && (0, d.zS)().setInputDevice(r.index)
    }), this.emit(s.aB.SelectedDeviceChange, m.h7.AUDIO_INPUT, t, e)
  }
  getAudioOutputDevices() {
    return (0, Chunk501950.HS)()
  }
  setAudioOutputDevice(e) {
    let t = this.audioOutputDeviceId;
    this.audioOutputDeviceId = e, (0, d.eJ)(m.eR.SET_AUDIO_DEVICE_BY_ID) ? (0, d.zS)().setOutputDevice(e) : (0, u.HS)().then(t => {
      var n;
      let r = null != (n = t.find(t => t.id === e)) ? n : t[0];
      null != r && (0, d.zS)().setOutputDevice(r.index)
    }), this.emit(s.aB.SelectedDeviceChange, m.h7.AUDIO_OUTPUT, t, e)
  }
  getVideoInputDevices() {
    return (0, Chunk501950.l0)()
  }
  async setVideoInputDevice(e) {
    let t = (await this.getVideoInputDevices()).find(t => t.id === e),
      n = null != t ? t.id : m.Av;
    if (n !== this.videoInputDeviceId) {
      if (this.videoInputDeviceId = n, (0, d.eJ)(m.eR.SET_VIDEO_DEVICE_BY_ID)) {
        let e = null != t ? null != t.originalId && "" !== t.originalId ? t.originalId : t.id : m.Av;
        (0, d.zS)().setVideoInputDevice(e)
      } else(0, d.zS)().setVideoInputDevice(null != t ? t.index : false);
      this.connections.forEach(e => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)))
    }
  }
  getVideoInputDeviceId() {
    return this.videoInputDeviceId
  }
  setAsyncVideoInputDeviceInit(e) {
    var t, n, r, i;
    null == (t = (n = (0, d.zS)()).setAsyncVideoInputDeviceInitSetting) || t.call(n, e), null == (r = (i = (0, d.zS)()).setAsyncVideoInputDeviceInit) || r.call(i, e)
  }
  setAsyncClipsSourceDeinit(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).setAsyncClipsSourceDeinit) || t.call(n, e)
  }
  getSupportedVideoCodecs(e) {
    (0, d.zS)().getSupportedVideoCodecs(e)
  }
  getCodecCapabilities(e) {
    (0, d.zS)().getCodecCapabilities(e)
  }
  setGoLiveSource(e, t) {
    if (null == e) return void this.eachConnection(e => {
      e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, false), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e))
    }, t);
    this.eachConnection(n => {
      (t !== m.Yn.STREAM || n.streamUserId === n.userId) && (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)))
    }, t)
  }
  setClipsSource(e) {
    var t;
    let n = (0, d.zS)();
    if (null == n.setClipsSource || null == n.setOnClipsRecordingEvent || null == n.applyClipsSettings) return;
    if (null == e) return void n.setClipsSource({
      id: "",
      soundshareId: 0
    });
    let {
      frameRate: r,
      resolution: i
    } = e.quality, o = i <= 480 ? i / 3 * 4 : i / 9 * 16, a = i, {
      id: l,
      soundshareId: c,
      useLoopback: u,
      useVideoHook: f,
      useGraphicsCapture: p,
      useQuartzCapturer: _,
      allowScreenCaptureKit: h,
      hdrCaptureMode: g
    } = e.desktopDescription;
    n.setOnClipsRecordingEvent(t => {
      this.logger.info("Clips recording event: ".concat(m.Pf[t], " received for stream ").concat(l, " and sound ").concat(c, ".")), t === m.Pf.GoLiveEnded ? this.emit(s.aB.ClipsRecordingRestartNeeded) : t === m.Pf.Error ? this.emit(s.aB.ClipsInitFailure, "Failed to set clips source in media engine", e.applicationName) : (t === m.Pf.Ended || t === m.Pf.StoppedByGoLive) && this.emit(s.aB.ClipsRecordingEnded, l, c)
    }), null == (t = n.applyClipsSettings) || t.call(n, {
      useVideoHook: f,
      useGraphicsCapture: p,
      useQuartzCapturer: _,
      allowScreenCaptureKit: h,
      hdrCaptureMode: g,
      soundshareLoopback: u,
      frameRate: r,
      width: o,
      height: a
    });
    let [E, b] = null != l ? l.split(":") : ["", ""];
    n.setClipsSource({
      id: b,
      soundshareId: null != c ? c : 0
    })
  }
  setClipsQualitySettings(e, t, n) {
    let r = (0, d.zS)();
    return null != r.applyClipsQualitySettings && (r.applyClipsQualitySettings(e, t, n), true)
  }
  setSoundshareSource(e, t, n) {
    this.eachConnection(r => {
      (n !== m.Yn.STREAM || r.streamUserId === r.userId) && r.setSoundshareSource(e, t)
    }, n)
  }
  getDesktopSource() {
    return Promise.reject(Error("NO_STREAM"))
  }
  getScreenPreviews(e, t) {
    return new Promise(n => {
      null != (0, d.zS)().getScreenPreviews ? (0, d.zS)().getScreenPreviews(e, t, e => {
        n(e.map((e, t) => y(E({}, e), {
          name: "Screen " + (t + 1)
        })))
      }) : n([])
    })
  }
  setClipBufferLength(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).setClipBufferLength) || t.call(n, e)
  }
  setClipsMLPipelineEnabled(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).setClipsMLPipelineEnabled) || t.call(n, e)
  }
  setClipsMLPipelineTypeEnabled(e, t) {
    var n, r;
    null == (n = (r = (0, d.zS)()).setClipsMLPipelineTypeEnabled) || n.call(r, e, t)
  }
  saveClip(e, t) {
    let n = (0, d.zS)();
    return null == n.setClipBufferLength || null == n.saveClip ? Promise.reject("unsupported") : new Promise((r, i) => {
      n.saveClip(e, t, (e, t, n) => r({
        duration: e,
        clipStats: JSON.parse(n)
      }), e => i(JSON.parse(e)))
    })
  }
  saveClipForUser(e, t, n) {
    let r = (0, d.zS)();
    return null == r.saveClipForUser ? Promise.reject("unsupported") : new Promise((i, o) => {
      r.saveClipForUser(e, t, n, (e, t, n) => i({
        duration: e,
        clipStats: JSON.parse(n)
      }), e => o(JSON.parse(e)))
    })
  }
  updateClipMetadata(e, t) {
    let n = (0, d.zS)();
    return null == n.updateClipMetadata ? Promise.reject("unsupported") : new Promise((r, i) => {
      n.updateClipMetadata(e, t, r, i)
    })
  }
  saveScreenshot(e, t, n, r, i) {
    let o = (0, d.zS)();
    return null == o.saveScreenshot ? Promise.reject("unsupported") : new Promise((a, s) => {
      o.saveScreenshot(e, t, null != r ? r : "", n, null != i ? i : 0, e => {
        a(h.from(e))
      }, s)
    })
  }
  exportClip(e, t) {
    let n = (0, d.zS)();
    return null == n.exportClip ? Promise.reject("unsupported") : new Promise((r, i) => {
      n.exportClip(e, t, e => r(new Blob([e])), i)
    })
  }
  getWindowPreviews(e, t) {
    return new Promise(n => {
      null != (0, d.zS)().getWindowPreviews ? (0, d.zS)().getWindowPreviews(e, t, e => {
        n(e)
      }) : n([])
    })
  }
  setAudioSubsystem(e) {
    null != (0, d.zS)().setAudioSubsystem ? (0, d.zS)().setAudioSubsystem(e) : (0, d.zS)().setUseLegacyAudioDevice(e === m.iA.LEGACY)
  }
  setOffloadAdmControls(e) {
    let t = (0, d.zS)();
    null != t.setOffloadAdmControls && t.setOffloadAdmControls(e)
  }
  queueAudioSubsystem(e) {
    let t = (0, d.zS)();
    null != t.queueAudioSubsystem ? t.queueAudioSubsystem(e) : this.setAudioSubsystem(e)
  }
  getAudioSubsystem() {
    return this.audioSubsystem
  }
  getAudioLayer() {
    return this.audioLayer
  }
  getDebugLogging() {
    return !!this.supports(Chunk149396.AN.DEBUG_LOGGING) && (0, Chunk992774.zS)().getDebugLogging()
  }
  setDebugLogging(e) {
    this.supports(m.AN.DEBUG_LOGGING) && (0, d.zS)().setDebugLogging(e)
  }
  setLoopback(e, t) {
    var n, r;
    null != (0, d.zS)().setLoopback && (0, d.zS)().setLoopback(e, {
      echoCancellation: t.echoCancellation,
      noiseSuppression: t.noiseSuppression,
      automaticGainControl: null == (n = t.automaticGainControlConfig) ? true : n.enabled,
      automaticGainControlConfig: t.automaticGainControlConfig,
      noiseCancellation: t.noiseCancellation,
      noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
      voiceFilters: t.voiceFilters,
      loopbackUseAudioMode: t.loopbackUseAudioMode
    }), null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(e || this.listenerCount(s.aB.VoiceActivity) > 0) : (0, d.zS)().setEmitVADLevel(e || this.listenerCount(s.aB.VoiceActivity) > 0, e, {
      echoCancellation: t.echoCancellation,
      noiseSuppression: t.noiseSuppression,
      automaticGainControl: null == (r = t.automaticGainControlConfig) ? true : r.enabled,
      noiseCancellation: t.noiseCancellation,
      noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing
    })
  }
  setMaybePreprocessMute(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).setMaybePreprocessMute) || t.call(n, e)
  }
  getLoopback() {
    returnfalse
  }
  setH264Enabled(e) {
    (0, d.zS)().setTransportOptions({
      h264Enabled: e
    })
  }
  setAv1Enabled(e) {
    (0, d.zS)().setTransportOptions({
      av1Enabled: e
    })
  }
  setH265Enabled(e) {
    (0, d.zS)().setTransportOptions({
      h265Enabled: e
    })
  }
  getCodecSurvey() {
    return null != this.codecSurvey ? Promise.resolve(this.codecSurvey) : new Promise((e, t) => {
      let n = (0, d.zS)();
      null != n.getCodecSurvey ? n.getCodecSurvey(t => {
        this.codecSurvey = t, e(t)
      }) : t(Error("getCodecSurvey is not implemented."))
    })
  }
  writeAudioDebugState() {
    return new Promise((e, t) => {
      let {
        writeAudioDebugState: n
      } = (0, d.zS)();
      null != n ? (n(), e()) : t(Error("Audio debug state is not supported."))
    })
  }
  startAecDump() {}
  stopAecDump() {}
  setAecDump(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).setAecDump) || t.call(n, e)
  }
  startRecordingRawSamples(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).startRecordingRawSamples) || t.call(n, e)
  }
  stopRecordingRawSamples() {
    var e, t;
    null == (e = (t = (0, Chunk992774.zS)()).stopRecordingRawSamples) || module.call(exports)
  }
  rankRtcRegions(e) {
    return new Promise((t, n) => {
      let {
        rankRtcRegions: r
      } = (0, d.zS)();
      null != r ? r(e, e => t(e)) : n(Error("RTC region latency test is not supported."))
    })
  }
  createReplayConnection(e, t) {
    let n = c.Z.createReplay(e, t);
    return null == n ? null : (n.on(s.Sh.Destroy, e => {
      this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(m.uJ.NORMAL)
    }), this.connections.add(n), (0, d.p8)(m.uJ.HIGH), this.emit(s.aB.Connection, n), n)
  }
  setOnVideoContainerResized(e) {
    p.Z.onContainerResized = e
  }
  setMaxSyncDelayOverride(e) {
    let {
      setMaxSyncDelayOverride: t
    } = (0, d.zS)();
    null != t && t(e)
  }
  applyMediaFilterSettings(e) {
    let {
      applyMediaFilterSettings: t,
      applyMediaFilterSettingsWithCallback: n
    } = (0, d.zS)();
    return null != n ? new Promise((t, r) => {
      n(e, t)
    }) : (null != t && t(e), Promise.resolve())
  }
  startLocalAudioRecording(e) {
    return new Promise((t, n) => {
      let {
        startLocalAudioRecording: r
      } = (0, d.zS)();
      null != r ? r(e, e => {
        e ? t() : n(Error("Failed to start local audio recording."))
      }) : n(Error("startLocalAudioRecording is not supported."))
    })
  }
  stopLocalAudioRecording(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).stopLocalAudioRecording) || t.call(n, (t, n) => {
      e(t, n)
    }), this.listenerCount(s.aB.VoiceActivity) > 0 && null != (0, d.zS)().setEmitVADLevel2 && (0, d.zS)().setEmitVADLevel2(true)
  }
  setHasFullbandPerformance(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).setHasFullbandPerformance) || t.call(n, e)
  }
  getSupportedSecureFramesProtocolVersion() {
    var e;
    return null != (e = (0, Chunk992774.zS)().SupportedSecureFramesProtocolVersion) ? module : 0
  }
  getSupportedBandwidthEstimationExperiments(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).getSupportedBandwidthEstimationExperiments) || t.call(n, e)
  }
  getMLSSigningKey(e, t) {
    return new Promise((n, r) => {
      let i = (0, d.zS)();
      null != i.getMLSSigningKey ? i.getMLSSigningKey(e, t, (e, t) => n({
        key: e,
        signature: t
      })) : r(Error("NOT_IMPLEMENTED"))
    })
  }
  setSidechainCompression(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).setSidechainCompression) || t.call(n, e)
  }
  setSidechainCompressionStrength(e) {
    var t, n;
    let r = 100 - e,
      i = v(r, _.Zq, _.WA),
      o = v(r, _.QO, _.JA);
    null == (t = (n = (0, d.zS)()).applySidechainCompressionSettings) || t.call(n, {
      threshold: i,
      ratio: o
    })
  }
  setNativeDesktopVideoSourcePickerActive(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).setNativeDesktopVideoSourcePickerActive) || t.call(n, e)
  }
  presentNativeScreenSharePicker(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).presentNativeScreenSharePicker) || t.call(n, null != e ? e : "")
  }
  releaseNativeDesktopVideoSourcePickerStream() {
    var e, t;
    null == (e = (t = (0, Chunk992774.zS)()).releaseNativeDesktopVideoSourcePickerStream) || module.call(exports)
  }
  async getSystemMicrophoneMode() {
    var e, t, n;
    return null != (n = await (null == (e = (t = (0, Chunk992774.zS)()).getSystemMicrophoneMode) ? true : module.call(exports))) ? require : ""
  }
  showSystemCaptureConfigurationUI(e) {
    var t, n;
    null == (t = (n = (0, d.zS)()).showSystemCaptureConfigurationUI) || t.call(n, e)
  }
  fetchAsyncResources(e) {
    return Promise.resolve()
  }
  watchdogTick() {
    let e = false;
    (0, Chunk992774.zS)().pingVoiceThread(() => {
      e = true, this.consecutiveWatchdogFailures = 0
    }), setTimeout(() => {
      !module && ++this.consecutiveWatchdogFailures > 1 ? this.emit(Chunk46973.aB.WatchdogTimeout) : this.watchdogTick()
    }, Chunk149396.H0)
  }
  connectionsEmpty() {
    return 0 === this.connections.size
  }
  constructor() {
    var e, t, n, r, i, o, c, _, h;
    super(), e = this, g(this, "Video", Chunk650886.Z), g(this, "Camera", Chunk656795.Z), g(this, "audioInputDeviceId", Chunk149396.Av), g(this, "audioOutputDeviceId", Chunk149396.Av), g(this, "videoInputDeviceId", Chunk149396.Av), g(this, "connections", new Set), g(this, "lastVoiceActivity", false), g(this, "audioSubsystem", "standard"), g(this, "audioLayer", ""), g(this, "deviceChangeGeneration", 0), g(this, "consecutiveWatchdogFailures", 0), g(this, "codecSurvey", null), g(this, "logger", new Chunk579092.Yd("MediaEngineNative")), g(this, "handleDeviceChange", function() {
      let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
        n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
        r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
      module.deviceChangeGeneration++, module.emit(Chunk46973.aB.DeviceChange, (0, Chunk501950.C1)(Chunk149396.h7.AUDIO_INPUT, exports), (0, Chunk501950.C1)(Chunk149396.h7.AUDIO_OUTPUT, require), (0, Chunk501950.C1)(Chunk149396.h7.VIDEO_INPUT, Chunk264344))
    }), g(this, "handleVolumeChange", (e, t) => {
      this.emit(s.aB.VolumeChange, e * m.Qx, t * m.Qx)
    }), g(this, "handleVoiceActivity", (e, t) => {
      let n = Date.now();
      this.listenerCount(s.aB.VoiceActivity) > 0 && (false === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && (this.lastVoiceActivity = n, this.emit(s.aB.VoiceActivity, e, t))
    }), g(this, "handleActiveSinksChange", (e, t) => {
      this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t, "MediaEngineNative.handleActiveSinksChange"))
    }), g(this, "handleNewListener", e => {
      switch (e) {
        case s.aB.VoiceActivity:
          null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(true) : (0, d.zS)().setEmitVADLevel(true, false, {});
          break;
        case s.aB.DeviceChange:
          let t = this.deviceChangeGeneration;
          Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then(e => {
            let [n, r, i] = e;
            t === this.deviceChangeGeneration && this.emit(s.aB.DeviceChange, n, r, i)
          })
      }
    }), g(this, "handleRemoveListener", e => {
      e === s.aB.VoiceActivity && (null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(this.listenerCount(s.aB.VoiceActivity) > 0) : (0, d.zS)().setEmitVADLevel(this.listenerCount(s.aB.VoiceActivity) > 0, false, {}))
    }), g(this, "handleVideoInputInitialization", e => {
      this.emit(s.aB.VideoInputInitialized, e)
    }), g(this, "handleAudioInputInitialization", e => {
      this.emit(s.aB.AudioInputInitialized, e)
    }), g(this, "handleNativeScreenSharePickerUpdate", (e, t) => {
      this.emit(s.aB.NativeScreenSharePickerUpdate, e, t)
    }), g(this, "handleNativeScreenSharePickerCancel", e => {
      this.emit(s.aB.NativeScreenSharePickerCancel, e)
    }), g(this, "handleNativeScreenSharePickerError", e => {
      this.emit(s.aB.NativeScreenSharePickerError, e)
    }), g(this, "handleAudioDeviceModuleErrorCallback", (e, t) => {
      false !== e && this.emit(s.aB.AudioDeviceModuleError, "RustAudioDeviceModule", e, t)
    }), g(this, "handleVideoCodecErrorCallback", e => {
      this.emit(s.aB.VideoCodecError, e)
    }), g(this, "handleSystemMicrophoneModeChangeCallback", e => {
      this.emit(s.aB.SystemMicrophoneModeChange, e)
    });
    let E = (0, Chunk992774.zS)();
    E.setDeviceChangeCallback(this.handleDeviceChange), E.setVolumeChangeCallback(this.handleVolumeChange), E.setOnVoiceCallback(this.handleVoiceActivity), null == (t = E.setVideoInputInitializationCallback) || exports.call(E, this.handleVideoInputInitialization), null == (n = E.setAudioInputInitializationCallback) || require.call(E, this.handleAudioInputInitialization), null == (r = E.setAudioDeviceModuleErrorCallback) || Chunk264344.call(E, this.handleAudioDeviceModuleErrorCallback), E.setTransportOptions({
      idleJitterBufferFlush: true,
      ducking: false
    }), null == (i = E.setNativeScreenSharePickerCallbacks) || i.call(E, this.handleNativeScreenSharePickerUpdate, this.handleNativeScreenSharePickerCancel, this.handleNativeScreenSharePickerError), null == (o = E.setVideoCodecErrorCallback) || Chunk47770.call(E, this.handleVideoCodecErrorCallback), null == (c = E.setSystemMicrophoneModeChangeCallback) || Chunk997545.call(E, this.handleSystemMicrophoneModeChangeCallback), this.on("removeListener", this.handleRemoveListener), this.on("newListener", this.handleNewListener), null != (0, Chunk992774.zS)().getAudioSubsystem ? (0, Chunk992774.zS)().getAudioSubsystem((e, t) => {
      this.audioSubsystem = e, this.audioLayer = t
    }) : null != (0, Chunk992774.zS)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, Chunk992774.zS)().getUseLegacyAudioDevice() ? Chunk149396.iA.LEGACY : Chunk149396.iA.STANDARD), null != E.pingVoiceThread && "undefined" != typeof window && "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(), null != E.setActiveSinksChangeCallback && E.setActiveSinksChangeCallback(this.handleActiveSinksChange), null == (_ = E.setLoopbackPlaybackGainMultiplier) || Chunk65154.call(E, Chunk149396.Jk), null == (h = E.setVoiceFiltersFailedCallback) || h.call(E, e => this.emit(s.aB.VoiceFiltersFailed, e)), (0, Chunk734298.Z)(this), I(this)
  }
}

function I(e) {
  let t = false;
  e.on(s.aB.Destroy, () => t = true);
  let n = async () => {
    if (t) return;
    let r = (0, d.zS)(),
      i = await new Promise(e => {
        var t;
        null == (t = r.pollQueueMetrics) || t.call(r, t => {
          e(t)
        })
      });
    i.periodMs = _.rp, e.emit(s.aB.VoiceQueueMetrics, i), setTimeout(n, _.rp)
  };
  setTimeout(n, _.rp)
}