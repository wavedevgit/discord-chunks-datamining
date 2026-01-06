/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u;
require.d(exports, {
  Z: () => rQ
}), require("./388685.js"), require("./953529.js"), require("./457542.js"), require("./539854.js"), require("./642613.js"), require("./49124.js"), require("./337869.js");
var d, Chunk512722 = require("./512722.js"),
  p = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  m = require.n(Chunk392711),
  Chunk209739 = require("./209739.js"),
  g = require.n(Chunk209739),
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
  Chunk341569 = require("./341569.js"),
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
  Chunk502450 = require("./502450.js"),
  Chunk294473 = require("./294473.js"),
  Chunk706629 = require("./706629.js"),
  Chunk159142 = require("./159142.js"),
  Chunk27955 = require("./27955.js"),
  Chunk166884 = require("./166884.js"),
  Chunk126382 = require("./126382.js"),
  Chunk422797 = require("./422797.js"),
  Chunk805877 = require("./805877.js"),
  Chunk837968 = require("./837968.js"),
  Chunk529558 = require("./529558.js"),
  Chunk705946 = require("./705946.js"),
  Chunk412412 = require("./412412.js"),
  Chunk441167 = require("./441167.js"),
  Chunk787602 = require("./787602.js"),
  Chunk338336 = require("./338336.js"),
  Chunk751571 = require("./751571.js"),
  Chunk311473 = require("./311473.js"),
  Chunk825940 = require("./825940.js"),
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

function eM(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ek(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eM(e, t, n[t])
    })
  }
  return e
}

function eU(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eG(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eU(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eZ = new Chunk710845.Z("MediaEngineStore"),
  eF = "MediaEngineStore",
  eB = 4,
  eV = 1,
  eH = 1,
  eY = 1,
  eW = .5,
  eK = {
    left: 1,
    right: 1
  },
  ez = 500,
  eq = 5 * Chunk70956.Z.Millis.SECOND,
  eQ = false,
  eX = 100,
  eJ = 2 * Chunk70956.Z.Millis.SECOND,
  e$ = 30 * Chunk70956.Z.Millis.SECOND,
  e0 = true,
  e1 = "deep_noise_suppression",
  e3 = 0;

function e2() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eQ,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eW,
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
    hardwareEnabledVersion: 0,
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
    videoHook: e5.supports(Chunk65154.AN.VIDEO_HOOK),
    experimentalSoundshare2: null,
    useSystemScreensharePicker: null,
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
let e4 = {
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
  e5 = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
eZ.enableNativeLogger(true);
let e8 = {},
  e6 = new Set([Chunk65154.Yn.DEFAULT]),
  e7 = e5.supports(Chunk65154.AN.AUTO_ENABLE),
  e9 = false,
  te = Chunk65154.Yn.STREAM,
  tt = performance.now(),
  tn = {
    [Chunk65154.w5]: np("No Input Devices")
  },
  tr = {
    [Chunk65154.w5]: np("No Output Devices")
  },
  ti = {
    [Chunk65154.w5]: np("No Video Devices")
  },
  ta = new Chunk846519.V7,
  to = false,
  ts = false,
  tl = false,
  tc = false,
  tu = false,
  td = Chunk65154.Av,
  tf = Chunk65154.Av,
  tp = false,
  t_ = false,
  tm = false,
  th = new Chunk846519.V7,
  tg = false,
  tE = false,
  tb = null,
  ty = false,
  tO = false,
  tv = false,
  tS = false,
  tI = false,
  tT = [],
  tC = false,
  tA = null,
  tN = null,
  tP = null,
  tR = null,
  tw = null,
  tD = false,
  tx = false,
  tL = false,
  tj = null,
  tM = null,
  tk = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tU = false,
  tG = new Set,
  tZ = tU,
  tF = new Set,
  tB = {},
  tV = null,
  tH = true,
  tY = false,
  tW = false,
  tK = false,
  tz = false;

function tq() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}
async function tQ() {
  if ("undefined" == typeof window || "undefined" == typeof navigator || !("mediaCapabilities" in navigator) || null == navigator.mediaCapabilities) returnfalse;
  try {
    let e = await navigator.mediaCapabilities.decodingInfo({
      type: "file",
      video: {
        contentType: 'video/mp4; codecs="hev1.1.6.L153.B0"',
        width: 1920,
        height: 1080,
        bitrate: 2e6,
        framerate: 30
      }
    });
    return module.supported && module.powerEfficient
  } catch (e) {
    returnfalse
  }
}

function tX() {
  return null != tM ? tM : "undefined" != typeof window ? tM = tQ().then(e => (tj = e, e)) : Promise.resolve(false)
}

function tJ() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = e8[module];
  return null == exports && (t = e2(), e8[module] = exports), exports
}

function t$() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tJ(r),
    a = e4[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = ek({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return eG(ek({}, i, a), {
    modeOptions: o
  })
}

function t0(e) {
  var t, n;
  let r = t$(e.context),
    i = r.mode;
  e.context === eL.Yn.DEFAULT && ((0, ec.f)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eP.pM4.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eP.pM4.VOICE_ACTIVITY), (0, X.I)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && rp(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eW,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function t1(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.Qx;
  return m().clamp(e, 0, t)
}

function t3(e) {
  let t = t$(e.context),
    n = !e7 || t.mute || t.deaf;
  e.context === eL.Yn.DEFAULT ? n = n || to || ts || tl || !ei.Z.didHavePermission(ew.Eu.AUDIO) : e.context === eL.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eL.Yn.DEFAULT && C.Z.updateNativeMute()
}

function t2(e) {
  e !== te && (null != a && e5.setGoLiveSource(null, te), te = e)
}

function t4() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : tu,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), e5.setGoLiveSource(null, te)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && e5.setGoLiveSource(null, te), tu || i) {
    let e = t$().videoDeviceId;
    tu && module === Chunk65154.w5 && tf === Chunk65154.w5 && td !== Chunk65154.Av ? e = td : tf = module, td = (tu = i) ? nm(ti, module) : Chunk65154.Av, e5.setVideoInputDevice(td)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tq(),
        n = t$().videoHook,
        i = nn(),
        a = i ? nr() ? Chunk70722.zj : Chunk70722.ZM : 0,
        s = (0, Chunk358085.isWindows)() && (0, Chunk412412.t)("updateVideo").enabled;
      e5.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: s,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: ni(),
          videoHookStaleFrameTimeoutMs: ez,
          graphicsCaptureStaleFrameTimeoutMs: eq,
          hdrCaptureMode: exports,
          enableGlobalFramePoolLock: (0, Chunk27955.T)({
            location: "updateVideo"
          }).enabled
        },
        quality: module
      }, te)
    }
    null != o.cameraSource && e5.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, te)
  }
}

function t5(e) {
  switch (e) {
    case eL.H3.CPU_OVERUSE:
      return D.Nk.NoiseCancellerCpuOveruse;
    case eL.H3.FAILED:
      return D.Nk.NoiseCancellerFailed;
    case eL.H3.VAD_CPU_OVERUSE:
      return D.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function t8(e) {
  let t = (0, k.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return ek({
    enabled: e
  }, t)
}

function t6(e, t) {
  e.setAutomaticGainControl(t8(t))
}

function t7(e) {
  if ((0, eh.isIOS)() || (0, eh.isMac)()) {
    var t;
    let n = null != (t = r.getSystemMicrophoneMode()) ? t : "";
    if ("" !== n && "standard" !== n) {
      let {
        disabledModes: e
      } = U.Z.getConfig({
        location: "setNoiseCancellation"
      });
      if (e.includes(n)) return eZ.info("Falling back to system noise suppression."), false
    }
    return e
  }
  if (!e) return e;
  let n = r.getSystemMicrophoneMode();
  if (null == n || "" === n) return e;
  if ((0, eh.isWindows)() && n === e1) {
    let {
      preferSystemEffects: e
    } = (0, eo.P)({
      location: "setNoiseCancellation"
    });
    if (e) return eZ.info("Falling back to system noise suppression."), false
  }
  return e
}

function t9(e, t) {
  t = t7(t), e.setNoiseCancellation(t);
  let {
    noiseCancellationDuringProcessing: n
  } = (0, k.U)({
    location: "setNoiseCancellation",
    disable: !t
  });
  e.setNoiseCancellationDuringProcessing(n);
  let {
    noiseCancellationAfterProcessing: r,
    vadAfterWebrtc: i
  } = (0, q.$)({
    location: "setNoiseCancellation"
  });
  e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i)
}

function ne(e) {
  let t = t$(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eS.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eS.Z.hasNoiseSuppression(n) || t.noiseSuppression), t6(e, eS.Z.hasAutomaticGainControl(n) || t.automaticGainControl), t9(e, t.noiseCancellation), e.setVoiceFilterId(tA), (0, eh.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function nt() {
  ta.start(e$, () => {
    eZ.error("Device enumeration timed out"), Chunk626135.default.track(Chunk981631.rMx.DEVICE_ENUMERATION_TIMEOUT, {})
  }), e5.on(Chunk46973.aB.Connection, e => {
    t0(e), t3(e), ne(e);
    let t = t$();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
    let n = (0, z.D)({
      location: "setupMediaEngine"
    }).treatment;
    n === z.$.NoSoftwareDecode ? (e.setExperimentFlag(eL.V8.H265_HARDWARE_ONLY, true), (0, eh.isWindows)() ? tX().then(t => {
      e.setExperimentFlag(eL.V8.H265_HARDWARE_DECODE_AVAILABLE, t)
    }) : (0, eh.isMac)() && e.setExperimentFlag(eL.V8.H265_HARDWARE_DECODE_AVAILABLE, true)) : n === z.$.Disabled && (e.setExperimentFlag(eL.V8.H265_HARDWARE_ONLY, true), e.setExperimentFlag(eL.V8.H265_HARDWARE_DECODE_AVAILABLE, false));
    let i = eT.Z.getGuildId(),
      {
        muteBeforeProcessing: o,
        pttBeforeProcessing: s,
        skipEncode: l
      } = (null != i ? H.Z : V.Z).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != i ? i : true
      }, {
        autoTrackExposure: true
      });
    o && e.setExperimentFlag(eL.V8.MUTE_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eL.V8.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(eL.V8.SKIP_ENCODE, true), (0, Q.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eL.V8.LOW_LATENCY_RATE_CONTROL, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(eL.V8.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(eL.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(eL.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eL.Yn.STREAM) {
      let t = ng(tr);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = K.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, eh.isWindows)() ? (null == tV ? true : tV.startsWith("NVIDIA")) || (null == tV ? true : tV.startsWith("AMD")) ? e.setExperimentFlag(eL.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eL.V8.SIGNAL_AV1_DECODE, true) : ((0, eh.isMac)() || (0, eh.isLinux)()) && e.setExperimentFlag(eL.V8.SIGNAL_AV1_DECODE, true), (0, eh.isWindows)() && e.setExperimentFlag(eL.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, eh.isWeb)()) {
      let {
        enabled: t
      } = (0, Y.A)("MediaEngineStore");
      e.setExperimentFlag(eL.V8.BROWSER_HEVC, t)
    }
    if ((0, eh.isWindows)() && (null == tV ? true : tV.startsWith("AMD")) && (0, en.C)("MediaEngineStore").enabled && e.setExperimentFlag(eL.V8.WMF_GPU_ENCODE, true), e5.setHasFullbandPerformance((0, w.Z)()), e.setRemoteAudioHistory(1e3), (0, N.Z)(r)) {
      let {
        enableViewerClipping: t
      } = et.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eL.ux)
    }
    for (let n of (t = t$(e.context), e.setPostponeDecodeLevel(eX), Object.keys(t.localMutes))) n !== eO.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eO.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
    for (let n of Object.keys(t.localPans)) {
      let r = t.localPans[n];
      e.setLocalPan(n, r.left, r.right)
    }
    for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
    e.on(y.Sh.Speaking, (t, n, r, i) => {
      S.Z.dispatch({
        type: "SPEAKING",
        context: e.context,
        userId: t,
        speakingFlags: n,
        voiceDb: i
      })
    }), e.context === eL.Yn.DEFAULT && (t_ = false, tm = false, e.on(y.Sh.SpeakingWhileMuted, () => {
      t_ = true, tm = true, r.emitChange(), th.stop(), th.start(eJ, () => {
        tm = false, r.emitChange()
      })
    })), e.on(y.Sh.DesktopSourceEnd, (t, n) => {
      S.Z.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: {
          context: e.context
        },
        endReason: t,
        errorCode: n
      })
    }), e.on(y.Sh.InteractionRequired, e => {
      S.Z.dispatch({
        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
        required: e
      })
    }), e.on(y.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
      (null == a ? true : a.desktopSource) != null && ep.default.track(eP.rMx.VIDEOHOOK_INITIALIZED, ek({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, M.Z)(null == a ? true : a.desktopSource)))
    }), e.on(y.Sh.NoiseCancellationError, e => {
      eZ.warn("noisecancellererror event: ".concat(e)), (0, D.kr)({
        type: D.u.NOISE_CANCELLER_ERROR,
        underlyingError: t5(e)
      }), tD = true, ep.default.track(eP.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), S.Z.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: true
      }), S.Z.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION",
        enabled: false
      }), S.Z.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
        code: e
      })
    }), e.on(y.Sh.VoiceActivityDetectorError, e => {
      eZ.warn("voiceactivitydetectorerror event: ".concat(e)), (0, D.kr)({
        type: D.u.NOISE_CANCELLER_ERROR,
        underlyingError: t5(e)
      }), ep.default.track(eP.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), S.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eL.Yn.DEFAULT,
        mode: eP.pM4.VOICE_ACTIVITY,
        options: eG(ek({}, t$(eL.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), S.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(y.Sh.SdpError, (e, t, n, r) => {
      ep.default.track(eP.rMx.SDP_ERROR, {
        operation: e,
        error: t,
        type: n,
        sdp: r
      })
    }), e.on(y.Sh.VideoState, t => {
      S.Z.dispatch({
        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
        videoState: t,
        context: e.context
      })
    }), e.setBitRate(ev.Z.bitrate), e.applyVideoQualityMode(eN.Z.mode), e5.supports(eL.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e5.setAsyncVideoInputDeviceInit((0, F.p)("setupMediaEngine").enabled)
  }), e5.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    ta.stop(), S.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), e5.on(Chunk46973.aB.VolumeChange, (e, t) => {
    S.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), e5.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    S.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), e5.on(Chunk46973.aB.AudioPermission, e => {
    tk = true, S.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), e5.on(Chunk46973.aB.VideoPermission, e => {
    S.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), e5.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
    eZ.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), e5.on(Chunk46973.aB.VideoInputInitialized, e => {
    ep.default.track(eP.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * em.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eT.Z.getMediaSessionId(),
      rtc_connection_id: eT.Z.getRTCConnectionId()
    })
  }), e5.on(Chunk46973.aB.AudioInputInitialized, e => {
    ep.default.track(eP.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * em.Z.Millis.SECOND),
      rtc_connection_id: eT.Z.getRTCConnectionId()
    })
  }), e5.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), e5.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    S.Z.wait(() => {
      S.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), e5.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
  }), e5.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    S.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), e5.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    S.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), e5.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    S.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), e5.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    ep.default.track(eP.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), e5.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? D.u.VIDEO_ENCODE_ERROR : D.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, D.kr)(t === D.u.VIDEO_ENCODE_ERROR ? eG(ek({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eG(ek({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), e5.on(Chunk46973.aB.ConnectionStats, e => {
    S.Z.dispatch({
      type: "MEDIA_ENGINE_CONNECTION_STATS",
      connectionStats: e.map(e => {
        let {
          stats: t,
          connection: n
        } = e;
        return {
          stats: t,
          mediaEngineConnectionId: n.mediaEngineConnectionId,
          version: e3++,
          context: n.context
        }
      })
    })
  }), e5.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rq(e);
    null !== t && ep.default.track(eP.rMx.VOICE_QUEUE_METRICS, t)
  }), e5.setOnVideoContainerResized((e, t, n) => {
    S.Z.wait(() => S.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      dimensions: {
        width: t,
        height: n
      }
    }))
  }), n2(), n5(), e5.supports(Chunk65154.AN.ASYNC_CLIPS_SOURCE_DEINIT) && e5.setAsyncClipsSourceDeinit((0, Chunk502450.C)("setupMediaEngine").enabled), ns.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tV = e.gpu_brand)
  }), e5.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    u = e, e5.eachConnection(ne)
  })
}

function nn() {
  return (0, Chunk358085.isWindows)() && g().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function nr() {
  return (0, Chunk358085.isWindows)() && g().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function ni() {
  return (0, Chunk358085.isMac)() && e5.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && g().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function na() {
  return (0, Chunk358085.isWindows)() && e5.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && e5.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function no() {
  return e5.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let ns = new class {
  start() {
    this.started || (this.started = true, e5.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), e5.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = t$();
    !ty && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eM(this, "stateChangeTimeout", true), eM(this, "noVoiceTimeout", 5e3), eM(this, "voiceTimeout", 1500), eM(this, "started", false), eM(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (S.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tO = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function nl() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eF, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), e8 = null != (e = Chunk433517.K.get(eF)) ? module : {}, m().each(e8, e => {
    if (m().defaultsDeep(e, e2()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ey.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eB && (e.vadUseKrispSettingVersion = eB, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eQ)
    }
    e5.supports(eL.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eY && (e.sidechainCompressionSettingVersion = eY, e.sidechainCompression = true), (0, eh.isWeb)() ? e.ncUseKrispjsSettingVersion !== eH && (e.ncUseKrispjsSettingVersion = eH, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eV && (e.ncUseKrispSettingVersion = eV, e.noiseSuppression = false, e.noiseCancellation = true)
  }), nd()
}

function nc(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tJ(t);
  return Object.assign(r, e), !__OVERLAY__ && n && O.K.set(eF, e8), r
}

function nu() {
  Chunk433517.K.remove(eF), location.reload()
}

function nd() {
  let e = t$();
  e5.setAudioInputDevice(module.inputDeviceId), e5.setAudioOutputDevice(module.outputDeviceId), t4(), e5.setInputVolume(module.inputVolume), e5.setOutputVolume(module.outputVolume), e5.setAecDump(module.aecDumpEnabled), e5.setSidechainCompression(module.sidechainCompression), e5.setSidechainCompressionStrength(module.sidechainCompressionStrength), e5.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function nf() {
  e7 || e5.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function np(e) {
  return {
    id: eL.w5,
    index: 0,
    name: e,
    disabled: true,
    guid: true,
    hardwareId: true,
    containerId: true
  }
}

function n_(e, t) {
  if (0 === e.length) {
    let e = np(t);
    return {
      [e.id]: e
    }
  }
  return m()(e).map(e => ({
    id: e.id,
    index: e.index,
    name: e.name,
    disabled: false,
    facing: e.facing,
    guid: e.originalId,
    hardwareId: e.hardwareId,
    containerId: e.containerId,
    effects: e.effects
  })).keyBy("id").value()
}

function nm(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eL.w5]) ? r : m()(e).values().first();
  return null != i ? i.id : t
}

function nh(e) {
  let t = tn;
  if (tn = n_(e, ej.intl.string(ej.t["/QIjDA"])), !m().isEqual(tn, t)) {
    let e = t$(),
      t = nm(tn, e.inputDeviceId);
    e5.setAudioInputDevice(t), e5.eachConnection(ne)
  }
}

function ng(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nE(e) {
  e5.eachConnection(t => {
    t.context === eL.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nb(e) {
  let t = tr;
  if (tr = n_(e, ej.intl.string(ej.t.xlUg0v)), !m().isEqual(tr, t)) {
    let e = t$(),
      n = nm(tr, e.outputDeviceId);
    e5.setAudioOutputDevice(n);
    let r = ng(t),
      i = ng(tr);
    r !== i && nE(i)
  }
}

function ny(e) {
  tE = e.length > 0;
  let t = ti;
  if (ti = n_(e, ej.intl.string(ej.t.WKWARY)), tu && !m().isEqual(ti, t)) {
    var n;
    let e = true !== ti[td],
      r = td === eL.w5 && (null == (n = t[eL.w5]) ? true : n.disabled);
    t4(e || r)
  }
}

function nO() {
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
      } = t$(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], e5.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], e5.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    nc({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nv(e) {
  if (null == r) return eZ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : e_.Z.getAudioPid(e),
      n = "";
    return null != t && (n = e_.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nS(e, t) {
  (0, eh.isWindows)() && e > 1 && T.YT(e, {
    soundshare_session: t
  }).then(t => {
    null == t || j.ZP.shouldContinueWithoutElevatedProcessForPID(e) || S.Z.wait(() => {
      S.Z.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function nI(e) {
  i = e.sessionId, to = false, tc = false;
  let t = t$();
  if (na() && (no() ? rS(eL.iA.AUTOMATIC) : t.automaticAudioSubsystem && rI()), e5.supports(eL.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, eh.isDesktop)() ? e = (0, G.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, eh.isIOS)() || (0, eh.isAndroid)()) && (e = (0, Z.W)({
      location: "handleConnectionOpen"
    }).enabled), e5.setOffloadAdmControls(e)
  }(0, ed.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, eh.isDesktop)() && (ef.Z.getLastInitAttemptMayHaveCrashed() ? (S.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eL.Yn.DEFAULT,
    playSoundEffect: true
  }), nc({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), nO()
}

function nT(e) {
  let {
    mediaEngineState: t
  } = e;
  e8 = t.settingsByContext, tn = t.inputDevices, tr = t.outputDevices, tB = t.appSupported, tI = t.krispModuleLoaded, s = t.krispVersion, te = t.goLiveContext
}

function nC() {
  i = null
}

function nA() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.NJ.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nN(e) {
  switch (e.state) {
    case eP.hes.CONNECTING:
      nf();
      break;
    case eP.hes.RTC_CONNECTING:
      ty = false, tO = false;
      break;
    case eP.hes.RTC_CONNECTED:
      t4();
      break;
    case eP.hes.DISCONNECTED:
      nk(), nU()
  }
  ns.update()
}

function nP(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      to = t.mute || t.suppress, tc = t.deaf, e5.eachConnection(t3);
      let e = null != t.guildId && null != t.channelId && null != tw && tw !== t.channelId,
        n = !tv && null == t.channelId;
      return t4(!e && !n && tu), tw = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eO.default.getId() || null != eT.Z.getChannelId() || t4(false, null), e
  }, false)
}

function nR(e) {
  let {
    mute: t
  } = e;
  ts = t, e5.eachConnection(t3)
}

function nw(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = t$(t);
  if (t === eL.Yn.DEFAULT && (ei.Z.requestPermission(ew.Eu.AUDIO), tl)) returnfalse;
  (r = !i && !r) || (i = false), n || (tp = true), nc({
    mute: r,
    deaf: i
  }, t), e5.eachConnection(t3)
}

function nD(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  nc({
    mute: n
  }, t), r || (tp = true), e5.eachConnection(t3)
}

function nx(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eD.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nO(true)
}

function nL(e) {
  let {
    context: t
  } = e;
  nc({
    deaf: !t$(t).deaf
  }, t), e5.eachConnection(t3)
}

function nj(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eO.default.getId()) return;
  let {
    localMutes: r
  } = t$(t);
  r[n] ? delete r[n] : r[n] = true, nc({
    localMutes: r
  }, t), e5.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nM(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: f
  } = e;
  p()(!(d && f), "These are not allowed to both be true.");
  let _ = u === eP.ZUi.DISABLED,
    {
      disabledLocalVideos: m
    } = t$(l),
    h = null != (t = m[c]) && t,
    g = tG.has(c),
    E = u === eP.ZUi.AUTO_ENABLED || u === eP.ZUi.MANUAL_ENABLED;
  eZ.info("disableVideo=".concat(_, " currentlyDisabled=").concat(h, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), p()(!(g && !h), "If you are auto-disabled, then you are also disabled.");
  let b = _ !== h,
    y = l === eL.Yn.DEFAULT,
    O = f && b && y,
    v = d && b && y;
  eZ.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: S
  } = t$(l);
  if (S[c] === eP.ZUi.AUTO_PROBING && u === eP.ZUi.AUTO_ENABLED && (0, er.Z)(c, _ ? eL.fC.AUTO_DISABLE : eL.fC.AUTO_ENABLE, E), S[c] = u, nc({
      videoToggleStateMap: S
    }, l, d), u === eP.ZUi.AUTO_PROBING ? null == (n = eT.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eT.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tZ || (eZ.info("isAutoDisableAllowed=".concat(tZ, " - disabling VideoHealthManager")), null == (a = eT.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!_ && !g || _ && !tZ) return;
    (0, er.Z)(c, _ ? eL.fC.AUTO_DISABLE : eL.fC.AUTO_ENABLE, E), _ ? tG.add(c) : tG.delete(c)
  } else v && (g && !_ ? (eZ.info("disallowing auto-disable for this session because of manual override by user"), tZ = false, null == (s = eT.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, er.Z)(c, eL.fC.MANUAL_REENABLE, E)) : (0, er.Z)(c, _ ? eL.fC.MANUAL_DISABLE : eL.fC.MANUAL_ENABLE, E));
  y && !_ && tG.delete(c), _ ? m[c] = true : delete m[c], nc({
    disabledLocalVideos: m
  }, l, d), e5.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = m[c]) && t)
  }, l)
}

function nk() {
  if (0 === tG.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = t$(module);
  tG.forEach(n => {
    p()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e5.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tG.clear(), nc({
    disabledLocalVideos: exports
  }, module, false)
}

function nU() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = t$(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  nc({
    videoToggleStateMap: exports
  }, module, false)
}

function nG(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eO.default.getId()) return;
  let i = t === eL.Yn.STREAM ? eL.Yh : eL.Qx,
    {
      localVolumes: a
    } = t$(t);
  r === i ? delete a[n] : a[n] = r, nc({
    localVolumes: a
  }, t), e5.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nZ(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = t$(t);
  a[n] = {
    left: r,
    right: i
  }, nc({
    localPans: a
  }, t), e5.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nF(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  nc({
    mode: n,
    modeOptions: r
  }, t), e5.eachConnection(t0), ns.update()
}

function nB(e) {
  let {
    volume: t
  } = e;
  nc({
    inputVolume: t1(t)
  }), e5.setInputVolume(t)
}

function nV(e) {
  let {
    volume: t
  } = e;
  nc({
    outputVolume: t
  }), e5.setOutputVolume(t)
}

function nH(e) {
  let {
    id: t
  } = e;
  t = nm(tn, t), tt = performance.now(), nc({
    inputDeviceId: t
  }), e5.setAudioInputDevice(t), e5.eachConnection(ne)
}

function nY(e) {
  let {
    id: t
  } = e;
  nc({
    outputDeviceId: t = nm(tr, t)
  }), e5.setAudioOutputDevice(t)
}

function nW(e) {
  let {
    id: t
  } = e;
  nc({
    videoDeviceId: t = nm(ti, t)
  }), t4()
}

function nK(e) {
  let {
    inputProfile: t
  } = e;
  nc({
    activeInputProfile: t
  });
  let n = t$();
  e5.eachConnection(e => {
    t0(e), ne(e)
  }), e5.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), ns.update(), n4()
}

function nz(e) {
  return e9 !== e.required && (e9 = e.required, e.required || e5.interact(), true)
}

function nq(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  nh(t), nb(n), ny(r)
}

function nQ(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  nc({
    inputVolume: t1(t),
    outputVolume: n
  })
}

function nX(e) {
  var t;
  let n = t$(),
    r = e5.getAudioSubsystem(),
    i = e5.getAudioLayer(),
    a = nm(tn, n.inputDeviceId),
    o = null == (t = tn[a]) ? true : t.name,
    s = t7(n.noiseCancellation);
  ep.default.track(eP.rMx.VOICE_PROCESSING, {
    echo_cancellation: n.echoCancellation,
    noise_cancellation: n.noiseCancellation,
    noise_suppression: n.noiseSuppression,
    automatic_gain_control: n.automaticGainControl,
    location: e,
    bypass_system_input_processing: n.bypassSystemInputProcessing,
    audio_subsystem: r,
    audio_layer: i,
    input_device: o,
    effective_noise_cancellation: s
  })
}

function nJ(e) {
  let t = nc({
    echoCancellation: e.enabled
  });
  e5.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), n4(), nX(e.location)
}

function n$(e) {
  n1(e.enabled)
}

function n0(e) {
  let t = nc({
    sidechainCompressionStrength: e.strength
  });
  e5.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function n1(e) {
  let t = nc({
    sidechainCompression: e
  });
  e5.setSidechainCompression(t.sidechainCompression)
}

function n3(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tF.add(n) : tF.delete(n), n2(), n4()
}

function n2() {
  let e = !tF.has("voice_filter_preview") && !tF.has("mic_test");
  e5.setMaybePreprocessMute(module)
}

function n4() {
  let e = t$(),
    t = tF.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = t8(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tA,
    c = tF.has("voice_filter") && 1 === tF.size;
  e5.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function n5() {
  var e, t, n, r;
  if (!e5.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  (null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) != null && (null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i) && (tK = true, tW = e5.supports(Chunk65154.AN.GAMESCOPE_CAPTURE))
}

function n8(e) {
  let t = nc({
    noiseSuppression: e.enabled
  });
  e5.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), n4(), nX(e.location)
}

function n6(e) {
  let t = nc({
    automaticGainControl: e.enabled
  });
  e5.eachConnection(e => t6(e, t.automaticGainControl)), n4(), nX(e.location)
}

function n7(e) {
  let t = nc({
    noiseCancellation: e.enabled
  });
  e5.eachConnection(e => t9(e, t.noiseCancellation)), n4(), nX(e.location)
}

function n9(e) {
  ea.Z.setKrispModelOverride(e.model), c = e.model, n4()
}

function re(e) {
  var t;
  (0, eh.isWeb)() || (tC = e.enabled, null == (t = e5.setNoiseCancellationEnableStats) || t.call(e5, e.enabled))
}

function rt(e) {
  nc({
    silenceWarning: e.enabled
  }), ns.update()
}

function rn(e) {
  e5.setDebugLogging(e.enabled)
}

function rr(e) {
  let {
    level: t
  } = e;
  l = t, ea.Z.setKrispSuppressionLevel(t)
}

function ri(e) {
  nc({
    videoHook: e.enabled
  })
}

function ra(e) {
  nc({
    experimentalSoundshare2: e.enabled
  })
}

function ro(e) {
  let {
    enabled: t
  } = e;
  nc({
    useSystemScreensharePicker: t
  })
}

function rs(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = nc({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  e5.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function rl(e) {
  let {
    enabled: t
  } = e;
  nc({
    qos: t
  }), e5.eachConnection(e => e.setQoS(t))
}

function rc() {
  nu()
}

function ru(e) {
  let {
    inputDetected: t
  } = e;
  tb = t, !ty && tb && (ty = true, ns.update())
}

function rd(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tl) returnfalse;
  tl = n, e5.eachConnection(t3)
}

function rf(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === ew.PQ.ACCEPTED;
  switch (n) {
    case ew.Eu.AUDIO:
      tk = true, e5.eachConnection(t3);
      break;
    case ew.Eu.CAMERA:
      !r && tu && t4(false);
      break;
    default:
      returnfalse
  }
}

function rp() {
  return tI || false
}
async function r_() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tI = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tT = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eZ.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), nc({
      noiseCancellation: false
    })
  } finally {
    tS = false
  }
}

function rm() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function rh() {
  !rm() || __OVERLAY__ || tS || tI ? (0, Chunk358085.isWeb)() && e5.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tI = true, r.emitChange()) : (0, Chunk358085.isWeb)() && nc({
    noiseCancellation: false
  }) : (tS = true, r_())
}

function rg(e) {
  let {
    enabled: t
  } = e;
  ep.default.track(eP.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tA ? tA : null,
    enabled: t
  }), nc({
    voiceFilterPlaybackEnabled: t
  })
}

function rE(e) {
  let {
    newVoiceFilterId: t
  } = e;
  nc({
    mostRecentlyRequestedVoiceFilter: t
  }), e5.eachConnection(e => e.setVoiceFilterId(t))
}

function rb() {
  nc({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function ry(e) {
  let {
    voiceFilterId: t
  } = e;
  tP = tA, tR = tN, tA = t, tN = null === t ? null : Date.now()
}

function rO(e) {
  let t = e.bypassEnabled;
  nc({
    bypassSystemInputProcessing: t
  }), e5.setAudioInputBypassSystemProcessing(t), nX(e.location)
}

function rv(e) {
  rS(e.subsystem)
}

function rS(e) {
  e === eL.iA.AUTOMATIC ? (nc({
    automaticAudioSubsystem: true
  }), rI()) : (nc({
    automaticAudioSubsystem: false
  }), e5.setAudioSubsystem(e))
}

function rI() {
  e5.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rT(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && t4(i, null), null != t || null == n) {
    tv = false;
    return
  }
  if (tv) return;
  tv = true;
  let a = t$();
  (a.mute || a.deaf) && (nc({
    deaf: false,
    mute: false
  }), e5.eachConnection(t3))
}

function rC(e) {
  let {
    application: t
  } = e;
  e6.add(t.id)
}

function rA(e) {
  let {
    application: t
  } = e;
  e6.delete(t.id)
}

function rN(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e7 = false, e5.eachConnection(t3);
      break;
    case "video":
      t4(false)
  }
}

function rP(e) {
  e7 = e.enabled, e.unmute && nc({
    mute: false,
    deaf: false
  }), e5.eachConnection(t3)
}

function rR(e) {
  let {
    enabled: t
  } = e;
  ei.Z.requestPermission(ew.Eu.CAMERA), t4(t)
}

function rw(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e;
  if (!(0, P.CY)() || null == I.Z) returnfalse;
  let a = null,
    s = null,
    l = e_.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: a,
    soundshareSession: s
  } = nv(l));
  let c = {
    desktopSource: {
      id: t,
      sourcePid: l,
      soundshareId: a,
      soundshareSession: s
    },
    quality: i
  };
  null != o && (e5.setClipsSource(null), (0, eh.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != a && nS(a, s), o = c;
  let u = tq(),
    d = t$().videoHook;
  e5.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: d,
      useGraphicsCapture: nn(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: ni(),
      videoHookStaleFrameTimeoutMs: ez,
      graphicsCaptureStaleFrameTimeoutMs: eq,
      hdrCaptureMode: u
    },
    quality: i,
    applicationName: n
  })
}

function rD(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, e5.setClipsSource(null))
}

function rx(e) {
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
      s = null != (t = a.context) ? t : eL.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : e_.Z.getPidFromDesktopSource(i);
    eh.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nv(c), null != e && nS(e, r)), t2(s), t4(s === eL.Yn.STREAM && tu, {
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
    let e = null != (r = a.context) ? r : eL.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eL.Yn.STREAM && tu,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    t4(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else t4(tu, null)
}

function rL(e) {
  let {
    section: t
  } = e;
  return t === eP.oAB.VOICE && nf(), false
}

function rj() {
  return e5.eachConnection(ne), false
}

function rM(e) {
  let {
    enabled: t
  } = e, n = nc({
    aecDumpEnabled: t
  });
  e5.setAecDump(n.aecDumpEnabled)
}

function rk(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e8 = Object.values(eL.Yn).reduce((e, n) => {
    let r = n,
      i = e2();
    return e[r] = m().merge(i, t[r]), e
  }, {}), O.K.set(eF, e8), nd()
}

function rU(e) {
  let {
    state: t
  } = e, n = L.Z.isEnabled();
  if (t === eP.$7l.BACKGROUND && tu && !n) tg = true, t4(false);
  else {
    if (t !== eP.$7l.ACTIVE || !tg) returnfalse;
    tg = false, t4(true)
  }
  returntrue
}

function rG(e) {
  e5.eachConnection(t => t.setBitRate(e.bitrate))
}

function rZ() {
  if (!tu && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  t4(false, null)
}

function rF() {
  return !!tD && (tD = false, true)
}

function rB(e) {
  e5.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rV(e) {
  let {
    settings: t
  } = e;
  e5.applyMediaFilterSettings(t).finally(() => {
    tx = false, r.emitChange()
  })
}

function rH() {
  tx = true
}

function rY() {
  tx = false
}

function rW(e) {
  tH = e.enabled
}

function rK() {
  if ((0, Chunk358085.isDesktop)() && Chunk358085.isPlatformEmbedded && !tz) {
    tz = true;
    let e = async () => {
      let t = await new Promise(e => {
        eb.ZP.pollQueueMetrics(t => {
          e(t)
        })
      });
      exports.periodMs = Chunk65154.rp;
      let n = rq(exports);
      null !== require && Chunk626135.default.track(Chunk981631.rMx.VOICE_QUEUE_METRICS, require), setTimeout(module, Chunk65154.rp)
    };
    setTimeout(module, Chunk65154.rp)
  }
}
class rz extends(d = Chunk442837.ZP.Store) {
  initialize() {
    nt(), nl(), rh(), nU(), rK(), tB = {
      [Chunk65154.AN.VIDEO]: e5.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: e5.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: e5.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk615830.Z, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return e5.supports(e)
  }
  supportsInApp(e) {
    return tB[e] || e5.supports(e)
  }
  isSupported() {
    return e5.supported()
  }
  isNoiseSuppressionSupported() {
    return e5.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return rp()
  }
  isNoiseCancellationError() {
    return tD
  }
  isAutomaticGainControlSupported() {
    return e5.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !no() && (e5.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || e5.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return e5.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e5.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return rp()
  }
  isAecDumpSupported() {
    return e5.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return e5.supports(Chunk65154.AN.VIDEO) && e5.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(tw)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && e0 && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return t$().aecDumpEnabled
  }
  getMediaEngine() {
    return e5
  }
  getVideoComponent() {
    return e5.Video
  }
  getCameraComponent() {
    return e5.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return tC
  }
  isEnabled() {
    return e7
  }
  isMute() {
    return this.isSelfMute() || to
  }
  isDeaf() {
    return this.isSelfDeaf() || tc
  }
  hasContext(e) {
    return null != e8[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && ts
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || t$(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && tl
  }
  shouldSkipMuteUnmuteSound() {
    return tp
  }
  notifyMuteUnmuteSoundWasSkipped() {
    tp = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tH
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || t$(module).deaf
  }
  isVideoEnabled() {
    return tu && tE
  }
  isVideoAvailable() {
    return Object.values(ti).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return te === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return te === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
    return e !== eO.default.getId() && (t$(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return e5.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
    return null != (t = t$(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
    return null != (t = t$(n).videoToggleStateMap[e]) ? t : eP.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
    return t === eL.Yn.DEFAULT && tG.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tG.size > 0
  }
  isMediaFilterSettingLoading() {
    return tx
  }
  isNativeAudioPermissionReady() {
    return tk
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return te
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return tt
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT,
      n = t$(t).localPans[e];
    return null != n ? n : eK
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT,
      n = t === eL.Yn.STREAM ? eL.Yh : eL.Qx,
      r = t$(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return t$().inputVolume
  }
  getOutputVolume() {
    return t$().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return t$(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return t$(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tA
  }
  getActiveVoiceFilterAppliedAt() {
    return tN
  }
  getPreviousVoiceFilter() {
    return tP
  }
  getPreviousVoiceFilterAppliedAt() {
    return tR
  }
  getMostRecentlyRequestedVoiceFilter() {
    return t$().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return t$().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return m().each(e8, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eP.pM4.PUSH_TO_TALK && e6.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return nm(tn, t$().inputDeviceId)
  }
  getOutputDeviceId() {
    return nm(tr, t$().outputDeviceId)
  }
  getVideoDeviceId() {
    return nm(ti, t$().videoDeviceId)
  }
  getInputDevices() {
    return tn
  }
  getOutputDevices() {
    return tr
  }
  getVideoDevices() {
    return ti
  }
  getEchoCancellation() {
    let e = t$();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return e5.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && t$().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return t$().sidechainCompressionStrength
  }
  getH265Enabled() {
    return t$().h265Enabled
  }
  hasH265HardwareDecode() {
    return null !== tj && tj
  }
  getLoopback() {
    return tF.size > 0
  }
  getLoopbackReasons() {
    return tF
  }
  getNoiseSuppression() {
    let e = t$();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = t$();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return t$().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return t$().noiseCancellation
  }
  getHardwareEncoding() {
    return e0
  }
  getEnableSilenceWarning() {
    return t$().silenceWarning
  }
  getDebugLogging() {
    return e5.getDebugLogging()
  }
  getQoS() {
    return t$().qos
  }
  getAttenuation() {
    return t$().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return t$().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return t$().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return na() && t$().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : e5.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return e5.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return t$().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return t$(module)
  }
  getState() {
    return {
      settingsByContext: e8,
      inputDevices: tn,
      outputDevices: tr,
      appSupported: tB,
      krispModuleLoaded: tI,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: te
    }
  }
  getInputDetected() {
    return tb
  }
  getNoInputDetectedNotice() {
    return tO
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    e5.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return e9
  }
  getVideoHook() {
    return t$().videoHook
  }
  supportsVideoHook() {
    return e5.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = t$().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return e5.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && g().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && e5.supports(Chunk65154.AN.SOUNDSHARE) && g().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = t$().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return e5.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tK
  }
  getUseGamescopeCapture() {
    return tW
  }
  getEverSpeakingWhileMuted() {
    return t_
  }
  getSpeakingWhileMuted() {
    return tm
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tT
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = t$().modeOptions.vadKrispActivationThreshold) ? module : eW
  }
  hasActiveCallKitCall() {
    return tY
  }
  setHasActiveCallKitCall(e) {
    tY = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? e5.supports(Chunk65154.AN.SOUNDSHARE) && g().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && ni() : (0, Chunk358085.isWindows)() ? e5.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && e5.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
  }
  getSystemMicrophoneMode() {
    if ((0, Chunk358085.isWindows)()) {
      var e, t;
      return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = exports.effects) ? true : module.find(e => e === e1)
    }
    if ((0, Chunk358085.isMac)() || (0, Chunk358085.isIOS)()) return u
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
    }).loadWasmModule), e5.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!tL && (tL = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      e5.fetchAsyncResources(module).catch(e => {
        eZ.warn("DAVE preload failed:", e), eE.Z.captureException(e)
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
    let e = e5.getSupportedSecureFramesProtocolVersion();
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
    return tV
  }
}

function rq(e) {
  if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
  let t = {
    metrics_period_ms: e.periodMs,
    total_tasks: 0,
    total_exec_time_ns: 0,
    queue_name: e.queueName
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
eM(rz, "displayName", "MediaEngineStore");
let rQ = r = new rz(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rT,
  VOICE_STATE_UPDATES: nP,
  CONNECTION_OPEN: nI,
  CONNECTION_CLOSED: nC,
  POST_CONNECTION_OPEN: nA,
  RTC_CONNECTION_STATE: nN,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nR,
  AUDIO_TOGGLE_SELF_MUTE: nw,
  AUDIO_SET_SELF_MUTE: nD,
  AUDIO_TOGGLE_SELF_DEAF: nL,
  AUDIO_TOGGLE_LOCAL_MUTE: nj,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nM,
  AUDIO_SET_LOCAL_VOLUME: nG,
  AUDIO_SET_LOCAL_PAN: nZ,
  AUDIO_SET_MODE: nF,
  AUDIO_SET_INPUT_VOLUME: nB,
  AUDIO_SET_OUTPUT_VOLUME: nV,
  AUDIO_SET_INPUT_DEVICE: nH,
  AUDIO_SET_OUTPUT_DEVICE: nY,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nK,
  AUDIO_SET_ECHO_CANCELLATION: nJ,
  AUDIO_SET_SIDECHAIN_COMPRESSION: n$,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n0,
  AUDIO_SET_LOOPBACK: n3,
  AUDIO_SET_NOISE_SUPPRESSION: n8,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n6,
  AUDIO_SET_NOISE_CANCELLATION: n7,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: n9,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: rt,
  AUDIO_SET_DEBUG_LOGGING: rn,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rr,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: re,
  MEDIA_ENGINE_SET_VIDEO_HOOK: ri,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ra,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ro,
  AUDIO_SET_ATTENUATION: rs,
  AUDIO_SET_QOS: rl,
  MEDIA_ENGINE_DEVICES: nq,
  AUDIO_VOLUME_CHANGE: nQ,
  AUDIO_RESET: rc,
  AUDIO_INPUT_DETECTED: ru,
  AUDIO_SET_SUBSYSTEM: rv,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rO,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rP,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rR,
  MEDIA_ENGINE_PERMISSION: rN,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rx,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nW,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nz,
  USER_SETTINGS_MODAL_INIT: rL,
  USER_SETTINGS_MODAL_SET_SECTION: rL,
  CERTIFIED_DEVICES_SET: rj,
  RPC_APP_CONNECTED: rC,
  RPC_APP_DISCONNECTED: rA,
  OVERLAY_INITIALIZE: nT,
  APP_STATE_UPDATE: rU,
  SET_CHANNEL_BITRATE: rG,
  SET_VAD_PERMISSION: rd,
  SET_NATIVE_PERMISSION: rf,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rB,
  MEDIA_ENGINE_SET_AEC_DUMP: rM,
  MEDIA_ENGINE_RESET_SETTINGS: rk,
  CHANNEL_DELETE: rZ,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rF,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rV,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rH,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rY,
  USER_SETTINGS_PROTO_UPDATE: nx,
  CLIPS_INIT: rw,
  CLIPS_SETTINGS_UPDATE: rD,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rW,
  VOICE_FILTER_REQUEST_SWITCH: rE,
  VOICE_FILTER_LOOPBACK_TOGGLE: rg,
  VOICE_FILTER_APPLIED: ry,
  VOICE_FILTER_DOWNLOAD_FAILED: rb,
  VOICE_FILTER_APPLY_FAILED: rb
})