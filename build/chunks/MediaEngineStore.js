/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rZ
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
  Chunk960708 = require("./960708.js"),
  Chunk294473 = require("./294473.js"),
  Chunk706629 = require("./706629.js"),
  Chunk159142 = require("./159142.js"),
  Chunk27955 = require("./27955.js"),
  Chunk166884 = require("./166884.js"),
  Chunk422797 = require("./422797.js"),
  Chunk64592 = require("./64592.js"),
  Chunk805877 = require("./805877.js"),
  Chunk837968 = require("./837968.js"),
  Chunk35662 = require("./35662.js"),
  Chunk529558 = require("./529558.js"),
  Chunk705946 = require("./705946.js"),
  Chunk412412 = require("./412412.js"),
  Chunk441167 = require("./441167.js"),
  Chunk986855 = require("./986855.js"),
  Chunk338336 = require("./338336.js"),
  Chunk751571 = require("./751571.js"),
  Chunk311473 = require("./311473.js"),
  Chunk615830 = require("./615830.js"),
  Chunk725380 = require("./725380.js"),
  Chunk383451 = require("./383451.js"),
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

function ex(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ex(e, t, n[t])
    })
  }
  return e
}

function eM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ej(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eM(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ek = new Chunk710845.Z("MediaEngineStore"),
  eU = "MediaEngineStore",
  eG = 4,
  eB = 1,
  eZ = 1,
  eF = 1,
  eV = 1,
  eH = .5,
  eY = {
    left: 1,
    right: 1
  },
  eW = 500,
  eK = 5 * Chunk70956.Z.Millis.SECOND,
  ez = false,
  eq = 100,
  eX = 2 * Chunk70956.Z.Millis.SECOND,
  eQ = true,
  eJ = 0;

function e$() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: ez,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eH,
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
    videoHook: e1.supports(Chunk65154.AN.VIDEO_HOOK),
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
let e0 = {
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
  e1 = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
ek.enableNativeLogger(true);
let e2 = {},
  e3 = new Set([Chunk65154.Yn.DEFAULT]),
  e4 = e1.supports(Chunk65154.AN.AUTO_ENABLE),
  e8 = false,
  e5 = Chunk65154.Yn.STREAM,
  e6 = performance.now(),
  e7 = {
    [Chunk65154.w5]: nr("No Input Devices")
  },
  e9 = {
    [Chunk65154.w5]: nr("No Output Devices")
  },
  te = {
    [Chunk65154.w5]: nr("No Video Devices")
  },
  tt = false,
  tn = false,
  tr = false,
  ti = false,
  ta = false,
  to = Chunk65154.Av,
  ts = Chunk65154.Av,
  tl = false,
  tc = false,
  tu = false,
  td = new Chunk846519.V7,
  tf = false,
  t_ = false,
  tp = null,
  th = false,
  tm = false,
  tg = false,
  tE = false,
  tb = false,
  ty = [],
  tO = false,
  tv = null,
  tI = null,
  tS = null,
  tT = null,
  tA = null,
  tC = false,
  tN = false,
  tR = false,
  tP = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tw = false,
  tD = new Set,
  tx = tw,
  tL = new Set,
  tM = {},
  tj = null,
  tk = true,
  tU = false,
  tG = false,
  tB = false;

function tZ() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tF() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = e2[module];
  return null == exports && (t = e$(), e2[module] = exports), exports
}

function tV() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tF(r),
    a = e0[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = eL({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return ej(eL({}, i, a), {
    modeOptions: o
  })
}

function tH(e) {
  var t, n;
  let r = tV(e.context),
    i = r.mode;
  e.context === ew.Yn.DEFAULT && ((0, eo.f)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eA.pM4.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eA.pM4.VOICE_ACTIVITY), (0, z.I)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && ri(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eH,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tY(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ew.Qx;
  return p().clamp(e, 0, t)
}

function tW(e) {
  let t = tV(e.context),
    n = !e4 || t.mute || t.deaf;
  e.context === ew.Yn.DEFAULT ? n = n || tt || tn || tr || !en.Z.didHavePermission(eN.Eu.AUDIO) : e.context === ew.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ew.Yn.DEFAULT && T.Z.updateNativeMute()
}

function tK(e) {
  e !== e5 && (null != a && e1.setGoLiveSource(null, e5), e5 = e)
}

function tz() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : ta,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), e1.setGoLiveSource(null, e5)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && e1.setGoLiveSource(null, e5), ta || i) {
    let e = tV().videoDeviceId;
    ta && module === Chunk65154.w5 && ts === Chunk65154.w5 && to !== Chunk65154.Av ? e = to : ts = module, to = (ta = i) ? na(te, module) : Chunk65154.Av, e1.setVideoInputDevice(to)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tZ(),
        n = tV().videoHook,
        i = t2(),
        a = i ? t3() ? Chunk70722.zj : Chunk70722.ZM : 0,
        s = (0, Chunk358085.isWindows)() && (0, Chunk412412.t)("updateVideo").enabled;
      e1.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: s,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: t4(),
          videoHookStaleFrameTimeoutMs: eW,
          graphicsCaptureStaleFrameTimeoutMs: eK,
          hdrCaptureMode: exports,
          enableGlobalFramePoolLock: (0, Chunk27955.T)({
            location: "updateVideo"
          }).enabled
        },
        quality: module
      }, e5)
    }
    null != o.cameraSource && e1.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e5)
  }
}

function tq(e) {
  switch (e) {
    case ew.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case ew.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case ew.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tX(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eL({
    enabled: e
  }, t)
}

function tQ(e, t) {
  e.setAutomaticGainControl(tX(t))
}
async function tJ(e, t) {
  if ((0, e_.isIOS)() || (0, e_.isMac)()) {
    let e = await e1.getSystemMicrophoneMode();
    "" !== e && "standard" !== e && j.Z.getConfig({
      location: "setNoiseCancellation"
    }).disabledModes.includes(e) && (t = false)
  }
  e.setNoiseCancellation(t);
  let {
    noiseCancellationDuringProcessing: n
  } = (0, M.U)({
    location: "setNoiseCancellation",
    disable: !t
  });
  e.setNoiseCancellationDuringProcessing(n);
  let {
    noiseCancellationAfterProcessing: r,
    vadAfterWebrtc: i
  } = (0, Y.$)({
    location: "setNoiseCancellation"
  });
  e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i)
}

function t$(e) {
  let t = tV(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ey.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ey.Z.hasNoiseSuppression(n) || t.noiseSuppression), tQ(e, ey.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tJ(e, t.noiseCancellation), e.setVoiceFilterId(tv), (0, e_.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function t0() {
  var e;
  return !(0, Chunk64592.f)("MediaEngine").enabled && !(0, Chunk986855.M)("MediaEngine").enabled && !(0, Chunk35662.c)("MediaEngine").enabled && (null == (e = tV().openH264) || module)
}

function t1() {
  e1.on(Chunk46973.aB.Connection, e => {
    tH(e), tW(e), t$(e);
    let t = tV();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos), e.setExperimentalEncoders(t.experimentalEncoders), e.setHardwareH264(eQ), e.setSoftwareH264(t0());
    let n = ev.Z.getGuildId(),
      {
        muteBeforeProcessing: i,
        pttBeforeProcessing: o,
        skipEncode: s
      } = (null != n ? Z.Z : B.Z).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != n ? n : true
      }, {
        autoTrackExposure: true
      });
    i && e.setExperimentFlag(ew.V8.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(ew.V8.PTT_BEFORE_PROCESSING, true), s && e.setExperimentFlag(ew.V8.SKIP_ENCODE, true), (0, K.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(ew.V8.LOW_LATENCY_RATE_CONTROL, true);
    let l = false,
      c = true;
    if (e.setExperimentFlag(ew.V8.RESET_DECODER_ON_ERRORS, true), l && e.setExperimentFlag(ew.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), c && e.setExperimentFlag(ew.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === ew.Yn.STREAM) {
      let t = ns(e9);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = H.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, e_.isWindows)() ? (null == tj ? true : tj.startsWith("NVIDIA")) || (null == tj ? true : tj.startsWith("AMD")) ? e.setExperimentFlag(ew.V8.SIGNAL_AV1, true) : e.setExperimentFlag(ew.V8.SIGNAL_AV1_DECODE, true) : ((0, e_.isMac)() || (0, e_.isLinux)()) && e.setExperimentFlag(ew.V8.SIGNAL_AV1_DECODE, true), (0, e_.isWindows)() && e.setExperimentFlag(ew.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, e_.isWeb)()) {
      let {
        enabled: t
      } = (0, F.A)("MediaEngineStore");
      e.setExperimentFlag(ew.V8.BROWSER_HEVC, t)
    }
    if (e1.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(ew.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = $.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ew.ux)
    }
    for (let n of (t = tV(e.context), e.setPostponeDecodeLevel(eq), Object.keys(t.localMutes))) n !== eE.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eE.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
    for (let n of Object.keys(t.localPans)) {
      let r = t.localPans[n];
      e.setLocalPan(n, r.left, r.right)
    }
    for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
    e.on(b.Sh.Speaking, (t, n) => {
      v.Z.dispatch({
        type: "SPEAKING",
        context: e.context,
        userId: t,
        speakingFlags: n
      })
    }), e.context === ew.Yn.DEFAULT && (tc = false, tu = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      tc = true, tu = true, r.emitChange(), td.stop(), td.start(eX, () => {
        tu = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && eu.default.track(eA.rMx.VIDEOHOOK_INITIALIZED, eL({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, L.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      ek.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tq(e)
      }), tC = true, eu.default.track(eA.rMx.VOICE_PROCESSING, {
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
      ek.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tq(e)
      }), eu.default.track(eA.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: ew.Yn.DEFAULT,
        mode: eA.pM4.VOICE_ACTIVITY,
        options: ej(eL({}, tV(ew.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      eu.default.track(eA.rMx.SDP_ERROR, {
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
    }), e.setBitRate(eb.Z.bitrate), e.applyVideoQualityMode(eT.Z.mode), e1.supports(ew.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e1.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled)
  }), e1.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), e1.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), e1.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), e1.on(Chunk46973.aB.AudioPermission, e => {
    tP = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), e1.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), e1.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
    ek.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), e1.on(Chunk46973.aB.VideoInputInitialized, e => {
    eu.default.track(eA.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ef.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: ev.Z.getMediaSessionId(),
      rtc_connection_id: ev.Z.getRTCConnectionId()
    })
  }), e1.on(Chunk46973.aB.AudioInputInitialized, e => {
    eu.default.track(eA.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ef.Z.Millis.SECOND),
      rtc_connection_id: ev.Z.getRTCConnectionId()
    })
  }), e1.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), e1.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), e1.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && S.pn(t), o = null)
  }), e1.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), e1.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), e1.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), e1.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    eu.default.track(eA.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), e1.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? ej(eL({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : ej(eL({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), e1.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eJ++,
          context: n.context
        }
      })
    })
  }), e1.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rB(e);
    null !== t && eu.default.track(eA.rMx.VOICE_QUEUE_METRICS, t)
  }), e1.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nK(), nq(), t6.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tj = e.gpu_brand)
  }), e1.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    e1.eachConnection(t$)
  })
}

function t2() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function t3() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function t4() {
  return (0, Chunk358085.isMac)() && e1.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function t8() {
  return (0, Chunk358085.isWindows)() && e1.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && e1.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function t5() {
  return e1.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let t6 = new class {
  start() {
    this.started || (this.started = true, e1.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), e1.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tV();
    !th && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    ex(this, "stateChangeTimeout", true), ex(this, "noVoiceTimeout", 5e3), ex(this, "voiceTimeout", 1500), ex(this, "started", false), ex(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tm = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function t7() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eU, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), e2 = null != (e = Chunk433517.K.get(eU)) ? module : {}, p().each(e2, e => {
    if (p().defaultsDeep(e, e$()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eg.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eG && (e.vadUseKrispSettingVersion = eG, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = ez)
    }
    e1.supports(ew.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eV && (e.sidechainCompressionSettingVersion = eV, e.sidechainCompression = true), (0, e_.isWeb)() ? e.ncUseKrispjsSettingVersion !== eZ && (e.ncUseKrispjsSettingVersion = eZ, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eB && (e.ncUseKrispSettingVersion = eB, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== eF && (e.hardwareH264 = true, e.hardwareEnabledVersion = eF), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), nt()
}

function t9(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tF(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eU, e2), r
}

function ne() {
  Chunk433517.K.remove(eU), location.reload()
}

function nt() {
  let e = tV();
  e1.setAudioInputDevice(module.inputDeviceId), e1.setAudioOutputDevice(module.outputDeviceId), tz(), e1.setInputVolume(module.inputVolume), e1.setOutputVolume(module.outputVolume), e1.setH264Enabled(eQ || t0()), e1.setAv1Enabled(eQ), e1.setH265Enabled(eQ), e1.setAecDump(module.aecDumpEnabled), e1.setSidechainCompression(module.sidechainCompression), e1.setSidechainCompressionStrength(module.sidechainCompressionStrength), e1.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function nn() {
  e4 || e1.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function nr(e) {
  return {
    id: ew.w5,
    index: 0,
    name: e,
    disabled: true,
    guid: true,
    hardwareId: true,
    containerId: true
  }
}

function ni(e, t) {
  if (0 === e.length) {
    let e = nr(t);
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
    guid: e.originalId,
    hardwareId: e.hardwareId,
    containerId: e.containerId
  })).keyBy("id").value()
}

function na(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[ew.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function no(e) {
  let t = e7;
  if (e7 = ni(e, eD.intl.string(eD.t["/QIjDA"])), !p().isEqual(e7, t)) {
    let e = tV(),
      t = na(e7, e.inputDeviceId);
    e1.setAudioInputDevice(t)
  }
}

function ns(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nl(e) {
  e1.eachConnection(t => {
    t.context === ew.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nc(e) {
  let t = e9;
  if (e9 = ni(e, eD.intl.string(eD.t.xlUg0v)), !p().isEqual(e9, t)) {
    let e = tV(),
      n = na(e9, e.outputDeviceId);
    e1.setAudioOutputDevice(n);
    let r = ns(t),
      i = ns(e9);
    r !== i && nl(i)
  }
}

function nu(e) {
  t_ = e.length > 0;
  let t = te;
  if (te = ni(e, eD.intl.string(eD.t.WKWARY)), ta && !p().isEqual(te, t)) {
    var n;
    let e = true !== te[to],
      r = to === ew.w5 && (null == (n = t[ew.w5]) ? true : n.disabled);
    tz(e || r)
  }
}

function nd() {
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
      } = tV(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], e1.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], e1.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t9({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nf(e) {
  if (null == r) return ek.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : ed.Z.getAudioPid(e),
      n = "";
    return null != t && (n = ed.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function n_(e, t) {
  (0, e_.isWindows)() && e > 1 && S.YT(e, {
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

function np(e) {
  i = e.sessionId, tt = false, ti = false;
  let t = tV();
  if (t8() && (t5() ? rp(ew.iA.AUTOMATIC) : t.automaticAudioSubsystem && rh()), e1.supports(ew.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, e_.isDesktop)() ? e = (0, k.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, e_.isIOS)() || (0, e_.isAndroid)()) && (e = (0, U.W)({
      location: "handleConnectionOpen"
    }).enabled), e1.setOffloadAdmControls(e)
  }(0, el.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, e_.isDesktop)() && (ec.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: ew.Yn.DEFAULT,
    playSoundEffect: true
  }), t9({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), nd()
}

function nh(e) {
  let {
    mediaEngineState: t
  } = e;
  e2 = t.settingsByContext, e7 = t.inputDevices, e9 = t.outputDevices, tM = t.appSupported, tb = t.krispModuleLoaded, s = t.krispVersion, e5 = t.goLiveContext
}

function nm() {
  i = null
}

function ng() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.NJ.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nE(e) {
  switch (e.state) {
    case eA.hes.CONNECTING:
      nn();
      break;
    case eA.hes.RTC_CONNECTING:
      th = false, tm = false;
      break;
    case eA.hes.RTC_CONNECTED:
      tz();
      break;
    case eA.hes.DISCONNECTED:
      nC(), nN()
  }
  t6.update()
}

function nb(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      tt = t.mute || t.suppress, ti = t.deaf, e1.eachConnection(tW);
      let e = null != t.guildId && null != t.channelId && null != tA && tA !== t.channelId,
        n = !tg && null == t.channelId;
      return tz(!e && !n && ta), tA = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eE.default.getId() || null != ev.Z.getChannelId() || tz(false, null), e
  }, false)
}

function ny(e) {
  let {
    mute: t
  } = e;
  tn = t, e1.eachConnection(tW)
}

function nO(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tV(t);
  if (t === ew.Yn.DEFAULT && (en.Z.requestPermission(eN.Eu.AUDIO), tr)) returnfalse;
  (r = !i && !r) || (i = false), n || (tl = true), t9({
    mute: r,
    deaf: i
  }, t), e1.eachConnection(tW)
}

function nv(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t9({
    mute: n
  }, t), r || (tl = true), e1.eachConnection(tW)
}

function nI(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eR.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nd(true)
}

function nS(e) {
  let {
    context: t
  } = e;
  t9({
    deaf: !tV(t).deaf
  }, t), e1.eachConnection(tW)
}

function nT(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eE.default.getId()) return;
  let {
    localMutes: r
  } = tV(t);
  r[n] ? delete r[n] : r[n] = true, t9({
    localMutes: r
  }, t), e1.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nA(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === eA.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tV(l),
    m = null != (t = h[c]) && t,
    g = tD.has(c),
    E = u === eA.ZUi.AUTO_ENABLED || u === eA.ZUi.MANUAL_ENABLED;
  ek.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === ew.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  ek.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tV(l);
  if (I[c] === eA.ZUi.AUTO_PROBING && u === eA.ZUi.AUTO_ENABLED && (0, et.Z)(c, p ? ew.fC.AUTO_DISABLE : ew.fC.AUTO_ENABLE, E), I[c] = u, t9({
      videoToggleStateMap: I
    }, l, d), u === eA.ZUi.AUTO_PROBING ? null == (n = ev.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = ev.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tx || (ek.info("isAutoDisableAllowed=".concat(tx, " - disabling VideoHealthManager")), null == (a = ev.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tx) return;
    (0, et.Z)(c, p ? ew.fC.AUTO_DISABLE : ew.fC.AUTO_ENABLE, E), p ? tD.add(c) : tD.delete(c)
  } else v && (g && !p ? (ek.info("disallowing auto-disable for this session because of manual override by user"), tx = false, null == (s = ev.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, et.Z)(c, ew.fC.MANUAL_REENABLE, E)) : (0, et.Z)(c, p ? ew.fC.MANUAL_DISABLE : ew.fC.MANUAL_ENABLE, E));
  y && !p && tD.delete(c), p ? h[c] = true : delete h[c], t9({
    disabledLocalVideos: h
  }, l, d), e1.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nC() {
  if (0 === tD.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tV(module);
  tD.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e1.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tD.clear(), t9({
    disabledLocalVideos: exports
  }, module, false)
}

function nN() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tV(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t9({
    videoToggleStateMap: exports
  }, module, false)
}

function nR(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eE.default.getId()) return;
  let i = t === ew.Yn.STREAM ? ew.Yh : ew.Qx,
    {
      localVolumes: a
    } = tV(t);
  r === i ? delete a[n] : a[n] = r, t9({
    localVolumes: a
  }, t), e1.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nP(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tV(t);
  a[n] = {
    left: r,
    right: i
  }, t9({
    localPans: a
  }, t), e1.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nw(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t9({
    mode: n,
    modeOptions: r
  }, t), e1.eachConnection(tH), t6.update()
}

function nD(e) {
  let {
    volume: t
  } = e;
  t9({
    inputVolume: tY(t)
  }), e1.setInputVolume(t)
}

function nx(e) {
  let {
    volume: t
  } = e;
  t9({
    outputVolume: t
  }), e1.setOutputVolume(t)
}

function nL(e) {
  let {
    id: t
  } = e;
  t = na(e7, t), e6 = performance.now(), t9({
    inputDeviceId: t
  }), e1.setAudioInputDevice(t)
}

function nM(e) {
  let {
    id: t
  } = e;
  t9({
    outputDeviceId: t = na(e9, t)
  }), e1.setAudioOutputDevice(t)
}

function nj(e) {
  let {
    id: t
  } = e;
  t9({
    videoDeviceId: t = na(te, t)
  }), tz()
}

function nk(e) {
  let {
    inputProfile: t
  } = e;
  t9({
    activeInputProfile: t
  });
  let n = tV();
  e1.eachConnection(e => {
    tH(e), tQ(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tJ(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), e1.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), t6.update(), nz()
}

function nU(e) {
  return e8 !== e.required && (e8 = e.required, e.required || e1.interact(), true)
}

function nG(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  no(t), nc(n), nu(r)
}

function nB(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t9({
    inputVolume: tY(t),
    outputVolume: n
  })
}

function nZ(e) {
  var t;
  let n = tV(),
    r = e1.getAudioSubsystem(),
    i = e1.getAudioLayer(),
    a = na(e7, n.inputDeviceId),
    o = null == (t = e7[a]) ? true : t.name;
  eu.default.track(eA.rMx.VOICE_PROCESSING, {
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

function nF(e) {
  let t = t9({
    echoCancellation: e.enabled
  });
  e1.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nz(), nZ(e.location)
}

function nV(e) {
  nY(e.enabled)
}

function nH(e) {
  let t = t9({
    sidechainCompressionStrength: e.strength
  });
  e1.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nY(e) {
  let t = t9({
    sidechainCompression: e
  });
  e1.setSidechainCompression(t.sidechainCompression)
}

function nW(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tL.add(n) : tL.delete(n), nK(), nz()
}

function nK() {
  let e = !tL.has("voice_filter_preview") && !tL.has("mic_test");
  e1.setMaybePreprocessMute(module)
}

function nz() {
  let e = tV(),
    t = tL.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tX(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tv,
    c = tL.has("voice_filter") && 1 === tL.size;
  e1.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function nq() {
  var e, t, n, r;
  if (!e1.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  (null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) != null && (null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i) && (tB = true, tG = e1.supports(Chunk65154.AN.GAMESCOPE_CAPTURE))
}

function nX(e) {
  let t = t9({
    noiseSuppression: e.enabled
  });
  e1.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nz(), nZ(e.location)
}

function nQ(e) {
  let t = t9({
    automaticGainControl: e.enabled
  });
  e1.eachConnection(e => tQ(e, t.automaticGainControl)), nz(), nZ(e.location)
}

function nJ(e) {
  let t = t9({
    noiseCancellation: e.enabled
  });
  e1.eachConnection(e => tJ(e, t.noiseCancellation)), nz(), nZ(e.location)
}

function n$(e) {
  er.Z.setKrispModelOverride(e.model), c = e.model, nz()
}

function n0(e) {
  var t;
  (0, e_.isWeb)() || (tO = e.enabled, null == (t = e1.setNoiseCancellationEnableStats) || t.call(e1, e.enabled))
}

function n1(e) {
  let t = t9({
    experimentalEncoders: e.enabled
  });
  e1.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function n2(e) {
  t9({
    silenceWarning: e.enabled
  }), t6.update()
}

function n3(e) {
  e1.setDebugLogging(e.enabled)
}

function n4(e) {
  let {
    level: t
  } = e;
  l = t, er.Z.setKrispSuppressionLevel(t)
}

function n8(e) {
  t9({
    videoHook: e.enabled
  })
}

function n5(e) {
  t9({
    experimentalSoundshare2: e.enabled
  })
}

function n6(e) {
  let {
    enabled: t
  } = e;
  t9({
    useSystemScreensharePicker: t
  })
}

function n7(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t9({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  e1.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n9(e) {
  let {
    enabled: t
  } = e;
  t9({
    qos: t
  }), e1.eachConnection(e => e.setQoS(t))
}

function re() {
  ne()
}

function rt(e) {
  let {
    inputDetected: t
  } = e;
  tp = t, !th && tp && (th = true, t6.update())
}

function rn(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tr) returnfalse;
  tr = n, e1.eachConnection(tW)
}

function rr(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eN.PQ.ACCEPTED;
  switch (n) {
    case eN.Eu.AUDIO:
      tP = true, e1.eachConnection(tW);
      break;
    case eN.Eu.CAMERA:
      !r && ta && tz(false);
      break;
    default:
      returnfalse
  }
}

function ri() {
  return tb || false
}
async function ra() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tb = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      ty = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    ek.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), t9({
      noiseCancellation: false
    })
  } finally {
    tE = false
  }
}

function ro() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function rs() {
  !ro() || __OVERLAY__ || tE || tb ? (0, Chunk358085.isWeb)() && e1.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tb = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t9({
    noiseCancellation: false
  }) : (tE = true, ra())
}

function rl(e) {
  let {
    enabled: t
  } = e;
  eu.default.track(eA.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tv ? tv : null,
    enabled: t
  }), t9({
    voiceFilterPlaybackEnabled: t
  })
}

function rc(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t9({
    mostRecentlyRequestedVoiceFilter: t
  }), e1.eachConnection(e => e.setVoiceFilterId(t))
}

function ru() {
  t9({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rd(e) {
  let {
    voiceFilterId: t
  } = e;
  tS = tv, tT = tI, tv = t, tI = null === t ? null : Date.now()
}

function rf(e) {
  let t = e.bypassEnabled;
  t9({
    bypassSystemInputProcessing: t
  }), e1.setAudioInputBypassSystemProcessing(t), nZ(e.location)
}

function r_(e) {
  rp(e.subsystem)
}

function rp(e) {
  e === ew.iA.AUTOMATIC ? (t9({
    automaticAudioSubsystem: true
  }), rh()) : (t9({
    automaticAudioSubsystem: false
  }), e1.setAudioSubsystem(e))
}

function rh() {
  e1.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rm(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tz(i, null), null != t || null == n) {
    tg = false;
    return
  }
  if (tg) return;
  tg = true;
  let a = tV();
  (a.mute || a.deaf) && (t9({
    deaf: false,
    mute: false
  }), e1.eachConnection(tW))
}

function rg(e) {
  let {
    application: t
  } = e;
  e3.add(t.id)
}

function rE(e) {
  let {
    application: t
  } = e;
  e3.delete(t.id)
}

function rb(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e4 = false, e1.eachConnection(tW);
      break;
    case "video":
      tz(false)
  }
}

function ry(e) {
  e4 = e.enabled, e.unmute && t9({
    mute: false,
    deaf: false
  }), e1.eachConnection(tW)
}

function rO(e) {
  let {
    enabled: t
  } = e;
  en.Z.requestPermission(eN.Eu.CAMERA), tz(t)
}

function rv(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = ed.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = nf(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (e1.setClipsSource(null), (0, e_.isWindows)() && null != o.desktopSource.soundshareId && S.pn(o.desktopSource.soundshareId)), null != l && n_(l, c), o = d;
  let f = tZ(),
    _ = tV().videoHook;
  e1.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: t2(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: t4(),
      videoHookStaleFrameTimeoutMs: eW,
      graphicsCaptureStaleFrameTimeoutMs: eK,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function rI(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, e1.setClipsSource(null))
}

function rS(e) {
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
      s = null != (t = a.context) ? t : ew.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : ed.Z.getPidFromDesktopSource(i);
    e_.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nf(c), null != e && n_(e, r)), tK(s), tz(s === ew.Yn.STREAM && ta, {
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
    let e = null != (r = a.context) ? r : ew.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === ew.Yn.STREAM && ta,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tz(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tz(ta, null)
}

function rT(e) {
  let {
    section: t
  } = e;
  return t === eA.oAB.VOICE && nn(), false
}

function rA() {
  return e1.eachConnection(t$), false
}

function rC(e) {
  let {
    enabled: t
  } = e;
  t9({
    openH264: t
  }), e1.setH264Enabled(eQ || t0()), e1.eachConnection(e => e.setSoftwareH264(t0()))
}

function rN(e) {
  let {
    enabled: t
  } = e, n = t9({
    aecDumpEnabled: t
  });
  e1.setAecDump(n.aecDumpEnabled)
}

function rR(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e2 = Object.values(ew.Yn).reduce((e, n) => {
    let r = n,
      i = e$();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(eU, e2), nt()
}

function rP(e) {
  let {
    state: t
  } = e, n = D.Z.isEnabled();
  if (t === eA.$7l.BACKGROUND && ta && !n) tf = true, tz(false);
  else {
    if (t !== eA.$7l.ACTIVE || !tf) returnfalse;
    tf = false, tz(true)
  }
  returntrue
}

function rw(e) {
  e1.eachConnection(t => t.setBitRate(e.bitrate))
}

function rD() {
  if (!ta && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tz(false, null)
}

function rx() {
  return !!tC && (tC = false, true)
}

function rL(e) {
  e1.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rM(e) {
  let {
    settings: t
  } = e;
  e1.applyMediaFilterSettings(t).finally(() => {
    tN = false, r.emitChange()
  })
}

function rj() {
  tN = true
}

function rk() {
  tN = false
}

function rU(e) {
  tk = e.enabled
}
class rG extends(u = Chunk442837.ZP.Store) {
  initialize() {
    t1(), t7(), rs(), nN(), tM = {
      [Chunk65154.AN.VIDEO]: e1.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: e1.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: e1.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk615830.Z, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return e1.supports(e)
  }
  supportsInApp(e) {
    return tM[e] || e1.supports(e)
  }
  isSupported() {
    return e1.supported()
  }
  isExperimentalEncodersSupported() {
    return e1.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return e1.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return ri()
  }
  isNoiseCancellationError() {
    return tC
  }
  isAutomaticGainControlSupported() {
    return e1.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !t5() && (e1.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || e1.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return e1.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e1.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return ri()
  }
  isAecDumpSupported() {
    return e1.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return e1.supports(Chunk65154.AN.VIDEO) && e1.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(tA)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && eQ && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tV().aecDumpEnabled
  }
  getMediaEngine() {
    return e1
  }
  getVideoComponent() {
    return e1.Video
  }
  getCameraComponent() {
    return e1.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return tO
  }
  isEnabled() {
    return e4
  }
  isMute() {
    return this.isSelfMute() || tt
  }
  isDeaf() {
    return this.isSelfDeaf() || ti
  }
  hasContext(e) {
    return null != e2[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tn
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tV(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && tr
  }
  shouldSkipMuteUnmuteSound() {
    return tl
  }
  notifyMuteUnmuteSoundWasSkipped() {
    tl = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tk
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tV(module).deaf
  }
  isVideoEnabled() {
    return ta && t_
  }
  isVideoAvailable() {
    return Object.values(te).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e5 === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e5 === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
    return e !== eE.default.getId() && (tV(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return e1.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
    return null != (t = tV(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
    return null != (t = tV(n).videoToggleStateMap[e]) ? t : eA.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
    return t === ew.Yn.DEFAULT && tD.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tD.size > 0
  }
  isMediaFilterSettingLoading() {
    return tN
  }
  isNativeAudioPermissionReady() {
    return tP
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e5
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e6
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT,
      n = tV(t).localPans[e];
    return null != n ? n : eY
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT,
      n = t === ew.Yn.STREAM ? ew.Yh : ew.Qx,
      r = tV(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tV().inputVolume
  }
  getOutputVolume() {
    return tV().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tV(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tV(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tv
  }
  getActiveVoiceFilterAppliedAt() {
    return tI
  }
  getPreviousVoiceFilter() {
    return tS
  }
  getPreviousVoiceFilterAppliedAt() {
    return tT
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tV().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tV().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(e2, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eA.pM4.PUSH_TO_TALK && e3.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return na(e7, tV().inputDeviceId)
  }
  getOutputDeviceId() {
    return na(e9, tV().outputDeviceId)
  }
  getVideoDeviceId() {
    return na(te, tV().videoDeviceId)
  }
  getInputDevices() {
    return e7
  }
  getOutputDevices() {
    return e9
  }
  getVideoDevices() {
    return te
  }
  getEchoCancellation() {
    let e = tV();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return e1.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tV().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tV().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tV().h265Enabled
  }
  getLoopback() {
    return tL.size > 0
  }
  getLoopbackReasons() {
    return tL
  }
  getNoiseSuppression() {
    let e = tV();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tV();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tV().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tV().noiseCancellation
  }
  getExperimentalEncoders() {
    return tV().experimentalEncoders
  }
  getHardwareEncoding() {
    return eQ
  }
  getEnableSilenceWarning() {
    return tV().silenceWarning
  }
  getDebugLogging() {
    return e1.getDebugLogging()
  }
  getQoS() {
    return tV().qos
  }
  getAttenuation() {
    return tV().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tV().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tV().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return t8() && tV().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : e1.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return e1.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tV().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tV(module)
  }
  getState() {
    return {
      settingsByContext: e2,
      inputDevices: e7,
      outputDevices: e9,
      appSupported: tM,
      krispModuleLoaded: tb,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: e5
    }
  }
  getInputDetected() {
    return tp
  }
  getNoInputDetectedNotice() {
    return tm
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    e1.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return e8
  }
  getVideoHook() {
    return tV().videoHook
  }
  supportsVideoHook() {
    return e1.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tV().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return e1.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && e1.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tV().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return e1.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tB
  }
  getUseGamescopeCapture() {
    return tG
  }
  getOpenH264() {
    return tV().openH264
  }
  getEverSpeakingWhileMuted() {
    return tc
  }
  getSpeakingWhileMuted() {
    return tu
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return ty
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tV().modeOptions.vadKrispActivationThreshold) ? module : eH
  }
  hasActiveCallKitCall() {
    return tU
  }
  setHasActiveCallKitCall(e) {
    tU = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? e1.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && t4() : (0, Chunk358085.isWindows)() ? e1.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && e1.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    return (0, Chunk358085.isWeb)() && (module.fetchDave = Chunk529558.NJ.getCurrentConfig({
      location: "MediaEngineStore fetchAsyncResources"
    }).loadWasmModule), e1.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!tR && (tR = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      e1.fetchAsyncResources(module).catch(e => {
        ek.warn("DAVE preload failed:", e), eh.Z.captureException(e)
      })
    }
  }
  getSupportedSecureFramesProtocolVersion() {
    if ((0, Chunk358085.isWeb)()) {
      let {
        useWasmModule: e
      } = Chunk529558.NJ.getCurrentConfig({
        location: "MediaEngineStore getSupportedSecureFramesProtocolVersion"
      });
      if (!module) return 0
    }
    let e = e1.getSupportedSecureFramesProtocolVersion();
    114 === module && (e = 1);
    let t = Chunk529558.m8.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      n = Chunk529558.Th.getConfig({
        location: "MediaEngineStore"
      });
    return (exports.canSupportDaveProtocol || require.allowOptIn && Chunk615830.Z.getPersistentCodesEnabled()) && module >= exports.protocolVersionFloor ? module : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tj
  }
}

function rB(e) {
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
ex(rG, "displayName", "MediaEngineStore");
let rZ = r = new rG(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rm,
  VOICE_STATE_UPDATES: nb,
  CONNECTION_OPEN: np,
  CONNECTION_CLOSED: nm,
  POST_CONNECTION_OPEN: ng,
  RTC_CONNECTION_STATE: nE,
  AUDIO_SET_TEMPORARY_SELF_MUTE: ny,
  AUDIO_TOGGLE_SELF_MUTE: nO,
  AUDIO_SET_SELF_MUTE: nv,
  AUDIO_TOGGLE_SELF_DEAF: nS,
  AUDIO_TOGGLE_LOCAL_MUTE: nT,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nA,
  AUDIO_SET_LOCAL_VOLUME: nR,
  AUDIO_SET_LOCAL_PAN: nP,
  AUDIO_SET_MODE: nw,
  AUDIO_SET_INPUT_VOLUME: nD,
  AUDIO_SET_OUTPUT_VOLUME: nx,
  AUDIO_SET_INPUT_DEVICE: nL,
  AUDIO_SET_OUTPUT_DEVICE: nM,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nk,
  AUDIO_SET_ECHO_CANCELLATION: nF,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nV,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nH,
  AUDIO_SET_LOOPBACK: nW,
  AUDIO_SET_NOISE_SUPPRESSION: nX,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nQ,
  AUDIO_SET_NOISE_CANCELLATION: nJ,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: n$,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: n2,
  AUDIO_SET_DEBUG_LOGGING: n3,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n4,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n0,
  MEDIA_ENGINE_SET_VIDEO_HOOK: n8,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n5,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n6,
  AUDIO_SET_ATTENUATION: n7,
  AUDIO_SET_QOS: n9,
  MEDIA_ENGINE_DEVICES: nG,
  AUDIO_VOLUME_CHANGE: nB,
  AUDIO_RESET: re,
  AUDIO_INPUT_DETECTED: rt,
  AUDIO_SET_SUBSYSTEM: r_,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rf,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: ry,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rO,
  MEDIA_ENGINE_PERMISSION: rb,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rS,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nj,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: n1,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nU,
  USER_SETTINGS_MODAL_INIT: rT,
  USER_SETTINGS_MODAL_SET_SECTION: rT,
  CERTIFIED_DEVICES_SET: rA,
  RPC_APP_CONNECTED: rg,
  RPC_APP_DISCONNECTED: rE,
  OVERLAY_INITIALIZE: nh,
  MEDIA_ENGINE_SET_OPEN_H264: rC,
  APP_STATE_UPDATE: rP,
  SET_CHANNEL_BITRATE: rw,
  SET_VAD_PERMISSION: rn,
  SET_NATIVE_PERMISSION: rr,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rL,
  MEDIA_ENGINE_SET_AEC_DUMP: rN,
  MEDIA_ENGINE_RESET_SETTINGS: rR,
  CHANNEL_DELETE: rD,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rx,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rM,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rj,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rk,
  USER_SETTINGS_PROTO_UPDATE: nI,
  CLIPS_INIT: rv,
  CLIPS_SETTINGS_UPDATE: rI,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rU,
  VOICE_FILTER_REQUEST_SWITCH: rc,
  VOICE_FILTER_LOOPBACK_TOGGLE: rl,
  VOICE_FILTER_APPLIED: rd,
  VOICE_FILTER_DOWNLOAD_FAILED: ru,
  VOICE_FILTER_APPLY_FAILED: ru
})