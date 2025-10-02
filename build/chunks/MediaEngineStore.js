/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rD
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
  Chunk314080 = require("./314080.js"),
  Chunk822253 = require("./822253.js"),
  Chunk177732 = require("./177732.js"),
  Chunk294473 = require("./294473.js"),
  Chunk706629 = require("./706629.js"),
  Chunk159142 = require("./159142.js"),
  Chunk302630 = require("./302630.js"),
  Chunk166884 = require("./166884.js"),
  Chunk947851 = require("./947851.js"),
  Chunk529558 = require("./529558.js"),
  Chunk441167 = require("./441167.js"),
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

function eC(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eA(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eN = new Chunk710845.Z("MediaEngineStore"),
  eR = "MediaEngineStore",
  eP = 4,
  ew = 1,
  eD = 1,
  eL = 1,
  ex = 1,
  ej = .5,
  eM = {
    left: 1,
    right: 1
  },
  ek = 500,
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
      vadKrispActivationThreshold: ej,
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
    sidechainCompression: true,
    sidechainCompressionSettingVersion: 1,
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
      bypassSystemInputProcessing: true
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
eN.enableNativeLogger(true);
let eW = {},
  eK = new Set([Chunk65154.Yn.DEFAULT]),
  ez = eY.supports(Chunk65154.AN.AUTO_ENABLE),
  eq = false,
  eX = Chunk65154.Yn.STREAM,
  eQ = performance.now(),
  eJ = {
    [Chunk65154.w5]: t3("No Input Devices")
  },
  e$ = {
    [Chunk65154.w5]: t3("No Output Devices")
  },
  e0 = {
    [Chunk65154.w5]: t3("No Video Devices")
  },
  e1 = false,
  e2 = false,
  e3 = false,
  e4 = false,
  e8 = false,
  e5 = Chunk65154.Av,
  e6 = Chunk65154.Av,
  e7 = false,
  e9 = false,
  te = false,
  tt = new Chunk846519.V7,
  tn = false,
  tr = false,
  ti = null,
  ta = false,
  to = false,
  ts = false,
  tl = false,
  tc = false,
  tu = [],
  td = false,
  tf = null,
  t_ = null,
  tp = null,
  th = null,
  tm = null,
  tg = false,
  tE = false,
  tb = false,
  ty = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tO = false,
  tv = new Set,
  tI = tO,
  tT = new Set,
  tS = {},
  tA = null,
  tC = true,
  tN = false,
  tR = false,
  tP = false;

function tw() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tD() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = eW[module];
  return null == exports && (t = eV(), eW[module] = exports), exports
}

function tL() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tD(r),
    a = eH[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM];
  return eC(eS({}, i, a), {
    modeOptions: eS({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {})
  })
}

function tx(e) {
  var t;
  let n = tL(e.context);
  e.setInputMode(n.mode, {
    vadThreshold: n.modeOptions.threshold,
    vadAutoThreshold: n.modeOptions.autoThreshold,
    vadUseKrisp: n.modeOptions.vadUseKrisp && n8(),
    vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : .5,
    vadLeading: n.modeOptions.vadLeading,
    vadTrailing: n.modeOptions.vadTrailing,
    pttReleaseDelay: Math.round(n.modeOptions.delay)
  })
}

function tj(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Qx;
  return p().clamp(e, 0, t)
}

function tM(e) {
  let t = tL(e.context),
    n = !ez || t.mute || t.deaf;
  e.context === ev.Yn.DEFAULT ? n = n || e1 || e2 || e3 || !q.Z.didHavePermission(eb.Eu.AUDIO) : e.context === ev.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ev.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tk(e) {
  e !== eX && (null != a && eY.setGoLiveSource(null, eX), eX = e)
}

function tU() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : e8,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), eY.setGoLiveSource(null, eX)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && eY.setGoLiveSource(null, eX), e8 || i) {
    let e = tL().videoDeviceId;
    e8 && module === Chunk65154.w5 && e6 === Chunk65154.w5 && e5 !== Chunk65154.Av ? e = e5 : e6 = module, e5 = (e8 = i) ? t8(e0, module) : Chunk65154.Av, eY.setVideoInputDevice(e5)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tw(),
        n = tL().videoHook,
        i = tW(),
        a = i ? tK() && Chunk787517.G.getCurrentConfig({
          location: "MediaEngineStore_updateVideo"
        }).enabled ? Chunk70722.zj : Chunk70722.ZM : 0;
      eY.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: tz(),
          videoHookStaleFrameTimeoutMs: ek,
          graphicsCaptureStaleFrameTimeoutMs: eU,
          hdrCaptureMode: exports
        },
        quality: module
      }, eX)
    }
    null != o.cameraSource && eY.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, eX)
  }
}

function tG(e) {
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

function tB(e) {
  let t = (0, j.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eS({
    enabled: e
  }, t)
}

function tZ(e, t) {
  e.setAutomaticGainControl(tB(t))
}
async function tF(e, t) {
  if ((0, ei.isIOS)() || (0, ei.isMac)()) {
    let e = await eY.getSystemMicrophoneMode();
    "" !== e && "standard" !== e && M.Z.getConfig({
      location: "setNoiseCancellation"
    }).disabledModes.includes(e) && (t = false)
  }
  e.setNoiseCancellation(t);
  let {
    noiseCancellationDuringProcessing: n
  } = (0, j.U)({
    location: "setNoiseCancellation",
    disable: !t
  });
  e.setNoiseCancellationDuringProcessing(n)
}

function tV(e) {
  let t = tL(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ed.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ed.Z.hasNoiseSuppression(n) || t.noiseSuppression), tZ(e, ed.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tF(e, t.noiseCancellation), e.setVoiceFilterId(tf), (0, ei.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tH() {
  var e;
  return !!(0, Chunk947851.m)("MediaEngineStore") || null == (e = tL().hardwareEncoding) || module
}

function tY() {
  eY.on(Chunk46973.aB.Connection, e => {
    var t;
    tx(e), tM(e), tV(e);
    let n = tL();
    e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(tH()), e.setSoftwareH264(null == (t = n.openH264) || t);
    let i = e_.Z.getGuildId(),
      {
        muteBeforeProcessing: o,
        pttBeforeProcessing: s,
        skipEncode: l
      } = (null != i ? B.Z : G.Z).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != i ? i : true
      }, {
        autoTrackExposure: true
      });
    o && e.setExperimentFlag(ev.V8.MUTE_BEFORE_PROCESSING, true), s && e.setExperimentFlag(ev.V8.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(ev.V8.SKIP_ENCODE, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(ev.V8.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === ev.Yn.STREAM) {
      let t = t6(e$);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = V.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, ei.isWindows)() ? (null == tA ? true : tA.startsWith("NVIDIA")) || (null == tA ? true : tA.startsWith("AMD")) ? e.setExperimentFlag(ev.V8.SIGNAL_AV1, true) : e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, true) : ((0, ei.isMac)() || (0, ei.isLinux)()) && e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, true), (0, ei.isWindows)() && e.setExperimentFlag(ev.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, ei.isWeb)()) {
      let {
        enabled: t
      } = (0, Z.A)("MediaEngineStore");
      e.setExperimentFlag(ev.V8.BROWSER_HEVC, t)
    }
    if (eY.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(ev.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = W.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ev.ux)
    }
    for (let t of (n = tL(e.context), e.setPostponeDecodeLevel(eB), Object.keys(n.localMutes))) t !== ec.default.getId() && e.setLocalMute(t, n.localMutes[t]);
    for (let t of Object.keys(n.localVolumes)) t !== ec.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
    for (let t of Object.keys(n.localPans)) {
      let r = n.localPans[t];
      e.setLocalPan(t, r.left, r.right)
    }
    for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
    e.on(b.Sh.Speaking, (t, n) => {
      v.Z.dispatch({
        type: "SPEAKING",
        context: e.context,
        userId: t,
        speakingFlags: n
      })
    }), e.context === ev.Yn.DEFAULT && (e9 = false, te = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      e9 = true, te = true, r.emitChange(), tt.stop(), tt.start(eZ, () => {
        te = false, r.emitChange()
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
    }), e.on(b.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
      (null == a ? true : a.desktopSource) != null && et.default.track(eg.rMx.VIDEOHOOK_INITIALIZED, eS({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, x.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      eN.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tG(e)
      }), tg = true, et.default.track(eg.rMx.VOICE_PROCESSING, {
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
      eN.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tG(e)
      }), et.default.track(eg.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: ev.Yn.DEFAULT,
        mode: eg.pM4.VOICE_ACTIVITY,
        options: eC(eS({}, tL(ev.Yn.DEFAULT).modeOptions), {
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
    ty = true, v.Z.dispatch({
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
    eN.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
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
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
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
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eC(eS({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eC(eS({
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
    let t = rw(e);
    null !== t && et.default.track(eg.rMx.VOICE_QUEUE_METRICS, t)
  }), eY.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nk(), nG(), tQ.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tA = e.gpu_brand)
  }), eY.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    eY.eachConnection(tV)
  })
}

function tW() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function tK() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function tz() {
  return (0, Chunk358085.isMac)() && eY.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function tq() {
  return (0, Chunk358085.isWindows)() && eY.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eY.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function tX() {
  return eY.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let tQ = new class {
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
    let e = tL();
    !ta && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
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

function tJ() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eR, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), eW = null != (e = Chunk433517.K.get(eR)) ? module : {}, p().each(eW, e => {
    if (p().defaultsDeep(e, eV()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, el.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eP && (e.vadUseKrispSettingVersion = eP, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eG)
    }
    eY.supports(ev.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < ex && (e.sidechainCompressionSettingVersion = ex, e.sidechainCompression = true), (0, ei.isWeb)() ? e.ncUseKrispjsSettingVersion !== eD && (e.ncUseKrispjsSettingVersion = eD, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== ew && (e.ncUseKrispSettingVersion = ew, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== eL && (e.hardwareH264 = true, e.hardwareEnabledVersion = eL), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), t1()
}

function t$(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tD(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eR, eW), r
}

function t0() {
  Chunk433517.K.remove(eR), location.reload()
}

function t1() {
  let e = tL();
  eY.setAudioInputDevice(module.inputDeviceId), eY.setAudioOutputDevice(module.outputDeviceId), tU(), eY.setInputVolume(module.inputVolume), eY.setOutputVolume(module.outputVolume), eY.setH264Enabled(tH() || module.openH264), eY.setAv1Enabled(tH()), eY.setH265Enabled(tH()), eY.setAecDump(module.aecDumpEnabled), eY.setSidechainCompression(module.sidechainCompression), eY.setSidechainCompressionStrength(module.sidechainCompressionStrength), eY.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t2() {
  ez || eY.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function t3(e) {
  return {
    id: ev.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function t4(e, t) {
  if (0 === e.length) {
    let e = t3(t);
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

function t8(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[ev.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function t5(e) {
  let t = eJ;
  if (eJ = t4(e, eI.intl.string(eI.t["/QIjDA"])), !p().isEqual(eJ, t)) {
    let e = tL(),
      t = t8(eJ, e.inputDeviceId);
    eY.setAudioInputDevice(t)
  }
}

function t6(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function t7(e) {
  eY.eachConnection(t => {
    t.context === ev.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function t9(e) {
  let t = e$;
  if (e$ = t4(e, eI.intl.string(eI.t.xlUg0t)), !p().isEqual(e$, t)) {
    let e = tL(),
      n = t8(e$, e.outputDeviceId);
    eY.setAudioOutputDevice(n);
    let r = t6(t),
      i = t6(e$);
    r !== i && t7(i)
  }
}

function ne(e) {
  tr = e.length > 0;
  let t = e0;
  if (e0 = t4(e, eI.intl.string(eI.t.WKWARU)), e8 && !p().isEqual(e0, t)) {
    var n;
    let e = true !== e0[e5],
      r = e5 === ev.w5 && (null == (n = t[ev.w5]) ? true : n.disabled);
    tU(e || r)
  }
}

function nt() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
    r = null != (e = Chunk581883.Z.settings.audioContextSettings) ? module : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(r)) {
    let i = module === Chunk526761.u0.USER ? Chunk65154.Yn.DEFAULT : Chunk65154.Yn.STREAM,
      a = i === Chunk65154.Yn.STREAM ? Chunk65154.Yh : Chunk65154.Qx,
      o = null != (t = r[module]) ? exports : {},
      {
        localMutes: s,
        localVolumes: l
      } = tL(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], eY.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], eY.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t$({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nn(e) {
  if (null == r) return eN.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
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

function nr(e, t) {
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

function ni(e) {
  i = e.sessionId, e1 = false, e4 = false;
  let t = tL();
  if (tq() && (tX() ? ra(ev.iA.AUTOMATIC) : t.automaticAudioSubsystem && ro()), eY.supports(ev.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, ei.isDesktop)() ? e = (0, k.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, ei.isIOS)() || (0, ei.isAndroid)()) && (e = (0, U.W)({
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
  }), t$({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), nt()
}

function na(e) {
  let {
    mediaEngineState: t
  } = e;
  eW = t.settingsByContext, eJ = t.inputDevices, e$ = t.outputDevices, tS = t.appSupported, tc = t.krispModuleLoaded, s = t.krispVersion, eX = t.goLiveContext
}

function no() {
  i = null
}

function ns() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.N.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nl(e) {
  switch (e.state) {
    case eg.hes.CONNECTING:
      t2();
      break;
    case eg.hes.RTC_CONNECTING:
      ta = false, to = false;
      break;
    case eg.hes.RTC_CONNECTED:
      tU();
      break;
    case eg.hes.DISCONNECTED:
      ng(), nE()
  }
  tQ.update()
}

function nc(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e1 = t.mute || t.suppress, e4 = t.deaf, eY.eachConnection(tM);
      let e = null != t.guildId && null != t.channelId && null != tm && tm !== t.channelId,
        n = !ts && null == t.channelId;
      return tU(!e && !n && e8), tm = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== ec.default.getId() || null != e_.Z.getChannelId() || tU(false, null), e
  }, false)
}

function nu(e) {
  let {
    mute: t
  } = e;
  e2 = t, eY.eachConnection(tM)
}

function nd(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tL(t);
  if (t === ev.Yn.DEFAULT && (q.Z.requestPermission(eb.Eu.AUDIO), e3)) returnfalse;
  (r = !i && !r) || (i = false), n || (e7 = true), t$({
    mute: r,
    deaf: i
  }, t), eY.eachConnection(tM)
}

function nf(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t$({
    mute: n
  }, t), r || (e7 = true), eY.eachConnection(tM)
}

function n_(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== ey.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nt(true)
}

function np(e) {
  let {
    context: t
  } = e;
  t$({
    deaf: !tL(t).deaf
  }, t), eY.eachConnection(tM)
}

function nh(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === ec.default.getId()) return;
  let {
    localMutes: r
  } = tL(t);
  r[n] ? delete r[n] : r[n] = true, t$({
    localMutes: r
  }, t), eY.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nm(e) {
  var t, n, r, i, a, o, s;
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
    } = tL(l),
    m = null != (t = h[c]) && t,
    g = tv.has(c),
    E = u === eg.ZUi.AUTO_ENABLED || u === eg.ZUi.MANUAL_ENABLED;
  eN.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === ev.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  eN.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tL(l);
  if (I[c] === eg.ZUi.AUTO_PROBING && u === eg.ZUi.AUTO_ENABLED && (0, z.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E), I[c] = u, t$({
      videoToggleStateMap: I
    }, l, d), u === eg.ZUi.AUTO_PROBING ? null == (n = e_.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = e_.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tI || (eN.info("isAutoDisableAllowed=".concat(tI, " - disabling VideoHealthManager")), null == (a = e_.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tI) return;
    (0, z.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E), p ? tv.add(c) : tv.delete(c)
  } else v && (g && !p ? (eN.info("disallowing auto-disable for this session because of manual override by user"), tI = false, null == (s = e_.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, z.Z)(c, ev.fC.MANUAL_REENABLE, E)) : (0, z.Z)(c, p ? ev.fC.MANUAL_DISABLE : ev.fC.MANUAL_ENABLE, E));
  y && !p && tv.delete(c), p ? h[c] = true : delete h[c], t$({
    disabledLocalVideos: h
  }, l, d), eY.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function ng() {
  if (0 === tv.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tL(module);
  tv.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eY.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tv.clear(), t$({
    disabledLocalVideos: exports
  }, module, false)
}

function nE() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tL(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t$({
    videoToggleStateMap: exports
  }, module, false)
}

function nb(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === ec.default.getId()) return;
  let i = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
    {
      localVolumes: a
    } = tL(t);
  r === i ? delete a[n] : a[n] = r, t$({
    localVolumes: a
  }, t), eY.eachConnection(e => e.setLocalVolume(n, r), t)
}

function ny(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tL(t);
  a[n] = {
    left: r,
    right: i
  }, t$({
    localPans: a
  }, t), eY.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nO(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t$({
    mode: n,
    modeOptions: r
  }, t), eY.eachConnection(tx), tQ.update()
}

function nv(e) {
  let {
    volume: t
  } = e;
  t$({
    inputVolume: tj(t)
  }), eY.setInputVolume(t)
}

function nI(e) {
  let {
    volume: t
  } = e;
  t$({
    outputVolume: t
  }), eY.setOutputVolume(t)
}

function nT(e) {
  let {
    id: t
  } = e;
  t = t8(eJ, t), eQ = performance.now(), t$({
    inputDeviceId: t
  }), eY.setAudioInputDevice(t)
}

function nS(e) {
  let {
    id: t
  } = e;
  t$({
    outputDeviceId: t = t8(e$, t)
  }), eY.setAudioOutputDevice(t)
}

function nA(e) {
  let {
    id: t
  } = e;
  t$({
    videoDeviceId: t = t8(e0, t)
  }), tU()
}

function nC(e) {
  let {
    inputProfile: t
  } = e;
  t$({
    activeInputProfile: t
  });
  let n = tL();
  eY.eachConnection(e => {
    tx(e), tZ(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tF(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), eY.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), tQ.update(), nU()
}

function nN(e) {
  return eq !== e.required && (eq = e.required, e.required || eY.interact(), true)
}

function nR(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  t5(t), t9(n), ne(r)
}

function nP(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t$({
    inputVolume: tj(t),
    outputVolume: n
  })
}

function nw(e) {
  var t;
  let n = tL(),
    r = eY.getAudioSubsystem(),
    i = eY.getAudioLayer(),
    a = t8(eJ, n.inputDeviceId),
    o = null == (t = eJ[a]) ? true : t.name;
  et.default.track(eg.rMx.VOICE_PROCESSING, {
    echo_cancellation: n.echoCancellation,
    noise_cancellation: n.noiseCancellation,
    noise_suppression: n.noiseSuppression,
    automatic_gain_control: n.automaticGainControl,
    location: e,
    bypass_system_input_processing: n.bypassSystemInputProcessing,
    audio_subsystem: r,
    audio_layer: i,
    input_device: o
  })
}

function nD(e) {
  let t = t$({
    echoCancellation: e.enabled
  });
  eY.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nU(), nw(e.location)
}

function nL(e) {
  nj(e.enabled)
}

function nx(e) {
  let t = t$({
    sidechainCompressionStrength: e.strength
  });
  eY.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nj(e) {
  let t = t$({
    sidechainCompression: e
  });
  eY.setSidechainCompression(t.sidechainCompression)
}

function nM(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tT.add(n) : tT.delete(n), nk(), nU()
}

function nk() {
  let e = !tT.has("voice_filter_preview") && !tT.has("mic_test");
  eY.setMaybePreprocessMute(module)
}

function nU() {
  let e = tL(),
    t = tT.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tB(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tf,
    c = tT.has("voice_filter") && 1 === tT.size;
  eY.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function nG() {
  var e, t, n, r;
  if (!eY.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  if ((null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) == null || !(null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i)) return;
  let {
    enabled: a
  } = await (0, Chunk302630.m)("setGamescopeVaapiEnabled");
  tP = a, a && eY.supports(Chunk65154.AN.GAMESCOPE_CAPTURE) && (tR = true)
}

function nB(e) {
  let t = t$({
    noiseSuppression: e.enabled
  });
  eY.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nU(), nw(e.location)
}

function nZ(e) {
  let t = t$({
    automaticGainControl: e.enabled
  });
  eY.eachConnection(e => tZ(e, t.automaticGainControl)), nU(), nw(e.location)
}

function nF(e) {
  let t = t$({
    noiseCancellation: e.enabled
  });
  eY.eachConnection(e => tF(e, t.noiseCancellation)), nU(), nw(e.location)
}

function nV(e) {
  X.Z.setKrispModelOverride(e.model), c = e.model, nU()
}

function nH(e) {
  var t;
  (0, ei.isWeb)() || (td = e.enabled, null == (t = eY.setNoiseCancellationEnableStats) || t.call(eY, e.enabled))
}

function nY(e) {
  let t = t$({
    experimentalEncoders: e.enabled
  });
  eY.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function nW(e) {
  let {
    enabled: t
  } = e, n = t$({
    hardwareEncoding: t
  }), r = tH();
  eY.eachConnection(e => e.setHardwareH264(r)), eY.setH264Enabled(r || n.openH264), eY.setAv1Enabled(r), eY.setH265Enabled(r)
}

function nK(e) {
  t$({
    silenceWarning: e.enabled
  }), tQ.update()
}

function nz(e) {
  eY.setDebugLogging(e.enabled)
}

function nq(e) {
  let {
    level: t
  } = e;
  l = t, X.Z.setKrispSuppressionLevel(t)
}

function nX(e) {
  t$({
    videoHook: e.enabled
  })
}

function nQ(e) {
  t$({
    experimentalSoundshare2: e.enabled
  })
}

function nJ(e) {
  let {
    enabled: t
  } = e;
  t$({
    useSystemScreensharePicker: t
  })
}

function n$(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t$({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  eY.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n0(e) {
  let {
    enabled: t
  } = e;
  t$({
    qos: t
  }), eY.eachConnection(e => e.setQoS(t))
}

function n1() {
  t0()
}

function n2(e) {
  let {
    inputDetected: t
  } = e;
  ti = t, !ta && ti && (ta = true, tQ.update())
}

function n3(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === e3) returnfalse;
  e3 = n, eY.eachConnection(tM)
}

function n4(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eb.PQ.ACCEPTED;
  switch (n) {
    case eb.Eu.AUDIO:
      ty = true, eY.eachConnection(tM);
      break;
    case eb.Eu.CAMERA:
      !r && e8 && tU(false);
      break;
    default:
      returnfalse
  }
}

function n8() {
  return tc || false
}
async function n5() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tc = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tu = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eN.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), t$({
      noiseCancellation: false
    })
  } finally {
    tl = false
  }
}

function n6() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function n7() {
  !n6() || __OVERLAY__ || tl || tc ? (0, Chunk358085.isWeb)() && eY.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tc = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t$({
    noiseCancellation: false
  }) : (tl = true, n5())
}

function n9(e) {
  let {
    enabled: t
  } = e;
  et.default.track(eg.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tf ? tf : null,
    enabled: t
  }), t$({
    voiceFilterPlaybackEnabled: t
  })
}

function re(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t$({
    mostRecentlyRequestedVoiceFilter: t
  }), eY.eachConnection(e => e.setVoiceFilterId(t))
}

function rt() {
  t$({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rn(e) {
  let {
    voiceFilterId: t
  } = e;
  tp = tf, th = t_, tf = t, t_ = null === t ? null : Date.now()
}

function rr(e) {
  let t = e.bypassEnabled;
  t$({
    bypassSystemInputProcessing: t
  }), eY.setAudioInputBypassSystemProcessing(t), nw(e.location)
}

function ri(e) {
  ra(e.subsystem)
}

function ra(e) {
  e === ev.iA.AUTOMATIC ? (t$({
    automaticAudioSubsystem: true
  }), ro()) : (t$({
    automaticAudioSubsystem: false
  }), eY.setAudioSubsystem(e))
}

function ro() {
  eY.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rs(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tU(i, null), null != t || null == n) {
    ts = false;
    return
  }
  if (ts) return;
  ts = true;
  let a = tL();
  (a.mute || a.deaf) && (t$({
    deaf: false,
    mute: false
  }), eY.eachConnection(tM))
}

function rl(e) {
  let {
    application: t
  } = e;
  eK.add(t.id)
}

function rc(e) {
  let {
    application: t
  } = e;
  eK.delete(t.id)
}

function ru(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      ez = false, eY.eachConnection(tM);
      break;
    case "video":
      tU(false)
  }
}

function rd(e) {
  ez = e.enabled, e.unmute && t$({
    mute: false,
    deaf: false
  }), eY.eachConnection(tM)
}

function rf(e) {
  let {
    enabled: t
  } = e;
  q.Z.requestPermission(eb.Eu.CAMERA), tU(t)
}

function r_(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = en.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = nn(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (eY.setClipsSource(null), (0, ei.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && nr(l, c), o = d;
  let f = tw(),
    _ = tL().videoHook;
  eY.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: tW(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: tz(),
      videoHookStaleFrameTimeoutMs: ek,
      graphicsCaptureStaleFrameTimeoutMs: eU,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function rp(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, eY.setClipsSource(null))
}

function rh(e) {
  var t, n, r, i;
  let {
    settings: a
  } = e;
  if ((null == a ? true : a.desktopSettings) != null) {
    let e = null,
      r = null,
      {
        sourceId: i,
        sound: o
      } = a.desktopSettings,
      s = null != (t = a.context) ? t : ev.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : en.Z.getPidFromDesktopSource(i);
    ei.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nn(c), null != e && nr(e, r)), tk(s), tU(s === ev.Yn.STREAM && e8, {
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
  } else if ((null == a ? true : a.cameraSettings) != null) {
    let e = null != (r = a.context) ? r : ev.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === ev.Yn.STREAM && e8,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tU(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tU(e8, null)
}

function rm(e) {
  let {
    section: t
  } = e;
  return t === eg.oAB.VOICE && t2(), false
}

function rg() {
  return eY.eachConnection(tV), false
}

function rE(e) {
  let {
    enabled: t
  } = e, n = t$({
    openH264: t
  });
  eY.setH264Enabled(tH() || n.openH264), eY.eachConnection(e => {
    var t;
    return e.setSoftwareH264(null == (t = n.openH264) || t)
  })
}

function rb(e) {
  let {
    enabled: t
  } = e, n = t$({
    aecDumpEnabled: t
  });
  eY.setAecDump(n.aecDumpEnabled)
}

function ry(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  eW = Object.values(ev.Yn).reduce((e, n) => {
    let r = n,
      i = eV();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(eR, eW), t1()
}

function rO(e) {
  let {
    state: t
  } = e, n = D.Z.isEnabled();
  if (t === eg.$7l.BACKGROUND && e8 && !n) tn = true, tU(false);
  else {
    if (t !== eg.$7l.ACTIVE || !tn) returnfalse;
    tn = false, tU(true)
  }
  returntrue
}

function rv(e) {
  eY.eachConnection(t => t.setBitRate(e.bitrate))
}

function rI() {
  if (!e8 && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tU(false, null)
}

function rT() {
  return !!tg && (tg = false, true)
}

function rS(e) {
  eY.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rA(e) {
  let {
    settings: t
  } = e;
  eY.applyMediaFilterSettings(t).finally(() => {
    tE = false, r.emitChange()
  })
}

function rC() {
  tE = true
}

function rN() {
  tE = false
}

function rR(e) {
  tC = e.enabled
}
class rP extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tY(), tJ(), n7(), nE(), tS = {
      [Chunk65154.AN.VIDEO]: eY.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: eY.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: eY.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk463395.Z, Chunk592125.Z, Chunk19780.Z, Chunk594190.ZP, Chunk751571.Z.storage, Chunk581883.Z, Chunk353926.Z, Chunk435064.Z)
  }
  supports(e) {
    return eY.supports(e)
  }
  supportsInApp(e) {
    return tS[e] || eY.supports(e)
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
    return n8()
  }
  isNoiseCancellationError() {
    return tg
  }
  isAutomaticGainControlSupported() {
    return eY.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !tX() && (eY.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || eY.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return eY.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eY.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return n8()
  }
  isAecDumpSupported() {
    return eY.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eY.supports(Chunk65154.AN.VIDEO) && eY.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    let t = (null == (e = Chunk592125.Z.getChannel(tm)) ? true : module.type) === Chunk981631.d4z.GUILD_STAGE_VOICE,
      n = tH();
    return !exports && require && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tL().aecDumpEnabled
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
    return td
  }
  isEnabled() {
    return ez
  }
  isMute() {
    return this.isSelfMute() || e1
  }
  isDeaf() {
    return this.isSelfDeaf() || e4
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
    return !this.isEnabled() || tL(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && e3
  }
  shouldSkipMuteUnmuteSound() {
    return e7
  }
  notifyMuteUnmuteSoundWasSkipped() {
    e7 = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tC
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tL(module).deaf
  }
  isVideoEnabled() {
    return e8 && tr
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
    return eX === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return eX === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
    return e !== ec.default.getId() && (tL(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return eY.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
    return null != (t = tL(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
    return null != (t = tL(n).videoToggleStateMap[e]) ? t : eg.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
    return t === ev.Yn.DEFAULT && tv.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tv.size > 0
  }
  isMediaFilterSettingLoading() {
    return tE
  }
  isNativeAudioPermissionReady() {
    return ty
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return eX
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return eQ
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
      n = tL(t).localPans[e];
    return null != n ? n : eM
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
      n = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
      r = tL(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tL().inputVolume
  }
  getOutputVolume() {
    return tL().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tL(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tL(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tf
  }
  getActiveVoiceFilterAppliedAt() {
    return t_
  }
  getPreviousVoiceFilter() {
    return tp
  }
  getPreviousVoiceFilterAppliedAt() {
    return th
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tL().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tL().voiceFilterPlaybackEnabled
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
    return t8(eJ, tL().inputDeviceId)
  }
  getOutputDeviceId() {
    return t8(e$, tL().outputDeviceId)
  }
  getVideoDeviceId() {
    return t8(e0, tL().videoDeviceId)
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
    let e = tL();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return eY.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tL().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tL().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tL().h265Enabled
  }
  getLoopback() {
    return tT.size > 0
  }
  getLoopbackReasons() {
    return tT
  }
  getNoiseSuppression() {
    let e = tL();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tL();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tL().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tL().noiseCancellation
  }
  getExperimentalEncoders() {
    return tL().experimentalEncoders
  }
  getHardwareEncoding() {
    return tH()
  }
  getHardwareEncodingSetting() {
    var e;
    return null == (e = tL().hardwareEncoding) || module
  }
  getEnableSilenceWarning() {
    return tL().silenceWarning
  }
  getDebugLogging() {
    return eY.getDebugLogging()
  }
  getQoS() {
    return tL().qos
  }
  getAttenuation() {
    return tL().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tL().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tL().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return tq() && tL().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : eY.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return eY.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tL().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tL(module)
  }
  getState() {
    return {
      settingsByContext: eW,
      inputDevices: eJ,
      outputDevices: e$,
      appSupported: tS,
      krispModuleLoaded: tc,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: eX
    }
  }
  getInputDetected() {
    return ti
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
    return tL().videoHook
  }
  supportsVideoHook() {
    return eY.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tL().experimentalSoundshare2;
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
      t = tL().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return eY.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tP
  }
  getUseGamescopeCapture() {
    return tR
  }
  getOpenH264() {
    return tL().openH264
  }
  getEverSpeakingWhileMuted() {
    return e9
  }
  getSpeakingWhileMuted() {
    return te
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tu
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tL().modeOptions.vadKrispActivationThreshold) ? module : ej
  }
  hasActiveCallKitCall() {
    return tN
  }
  setHasActiveCallKitCall(e) {
    tN = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? eY.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && tz() : (0, Chunk358085.isWindows)() ? eY.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && eY.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
  startDavePreload() {
    if (!tb && (tb = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      eY.fetchAsyncResources(module).catch(e => {
        eN.warn("DAVE preload failed:", e), eo.Z.captureException(e)
      })
    }
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
    return null != o
  }
  getGpuBrand() {
    return tA
  }
}

function rw(e) {
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
eT(rP, "displayName", "MediaEngineStore");
let rD = r = new rP(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rs,
  VOICE_STATE_UPDATES: nc,
  CONNECTION_OPEN: ni,
  CONNECTION_CLOSED: no,
  POST_CONNECTION_OPEN: ns,
  RTC_CONNECTION_STATE: nl,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nu,
  AUDIO_TOGGLE_SELF_MUTE: nd,
  AUDIO_SET_SELF_MUTE: nf,
  AUDIO_TOGGLE_SELF_DEAF: np,
  AUDIO_TOGGLE_LOCAL_MUTE: nh,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nm,
  AUDIO_SET_LOCAL_VOLUME: nb,
  AUDIO_SET_LOCAL_PAN: ny,
  AUDIO_SET_MODE: nO,
  AUDIO_SET_INPUT_VOLUME: nv,
  AUDIO_SET_OUTPUT_VOLUME: nI,
  AUDIO_SET_INPUT_DEVICE: nT,
  AUDIO_SET_OUTPUT_DEVICE: nS,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nC,
  AUDIO_SET_ECHO_CANCELLATION: nD,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nL,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nx,
  AUDIO_SET_LOOPBACK: nM,
  AUDIO_SET_NOISE_SUPPRESSION: nB,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nZ,
  AUDIO_SET_NOISE_CANCELLATION: nF,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nV,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nK,
  AUDIO_SET_DEBUG_LOGGING: nz,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nq,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nH,
  MEDIA_ENGINE_SET_VIDEO_HOOK: nX,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nQ,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nJ,
  AUDIO_SET_ATTENUATION: n$,
  AUDIO_SET_QOS: n0,
  MEDIA_ENGINE_DEVICES: nR,
  AUDIO_VOLUME_CHANGE: nP,
  AUDIO_RESET: n1,
  AUDIO_INPUT_DETECTED: n2,
  AUDIO_SET_SUBSYSTEM: ri,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rr,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rd,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rf,
  MEDIA_ENGINE_PERMISSION: ru,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rh,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nA,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nY,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nN,
  USER_SETTINGS_MODAL_INIT: rm,
  USER_SETTINGS_MODAL_SET_SECTION: rm,
  CERTIFIED_DEVICES_SET: rg,
  RPC_APP_CONNECTED: rl,
  RPC_APP_DISCONNECTED: rc,
  OVERLAY_INITIALIZE: na,
  MEDIA_ENGINE_SET_OPEN_H264: rE,
  MEDIA_ENGINE_SET_HARDWARE_ENCODING: nW,
  APP_STATE_UPDATE: rO,
  SET_CHANNEL_BITRATE: rv,
  SET_VAD_PERMISSION: n3,
  SET_NATIVE_PERMISSION: n4,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rS,
  MEDIA_ENGINE_SET_AEC_DUMP: rb,
  MEDIA_ENGINE_RESET_SETTINGS: ry,
  CHANNEL_DELETE: rI,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rT,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rA,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rC,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rN,
  USER_SETTINGS_PROTO_UPDATE: n_,
  CLIPS_INIT: r_,
  CLIPS_SETTINGS_UPDATE: rp,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rR,
  VOICE_FILTER_REQUEST_SWITCH: re,
  VOICE_FILTER_LOOPBACK_TOGGLE: n9,
  VOICE_FILTER_APPLIED: rn,
  VOICE_FILTER_DOWNLOAD_FAILED: rt,
  VOICE_FILTER_APPLY_FAILED: rt
})