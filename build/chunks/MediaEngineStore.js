/** Chunk was on web.js **/
/** chunk id: 430452, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, s, o, l, c, u;
require.d(exports, {
  A: () => rZ
}), require("./896048.js"), require("./228524.js"), require("./492834.js"), require("./321073.js"), require("./638769.js"), require("./457529.js"), require("./790599.js");
var d, Chunk284009 = require("./284009.js"),
  p = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  h = require.n(Chunk735438),
  Chunk299855 = require("./299855.js"),
  g = require.n(Chunk299855),
  Chunk490138 = require("./490138.js"),
  Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk506774 = require("./506774.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk77729 = require("./77729.js"),
  Chunk719129 = require("./719129.js"),
  Chunk894539 = require("./894539.js"),
  Chunk274372 = require("./274372.js"),
  Chunk915618 = require("./915618.js"),
  Chunk572164 = require("./572164.js"),
  Chunk626584 = require("./626584.js"),
  Chunk211597 = require("./211597.js"),
  Chunk487329 = require("./487329.js"),
  Chunk49463 = require("./49463.js"),
  Chunk784113 = require("./784113.js"),
  Chunk15285 = require("./15285.js"),
  Chunk540305 = require("./540305.js"),
  Chunk17300 = require("./17300.js"),
  Chunk593595 = require("./593595.js"),
  Chunk788601 = require("./788601.js"),
  Chunk626078 = require("./626078.js"),
  Chunk509034 = require("./509034.js"),
  Chunk638188 = require("./638188.js"),
  Chunk269377 = require("./269377.js"),
  Chunk934341 = require("./934341.js"),
  Chunk658046 = require("./658046.js"),
  Chunk525286 = require("./525286.js"),
  Chunk780732 = require("./780732.js"),
  Chunk495439 = require("./495439.js"),
  Chunk927170 = require("./927170.js"),
  Chunk233232 = require("./233232.js"),
  Chunk140175 = require("./140175.js"),
  Chunk267378 = require("./267378.js"),
  Chunk223572 = require("./223572.js"),
  Chunk276006 = require("./276006.js"),
  Chunk670470 = require("./670470.js"),
  Chunk896014 = require("./896014.js"),
  Chunk75076 = require("./75076.js"),
  Chunk674966 = require("./674966.js"),
  Chunk559633 = require("./559633.js"),
  Chunk3527 = require("./3527.js"),
  Chunk714763 = require("./714763.js"),
  Chunk879172 = require("./879172.js"),
  Chunk555444 = require("./555444.js"),
  Chunk617617 = require("./617617.js"),
  Chunk996744 = require("./996744.js"),
  Chunk28075 = require("./28075.js"),
  Chunk954571 = require("./954571.js"),
  Chunk353835 = require("./353835.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk290805 = require("./290805.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js"),
  Chunk350535 = require("./350535.js"),
  Chunk961350 = require("./961350.js"),
  Chunk131319 = require("./131319.js"),
  Chunk347481 = require("./347481.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk851581 = require("./851581.js"),
  Chunk287809 = require("./287809.js"),
  Chunk117549 = require("./117549.js"),
  Chunk652215 = require("./652215.js"),
  Chunk502075 = require("./502075.js"),
  Chunk765682 = require("./765682.js"),
  Chunk355097 = require("./355097.js"),
  Chunk509381 = require("./509381.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

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
let eV = new Chunk626584.A("MediaEngineStore"),
  eF = "MediaEngineStore",
  eB = 4,
  eH = 1,
  eY = 1,
  eW = 1,
  eK = .5,
  ez = {
    left: 1,
    right: 1
  },
  eq = 500,
  eX = 5 * Chunk927813.A.Millis.SECOND,
  eZ = false,
  eQ = 100,
  e$ = 2 * Chunk927813.A.Millis.SECOND,
  eJ = 30 * Chunk927813.A.Millis.SECOND,
  e0 = true,
  e1 = "deep_noise_suppression",
  e2 = 0;

function e3() {
  return {
    mode: eR.TBI.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eZ,
      autoThreshold: em.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eK,
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
    inputVolume: eL.Hz,
    outputVolume: eL.Hz,
    inputDeviceId: eL.dx,
    outputDeviceId: eL.dx,
    videoDeviceId: eL.dx,
    qos: false,
    qosMigrated: false,
    videoHook: e4.supports(eL.O5.VIDEO_HOOK),
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
let e6 = {
    [Chunk509381.my.CUSTOM]: {},
    [Chunk509381.my.VOICE_ISOLATION]: {
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
    [Chunk509381.my.STUDIO]: {
      mode: Chunk652215.TBI.VOICE_ACTIVITY,
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
  e4 = (0, Chunk205693.hB)((0, Chunk205693.WI)());
eV.enableNativeLogger(true);
let e5 = {},
  e7 = new Set([Chunk731854.x.DEFAULT]),
  e8 = e4.supports(Chunk731854.O5.AUTO_ENABLE),
  e9 = false,
  te = Chunk731854.x.STREAM,
  tt = performance.now(),
  tn = {
    [Chunk731854.dx]: np("No Input Devices")
  },
  tr = {
    [Chunk731854.dx]: np("No Output Devices")
  },
  ti = {
    [Chunk731854.dx]: np("No Video Devices")
  },
  ta = new Chunk451988.Ep,
  ts = false,
  to = false,
  tl = false,
  tc = false,
  tu = false,
  td = Chunk731854.qe,
  tf = Chunk731854.qe,
  tp = false,
  t_ = false,
  th = false,
  tm = new Chunk451988.Ep,
  tg = false,
  tE = false,
  ty = null,
  tb = false,
  tO = false,
  tv = false,
  tA = false,
  tI = false,
  tS = [],
  tT = false,
  tC = null,
  tN = null,
  tR = null,
  tw = null,
  tP = null,
  tD = false,
  tx = false,
  tL = false,
  tj = null,
  tM = null,
  tk = false,
  tU = false;
Chunk674966.A.hasPermission(Chunk765682.iL.AUDIO, {
  showAuthorizationError: false
}), Chunk674966.A.hasPermission(Chunk765682.iL.CAMERA, {
  showAuthorizationError: false
});
let tG = false,
  tV = new Set,
  tF = tG,
  tB = new Set,
  tH = {},
  tY = null,
  tW = true,
  tK = false,
  tz = false,
  tq = false,
  tX = false;

function tZ() {
  var e, t;
  return null != (e = null == (t = eC.default.getCurrentUser()) ? true : t.isStaff()) && e ? "always" : eg.y === E.O.CANARY ? "permittedDevicesOnly" : "never"
}
async function tQ() {
  if ("u" < typeof window || "u" < typeof navigator || !("mediaCapabilities" in navigator) || null == navigator.mediaCapabilities) returnfalse;
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
    return e.supported && e.powerEfficient
  } catch (e) {
    returnfalse
  }
}

function t$() {
  return null != tM ? tM : "u" > typeof window ? tM = tQ().then(e => (tj = e, e)) : Promise.resolve(false)
}

function tJ() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT,
    t = e5[e];
  return null == t && (t = e3(), e5[e] = t), t
}

function t0() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT,
    i = tJ(r),
    a = e6[null != (e = i.activeInputProfile) ? e : ex.my.CUSTOM],
    s = ek({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
  if (null == s.vadDuringPreProcess && (s.vadDuringPreProcess = (0, J.R)({
      location: "getSettings"
    }).enabled), null == s.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, k.F)({
      location: "getSettings"
    });
    null != e.vadKrispActivationThreshold && (s.vadKrispActivationThreshold = e.vadKrispActivationThreshold)
  }
  return eG(ek({}, i, a), {
    modeOptions: s
  })
}

function t1(e) {
  var t, n;
  let r = t0(e.context),
    i = r.mode;
  e.context === eL.x.DEFAULT && ((0, ec.H)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eR.TBI.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eR.TBI.VOICE_ACTIVITY), (0, Q.N)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && rp(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eK,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function t2(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.Hz;
  return h().clamp(e, 0, t)
}

function t3(e) {
  let t = t0(e.context),
    n = !e8 || t.mute || t.deaf;
  e.context === eL.x.DEFAULT ? n = n || ts || to || tl || !ei.A.didHavePermission(eP.iL.AUDIO) : e.context === eL.x.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eL.x.DEFAULT && T.A.updateNativeMute()
}

function t6(e) {
  e !== te && (null != a && e4.setGoLiveSource(null, te), te = e)
}

function t4() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : tu,
    s = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    o = a;
  if ((null == o ? true : o.desktopSource) != null && o.desktopSource.id !== (null == s || null == (e = s.desktopSource) ? true : e.id) && (null != o.desktopSource.soundshareId && (0, em.isWindows)() && S.c1(o.desktopSource.soundshareId), e4.setGoLiveSource(null, te)), (null == o ? true : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s || null == (t = s.cameraSource) ? true : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s || null == (n = s.cameraSource) ? true : n.audioDeviceGuid)) && e4.setGoLiveSource(null, te), tu || i) {
    let e = t0().videoDeviceId;
    tu && e === eL.dx && tf === eL.dx && td !== eL.qe ? e = td : tf = e, td = (tu = i) ? nh(ti, e) : eL.qe, e4.setVideoInputDevice(td)
  }
  if (a = s, null != s) {
    let e = {
      resolution: s.quality.resolution,
      frameRate: s.quality.frameRate
    };
    if (null != s.desktopSource) {
      let t = tZ(),
        n = t0().videoHook,
        i = nn(),
        a = i ? nr() ? ew.zl : ew.eg : 0,
        o = (0, em.isWindows)() && (0, ee.b)("updateVideo").enabled;
      e4.setGoLiveSource({
        desktopDescription: {
          id: s.desktopSource.id,
          soundshareId: s.desktopSource.soundshareId,
          useVideoHook: n,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: o,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: ni(),
          videoHookStaleFrameTimeoutMs: eq,
          graphicsCaptureStaleFrameTimeoutMs: eX,
          hdrCaptureMode: t,
          enableGlobalFramePoolLock: (0, W.H)({
            location: "updateVideo"
          }).enabled
        },
        quality: e
      }, te)
    }
    null != s.cameraSource && e4.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
        audioDeviceGuid: s.cameraSource.audioDeviceGuid
      },
      quality: e
    }, te)
  }
}

function t5(e) {
  switch (e) {
    case eL.CO.CPU_OVERUSE:
      return D.B6.NoiseCancellerCpuOveruse;
    case eL.CO.FAILED:
      return D.B6.NoiseCancellerFailed;
    case eL.CO.VAD_CPU_OVERUSE:
      return D.B6.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function t7(e) {
  let t = (0, k.F)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return ek({
    enabled: e
  }, t)
}

function t8(e, t) {
  e.setAutomaticGainControl(t7(t))
}

function t9(e, t) {
  let n = (0, es.A)(t, r.getSystemMicrophoneMode(), {
    location: "setNoiseCancellation"
  });
  n !== t && eV.info("Falling back to system noise suppression."), t = n, e.setNoiseCancellation(t);
  let {
    noiseCancellationDuringProcessing: i
  } = (0, k.F)({
    location: "setNoiseCancellation",
    disable: !t
  });
  e.setNoiseCancellationDuringProcessing(i);
  let {
    noiseCancellationAfterProcessing: a,
    vadAfterWebrtc: s
  } = (0, X.$)({
    location: "setNoiseCancellation"
  });
  e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(s)
}

function ne(e) {
  let t = t0(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eA.A.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eA.A.hasNoiseSuppression(n) || t.noiseSuppression), t8(e, eA.A.hasAutomaticGainControl(n) || t.automaticGainControl), t9(e, t.noiseCancellation), e.setVoiceFilterId(tC), (0, em.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function nt() {
  ta.start(eJ, () => {
    eV.error("Device enumeration timed out"), ep.default.track(eR.HAw.DEVICE_ENUMERATION_TIMEOUT, {})
  }), e4.on(b.bg.Connection, e => {
    t1(e), t3(e), ne(e);
    let t = t0();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
    let n = (0, q.K)({
      location: "setupMediaEngine"
    }).treatment;
    tk = n === q.c.NoSoftwareDecodeWithFallback, n === q.c.NoSoftwareDecode || n === q.c.NoSoftwareDecodeWithFallback ? (e.setExperimentFlag(eL.fd.H265_HARDWARE_ONLY, true), (0, em.isWindows)() ? t$().then(t => {
      e.setExperimentFlag(eL.fd.H265_HARDWARE_DECODE_AVAILABLE, t)
    }) : (0, em.isMac)() && e.setExperimentFlag(eL.fd.H265_HARDWARE_DECODE_AVAILABLE, true)) : n === q.c.Disabled && (e.setExperimentFlag(eL.fd.H265_HARDWARE_ONLY, true), e.setExperimentFlag(eL.fd.H265_HARDWARE_DECODE_AVAILABLE, false)), (0, em.isWindows)() && (0, z.r)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eL.fd.USE_H264_MF_DECODER, true);
    let i = eS.A.getGuildId(),
      {
        muteBeforeProcessing: s,
        pttBeforeProcessing: o,
        skipEncode: l
      } = (null != i ? H.A : B.A).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != i ? i : true
      }, {
        autoTrackExposure: true
      });
    s && e.setExperimentFlag(eL.fd.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(eL.fd.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(eL.fd.SKIP_ENCODE, true), (0, Z.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eL.fd.LOW_LATENCY_RATE_CONTROL, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(eL.fd.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(eL.fd.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(eL.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eL.x.STREAM) {
      let t = ng(tr);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = K.A.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, em.isWindows)() ? e.setExperimentFlag(eL.fd.SIGNAL_AV1, true) : ((0, em.isMac)() || (0, em.isLinux)()) && e.setExperimentFlag(eL.fd.SIGNAL_AV1_DECODE, true), (0, em.isWindows)() && e.setExperimentFlag(eL.fd.SIGNAL_AV1_HARDWARE_DECODE, true), (0, em.isWeb)()) {
      let {
        enabled: t
      } = (0, Y.O)("MediaEngineStore");
      e.setExperimentFlag(eL.fd.BROWSER_HEVC, t)
    }
    if ((0, em.isWindows)() && (null == tY ? true : tY.startsWith("AMD")) && (0, en.F)("MediaEngineStore").enabled && e.setExperimentFlag(eL.fd.WMF_GPU_ENCODE, true), (0, em.isWindows)() && (null == tY ? true : tY.startsWith("Qualcomm")) && (0, en.F)("MediaEngineStore").enabled && e.setExperimentFlag(eL.fd.WMF_GPU_ENCODE, true), e4.setHasFullbandPerformance((0, P.A)()), e.setRemoteAudioHistory(1e3), (0, N.A)(r)) {
      let {
        enableViewerClipping: t
      } = et.A.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eL.X1)
    }
    for (let n of (t = t0(e.context), e.setPostponeDecodeLevel(eQ), Object.keys(t.localMutes))) n !== eO.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eO.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
    for (let n of Object.keys(t.localPans)) {
      let r = t.localPans[n];
      e.setLocalPan(n, r.left, r.right)
    }
    for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
    e.on(b.yq.Speaking, (t, n, r, i) => {
      A.h.dispatch({
        type: "SPEAKING",
        context: e.context,
        userId: t,
        speakingFlags: n,
        voiceDb: i
      })
    }), e.context === eL.x.DEFAULT && (t_ = false, th = false, e.on(b.yq.SpeakingWhileMuted, () => {
      t_ = true, th = true, r.emitChange(), tm.stop(), tm.start(e$, () => {
        th = false, r.emitChange()
      })
    })), e.on(b.yq.DesktopSourceEnd, (t, n) => {
      A.h.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: {
          context: e.context
        },
        endReason: t,
        errorCode: n
      })
    }), e.on(b.yq.InteractionRequired, e => {
      A.h.dispatch({
        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
        required: e
      })
    }), e.on(b.yq.VideoHookInitialize, (e, t, n, r, i, s) => {
      (null == a ? true : a.desktopSource) != null && ep.default.track(eR.HAw.VIDEOHOOK_INITIALIZED, ek({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: s
      }, (0, M.A)(null == a ? true : a.desktopSource)))
    }), e.on(b.yq.NoiseCancellationError, e => {
      eV.warn("noisecancellererror event: ".concat(e)), (0, D.QW)({
        type: D.iy.NOISE_CANCELLER_ERROR,
        underlyingError: t5(e)
      }), tD = true, ep.default.track(eR.HAw.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), A.h.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: true
      }), A.h.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION",
        enabled: false
      }), A.h.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
        code: e
      })
    }), e.on(b.yq.VoiceActivityDetectorError, e => {
      eV.warn("voiceactivitydetectorerror event: ".concat(e)), (0, D.QW)({
        type: D.iy.NOISE_CANCELLER_ERROR,
        underlyingError: t5(e)
      }), ep.default.track(eR.HAw.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), A.h.dispatch({
        type: "AUDIO_SET_MODE",
        context: eL.x.DEFAULT,
        mode: eR.TBI.VOICE_ACTIVITY,
        options: eG(ek({}, t0(eL.x.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), A.h.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.yq.SdpError, (e, t, n, r) => {
      ep.default.track(eR.HAw.SDP_ERROR, {
        operation: e,
        error: t,
        type: n,
        sdp: r
      })
    }), e.on(b.yq.VideoState, t => {
      A.h.dispatch({
        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
        videoState: t,
        context: e.context
      })
    }), e.setBitRate(ev.A.bitrate), e.applyVideoQualityMode(eN.A.mode), e4.supports(eL.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e4.setAsyncVideoInputDeviceInit((0, V.v)("setupMediaEngine").enabled)
  }), e4.on(b.bg.DeviceChange, (e, t, n) => {
    ta.stop(), A.h.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), e4.on(b.bg.VolumeChange, (e, t) => {
    A.h.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), e4.on(b.bg.DesktopSourceEnd, (e, t) => {
    A.h.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), e4.on(b.bg.AudioPermission, e => {
    tU = true, A.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), e4.on(b.bg.VideoPermission, e => {
    A.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), e4.on(b.bg.WatchdogTimeout, async () => {
    let e;
    try {
      await e_.A.submitLiveCrashReport({
        message: {
          message: "Voice Watchdog Timeout"
        }
      })
    } catch (t) {
      "number" == typeof t.status && (e = t.status)
    }
    eV.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), ep.default.track(eR.HAw.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: e
    })
  }), e4.on(b.bg.VideoInputInitialized, e => {
    ep.default.track(eR.HAw.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * eh.A.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eS.A.getMediaSessionId(),
      rtc_connection_id: eS.A.getRTCConnectionId()
    })
  }), e4.on(b.bg.AudioInputInitialized, e => {
    ep.default.track(eR.HAw.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * eh.A.Millis.SECOND),
      rtc_connection_id: eS.A.getRTCConnectionId()
    })
  }), e4.on(b.bg.ClipsRecordingRestartNeeded, () => {
    A.h.dispatch({
      type: "CLIPS_RESTART"
    })
  }), e4.on(b.bg.ClipsInitFailure, (e, t) => {
    A.h.wait(() => {
      A.h.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), e4.on(b.bg.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == s || null == (n = s.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && S.c1(t), s = null)
  }), e4.on(b.bg.NativeScreenSharePickerUpdate, (e, t) => {
    A.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), e4.on(b.bg.NativeScreenSharePickerCancel, e => {
    A.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), e4.on(b.bg.NativeScreenSharePickerError, e => {
    A.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), e4.on(b.bg.AudioDeviceModuleError, (e, t, n) => {
    ep.default.track(eR.HAw.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), e4.on(b.bg.VideoCodecError, e => {
    let t = "encode" === e.mode ? D.iy.VIDEO_ENCODE_ERROR : D.iy.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, D.QW)(t === D.iy.VIDEO_ENCODE_ERROR ? eG(ek({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eG(ek({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), e4.on(b.bg.ConnectionStats, e => {
    A.h.dispatch({
      type: "MEDIA_ENGINE_CONNECTION_STATS",
      connectionStats: e.map(e => {
        let {
          stats: t,
          connection: n
        } = e;
        return {
          stats: t,
          mediaEngineConnectionId: n.mediaEngineConnectionId,
          version: e2++,
          context: n.context
        }
      })
    })
  }), e4.on(b.bg.VoiceQueueMetrics, e => {
    let t = rX(e);
    null !== t && ep.default.track(eR.HAw.VOICE_QUEUE_METRICS, t)
  }), e4.setOnVideoContainerResized((e, t, n) => {
    A.h.wait(() => A.h.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      dimensions: {
        width: t,
        height: n
      }
    }))
  }), n3(), n4(), e4.supports(eL.O5.ASYNC_CLIPS_SOURCE_DEINIT) && e4.setAsyncClipsSourceDeinit((0, F.V)("setupMediaEngine").enabled), no.reset(), (0, eT.w)().then(e => {
    null != e && (tY = e.gpu_brand)
  }), e4.on(b.bg.SystemMicrophoneModeChange, e => {
    u = e, e4.eachConnection(ne)
  })
}

function nn() {
  return (0, em.isWindows)() && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, ew.yg)
}

function nr() {
  return (0, em.isWindows)() && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, ew.fG)
}

function ni() {
  return (0, em.isMac)() && e4.supports(eL.O5.SCREEN_CAPTURE_KIT) && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, ew.e)
}

function na() {
  return (0, em.isWindows)() && e4.supports(eL.O5.AUTOMATIC_AUDIO_SUBSYSTEM) && e4.supports(eL.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function ns() {
  return e4.supports(eL.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let no = new class {
  start() {
    this.started || (this.started = true, e4.on(b.bg.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), e4.removeListener(b.bg.Silence, this.handleSilence), A.h.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = t0();
    !tb && eS.A.getState() === eR.S7L.RTC_CONNECTED && e.mode === eR.TBI.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eM(this, "stateChangeTimeout", true), eM(this, "noVoiceTimeout", 5e3), eM(this, "voiceTimeout", 1500), eM(this, "started", false), eM(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (A.h.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tO = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function nl() {
  var e;
  let t = O.w.get("audio");
  null != t && (O.w.set(eF, {
    [eL.x.DEFAULT]: t
  }), O.w.remove("audio")), e5 = null != (e = O.w.get(eF)) ? e : {}, h().each(e5, e => {
    if (h().defaultsDeep(e, e3()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eb.OH)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eB && (e.vadUseKrispSettingVersion = eB, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eZ)
    }
    e4.supports(eL.O5.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eW && (e.sidechainCompressionSettingVersion = eW, e.sidechainCompression = true), (0, em.isWeb)() ? e.ncUseKrispjsSettingVersion !== eY && (e.ncUseKrispjsSettingVersion = eY, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eH && (e.ncUseKrispSettingVersion = eH, e.noiseSuppression = false, e.noiseCancellation = true)
  }), nd()
}

function nc(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.x.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tJ(t);
  return Object.assign(r, e), !__OVERLAY__ && n && O.w.set(eF, e5), r
}

function nu() {
  O.w.remove(eF), location.reload()
}

function nd() {
  let e = t0();
  e4.setAudioInputDevice(e.inputDeviceId), e4.setAudioOutputDevice(e.outputDeviceId), t4(), e4.setInputVolume(e.inputVolume), e4.setOutputVolume(e.outputVolume), e4.setAecDump(e.aecDumpEnabled), e4.setSidechainCompression(e.sidechainCompression), e4.setSidechainCompressionStrength(e.sidechainCompressionStrength), e4.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing)
}

function nf() {
  e8 || e4.enable().then(() => A.h.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function np(e) {
  return {
    id: eL.dx,
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
  return h()(e).map(e => ({
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

function nh(e, t) {
  var n, r;
  let i = null != (n = null != (r = e[t]) ? r : e[eL.dx]) ? n : h()(e).values().first();
  return null != i ? i.id : t
}

function nm(e) {
  let t = tn;
  if (tn = n_(e, ej.intl.string(ej.t["/QIjDA"])), !h().isEqual(tn, t)) {
    let e = t0(),
      t = nh(tn, e.inputDeviceId);
    e4.setAudioInputDevice(t), e4.eachConnection(ne)
  }
}

function ng(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nE(e) {
  e4.eachConnection(t => {
    t.context === eL.x.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function ny(e) {
  let t = tr;
  if (tr = n_(e, ej.intl.string(ej.t.xlUg0v)), !h().isEqual(tr, t)) {
    let e = t0(),
      n = nh(tr, e.outputDeviceId);
    e4.setAudioOutputDevice(n);
    let r = ng(t),
      i = ng(tr);
    r !== i && nE(i)
  }
}

function nb(e) {
  tE = e.length > 0;
  let t = ti;
  if (ti = n_(e, ej.intl.string(ej.t.WKWARY)), tu && !h().isEqual(ti, t)) {
    var n;
    let e = true !== ti[td],
      r = td === eL.dx && (null == (n = t[eL.dx]) ? true : n.disabled);
    t4(e || r)
  }
}

function nO() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
    r = null != (e = eu.A.settings.audioContextSettings) ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(r)) {
    let i = e === eD.W.USER ? eL.x.DEFAULT : eL.x.STREAM,
      a = i === eL.x.STREAM ? eL.Cn : eL.Hz,
      s = null != (t = r[e]) ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = t0(i);
    for (let [e, t] of Object.entries(s)) null == (0, el.tM)(i, e) && (t.muted ? o[e] = true : delete o[e], t.volume !== a ? l[e] = t.volume : delete l[e], e4.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (n)
      for (let e of new Set([...Object.keys(o), ...Object.keys(l)])) null == s[e] && (delete o[e], delete l[e], e4.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    nc({
      localMutes: o,
      localVolumes: l
    }, i)
  }
}

function nv(e) {
  if (null == r) return eV.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : e_.A.getAudioPid(e),
      n = "";
    return null != t && (n = e_.A.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nA(e, t) {
  (0, em.isWindows)() && e > 1 && S.GH(e, {
    soundshare_session: t
  }).then(t => {
    null == t || j.Ay.shouldContinueWithoutElevatedProcessForPID(e) || A.h.wait(() => {
      A.h.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function nI(e) {
  i = e.sessionId, ts = false, tc = false;
  let t = t0();
  if (na() && (ns() ? rA(eL.rB.AUTOMATIC) : t.automaticAudioSubsystem && rI()), e4.supports(eL.O5.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, em.isDesktop)() ? e = (0, U.i)({
      location: "handleConnectionOpen"
    }).enabled: ((0, em.isIOS)() || (0, em.isAndroid)()) && (e = (0, G.Y)({
      location: "handleConnectionOpen"
    }).enabled), e4.setOffloadAdmControls(e)
  }(0, ed.Lb)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, em.isDesktop)() && (ef.A.getLastInitAttemptMayHaveCrashed() ? (A.h.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eL.x.DEFAULT,
    playSoundEffect: true
  }), nc({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(342887).md()), nO()
}

function nS(e) {
  let {
    mediaEngineState: t
  } = e;
  e5 = t.settingsByContext, tn = t.inputDevices, tr = t.outputDevices, tH = t.appSupported, tI = t.krispModuleLoaded, o = t.krispVersion, te = t.goLiveContext
}

function nT() {
  i = null
}

function nC() {
  if ((0, em.isWeb)()) {
    let e = $.f1.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    e.loadWasmModule && e.preload && r.startDavePreload()
  }
  returnfalse
}

function nN(e) {
  switch (e.state) {
    case eR.S7L.CONNECTING:
      nf();
      break;
    case eR.S7L.RTC_CONNECTING:
      tb = false, tO = false;
      break;
    case eR.S7L.RTC_CONNECTED:
      t4();
      break;
    case eR.S7L.DISCONNECTED:
      nk(), nU()
  }
  no.update()
}

function nR(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      ts = t.mute || t.suppress, tc = t.deaf, e4.eachConnection(t3);
      let e = null != t.guildId && null != t.channelId && null != tP && tP !== t.channelId,
        n = !tv && null == t.channelId;
      return t4(!e && !n && tu), tP = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eO.default.getId() || null != eS.A.getChannelId() || t4(false, null), e
  }, false)
}

function nw(e) {
  let {
    mute: t
  } = e;
  to = t, e4.eachConnection(t3)
}

function nP(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = t0(t);
  if (t === eL.x.DEFAULT && (ei.A.requestPermission(eP.iL.AUDIO), tl)) returnfalse;
  (r = !i && !r) || (i = false), n || (tp = true), nc({
    mute: r,
    deaf: i
  }, t), e4.eachConnection(t3)
}

function nD(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  nc({
    mute: n
  }, t), r || (tp = true), e4.eachConnection(t3)
}

function nx(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eD.oD.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nO(true)
}

function nL(e) {
  let {
    context: t
  } = e;
  nc({
    deaf: !t0(t).deaf
  }, t), e4.eachConnection(t3)
}

function nj(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eO.default.getId()) return;
  let {
    localMutes: r
  } = t0(t);
  r[n] ? delete r[n] : r[n] = true, nc({
    localMutes: r
  }, t), e4.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nM(e) {
  var t, n, r, i, a, s, o;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: f
  } = e;
  p()(!(d && f), "These are not allowed to both be true.");
  let _ = u === eR.bb8.DISABLED,
    {
      disabledLocalVideos: h
    } = t0(l),
    m = null != (t = h[c]) && t,
    g = tV.has(c),
    E = u === eR.bb8.AUTO_ENABLED || u === eR.bb8.MANUAL_ENABLED;
  eV.info("disableVideo=".concat(_, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), p()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let y = _ !== m,
    b = l === eL.x.DEFAULT,
    O = f && y && b,
    v = d && y && b;
  eV.info("changed=".concat(y, " isDefaultContext=").concat(b, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: A
  } = t0(l);
  if (A[c] === eR.bb8.AUTO_PROBING && u === eR.bb8.AUTO_ENABLED && (0, er.A)(c, _ ? eL.Al.AUTO_DISABLE : eL.Al.AUTO_ENABLE, E), A[c] = u, nc({
      videoToggleStateMap: A
    }, l, d), u === eR.bb8.AUTO_PROBING ? null == (n = eS.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eS.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tF || (eV.info("isAutoDisableAllowed=".concat(tF, " - disabling VideoHealthManager")), null == (a = eS.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!_ && !g || _ && !tF) return;
    (0, er.A)(c, _ ? eL.Al.AUTO_DISABLE : eL.Al.AUTO_ENABLE, E), _ ? tV.add(c) : tV.delete(c)
  } else v && (g && !_ ? (eV.info("disallowing auto-disable for this session because of manual override by user"), tF = false, null == (o = eS.A.getRTCConnection()) || null == (s = o.getVideoHealthManager()) || s.disable(), (0, er.A)(c, eL.Al.MANUAL_REENABLE, E)) : (0, er.A)(c, _ ? eL.Al.MANUAL_DISABLE : eL.Al.MANUAL_ENABLE, E));
  b && !_ && tV.delete(c), _ ? h[c] = true : delete h[c], nc({
    disabledLocalVideos: h
  }, l, d), e4.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nk() {
  if (0 === tV.size) return;
  let e = eL.x.DEFAULT,
    {
      disabledLocalVideos: t
    } = t0(e);
  tV.forEach(n => {
    p()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e4.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tV.clear(), nc({
    disabledLocalVideos: t
  }, e, false)
}

function nU() {
  let e = eL.x.DEFAULT,
    {
      videoToggleStateMap: t
    } = t0(e);
  for (let [e, n] of Object.entries(t)) n === eR.bb8.AUTO_PROBING && delete t[e];
  nc({
    videoToggleStateMap: t
  }, e, false)
}

function nG(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eO.default.getId()) return;
  let i = t === eL.x.STREAM ? eL.Cn : eL.Hz,
    {
      localVolumes: a
    } = t0(t);
  r === i ? delete a[n] : a[n] = r, nc({
    localVolumes: a
  }, t), e4.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nV(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = t0(t);
  a[n] = {
    left: r,
    right: i
  }, nc({
    localPans: a
  }, t), e4.eachConnection(e => e.setLocalPan(n, r, i), t)
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
  }, t), e4.eachConnection(t1), no.update()
}

function nB(e) {
  let {
    volume: t
  } = e;
  nc({
    inputVolume: t2(t)
  }), e4.setInputVolume(t)
}

function nH(e) {
  let {
    volume: t
  } = e;
  nc({
    outputVolume: t
  }), e4.setOutputVolume(t)
}

function nY(e) {
  let {
    id: t
  } = e;
  t = nh(tn, t), tt = performance.now(), nc({
    inputDeviceId: t
  }), e4.setAudioInputDevice(t), e4.eachConnection(ne)
}

function nW(e) {
  let {
    id: t
  } = e;
  nc({
    outputDeviceId: t = nh(tr, t)
  }), e4.setAudioOutputDevice(t)
}

function nK(e) {
  let {
    id: t
  } = e;
  nc({
    videoDeviceId: t = nh(ti, t)
  }), t4()
}

function nz(e) {
  let {
    inputProfile: t
  } = e;
  nc({
    activeInputProfile: t
  });
  let n = t0();
  e4.eachConnection(e => {
    t1(e), ne(e)
  }), e4.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), no.update(), n6()
}

function nq(e) {
  return e9 !== e.required && (e9 = e.required, e.required || e4.interact(), true)
}

function nX(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  nm(t), ny(n), nb(r)
}

function nZ(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  nc({
    inputVolume: t2(t),
    outputVolume: n
  })
}

function nQ(e) {
  var t;
  let n = t0(),
    i = e4.getAudioSubsystem(),
    a = e4.getAudioLayer(),
    s = nh(tn, n.inputDeviceId),
    o = null == (t = tn[s]) ? true : t.name,
    l = (0, es.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
      location: "trackVoiceProcessing"
    });
  ep.default.track(eR.HAw.VOICE_PROCESSING, {
    echo_cancellation: n.echoCancellation,
    noise_cancellation: n.noiseCancellation,
    noise_suppression: n.noiseSuppression,
    automatic_gain_control: n.automaticGainControl,
    location: e,
    bypass_system_input_processing: n.bypassSystemInputProcessing,
    audio_subsystem: i,
    audio_layer: a,
    input_device: o,
    effective_noise_cancellation: l
  })
}

function n$(e) {
  let t = nc({
    echoCancellation: e.enabled
  });
  e4.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), n6(), nQ(e.location)
}

function nJ(e) {
  n1(e.enabled)
}

function n0(e) {
  let t = nc({
    sidechainCompressionStrength: e.strength
  });
  e4.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function n1(e) {
  let t = nc({
    sidechainCompression: e
  });
  e4.setSidechainCompression(t.sidechainCompression)
}

function n2(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tB.add(n) : tB.delete(n), n3(), n6()
}

function n3() {
  let e = !tB.has("voice_filter_preview") && !tB.has("mic_test");
  e4.setMaybePreprocessMute(e)
}

function n6() {
  let e = t0(),
    t = tB.size > 0,
    n = e.inputDeviceId,
    r = eA.A.hasEchoCancellation(n) || e.echoCancellation,
    i = !t,
    a = eA.A.hasNoiseSuppression(n) || e.noiseSuppression,
    s = t7(eA.A.hasAutomaticGainControl(n) || e.automaticGainControl),
    o = e.noiseCancellation,
    l = null !== tC,
    c = tB.has("voice_filter") && 1 === tB.size;
  e4.setLoopback(t, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: s,
    noiseCancellation: o,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function n4() {
  var e, t, n, r;
  if (!e4.supports(eL.O5.VAAPI)) return;
  let i = 4098;
  (null == (n = window.DiscordNative) || null == (t = n.processUtils) ? true : t.getSystemInfo) == null || (null != (e = null == (r = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : r.gpuDevice) ? e : []).some(e => e.vendorId === i) && (tq = true, tz = e4.supports(eL.O5.GAMESCOPE_CAPTURE))
}

function n5(e) {
  let t = nc({
    noiseSuppression: e.enabled
  });
  e4.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), n6(), nQ(e.location)
}

function n7(e) {
  let t = nc({
    automaticGainControl: e.enabled
  });
  e4.eachConnection(e => t8(e, t.automaticGainControl)), n6(), nQ(e.location)
}

function n8(e) {
  let t = nc({
    noiseCancellation: e.enabled
  });
  e4.eachConnection(e => t9(e, t.noiseCancellation)), n6(), nQ(e.location)
}

function n9(e) {
  ea.A.setKrispModelOverride(e.model), c = e.model, n6()
}

function re(e) {
  var t;
  (0, em.isWeb)() || (tT = e.enabled, null == (t = e4.setNoiseCancellationEnableStats) || t.call(e4, e.enabled))
}

function rt(e) {
  nc({
    silenceWarning: e.enabled
  }), no.update()
}

function rn(e) {
  e4.setDebugLogging(e.enabled)
}

function rr(e) {
  let {
    level: t
  } = e;
  l = t, ea.A.setKrispSuppressionLevel(t)
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

function rs(e) {
  let {
    enabled: t
  } = e;
  nc({
    useSystemScreensharePicker: t
  })
}

function ro(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = nc({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  e4.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function rl(e) {
  let {
    enabled: t
  } = e;
  nc({
    qos: t
  }), e4.eachConnection(e => e.setQoS(t))
}

function rc() {
  nu()
}

function ru(e) {
  let {
    inputDetected: t
  } = e;
  ty = t, !tb && ty && (tb = true, no.update())
}

function rd(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tl) returnfalse;
  tl = n, e4.eachConnection(t3)
}

function rf(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eP.hL.ACCEPTED;
  switch (n) {
    case eP.iL.AUDIO:
      tU = true, e4.eachConnection(t3);
      break;
    case eP.iL.CAMERA:
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
    await ey.Ay.ensureModule("discord_krisp");
    let a = ey.Ay.requireModule("discord_krisp");
    tI = true, o = null == (t = a.getSdkVersion) ? true : t.call(a), l = null != (e = null == (n = a.getSuppressionLevel) ? true : n.call(a)) ? e : 100, null == (i = a.getNcModels) || i.call(a).then(e => {
      tS = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eV.warn("Failed to load Krisp module: ".concat(t.message)), eE.A.captureException(t);
    let e = eL.CO.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eL.CO.INITIALIZED : n
    }
    ep.default.track(eR.HAw.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), nc({
      noiseCancellation: false
    })
  } finally {
    tA = false
  }
}

function rh() {
  return (0, em.isWindows)() || (0, em.isLinux)() || (0, em.isMac)()
}

function rm() {
  !rh() || __OVERLAY__ || tA || tI ? (0, em.isWeb)() && e4.supports(eL.O5.NOISE_CANCELLATION) ? (tI = true, r.emitChange()) : (0, em.isWeb)() && nc({
    noiseCancellation: false
  }) : (tA = true, r_())
}

function rg(e) {
  let {
    enabled: t
  } = e;
  ep.default.track(eR.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tC ? tC : null,
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
  }), e4.eachConnection(e => e.setVoiceFilterId(t))
}

function ry() {
  nc({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rb(e) {
  let {
    voiceFilterId: t
  } = e;
  tR = tC, tw = tN, tC = t, tN = null === t ? null : Date.now()
}

function rO(e) {
  let t = e.bypassEnabled;
  nc({
    bypassSystemInputProcessing: t
  }), e4.setAudioInputBypassSystemProcessing(t), nQ(e.location)
}

function rv(e) {
  rA(e.subsystem)
}

function rA(e) {
  e === eL.rB.AUTOMATIC ? (nc({
    automaticAudioSubsystem: true
  }), rI()) : (nc({
    automaticAudioSubsystem: false
  }), e4.setAudioSubsystem(e))
}

function rI() {
  e4.queueAudioSubsystem(eL.rB.EXPERIMENTAL)
}

function rS(e) {
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
  let a = t0();
  (a.mute || a.deaf) && (nc({
    deaf: false,
    mute: false
  }), e4.eachConnection(t3))
}

function rT(e) {
  let {
    application: t
  } = e;
  e7.add(t.id)
}

function rC(e) {
  let {
    application: t
  } = e;
  e7.delete(t.id)
}

function rN(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e8 = false, e4.eachConnection(t3);
      break;
    case "video":
      t4(false)
  }
}

function rR(e) {
  e8 = e.enabled, e.unmute && nc({
    mute: false,
    deaf: false
  }), e4.eachConnection(t3)
}

function rw(e) {
  let {
    enabled: t
  } = e;
  ei.A.requestPermission(eP.iL.CAMERA), t4(t)
}

function rP(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e;
  if (!(0, R.Ao)() || null == I.A) returnfalse;
  let a = null,
    o = null,
    l = e_.A.getPidFromDesktopSource(t);
  ({
    soundshareId: a,
    soundshareSession: o
  } = nv(l));
  let c = {
    desktopSource: {
      id: t,
      sourcePid: l,
      soundshareId: a,
      soundshareSession: o
    },
    quality: i
  };
  null != s && (e4.setClipsSource(null), (0, em.isWindows)() && null != s.desktopSource.soundshareId && S.c1(s.desktopSource.soundshareId)), null != a && nA(a, o), s = c;
  let u = tZ(),
    d = t0().videoHook;
  e4.setClipsSource({
    desktopDescription: {
      id: s.desktopSource.id,
      soundshareId: s.desktopSource.soundshareId,
      useVideoHook: d,
      useGraphicsCapture: nn(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: ni(),
      videoHookStaleFrameTimeoutMs: eq,
      graphicsCaptureStaleFrameTimeoutMs: eX,
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
  false === t.decoupledClipsEnabled && (s = null, e4.setClipsSource(null))
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
        sound: s
      } = a.desktopSettings,
      o = null != (t = a.context) ? t : eL.x.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === s ? null : e_.A.getPidFromDesktopSource(i);
    em.isPlatformEmbedded && true === s && ({
      soundshareId: e,
      soundshareSession: r
    } = nv(c), null != e && nA(e, r)), t6(o), t4(o === eL.x.STREAM && tu, {
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
    let e = null != (r = a.context) ? r : eL.x.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      s = e === eL.x.STREAM && tu,
      o = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    t4(s, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: o.resolution,
        frameRate: o.frameRate
      }
    })
  } else t4(tu, null)
}

function rL(e) {
  let {
    section: t
  } = e;
  return t === eR.nc_.VOICE && nf(), false
}

function rj() {
  return e4.eachConnection(ne), false
}

function rM(e) {
  let {
    enabled: t
  } = e, n = nc({
    aecDumpEnabled: t
  });
  e4.setAecDump(n.aecDumpEnabled)
}

function rk(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e5 = Object.values(eL.x).reduce((e, n) => {
    let r = n,
      i = e3();
    return e[r] = h().merge(i, t[r]), e
  }, {}), O.w.set(eF, e5), nd()
}

function rU(e) {
  let {
    state: t
  } = e, n = L.A.isEnabled();
  if (t === eR.g6G.BACKGROUND && tu && !n) tg = true, t4(false);
  else {
    if (t !== eR.g6G.ACTIVE || !tg) returnfalse;
    tg = false, t4(true)
  }
  returntrue
}

function rG(e) {
  e4.eachConnection(t => t.setBitRate(e.bitrate))
}

function rV() {
  if (!tu && null == a || null != eS.A.getRTCConnectionId()) returnfalse;
  t4(false, null)
}

function rF() {
  return !!tD && (tD = false, true)
}

function rB(e) {
  e4.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rH(e) {
  let {
    settings: t
  } = e;
  e4.applyMediaFilterSettings(t).finally(() => {
    tx = false, r.emitChange()
  })
}

function rY() {
  tx = true
}

function rW() {
  tx = false
}

function rK(e) {
  tW = e.enabled
}

function rz() {
  if ((0, em.isDesktop)() && em.isPlatformEmbedded && !tX) {
    tX = true;
    let e = async () => {
      let t = await new Promise(e => {
        ey.Ay.pollQueueMetrics(t => {
          e(t)
        })
      });
      t.periodMs = eL.tl;
      let n = rX(t);
      null !== n && ep.default.track(eR.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eL.tl)
    };
    setTimeout(e, eL.tl)
  }
}
class rq extends(d = Chunk311907.Ay.Store) {
  initialize() {
    nt(), nl(), rm(), nU(), rz(), tH = {
      [eL.O5.VIDEO]: e4.supports(eL.O5.VIDEO),
      [eL.O5.DESKTOP_CAPTURE]: e4.supports(eL.O5.DESKTOP_CAPTURE),
      [eL.O5.HYBRID_VIDEO]: e4.supports(eL.O5.HYBRID_VIDEO)
    }, this.waitFor(eO.default, ev.A, eA.A, eI.A, C.A, x.A, eS.A, j.Ay, eo.A, eu.A, eC.default, eN.A, ef.A)
  }
  supports(e) {
    return e4.supports(e)
  }
  supportsInApp(e) {
    return tH[e] || e4.supports(e)
  }
  isSupported() {
    return e4.supported()
  }
  isNoiseSuppressionSupported() {
    return e4.supports(eL.O5.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return rp()
  }
  isNoiseCancellationError() {
    return tD
  }
  isAutomaticGainControlSupported() {
    return e4.supports(eL.O5.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !ns() && (e4.supports(eL.O5.LEGACY_AUDIO_SUBSYSTEM) || e4.supports(eL.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return e4.supports(eL.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e4.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return rp()
  }
  isAecDumpSupported() {
    return e4.supports(eL.O5.AEC_DUMP)
  }
  isSimulcastSupported() {
    return e4.supports(eL.O5.VIDEO) && e4.supports(eL.O5.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = eI.A.getChannel(tP)) ? true : e.type) !== eR.rbe.GUILD_STAGE_VOICE && e0 && K.A.simulcastEnabled()
  }
  isVideoDecoderFallbackEnabled() {
    return tk
  }
  getAecDump() {
    return t0().aecDumpEnabled
  }
  getMediaEngine() {
    return e4
  }
  getVideoComponent() {
    return e4.Video
  }
  getCameraComponent() {
    return e4.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return tT
  }
  isEnabled() {
    return e8
  }
  isMute() {
    return this.isSelfMute() || ts
  }
  isDeaf() {
    return this.isSelfDeaf() || tc
  }
  hasContext(e) {
    return null != e5[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT;
    return e === eL.x.DEFAULT && to
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT;
    return !this.isEnabled() || t0(e).mute || !ei.A.didHavePermission(eP.iL.AUDIO) || this.isSelfDeaf(e) || e === eL.x.DEFAULT && tl
  }
  shouldSkipMuteUnmuteSound() {
    return tp
  }
  notifyMuteUnmuteSoundWasSkipped() {
    tp = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && eA.A.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tW
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT;
    return !this.isSupported() || t0(e).deaf
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
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.STREAM;
    return te === e && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.STREAM;
    return te === t && null != a && (null == (e = a.desktopSource) ? true : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.x.DEFAULT;
    return e !== eO.default.getId() && (t0(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return e4.supports(eL.O5.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.x.DEFAULT;
    return null != (t = t0(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.x.DEFAULT;
    return null != (t = t0(n).videoToggleStateMap[e]) ? t : eR.bb8.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.x.DEFAULT;
    return t === eL.x.DEFAULT && tV.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT;
    return e === eL.x.DEFAULT && tV.size > 0
  }
  isMediaFilterSettingLoading() {
    return tx
  }
  isNativeAudioPermissionReady() {
    return tU
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
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.x.DEFAULT,
      n = t0(t).localPans[e];
    return null != n ? n : ez
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eL.x.DEFAULT,
      n = t === eL.x.STREAM ? eL.Cn : eL.Hz,
      r = t0(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return t0().inputVolume
  }
  getOutputVolume() {
    return t0().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT;
    return t0(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT;
    return t0(e).modeOptions
  }
  getActiveVoiceFilter() {
    return tC
  }
  getActiveVoiceFilterAppliedAt() {
    return tN
  }
  getPreviousVoiceFilter() {
    return tR
  }
  getPreviousVoiceFilterAppliedAt() {
    return tw
  }
  getMostRecentlyRequestedVoiceFilter() {
    return t0().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return t0().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return h().each(e5, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eR.TBI.PUSH_TO_TALK && e7.has(n) && (e[n] = i)
    }), e
  }
  getInputDeviceId() {
    return nh(tn, t0().inputDeviceId)
  }
  getOutputDeviceId() {
    return nh(tr, t0().outputDeviceId)
  }
  getVideoDeviceId() {
    return nh(ti, t0().videoDeviceId)
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
    let e = t0();
    return eA.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getSidechainCompression() {
    return e4.supports(eL.O5.SIDECHAIN_COMPRESSION) && t0().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return t0().sidechainCompressionStrength
  }
  getH265Enabled() {
    return t0().h265Enabled
  }
  hasH265HardwareDecode() {
    return null !== tj && tj
  }
  getLoopback() {
    return tB.size > 0
  }
  getLoopbackReasons() {
    return tB
  }
  getNoiseSuppression() {
    let e = t0();
    return eA.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = t0();
    return eA.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return t0().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return t0().noiseCancellation
  }
  getHardwareEncoding() {
    return e0
  }
  getEnableSilenceWarning() {
    return t0().silenceWarning
  }
  getDebugLogging() {
    return e4.getDebugLogging()
  }
  getQoS() {
    return t0().qos
  }
  getAttenuation() {
    return t0().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return t0().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return t0().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return na() && t0().automaticAudioSubsystem ? eL.rB.AUTOMATIC : e4.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return e4.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return t0().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == e || e === ex.my.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT;
    return t0(e)
  }
  getState() {
    return {
      settingsByContext: e5,
      inputDevices: tn,
      outputDevices: tr,
      appSupported: tH,
      krispModuleLoaded: tI,
      krispVersion: o,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: te
    }
  }
  getInputDetected() {
    return ty
  }
  getNoInputDetectedNotice() {
    return tO
  }
  getPacketDelay() {
    return em.isPlatformEmbedded || this.getMode() !== eR.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    e4.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return e9
  }
  getVideoHook() {
    return t0().videoHook
  }
  supportsVideoHook() {
    return e4.supports(eL.O5.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = t0().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return e4.supports(eL.O5.EXPERIMENTAL_SOUNDSHARE) && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, ew.$x)
  }
  supportsHookSoundshare() {
    return (0, em.isWindows)() && e4.supports(eL.O5.SOUNDSHARE) && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, ew.ws)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = t0().useSystemScreensharePicker,
      n = (0, em.isLinux)();
    return e && (null != t ? t : n)
  }
  supportsSystemScreensharePicker() {
    return e4.supports(eL.O5.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tq
  }
  getUseGamescopeCapture() {
    return tz
  }
  getEverSpeakingWhileMuted() {
    return t_
  }
  getSpeakingWhileMuted() {
    return th
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tS
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = t0().modeOptions.vadKrispActivationThreshold) ? e : eK
  }
  hasActiveCallKitCall() {
    return tK
  }
  setHasActiveCallKitCall(e) {
    tK = e
  }
  supportsScreenSoundshare() {
    return (0, em.isMac)() ? e4.supports(eL.O5.SOUNDSHARE) && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, ew.P$) && ni() : (0, em.isWindows)() ? e4.supports(eL.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, em.isLinux)() && e4.supports(eL.O5.SCREEN_SOUNDSHARE)
  }
  getSystemMicrophoneMode() {
    if ((0, em.isWindows)()) {
      var e, t;
      return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects) ? true : e.find(e => e === e1)
    }
    if ((0, em.isMac)() || (0, em.isIOS)()) return u
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eL.x.DEFAULT,
      t = this.supports(eL.O5.VIDEO) ? [{
        rid: "100",
        type: e === eL.x.DEFAULT ? eL.mI.VIDEO : eL.mI.SCREEN,
        quality: eL.Y4
      }] : [];
    return this.isSimulcastSupported() && (e === eL.x.DEFAULT || this.goLiveSimulcastEnabled()) && t.push({
      rid: "50",
      type: e === eL.x.DEFAULT ? eL.mI.VIDEO : eL.mI.SCREEN,
      quality: eL.Cl
    }), t
  }
  fetchAsyncResources() {
    let e = {
      fetchDave: false
    };
    return (0, em.isWeb)() && (e.fetchDave = $.f1.getCurrentConfig({
      location: "MediaEngineStore fetchAsyncResources"
    }).loadWasmModule), e4.fetchAsyncResources(e)
  }
  startDavePreload() {
    if (!tL && (tL = true, (0, em.isWeb)())) {
      let e = {
        fetchDave: true
      };
      e4.fetchAsyncResources(e).catch(e => {
        eV.warn("DAVE preload failed:", e), eE.A.captureException(e)
      })
    }
  }
  getSupportedSecureFramesProtocolVersion() {
    if ((0, em.isWeb)()) {
      let {
        useWasmModule: e
      } = $.f1.getCurrentConfig({
        location: "MediaEngineStore getSupportedSecureFramesProtocolVersion"
      });
      if (!e) return 0
    }
    let e = e4.getSupportedSecureFramesProtocolVersion();
    114 === e && (e = 1);
    let t = $.ex.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      n = $.a.getConfig({
        location: "MediaEngineStore"
      });
    return (t.canSupportDaveProtocol || n.allowOptIn && eo.A.getPersistentCodesEnabled()) && e >= t.protocolVersionFloor ? e : 0
  }
  hasClipsSource() {
    return null != s
  }
  getGpuBrand() {
    return tY
  }
}

function rX(e) {
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
eM(rq, "displayName", "MediaEngineStore");
let rZ = r = new rq(Chunk73153.h, {
  VOICE_CHANNEL_SELECT: rS,
  VOICE_STATE_UPDATES: nR,
  CONNECTION_OPEN: nI,
  CONNECTION_CLOSED: nT,
  POST_CONNECTION_OPEN: nC,
  RTC_CONNECTION_STATE: nN,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nw,
  AUDIO_TOGGLE_SELF_MUTE: nP,
  AUDIO_SET_SELF_MUTE: nD,
  AUDIO_TOGGLE_SELF_DEAF: nL,
  AUDIO_TOGGLE_LOCAL_MUTE: nj,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nM,
  AUDIO_SET_LOCAL_VOLUME: nG,
  AUDIO_SET_LOCAL_PAN: nV,
  AUDIO_SET_MODE: nF,
  AUDIO_SET_INPUT_VOLUME: nB,
  AUDIO_SET_OUTPUT_VOLUME: nH,
  AUDIO_SET_INPUT_DEVICE: nY,
  AUDIO_SET_OUTPUT_DEVICE: nW,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nz,
  AUDIO_SET_ECHO_CANCELLATION: n$,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nJ,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n0,
  AUDIO_SET_LOOPBACK: n2,
  AUDIO_SET_NOISE_SUPPRESSION: n5,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n7,
  AUDIO_SET_NOISE_CANCELLATION: n8,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: n9,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: rt,
  AUDIO_SET_DEBUG_LOGGING: rn,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rr,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: re,
  MEDIA_ENGINE_SET_VIDEO_HOOK: ri,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ra,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rs,
  AUDIO_SET_ATTENUATION: ro,
  AUDIO_SET_QOS: rl,
  MEDIA_ENGINE_DEVICES: nX,
  AUDIO_VOLUME_CHANGE: nZ,
  AUDIO_RESET: rc,
  AUDIO_INPUT_DETECTED: ru,
  AUDIO_SET_SUBSYSTEM: rv,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rO,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rR,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rw,
  MEDIA_ENGINE_PERMISSION: rN,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rx,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nK,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nq,
  USER_SETTINGS_MODAL_INIT: rL,
  USER_SETTINGS_MODAL_SET_SECTION: rL,
  CERTIFIED_DEVICES_SET: rj,
  RPC_APP_CONNECTED: rT,
  RPC_APP_DISCONNECTED: rC,
  OVERLAY_INITIALIZE: nS,
  APP_STATE_UPDATE: rU,
  SET_CHANNEL_BITRATE: rG,
  SET_VAD_PERMISSION: rd,
  SET_NATIVE_PERMISSION: rf,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rB,
  MEDIA_ENGINE_SET_AEC_DUMP: rM,
  MEDIA_ENGINE_RESET_SETTINGS: rk,
  CHANNEL_DELETE: rV,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rF,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rH,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rY,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rW,
  USER_SETTINGS_PROTO_UPDATE: nx,
  CLIPS_INIT: rP,
  CLIPS_SETTINGS_UPDATE: rD,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rK,
  VOICE_FILTER_REQUEST_SWITCH: rE,
  VOICE_FILTER_LOOPBACK_TOGGLE: rg,
  VOICE_FILTER_APPLIED: rb,
  VOICE_FILTER_DOWNLOAD_FAILED: ry,
  VOICE_FILTER_APPLY_FAILED: ry
})