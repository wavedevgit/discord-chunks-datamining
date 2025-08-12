/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o, a, s, l, c;
require.d(exports, {
  Z: () => rO
}), require("./388685.js"), require("./953529.js"), require("./457542.js"), require("./539854.js"), require("./642613.js"), require("./49124.js"), require("./337869.js");
var u, Chunk512722 = require("./512722.js"),
  f = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  p = require.n(Chunk392711),
  Chunk209739 = require("./209739.js"),
  m = require.n(Chunk209739),
  Chunk404097 = require("./404097.js"),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk433517 = require("./433517.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk887278 = require("./887278.js"),
  Chunk547727 = require("./547727.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk710845 = require("./710845.js"),
  Chunk535911 = require("./535911.js"),
  Chunk458725 = require("./458725.js"),
  Chunk353926 = require("./353926.js"),
  Chunk646047 = require("./646047.js"),
  Chunk594190 = require("./594190.js"),
  Chunk502286 = require("./502286.js"),
  Chunk883794 = require("./883794.js"),
  Chunk822253 = require("./822253.js"),
  Chunk177732 = require("./177732.js"),
  Chunk355552 = require("./355552.js"),
  Chunk294473 = require("./294473.js"),
  Chunk706629 = require("./706629.js"),
  Chunk166884 = require("./166884.js"),
  Chunk585360 = require("./585360.js"),
  Chunk529558 = require("./529558.js"),
  Chunk111672 = require("./111672.js"),
  Chunk441167 = require("./441167.js"),
  Chunk580930 = require("./580930.js"),
  Chunk787517 = require("./787517.js"),
  Chunk338336 = require("./338336.js"),
  Chunk751571 = require("./751571.js"),
  Chunk311473 = require("./311473.js"),
  Chunk725380 = require("./725380.js"),
  Chunk581883 = require("./581883.js"),
  Chunk875527 = require("./875527.js"),
  Chunk420439 = require("./420439.js"),
  Chunk626135 = require("./626135.js"),
  Chunk12647 = require("./12647.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk747268 = require("./747268.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk13140 = require("./13140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk967368 = require("./967368.js"),
  Chunk463395 = require("./463395.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk704806 = require("./704806.js"),
  Chunk594174 = require("./594174.js"),
  Chunk631768 = require("./631768.js"),
  Chunk981631 = require("./981631.js"),
  Chunk70722 = require("./70722.js"),
  Chunk761274 = require("./761274.js"),
  Chunk526761 = require("./526761.js"),
  Chunk345655 = require("./345655.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function eT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eT(e, t, n[t])
    })
  }
  return e
}

function eA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eN(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eA(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eC = new Chunk710845.Z("MediaEngineStore"),
  eR = "MediaEngineStore",
  eP = 4,
  ew = 1,
  eD = 1,
  eL = 1,
  ex = 1,
  eM = .5,
  ek = {
    left: 1,
    right: 1
  },
  ej = 500,
  eU = 5 * Chunk70956.Z.Millis.SECOND,
  eG = false,
  eB = 100,
  eZ = 2 * Chunk70956.Z.Millis.SECOND,
  eF = 0;

function eV() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eG,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eM,
      vadLeading: 5,
      vadTrailing: 25,
      delay: 20,
      shortcut: []
    },
    vadUseKrispSettingVersion: 0,
    ncUseKrispSettingVersion: 0,
    ncUseKrispjsSettingVersion: 0,
    mute: false,
    deaf: false,
    echoCancellation: true,
    noiseSuppression: false,
    automaticGainControl: true,
    noiseCancellation: true,
    bypassSystemInputProcessing: true,
    mostRecentlyRequestedVoiceFilter: null,
    voiceFilterPlaybackEnabled: true,
    experimentalEncoders: false,
    hardwareH264: true,
    hardwareEnabledVersion: 0,
    hardwareEncoding: null,
    silenceWarning: true,
    attenuation: 0,
    attenuateWhileSpeakingSelf: false,
    attenuateWhileSpeakingOthers: true,
    localMutes: {},
    disabledLocalVideos: {},
    videoToggleStateMap: {},
    localVolumes: {},
    localPans: {},
    inputVolume: Chunk65154.Qx,
    outputVolume: Chunk65154.Qx,
    inputDeviceId: Chunk65154.w5,
    outputDeviceId: Chunk65154.w5,
    videoDeviceId: Chunk65154.w5,
    qos: false,
    qosMigrated: false,
    videoHook: eY.supports(Chunk65154.AN.VIDEO_HOOK),
    experimentalSoundshare2: null,
    useSystemScreensharePicker: null,
    openH264: true,
    h265Enabled: true,
    vadThrehsoldMigrated: false,
    aecDumpEnabled: false,
    sidechainCompression: false,
    sidechainCompressionSettingVersion: 0,
    sidechainCompressionStrength: 50,
    automaticAudioSubsystem: true,
    activeInputProfile: null
  }
}
let eH = {
    [Chunk345655._.CUSTOM]: {},
    [Chunk345655._.VOICE_ISOLATION]: {
      modeOptions: {
        autoThreshold: true,
        vadUseKrisp: true
      },
      echoCancellation: true,
      noiseSuppression: false,
      automaticGainControl: true,
      noiseCancellation: true,
      bypassSystemInputProcessing: false
    },
    [Chunk345655._.STUDIO]: {
      mode: Chunk981631.pM4.VOICE_ACTIVITY,
      modeOptions: {
        threshold: false,
        autoThreshold: false,
        vadUseKrisp: false
      },
      echoCancellation: false,
      noiseSuppression: false,
      automaticGainControl: false,
      noiseCancellation: false,
      bypassSystemInputProcessing: true
    }
  },
  eY = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
eC.enableNativeLogger(true);
let eW = {},
  eK = new Set([Chunk65154.Yn.DEFAULT]),
  ez = eY.supports(Chunk65154.AN.AUTO_ENABLE),
  eq = false,
  eX = Chunk65154.Yn.STREAM,
  eQ = performance.now(),
  eJ = {
    [Chunk65154.w5]: tQ("No Input Devices")
  },
  e$ = {
    [Chunk65154.w5]: tQ("No Output Devices")
  },
  e0 = {
    [Chunk65154.w5]: tQ("No Video Devices")
  },
  e1 = false,
  e2 = false,
  e3 = false,
  e5 = false,
  e4 = false,
  e6 = Chunk65154.Av,
  e8 = false,
  e7 = false,
  e9 = false,
  te = new Chunk846519.V7,
  tt = false,
  tn = false,
  tr = null,
  ti = false,
  to = false,
  ta = false,
  ts = false,
  tl = false,
  tc = [],
  tu = false,
  td = null,
  tf = null,
  t_ = null,
  tp = null,
  th = null,
  tm = false,
  tg = false,
  tE = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tb = false,
  ty = new Set,
  tO = tb,
  tv = new Set,
  tI = {},
  tT = null,
  tS = true,
  tA = false;

function tN() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tC() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = eW[module];
  return null == exports && (t = eV(), eW[module] = exports), exports
}

function tR() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tC(r),
    o = eH[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM];
  return eN(eS({}, i, o), {
    modeOptions: eS({}, null != (t = i.modeOptions) ? exports : {}, null != (n = o.modeOptions) ? require : {})
  })
}

function tP(e) {
  var t;
  let n = tR(e.context);
  e.setInputMode(n.mode, {
    vadThreshold: n.modeOptions.threshold,
    vadAutoThreshold: n.modeOptions.autoThreshold,
    vadUseKrisp: n.modeOptions.vadUseKrisp && nq(),
    vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : .5,
    vadLeading: n.modeOptions.vadLeading,
    vadTrailing: n.modeOptions.vadTrailing,
    pttReleaseDelay: Math.round(n.modeOptions.delay)
  })
}

function tw(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Qx;
  return p().clamp(e, 0, t)
}

function tD(e) {
  let t = tR(e.context),
    n = !ez || t.mute || t.deaf;
  e.context === ev.Yn.DEFAULT ? n = n || e1 || e2 || e3 || !q.Z.didHavePermission(eb.Eu.AUDIO) : e.context === ev.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ev.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tL(e) {
  e !== eX && (null != o && eY.setGoLiveSource(null, eX), eX = e)
}

function tx() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : e4,
    a = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o,
    s = o;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == a || null == (e = a.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), eY.setGoLiveSource(null, eX)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a || null == (t = a.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a || null == (n = a.cameraSource) ? true : require.audioDeviceGuid)) && eY.setGoLiveSource(null, eX), (e4 || i) && (e6 = (e4 = i) ? t$(e0, tR().videoDeviceId) : Chunk65154.Av, eY.setVideoInputDevice(e6)), o = a, null != a) {
    let e = {
      resolution: a.quality.resolution,
      frameRate: a.quality.frameRate
    };
    if (null != a.desktopSource) {
      let t = tN(),
        n = tR().videoHook,
        i = tB(),
        o = i ? tZ() && (0, Chunk787517.R)("MediaEngineStore_updateVideo").enabled ? Chunk70722.zj : Chunk70722.ZM : 0;
      eY.setGoLiveSource({
        desktopDescription: {
          id: a.desktopSource.id,
          soundshareId: a.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: o,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: tF(),
          videoHookStaleFrameTimeoutMs: ej,
          graphicsCaptureStaleFrameTimeoutMs: eU,
          hdrCaptureMode: exports
        },
        quality: module
      }, eX)
    }
    null != a.cameraSource && eY.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
        audioDeviceGuid: a.cameraSource.audioDeviceGuid
      },
      quality: module
    }, eX)
  }
}

function tM(e) {
  switch (e) {
    case ev.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case ev.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case ev.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tk(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  });
  return eS({
    enabled: e
  }, t)
}

function tj(e, t) {
  e.setAutomaticGainControl(tk(t))
}

function tU(e) {
  let t = tR(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ed.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ed.Z.hasNoiseSuppression(n) || t.noiseSuppression), tj(e, ed.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(td), (0, ei.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tG() {
  eY.on(Chunk46973.aB.Connection, e => {
    var t, n;
    tP(e), tD(e), tU(e);
    let i = tR();
    e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n);
    let a = e_.Z.getGuildId(),
      {
        muteBeforeProcessing: s,
        pttBeforeProcessing: l,
        skipEncode: c
      } = (null != a ? B.Z : G.Z).getCurrentConfig(eS({
        location: "setupMediaEngine"
      }, null != a && {
        guildId: a
      }), {
        autoTrackExposure: true
      });
    s && e.setExperimentFlag(ev.V8.MUTE_BEFORE_PROCESSING, true), l && e.setExperimentFlag(ev.V8.PTT_BEFORE_PROCESSING, true), c && e.setExperimentFlag(ev.V8.SKIP_ENCODE, true);
    let u = false,
      d = true;
    if (e.setExperimentFlag(ev.V8.RESET_DECODER_ON_ERRORS, true), u && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), d && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === ev.Yn.STREAM) {
      let {
        simulcastEnabled: t,
        lqStreamBitrate: n
      } = Z.Z.getConfig();
      e.configureGoLiveSimulcast(t, n);
      let {
        enabled: r,
        adjustResolution: i
      } = (0, F.k)({
        location: "setupMediaEngine",
        autoTrackExposure: true
      });
      e.setGoLiveUsePixelCounts(r, i)
    }(0, ei.isWindows)() ? (null == tT ? true : tT.startsWith("NVIDIA")) || (null == tT ? true : tT.startsWith("AMD")) ? e.setExperimentFlag(ev.V8.SIGNAL_AV1, true): e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, true): ((0, ei.isMac)() || (0, ei.isLinux)()) && e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, true), (0, ei.isWindows)() && e.setExperimentFlag(ev.V8.SIGNAL_AV1_HARDWARE_DECODE, true), eY.setHasFullbandPerformance((0, R.Z)());
    let f = (0, U.D)("setupMediaEngine").enabled;
    if (e.setRemoteAudioHistory(1e3 * !!f), (0, N.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(ev.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = Y.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ev.ux)
    }
    for (let t of (i = tR(e.context), e.setPostponeDecodeLevel(eB), Object.keys(i.localMutes))) t !== ec.default.getId() && e.setLocalMute(t, i.localMutes[t]);
    for (let t of Object.keys(i.localVolumes)) t !== ec.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
    for (let t of Object.keys(i.localPans)) {
      let n = i.localPans[t];
      e.setLocalPan(t, n.left, n.right)
    }
    for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
    e.on(b.Sh.Speaking, (t, n) => {
      v.Z.dispatch({
        type: "SPEAKING",
        context: e.context,
        userId: t,
        speakingFlags: n
      })
    }), e.context === ev.Yn.DEFAULT && (e7 = false, e9 = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      e7 = true, e9 = true, r.emitChange(), te.stop(), te.start(eZ, () => {
        e9 = false, r.emitChange()
      })
    })), e.on(b.Sh.DesktopSourceEnd, (t, n) => {
      v.Z.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: {
          context: e.context
        },
        endReason: t,
        errorCode: n
      })
    }), e.on(b.Sh.InteractionRequired, e => {
      v.Z.dispatch({
        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
        required: e
      })
    }), e.on(b.Sh.VideoHookInitialize, (e, t, n, r, i, a) => {
      (null == o ? true : o.desktopSource) != null && et.default.track(eg.rMx.VIDEOHOOK_INITIALIZED, eS({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: a
      }, (0, x.Z)(null == o ? true : o.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      eC.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tM(e)
      }), tm = true, et.default.track(eg.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: true
      }), v.Z.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION",
        enabled: false
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
        code: e
      })
    }), e.on(b.Sh.VoiceActivityDetectorError, e => {
      eC.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tM(e)
      }), et.default.track(eg.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: ev.Yn.DEFAULT,
        mode: eg.pM4.VOICE_ACTIVITY,
        options: eN(eS({}, tR(ev.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      et.default.track(eg.rMx.SDP_ERROR, {
        operation: e,
        error: t,
        type: n,
        sdp: r
      })
    }), e.on(b.Sh.VideoState, t => {
      v.Z.dispatch({
        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
        videoState: t,
        context: e.context
      })
    }), e.setBitRate(eu.Z.bitrate), e.applyVideoQualityMode(em.Z.mode)
  }), eY.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), eY.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), eY.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), eY.on(Chunk46973.aB.AudioPermission, e => {
    tE = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), eY.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), eY.on(Chunk46973.aB.WatchdogTimeout, async () => {
    let e;
    try {
      await Chunk12647.Z.submitLiveCrashReport({
        message: {
          message: "Voice Watchdog Timeout"
        }
      })
    } catch (t) {
      "number" == typeof exports.status && (e = exports.status)
    }
    eC.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), eY.on(Chunk46973.aB.VideoInputInitialized, e => {
    et.default.track(eg.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * er.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: e_.Z.getMediaSessionId(),
      rtc_connection_id: e_.Z.getRTCConnectionId()
    })
  }), eY.on(Chunk46973.aB.AudioInputInitialized, e => {
    et.default.track(eg.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * er.Z.Millis.SECOND),
      rtc_connection_id: e_.Z.getRTCConnectionId()
    })
  }), eY.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), eY.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), eY.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == a || null == (n = a.desktopSource) ? true : n.id) === e && (null != t && (null == o || null == (r = o.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), a = null)
  }), eY.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), eY.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), eY.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), eY.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    et.default.track(eg.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), eY.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eN(eS({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eN(eS({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), eY.on(Chunk46973.aB.ConnectionStats, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_CONNECTION_STATS",
      connectionStats: e.map(e => {
        let {
          stats: t,
          connection: n
        } = e;
        return {
          stats: t,
          mediaEngineConnectionId: n.mediaEngineConnectionId,
          version: eF++,
          context: n.context
        }
      })
    })
  }), eY.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = ry(e);
    null !== t && et.default.track(eg.rMx.VOICE_QUEUE_METRICS, t)
  }), eY.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), tY.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tT = e.gpu_brand)
  })
}

function tB() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function tZ() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function tF() {
  return (0, Chunk358085.isMac)() && eY.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function tV() {
  return (0, Chunk358085.isWindows)() && eY.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eY.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function tH() {
  return eY.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let tY = new class {
  start() {
    this.started || (this.started = true, eY.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eY.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tR();
    !ti && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eT(this, "stateChangeTimeout", true), eT(this, "noVoiceTimeout", 5e3), eT(this, "voiceTimeout", 1500), eT(this, "started", false), eT(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (to = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function tW() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eR, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), eW = null != (e = Chunk433517.K.get(eR)) ? module : {}, p().each(eW, e => {
    if (p().defaultsDeep(e, eV()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, el.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eP && (e.vadUseKrispSettingVersion = eP, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eG)
    }(0, ei.isWeb)() ? e.ncUseKrispjsSettingVersion !== eD && (e.ncUseKrispjsSettingVersion = eD, e.noiseSuppression = false, e.noiseCancellation = true): e.ncUseKrispSettingVersion !== ew && (e.ncUseKrispSettingVersion = ew, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== eL && (e.hardwareH264 = true, e.hardwareEnabledVersion = eL), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), tq()
}

function tK(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tC(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eR, eW), r
}

function tz() {
  Chunk433517.K.remove(eR), location.reload()
}

function tq() {
  var e, t, n;
  let r = tR();
  eY.setAudioInputDevice(r.inputDeviceId), eY.setAudioOutputDevice(r.outputDeviceId), tx(), eY.setInputVolume(r.inputVolume), eY.setOutputVolume(r.outputVolume), eY.setH264Enabled(null == (e = r.hardwareEncoding) || module || r.openH264), eY.setAv1Enabled(null == (t = r.hardwareEncoding) || exports), eY.setH265Enabled(null == (n = r.hardwareEncoding) || require), eY.setAecDump(r.aecDumpEnabled), eY.setSidechainCompression(r.sidechainCompression), eY.setSidechainCompressionStrength(r.sidechainCompressionStrength), eY.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing)
}

function tX() {
  ez || eY.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function tQ(e) {
  return {
    id: ev.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function tJ(e, t) {
  if (0 === e.length) {
    let e = tQ(t);
    return {
      [e.id]: e
    }
  }
  return p()(e).map(e => ({
    id: e.id,
    index: e.index,
    name: e.name,
    disabled: false,
    facing: e.facing,
    hardwareId: e.hardwareId,
    containerId: e.containerId
  })).keyBy("id").value()
}

function t$(e, t) {
  var n;
  let r = null != (n = e[t]) ? n : p()(e).values().first();
  return null != r ? r.id : t
}

function t0(e) {
  let t = eJ;
  if (eJ = tJ(e, eI.intl.string(eI.t["/QIjDA"])), !p().isEqual(eJ, t)) {
    let e = tR(),
      t = t$(eJ, e.inputDeviceId);
    eY.setAudioInputDevice(t)
  }
}

function t1(e) {
  let t = e$;
  if (e$ = tJ(e, eI.intl.string(eI.t.xlUg0t)), !p().isEqual(e$, t)) {
    let e = tR(),
      t = t$(e$, e.outputDeviceId);
    eY.setAudioOutputDevice(t)
  }
}

function t2(e) {
  tn = e.length > 0;
  let t = e0;
  if (e0 = tJ(e, eI.intl.string(eI.t.WKWARU)), e4 && !p().isEqual(e0, t)) {
    var n;
    let e = true !== e0[e6],
      r = e6 === ev.w5 && (null == (n = t[ev.w5]) ? true : n.disabled);
    tx(e || r)
  }
}

function t3() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
    r = null != (e = Chunk581883.Z.settings.audioContextSettings) ? module : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(r)) {
    let i = module === Chunk526761.u0.USER ? Chunk65154.Yn.DEFAULT : Chunk65154.Yn.STREAM,
      o = i === Chunk65154.Yn.STREAM ? Chunk65154.Yh : Chunk65154.Qx,
      a = null != (t = r[module]) ? exports : {},
      {
        localMutes: s,
        localVolumes: l
      } = tR(i);
    for (let [e, t] of Object.entries(a)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== o ? l[module] = exports.volume : delete l[module], eY.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == a[module] && (delete s[module], delete l[module], eY.eachConnection(t => {
        t.setLocalVolume(e, o), t.setLocalMute(e, false)
      }, i));
    tK({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function t5(e) {
  if (null == r) return eC.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : en.Z.getAudioPid(e),
      n = "";
    return null != t && (n = en.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function t4(e, t) {
  (0, ei.isWindows)() && T.YT(e, {
    soundshare_session: t
  }).then(t => {
    null == t || L.ZP.shouldContinueWithoutElevatedProcessForPID(e) || v.Z.wait(() => {
      v.Z.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function t6(e) {
  i = e.sessionId, e1 = false, e5 = false, (0, ei.isWeb)() || (H.Z.subscribe({
    location: "handleConnectionOpen"
  }, e => {
    let t = tR();
    !e.sidechainAvailable && t.sidechainCompression ? (tK({
      sidechainCompressionSettingVersion: 0
    }), nA(false)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < ex && (tK({
      sidechainCompressionSettingVersion: ex
    }), nA(e.sidechainEnabled))
  }), nC());
  let t = tR();
  if (tV() && (tH() ? n4(ev.iA.AUTOMATIC) : t.automaticAudioSubsystem && n6()), eY.supports(ev.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, ei.isDesktop)() ? e = (0, k.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, ei.isIOS)() || (0, ei.isAndroid)()) && (e = (0, j.W)({
      location: "handleConnectionOpen"
    }).enabled), eY.setOffloadAdmControls(e)
  }(0, $.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, ei.isDesktop)() && (ee.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: ev.Yn.DEFAULT,
    playSoundEffect: true
  }), tK({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), t3()
}

function t8(e) {
  let {
    mediaEngineState: t
  } = e;
  eW = t.settingsByContext, eJ = t.inputDevices, e$ = t.outputDevices, tI = t.appSupported, tl = t.krispModuleLoaded, s = t.krispVersion, eX = t.goLiveContext
}

function t7() {
  i = null
}

function t9(e) {
  switch (e.state) {
    case eg.hes.CONNECTING:
      tX();
      break;
    case eg.hes.RTC_CONNECTING:
      ti = false, to = false;
      break;
    case eg.hes.RTC_CONNECTED:
      tx();
      break;
    case eg.hes.DISCONNECTED:
      nl(), nc()
  }
  tY.update()
}

function ne(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => i === t.sessionId ? (e1 = t.mute || t.suppress, e5 = t.deaf, eY.eachConnection(tD), tx((null == t.guildId || null == t.channelId || null == th || th === t.channelId) && e4), th = t.channelId, true) : (__OVERLAY__ || t.userId !== ec.default.getId() || null != e_.Z.getChannelId() || tx(false, null), e), false)
}

function nt(e) {
  let {
    mute: t
  } = e;
  e2 = t, eY.eachConnection(tD)
}

function nn(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tR(t);
  if (t === ev.Yn.DEFAULT && (q.Z.requestPermission(eb.Eu.AUDIO), e3)) returnfalse;
  (r = !i && !r) || (i = false), n || (e8 = true), tK({
    mute: r,
    deaf: i
  }, t), eY.eachConnection(tD)
}

function nr(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  tK({
    mute: n
  }, t), r || (e8 = true), eY.eachConnection(tD)
}

function ni(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== ey.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  t3(true)
}

function no(e) {
  let {
    context: t
  } = e;
  tK({
    deaf: !tR(t).deaf
  }, t), eY.eachConnection(tD)
}

function na(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === ec.default.getId()) return;
  let {
    localMutes: r
  } = tR(t);
  r[n] ? delete r[n] : r[n] = true, tK({
    localMutes: r
  }, t), eY.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function ns(e) {
  var t, n, r, i, o, a, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === eg.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tR(l),
    m = null != (t = h[c]) && t,
    g = ty.has(c),
    E = u === eg.ZUi.AUTO_ENABLED || u === eg.ZUi.MANUAL_ENABLED;
  eC.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === ev.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  eC.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tR(l);
  if (I[c] === eg.ZUi.AUTO_PROBING && u === eg.ZUi.AUTO_ENABLED && (0, z.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E), I[c] = u, tK({
      videoToggleStateMap: I
    }, l, d), u === eg.ZUi.AUTO_PROBING ? null == (n = e_.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = e_.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tO || (eC.info("isAutoDisableAllowed=".concat(tO, " - disabling VideoHealthManager")), null == (o = e_.Z.getRTCConnection()) || null == (i = o.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tO) return;
    (0, z.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E), p ? ty.add(c) : ty.delete(c)
  } else v && (g && !p ? (eC.info("disallowing auto-disable for this session because of manual override by user"), tO = false, null == (s = e_.Z.getRTCConnection()) || null == (a = s.getVideoHealthManager()) || a.disable(), (0, z.Z)(c, ev.fC.MANUAL_REENABLE, E)) : (0, z.Z)(c, p ? ev.fC.MANUAL_DISABLE : ev.fC.MANUAL_ENABLE, E));
  y && !p && ty.delete(c), p ? h[c] = true : delete h[c], tK({
    disabledLocalVideos: h
  }, l, d), eY.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nl() {
  if (0 === ty.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tR(module);
  ty.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eY.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), ty.clear(), tK({
    disabledLocalVideos: exports
  }, module, false)
}

function nc() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tR(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  tK({
    videoToggleStateMap: exports
  }, module, false)
}

function nu(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === ec.default.getId()) return;
  let i = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
    {
      localVolumes: o
    } = tR(t);
  r === i ? delete o[n] : o[n] = r, tK({
    localVolumes: o
  }, t), eY.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nd(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: o
  } = tR(t);
  o[n] = {
    left: r,
    right: i
  }, tK({
    localPans: o
  }, t), eY.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nf(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  tK({
    mode: n,
    modeOptions: r
  }, t), eY.eachConnection(tP), tY.update()
}

function n_(e) {
  let {
    volume: t
  } = e;
  tK({
    inputVolume: tw(t)
  }), eY.setInputVolume(t)
}

function np(e) {
  let {
    volume: t
  } = e;
  tK({
    outputVolume: t
  }), eY.setOutputVolume(t)
}

function nh(e) {
  let {
    id: t
  } = e;
  t = t$(eJ, t), eQ = performance.now(), tK({
    inputDeviceId: t
  }), eY.setAudioInputDevice(t)
}

function nm(e) {
  let {
    id: t
  } = e;
  tK({
    outputDeviceId: t = t$(e$, t)
  }), eY.setAudioOutputDevice(t)
}

function ng(e) {
  let {
    id: t
  } = e;
  tK({
    videoDeviceId: t = t$(e0, t)
  }), tx()
}

function nE(e) {
  let {
    inputProfile: t
  } = e, n = tK({
    activeInputProfile: t
  });
  eY.eachConnection(e => {
    tP(e), tj(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), eY.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), tY.update(), nR()
}

function nb(e) {
  return eq !== e.required && (eq = e.required, e.required || eY.interact(), true)
}

function ny(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  t0(t), t1(n), t2(r)
}

function nO(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  tK({
    inputVolume: tw(t),
    outputVolume: n
  })
}

function nv(e) {
  var t;
  let n = tR(),
    r = eY.getAudioSubsystem(),
    i = eY.getAudioLayer(),
    o = t$(eJ, n.inputDeviceId),
    a = null == (t = eJ[o]) ? true : t.name;
  et.default.track(eg.rMx.VOICE_PROCESSING, {
    echo_cancellation: n.echoCancellation,
    noise_cancellation: n.noiseCancellation,
    noise_suppression: n.noiseSuppression,
    automatic_gain_control: n.automaticGainControl,
    location: e,
    bypass_system_input_processing: n.bypassSystemInputProcessing,
    audio_subsystem: r,
    audio_layer: i,
    input_device: a
  })
}

function nI(e) {
  let t = tK({
    echoCancellation: e.enabled
  });
  eY.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nR(), nv(e.location)
}

function nT(e) {
  nA(e.enabled)
}

function nS(e) {
  let t = tK({
    sidechainCompressionStrength: e.strength
  });
  eY.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nA(e) {
  let t = tK({
    sidechainCompression: e
  });
  eY.setSidechainCompression(t.sidechainCompression)
}

function nN(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tv.add(n) : tv.delete(n), nC(), nR()
}

function nC() {
  let {
    voiceFiltersPreProcessMute: e
  } = Chunk580930.Z.getCurrentConfig({
    location: "setMaybePreprocessMute"
  }, {
    autoTrackExposure: true
  }), t = module && !tv.has("voice_filter_preview") && !tv.has("mic_test");
  eY.setMaybePreprocessMute(exports)
}

function nR() {
  let e = tR(),
    t = tv.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    o = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    a = tk(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== td,
    c = tv.has("voice_filter") && 1 === tv.size;
  eY.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: o,
    automaticGainControlConfig: a,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}

function nP(e) {
  let t = tK({
    noiseSuppression: e.enabled
  });
  eY.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nR(), nv(e.location)
}

function nw(e) {
  let t = tK({
    automaticGainControl: e.enabled
  });
  eY.eachConnection(e => tj(e, t.automaticGainControl)), nR(), nv(e.location)
}

function nD(e) {
  let t = tK({
    noiseCancellation: e.enabled
  });
  eY.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), nR(), nv(e.location)
}

function nL(e) {
  X.Z.setKrispModelOverride(e.model), c = e.model, nR()
}

function nx(e) {
  var t;
  (0, ei.isWeb)() || (tu = e.enabled, null == (t = eY.setNoiseCancellationEnableStats) || t.call(eY, e.enabled))
}

function nM(e) {
  let t = tK({
    experimentalEncoders: e.enabled
  });
  eY.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function nk(e) {
  var t, n;
  let {
    enabled: r
  } = e, i = tK({
    hardwareEncoding: r
  });
  eY.eachConnection(e => {
    var t;
    return e.setHardwareH264(null == (t = i.hardwareEncoding) || t)
  }), eY.setH264Enabled(i.hardwareEncoding || i.openH264), eY.setAv1Enabled(null == (t = i.hardwareEncoding) || t), eY.setH265Enabled(null == (n = i.hardwareEncoding) || n)
}

function nj(e) {
  tK({
    silenceWarning: e.enabled
  }), tY.update()
}

function nU(e) {
  eY.setDebugLogging(e.enabled)
}

function nG(e) {
  let {
    level: t
  } = e;
  l = t, X.Z.setKrispSuppressionLevel(t)
}

function nB(e) {
  tK({
    videoHook: e.enabled
  })
}

function nZ(e) {
  tK({
    experimentalSoundshare2: e.enabled
  })
}

function nF(e) {
  let {
    enabled: t
  } = e;
  tK({
    useSystemScreensharePicker: t
  })
}

function nV(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = tK({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  eY.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function nH(e) {
  let {
    enabled: t
  } = e;
  tK({
    qos: t
  }), eY.eachConnection(e => e.setQoS(t))
}

function nY() {
  tz()
}

function nW(e) {
  let {
    inputDetected: t
  } = e;
  tr = t, !ti && tr && (ti = true, tY.update())
}

function nK(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === e3) returnfalse;
  e3 = n, eY.eachConnection(tD)
}

function nz(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eb.PQ.ACCEPTED;
  switch (n) {
    case eb.Eu.AUDIO:
      tE = true, eY.eachConnection(tD);
      break;
    case eb.Eu.CAMERA:
      !r && e4 && tx(false);
      break;
    default:
      returnfalse
  }
}

function nq() {
  return tl || false
}
async function nX() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let o = Chunk998502.ZP.requireModule("discord_krisp");
    tl = true, s = null == (e = o.getSdkVersion) ? true : module.call(o), l = null != (i = null == (t = o.getSuppressionLevel) ? true : exports.call(o)) ? i : 100, null == (n = o.getNcModels) || require.call(o).then(e => {
      tc = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eC.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), tK({
      noiseCancellation: false
    })
  } finally {
    ts = false
  }
}

function nQ() {
  return (0, Chunk358085.isWindows)() && "arm64" !== Chunk998502.ZP.architecture || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function nJ() {
  !nQ() || __OVERLAY__ || ts || tl ? (0, Chunk358085.isWeb)() && eY.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tl = true, r.emitChange()) : (0, Chunk358085.isWeb)() && tK({
    noiseCancellation: false
  }) : (ts = true, nX())
}

function n$(e) {
  let {
    enabled: t
  } = e;
  et.default.track(eg.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != td ? td : null,
    enabled: t
  }), tK({
    voiceFilterPlaybackEnabled: t
  })
}

function n0(e) {
  let {
    newVoiceFilterId: t
  } = e;
  tK({
    mostRecentlyRequestedVoiceFilter: t
  }), eY.eachConnection(e => e.setVoiceFilterId(t))
}

function n1() {
  tK({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function n2(e) {
  let {
    voiceFilterId: t
  } = e;
  t_ = td, tp = tf, td = t, tf = null === t ? null : Date.now()
}

function n3(e) {
  let t = e.bypassEnabled;
  tK({
    bypassSystemInputProcessing: t
  }), eY.setAudioInputBypassSystemProcessing(t), nv(e.location)
}

function n5(e) {
  n4(e.subsystem)
}

function n4(e) {
  e === ev.iA.AUTOMATIC ? (tK({
    automaticAudioSubsystem: true
  }), n6()) : (tK({
    automaticAudioSubsystem: false
  }), eY.setAudioSubsystem(e))
}

function n6() {
  eY.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function n8(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tx(i, null), null != t || null == n) {
    ta = false;
    return
  }
  if (ta) return;
  ta = true;
  let o = tR();
  (o.mute || o.deaf) && (tK({
    deaf: false,
    mute: false
  }), eY.eachConnection(tD))
}

function n7(e) {
  let {
    application: t
  } = e;
  eK.add(t.id)
}

function n9(e) {
  let {
    application: t
  } = e;
  eK.delete(t.id)
}

function re(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      ez = false, eY.eachConnection(tD);
      break;
    case "video":
      tx(false)
  }
}

function rt(e) {
  ez = e.enabled, e.unmute && tK({
    mute: false,
    deaf: false
  }), eY.eachConnection(tD)
}

function rn(e) {
  let {
    enabled: t
  } = e;
  q.Z.requestPermission(eb.Eu.CAMERA), tx(t)
}

function rr(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, o = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!o || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = en.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = t5(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != a && a.desktopSource.id !== d.desktopSource.id && (eY.setClipsSource(null), (0, ei.isWindows)() && null != a.desktopSource.soundshareId && T.pn(a.desktopSource.soundshareId)), null != l && t4(l, c), a = d;
  let f = tN(),
    _ = tR().videoHook;
  eY.setClipsSource({
    desktopDescription: {
      id: a.desktopSource.id,
      soundshareId: a.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: tB(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: tF(),
      videoHookStaleFrameTimeoutMs: ej,
      graphicsCaptureStaleFrameTimeoutMs: eU,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function ri(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (a = null, eY.setClipsSource(null))
}

function ro(e) {
  var t, n, r, i;
  let {
    settings: o
  } = e;
  if ((null == o ? true : o.desktopSettings) != null) {
    let e = null,
      r = null,
      {
        sourceId: i,
        sound: a
      } = o.desktopSettings,
      s = null != (t = o.context) ? t : ev.Yn.DEFAULT,
      l = null != (n = o.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === a ? null : en.Z.getPidFromDesktopSource(i);
    ei.isPlatformEmbedded && true === a && ({
      soundshareId: e,
      soundshareSession: r
    } = t5(c), null != e && t4(e, r)), tL(s), tx(s === ev.Yn.STREAM && e4, {
      desktopSource: {
        id: i,
        sourcePid: c,
        soundshareId: e,
        soundshareSession: r
      },
      quality: {
        resolution: l.resolution,
        frameRate: l.frameRate
      }
    })
  } else if ((null == o ? true : o.cameraSettings) != null) {
    let e = null != (r = o.context) ? r : ev.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = o.cameraSettings,
      a = e === ev.Yn.STREAM && e4,
      s = null != (i = o.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tx(a, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tx(e4, null)
}

function ra(e) {
  let {
    section: t
  } = e;
  return t === eg.oAB.VOICE && tX(), false
}

function rs() {
  return eY.eachConnection(tU), false
}

function rl(e) {
  let {
    enabled: t
  } = e, n = tK({
    openH264: t
  });
  eY.setH264Enabled(n.hardwareEncoding || n.openH264), eY.eachConnection(e => {
    var t;
    return e.setSoftwareH264(null == (t = n.openH264) || t)
  })
}

function rc(e) {
  let {
    enabled: t
  } = e, n = tK({
    aecDumpEnabled: t
  });
  eY.setAecDump(n.aecDumpEnabled)
}

function ru(e) {
  let {
    state: t
  } = e, n = D.Z.isEnabled();
  if (t === eg.$7l.BACKGROUND && e4 && !n) tt = true, tx(false);
  else {
    if (t !== eg.$7l.ACTIVE || !tt) returnfalse;
    tt = false, tx(true)
  }
  returntrue
}

function rd(e) {
  eY.eachConnection(t => t.setBitRate(e.bitrate))
}

function rf() {
  if (!e4 && null == o || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tx(false, null)
}

function r_() {
  return !!tm && (tm = false, true)
}

function rp(e) {
  eY.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rh(e) {
  let {
    settings: t
  } = e;
  eY.applyMediaFilterSettings(t).finally(() => {
    tg = false, r.emitChange()
  })
}

function rm() {
  tg = true
}

function rg() {
  tg = false
}

function rE(e) {
  tS = e.enabled
}
class rb extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tG(), tW(), nJ(), nc(), tI = {
      [Chunk65154.AN.VIDEO]: eY.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: eY.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: eY.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk463395.Z, Chunk592125.Z, Chunk19780.Z, Chunk594190.ZP, Chunk751571.Z.storage, Chunk581883.Z, Chunk353926.Z, Chunk435064.Z)
  }
  supports(e) {
    return eY.supports(e)
  }
  supportsInApp(e) {
    return tI[e] || eY.supports(e)
  }
  isSupported() {
    return eY.supported()
  }
  isExperimentalEncodersSupported() {
    return eY.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eY.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return nq()
  }
  isNoiseCancellationError() {
    return tm
  }
  isAutomaticGainControlSupported() {
    return eY.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !tH() && (eY.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || eY.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return eY.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eY.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return nq()
  }
  isAecDumpSupported() {
    return eY.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eY.supports(Chunk65154.AN.VIDEO) && eY.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    let t = (null == (e = Chunk592125.Z.getChannel(th)) ? true : module.type) === Chunk981631.d4z.GUILD_STAGE_VOICE,
      n = r.getHardwareEncoding();
    return !exports && require && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tR().aecDumpEnabled
  }
  getMediaEngine() {
    return eY
  }
  getVideoComponent() {
    return eY.Video
  }
  getCameraComponent() {
    return eY.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return tu
  }
  isEnabled() {
    return ez
  }
  isMute() {
    return this.isSelfMute() || e1
  }
  isDeaf() {
    return this.isSelfDeaf() || e5
  }
  hasContext(e) {
    return null != eW[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && e2
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tR(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && e3
  }
  shouldSkipMuteUnmuteSound() {
    return e8
  }
  notifyMuteUnmuteSoundWasSkipped() {
    e8 = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tS
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tR(module).deaf
  }
  isVideoEnabled() {
    return e4 && tn
  }
  isVideoAvailable() {
    return Object.values(e0).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return eX === module && null != o
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return eX === exports && null != o && (null == (e = o.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
    return e !== ec.default.getId() && (tR(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return eY.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
    return null != (t = tR(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
    return null != (t = tR(n).videoToggleStateMap[e]) ? t : eg.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
    return t === ev.Yn.DEFAULT && ty.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && ty.size > 0
  }
  isMediaFilterSettingLoading() {
    return tg
  }
  isNativeAudioPermissionReady() {
    return tE
  }
  getGoLiveSource() {
    return o
  }
  getGoLiveContext() {
    return eX
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return eQ
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
      n = tR(t).localPans[e];
    return null != n ? n : ek
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
      n = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
      r = tR(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tR().inputVolume
  }
  getOutputVolume() {
    return tR().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tR(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tR(module).modeOptions
  }
  getActiveVoiceFilter() {
    return td
  }
  getActiveVoiceFilterAppliedAt() {
    return tf
  }
  getPreviousVoiceFilter() {
    return t_
  }
  getPreviousVoiceFilterAppliedAt() {
    return tp
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tR().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tR().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(eW, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eg.pM4.PUSH_TO_TALK && eK.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return t$(eJ, tR().inputDeviceId)
  }
  getOutputDeviceId() {
    return t$(e$, tR().outputDeviceId)
  }
  getVideoDeviceId() {
    return t$(e0, tR().videoDeviceId)
  }
  getInputDevices() {
    return eJ
  }
  getOutputDevices() {
    return e$
  }
  getVideoDevices() {
    return e0
  }
  getEchoCancellation() {
    let e = tR();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return tR().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tR().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tR().h265Enabled
  }
  getLoopback() {
    return tv.size > 0
  }
  getLoopbackReasons() {
    return tv
  }
  getNoiseSuppression() {
    let e = tR();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tR();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tR().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tR().noiseCancellation
  }
  getExperimentalEncoders() {
    return tR().experimentalEncoders
  }
  getHardwareEncoding() {
    var e;
    return null == (e = tR().hardwareEncoding) || module
  }
  getEnableSilenceWarning() {
    return tR().silenceWarning
  }
  getDebugLogging() {
    return eY.getDebugLogging()
  }
  getQoS() {
    return tR().qos
  }
  getAttenuation() {
    return tR().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tR().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tR().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return tV() && tR().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : eY.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return eY.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tR().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tR(module)
  }
  getState() {
    return {
      settingsByContext: eW,
      inputDevices: eJ,
      outputDevices: e$,
      appSupported: tI,
      krispModuleLoaded: tl,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: o,
      goLiveContext: eX
    }
  }
  getInputDetected() {
    return tr
  }
  getNoInputDetectedNotice() {
    return to
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eY.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eq
  }
  getVideoHook() {
    return tR().videoHook
  }
  supportsVideoHook() {
    return eY.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tR().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return eY.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && eY.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tR().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.jR);
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return eY.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getOpenH264() {
    return tR().openH264
  }
  getEverSpeakingWhileMuted() {
    return e7
  }
  getSpeakingWhileMuted() {
    return e9
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tc
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tR().modeOptions.vadKrispActivationThreshold) ? module : eM
  }
  hasActiveCallKitCall() {
    return tA
  }
  setHasActiveCallKitCall(e) {
    tA = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? eY.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && tF() : (0, Chunk358085.isWindows)() ? eY.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && eY.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
      t = this.supports(Chunk65154.AN.VIDEO) ? [{
        rid: "100",
        type: module === Chunk65154.Yn.DEFAULT ? Chunk65154.Tr.VIDEO : Chunk65154.Tr.SCREEN,
        quality: Chunk65154.y7
      }] : [];
    return this.isSimulcastSupported() && (module === Chunk65154.Yn.DEFAULT || this.goLiveSimulcastEnabled()) && exports.push({
      rid: "50",
      type: module === Chunk65154.Yn.DEFAULT ? Chunk65154.Tr.VIDEO : Chunk65154.Tr.SCREEN,
      quality: Chunk65154.LD
    }), exports
  }
  fetchAsyncResources() {
    let e = {
      fetchDave: false
    };
    return (0, Chunk358085.isWeb)() && (module.fetchDave = Chunk529558.N.getCurrentConfig({
      location: "MediaEngineStore fetchAsyncResources"
    }).loadWasmModule), eY.fetchAsyncResources(module)
  }
  getSupportedSecureFramesProtocolVersion() {
    if ((0, Chunk358085.isWeb)()) {
      let {
        useWasmModule: e
      } = Chunk529558.N.getCurrentConfig({
        location: "MediaEngineStore getSupportedSecureFramesProtocolVersion"
      });
      if (!module) return 0
    }
    let e = eY.getSupportedSecureFramesProtocolVersion(),
      t = Chunk529558.m.getCurrentConfig({
        location: "MediaEngineStore"
      });
    return 114 === module && (e = 1), exports.canSupportDaveProtocol && module >= exports.protocolVersionFloor ? module : 0
  }
  hasClipsSource() {
    return null != a
  }
  getGpuBrand() {
    return tT
  }
}

function ry(e) {
  if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
  let t = {
    metrics_period_ms: e.periodMs,
    total_tasks: 0,
    total_exec_time_ns: 0
  };
  t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0), t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0);
  let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
    r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
  for (let e = 0; e < 3; e++)
    if (e < n.length) {
      let r = n[e];
      t["slow_task_".concat(e, "_name")] = r.name, t["slow_task_".concat(e, "_longest_exec_time_ns")] = r.longestExecTimeNs
    } for (let e = 0; e < 3; e++)
    if (e < r.length) {
      let n = r[e];
      t["delayed_task_".concat(e, "_name")] = n.name, t["delayed_task_".concat(e, "_longest_queue_time_ns")] = n.longestQueueTimeNs
    } return t.full_task_report = JSON.stringify(n), t
}
eT(rb, "displayName", "MediaEngineStore");
let rO = r = new rb(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: n8,
  VOICE_STATE_UPDATES: ne,
  CONNECTION_OPEN: t6,
  CONNECTION_CLOSED: t7,
  RTC_CONNECTION_STATE: t9,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nt,
  AUDIO_TOGGLE_SELF_MUTE: nn,
  AUDIO_SET_SELF_MUTE: nr,
  AUDIO_TOGGLE_SELF_DEAF: no,
  AUDIO_TOGGLE_LOCAL_MUTE: na,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: ns,
  AUDIO_SET_LOCAL_VOLUME: nu,
  AUDIO_SET_LOCAL_PAN: nd,
  AUDIO_SET_MODE: nf,
  AUDIO_SET_INPUT_VOLUME: n_,
  AUDIO_SET_OUTPUT_VOLUME: np,
  AUDIO_SET_INPUT_DEVICE: nh,
  AUDIO_SET_OUTPUT_DEVICE: nm,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nE,
  AUDIO_SET_ECHO_CANCELLATION: nI,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nT,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nS,
  AUDIO_SET_LOOPBACK: nN,
  AUDIO_SET_NOISE_SUPPRESSION: nP,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nw,
  AUDIO_SET_NOISE_CANCELLATION: nD,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nL,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nj,
  AUDIO_SET_DEBUG_LOGGING: nU,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nG,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nx,
  MEDIA_ENGINE_SET_VIDEO_HOOK: nB,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nZ,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nF,
  AUDIO_SET_ATTENUATION: nV,
  AUDIO_SET_QOS: nH,
  MEDIA_ENGINE_DEVICES: ny,
  AUDIO_VOLUME_CHANGE: nO,
  AUDIO_RESET: nY,
  AUDIO_INPUT_DETECTED: nW,
  AUDIO_SET_SUBSYSTEM: n5,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n3,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rt,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rn,
  MEDIA_ENGINE_PERMISSION: re,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ro,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: ng,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nM,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nb,
  USER_SETTINGS_MODAL_INIT: ra,
  USER_SETTINGS_MODAL_SET_SECTION: ra,
  CERTIFIED_DEVICES_SET: rs,
  RPC_APP_CONNECTED: n7,
  RPC_APP_DISCONNECTED: n9,
  OVERLAY_INITIALIZE: t8,
  MEDIA_ENGINE_SET_OPEN_H264: rl,
  MEDIA_ENGINE_SET_HARDWARE_ENCODING: nk,
  APP_STATE_UPDATE: ru,
  SET_CHANNEL_BITRATE: rd,
  SET_VAD_PERMISSION: nK,
  SET_NATIVE_PERMISSION: nz,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rp,
  MEDIA_ENGINE_SET_AEC_DUMP: rc,
  CHANNEL_DELETE: rf,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r_,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rh,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rm,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rg,
  USER_SETTINGS_PROTO_UPDATE: ni,
  CLIPS_INIT: rr,
  CLIPS_SETTINGS_UPDATE: ri,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rE,
  VOICE_FILTER_REQUEST_SWITCH: n0,
  VOICE_FILTER_LOOPBACK_TOGGLE: n$,
  VOICE_FILTER_APPLIED: n2,
  VOICE_FILTER_DOWNLOAD_FAILED: n1,
  VOICE_FILTER_APPLY_FAILED: n1
})