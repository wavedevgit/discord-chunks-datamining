/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rH
}), require("./388685.js"), require("./953529.js"), require("./457542.js"), require("./539854.js"), require("./642613.js"), require("./49124.js"), require("./337869.js");
var u, Chunk512722 = require("./512722.js"),
  f = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  _ = require.n(Chunk392711),
  Chunk209739 = require("./209739.js"),
  h = require.n(Chunk209739),
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

function eL(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ej(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eL(e, t, n[t])
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

function ek(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eM(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eU = new Chunk710845.Z("MediaEngineStore"),
  eG = "MediaEngineStore",
  eZ = 4,
  eF = 1,
  eB = 1,
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
  eQ = 2 * Chunk70956.Z.Millis.SECOND,
  eX = true,
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
    videoHook: e1.supports(Chunk65154.AN.VIDEO_HOOK),
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
eU.enableNativeLogger(true);
let e3 = {},
  e2 = new Set([Chunk65154.Yn.DEFAULT]),
  e4 = e1.supports(Chunk65154.AN.AUTO_ENABLE),
  e5 = false,
  e8 = Chunk65154.Yn.STREAM,
  e6 = performance.now(),
  e7 = {
    [Chunk65154.w5]: ns("No Input Devices")
  },
  e9 = {
    [Chunk65154.w5]: ns("No Output Devices")
  },
  te = {
    [Chunk65154.w5]: ns("No Video Devices")
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
  tp = false,
  t_ = null,
  tm = false,
  th = false,
  tg = false,
  tE = false,
  tb = false,
  ty = [],
  tO = false,
  tv = null,
  tS = null,
  tI = null,
  tT = null,
  tC = null,
  tA = false,
  tN = false,
  tP = false,
  tR = null,
  tw = null,
  tD = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tx = false,
  tL = new Set,
  tj = tx,
  tM = new Set,
  tk = {},
  tU = null,
  tG = true,
  tZ = false,
  tF = false,
  tB = false,
  tV = false;

function tH() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}
async function tY() {
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

function tW() {
  return null != tw ? tw : "undefined" != typeof window ? tw = tY().then(e => (tR = e, e)) : Promise.resolve(false)
}

function tK() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = e3[module];
  return null == exports && (t = e$(), e3[module] = exports), exports
}

function tz() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tK(r),
    a = e0[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = ej({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return ek(ej({}, i, a), {
    modeOptions: o
  })
}

function tq(e) {
  var t, n;
  let r = tz(e.context),
    i = r.mode;
  e.context === eD.Yn.DEFAULT && ((0, es.f)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eA.pM4.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eA.pM4.VOICE_ACTIVITY), (0, Q.I)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && rs(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eH,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tQ(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Qx;
  return _().clamp(e, 0, t)
}

function tX(e) {
  let t = tz(e.context),
    n = !e4 || t.mute || t.deaf;
  e.context === eD.Yn.DEFAULT ? n = n || tt || tn || tr || !er.Z.didHavePermission(eP.Eu.AUDIO) : e.context === eD.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eD.Yn.DEFAULT && T.Z.updateNativeMute()
}

function tJ(e) {
  e !== e8 && (null != a && e1.setGoLiveSource(null, e8), e8 = e)
}

function t$() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : ta,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), e1.setGoLiveSource(null, e8)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && e1.setGoLiveSource(null, e8), ta || i) {
    let e = tz().videoDeviceId;
    ta && module === Chunk65154.w5 && ts === Chunk65154.w5 && to !== Chunk65154.Av ? e = to : ts = module, to = (ta = i) ? nc(te, module) : Chunk65154.Av, e1.setVideoInputDevice(to)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tH(),
        n = tz().videoHook,
        i = t8(),
        a = i ? t6() ? Chunk70722.zj : Chunk70722.ZM : 0,
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
          allowScreenCaptureKit: t7(),
          videoHookStaleFrameTimeoutMs: eW,
          graphicsCaptureStaleFrameTimeoutMs: eK,
          hdrCaptureMode: exports,
          enableGlobalFramePoolLock: (0, Chunk27955.T)({
            location: "updateVideo"
          }).enabled
        },
        quality: module
      }, e8)
    }
    null != o.cameraSource && e1.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e8)
  }
}

function t0(e) {
  switch (e) {
    case eD.H3.CPU_OVERUSE:
      return w.Nk.NoiseCancellerCpuOveruse;
    case eD.H3.FAILED:
      return w.Nk.NoiseCancellerFailed;
    case eD.H3.VAD_CPU_OVERUSE:
      return w.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function t1(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return ej({
    enabled: e
  }, t)
}

function t3(e, t) {
  e.setAutomaticGainControl(t1(t))
}
async function t2(e, t) {
  if ((0, e_.isIOS)() || (0, e_.isMac)()) {
    let e = await e1.getSystemMicrophoneMode();
    "" !== e && "standard" !== e && k.Z.getConfig({
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
  } = (0, z.$)({
    location: "setNoiseCancellation"
  });
  e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i)
}

function t4(e) {
  let t = tz(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eO.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eO.Z.hasNoiseSuppression(n) || t.noiseSuppression), t3(e, eO.Z.hasAutomaticGainControl(n) || t.automaticGainControl), t2(e, t.noiseCancellation), e.setVoiceFilterId(tv), (0, e_.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function t5() {
  e1.on(Chunk46973.aB.Connection, e => {
    tq(e), tX(e), t4(e);
    let t = tz();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
    let n = (0, K.D)({
      location: "setupMediaEngine"
    }).treatment;
    n === K.$.NoSoftwareDecode ? (e.setExperimentFlag(eD.V8.H265_HARDWARE_ONLY, true), (0, e_.isWindows)() ? tW().then(t => {
      e.setExperimentFlag(eD.V8.H265_HARDWARE_DECODE_AVAILABLE, t)
    }) : (0, e_.isMac)() && e.setExperimentFlag(eD.V8.H265_HARDWARE_DECODE_AVAILABLE, true)) : n === K.$.Disabled && (e.setExperimentFlag(eD.V8.H265_HARDWARE_ONLY, true), e.setExperimentFlag(eD.V8.H265_HARDWARE_DECODE_AVAILABLE, false));
    let i = eS.Z.getGuildId(),
      {
        muteBeforeProcessing: o,
        pttBeforeProcessing: s,
        skipEncode: l
      } = (null != i ? V.Z : B.Z).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != i ? i : true
      }, {
        autoTrackExposure: true
      });
    o && e.setExperimentFlag(eD.V8.MUTE_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eD.V8.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(eD.V8.SKIP_ENCODE, true), (0, q.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eD.V8.LOW_LATENCY_RATE_CONTROL, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(eD.V8.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(eD.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(eD.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eD.Yn.STREAM) {
      let t = nd(e9);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = W.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, e_.isWindows)() ? (null == tU ? true : tU.startsWith("NVIDIA")) || (null == tU ? true : tU.startsWith("AMD")) ? e.setExperimentFlag(eD.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eD.V8.SIGNAL_AV1_DECODE, true) : ((0, e_.isMac)() || (0, e_.isLinux)()) && e.setExperimentFlag(eD.V8.SIGNAL_AV1_DECODE, true), (0, e_.isWindows)() && e.setExperimentFlag(eD.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, e_.isWeb)()) {
      let {
        enabled: t
      } = (0, H.A)("MediaEngineStore");
      e.setExperimentFlag(eD.V8.BROWSER_HEVC, t)
    }
    if ((0, e_.isWindows)() && (0, et.C)("MediaEngineStore").enabled && e.setExperimentFlag(eD.V8.WMF_GPU_ENCODE, true), e1.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, A.Z)(r)) {
      let {
        enableViewerClipping: t
      } = ee.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eD.ux)
    }
    for (let n of (t = tz(e.context), e.setPostponeDecodeLevel(eq), Object.keys(t.localMutes))) n !== eb.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eb.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
    for (let n of Object.keys(t.localPans)) {
      let r = t.localPans[n];
      e.setLocalPan(n, r.left, r.right)
    }
    for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
    e.on(b.Sh.Speaking, (t, n, r, i) => {
      v.Z.dispatch({
        type: "SPEAKING",
        context: e.context,
        userId: t,
        speakingFlags: n,
        voiceDb: i
      })
    }), e.context === eD.Yn.DEFAULT && (tc = false, tu = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      tc = true, tu = true, r.emitChange(), td.stop(), td.start(eQ, () => {
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
      (null == a ? true : a.desktopSource) != null && ed.default.track(eA.rMx.VIDEOHOOK_INITIALIZED, ej({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, j.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      eU.warn("noisecancellererror event: ".concat(e)), (0, w.kr)({
        type: w.u.NOISE_CANCELLER_ERROR,
        underlyingError: t0(e)
      }), tA = true, ed.default.track(eA.rMx.VOICE_PROCESSING, {
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
      eU.warn("voiceactivitydetectorerror event: ".concat(e)), (0, w.kr)({
        type: w.u.NOISE_CANCELLER_ERROR,
        underlyingError: t0(e)
      }), ed.default.track(eA.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eD.Yn.DEFAULT,
        mode: eA.pM4.VOICE_ACTIVITY,
        options: ek(ej({}, tz(eD.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      ed.default.track(eA.rMx.SDP_ERROR, {
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
    }), e.setBitRate(ey.Z.bitrate), e.applyVideoQualityMode(eC.Z.mode), e1.supports(eD.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e1.setAsyncVideoInputDeviceInit((0, Z.p)("setupMediaEngine").enabled)
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
    tD = true, v.Z.dispatch({
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
    eU.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), e1.on(Chunk46973.aB.VideoInputInitialized, e => {
    ed.default.track(eA.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ep.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eS.Z.getMediaSessionId(),
      rtc_connection_id: eS.Z.getRTCConnectionId()
    })
  }), e1.on(Chunk46973.aB.AudioInputInitialized, e => {
    ed.default.track(eA.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ep.Z.Millis.SECOND),
      rtc_connection_id: eS.Z.getRTCConnectionId()
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
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && I.pn(t), o = null)
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
    ed.default.track(eA.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), e1.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? w.u.VIDEO_ENCODE_ERROR : w.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, w.kr)(t === w.u.VIDEO_ENCODE_ERROR ? ek(ej({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : ek(ej({
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
    let t = rV(e);
    null !== t && ed.default.track(eA.rMx.VOICE_QUEUE_METRICS, t)
  }), e1.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nX(), n$(), e1.supports(Chunk65154.AN.ASYNC_CLIPS_SOURCE_DEINIT) && e1.setAsyncClipsSourceDeinit((0, Chunk502450.C)("setupMediaEngine").enabled), nt.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tU = e.gpu_brand)
  }), e1.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    e1.eachConnection(t4)
  })
}

function t8() {
  return (0, Chunk358085.isWindows)() && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function t6() {
  return (0, Chunk358085.isWindows)() && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function t7() {
  return (0, Chunk358085.isMac)() && e1.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function t9() {
  return (0, Chunk358085.isWindows)() && e1.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && e1.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function ne() {
  return e1.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let nt = new class {
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
    let e = tz();
    !tm && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eL(this, "stateChangeTimeout", true), eL(this, "noVoiceTimeout", 5e3), eL(this, "voiceTimeout", 1500), eL(this, "started", false), eL(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (th = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function nn() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eG, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), e3 = null != (e = Chunk433517.K.get(eG)) ? module : {}, _().each(e3, e => {
    if (_().defaultsDeep(e, e$()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eE.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eZ && (e.vadUseKrispSettingVersion = eZ, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = ez)
    }
    e1.supports(eD.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eV && (e.sidechainCompressionSettingVersion = eV, e.sidechainCompression = true), (0, e_.isWeb)() ? e.ncUseKrispjsSettingVersion !== eB && (e.ncUseKrispjsSettingVersion = eB, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eF && (e.ncUseKrispSettingVersion = eF, e.noiseSuppression = false, e.noiseCancellation = true)
  }), na()
}

function nr(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tK(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eG, e3), r
}

function ni() {
  Chunk433517.K.remove(eG), location.reload()
}

function na() {
  let e = tz();
  e1.setAudioInputDevice(module.inputDeviceId), e1.setAudioOutputDevice(module.outputDeviceId), t$(), e1.setInputVolume(module.inputVolume), e1.setOutputVolume(module.outputVolume), e1.setH264Enabled(eX), e1.setAv1Enabled(eX), e1.setH265Enabled(eX), e1.setAecDump(module.aecDumpEnabled), e1.setSidechainCompression(module.sidechainCompression), e1.setSidechainCompressionStrength(module.sidechainCompressionStrength), e1.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function no() {
  e4 || e1.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function ns(e) {
  return {
    id: eD.w5,
    index: 0,
    name: e,
    disabled: true,
    guid: true,
    hardwareId: true,
    containerId: true
  }
}

function nl(e, t) {
  if (0 === e.length) {
    let e = ns(t);
    return {
      [e.id]: e
    }
  }
  return _()(e).map(e => ({
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

function nc(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eD.w5]) ? r : _()(e).values().first();
  return null != i ? i.id : t
}

function nu(e) {
  let t = e7;
  if (e7 = nl(e, ex.intl.string(ex.t["/QIjDA"])), !_().isEqual(e7, t)) {
    let e = tz(),
      t = nc(e7, e.inputDeviceId);
    e1.setAudioInputDevice(t)
  }
}

function nd(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nf(e) {
  e1.eachConnection(t => {
    t.context === eD.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function np(e) {
  let t = e9;
  if (e9 = nl(e, ex.intl.string(ex.t.xlUg0v)), !_().isEqual(e9, t)) {
    let e = tz(),
      n = nc(e9, e.outputDeviceId);
    e1.setAudioOutputDevice(n);
    let r = nd(t),
      i = nd(e9);
    r !== i && nf(i)
  }
}

function n_(e) {
  tp = e.length > 0;
  let t = te;
  if (te = nl(e, ex.intl.string(ex.t.WKWARY)), ta && !_().isEqual(te, t)) {
    var n;
    let e = true !== te[to],
      r = to === eD.w5 && (null == (n = t[eD.w5]) ? true : n.disabled);
    t$(e || r)
  }
}

function nm() {
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
      } = tz(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], e1.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], e1.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    nr({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nh(e) {
  if (null == r) return eU.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : ef.Z.getAudioPid(e),
      n = "";
    return null != t && (n = ef.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function ng(e, t) {
  (0, e_.isWindows)() && e > 1 && I.YT(e, {
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

function nE(e) {
  i = e.sessionId, tt = false, ti = false;
  let t = tz();
  if (t9() && (ne() ? rg(eD.iA.AUTOMATIC) : t.automaticAudioSubsystem && rE()), e1.supports(eD.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, e_.isDesktop)() ? e = (0, U.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, e_.isIOS)() || (0, e_.isAndroid)()) && (e = (0, G.W)({
      location: "handleConnectionOpen"
    }).enabled), e1.setOffloadAdmControls(e)
  }(0, ec.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, e_.isDesktop)() && (eu.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eD.Yn.DEFAULT,
    playSoundEffect: true
  }), nr({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), nm()
}

function nb(e) {
  let {
    mediaEngineState: t
  } = e;
  e3 = t.settingsByContext, e7 = t.inputDevices, e9 = t.outputDevices, tk = t.appSupported, tb = t.krispModuleLoaded, s = t.krispVersion, e8 = t.goLiveContext
}

function ny() {
  i = null
}

function nO() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.NJ.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nv(e) {
  switch (e.state) {
    case eA.hes.CONNECTING:
      no();
      break;
    case eA.hes.RTC_CONNECTING:
      tm = false, th = false;
      break;
    case eA.hes.RTC_CONNECTED:
      t$();
      break;
    case eA.hes.DISCONNECTED:
      nw(), nD()
  }
  nt.update()
}

function nS(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      tt = t.mute || t.suppress, ti = t.deaf, e1.eachConnection(tX);
      let e = null != t.guildId && null != t.channelId && null != tC && tC !== t.channelId,
        n = !tg && null == t.channelId;
      return t$(!e && !n && ta), tC = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eb.default.getId() || null != eS.Z.getChannelId() || t$(false, null), e
  }, false)
}

function nI(e) {
  let {
    mute: t
  } = e;
  tn = t, e1.eachConnection(tX)
}

function nT(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tz(t);
  if (t === eD.Yn.DEFAULT && (er.Z.requestPermission(eP.Eu.AUDIO), tr)) returnfalse;
  (r = !i && !r) || (i = false), n || (tl = true), nr({
    mute: r,
    deaf: i
  }, t), e1.eachConnection(tX)
}

function nC(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  nr({
    mute: n
  }, t), r || (tl = true), e1.eachConnection(tX)
}

function nA(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eR.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nm(true)
}

function nN(e) {
  let {
    context: t
  } = e;
  nr({
    deaf: !tz(t).deaf
  }, t), e1.eachConnection(tX)
}

function nP(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eb.default.getId()) return;
  let {
    localMutes: r
  } = tz(t);
  r[n] ? delete r[n] : r[n] = true, nr({
    localMutes: r
  }, t), e1.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nR(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: p
  } = e;
  f()(!(d && p), "These are not allowed to both be true.");
  let _ = u === eA.ZUi.DISABLED,
    {
      disabledLocalVideos: m
    } = tz(l),
    h = null != (t = m[c]) && t,
    g = tL.has(c),
    E = u === eA.ZUi.AUTO_ENABLED || u === eA.ZUi.MANUAL_ENABLED;
  eU.info("disableVideo=".concat(_, " currentlyDisabled=").concat(h, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !h), "If you are auto-disabled, then you are also disabled.");
  let b = _ !== h,
    y = l === eD.Yn.DEFAULT,
    O = p && b && y,
    v = d && b && y;
  eU.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: S
  } = tz(l);
  if (S[c] === eA.ZUi.AUTO_PROBING && u === eA.ZUi.AUTO_ENABLED && (0, en.Z)(c, _ ? eD.fC.AUTO_DISABLE : eD.fC.AUTO_ENABLE, E), S[c] = u, nr({
      videoToggleStateMap: S
    }, l, d), u === eA.ZUi.AUTO_PROBING ? null == (n = eS.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eS.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tj || (eU.info("isAutoDisableAllowed=".concat(tj, " - disabling VideoHealthManager")), null == (a = eS.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!_ && !g || _ && !tj) return;
    (0, en.Z)(c, _ ? eD.fC.AUTO_DISABLE : eD.fC.AUTO_ENABLE, E), _ ? tL.add(c) : tL.delete(c)
  } else v && (g && !_ ? (eU.info("disallowing auto-disable for this session because of manual override by user"), tj = false, null == (s = eS.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, en.Z)(c, eD.fC.MANUAL_REENABLE, E)) : (0, en.Z)(c, _ ? eD.fC.MANUAL_DISABLE : eD.fC.MANUAL_ENABLE, E));
  y && !_ && tL.delete(c), _ ? m[c] = true : delete m[c], nr({
    disabledLocalVideos: m
  }, l, d), e1.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = m[c]) && t)
  }, l)
}

function nw() {
  if (0 === tL.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tz(module);
  tL.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e1.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tL.clear(), nr({
    disabledLocalVideos: exports
  }, module, false)
}

function nD() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tz(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  nr({
    videoToggleStateMap: exports
  }, module, false)
}

function nx(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eb.default.getId()) return;
  let i = t === eD.Yn.STREAM ? eD.Yh : eD.Qx,
    {
      localVolumes: a
    } = tz(t);
  r === i ? delete a[n] : a[n] = r, nr({
    localVolumes: a
  }, t), e1.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nL(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tz(t);
  a[n] = {
    left: r,
    right: i
  }, nr({
    localPans: a
  }, t), e1.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nj(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  nr({
    mode: n,
    modeOptions: r
  }, t), e1.eachConnection(tq), nt.update()
}

function nM(e) {
  let {
    volume: t
  } = e;
  nr({
    inputVolume: tQ(t)
  }), e1.setInputVolume(t)
}

function nk(e) {
  let {
    volume: t
  } = e;
  nr({
    outputVolume: t
  }), e1.setOutputVolume(t)
}

function nU(e) {
  let {
    id: t
  } = e;
  t = nc(e7, t), e6 = performance.now(), nr({
    inputDeviceId: t
  }), e1.setAudioInputDevice(t)
}

function nG(e) {
  let {
    id: t
  } = e;
  nr({
    outputDeviceId: t = nc(e9, t)
  }), e1.setAudioOutputDevice(t)
}

function nZ(e) {
  let {
    id: t
  } = e;
  nr({
    videoDeviceId: t = nc(te, t)
  }), t$()
}

function nF(e) {
  let {
    inputProfile: t
  } = e;
  nr({
    activeInputProfile: t
  });
  let n = tz();
  e1.eachConnection(e => {
    tq(e), t3(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), t2(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), e1.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), nt.update(), nJ()
}

function nB(e) {
  return e5 !== e.required && (e5 = e.required, e.required || e1.interact(), true)
}

function nV(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  nu(t), np(n), n_(r)
}

function nH(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  nr({
    inputVolume: tQ(t),
    outputVolume: n
  })
}

function nY(e) {
  var t;
  let n = tz(),
    r = e1.getAudioSubsystem(),
    i = e1.getAudioLayer(),
    a = nc(e7, n.inputDeviceId),
    o = null == (t = e7[a]) ? true : t.name;
  ed.default.track(eA.rMx.VOICE_PROCESSING, {
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

function nW(e) {
  let t = nr({
    echoCancellation: e.enabled
  });
  e1.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nJ(), nY(e.location)
}

function nK(e) {
  nq(e.enabled)
}

function nz(e) {
  let t = nr({
    sidechainCompressionStrength: e.strength
  });
  e1.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nq(e) {
  let t = nr({
    sidechainCompression: e
  });
  e1.setSidechainCompression(t.sidechainCompression)
}

function nQ(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tM.add(n) : tM.delete(n), nX(), nJ()
}

function nX() {
  let e = !tM.has("voice_filter_preview") && !tM.has("mic_test");
  e1.setMaybePreprocessMute(module)
}

function nJ() {
  let e = tz(),
    t = tM.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = t1(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tv,
    c = tM.has("voice_filter") && 1 === tM.size;
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
async function n$() {
  var e, t, n, r;
  if (!e1.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  (null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) != null && (null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i) && (tB = true, tF = e1.supports(Chunk65154.AN.GAMESCOPE_CAPTURE))
}

function n0(e) {
  let t = nr({
    noiseSuppression: e.enabled
  });
  e1.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nJ(), nY(e.location)
}

function n1(e) {
  let t = nr({
    automaticGainControl: e.enabled
  });
  e1.eachConnection(e => t3(e, t.automaticGainControl)), nJ(), nY(e.location)
}

function n3(e) {
  let t = nr({
    noiseCancellation: e.enabled
  });
  e1.eachConnection(e => t2(e, t.noiseCancellation)), nJ(), nY(e.location)
}

function n2(e) {
  ei.Z.setKrispModelOverride(e.model), c = e.model, nJ()
}

function n4(e) {
  var t;
  (0, e_.isWeb)() || (tO = e.enabled, null == (t = e1.setNoiseCancellationEnableStats) || t.call(e1, e.enabled))
}

function n5(e) {
  nr({
    silenceWarning: e.enabled
  }), nt.update()
}

function n8(e) {
  e1.setDebugLogging(e.enabled)
}

function n6(e) {
  let {
    level: t
  } = e;
  l = t, ei.Z.setKrispSuppressionLevel(t)
}

function n7(e) {
  nr({
    videoHook: e.enabled
  })
}

function n9(e) {
  nr({
    experimentalSoundshare2: e.enabled
  })
}

function re(e) {
  let {
    enabled: t
  } = e;
  nr({
    useSystemScreensharePicker: t
  })
}

function rt(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = nr({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  e1.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function rn(e) {
  let {
    enabled: t
  } = e;
  nr({
    qos: t
  }), e1.eachConnection(e => e.setQoS(t))
}

function rr() {
  ni()
}

function ri(e) {
  let {
    inputDetected: t
  } = e;
  t_ = t, !tm && t_ && (tm = true, nt.update())
}

function ra(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tr) returnfalse;
  tr = n, e1.eachConnection(tX)
}

function ro(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eP.PQ.ACCEPTED;
  switch (n) {
    case eP.Eu.AUDIO:
      tD = true, e1.eachConnection(tX);
      break;
    case eP.Eu.CAMERA:
      !r && ta && t$(false);
      break;
    default:
      returnfalse
  }
}

function rs() {
  return tb || false
}
async function rl() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tb = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      ty = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eU.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), nr({
      noiseCancellation: false
    })
  } finally {
    tE = false
  }
}

function rc() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function ru() {
  !rc() || __OVERLAY__ || tE || tb ? (0, Chunk358085.isWeb)() && e1.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tb = true, r.emitChange()) : (0, Chunk358085.isWeb)() && nr({
    noiseCancellation: false
  }) : (tE = true, rl())
}

function rd(e) {
  let {
    enabled: t
  } = e;
  ed.default.track(eA.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tv ? tv : null,
    enabled: t
  }), nr({
    voiceFilterPlaybackEnabled: t
  })
}

function rf(e) {
  let {
    newVoiceFilterId: t
  } = e;
  nr({
    mostRecentlyRequestedVoiceFilter: t
  }), e1.eachConnection(e => e.setVoiceFilterId(t))
}

function rp() {
  nr({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function r_(e) {
  let {
    voiceFilterId: t
  } = e;
  tI = tv, tT = tS, tv = t, tS = null === t ? null : Date.now()
}

function rm(e) {
  let t = e.bypassEnabled;
  nr({
    bypassSystemInputProcessing: t
  }), e1.setAudioInputBypassSystemProcessing(t), nY(e.location)
}

function rh(e) {
  rg(e.subsystem)
}

function rg(e) {
  e === eD.iA.AUTOMATIC ? (nr({
    automaticAudioSubsystem: true
  }), rE()) : (nr({
    automaticAudioSubsystem: false
  }), e1.setAudioSubsystem(e))
}

function rE() {
  e1.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rb(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && t$(i, null), null != t || null == n) {
    tg = false;
    return
  }
  if (tg) return;
  tg = true;
  let a = tz();
  (a.mute || a.deaf) && (nr({
    deaf: false,
    mute: false
  }), e1.eachConnection(tX))
}

function ry(e) {
  let {
    application: t
  } = e;
  e2.add(t.id)
}

function rO(e) {
  let {
    application: t
  } = e;
  e2.delete(t.id)
}

function rv(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e4 = false, e1.eachConnection(tX);
      break;
    case "video":
      t$(false)
  }
}

function rS(e) {
  e4 = e.enabled, e.unmute && nr({
    mute: false,
    deaf: false
  }), e1.eachConnection(tX)
}

function rI(e) {
  let {
    enabled: t
  } = e;
  er.Z.requestPermission(eP.Eu.CAMERA), t$(t)
}

function rT(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e;
  if (!(0, N.CY)() || null == S.Z) returnfalse;
  let a = null,
    s = null,
    l = ef.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: a,
    soundshareSession: s
  } = nh(l));
  let c = {
    desktopSource: {
      id: t,
      sourcePid: l,
      soundshareId: a,
      soundshareSession: s
    },
    quality: i
  };
  null != o && (e1.setClipsSource(null), (0, e_.isWindows)() && null != o.desktopSource.soundshareId && I.pn(o.desktopSource.soundshareId)), null != a && ng(a, s), o = c;
  let u = tH(),
    d = tz().videoHook;
  e1.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: d,
      useGraphicsCapture: t8(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: t7(),
      videoHookStaleFrameTimeoutMs: eW,
      graphicsCaptureStaleFrameTimeoutMs: eK,
      hdrCaptureMode: u
    },
    quality: i,
    applicationName: n
  })
}

function rC(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, e1.setClipsSource(null))
}

function rA(e) {
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
      s = null != (t = a.context) ? t : eD.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : ef.Z.getPidFromDesktopSource(i);
    e_.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nh(c), null != e && ng(e, r)), tJ(s), t$(s === eD.Yn.STREAM && ta, {
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
    let e = null != (r = a.context) ? r : eD.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eD.Yn.STREAM && ta,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    t$(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else t$(ta, null)
}

function rN(e) {
  let {
    section: t
  } = e;
  return t === eA.oAB.VOICE && no(), false
}

function rP() {
  return e1.eachConnection(t4), false
}

function rR(e) {
  let {
    enabled: t
  } = e, n = nr({
    aecDumpEnabled: t
  });
  e1.setAecDump(n.aecDumpEnabled)
}

function rw(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e3 = Object.values(eD.Yn).reduce((e, n) => {
    let r = n,
      i = e$();
    return e[r] = _().merge(i, t[r]), e
  }, {}), y.K.set(eG, e3), na()
}

function rD(e) {
  let {
    state: t
  } = e, n = x.Z.isEnabled();
  if (t === eA.$7l.BACKGROUND && ta && !n) tf = true, t$(false);
  else {
    if (t !== eA.$7l.ACTIVE || !tf) returnfalse;
    tf = false, t$(true)
  }
  returntrue
}

function rx(e) {
  e1.eachConnection(t => t.setBitRate(e.bitrate))
}

function rL() {
  if (!ta && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  t$(false, null)
}

function rj() {
  return !!tA && (tA = false, true)
}

function rM(e) {
  e1.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rk(e) {
  let {
    settings: t
  } = e;
  e1.applyMediaFilterSettings(t).finally(() => {
    tN = false, r.emitChange()
  })
}

function rU() {
  tN = true
}

function rG() {
  tN = false
}

function rZ(e) {
  tG = e.enabled
}

function rF() {
  if ((0, Chunk358085.isDesktop)() && Chunk358085.isPlatformEmbedded && !tV) {
    tV = true;
    let e = async () => {
      let t = await new Promise(e => {
        eg.ZP.pollQueueMetrics(t => {
          e(t)
        })
      });
      exports.periodMs = Chunk65154.rp;
      let n = rV(exports);
      null !== require && Chunk626135.default.track(Chunk981631.rMx.VOICE_QUEUE_METRICS, require), setTimeout(module, Chunk65154.rp)
    };
    setTimeout(module, Chunk65154.rp)
  }
}
class rB extends(u = Chunk442837.ZP.Store) {
  initialize() {
    t5(), nn(), ru(), nD(), rF(), tk = {
      [Chunk65154.AN.VIDEO]: e1.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: e1.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: e1.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk615830.Z, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return e1.supports(e)
  }
  supportsInApp(e) {
    return tk[e] || e1.supports(e)
  }
  isSupported() {
    return e1.supported()
  }
  isNoiseSuppressionSupported() {
    return e1.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return rs()
  }
  isNoiseCancellationError() {
    return tA
  }
  isAutomaticGainControlSupported() {
    return e1.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !ne() && (e1.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || e1.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return e1.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e1.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return rs()
  }
  isAecDumpSupported() {
    return e1.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return e1.supports(Chunk65154.AN.VIDEO) && e1.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(tC)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && eX && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tz().aecDumpEnabled
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
    return null != e3[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tn
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tz(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && tr
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
    return tG
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tz(module).deaf
  }
  isVideoEnabled() {
    return ta && tp
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
    return e8 === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e8 === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
    return e !== eb.default.getId() && (tz(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return e1.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
    return null != (t = tz(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
    return null != (t = tz(n).videoToggleStateMap[e]) ? t : eA.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
    return t === eD.Yn.DEFAULT && tL.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tL.size > 0
  }
  isMediaFilterSettingLoading() {
    return tN
  }
  isNativeAudioPermissionReady() {
    return tD
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e8
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e6
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT,
      n = tz(t).localPans[e];
    return null != n ? n : eY
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT,
      n = t === eD.Yn.STREAM ? eD.Yh : eD.Qx,
      r = tz(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tz().inputVolume
  }
  getOutputVolume() {
    return tz().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tz(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tz(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tv
  }
  getActiveVoiceFilterAppliedAt() {
    return tS
  }
  getPreviousVoiceFilter() {
    return tI
  }
  getPreviousVoiceFilterAppliedAt() {
    return tT
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tz().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tz().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return _().each(e3, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eA.pM4.PUSH_TO_TALK && e2.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return nc(e7, tz().inputDeviceId)
  }
  getOutputDeviceId() {
    return nc(e9, tz().outputDeviceId)
  }
  getVideoDeviceId() {
    return nc(te, tz().videoDeviceId)
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
    let e = tz();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return e1.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tz().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tz().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tz().h265Enabled
  }
  hasH265HardwareDecode() {
    return null !== tR && tR
  }
  getLoopback() {
    return tM.size > 0
  }
  getLoopbackReasons() {
    return tM
  }
  getNoiseSuppression() {
    let e = tz();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tz();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tz().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tz().noiseCancellation
  }
  getHardwareEncoding() {
    return eX
  }
  getEnableSilenceWarning() {
    return tz().silenceWarning
  }
  getDebugLogging() {
    return e1.getDebugLogging()
  }
  getQoS() {
    return tz().qos
  }
  getAttenuation() {
    return tz().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tz().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tz().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return t9() && tz().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : e1.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return e1.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tz().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tz(module)
  }
  getState() {
    return {
      settingsByContext: e3,
      inputDevices: e7,
      outputDevices: e9,
      appSupported: tk,
      krispModuleLoaded: tb,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: e8
    }
  }
  getInputDetected() {
    return t_
  }
  getNoInputDetectedNotice() {
    return th
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    e1.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return e5
  }
  getVideoHook() {
    return tz().videoHook
  }
  supportsVideoHook() {
    return e1.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tz().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return e1.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && e1.supports(Chunk65154.AN.SOUNDSHARE) && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tz().useSystemScreensharePicker,
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
    return tF
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
    return null != (e = tz().modeOptions.vadKrispActivationThreshold) ? module : eH
  }
  hasActiveCallKitCall() {
    return tZ
  }
  setHasActiveCallKitCall(e) {
    tZ = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? e1.supports(Chunk65154.AN.SOUNDSHARE) && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && t7() : (0, Chunk358085.isWindows)() ? e1.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && e1.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    if (!tP && (tP = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      e1.fetchAsyncResources(module).catch(e => {
        eU.warn("DAVE preload failed:", e), eh.Z.captureException(e)
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
    return tU
  }
}

function rV(e) {
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
eL(rB, "displayName", "MediaEngineStore");
let rH = r = new rB(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rb,
  VOICE_STATE_UPDATES: nS,
  CONNECTION_OPEN: nE,
  CONNECTION_CLOSED: ny,
  POST_CONNECTION_OPEN: nO,
  RTC_CONNECTION_STATE: nv,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nI,
  AUDIO_TOGGLE_SELF_MUTE: nT,
  AUDIO_SET_SELF_MUTE: nC,
  AUDIO_TOGGLE_SELF_DEAF: nN,
  AUDIO_TOGGLE_LOCAL_MUTE: nP,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nR,
  AUDIO_SET_LOCAL_VOLUME: nx,
  AUDIO_SET_LOCAL_PAN: nL,
  AUDIO_SET_MODE: nj,
  AUDIO_SET_INPUT_VOLUME: nM,
  AUDIO_SET_OUTPUT_VOLUME: nk,
  AUDIO_SET_INPUT_DEVICE: nU,
  AUDIO_SET_OUTPUT_DEVICE: nG,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nF,
  AUDIO_SET_ECHO_CANCELLATION: nW,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nK,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nz,
  AUDIO_SET_LOOPBACK: nQ,
  AUDIO_SET_NOISE_SUPPRESSION: n0,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n1,
  AUDIO_SET_NOISE_CANCELLATION: n3,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: n2,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: n5,
  AUDIO_SET_DEBUG_LOGGING: n8,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n6,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n4,
  MEDIA_ENGINE_SET_VIDEO_HOOK: n7,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n9,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: re,
  AUDIO_SET_ATTENUATION: rt,
  AUDIO_SET_QOS: rn,
  MEDIA_ENGINE_DEVICES: nV,
  AUDIO_VOLUME_CHANGE: nH,
  AUDIO_RESET: rr,
  AUDIO_INPUT_DETECTED: ri,
  AUDIO_SET_SUBSYSTEM: rh,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rm,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rS,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rI,
  MEDIA_ENGINE_PERMISSION: rv,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rA,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nZ,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nB,
  USER_SETTINGS_MODAL_INIT: rN,
  USER_SETTINGS_MODAL_SET_SECTION: rN,
  CERTIFIED_DEVICES_SET: rP,
  RPC_APP_CONNECTED: ry,
  RPC_APP_DISCONNECTED: rO,
  OVERLAY_INITIALIZE: nb,
  APP_STATE_UPDATE: rD,
  SET_CHANNEL_BITRATE: rx,
  SET_VAD_PERMISSION: ra,
  SET_NATIVE_PERMISSION: ro,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rM,
  MEDIA_ENGINE_SET_AEC_DUMP: rR,
  MEDIA_ENGINE_RESET_SETTINGS: rw,
  CHANNEL_DELETE: rL,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rj,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rk,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rU,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rG,
  USER_SETTINGS_PROTO_UPDATE: nA,
  CLIPS_INIT: rT,
  CLIPS_SETTINGS_UPDATE: rC,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rZ,
  VOICE_FILTER_REQUEST_SWITCH: rf,
  VOICE_FILTER_LOOPBACK_TOGGLE: rd,
  VOICE_FILTER_APPLIED: r_,
  VOICE_FILTER_DOWNLOAD_FAILED: rp,
  VOICE_FILTER_APPLY_FAILED: rp
})