/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rS
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
  Chunk159142 = require("./159142.js"),
  Chunk166884 = require("./166884.js"),
  Chunk585360 = require("./585360.js"),
  Chunk947851 = require("./947851.js"),
  Chunk839758 = require("./839758.js"),
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

function eC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eC(e, t, n[t])
    })
  }
  return e
}

function eR(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eP(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eR(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ew = new Chunk710845.Z("MediaEngineStore"),
  eD = "MediaEngineStore",
  ex = 4,
  eL = 1,
  ej = 1,
  eM = 1,
  ek = 1,
  eU = .5,
  eG = {
    left: 1,
    right: 1
  },
  eB = 500,
  eZ = 5 * Chunk70956.Z.Millis.SECOND,
  eV = false,
  eF = 100,
  eH = 2 * Chunk70956.Z.Millis.SECOND,
  eY = 0;

function eW() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eV,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eU,
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
    videoHook: ez.supports(Chunk65154.AN.VIDEO_HOOK),
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
let eK = {
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
  ez = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
ew.enableNativeLogger(true);
let eq = {},
  eX = new Set([Chunk65154.Yn.DEFAULT]),
  eQ = ez.supports(Chunk65154.AN.AUTO_ENABLE),
  eJ = false,
  e$ = Chunk65154.Yn.STREAM,
  e0 = performance.now(),
  e1 = {
    [Chunk65154.w5]: t1("No Input Devices")
  },
  e2 = {
    [Chunk65154.w5]: t1("No Output Devices")
  },
  e3 = {
    [Chunk65154.w5]: t1("No Video Devices")
  },
  e4 = false,
  e8 = false,
  e6 = false,
  e5 = false,
  e7 = false,
  e9 = Chunk65154.Av,
  te = false,
  tt = false,
  tn = false,
  tr = new Chunk846519.V7,
  ti = false,
  ta = false,
  to = null,
  ts = false,
  tl = false,
  tc = false,
  tu = false,
  td = false,
  tf = [],
  t_ = false,
  tp = null,
  th = null,
  tm = null,
  tg = null,
  tE = null,
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
    t = eq[module];
  return null == exports && (t = eW(), eq[module] = exports), exports
}

function tD() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tw(r),
    a = eK[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM];
  return eP(eN({}, i, a), {
    modeOptions: eN({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {})
  })
}

function tx(e) {
  var t;
  let n = tD(e.context);
  e.setInputMode(n.mode, {
    vadThreshold: n.modeOptions.threshold,
    vadAutoThreshold: n.modeOptions.autoThreshold,
    vadUseKrisp: n.modeOptions.vadUseKrisp && n$(),
    vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : .5,
    vadLeading: n.modeOptions.vadLeading,
    vadTrailing: n.modeOptions.vadTrailing,
    pttReleaseDelay: Math.round(n.modeOptions.delay)
  })
}

function tL(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Qx;
  return p().clamp(e, 0, t)
}

function tj(e) {
  let t = tD(e.context),
    n = !eQ || t.mute || t.deaf;
  e.context === eS.Yn.DEFAULT ? n = n || e4 || e8 || e6 || !J.Z.didHavePermission(ev.Eu.AUDIO) : e.context === eS.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eS.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tM(e) {
  e !== e$ && (null != a && ez.setGoLiveSource(null, e$), e$ = e)
}

function tk() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : e7,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), ez.setGoLiveSource(null, e$)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && ez.setGoLiveSource(null, e$), e7 || i) {
    let e = tD().videoDeviceId;
    e7 && module === Chunk65154.w5 && e9 !== Chunk65154.Av && (e = e9), e9 = (e7 = i) ? t3(e3, module) : Chunk65154.Av, ez.setVideoInputDevice(e9)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tP(),
        n = tD().videoHook,
        i = tH(),
        a = i ? tY() && (0, Chunk787517.R)("MediaEngineStore_updateVideo").enabled ? Chunk70722.zj : Chunk70722.ZM : 0;
      ez.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: tW(),
          videoHookStaleFrameTimeoutMs: eB,
          graphicsCaptureStaleFrameTimeoutMs: eZ,
          hdrCaptureMode: exports
        },
        quality: module
      }, e$)
    }
    null != o.cameraSource && ez.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e$)
  }
}

function tU(e) {
  switch (e) {
    case eS.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case eS.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case eS.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tG(e) {
  let t = (0, j.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  });
  return eN({
    enabled: e
  }, t)
}

function tB(e, t) {
  e.setAutomaticGainControl(tG(t))
}

function tZ(e, t) {
  e.setNoiseCancellation(t);
  let n = (0, Y.n)({
    location: "getAutomaticGainControlConfig",
    disable: !t
  }).enabled;
  e.setNoiseCancellationDuringProcessing(n)
}

function tV(e) {
  let t = tD(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ep.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ep.Z.hasNoiseSuppression(n) || t.noiseSuppression), tB(e, ep.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tZ(e, t.noiseCancellation), e.setVoiceFilterId(tp), (0, es.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tF() {
  ez.on(Chunk46973.aB.Connection, e => {
    var t;
    tx(e), tj(e), tV(e);
    let n = tD();
    e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(r.getHardwareEncoding()), e.setSoftwareH264(null == (t = n.openH264) || t);
    let i = em.Z.getGuildId(),
      {
        muteBeforeProcessing: o,
        pttBeforeProcessing: s,
        skipEncode: l
      } = (null != i ? B.Z : G.Z).getCurrentConfig(eN({
        location: "setupMediaEngine"
      }, null != i && {
        guildId: i
      }), {
        autoTrackExposure: true
      });
    o && e.setExperimentFlag(eS.V8.MUTE_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eS.V8.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(eS.V8.SKIP_ENCODE, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(eS.V8.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(eS.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(eS.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eS.Yn.STREAM) {
      let {
        simulcastEnabled: t,
        lqStreamBitrate: n
      } = V.Z.getConfig();
      e.configureGoLiveSimulcast(t, n);
      let {
        enabled: r,
        adjustResolution: i
      } = (0, F.k)({
        location: "setupMediaEngine",
        autoTrackExposure: true
      });
      e.setGoLiveUsePixelCounts(r, i)
    }
    if ((0, es.isWindows)() ? (null == tC ? true : tC.startsWith("NVIDIA")) || (null == tC ? true : tC.startsWith("AMD")) ? e.setExperimentFlag(eS.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, true) : ((0, es.isMac)() || (0, es.isLinux)()) && e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, true), (0, es.isWindows)() && e.setExperimentFlag(eS.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, es.isWeb)()) {
      let {
        enabled: t
      } = (0, Z.A)("MediaEngineStore");
      e.setExperimentFlag(eS.V8.BROWSER_HEVC, t)
    }
    ez.setHasFullbandPerformance((0, R.Z)());
    let d = (0, U.D)("setupMediaEngine").enabled;
    if (e.setRemoteAudioHistory(1e3 * !!d), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(eS.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = z.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eS.ux)
    }
    for (let t of (n = tD(e.context), e.setPostponeDecodeLevel(eF), Object.keys(n.localMutes))) t !== ef.default.getId() && e.setLocalMute(t, n.localMutes[t]);
    for (let t of Object.keys(n.localVolumes)) t !== ef.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
    }), e.context === eS.Yn.DEFAULT && (tt = false, tn = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      tt = true, tn = true, r.emitChange(), tr.stop(), tr.start(eH, () => {
        tn = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && ei.default.track(ey.rMx.VIDEOHOOK_INITIALIZED, eN({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, L.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      ew.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tU(e)
      }), tb = true, ei.default.track(ey.rMx.VOICE_PROCESSING, {
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
      ew.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tU(e)
      }), ei.default.track(ey.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eS.Yn.DEFAULT,
        mode: ey.pM4.VOICE_ACTIVITY,
        options: eP(eN({}, tD(eS.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      ei.default.track(ey.rMx.SDP_ERROR, {
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
    }), e.setBitRate(e_.Z.bitrate), e.applyVideoQualityMode(eb.Z.mode)
  }), ez.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), ez.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), ez.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), ez.on(Chunk46973.aB.AudioPermission, e => {
    tO = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), ez.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), ez.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
    ew.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), ez.on(Chunk46973.aB.VideoInputInitialized, e => {
    ei.default.track(ey.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * eo.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: em.Z.getMediaSessionId(),
      rtc_connection_id: em.Z.getRTCConnectionId()
    })
  }), ez.on(Chunk46973.aB.AudioInputInitialized, e => {
    ei.default.track(ey.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * eo.Z.Millis.SECOND),
      rtc_connection_id: em.Z.getRTCConnectionId()
    })
  }), ez.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), ez.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), ez.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
  }), ez.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), ez.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), ez.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), ez.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    ei.default.track(ey.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), ez.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eP(eN({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eP(eN({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), ez.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eY++,
          context: n.context
        }
      })
    })
  }), ez.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rT(e);
    null !== t && ei.default.track(ey.rMx.VOICE_QUEUE_METRICS, t)
  }), ez.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), tq.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tC = e.gpu_brand)
  })
}

function tH() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function tY() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function tW() {
  return (0, Chunk358085.isMac)() && ez.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function tK() {
  return (0, Chunk358085.isWindows)() && ez.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && ez.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function tz() {
  return ez.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let tq = new class {
  start() {
    this.started || (this.started = true, ez.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), ez.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tD();
    !ts && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eC(this, "stateChangeTimeout", true), eC(this, "noVoiceTimeout", 5e3), eC(this, "voiceTimeout", 1500), eC(this, "started", false), eC(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tl = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function tX() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eD, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), eq = null != (e = Chunk433517.K.get(eD)) ? module : {}, p().each(eq, e => {
    if (p().defaultsDeep(e, eW()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ed.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ex && (e.vadUseKrispSettingVersion = ex, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eV)
    }(0, es.isWeb)() ? e.ncUseKrispjsSettingVersion !== ej && (e.ncUseKrispjsSettingVersion = ej, e.noiseSuppression = false, e.noiseCancellation = true): e.ncUseKrispSettingVersion !== eL && (e.ncUseKrispSettingVersion = eL, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== eM && (e.hardwareH264 = true, e.hardwareEnabledVersion = eM), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), t$()
}

function tQ(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tw(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eD, eq), r
}

function tJ() {
  Chunk433517.K.remove(eD), location.reload()
}

function t$() {
  let e = tD();
  ez.setAudioInputDevice(module.inputDeviceId), ez.setAudioOutputDevice(module.outputDeviceId), tk(), ez.setInputVolume(module.inputVolume), ez.setOutputVolume(module.outputVolume), ez.setH264Enabled(r.getHardwareEncoding() || module.openH264), ez.setAv1Enabled(r.getHardwareEncoding()), ez.setH265Enabled(r.getHardwareEncoding()), ez.setAecDump(module.aecDumpEnabled), ez.setSidechainCompression(module.sidechainCompression), ez.setSidechainCompressionStrength(module.sidechainCompressionStrength), ez.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t0() {
  eQ || ez.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function t1(e) {
  return {
    id: eS.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function t2(e, t) {
  if (0 === e.length) {
    let e = t1(t);
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

function t3(e, t) {
  var n;
  let r = null != (n = e[t]) ? n : p()(e).values().first();
  return null != r ? r.id : t
}

function t4(e) {
  let t = e1;
  if (e1 = t2(e, eA.intl.string(eA.t["/QIjDA"])), !p().isEqual(e1, t)) {
    let e = tD(),
      t = t3(e1, e.inputDeviceId);
    ez.setAudioInputDevice(t)
  }
}

function t8(e) {
  let t = e2;
  if (e2 = t2(e, eA.intl.string(eA.t.xlUg0t)), !p().isEqual(e2, t)) {
    let e = tD(),
      t = t3(e2, e.outputDeviceId);
    ez.setAudioOutputDevice(t)
  }
}

function t6(e) {
  ta = e.length > 0;
  let t = e3;
  if (e3 = t2(e, eA.intl.string(eA.t.WKWARU)), e7 && !p().isEqual(e3, t)) {
    var n;
    let e = true !== e3[e9],
      r = e9 === eS.w5 && (null == (n = t[eS.w5]) ? true : n.disabled);
    tk(e || r)
  }
}

function t5() {
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
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], ez.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], ez.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    tQ({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function t7(e) {
  if (null == r) return ew.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : ea.Z.getAudioPid(e),
      n = "";
    return null != t && (n = ea.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function t9(e, t) {
  (0, es.isWindows)() && T.YT(e, {
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

function ne(e) {
  i = e.sessionId, e4 = false, e5 = false, (0, es.isWeb)() || (K.Z.subscribe({
    location: "handleConnectionOpen"
  }, e => {
    let t = tD();
    !e.sidechainAvailable && t.sidechainCompression ? (tQ({
      sidechainCompressionSettingVersion: 0
    }), nP(false)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < ek && (tQ({
      sidechainCompressionSettingVersion: ek
    }), nP(e.sidechainEnabled))
  }), nD());
  let t = tD();
  if (tK() && (tz() ? n9(eS.iA.AUTOMATIC) : t.automaticAudioSubsystem && re()), ez.supports(eS.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, es.isDesktop)() ? e = (0, M.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, es.isIOS)() || (0, es.isAndroid)()) && (e = (0, k.W)({
      location: "handleConnectionOpen"
    }).enabled), ez.setOffloadAdmControls(e)
  }(0, en.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, es.isDesktop)() && (er.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eS.Yn.DEFAULT,
    playSoundEffect: true
  }), tQ({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), t5()
}

function nt(e) {
  let {
    mediaEngineState: t
  } = e;
  eq = t.settingsByContext, e1 = t.inputDevices, e2 = t.outputDevices, tA = t.appSupported, td = t.krispModuleLoaded, s = t.krispVersion, e$ = t.goLiveContext
}

function nn() {
  i = null
}

function nr(e) {
  switch (e.state) {
    case ey.hes.CONNECTING:
      t0();
      break;
    case ey.hes.RTC_CONNECTING:
      ts = false, tl = false;
      break;
    case ey.hes.RTC_CONNECTED:
      tk();
      break;
    case ey.hes.DISCONNECTED:
      nf(), n_()
  }
  tq.update()
}

function ni(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e4 = t.mute || t.suppress, e5 = t.deaf, ez.eachConnection(tj);
      let e = null != t.guildId && null != t.channelId && null != tE && tE !== t.channelId,
        n = !tc && null == t.channelId;
      return tk(!e && !n && e7), tE = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== ef.default.getId() || null != em.Z.getChannelId() || tk(false, null), e
  }, false)
}

function na(e) {
  let {
    mute: t
  } = e;
  e8 = t, ez.eachConnection(tj)
}

function no(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tD(t);
  if (t === eS.Yn.DEFAULT && (J.Z.requestPermission(ev.Eu.AUDIO), e6)) returnfalse;
  (r = !i && !r) || (i = false), n || (te = true), tQ({
    mute: r,
    deaf: i
  }, t), ez.eachConnection(tj)
}

function ns(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  tQ({
    mute: n
  }, t), r || (te = true), ez.eachConnection(tj)
}

function nl(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eI.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  t5(true)
}

function nc(e) {
  let {
    context: t
  } = e;
  tQ({
    deaf: !tD(t).deaf
  }, t), ez.eachConnection(tj)
}

function nu(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === ef.default.getId()) return;
  let {
    localMutes: r
  } = tD(t);
  r[n] ? delete r[n] : r[n] = true, tQ({
    localMutes: r
  }, t), ez.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nd(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === ey.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tD(l),
    m = null != (t = h[c]) && t,
    g = tI.has(c),
    E = u === ey.ZUi.AUTO_ENABLED || u === ey.ZUi.MANUAL_ENABLED;
  ew.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eS.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  ew.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tD(l);
  if (I[c] === ey.ZUi.AUTO_PROBING && u === ey.ZUi.AUTO_ENABLED && (0, Q.Z)(c, p ? eS.fC.AUTO_DISABLE : eS.fC.AUTO_ENABLE, E), I[c] = u, tQ({
      videoToggleStateMap: I
    }, l, d), u === ey.ZUi.AUTO_PROBING ? null == (n = em.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = em.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tT || (ew.info("isAutoDisableAllowed=".concat(tT, " - disabling VideoHealthManager")), null == (a = em.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tT) return;
    (0, Q.Z)(c, p ? eS.fC.AUTO_DISABLE : eS.fC.AUTO_ENABLE, E), p ? tI.add(c) : tI.delete(c)
  } else v && (g && !p ? (ew.info("disallowing auto-disable for this session because of manual override by user"), tT = false, null == (s = em.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, Q.Z)(c, eS.fC.MANUAL_REENABLE, E)) : (0, Q.Z)(c, p ? eS.fC.MANUAL_DISABLE : eS.fC.MANUAL_ENABLE, E));
  y && !p && tI.delete(c), p ? h[c] = true : delete h[c], tQ({
    disabledLocalVideos: h
  }, l, d), ez.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nf() {
  if (0 === tI.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tD(module);
  tI.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], ez.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tI.clear(), tQ({
    disabledLocalVideos: exports
  }, module, false)
}

function n_() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tD(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  tQ({
    videoToggleStateMap: exports
  }, module, false)
}

function np(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === ef.default.getId()) return;
  let i = t === eS.Yn.STREAM ? eS.Yh : eS.Qx,
    {
      localVolumes: a
    } = tD(t);
  r === i ? delete a[n] : a[n] = r, tQ({
    localVolumes: a
  }, t), ez.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nh(e) {
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
  }, tQ({
    localPans: a
  }, t), ez.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nm(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  tQ({
    mode: n,
    modeOptions: r
  }, t), ez.eachConnection(tx), tq.update()
}

function ng(e) {
  let {
    volume: t
  } = e;
  tQ({
    inputVolume: tL(t)
  }), ez.setInputVolume(t)
}

function nE(e) {
  let {
    volume: t
  } = e;
  tQ({
    outputVolume: t
  }), ez.setOutputVolume(t)
}

function nb(e) {
  let {
    id: t
  } = e;
  t = t3(e1, t), e0 = performance.now(), tQ({
    inputDeviceId: t
  }), ez.setAudioInputDevice(t)
}

function ny(e) {
  let {
    id: t
  } = e;
  tQ({
    outputDeviceId: t = t3(e2, t)
  }), ez.setAudioOutputDevice(t)
}

function nO(e) {
  let {
    id: t
  } = e;
  tQ({
    videoDeviceId: t = t3(e3, t)
  }), tk()
}

function nv(e) {
  let {
    inputProfile: t
  } = e, n = tQ({
    activeInputProfile: t
  });
  ez.eachConnection(e => {
    tx(e), tB(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tZ(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), ez.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), tq.update(), nx()
}

function nI(e) {
  return eJ !== e.required && (eJ = e.required, e.required || ez.interact(), true)
}

function nT(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  t4(t), t8(n), t6(r)
}

function nS(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  tQ({
    inputVolume: tL(t),
    outputVolume: n
  })
}

function nA(e) {
  var t;
  let n = tD(),
    r = ez.getAudioSubsystem(),
    i = ez.getAudioLayer(),
    a = t3(e1, n.inputDeviceId),
    o = null == (t = e1[a]) ? true : t.name;
  ei.default.track(ey.rMx.VOICE_PROCESSING, {
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

function nC(e) {
  let t = tQ({
    echoCancellation: e.enabled
  });
  ez.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nx(), nA(e.location)
}

function nN(e) {
  nP(e.enabled)
}

function nR(e) {
  let t = tQ({
    sidechainCompressionStrength: e.strength
  });
  ez.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nP(e) {
  let t = tQ({
    sidechainCompression: e
  });
  ez.setSidechainCompression(t.sidechainCompression)
}

function nw(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tS.add(n) : tS.delete(n), nD(), nx()
}

function nD() {
  let {
    voiceFiltersPreProcessMute: e
  } = Chunk580930.Z.getCurrentConfig({
    location: "setMaybePreprocessMute"
  }, {
    autoTrackExposure: true
  }), t = module && !tS.has("voice_filter_preview") && !tS.has("mic_test");
  ez.setMaybePreprocessMute(exports)
}

function nx() {
  let e = tD(),
    t = tS.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tG(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tp,
    c = tS.has("voice_filter") && 1 === tS.size;
  ez.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}

function nL(e) {
  let t = tQ({
    noiseSuppression: e.enabled
  });
  ez.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nx(), nA(e.location)
}

function nj(e) {
  let t = tQ({
    automaticGainControl: e.enabled
  });
  ez.eachConnection(e => tB(e, t.automaticGainControl)), nx(), nA(e.location)
}

function nM(e) {
  let t = tQ({
    noiseCancellation: e.enabled
  });
  ez.eachConnection(e => tZ(e, t.noiseCancellation)), nx(), nA(e.location)
}

function nk(e) {
  $.Z.setKrispModelOverride(e.model), c = e.model, nx()
}

function nU(e) {
  var t;
  (0, es.isWeb)() || (t_ = e.enabled, null == (t = ez.setNoiseCancellationEnableStats) || t.call(ez, e.enabled))
}

function nG(e) {
  let t = tQ({
    experimentalEncoders: e.enabled
  });
  ez.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function nB(e) {
  let {
    enabled: t
  } = e, n = tQ({
    hardwareEncoding: t
  }), i = r.getHardwareEncoding();
  ez.eachConnection(e => e.setHardwareH264(i)), ez.setH264Enabled(i || n.openH264), ez.setAv1Enabled(i), ez.setH265Enabled(i)
}

function nZ(e) {
  tQ({
    silenceWarning: e.enabled
  }), tq.update()
}

function nV(e) {
  ez.setDebugLogging(e.enabled)
}

function nF(e) {
  let {
    level: t
  } = e;
  l = t, $.Z.setKrispSuppressionLevel(t)
}

function nH(e) {
  tQ({
    videoHook: e.enabled
  })
}

function nY(e) {
  tQ({
    experimentalSoundshare2: e.enabled
  })
}

function nW(e) {
  let {
    enabled: t
  } = e;
  tQ({
    useSystemScreensharePicker: t
  })
}

function nK(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = tQ({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  ez.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function nz(e) {
  let {
    enabled: t
  } = e;
  tQ({
    qos: t
  }), ez.eachConnection(e => e.setQoS(t))
}

function nq() {
  tJ()
}

function nX(e) {
  let {
    inputDetected: t
  } = e;
  to = t, !ts && to && (ts = true, tq.update())
}

function nQ(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === e6) returnfalse;
  e6 = n, ez.eachConnection(tj)
}

function nJ(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === ev.PQ.ACCEPTED;
  switch (n) {
    case ev.Eu.AUDIO:
      tO = true, ez.eachConnection(tj);
      break;
    case ev.Eu.CAMERA:
      !r && e7 && tk(false);
      break;
    default:
      returnfalse
  }
}

function n$() {
  return td || false
}
async function n0() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    td = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tf = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    ew.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), tQ({
      noiseCancellation: false
    })
  } finally {
    tu = false
  }
}

function n1() {
  return (0, Chunk358085.isWindows)() && "arm64" !== Chunk998502.ZP.architecture || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function n2() {
  !n1() || __OVERLAY__ || tu || td ? (0, Chunk358085.isWeb)() && ez.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (td = true, r.emitChange()) : (0, Chunk358085.isWeb)() && tQ({
    noiseCancellation: false
  }) : (tu = true, n0())
}

function n3(e) {
  let {
    enabled: t
  } = e;
  ei.default.track(ey.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tp ? tp : null,
    enabled: t
  }), tQ({
    voiceFilterPlaybackEnabled: t
  })
}

function n4(e) {
  let {
    newVoiceFilterId: t
  } = e;
  tQ({
    mostRecentlyRequestedVoiceFilter: t
  }), ez.eachConnection(e => e.setVoiceFilterId(t))
}

function n8() {
  tQ({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function n6(e) {
  let {
    voiceFilterId: t
  } = e;
  tm = tp, tg = th, tp = t, th = null === t ? null : Date.now()
}

function n5(e) {
  let t = e.bypassEnabled;
  tQ({
    bypassSystemInputProcessing: t
  }), ez.setAudioInputBypassSystemProcessing(t), nA(e.location)
}

function n7(e) {
  n9(e.subsystem)
}

function n9(e) {
  e === eS.iA.AUTOMATIC ? (tQ({
    automaticAudioSubsystem: true
  }), re()) : (tQ({
    automaticAudioSubsystem: false
  }), ez.setAudioSubsystem(e))
}

function re() {
  ez.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rt(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tk(i, null), null != t || null == n) {
    tc = false;
    return
  }
  if (tc) return;
  tc = true;
  let a = tD();
  (a.mute || a.deaf) && (tQ({
    deaf: false,
    mute: false
  }), ez.eachConnection(tj))
}

function rn(e) {
  let {
    application: t
  } = e;
  eX.add(t.id)
}

function rr(e) {
  let {
    application: t
  } = e;
  eX.delete(t.id)
}

function ri(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      eQ = false, ez.eachConnection(tj);
      break;
    case "video":
      tk(false)
  }
}

function ra(e) {
  eQ = e.enabled, e.unmute && tQ({
    mute: false,
    deaf: false
  }), ez.eachConnection(tj)
}

function ro(e) {
  let {
    enabled: t
  } = e;
  J.Z.requestPermission(ev.Eu.CAMERA), tk(t)
}

function rs(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = ea.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = t7(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (ez.setClipsSource(null), (0, es.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && t9(l, c), o = d;
  let f = tP(),
    _ = tD().videoHook;
  ez.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: tH(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: tW(),
      videoHookStaleFrameTimeoutMs: eB,
      graphicsCaptureStaleFrameTimeoutMs: eZ,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function rl(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, ez.setClipsSource(null))
}

function rc(e) {
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
      s = null != (t = a.context) ? t : eS.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : ea.Z.getPidFromDesktopSource(i);
    es.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = t7(c), null != e && t9(e, r)), tM(s), tk(s === eS.Yn.STREAM && e7, {
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
    let e = null != (r = a.context) ? r : eS.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eS.Yn.STREAM && e7,
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
  } else tk(e7, null)
}

function ru(e) {
  let {
    section: t
  } = e;
  return t === ey.oAB.VOICE && t0(), false
}

function rd() {
  return ez.eachConnection(tV), false
}

function rf(e) {
  let {
    enabled: t
  } = e, n = tQ({
    openH264: t
  });
  ez.setH264Enabled(r.getHardwareEncoding() || n.openH264), ez.eachConnection(e => {
    var t;
    return e.setSoftwareH264(null == (t = n.openH264) || t)
  })
}

function r_(e) {
  let {
    enabled: t
  } = e, n = tQ({
    aecDumpEnabled: t
  });
  ez.setAecDump(n.aecDumpEnabled)
}

function rp(e) {
  let {
    state: t
  } = e, n = D.Z.isEnabled();
  if (t === ey.$7l.BACKGROUND && e7 && !n) ti = true, tk(false);
  else {
    if (t !== ey.$7l.ACTIVE || !ti) returnfalse;
    ti = false, tk(true)
  }
  returntrue
}

function rh(e) {
  ez.eachConnection(t => t.setBitRate(e.bitrate))
}

function rm() {
  if (!e7 && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tk(false, null)
}

function rg() {
  return !!tb && (tb = false, true)
}

function rE(e) {
  ez.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rb(e) {
  let {
    settings: t
  } = e;
  ez.applyMediaFilterSettings(t).finally(() => {
    ty = false, r.emitChange()
  })
}

function ry() {
  ty = true
}

function rO() {
  ty = false
}

function rv(e) {
  tN = e.enabled
}
class rI extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tF(), tX(), n2(), n_(), tA = {
      [Chunk65154.AN.VIDEO]: ez.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: ez.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: ez.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk463395.Z, Chunk592125.Z, Chunk19780.Z, Chunk594190.ZP, Chunk751571.Z.storage, Chunk581883.Z, Chunk353926.Z, Chunk435064.Z)
  }
  supports(e) {
    return ez.supports(e)
  }
  supportsInApp(e) {
    return tA[e] || ez.supports(e)
  }
  isSupported() {
    return ez.supported()
  }
  isExperimentalEncodersSupported() {
    return ez.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return ez.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return n$()
  }
  isNoiseCancellationError() {
    return tb
  }
  isAutomaticGainControlSupported() {
    return ez.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !tz() && (ez.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || ez.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return ez.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ez.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return n$()
  }
  isAecDumpSupported() {
    return ez.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return ez.supports(Chunk65154.AN.VIDEO) && ez.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    let t = (null == (e = Chunk592125.Z.getChannel(tE)) ? true : module.type) === Chunk981631.d4z.GUILD_STAGE_VOICE,
      n = r.getHardwareEncoding();
    return !exports && require && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tD().aecDumpEnabled
  }
  getMediaEngine() {
    return ez
  }
  getVideoComponent() {
    return ez.Video
  }
  getCameraComponent() {
    return ez.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return t_
  }
  isEnabled() {
    return eQ
  }
  isMute() {
    return this.isSelfMute() || e4
  }
  isDeaf() {
    return this.isSelfDeaf() || e5
  }
  hasContext(e) {
    return null != eq[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && e8
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tD(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && e6
  }
  shouldSkipMuteUnmuteSound() {
    return te
  }
  notifyMuteUnmuteSoundWasSkipped() {
    te = false
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
    return e7 && ta
  }
  isVideoAvailable() {
    return Object.values(e3).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e$ === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e$ === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
    return e !== ef.default.getId() && (tD(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return ez.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
    return null != (t = tD(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
    return null != (t = tD(n).videoToggleStateMap[e]) ? t : ey.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
    return t === eS.Yn.DEFAULT && tI.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tI.size > 0
  }
  isMediaFilterSettingLoading() {
    return ty
  }
  isNativeAudioPermissionReady() {
    return tO
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e$
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e0
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
      n = tD(t).localPans[e];
    return null != n ? n : eG
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
      n = t === eS.Yn.STREAM ? eS.Yh : eS.Qx,
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
    return tp
  }
  getActiveVoiceFilterAppliedAt() {
    return th
  }
  getPreviousVoiceFilter() {
    return tm
  }
  getPreviousVoiceFilterAppliedAt() {
    return tg
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tD().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tD().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(eq, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === ey.pM4.PUSH_TO_TALK && eX.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return t3(e1, tD().inputDeviceId)
  }
  getOutputDeviceId() {
    return t3(e2, tD().outputDeviceId)
  }
  getVideoDeviceId() {
    return t3(e3, tD().videoDeviceId)
  }
  getInputDevices() {
    return e1
  }
  getOutputDevices() {
    return e2
  }
  getVideoDevices() {
    return e3
  }
  getEchoCancellation() {
    let e = tD();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return tD().sidechainCompression
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
    var e;
    return !!(0, Chunk947851.m)("MediaEngineStore") || null == (e = tD().hardwareEncoding) || module
  }
  getHardwareEncodingSetting() {
    var e;
    return null == (e = tD().hardwareEncoding) || module
  }
  getEnableSilenceWarning() {
    return tD().silenceWarning
  }
  getDebugLogging() {
    return ez.getDebugLogging()
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
    return tK() && tD().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : ez.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return ez.getMLSSigningKey(e, t)
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
      settingsByContext: eq,
      inputDevices: e1,
      outputDevices: e2,
      appSupported: tA,
      krispModuleLoaded: td,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: e$
    }
  }
  getInputDetected() {
    return to
  }
  getNoInputDetectedNotice() {
    return tl
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    ez.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eJ
  }
  getVideoHook() {
    return tD().videoHook
  }
  supportsVideoHook() {
    return ez.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tD().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return ez.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && ez.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tD().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.jR);
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return ez.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getOpenH264() {
    return tD().openH264
  }
  getEverSpeakingWhileMuted() {
    return tt
  }
  getSpeakingWhileMuted() {
    return tn
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tf
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tD().modeOptions.vadKrispActivationThreshold) ? module : eU
  }
  hasActiveCallKitCall() {
    return tR
  }
  setHasActiveCallKitCall(e) {
    tR = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? ez.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && tW() : (0, Chunk358085.isWindows)() ? ez.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && ez.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    }).loadWasmModule), ez.fetchAsyncResources(module)
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
    let e = ez.getSupportedSecureFramesProtocolVersion(),
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

function rT(e) {
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
eC(rI, "displayName", "MediaEngineStore");
let rS = r = new rI(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rt,
  VOICE_STATE_UPDATES: ni,
  CONNECTION_OPEN: ne,
  CONNECTION_CLOSED: nn,
  RTC_CONNECTION_STATE: nr,
  AUDIO_SET_TEMPORARY_SELF_MUTE: na,
  AUDIO_TOGGLE_SELF_MUTE: no,
  AUDIO_SET_SELF_MUTE: ns,
  AUDIO_TOGGLE_SELF_DEAF: nc,
  AUDIO_TOGGLE_LOCAL_MUTE: nu,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nd,
  AUDIO_SET_LOCAL_VOLUME: np,
  AUDIO_SET_LOCAL_PAN: nh,
  AUDIO_SET_MODE: nm,
  AUDIO_SET_INPUT_VOLUME: ng,
  AUDIO_SET_OUTPUT_VOLUME: nE,
  AUDIO_SET_INPUT_DEVICE: nb,
  AUDIO_SET_OUTPUT_DEVICE: ny,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nv,
  AUDIO_SET_ECHO_CANCELLATION: nC,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nN,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nR,
  AUDIO_SET_LOOPBACK: nw,
  AUDIO_SET_NOISE_SUPPRESSION: nL,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nj,
  AUDIO_SET_NOISE_CANCELLATION: nM,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nk,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nZ,
  AUDIO_SET_DEBUG_LOGGING: nV,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nF,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nU,
  MEDIA_ENGINE_SET_VIDEO_HOOK: nH,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nY,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nW,
  AUDIO_SET_ATTENUATION: nK,
  AUDIO_SET_QOS: nz,
  MEDIA_ENGINE_DEVICES: nT,
  AUDIO_VOLUME_CHANGE: nS,
  AUDIO_RESET: nq,
  AUDIO_INPUT_DETECTED: nX,
  AUDIO_SET_SUBSYSTEM: n7,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n5,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: ra,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: ro,
  MEDIA_ENGINE_PERMISSION: ri,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rc,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nO,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nG,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nI,
  USER_SETTINGS_MODAL_INIT: ru,
  USER_SETTINGS_MODAL_SET_SECTION: ru,
  CERTIFIED_DEVICES_SET: rd,
  RPC_APP_CONNECTED: rn,
  RPC_APP_DISCONNECTED: rr,
  OVERLAY_INITIALIZE: nt,
  MEDIA_ENGINE_SET_OPEN_H264: rf,
  MEDIA_ENGINE_SET_HARDWARE_ENCODING: nB,
  APP_STATE_UPDATE: rp,
  SET_CHANNEL_BITRATE: rh,
  SET_VAD_PERMISSION: nQ,
  SET_NATIVE_PERMISSION: nJ,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rE,
  MEDIA_ENGINE_SET_AEC_DUMP: r_,
  CHANNEL_DELETE: rm,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rg,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rb,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: ry,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rO,
  USER_SETTINGS_PROTO_UPDATE: nl,
  CLIPS_INIT: rs,
  CLIPS_SETTINGS_UPDATE: rl,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rv,
  VOICE_FILTER_REQUEST_SWITCH: n4,
  VOICE_FILTER_LOOPBACK_TOGGLE: n3,
  VOICE_FILTER_APPLIED: n6,
  VOICE_FILTER_DOWNLOAD_FAILED: n8,
  VOICE_FILTER_APPLY_FAILED: n8
})