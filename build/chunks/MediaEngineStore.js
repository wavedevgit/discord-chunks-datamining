/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rw
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
    [Chunk65154.w5]: t4("No Input Devices")
  },
  e0 = {
    [Chunk65154.w5]: t4("No Output Devices")
  },
  e1 = {
    [Chunk65154.w5]: t4("No Video Devices")
  },
  e2 = false,
  e3 = false,
  e4 = false,
  e8 = false,
  e6 = false,
  e5 = Chunk65154.Av,
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
  tR = false,
  tP = false,
  tw = false;

function tD() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tx() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = eK[module];
  return null == exports && (t = eH(), eK[module] = exports), exports
}

function tL() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tx(r),
    a = eY[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM];
  return eN(eA({}, i, a), {
    modeOptions: eA({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {})
  })
}

function tj(e) {
  var t;
  let n = tL(e.context);
  e.setInputMode(n.mode, {
    vadThreshold: n.modeOptions.threshold,
    vadAutoThreshold: n.modeOptions.autoThreshold,
    vadUseKrisp: n.modeOptions.vadUseKrisp && n4(),
    vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : .5,
    vadLeading: n.modeOptions.vadLeading,
    vadTrailing: n.modeOptions.vadTrailing,
    pttReleaseDelay: Math.round(n.modeOptions.delay)
  })
}

function tM(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Qx;
  return p().clamp(e, 0, t)
}

function tk(e) {
  let t = tL(e.context),
    n = !eq || t.mute || t.deaf;
  e.context === eI.Yn.DEFAULT ? n = n || e2 || e3 || e4 || !X.Z.didHavePermission(ey.Eu.AUDIO) : e.context === eI.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eI.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tU(e) {
  e !== eQ && (null != a && eW.setGoLiveSource(null, eQ), eQ = e)
}

function tG() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : e6,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), eW.setGoLiveSource(null, eQ)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && eW.setGoLiveSource(null, eQ), e6 || i) {
    let e = tL().videoDeviceId;
    e6 && module === Chunk65154.w5 && e7 === Chunk65154.w5 && e5 !== Chunk65154.Av ? e = e5 : e7 = module, e5 = (e6 = i) ? t6(e1, module) : Chunk65154.Av, eW.setVideoInputDevice(e5)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tD(),
        n = tL().videoHook,
        i = tK(),
        a = i ? tz() && Chunk787517.G.getCurrentConfig({
          location: "MediaEngineStore_updateVideo"
        }).enabled ? Chunk70722.zj : Chunk70722.ZM : 0;
      eW.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: tq(),
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

function tB(e) {
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

function tZ(e) {
  let t = (0, j.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eA({
    enabled: e
  }, t)
}

function tF(e, t) {
  e.setAutomaticGainControl(tZ(t))
}
async function tV(e, t) {
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

function tH(e) {
  let t = tL(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ef.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ef.Z.hasNoiseSuppression(n) || t.noiseSuppression), tF(e, ef.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tV(e, t.noiseCancellation), e.setVoiceFilterId(t_), (0, ea.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tY() {
  var e;
  return !!(0, Chunk947851.m)("MediaEngineStore") || null == (e = tL().hardwareEncoding) || module
}

function tW() {
  eW.on(Chunk46973.aB.Connection, e => {
    var t;
    tj(e), tk(e), tH(e);
    let n = tL();
    e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(tY()), e.setSoftwareH264(null == (t = n.openH264) || t);
    let i = ep.Z.getGuildId(),
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
      } = (0, Z.A)("MediaEngineStore");
      e.setExperimentFlag(eI.V8.BROWSER_HEVC, t)
    }
    if (eW.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
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
    for (let t of (n = tL(e.context), e.setPostponeDecodeLevel(eZ), Object.keys(n.localMutes))) t !== eu.default.getId() && e.setLocalMute(t, n.localMutes[t]);
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
        underlyingError: tB(e)
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
        underlyingError: tB(e)
      }), en.default.track(eE.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eI.Yn.DEFAULT,
        mode: eE.pM4.VOICE_ACTIVITY,
        options: eN(eA({}, tL(eI.Yn.DEFAULT).modeOptions), {
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
    let t = rP(e);
    null !== t && en.default.track(eE.rMx.VOICE_QUEUE_METRICS, t)
  }), eW.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nM(), nU(), tJ.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tC = e.gpu_brand)
  }), eW.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    eW.eachConnection(tH)
  })
}

function tK() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function tz() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function tq() {
  return (0, Chunk358085.isMac)() && eW.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function tX() {
  return (0, Chunk358085.isWindows)() && eW.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eW.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function tQ() {
  return eW.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let tJ = new class {
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
    let e = tL();
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

function t$() {
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
  }), t2()
}

function t0(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tx(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eP, eK), r
}

function t1() {
  Chunk433517.K.remove(eP), location.reload()
}

function t2() {
  let e = tL();
  eW.setAudioInputDevice(module.inputDeviceId), eW.setAudioOutputDevice(module.outputDeviceId), tG(), eW.setInputVolume(module.inputVolume), eW.setOutputVolume(module.outputVolume), eW.setH264Enabled(tY() || module.openH264), eW.setAv1Enabled(tY()), eW.setH265Enabled(tY()), eW.setAecDump(module.aecDumpEnabled), eW.setSidechainCompression(module.sidechainCompression), eW.setSidechainCompressionStrength(module.sidechainCompressionStrength), eW.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t3() {
  eq || eW.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function t4(e) {
  return {
    id: eI.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function t8(e, t) {
  if (0 === e.length) {
    let e = t4(t);
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

function t6(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eI.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function t5(e) {
  let t = e$;
  if (e$ = t8(e, eT.intl.string(eT.t["/QIjDA"])), !p().isEqual(e$, t)) {
    let e = tL(),
      t = t6(e$, e.inputDeviceId);
    eW.setAudioInputDevice(t)
  }
}

function t7(e) {
  let t = e0;
  if (e0 = t8(e, eT.intl.string(eT.t.xlUg0t)), !p().isEqual(e0, t)) {
    let e = tL(),
      t = t6(e0, e.outputDeviceId);
    eW.setAudioOutputDevice(t)
  }
}

function t9(e) {
  ti = e.length > 0;
  let t = e1;
  if (e1 = t8(e, eT.intl.string(eT.t.WKWARU)), e6 && !p().isEqual(e1, t)) {
    var n;
    let e = true !== e1[e5],
      r = e5 === eI.w5 && (null == (n = t[eI.w5]) ? true : n.disabled);
    tG(e || r)
  }
}

function ne() {
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
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], eW.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], eW.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t0({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nt(e) {
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

function nn(e, t) {
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

function nr(e) {
  i = e.sessionId, e2 = false, e8 = false;
  let t = tL();
  if (tX() && (tQ() ? ri(eI.iA.AUTOMATIC) : t.automaticAudioSubsystem && ra()), eW.supports(eI.AN.OFFLOAD_ADM_CONTROLS)) {
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
  }), t0({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), ne()
}

function ni(e) {
  let {
    mediaEngineState: t
  } = e;
  eK = t.settingsByContext, e$ = t.inputDevices, e0 = t.outputDevices, tA = t.appSupported, tu = t.krispModuleLoaded, s = t.krispVersion, eQ = t.goLiveContext
}

function na() {
  i = null
}

function no() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.N.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function ns(e) {
  switch (e.state) {
    case eE.hes.CONNECTING:
      t3();
      break;
    case eE.hes.RTC_CONNECTING:
      to = false, ts = false;
      break;
    case eE.hes.RTC_CONNECTED:
      tG();
      break;
    case eE.hes.DISCONNECTED:
      nm(), ng()
  }
  tJ.update()
}

function nl(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e2 = t.mute || t.suppress, e8 = t.deaf, eW.eachConnection(tk);
      let e = null != t.guildId && null != t.channelId && null != tg && tg !== t.channelId,
        n = !tl && null == t.channelId;
      return tG(!e && !n && e6), tg = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eu.default.getId() || null != ep.Z.getChannelId() || tG(false, null), e
  }, false)
}

function nc(e) {
  let {
    mute: t
  } = e;
  e3 = t, eW.eachConnection(tk)
}

function nu(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tL(t);
  if (t === eI.Yn.DEFAULT && (X.Z.requestPermission(ey.Eu.AUDIO), e4)) returnfalse;
  (r = !i && !r) || (i = false), n || (e9 = true), t0({
    mute: r,
    deaf: i
  }, t), eW.eachConnection(tk)
}

function nd(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t0({
    mute: n
  }, t), r || (e9 = true), eW.eachConnection(tk)
}

function nf(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eO.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  ne(true)
}

function n_(e) {
  let {
    context: t
  } = e;
  t0({
    deaf: !tL(t).deaf
  }, t), eW.eachConnection(tk)
}

function np(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eu.default.getId()) return;
  let {
    localMutes: r
  } = tL(t);
  r[n] ? delete r[n] : r[n] = true, t0({
    localMutes: r
  }, t), eW.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nh(e) {
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
    } = tL(l),
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
  } = tL(l);
  if (I[c] === eE.ZUi.AUTO_PROBING && u === eE.ZUi.AUTO_ENABLED && (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E), I[c] = u, t0({
      videoToggleStateMap: I
    }, l, d), u === eE.ZUi.AUTO_PROBING ? null == (n = ep.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = ep.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tT || (eR.info("isAutoDisableAllowed=".concat(tT, " - disabling VideoHealthManager")), null == (a = ep.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tT) return;
    (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E), p ? tI.add(c) : tI.delete(c)
  } else v && (g && !p ? (eR.info("disallowing auto-disable for this session because of manual override by user"), tT = false, null == (s = ep.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, q.Z)(c, eI.fC.MANUAL_REENABLE, E)) : (0, q.Z)(c, p ? eI.fC.MANUAL_DISABLE : eI.fC.MANUAL_ENABLE, E));
  y && !p && tI.delete(c), p ? h[c] = true : delete h[c], t0({
    disabledLocalVideos: h
  }, l, d), eW.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nm() {
  if (0 === tI.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tL(module);
  tI.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eW.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tI.clear(), t0({
    disabledLocalVideos: exports
  }, module, false)
}

function ng() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tL(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t0({
    videoToggleStateMap: exports
  }, module, false)
}

function nE(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eu.default.getId()) return;
  let i = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
    {
      localVolumes: a
    } = tL(t);
  r === i ? delete a[n] : a[n] = r, t0({
    localVolumes: a
  }, t), eW.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nb(e) {
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
  }, t0({
    localPans: a
  }, t), eW.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function ny(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t0({
    mode: n,
    modeOptions: r
  }, t), eW.eachConnection(tj), tJ.update()
}

function nO(e) {
  let {
    volume: t
  } = e;
  t0({
    inputVolume: tM(t)
  }), eW.setInputVolume(t)
}

function nv(e) {
  let {
    volume: t
  } = e;
  t0({
    outputVolume: t
  }), eW.setOutputVolume(t)
}

function nI(e) {
  let {
    id: t
  } = e;
  t = t6(e$, t), eJ = performance.now(), t0({
    inputDeviceId: t
  }), eW.setAudioInputDevice(t)
}

function nT(e) {
  let {
    id: t
  } = e;
  t0({
    outputDeviceId: t = t6(e0, t)
  }), eW.setAudioOutputDevice(t)
}

function nS(e) {
  let {
    id: t
  } = e;
  t0({
    videoDeviceId: t = t6(e1, t)
  }), tG()
}

function nA(e) {
  let {
    inputProfile: t
  } = e;
  t0({
    activeInputProfile: t
  });
  let n = tL();
  eW.eachConnection(e => {
    tj(e), tF(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tV(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), eW.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), tJ.update(), nk()
}

function nC(e) {
  return eX !== e.required && (eX = e.required, e.required || eW.interact(), true)
}

function nN(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  t5(t), t7(n), t9(r)
}

function nR(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t0({
    inputVolume: tM(t),
    outputVolume: n
  })
}

function nP(e) {
  var t;
  let n = tL(),
    r = eW.getAudioSubsystem(),
    i = eW.getAudioLayer(),
    a = t6(e$, n.inputDeviceId),
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

function nw(e) {
  let t = t0({
    echoCancellation: e.enabled
  });
  eW.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nk(), nP(e.location)
}

function nD(e) {
  nL(e.enabled)
}

function nx(e) {
  let t = t0({
    sidechainCompressionStrength: e.strength
  });
  eW.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nL(e) {
  let t = t0({
    sidechainCompression: e
  });
  eW.setSidechainCompression(t.sidechainCompression)
}

function nj(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tS.add(n) : tS.delete(n), nM(), nk()
}

function nM() {
  let e = !tS.has("voice_filter_preview") && !tS.has("mic_test");
  eW.setMaybePreprocessMute(module)
}

function nk() {
  let e = tL(),
    t = tS.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tZ(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
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
async function nU() {
  var e, t, n, r;
  if (!eW.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  if ((null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) == null || !(null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i)) return;
  let {
    enabled: a
  } = await (0, Chunk302630.m)("setGamescopeVaapiEnabled");
  tw = a, a && eW.supports(Chunk65154.AN.GAMESCOPE_CAPTURE) && (tP = true)
}

function nG(e) {
  let t = t0({
    noiseSuppression: e.enabled
  });
  eW.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nk(), nP(e.location)
}

function nB(e) {
  let t = t0({
    automaticGainControl: e.enabled
  });
  eW.eachConnection(e => tF(e, t.automaticGainControl)), nk(), nP(e.location)
}

function nZ(e) {
  let t = t0({
    noiseCancellation: e.enabled
  });
  eW.eachConnection(e => tV(e, t.noiseCancellation)), nk(), nP(e.location)
}

function nF(e) {
  Q.Z.setKrispModelOverride(e.model), c = e.model, nk()
}

function nV(e) {
  var t;
  (0, ea.isWeb)() || (tf = e.enabled, null == (t = eW.setNoiseCancellationEnableStats) || t.call(eW, e.enabled))
}

function nH(e) {
  let t = t0({
    experimentalEncoders: e.enabled
  });
  eW.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function nY(e) {
  let {
    enabled: t
  } = e, n = t0({
    hardwareEncoding: t
  }), r = tY();
  eW.eachConnection(e => e.setHardwareH264(r)), eW.setH264Enabled(r || n.openH264), eW.setAv1Enabled(r), eW.setH265Enabled(r)
}

function nW(e) {
  t0({
    silenceWarning: e.enabled
  }), tJ.update()
}

function nK(e) {
  eW.setDebugLogging(e.enabled)
}

function nz(e) {
  let {
    level: t
  } = e;
  l = t, Q.Z.setKrispSuppressionLevel(t)
}

function nq(e) {
  t0({
    videoHook: e.enabled
  })
}

function nX(e) {
  t0({
    experimentalSoundshare2: e.enabled
  })
}

function nQ(e) {
  let {
    enabled: t
  } = e;
  t0({
    useSystemScreensharePicker: t
  })
}

function nJ(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t0({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  eW.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n$(e) {
  let {
    enabled: t
  } = e;
  t0({
    qos: t
  }), eW.eachConnection(e => e.setQoS(t))
}

function n0() {
  t1()
}

function n1(e) {
  let {
    inputDetected: t
  } = e;
  ta = t, !to && ta && (to = true, tJ.update())
}

function n2(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === e4) returnfalse;
  e4 = n, eW.eachConnection(tk)
}

function n3(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === ey.PQ.ACCEPTED;
  switch (n) {
    case ey.Eu.AUDIO:
      tO = true, eW.eachConnection(tk);
      break;
    case ey.Eu.CAMERA:
      !r && e6 && tG(false);
      break;
    default:
      returnfalse
  }
}

function n4() {
  return tu || false
}
async function n8() {
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
    }), t0({
      noiseCancellation: false
    })
  } finally {
    tc = false
  }
}

function n6() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function n5() {
  !n6() || __OVERLAY__ || tc || tu ? (0, Chunk358085.isWeb)() && eW.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tu = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t0({
    noiseCancellation: false
  }) : (tc = true, n8())
}

function n7(e) {
  let {
    enabled: t
  } = e;
  en.default.track(eE.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != t_ ? t_ : null,
    enabled: t
  }), t0({
    voiceFilterPlaybackEnabled: t
  })
}

function n9(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t0({
    mostRecentlyRequestedVoiceFilter: t
  }), eW.eachConnection(e => e.setVoiceFilterId(t))
}

function re() {
  t0({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rt(e) {
  let {
    voiceFilterId: t
  } = e;
  th = t_, tm = tp, t_ = t, tp = null === t ? null : Date.now()
}

function rn(e) {
  let t = e.bypassEnabled;
  t0({
    bypassSystemInputProcessing: t
  }), eW.setAudioInputBypassSystemProcessing(t), nP(e.location)
}

function rr(e) {
  ri(e.subsystem)
}

function ri(e) {
  e === eI.iA.AUTOMATIC ? (t0({
    automaticAudioSubsystem: true
  }), ra()) : (t0({
    automaticAudioSubsystem: false
  }), eW.setAudioSubsystem(e))
}

function ra() {
  eW.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function ro(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tG(i, null), null != t || null == n) {
    tl = false;
    return
  }
  if (tl) return;
  tl = true;
  let a = tL();
  (a.mute || a.deaf) && (t0({
    deaf: false,
    mute: false
  }), eW.eachConnection(tk))
}

function rs(e) {
  let {
    application: t
  } = e;
  ez.add(t.id)
}

function rl(e) {
  let {
    application: t
  } = e;
  ez.delete(t.id)
}

function rc(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      eq = false, eW.eachConnection(tk);
      break;
    case "video":
      tG(false)
  }
}

function ru(e) {
  eq = e.enabled, e.unmute && t0({
    mute: false,
    deaf: false
  }), eW.eachConnection(tk)
}

function rd(e) {
  let {
    enabled: t
  } = e;
  X.Z.requestPermission(ey.Eu.CAMERA), tG(t)
}

function rf(e) {
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
  } = nt(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (eW.setClipsSource(null), (0, ea.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && nn(l, c), o = d;
  let f = tD(),
    _ = tL().videoHook;
  eW.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: tK(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: tq(),
      videoHookStaleFrameTimeoutMs: eU,
      graphicsCaptureStaleFrameTimeoutMs: eG,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function r_(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, eW.setClipsSource(null))
}

function rp(e) {
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
    } = nt(c), null != e && nn(e, r)), tU(s), tG(s === eI.Yn.STREAM && e6, {
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
      o = e === eI.Yn.STREAM && e6,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tG(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tG(e6, null)
}

function rh(e) {
  let {
    section: t
  } = e;
  return t === eE.oAB.VOICE && t3(), false
}

function rm() {
  return eW.eachConnection(tH), false
}

function rg(e) {
  let {
    enabled: t
  } = e, n = t0({
    openH264: t
  });
  eW.setH264Enabled(tY() || n.openH264), eW.eachConnection(e => {
    var t;
    return e.setSoftwareH264(null == (t = n.openH264) || t)
  })
}

function rE(e) {
  let {
    enabled: t
  } = e, n = t0({
    aecDumpEnabled: t
  });
  eW.setAecDump(n.aecDumpEnabled)
}

function rb(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  eK = Object.values(eI.Yn).reduce((e, n) => {
    let r = n,
      i = eH();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(eP, eK), t2()
}

function ry(e) {
  let {
    state: t
  } = e, n = D.Z.isEnabled();
  if (t === eE.$7l.BACKGROUND && e6 && !n) tr = true, tG(false);
  else {
    if (t !== eE.$7l.ACTIVE || !tr) returnfalse;
    tr = false, tG(true)
  }
  returntrue
}

function rO(e) {
  eW.eachConnection(t => t.setBitRate(e.bitrate))
}

function rv() {
  if (!e6 && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tG(false, null)
}

function rI() {
  return !!tE && (tE = false, true)
}

function rT(e) {
  eW.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rS(e) {
  let {
    settings: t
  } = e;
  eW.applyMediaFilterSettings(t).finally(() => {
    tb = false, r.emitChange()
  })
}

function rA() {
  tb = true
}

function rC() {
  tb = false
}

function rN(e) {
  tN = e.enabled
}
class rR extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tW(), t$(), n5(), ng(), tA = {
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
    return n4()
  }
  isNoiseCancellationError() {
    return tE
  }
  isAutomaticGainControlSupported() {
    return eW.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !tQ() && (eW.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || eW.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return eW.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eW.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return n4()
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
      n = tY();
    return !exports && require && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tL().aecDumpEnabled
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
    return !this.isEnabled() || tL(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && e4
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
    return !this.isSupported() || tL(module).deaf
  }
  isVideoEnabled() {
    return e6 && ti
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
    return e !== eu.default.getId() && (tL(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return eW.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
    return null != (t = tL(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
    return null != (t = tL(n).videoToggleStateMap[e]) ? t : eE.ZUi.NONE
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
      n = tL(t).localPans[e];
    return null != n ? n : ek
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
      n = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
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
    return tL().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tL().voiceFilterPlaybackEnabled
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
    return t6(e$, tL().inputDeviceId)
  }
  getOutputDeviceId() {
    return t6(e0, tL().outputDeviceId)
  }
  getVideoDeviceId() {
    return t6(e1, tL().videoDeviceId)
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
    let e = tL();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return eW.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tL().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tL().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tL().h265Enabled
  }
  getLoopback() {
    return tS.size > 0
  }
  getLoopbackReasons() {
    return tS
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
    return tY()
  }
  getHardwareEncodingSetting() {
    var e;
    return null == (e = tL().hardwareEncoding) || module
  }
  getEnableSilenceWarning() {
    return tL().silenceWarning
  }
  getDebugLogging() {
    return eW.getDebugLogging()
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
    return tX() && tL().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : eW.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return eW.getMLSSigningKey(e, t)
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
    return tL().videoHook
  }
  supportsVideoHook() {
    return eW.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tL().experimentalSoundshare2;
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
      t = tL().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return eW.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tw
  }
  getUseGamescopeCapture() {
    return tP
  }
  getOpenH264() {
    return tL().openH264
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
    return null != (e = tL().modeOptions.vadKrispActivationThreshold) ? module : eM
  }
  hasActiveCallKitCall() {
    return tR
  }
  setHasActiveCallKitCall(e) {
    tR = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? eW.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && tq() : (0, Chunk358085.isWindows)() ? eW.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && eW.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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

function rP(e) {
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
eS(rR, "displayName", "MediaEngineStore");
let rw = r = new rR(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: ro,
  VOICE_STATE_UPDATES: nl,
  CONNECTION_OPEN: nr,
  CONNECTION_CLOSED: na,
  POST_CONNECTION_OPEN: no,
  RTC_CONNECTION_STATE: ns,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nc,
  AUDIO_TOGGLE_SELF_MUTE: nu,
  AUDIO_SET_SELF_MUTE: nd,
  AUDIO_TOGGLE_SELF_DEAF: n_,
  AUDIO_TOGGLE_LOCAL_MUTE: np,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nh,
  AUDIO_SET_LOCAL_VOLUME: nE,
  AUDIO_SET_LOCAL_PAN: nb,
  AUDIO_SET_MODE: ny,
  AUDIO_SET_INPUT_VOLUME: nO,
  AUDIO_SET_OUTPUT_VOLUME: nv,
  AUDIO_SET_INPUT_DEVICE: nI,
  AUDIO_SET_OUTPUT_DEVICE: nT,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nA,
  AUDIO_SET_ECHO_CANCELLATION: nw,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nD,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nx,
  AUDIO_SET_LOOPBACK: nj,
  AUDIO_SET_NOISE_SUPPRESSION: nG,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nB,
  AUDIO_SET_NOISE_CANCELLATION: nZ,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nF,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nW,
  AUDIO_SET_DEBUG_LOGGING: nK,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nz,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nV,
  MEDIA_ENGINE_SET_VIDEO_HOOK: nq,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nX,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nQ,
  AUDIO_SET_ATTENUATION: nJ,
  AUDIO_SET_QOS: n$,
  MEDIA_ENGINE_DEVICES: nN,
  AUDIO_VOLUME_CHANGE: nR,
  AUDIO_RESET: n0,
  AUDIO_INPUT_DETECTED: n1,
  AUDIO_SET_SUBSYSTEM: rr,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rn,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: ru,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rd,
  MEDIA_ENGINE_PERMISSION: rc,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rp,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nS,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nH,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nC,
  USER_SETTINGS_MODAL_INIT: rh,
  USER_SETTINGS_MODAL_SET_SECTION: rh,
  CERTIFIED_DEVICES_SET: rm,
  RPC_APP_CONNECTED: rs,
  RPC_APP_DISCONNECTED: rl,
  OVERLAY_INITIALIZE: ni,
  MEDIA_ENGINE_SET_OPEN_H264: rg,
  MEDIA_ENGINE_SET_HARDWARE_ENCODING: nY,
  APP_STATE_UPDATE: ry,
  SET_CHANNEL_BITRATE: rO,
  SET_VAD_PERMISSION: n2,
  SET_NATIVE_PERMISSION: n3,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rT,
  MEDIA_ENGINE_SET_AEC_DUMP: rE,
  MEDIA_ENGINE_RESET_SETTINGS: rb,
  CHANNEL_DELETE: rv,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rI,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rS,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rA,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rC,
  USER_SETTINGS_PROTO_UPDATE: nf,
  CLIPS_INIT: rf,
  CLIPS_SETTINGS_UPDATE: r_,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rN,
  VOICE_FILTER_REQUEST_SWITCH: n9,
  VOICE_FILTER_LOOPBACK_TOGGLE: n7,
  VOICE_FILTER_APPLIED: rt,
  VOICE_FILTER_DOWNLOAD_FAILED: re,
  VOICE_FILTER_APPLY_FAILED: re
})