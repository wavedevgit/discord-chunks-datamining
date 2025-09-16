/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rC
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
  Chunk355552 = require("./355552.js"),
  Chunk294473 = require("./294473.js"),
  Chunk706629 = require("./706629.js"),
  Chunk159142 = require("./159142.js"),
  Chunk166884 = require("./166884.js"),
  Chunk585360 = require("./585360.js"),
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

function eS(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eS(e, t, n[t])
    })
  }
  return e
}

function eC(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eC(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eR = new Chunk710845.Z("MediaEngineStore"),
  eP = "MediaEngineStore",
  ew = 4,
  eD = 1,
  ex = 1,
  eL = 1,
  ej = 1,
  eM = .5,
  ek = {
    left: 1,
    right: 1
  },
  eU = 500,
  eG = 5 * Chunk70956.Z.Millis.SECOND,
  eB = false,
  eZ = 100,
  eF = 2 * Chunk70956.Z.Millis.SECOND,
  eV = 0;

function eH() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eB,
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
    videoHook: eW.supports(Chunk65154.AN.VIDEO_HOOK),
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
let eY = {
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
  eW = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
eR.enableNativeLogger(true);
let eK = {},
  ez = new Set([Chunk65154.Yn.DEFAULT]),
  eq = eW.supports(Chunk65154.AN.AUTO_ENABLE),
  eX = false,
  eQ = Chunk65154.Yn.STREAM,
  eJ = performance.now(),
  e$ = {
    [Chunk65154.w5]: t2("No Input Devices")
  },
  e0 = {
    [Chunk65154.w5]: t2("No Output Devices")
  },
  e1 = {
    [Chunk65154.w5]: t2("No Video Devices")
  },
  e2 = false,
  e3 = false,
  e4 = false,
  e8 = false,
  e5 = false,
  e6 = Chunk65154.Av,
  e7 = Chunk65154.Av,
  e9 = false,
  te = false,
  tt = false,
  tn = new Chunk846519.V7,
  tr = false,
  ti = false,
  ta = null,
  to = false,
  ts = false,
  tl = false,
  tc = false,
  tu = false,
  td = [],
  tf = false,
  t_ = null,
  tp = null,
  th = null,
  tm = null,
  tg = null,
  tE = false,
  tb = false,
  ty = false,
  tO = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tv = false,
  tI = new Set,
  tT = tv,
  tS = new Set,
  tA = {},
  tC = null,
  tN = true,
  tR = false;

function tP() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tw() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = eK[module];
  return null == exports && (t = eH(), eK[module] = exports), exports
}

function tD() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tw(r),
    a = eY[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM];
  return eN(eA({}, i, a), {
    modeOptions: eA({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {})
  })
}

function tx(e) {
  var t;
  let n = tD(e.context);
  e.setInputMode(n.mode, {
    vadThreshold: n.modeOptions.threshold,
    vadAutoThreshold: n.modeOptions.autoThreshold,
    vadUseKrisp: n.modeOptions.vadUseKrisp && n1(),
    vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : .5,
    vadLeading: n.modeOptions.vadLeading,
    vadTrailing: n.modeOptions.vadTrailing,
    pttReleaseDelay: Math.round(n.modeOptions.delay)
  })
}

function tL(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Qx;
  return p().clamp(e, 0, t)
}

function tj(e) {
  let t = tD(e.context),
    n = !eq || t.mute || t.deaf;
  e.context === eI.Yn.DEFAULT ? n = n || e2 || e3 || e4 || !X.Z.didHavePermission(ey.Eu.AUDIO) : e.context === eI.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eI.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tM(e) {
  e !== eQ && (null != a && eW.setGoLiveSource(null, eQ), eQ = e)
}

function tk() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : e5,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), eW.setGoLiveSource(null, eQ)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && eW.setGoLiveSource(null, eQ), e5 || i) {
    let e = tD().videoDeviceId;
    e5 && module === Chunk65154.w5 && e7 === Chunk65154.w5 && e6 !== Chunk65154.Av ? e = e6 : e7 = module, e6 = (e5 = i) ? t4(e1, module) : Chunk65154.Av, eW.setVideoInputDevice(e6)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tP(),
        n = tD().videoHook,
        i = tY(),
        a = i ? tW() && (0, Chunk787517.R)("MediaEngineStore_updateVideo").enabled ? Chunk70722.zj : Chunk70722.ZM : 0;
      eW.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: tK(),
          videoHookStaleFrameTimeoutMs: eU,
          graphicsCaptureStaleFrameTimeoutMs: eG,
          hdrCaptureMode: exports
        },
        quality: module
      }, eQ)
    }
    null != o.cameraSource && eW.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, eQ)
  }
}

function tU(e) {
  switch (e) {
    case eI.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case eI.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case eI.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tG(e) {
  let t = (0, j.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eA({
    enabled: e
  }, t)
}

function tB(e, t) {
  e.setAutomaticGainControl(tG(t))
}
async function tZ(e, t) {
  if ((0, ea.isIOS)() || (0, ea.isMac)()) {
    let e = await eW.getSystemMicrophoneMode();
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

function tF(e) {
  let t = tD(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ef.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ef.Z.hasNoiseSuppression(n) || t.noiseSuppression), tB(e, ef.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tZ(e, t.noiseCancellation), e.setVoiceFilterId(t_), (0, ea.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tV() {
  var e;
  return !!(0, Chunk947851.m)("MediaEngineStore") || null == (e = tD().hardwareEncoding) || module
}

function tH() {
  eW.on(Chunk46973.aB.Connection, e => {
    var t;
    tx(e), tj(e), tF(e);
    let n = tD();
    e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(tV()), e.setSoftwareH264(null == (t = n.openH264) || t);
    let i = ep.Z.getGuildId(),
      {
        muteBeforeProcessing: o,
        pttBeforeProcessing: s,
        skipEncode: l
      } = (null != i ? Z.Z : B.Z).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != i ? i : true
      }, {
        autoTrackExposure: true
      });
    o && e.setExperimentFlag(eI.V8.MUTE_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eI.V8.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(eI.V8.SKIP_ENCODE, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(eI.V8.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eI.Yn.STREAM) {
      let {
        simulcastEnabled: t,
        lqStreamBitrate: n
      } = V.Z.getConfig();
      e.configureGoLiveSimulcast(t, n);
      let {
        enabled: r,
        scaleOffBitrateFloor: i,
        adjustMaxBitrateFloor: a
      } = (0, H.k)({
        location: "setupMediaEngine",
        autoTrackExposure: true
      });
      e.setGoLiveUsePixelCounts(r, i, a)
    }
    if ((0, ea.isWindows)() ? (null == tC ? true : tC.startsWith("NVIDIA")) || (null == tC ? true : tC.startsWith("AMD")) ? e.setExperimentFlag(eI.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, true) : ((0, ea.isMac)() || (0, ea.isLinux)()) && e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, true), (0, ea.isWindows)() && e.setExperimentFlag(eI.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, ea.isWeb)()) {
      let {
        enabled: t
      } = (0, F.A)("MediaEngineStore");
      e.setExperimentFlag(eI.V8.BROWSER_HEVC, t)
    }
    eW.setHasFullbandPerformance((0, R.Z)());
    let d = (0, G.D)("setupMediaEngine").enabled;
    if (e.setRemoteAudioHistory(1e3 * !!d), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(eI.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = K.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eI.ux)
    }
    for (let t of (n = tD(e.context), e.setPostponeDecodeLevel(eZ), Object.keys(n.localMutes))) t !== eu.default.getId() && e.setLocalMute(t, n.localMutes[t]);
    for (let t of Object.keys(n.localVolumes)) t !== eu.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
    }), e.context === eI.Yn.DEFAULT && (te = false, tt = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      te = true, tt = true, r.emitChange(), tn.stop(), tn.start(eF, () => {
        tt = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && en.default.track(eE.rMx.VIDEOHOOK_INITIALIZED, eA({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, L.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      eR.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tU(e)
      }), tE = true, en.default.track(eE.rMx.VOICE_PROCESSING, {
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
      eR.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tU(e)
      }), en.default.track(eE.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eI.Yn.DEFAULT,
        mode: eE.pM4.VOICE_ACTIVITY,
        options: eN(eA({}, tD(eI.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      en.default.track(eE.rMx.SDP_ERROR, {
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
    }), e.setBitRate(ed.Z.bitrate), e.applyVideoQualityMode(eg.Z.mode)
  }), eW.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), eW.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), eW.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), eW.on(Chunk46973.aB.AudioPermission, e => {
    tO = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), eW.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), eW.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
    eR.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), eW.on(Chunk46973.aB.VideoInputInitialized, e => {
    en.default.track(eE.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ei.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: ep.Z.getMediaSessionId(),
      rtc_connection_id: ep.Z.getRTCConnectionId()
    })
  }), eW.on(Chunk46973.aB.AudioInputInitialized, e => {
    en.default.track(eE.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ei.Z.Millis.SECOND),
      rtc_connection_id: ep.Z.getRTCConnectionId()
    })
  }), eW.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), eW.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), eW.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
  }), eW.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), eW.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), eW.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), eW.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    en.default.track(eE.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), eW.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eN(eA({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eN(eA({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), eW.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eV++,
          context: n.context
        }
      })
    })
  }), eW.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rA(e);
    null !== t && en.default.track(eE.rMx.VOICE_QUEUE_METRICS, t)
  }), eW.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nL(), tX.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tC = e.gpu_brand)
  }), eW.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    eW.eachConnection(tF)
  })
}

function tY() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function tW() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function tK() {
  return (0, Chunk358085.isMac)() && eW.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function tz() {
  return (0, Chunk358085.isWindows)() && eW.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eW.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function tq() {
  return eW.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let tX = new class {
  start() {
    this.started || (this.started = true, eW.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eW.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tD();
    !to && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eS(this, "stateChangeTimeout", true), eS(this, "noVoiceTimeout", 5e3), eS(this, "voiceTimeout", 1500), eS(this, "started", false), eS(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (ts = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function tQ() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eP, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), eK = null != (e = Chunk433517.K.get(eP)) ? module : {}, p().each(eK, e => {
    if (p().defaultsDeep(e, eH()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ec.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ew && (e.vadUseKrispSettingVersion = ew, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eB)
    }
    eW.supports(eI.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < ej && (e.sidechainCompressionSettingVersion = ej, e.sidechainCompression = true), (0, ea.isWeb)() ? e.ncUseKrispjsSettingVersion !== ex && (e.ncUseKrispjsSettingVersion = ex, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eD && (e.ncUseKrispSettingVersion = eD, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== eL && (e.hardwareH264 = true, e.hardwareEnabledVersion = eL), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), t0()
}

function tJ(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tw(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eP, eK), r
}

function t$() {
  Chunk433517.K.remove(eP), location.reload()
}

function t0() {
  let e = tD();
  eW.setAudioInputDevice(module.inputDeviceId), eW.setAudioOutputDevice(module.outputDeviceId), tk(), eW.setInputVolume(module.inputVolume), eW.setOutputVolume(module.outputVolume), eW.setH264Enabled(tV() || module.openH264), eW.setAv1Enabled(tV()), eW.setH265Enabled(tV()), eW.setAecDump(module.aecDumpEnabled), eW.setSidechainCompression(module.sidechainCompression), eW.setSidechainCompressionStrength(module.sidechainCompressionStrength), eW.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t1() {
  eq || eW.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function t2(e) {
  return {
    id: eI.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function t3(e, t) {
  if (0 === e.length) {
    let e = t2(t);
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

function t4(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eI.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function t8(e) {
  let t = e$;
  if (e$ = t3(e, eT.intl.string(eT.t["/QIjDA"])), !p().isEqual(e$, t)) {
    let e = tD(),
      t = t4(e$, e.inputDeviceId);
    eW.setAudioInputDevice(t)
  }
}

function t5(e) {
  let t = e0;
  if (e0 = t3(e, eT.intl.string(eT.t.xlUg0t)), !p().isEqual(e0, t)) {
    let e = tD(),
      t = t4(e0, e.outputDeviceId);
    eW.setAudioOutputDevice(t)
  }
}

function t6(e) {
  ti = e.length > 0;
  let t = e1;
  if (e1 = t3(e, eT.intl.string(eT.t.WKWARU)), e5 && !p().isEqual(e1, t)) {
    var n;
    let e = true !== e1[e6],
      r = e6 === eI.w5 && (null == (n = t[eI.w5]) ? true : n.disabled);
    tk(e || r)
  }
}

function t7() {
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
      } = tD(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], eW.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], eW.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    tJ({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function t9(e) {
  if (null == r) return eR.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : er.Z.getAudioPid(e),
      n = "";
    return null != t && (n = er.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function ne(e, t) {
  (0, ea.isWindows)() && T.YT(e, {
    soundshare_session: t
  }).then(t => {
    null == t || x.ZP.shouldContinueWithoutElevatedProcessForPID(e) || v.Z.wait(() => {
      v.Z.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function nt(e) {
  i = e.sessionId, e2 = false, e8 = false;
  let t = tD();
  if (tz() && (tq() ? rt(eI.iA.AUTOMATIC) : t.automaticAudioSubsystem && rn()), eW.supports(eI.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, ea.isDesktop)() ? e = (0, k.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, ea.isIOS)() || (0, ea.isAndroid)()) && (e = (0, U.W)({
      location: "handleConnectionOpen"
    }).enabled), eW.setOffloadAdmControls(e)
  }(0, ee.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, ea.isDesktop)() && (et.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eI.Yn.DEFAULT,
    playSoundEffect: true
  }), tJ({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), t7()
}

function nn(e) {
  let {
    mediaEngineState: t
  } = e;
  eK = t.settingsByContext, e$ = t.inputDevices, e0 = t.outputDevices, tA = t.appSupported, tu = t.krispModuleLoaded, s = t.krispVersion, eQ = t.goLiveContext
}

function nr() {
  i = null
}

function ni() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.N.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function na(e) {
  switch (e.state) {
    case eE.hes.CONNECTING:
      t1();
      break;
    case eE.hes.RTC_CONNECTING:
      to = false, ts = false;
      break;
    case eE.hes.RTC_CONNECTED:
      tk();
      break;
    case eE.hes.DISCONNECTED:
      np(), nh()
  }
  tX.update()
}

function no(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e2 = t.mute || t.suppress, e8 = t.deaf, eW.eachConnection(tj);
      let e = null != t.guildId && null != t.channelId && null != tg && tg !== t.channelId,
        n = !tl && null == t.channelId;
      return tk(!e && !n && e5), tg = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eu.default.getId() || null != ep.Z.getChannelId() || tk(false, null), e
  }, false)
}

function ns(e) {
  let {
    mute: t
  } = e;
  e3 = t, eW.eachConnection(tj)
}

function nl(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tD(t);
  if (t === eI.Yn.DEFAULT && (X.Z.requestPermission(ey.Eu.AUDIO), e4)) returnfalse;
  (r = !i && !r) || (i = false), n || (e9 = true), tJ({
    mute: r,
    deaf: i
  }, t), eW.eachConnection(tj)
}

function nc(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  tJ({
    mute: n
  }, t), r || (e9 = true), eW.eachConnection(tj)
}

function nu(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eO.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  t7(true)
}

function nd(e) {
  let {
    context: t
  } = e;
  tJ({
    deaf: !tD(t).deaf
  }, t), eW.eachConnection(tj)
}

function nf(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eu.default.getId()) return;
  let {
    localMutes: r
  } = tD(t);
  r[n] ? delete r[n] : r[n] = true, tJ({
    localMutes: r
  }, t), eW.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function n_(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === eE.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tD(l),
    m = null != (t = h[c]) && t,
    g = tI.has(c),
    E = u === eE.ZUi.AUTO_ENABLED || u === eE.ZUi.MANUAL_ENABLED;
  eR.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eI.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  eR.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tD(l);
  if (I[c] === eE.ZUi.AUTO_PROBING && u === eE.ZUi.AUTO_ENABLED && (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E), I[c] = u, tJ({
      videoToggleStateMap: I
    }, l, d), u === eE.ZUi.AUTO_PROBING ? null == (n = ep.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = ep.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tT || (eR.info("isAutoDisableAllowed=".concat(tT, " - disabling VideoHealthManager")), null == (a = ep.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tT) return;
    (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E), p ? tI.add(c) : tI.delete(c)
  } else v && (g && !p ? (eR.info("disallowing auto-disable for this session because of manual override by user"), tT = false, null == (s = ep.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, q.Z)(c, eI.fC.MANUAL_REENABLE, E)) : (0, q.Z)(c, p ? eI.fC.MANUAL_DISABLE : eI.fC.MANUAL_ENABLE, E));
  y && !p && tI.delete(c), p ? h[c] = true : delete h[c], tJ({
    disabledLocalVideos: h
  }, l, d), eW.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function np() {
  if (0 === tI.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tD(module);
  tI.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eW.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tI.clear(), tJ({
    disabledLocalVideos: exports
  }, module, false)
}

function nh() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tD(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  tJ({
    videoToggleStateMap: exports
  }, module, false)
}

function nm(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eu.default.getId()) return;
  let i = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
    {
      localVolumes: a
    } = tD(t);
  r === i ? delete a[n] : a[n] = r, tJ({
    localVolumes: a
  }, t), eW.eachConnection(e => e.setLocalVolume(n, r), t)
}

function ng(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tD(t);
  a[n] = {
    left: r,
    right: i
  }, tJ({
    localPans: a
  }, t), eW.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nE(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  tJ({
    mode: n,
    modeOptions: r
  }, t), eW.eachConnection(tx), tX.update()
}

function nb(e) {
  let {
    volume: t
  } = e;
  tJ({
    inputVolume: tL(t)
  }), eW.setInputVolume(t)
}

function ny(e) {
  let {
    volume: t
  } = e;
  tJ({
    outputVolume: t
  }), eW.setOutputVolume(t)
}

function nO(e) {
  let {
    id: t
  } = e;
  t = t4(e$, t), eJ = performance.now(), tJ({
    inputDeviceId: t
  }), eW.setAudioInputDevice(t)
}

function nv(e) {
  let {
    id: t
  } = e;
  tJ({
    outputDeviceId: t = t4(e0, t)
  }), eW.setAudioOutputDevice(t)
}

function nI(e) {
  let {
    id: t
  } = e;
  tJ({
    videoDeviceId: t = t4(e1, t)
  }), tk()
}

function nT(e) {
  let {
    inputProfile: t
  } = e;
  tJ({
    activeInputProfile: t
  });
  let n = tD();
  eW.eachConnection(e => {
    tx(e), tB(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tZ(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), eW.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), tX.update(), nj()
}

function nS(e) {
  return eX !== e.required && (eX = e.required, e.required || eW.interact(), true)
}

function nA(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  t8(t), t5(n), t6(r)
}

function nC(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  tJ({
    inputVolume: tL(t),
    outputVolume: n
  })
}

function nN(e) {
  var t;
  let n = tD(),
    r = eW.getAudioSubsystem(),
    i = eW.getAudioLayer(),
    a = t4(e$, n.inputDeviceId),
    o = null == (t = e$[a]) ? true : t.name;
  en.default.track(eE.rMx.VOICE_PROCESSING, {
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

function nR(e) {
  let t = tJ({
    echoCancellation: e.enabled
  });
  eW.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nj(), nN(e.location)
}

function nP(e) {
  nD(e.enabled)
}

function nw(e) {
  let t = tJ({
    sidechainCompressionStrength: e.strength
  });
  eW.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nD(e) {
  let t = tJ({
    sidechainCompression: e
  });
  eW.setSidechainCompression(t.sidechainCompression)
}

function nx(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tS.add(n) : tS.delete(n), nL(), nj()
}

function nL() {
  let e = !tS.has("voice_filter_preview") && !tS.has("mic_test");
  eW.setMaybePreprocessMute(module)
}

function nj() {
  let e = tD(),
    t = tS.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tG(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== t_,
    c = tS.has("voice_filter") && 1 === tS.size;
  eW.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}

function nM(e) {
  let t = tJ({
    noiseSuppression: e.enabled
  });
  eW.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nj(), nN(e.location)
}

function nk(e) {
  let t = tJ({
    automaticGainControl: e.enabled
  });
  eW.eachConnection(e => tB(e, t.automaticGainControl)), nj(), nN(e.location)
}

function nU(e) {
  let t = tJ({
    noiseCancellation: e.enabled
  });
  eW.eachConnection(e => tZ(e, t.noiseCancellation)), nj(), nN(e.location)
}

function nG(e) {
  Q.Z.setKrispModelOverride(e.model), c = e.model, nj()
}

function nB(e) {
  var t;
  (0, ea.isWeb)() || (tf = e.enabled, null == (t = eW.setNoiseCancellationEnableStats) || t.call(eW, e.enabled))
}

function nZ(e) {
  let t = tJ({
    experimentalEncoders: e.enabled
  });
  eW.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function nF(e) {
  let {
    enabled: t
  } = e, n = tJ({
    hardwareEncoding: t
  }), r = tV();
  eW.eachConnection(e => e.setHardwareH264(r)), eW.setH264Enabled(r || n.openH264), eW.setAv1Enabled(r), eW.setH265Enabled(r)
}

function nV(e) {
  tJ({
    silenceWarning: e.enabled
  }), tX.update()
}

function nH(e) {
  eW.setDebugLogging(e.enabled)
}

function nY(e) {
  let {
    level: t
  } = e;
  l = t, Q.Z.setKrispSuppressionLevel(t)
}

function nW(e) {
  tJ({
    videoHook: e.enabled
  })
}

function nK(e) {
  tJ({
    experimentalSoundshare2: e.enabled
  })
}

function nz(e) {
  let {
    enabled: t
  } = e;
  tJ({
    useSystemScreensharePicker: t
  })
}

function nq(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = tJ({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  eW.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function nX(e) {
  let {
    enabled: t
  } = e;
  tJ({
    qos: t
  }), eW.eachConnection(e => e.setQoS(t))
}

function nQ() {
  t$()
}

function nJ(e) {
  let {
    inputDetected: t
  } = e;
  ta = t, !to && ta && (to = true, tX.update())
}

function n$(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === e4) returnfalse;
  e4 = n, eW.eachConnection(tj)
}

function n0(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === ey.PQ.ACCEPTED;
  switch (n) {
    case ey.Eu.AUDIO:
      tO = true, eW.eachConnection(tj);
      break;
    case ey.Eu.CAMERA:
      !r && e5 && tk(false);
      break;
    default:
      returnfalse
  }
}

function n1() {
  return tu || false
}
async function n2() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tu = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      td = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eR.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), tJ({
      noiseCancellation: false
    })
  } finally {
    tc = false
  }
}

function n3() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function n4() {
  !n3() || __OVERLAY__ || tc || tu ? (0, Chunk358085.isWeb)() && eW.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tu = true, r.emitChange()) : (0, Chunk358085.isWeb)() && tJ({
    noiseCancellation: false
  }) : (tc = true, n2())
}

function n8(e) {
  let {
    enabled: t
  } = e;
  en.default.track(eE.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != t_ ? t_ : null,
    enabled: t
  }), tJ({
    voiceFilterPlaybackEnabled: t
  })
}

function n5(e) {
  let {
    newVoiceFilterId: t
  } = e;
  tJ({
    mostRecentlyRequestedVoiceFilter: t
  }), eW.eachConnection(e => e.setVoiceFilterId(t))
}

function n6() {
  tJ({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function n7(e) {
  let {
    voiceFilterId: t
  } = e;
  th = t_, tm = tp, t_ = t, tp = null === t ? null : Date.now()
}

function n9(e) {
  let t = e.bypassEnabled;
  tJ({
    bypassSystemInputProcessing: t
  }), eW.setAudioInputBypassSystemProcessing(t), nN(e.location)
}

function re(e) {
  rt(e.subsystem)
}

function rt(e) {
  e === eI.iA.AUTOMATIC ? (tJ({
    automaticAudioSubsystem: true
  }), rn()) : (tJ({
    automaticAudioSubsystem: false
  }), eW.setAudioSubsystem(e))
}

function rn() {
  eW.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rr(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tk(i, null), null != t || null == n) {
    tl = false;
    return
  }
  if (tl) return;
  tl = true;
  let a = tD();
  (a.mute || a.deaf) && (tJ({
    deaf: false,
    mute: false
  }), eW.eachConnection(tj))
}

function ri(e) {
  let {
    application: t
  } = e;
  ez.add(t.id)
}

function ra(e) {
  let {
    application: t
  } = e;
  ez.delete(t.id)
}

function ro(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      eq = false, eW.eachConnection(tj);
      break;
    case "video":
      tk(false)
  }
}

function rs(e) {
  eq = e.enabled, e.unmute && tJ({
    mute: false,
    deaf: false
  }), eW.eachConnection(tj)
}

function rl(e) {
  let {
    enabled: t
  } = e;
  X.Z.requestPermission(ey.Eu.CAMERA), tk(t)
}

function rc(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = er.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = t9(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (eW.setClipsSource(null), (0, ea.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && ne(l, c), o = d;
  let f = tP(),
    _ = tD().videoHook;
  eW.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: tY(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: tK(),
      videoHookStaleFrameTimeoutMs: eU,
      graphicsCaptureStaleFrameTimeoutMs: eG,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function ru(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, eW.setClipsSource(null))
}

function rd(e) {
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
      s = null != (t = a.context) ? t : eI.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : er.Z.getPidFromDesktopSource(i);
    ea.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = t9(c), null != e && ne(e, r)), tM(s), tk(s === eI.Yn.STREAM && e5, {
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
    let e = null != (r = a.context) ? r : eI.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eI.Yn.STREAM && e5,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tk(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tk(e5, null)
}

function rf(e) {
  let {
    section: t
  } = e;
  return t === eE.oAB.VOICE && t1(), false
}

function r_() {
  return eW.eachConnection(tF), false
}

function rp(e) {
  let {
    enabled: t
  } = e, n = tJ({
    openH264: t
  });
  eW.setH264Enabled(tV() || n.openH264), eW.eachConnection(e => {
    var t;
    return e.setSoftwareH264(null == (t = n.openH264) || t)
  })
}

function rh(e) {
  let {
    enabled: t
  } = e, n = tJ({
    aecDumpEnabled: t
  });
  eW.setAecDump(n.aecDumpEnabled)
}

function rm(e) {
  let {
    state: t
  } = e, n = D.Z.isEnabled();
  if (t === eE.$7l.BACKGROUND && e5 && !n) tr = true, tk(false);
  else {
    if (t !== eE.$7l.ACTIVE || !tr) returnfalse;
    tr = false, tk(true)
  }
  returntrue
}

function rg(e) {
  eW.eachConnection(t => t.setBitRate(e.bitrate))
}

function rE() {
  if (!e5 && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tk(false, null)
}

function rb() {
  return !!tE && (tE = false, true)
}

function ry(e) {
  eW.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rO(e) {
  let {
    settings: t
  } = e;
  eW.applyMediaFilterSettings(t).finally(() => {
    tb = false, r.emitChange()
  })
}

function rv() {
  tb = true
}

function rI() {
  tb = false
}

function rT(e) {
  tN = e.enabled
}
class rS extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tH(), tQ(), n4(), nh(), tA = {
      [Chunk65154.AN.VIDEO]: eW.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: eW.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: eW.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk463395.Z, Chunk592125.Z, Chunk19780.Z, Chunk594190.ZP, Chunk751571.Z.storage, Chunk581883.Z, Chunk353926.Z, Chunk435064.Z)
  }
  supports(e) {
    return eW.supports(e)
  }
  supportsInApp(e) {
    return tA[e] || eW.supports(e)
  }
  isSupported() {
    return eW.supported()
  }
  isExperimentalEncodersSupported() {
    return eW.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eW.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return n1()
  }
  isNoiseCancellationError() {
    return tE
  }
  isAutomaticGainControlSupported() {
    return eW.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !tq() && (eW.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || eW.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return eW.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eW.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return n1()
  }
  isAecDumpSupported() {
    return eW.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eW.supports(Chunk65154.AN.VIDEO) && eW.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    let t = (null == (e = Chunk592125.Z.getChannel(tg)) ? true : module.type) === Chunk981631.d4z.GUILD_STAGE_VOICE,
      n = tV();
    return !exports && require && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tD().aecDumpEnabled
  }
  getMediaEngine() {
    return eW
  }
  getVideoComponent() {
    return eW.Video
  }
  getCameraComponent() {
    return eW.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return tf
  }
  isEnabled() {
    return eq
  }
  isMute() {
    return this.isSelfMute() || e2
  }
  isDeaf() {
    return this.isSelfDeaf() || e8
  }
  hasContext(e) {
    return null != eK[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && e3
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tD(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && e4
  }
  shouldSkipMuteUnmuteSound() {
    return e9
  }
  notifyMuteUnmuteSoundWasSkipped() {
    e9 = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tN
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tD(module).deaf
  }
  isVideoEnabled() {
    return e5 && ti
  }
  isVideoAvailable() {
    return Object.values(e1).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return eQ === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return eQ === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
    return e !== eu.default.getId() && (tD(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return eW.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
    return null != (t = tD(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
    return null != (t = tD(n).videoToggleStateMap[e]) ? t : eE.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
    return t === eI.Yn.DEFAULT && tI.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tI.size > 0
  }
  isMediaFilterSettingLoading() {
    return tb
  }
  isNativeAudioPermissionReady() {
    return tO
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return eQ
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return eJ
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
      n = tD(t).localPans[e];
    return null != n ? n : ek
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
      n = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
      r = tD(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tD().inputVolume
  }
  getOutputVolume() {
    return tD().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tD(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tD(module).modeOptions
  }
  getActiveVoiceFilter() {
    return t_
  }
  getActiveVoiceFilterAppliedAt() {
    return tp
  }
  getPreviousVoiceFilter() {
    return th
  }
  getPreviousVoiceFilterAppliedAt() {
    return tm
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tD().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tD().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(eK, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eE.pM4.PUSH_TO_TALK && ez.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return t4(e$, tD().inputDeviceId)
  }
  getOutputDeviceId() {
    return t4(e0, tD().outputDeviceId)
  }
  getVideoDeviceId() {
    return t4(e1, tD().videoDeviceId)
  }
  getInputDevices() {
    return e$
  }
  getOutputDevices() {
    return e0
  }
  getVideoDevices() {
    return e1
  }
  getEchoCancellation() {
    let e = tD();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return eW.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tD().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tD().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tD().h265Enabled
  }
  getLoopback() {
    return tS.size > 0
  }
  getLoopbackReasons() {
    return tS
  }
  getNoiseSuppression() {
    let e = tD();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tD();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tD().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tD().noiseCancellation
  }
  getExperimentalEncoders() {
    return tD().experimentalEncoders
  }
  getHardwareEncoding() {
    return tV()
  }
  getHardwareEncodingSetting() {
    var e;
    return null == (e = tD().hardwareEncoding) || module
  }
  getEnableSilenceWarning() {
    return tD().silenceWarning
  }
  getDebugLogging() {
    return eW.getDebugLogging()
  }
  getQoS() {
    return tD().qos
  }
  getAttenuation() {
    return tD().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tD().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tD().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return tz() && tD().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : eW.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return eW.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tD().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tD(module)
  }
  getState() {
    return {
      settingsByContext: eK,
      inputDevices: e$,
      outputDevices: e0,
      appSupported: tA,
      krispModuleLoaded: tu,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: eQ
    }
  }
  getInputDetected() {
    return ta
  }
  getNoInputDetectedNotice() {
    return ts
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eW.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eX
  }
  getVideoHook() {
    return tD().videoHook
  }
  supportsVideoHook() {
    return eW.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tD().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return eW.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && eW.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tD().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.jR);
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return eW.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getOpenH264() {
    return tD().openH264
  }
  getEverSpeakingWhileMuted() {
    return te
  }
  getSpeakingWhileMuted() {
    return tt
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return td
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tD().modeOptions.vadKrispActivationThreshold) ? module : eM
  }
  hasActiveCallKitCall() {
    return tR
  }
  setHasActiveCallKitCall(e) {
    tR = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? eW.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && tK() : (0, Chunk358085.isWindows)() ? eW.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && eW.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    }).loadWasmModule), eW.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!ty && (ty = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      eW.fetchAsyncResources(module).catch(e => {
        eR.warn("DAVE preload failed:", e), es.Z.captureException(e)
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
    let e = eW.getSupportedSecureFramesProtocolVersion(),
      t = Chunk529558.m.getCurrentConfig({
        location: "MediaEngineStore"
      });
    return 114 === module && (e = 1), exports.canSupportDaveProtocol && module >= exports.protocolVersionFloor ? module : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tC
  }
}

function rA(e) {
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
eS(rS, "displayName", "MediaEngineStore");
let rC = r = new rS(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rr,
  VOICE_STATE_UPDATES: no,
  CONNECTION_OPEN: nt,
  CONNECTION_CLOSED: nr,
  POST_CONNECTION_OPEN: ni,
  RTC_CONNECTION_STATE: na,
  AUDIO_SET_TEMPORARY_SELF_MUTE: ns,
  AUDIO_TOGGLE_SELF_MUTE: nl,
  AUDIO_SET_SELF_MUTE: nc,
  AUDIO_TOGGLE_SELF_DEAF: nd,
  AUDIO_TOGGLE_LOCAL_MUTE: nf,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: n_,
  AUDIO_SET_LOCAL_VOLUME: nm,
  AUDIO_SET_LOCAL_PAN: ng,
  AUDIO_SET_MODE: nE,
  AUDIO_SET_INPUT_VOLUME: nb,
  AUDIO_SET_OUTPUT_VOLUME: ny,
  AUDIO_SET_INPUT_DEVICE: nO,
  AUDIO_SET_OUTPUT_DEVICE: nv,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nT,
  AUDIO_SET_ECHO_CANCELLATION: nR,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nP,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nw,
  AUDIO_SET_LOOPBACK: nx,
  AUDIO_SET_NOISE_SUPPRESSION: nM,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nk,
  AUDIO_SET_NOISE_CANCELLATION: nU,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nG,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nV,
  AUDIO_SET_DEBUG_LOGGING: nH,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nY,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nB,
  MEDIA_ENGINE_SET_VIDEO_HOOK: nW,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nK,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nz,
  AUDIO_SET_ATTENUATION: nq,
  AUDIO_SET_QOS: nX,
  MEDIA_ENGINE_DEVICES: nA,
  AUDIO_VOLUME_CHANGE: nC,
  AUDIO_RESET: nQ,
  AUDIO_INPUT_DETECTED: nJ,
  AUDIO_SET_SUBSYSTEM: re,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n9,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rs,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rl,
  MEDIA_ENGINE_PERMISSION: ro,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rd,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nI,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nZ,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nS,
  USER_SETTINGS_MODAL_INIT: rf,
  USER_SETTINGS_MODAL_SET_SECTION: rf,
  CERTIFIED_DEVICES_SET: r_,
  RPC_APP_CONNECTED: ri,
  RPC_APP_DISCONNECTED: ra,
  OVERLAY_INITIALIZE: nn,
  MEDIA_ENGINE_SET_OPEN_H264: rp,
  MEDIA_ENGINE_SET_HARDWARE_ENCODING: nF,
  APP_STATE_UPDATE: rm,
  SET_CHANNEL_BITRATE: rg,
  SET_VAD_PERMISSION: n$,
  SET_NATIVE_PERMISSION: n0,
  SET_CHANNEL_VIDEO_QUALITY_MODE: ry,
  MEDIA_ENGINE_SET_AEC_DUMP: rh,
  CHANNEL_DELETE: rE,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rb,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rO,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rv,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rI,
  USER_SETTINGS_PROTO_UPDATE: nu,
  CLIPS_INIT: rc,
  CLIPS_SETTINGS_UPDATE: ru,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rT,
  VOICE_FILTER_REQUEST_SWITCH: n5,
  VOICE_FILTER_LOOPBACK_TOGGLE: n8,
  VOICE_FILTER_APPLIED: n7,
  VOICE_FILTER_DOWNLOAD_FAILED: n6,
  VOICE_FILTER_APPLY_FAILED: n6
})