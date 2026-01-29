/** Chunk was on web.js **/
/** chunk id: 430452, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u;
require.d(exports, {
  A: () => rX
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
  Chunk709710 = require("./709710.js"),
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
  Chunk765396 = require("./765396.js"),
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

function ek(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eU(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ek(e, t, n[t])
    })
  }
  return e
}

function eG(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eF(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eG(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eV = new Chunk626584.A("MediaEngineStore"),
  eB = "MediaEngineStore",
  eH = 4,
  eY = 1,
  eW = 1,
  eK = 1,
  ez = .5,
  eq = {
    left: 1,
    right: 1
  },
  eZ = 500,
  eQ = 5 * Chunk927813.A.Millis.SECOND,
  eX = false,
  eJ = 100,
  e$ = 2 * Chunk927813.A.Millis.SECOND,
  e0 = 30 * Chunk927813.A.Millis.SECOND,
  e1 = true,
  e2 = "deep_noise_suppression",
  e3 = 0;

function e6() {
  return {
    mode: eR.TBI.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eX,
      autoThreshold: eg.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: ez,
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
    inputVolume: eM.Hz,
    outputVolume: eM.Hz,
    inputDeviceId: eM.dx,
    outputDeviceId: eM.dx,
    videoDeviceId: eM.dx,
    qos: false,
    qosMigrated: false,
    videoHook: e5.supports(eM.O5.VIDEO_HOOK),
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
  e5 = (0, Chunk205693.hB)((0, Chunk205693.WI)());
eV.enableNativeLogger(true);
let e7 = {},
  e8 = new Set([Chunk731854.x.DEFAULT]),
  e9 = e5.supports(Chunk731854.O5.AUTO_ENABLE),
  te = false,
  tt = Chunk731854.x.STREAM,
  tn = performance.now(),
  tr = {
    [Chunk731854.dx]: n_("No Input Devices")
  },
  ti = {
    [Chunk731854.dx]: n_("No Output Devices")
  },
  ta = {
    [Chunk731854.dx]: n_("No Video Devices")
  },
  to = new Chunk451988.Ep,
  ts = false,
  tl = false,
  tc = false,
  tu = false,
  td = false,
  tf = Chunk731854.qe,
  tp = Chunk731854.qe,
  t_ = false,
  th = false,
  tm = false,
  tg = new Chunk451988.Ep,
  tE = false,
  ty = false,
  tb = null,
  tO = false,
  tv = false,
  tA = false,
  tI = false,
  tS = false,
  tT = [],
  tC = false,
  tN = null,
  tw = null,
  tR = null,
  tP = null,
  tD = null,
  tL = false,
  tx = false,
  tM = false,
  tj = null,
  tk = null,
  tU = false,
  tG = false;
Chunk674966.A.hasPermission(Chunk765682.iL.AUDIO, {
  showAuthorizationError: false
}), Chunk674966.A.hasPermission(Chunk765682.iL.CAMERA, {
  showAuthorizationError: false
});
let tF = false,
  tV = new Set,
  tB = tF,
  tH = new Set,
  tY = {},
  tW = null,
  tK = true,
  tz = false,
  tq = false,
  tZ = false,
  tQ = false;

function tX() {
  var e, t;
  return null != (e = null == (t = eN.default.getCurrentUser()) ? true : t.isStaff()) && e ? "always" : eE.y === E.O.CANARY ? "permittedDevicesOnly" : "never"
}
async function tJ() {
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
  return null != tk ? tk : "u" > typeof window ? tk = tJ().then(e => (tj = e, e)) : Promise.resolve(false)
}

function t0() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
    t = e7[e];
  return null == t && (t = e6(), e7[e] = t), t
}

function t1() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
    i = t0(r),
    a = e4[null != (e = i.activeInputProfile) ? e : ex.my.CUSTOM],
    o = eU({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, $.R)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, k.F)({
      location: "getSettings"
    });
    null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold)
  }
  return eF(eU({}, i, a), {
    modeOptions: o
  })
}

function t2(e) {
  var t, n;
  let r = t1(e.context),
    i = r.mode;
  e.context === eM.x.DEFAULT && ((0, eu.H)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eR.TBI.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eR.TBI.VOICE_ACTIVITY), (0, X.N)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && r_(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : ez,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function t3(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eM.Hz;
  return h().clamp(e, 0, t)
}

function t6(e) {
  let t = t1(e.context),
    n = !e9 || t.mute || t.deaf;
  e.context === eM.x.DEFAULT ? n = n || ts || tl || tc || !ea.A.didHavePermission(eD.iL.AUDIO) : e.context === eM.x.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eM.x.DEFAULT && T.A.updateNativeMute()
}

function t4(e) {
  e !== tt && (null != a && e5.setGoLiveSource(null, tt), tt = e)
}

function t5() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : td,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : e.id) && (null != s.desktopSource.soundshareId && (0, eg.isWindows)() && S.c1(s.desktopSource.soundshareId), e5.setGoLiveSource(null, tt)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : n.audioDeviceGuid)) && e5.setGoLiveSource(null, tt), td || i) {
    let e = t1().videoDeviceId;
    td && e === eM.dx && tp === eM.dx && tf !== eM.qe ? e = tf : tp = e, tf = (td = i) ? nm(ta, e) : eM.qe, e5.setVideoInputDevice(tf)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tX(),
        n = t1().videoHook,
        i = nr(),
        a = i ? ni() ? eP.zl : eP.eg : 0,
        s = (0, eg.isWindows)() && (0, ee.b)("updateVideo").enabled;
      e5.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: n,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: s,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: na(),
          videoHookStaleFrameTimeoutMs: eZ,
          graphicsCaptureStaleFrameTimeoutMs: eQ,
          hdrCaptureMode: t,
          enableGlobalFramePoolLock: (0, W.H)({
            location: "updateVideo"
          }).enabled
        },
        quality: e
      }, tt)
    }
    null != o.cameraSource && e5.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: e
    }, tt)
  }
}

function t7(e) {
  switch (e) {
    case eM.CO.CPU_OVERUSE:
      return D.B6.NoiseCancellerCpuOveruse;
    case eM.CO.FAILED:
      return D.B6.NoiseCancellerFailed;
    case eM.CO.VAD_CPU_OVERUSE:
      return D.B6.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function t8(e) {
  let t = (0, k.F)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eU({
    enabled: e
  }, t)
}

function t9(e, t) {
  e.setAutomaticGainControl(t8(t))
}

function ne(e, t) {
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
    vadAfterWebrtc: o
  } = (0, Z.$)({
    location: "setNoiseCancellation"
  });
  e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(o)
}

function nt(e) {
  let t = t1(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eI.A.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eI.A.hasNoiseSuppression(n) || t.noiseSuppression), t9(e, eI.A.hasAutomaticGainControl(n) || t.automaticGainControl), ne(e, t.noiseCancellation), e.setVoiceFilterId(tN), (0, eg.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function nn() {
  to.start(e0, () => {
    eV.error("Device enumeration timed out"), e_.default.track(eR.HAw.DEVICE_ENUMERATION_TIMEOUT, {})
  }), e5.on(b.bg.Connection, e => {
    t2(e), t6(e), nt(e);
    let t = t1();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
    let n = (0, q.K)({
      location: "setupMediaEngine"
    }).treatment;
    tU = n === q.c.NoSoftwareDecodeWithFallback, n === q.c.NoSoftwareDecode || n === q.c.NoSoftwareDecodeWithFallback ? (e.setExperimentFlag(eM.fd.H265_HARDWARE_ONLY, true), (0, eg.isWindows)() ? t$().then(t => {
      e.setExperimentFlag(eM.fd.H265_HARDWARE_DECODE_AVAILABLE, t)
    }) : (0, eg.isMac)() && e.setExperimentFlag(eM.fd.H265_HARDWARE_DECODE_AVAILABLE, true)) : n === q.c.Disabled && (e.setExperimentFlag(eM.fd.H265_HARDWARE_ONLY, true), e.setExperimentFlag(eM.fd.H265_HARDWARE_DECODE_AVAILABLE, false)), (0, eg.isWindows)() && (0, z.r)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eM.fd.USE_H264_MF_DECODER, true);
    let i = eT.A.getGuildId(),
      {
        muteBeforeProcessing: o,
        pttBeforeProcessing: s,
        skipEncode: l
      } = (null != i ? H.A : B.A).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != i ? i : true
      }, {
        autoTrackExposure: true
      });
    o && e.setExperimentFlag(eM.fd.MUTE_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eM.fd.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(eM.fd.SKIP_ENCODE, true), (0, Q.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eM.fd.LOW_LATENCY_RATE_CONTROL, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(eM.fd.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(eM.fd.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(eM.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eM.x.STREAM) {
      let t = nE(ti);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = K.A.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, eg.isWindows)() ? e.setExperimentFlag(eM.fd.SIGNAL_AV1, true) : ((0, eg.isMac)() || (0, eg.isLinux)()) && e.setExperimentFlag(eM.fd.SIGNAL_AV1_DECODE, true), (0, eg.isWindows)() && e.setExperimentFlag(eM.fd.SIGNAL_AV1_HARDWARE_DECODE, true), (0, eg.isWeb)()) {
      let {
        enabled: t
      } = (0, Y.O)("MediaEngineStore");
      e.setExperimentFlag(eM.fd.BROWSER_HEVC, t)
    }
    if ((0, eg.isWindows)() && (null == tW ? true : tW.startsWith("AMD")) && (0, en.F)("MediaEngineStore").enabled && e.setExperimentFlag(eM.fd.WMF_GPU_ENCODE, true), (0, eg.isWindows)() && (null == tW ? true : tW.startsWith("Intel")) && (0, er.J)("MediaEngineStore").enabled && e.setExperimentFlag(eM.fd.WMF_GPU_ENCODE, true), (0, eg.isWindows)() && (null == tW ? true : tW.startsWith("Qualcomm")) && (0, en.F)("MediaEngineStore").enabled && e.setExperimentFlag(eM.fd.WMF_GPU_ENCODE, true), e5.setHasFullbandPerformance((0, P.A)()), e.setRemoteAudioHistory(1e3), (0, N.A)(r)) {
      let {
        enableViewerClipping: t
      } = et.A.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eM.X1)
    }
    for (let n of (t = t1(e.context), e.setPostponeDecodeLevel(eJ), Object.keys(t.localMutes))) n !== ev.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== ev.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
    }), e.context === eM.x.DEFAULT && (th = false, tm = false, e.on(b.yq.SpeakingWhileMuted, () => {
      th = true, tm = true, r.emitChange(), tg.stop(), tg.start(e$, () => {
        tm = false, r.emitChange()
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
    }), e.on(b.yq.VideoHookInitialize, (e, t, n, r, i, o) => {
      (null == a ? true : a.desktopSource) != null && e_.default.track(eR.HAw.VIDEOHOOK_INITIALIZED, eU({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, j.A)(null == a ? true : a.desktopSource)))
    }), e.on(b.yq.NoiseCancellationError, e => {
      eV.warn("noisecancellererror event: ".concat(e)), (0, D.QW)({
        type: D.iy.NOISE_CANCELLER_ERROR,
        underlyingError: t7(e)
      }), tL = true, e_.default.track(eR.HAw.VOICE_PROCESSING, {
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
        underlyingError: t7(e)
      }), e_.default.track(eR.HAw.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), A.h.dispatch({
        type: "AUDIO_SET_MODE",
        context: eM.x.DEFAULT,
        mode: eR.TBI.VOICE_ACTIVITY,
        options: eF(eU({}, t1(eM.x.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), A.h.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.yq.SdpError, (e, t, n, r) => {
      e_.default.track(eR.HAw.SDP_ERROR, {
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
    }), e.setBitRate(eA.A.bitrate), e.applyVideoQualityMode(ew.A.mode), e5.supports(eM.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e5.setAsyncVideoInputDeviceInit((0, F.v)("setupMediaEngine").enabled)
  }), e5.on(b.bg.DeviceChange, (e, t, n) => {
    to.stop(), A.h.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), e5.on(b.bg.VolumeChange, (e, t) => {
    A.h.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), e5.on(b.bg.DesktopSourceEnd, (e, t) => {
    A.h.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), e5.on(b.bg.AudioPermission, e => {
    tG = true, A.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), e5.on(b.bg.VideoPermission, e => {
    A.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), e5.on(b.bg.WatchdogTimeout, async () => {
    let e;
    try {
      await eh.A.submitLiveCrashReport({
        message: {
          message: "Voice Watchdog Timeout"
        }
      })
    } catch (t) {
      "number" == typeof t.status && (e = t.status)
    }
    eV.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), e_.default.track(eR.HAw.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: e
    })
  }), e5.on(b.bg.VideoInputInitialized, e => {
    e_.default.track(eR.HAw.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * em.A.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eT.A.getMediaSessionId(),
      rtc_connection_id: eT.A.getRTCConnectionId()
    })
  }), e5.on(b.bg.AudioInputInitialized, e => {
    e_.default.track(eR.HAw.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * em.A.Millis.SECOND),
      rtc_connection_id: eT.A.getRTCConnectionId()
    })
  }), e5.on(b.bg.ClipsRecordingRestartNeeded, () => {
    A.h.dispatch({
      type: "CLIPS_RESTART"
    })
  }), e5.on(b.bg.ClipsInitFailure, (e, t) => {
    A.h.wait(() => {
      A.h.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), e5.on(b.bg.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && S.c1(t), o = null)
  }), e5.on(b.bg.NativeScreenSharePickerUpdate, (e, t) => {
    A.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), e5.on(b.bg.NativeScreenSharePickerCancel, e => {
    A.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), e5.on(b.bg.NativeScreenSharePickerError, e => {
    A.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), e5.on(b.bg.AudioDeviceModuleError, (e, t, n) => {
    e_.default.track(eR.HAw.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), e5.on(b.bg.VideoCodecError, e => {
    let t = "encode" === e.mode ? D.iy.VIDEO_ENCODE_ERROR : D.iy.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, D.QW)(t === D.iy.VIDEO_ENCODE_ERROR ? eF(eU({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eF(eU({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), e5.on(b.bg.ConnectionStats, e => {
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
          version: e3++,
          context: n.context
        }
      })
    })
  }), e5.on(b.bg.VoiceQueueMetrics, e => {
    let t = rQ(e);
    null !== t && e_.default.track(eR.HAw.VOICE_QUEUE_METRICS, t)
  }), e5.setOnVideoContainerResized((e, t, n) => {
    A.h.wait(() => A.h.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      dimensions: {
        width: t,
        height: n
      }
    }))
  }), n6(), n5(), e5.supports(eM.O5.ASYNC_CLIPS_SOURCE_DEINIT) && e5.setAsyncClipsSourceDeinit((0, V.V)("setupMediaEngine").enabled), nl.reset(), (0, eC.w)().then(e => {
    null != e && (tW = e.gpu_brand)
  }), e5.on(b.bg.SystemMicrophoneModeChange, e => {
    u = e, e5.eachConnection(nt)
  })
}

function nr() {
  return (0, eg.isWindows)() && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, eP.yg)
}

function ni() {
  return (0, eg.isWindows)() && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, eP.fG)
}

function na() {
  return (0, eg.isMac)() && e5.supports(eM.O5.SCREEN_CAPTURE_KIT) && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, eP.e)
}

function no() {
  return (0, eg.isWindows)() && e5.supports(eM.O5.AUTOMATIC_AUDIO_SUBSYSTEM) && e5.supports(eM.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function ns() {
  return e5.supports(eM.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let nl = new class {
  start() {
    this.started || (this.started = true, e5.on(b.bg.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), e5.removeListener(b.bg.Silence, this.handleSilence), A.h.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = t1();
    !tO && eT.A.getState() === eR.S7L.RTC_CONNECTED && e.mode === eR.TBI.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    ek(this, "stateChangeTimeout", true), ek(this, "noVoiceTimeout", 5e3), ek(this, "voiceTimeout", 1500), ek(this, "started", false), ek(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (A.h.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tv = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function nc() {
  var e;
  let t = O.w.get("audio");
  null != t && (O.w.set(eB, {
    [eM.x.DEFAULT]: t
  }), O.w.remove("audio")), e7 = null != (e = O.w.get(eB)) ? e : {}, h().each(e7, e => {
    if (h().defaultsDeep(e, e6()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eO.OH)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eH && (e.vadUseKrispSettingVersion = eH, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eX)
    }
    e5.supports(eM.O5.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eK && (e.sidechainCompressionSettingVersion = eK, e.sidechainCompression = true), (0, eg.isWeb)() ? e.ncUseKrispjsSettingVersion !== eW && (e.ncUseKrispjsSettingVersion = eW, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eY && (e.ncUseKrispSettingVersion = eY, e.noiseSuppression = false, e.noiseCancellation = true)
  }), nf()
}

function nu(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eM.x.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = t0(t);
  return Object.assign(r, e), !__OVERLAY__ && n && O.w.set(eB, e7), r
}

function nd() {
  O.w.remove(eB), location.reload()
}

function nf() {
  let e = t1();
  e5.setAudioInputDevice(e.inputDeviceId), e5.setAudioOutputDevice(e.outputDeviceId), t5(), e5.setInputVolume(e.inputVolume), e5.setOutputVolume(e.outputVolume), e5.setAecDump(e.aecDumpEnabled), e5.setSidechainCompression(e.sidechainCompression), e5.setSidechainCompressionStrength(e.sidechainCompressionStrength), e5.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing)
}

function np() {
  e9 || e5.enable().then(() => A.h.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function n_(e) {
  return {
    id: eM.dx,
    index: 0,
    name: e,
    disabled: true,
    guid: true,
    hardwareId: true,
    containerId: true
  }
}

function nh(e, t) {
  if (0 === e.length) {
    let e = n_(t);
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

function nm(e, t) {
  var n, r;
  let i = null != (n = null != (r = e[t]) ? r : e[eM.dx]) ? n : h()(e).values().first();
  return null != i ? i.id : t
}

function ng(e) {
  let t = tr;
  if (tr = nh(e, ej.intl.string(ej.t["/QIjDA"])), !h().isEqual(tr, t)) {
    let e = t1(),
      t = nm(tr, e.inputDeviceId);
    e5.setAudioInputDevice(t), e5.eachConnection(nt)
  }
}

function nE(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function ny(e) {
  e5.eachConnection(t => {
    t.context === eM.x.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nb(e) {
  let t = ti;
  if (ti = nh(e, ej.intl.string(ej.t.xlUg0v)), !h().isEqual(ti, t)) {
    let e = t1(),
      n = nm(ti, e.outputDeviceId);
    e5.setAudioOutputDevice(n);
    let r = nE(t),
      i = nE(ti);
    r !== i && ny(i)
  }
}

function nO(e) {
  ty = e.length > 0;
  let t = ta;
  if (ta = nh(e, ej.intl.string(ej.t.WKWARY)), td && !h().isEqual(ta, t)) {
    var n;
    let e = true !== ta[tf],
      r = tf === eM.dx && (null == (n = t[eM.dx]) ? true : n.disabled);
    t5(e || r)
  }
}

function nv() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
    r = null != (e = ed.A.settings.audioContextSettings) ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(r)) {
    let i = e === eL.W.USER ? eM.x.DEFAULT : eM.x.STREAM,
      a = i === eM.x.STREAM ? eM.Cn : eM.Hz,
      o = null != (t = r[e]) ? t : {},
      {
        localMutes: s,
        localVolumes: l
      } = t1(i);
    for (let [e, t] of Object.entries(o)) null == (0, ec.tM)(i, e) && (t.muted ? s[e] = true : delete s[e], t.volume !== a ? l[e] = t.volume : delete l[e], e5.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (n)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[e] && (delete s[e], delete l[e], e5.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    nu({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nA(e) {
  if (null == r) return eV.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : eh.A.getAudioPid(e),
      n = "";
    return null != t && (n = eh.A.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nI(e, t) {
  (0, eg.isWindows)() && e > 1 && S.GH(e, {
    soundshare_session: t
  }).then(t => {
    null == t || M.Ay.shouldContinueWithoutElevatedProcessForPID(e) || A.h.wait(() => {
      A.h.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function nS(e) {
  i = e.sessionId, ts = false, tu = false;
  let t = t1();
  if (no() && (ns() ? rI(eM.rB.AUTOMATIC) : t.automaticAudioSubsystem && rS()), e5.supports(eM.O5.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, eg.isDesktop)() ? e = (0, U.i)({
      location: "handleConnectionOpen"
    }).enabled: ((0, eg.isIOS)() || (0, eg.isAndroid)()) && (e = (0, G.Y)({
      location: "handleConnectionOpen"
    }).enabled), e5.setOffloadAdmControls(e)
  }(0, ef.Lb)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, eg.isDesktop)() && (ep.A.getLastInitAttemptMayHaveCrashed() ? (A.h.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eM.x.DEFAULT,
    playSoundEffect: true
  }), nu({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(342887).md()), nv()
}

function nT(e) {
  let {
    mediaEngineState: t
  } = e;
  e7 = t.settingsByContext, tr = t.inputDevices, ti = t.outputDevices, tY = t.appSupported, tS = t.krispModuleLoaded, s = t.krispVersion, tt = t.goLiveContext
}

function nC() {
  i = null
}

function nN() {
  if ((0, eg.isWeb)()) {
    let e = J.f1.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    e.loadWasmModule && e.preload && r.startDavePreload()
  }
  returnfalse
}

function nw(e) {
  switch (e.state) {
    case eR.S7L.CONNECTING:
      np();
      break;
    case eR.S7L.RTC_CONNECTING:
      tO = false, tv = false;
      break;
    case eR.S7L.RTC_CONNECTED:
      t5();
      break;
    case eR.S7L.DISCONNECTED:
      nU(), nG()
  }
  nl.update()
}

function nR(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      ts = t.mute || t.suppress, tu = t.deaf, e5.eachConnection(t6);
      let e = null != t.guildId && null != t.channelId && null != tD && tD !== t.channelId,
        n = !tA && null == t.channelId;
      return t5(!e && !n && td), tD = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== ev.default.getId() || null != eT.A.getChannelId() || t5(false, null), e
  }, false)
}

function nP(e) {
  let {
    mute: t
  } = e;
  tl = t, e5.eachConnection(t6)
}

function nD(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = t1(t);
  if (t === eM.x.DEFAULT && (ea.A.requestPermission(eD.iL.AUDIO), tc)) returnfalse;
  (r = !i && !r) || (i = false), n || (t_ = true), nu({
    mute: r,
    deaf: i
  }, t), e5.eachConnection(t6)
}

function nL(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  nu({
    mute: n
  }, t), r || (t_ = true), e5.eachConnection(t6)
}

function nx(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eL.oD.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nv(true)
}

function nM(e) {
  let {
    context: t
  } = e;
  nu({
    deaf: !t1(t).deaf
  }, t), e5.eachConnection(t6)
}

function nj(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === ev.default.getId()) return;
  let {
    localMutes: r
  } = t1(t);
  r[n] ? delete r[n] : r[n] = true, nu({
    localMutes: r
  }, t), e5.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nk(e) {
  var t, n, r, i, a, o, s;
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
    } = t1(l),
    m = null != (t = h[c]) && t,
    g = tV.has(c),
    E = u === eR.bb8.AUTO_ENABLED || u === eR.bb8.MANUAL_ENABLED;
  eV.info("disableVideo=".concat(_, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), p()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let y = _ !== m,
    b = l === eM.x.DEFAULT,
    O = f && y && b,
    v = d && y && b;
  eV.info("changed=".concat(y, " isDefaultContext=").concat(b, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: A
  } = t1(l);
  if (A[c] === eR.bb8.AUTO_PROBING && u === eR.bb8.AUTO_ENABLED && (0, ei.A)(c, _ ? eM.Al.AUTO_DISABLE : eM.Al.AUTO_ENABLE, E), A[c] = u, nu({
      videoToggleStateMap: A
    }, l, d), u === eR.bb8.AUTO_PROBING ? null == (n = eT.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eT.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tB || (eV.info("isAutoDisableAllowed=".concat(tB, " - disabling VideoHealthManager")), null == (a = eT.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!_ && !g || _ && !tB) return;
    (0, ei.A)(c, _ ? eM.Al.AUTO_DISABLE : eM.Al.AUTO_ENABLE, E), _ ? tV.add(c) : tV.delete(c)
  } else v && (g && !_ ? (eV.info("disallowing auto-disable for this session because of manual override by user"), tB = false, null == (s = eT.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, ei.A)(c, eM.Al.MANUAL_REENABLE, E)) : (0, ei.A)(c, _ ? eM.Al.MANUAL_DISABLE : eM.Al.MANUAL_ENABLE, E));
  b && !_ && tV.delete(c), _ ? h[c] = true : delete h[c], nu({
    disabledLocalVideos: h
  }, l, d), e5.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nU() {
  if (0 === tV.size) return;
  let e = eM.x.DEFAULT,
    {
      disabledLocalVideos: t
    } = t1(e);
  tV.forEach(n => {
    p()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e5.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tV.clear(), nu({
    disabledLocalVideos: t
  }, e, false)
}

function nG() {
  let e = eM.x.DEFAULT,
    {
      videoToggleStateMap: t
    } = t1(e);
  for (let [e, n] of Object.entries(t)) n === eR.bb8.AUTO_PROBING && delete t[e];
  nu({
    videoToggleStateMap: t
  }, e, false)
}

function nF(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === ev.default.getId()) return;
  let i = t === eM.x.STREAM ? eM.Cn : eM.Hz,
    {
      localVolumes: a
    } = t1(t);
  r === i ? delete a[n] : a[n] = r, nu({
    localVolumes: a
  }, t), e5.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nV(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = t1(t);
  a[n] = {
    left: r,
    right: i
  }, nu({
    localPans: a
  }, t), e5.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nB(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  nu({
    mode: n,
    modeOptions: r
  }, t), e5.eachConnection(t2), nl.update()
}

function nH(e) {
  let {
    volume: t
  } = e;
  nu({
    inputVolume: t3(t)
  }), e5.setInputVolume(t)
}

function nY(e) {
  let {
    volume: t
  } = e;
  nu({
    outputVolume: t
  }), e5.setOutputVolume(t)
}

function nW(e) {
  let {
    id: t
  } = e;
  t = nm(tr, t), tn = performance.now(), nu({
    inputDeviceId: t
  }), e5.setAudioInputDevice(t), e5.eachConnection(nt)
}

function nK(e) {
  let {
    id: t
  } = e;
  nu({
    outputDeviceId: t = nm(ti, t)
  }), e5.setAudioOutputDevice(t)
}

function nz(e) {
  let {
    id: t
  } = e;
  nu({
    videoDeviceId: t = nm(ta, t)
  }), t5()
}

function nq(e) {
  let {
    inputProfile: t
  } = e;
  nu({
    activeInputProfile: t
  });
  let n = t1();
  e5.eachConnection(e => {
    t2(e), nt(e)
  }), e5.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), nl.update(), n4()
}

function nZ(e) {
  return te !== e.required && (te = e.required, e.required || e5.interact(), true)
}

function nQ(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  ng(t), nb(n), nO(r)
}

function nX(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  nu({
    inputVolume: t3(t),
    outputVolume: n
  })
}

function nJ(e) {
  var t;
  let n = t1(),
    i = e5.getAudioSubsystem(),
    a = e5.getAudioLayer(),
    o = nm(tr, n.inputDeviceId),
    s = null == (t = tr[o]) ? true : t.name,
    l = (0, es.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
      location: "trackVoiceProcessing"
    });
  e_.default.track(eR.HAw.VOICE_PROCESSING, {
    echo_cancellation: n.echoCancellation,
    noise_cancellation: n.noiseCancellation,
    noise_suppression: n.noiseSuppression,
    automatic_gain_control: n.automaticGainControl,
    location: e,
    bypass_system_input_processing: n.bypassSystemInputProcessing,
    audio_subsystem: i,
    audio_layer: a,
    input_device: s,
    effective_noise_cancellation: l
  })
}

function n$(e) {
  let t = nu({
    echoCancellation: e.enabled
  });
  e5.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), n4(), nJ(e.location)
}

function n0(e) {
  n2(e.enabled)
}

function n1(e) {
  let t = nu({
    sidechainCompressionStrength: e.strength
  });
  e5.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function n2(e) {
  let t = nu({
    sidechainCompression: e
  });
  e5.setSidechainCompression(t.sidechainCompression)
}

function n3(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tH.add(n) : tH.delete(n), n6(), n4()
}

function n6() {
  let e = !tH.has("voice_filter_preview") && !tH.has("mic_test");
  e5.setMaybePreprocessMute(e)
}

function n4() {
  let e = t1(),
    t = tH.size > 0,
    n = e.inputDeviceId,
    r = eI.A.hasEchoCancellation(n) || e.echoCancellation,
    i = !t,
    a = eI.A.hasNoiseSuppression(n) || e.noiseSuppression,
    o = t8(eI.A.hasAutomaticGainControl(n) || e.automaticGainControl),
    s = e.noiseCancellation,
    l = null !== tN,
    c = tH.has("voice_filter") && 1 === tH.size;
  e5.setLoopback(t, {
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
  if (!e5.supports(eM.O5.VAAPI)) return;
  let i = 4098;
  (null == (n = window.DiscordNative) || null == (t = n.processUtils) ? true : t.getSystemInfo) == null || (null != (e = null == (r = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : r.gpuDevice) ? e : []).some(e => e.vendorId === i) && (tZ = true, tq = e5.supports(eM.O5.GAMESCOPE_CAPTURE))
}

function n7(e) {
  let t = nu({
    noiseSuppression: e.enabled
  });
  e5.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), n4(), nJ(e.location)
}

function n8(e) {
  let t = nu({
    automaticGainControl: e.enabled
  });
  e5.eachConnection(e => t9(e, t.automaticGainControl)), n4(), nJ(e.location)
}

function n9(e) {
  let t = nu({
    noiseCancellation: e.enabled
  });
  e5.eachConnection(e => ne(e, t.noiseCancellation)), n4(), nJ(e.location)
}

function re(e) {
  eo.A.setKrispModelOverride(e.model), c = e.model, n4()
}

function rt(e) {
  var t;
  (0, eg.isWeb)() || (tC = e.enabled, null == (t = e5.setNoiseCancellationEnableStats) || t.call(e5, e.enabled))
}

function rn(e) {
  nu({
    silenceWarning: e.enabled
  }), nl.update()
}

function rr(e) {
  e5.setDebugLogging(e.enabled)
}

function ri(e) {
  let {
    level: t
  } = e;
  l = t, eo.A.setKrispSuppressionLevel(t)
}

function ra(e) {
  nu({
    videoHook: e.enabled
  })
}

function ro(e) {
  nu({
    experimentalSoundshare2: e.enabled
  })
}

function rs(e) {
  let {
    enabled: t
  } = e;
  nu({
    useSystemScreensharePicker: t
  })
}

function rl(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = nu({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  e5.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function rc(e) {
  let {
    enabled: t
  } = e;
  nu({
    qos: t
  }), e5.eachConnection(e => e.setQoS(t))
}

function ru() {
  nd()
}

function rd(e) {
  let {
    inputDetected: t
  } = e;
  tb = t, !tO && tb && (tO = true, nl.update())
}

function rf(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tc) returnfalse;
  tc = n, e5.eachConnection(t6)
}

function rp(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eD.hL.ACCEPTED;
  switch (n) {
    case eD.iL.AUDIO:
      tG = true, e5.eachConnection(t6);
      break;
    case eD.iL.CAMERA:
      !r && td && t5(false);
      break;
    default:
      returnfalse
  }
}

function r_() {
  return tS || false
}
async function rh() {
  try {
    var e, t, n, i;
    await eb.Ay.ensureModule("discord_krisp");
    let a = eb.Ay.requireModule("discord_krisp");
    tS = true, s = null == (t = a.getSdkVersion) ? true : t.call(a), l = null != (e = null == (n = a.getSuppressionLevel) ? true : n.call(a)) ? e : 100, null == (i = a.getNcModels) || i.call(a).then(e => {
      tT = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eV.warn("Failed to load Krisp module: ".concat(t.message)), ey.A.captureException(t);
    let e = eM.CO.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eM.CO.INITIALIZED : n
    }
    e_.default.track(eR.HAw.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), nu({
      noiseCancellation: false
    })
  } finally {
    tI = false
  }
}

function rm() {
  return (0, eg.isWindows)() || (0, eg.isLinux)() || (0, eg.isMac)()
}

function rg() {
  !rm() || __OVERLAY__ || tI || tS ? (0, eg.isWeb)() && e5.supports(eM.O5.NOISE_CANCELLATION) ? (tS = true, r.emitChange()) : (0, eg.isWeb)() && nu({
    noiseCancellation: false
  }) : (tI = true, rh())
}

function rE(e) {
  let {
    enabled: t
  } = e;
  e_.default.track(eR.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tN ? tN : null,
    enabled: t
  }), nu({
    voiceFilterPlaybackEnabled: t
  })
}

function ry(e) {
  let {
    newVoiceFilterId: t
  } = e;
  nu({
    mostRecentlyRequestedVoiceFilter: t
  }), e5.eachConnection(e => e.setVoiceFilterId(t))
}

function rb() {
  nu({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rO(e) {
  let {
    voiceFilterId: t
  } = e;
  tR = tN, tP = tw, tN = t, tw = null === t ? null : Date.now()
}

function rv(e) {
  let t = e.bypassEnabled;
  nu({
    bypassSystemInputProcessing: t
  }), e5.setAudioInputBypassSystemProcessing(t), nJ(e.location)
}

function rA(e) {
  rI(e.subsystem)
}

function rI(e) {
  e === eM.rB.AUTOMATIC ? (nu({
    automaticAudioSubsystem: true
  }), rS()) : (nu({
    automaticAudioSubsystem: false
  }), e5.setAudioSubsystem(e))
}

function rS() {
  e5.queueAudioSubsystem(eM.rB.EXPERIMENTAL)
}

function rT(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && t5(i, null), null != t || null == n) {
    tA = false;
    return
  }
  if (tA) return;
  tA = true;
  let a = t1();
  (a.mute || a.deaf) && (nu({
    deaf: false,
    mute: false
  }), e5.eachConnection(t6))
}

function rC(e) {
  let {
    application: t
  } = e;
  e8.add(t.id)
}

function rN(e) {
  let {
    application: t
  } = e;
  e8.delete(t.id)
}

function rw(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e9 = false, e5.eachConnection(t6);
      break;
    case "video":
      t5(false)
  }
}

function rR(e) {
  e9 = e.enabled, e.unmute && nu({
    mute: false,
    deaf: false
  }), e5.eachConnection(t6)
}

function rP(e) {
  let {
    enabled: t
  } = e;
  ea.A.requestPermission(eD.iL.CAMERA), t5(t)
}

function rD(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e;
  if (!(0, w.Ao)() || null == I.A) returnfalse;
  let a = null,
    s = null,
    l = eh.A.getPidFromDesktopSource(t);
  ({
    soundshareId: a,
    soundshareSession: s
  } = nA(l));
  let c = {
    desktopSource: {
      id: t,
      sourcePid: l,
      soundshareId: a,
      soundshareSession: s
    },
    quality: i
  };
  null != o && (e5.setClipsSource(null), (0, eg.isWindows)() && null != o.desktopSource.soundshareId && S.c1(o.desktopSource.soundshareId)), null != a && nI(a, s), o = c;
  let u = tX(),
    d = t1().videoHook;
  e5.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: d,
      useGraphicsCapture: nr(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: na(),
      videoHookStaleFrameTimeoutMs: eZ,
      graphicsCaptureStaleFrameTimeoutMs: eQ,
      hdrCaptureMode: u
    },
    quality: i,
    applicationName: n
  })
}

function rL(e) {
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
      s = null != (t = a.context) ? t : eM.x.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : eh.A.getPidFromDesktopSource(i);
    eg.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nA(c), null != e && nI(e, r)), t4(s), t5(s === eM.x.STREAM && td, {
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
    let e = null != (r = a.context) ? r : eM.x.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eM.x.STREAM && td,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    t5(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else t5(td, null)
}

function rM(e) {
  let {
    section: t
  } = e;
  return t === eR.nc_.VOICE && np(), false
}

function rj() {
  return e5.eachConnection(nt), false
}

function rk(e) {
  let {
    enabled: t
  } = e, n = nu({
    aecDumpEnabled: t
  });
  e5.setAecDump(n.aecDumpEnabled)
}

function rU(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e7 = Object.values(eM.x).reduce((e, n) => {
    let r = n,
      i = e6();
    return e[r] = h().merge(i, t[r]), e
  }, {}), O.w.set(eB, e7), nf()
}

function rG(e) {
  let {
    state: t
  } = e, n = x.A.isEnabled();
  if (t === eR.g6G.BACKGROUND && td && !n) tE = true, t5(false);
  else {
    if (t !== eR.g6G.ACTIVE || !tE) returnfalse;
    tE = false, t5(true)
  }
  returntrue
}

function rF(e) {
  e5.eachConnection(t => t.setBitRate(e.bitrate))
}

function rV() {
  if (!td && null == a || null != eT.A.getRTCConnectionId()) returnfalse;
  t5(false, null)
}

function rB() {
  return !!tL && (tL = false, true)
}

function rH(e) {
  e5.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rY(e) {
  let {
    settings: t
  } = e;
  e5.applyMediaFilterSettings(t).finally(() => {
    tx = false, r.emitChange()
  })
}

function rW() {
  tx = true
}

function rK() {
  tx = false
}

function rz(e) {
  tK = e.enabled
}

function rq() {
  if ((0, eg.isDesktop)() && eg.isPlatformEmbedded && !tQ) {
    tQ = true;
    let e = async () => {
      let t = await new Promise(e => {
        eb.Ay.pollQueueMetrics(t => {
          e(t)
        })
      });
      t.periodMs = eM.tl;
      let n = rQ(t);
      null !== n && e_.default.track(eR.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eM.tl)
    };
    setTimeout(e, eM.tl)
  }
}
class rZ extends(d = Chunk311907.Ay.Store) {
  initialize() {
    nn(), nc(), rg(), nG(), rq(), tY = {
      [eM.O5.VIDEO]: e5.supports(eM.O5.VIDEO),
      [eM.O5.DESKTOP_CAPTURE]: e5.supports(eM.O5.DESKTOP_CAPTURE),
      [eM.O5.HYBRID_VIDEO]: e5.supports(eM.O5.HYBRID_VIDEO)
    }, this.waitFor(ev.default, eA.A, eI.A, eS.A, C.A, L.A, eT.A, M.Ay, el.A, ed.A, eN.default, ew.A, ep.A)
  }
  supports(e) {
    return e5.supports(e)
  }
  supportsInApp(e) {
    return tY[e] || e5.supports(e)
  }
  isSupported() {
    return e5.supported()
  }
  isNoiseSuppressionSupported() {
    return e5.supports(eM.O5.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return r_()
  }
  isNoiseCancellationError() {
    return tL
  }
  isAutomaticGainControlSupported() {
    return e5.supports(eM.O5.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !ns() && (e5.supports(eM.O5.LEGACY_AUDIO_SUBSYSTEM) || e5.supports(eM.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return e5.supports(eM.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e5.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return r_()
  }
  isAecDumpSupported() {
    return e5.supports(eM.O5.AEC_DUMP)
  }
  isSimulcastSupported() {
    return e5.supports(eM.O5.VIDEO) && e5.supports(eM.O5.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = eS.A.getChannel(tD)) ? true : e.type) !== eR.rbe.GUILD_STAGE_VOICE && e1 && K.A.simulcastEnabled()
  }
  isVideoDecoderFallbackEnabled() {
    return tU
  }
  getAecDump() {
    return t1().aecDumpEnabled
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
    return e9
  }
  isMute() {
    return this.isSelfMute() || ts
  }
  isDeaf() {
    return this.isSelfDeaf() || tu
  }
  hasContext(e) {
    return null != e7[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
    return e === eM.x.DEFAULT && tl
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
    return !this.isEnabled() || t1(e).mute || !ea.A.didHavePermission(eD.iL.AUDIO) || this.isSelfDeaf(e) || e === eM.x.DEFAULT && tc
  }
  shouldSkipMuteUnmuteSound() {
    return t_
  }
  notifyMuteUnmuteSoundWasSkipped() {
    t_ = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && eI.A.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tK
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
    return !this.isSupported() || t1(e).deaf
  }
  isVideoEnabled() {
    return td && ty
  }
  isVideoAvailable() {
    return Object.values(ta).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.STREAM;
    return tt === e && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.STREAM;
    return tt === t && null != a && (null == (e = a.desktopSource) ? true : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
    return e !== ev.default.getId() && (t1(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return e5.supports(eM.O5.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
    return null != (t = t1(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
    return null != (t = t1(n).videoToggleStateMap[e]) ? t : eR.bb8.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
    return t === eM.x.DEFAULT && tV.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
    return e === eM.x.DEFAULT && tV.size > 0
  }
  isMediaFilterSettingLoading() {
    return tx
  }
  isNativeAudioPermissionReady() {
    return tG
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return tt
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return tn
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eM.x.DEFAULT,
      n = t1(t).localPans[e];
    return null != n ? n : eq
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eM.x.DEFAULT,
      n = t === eM.x.STREAM ? eM.Cn : eM.Hz,
      r = t1(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return t1().inputVolume
  }
  getOutputVolume() {
    return t1().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
    return t1(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
    return t1(e).modeOptions
  }
  getActiveVoiceFilter() {
    return tN
  }
  getActiveVoiceFilterAppliedAt() {
    return tw
  }
  getPreviousVoiceFilter() {
    return tR
  }
  getPreviousVoiceFilterAppliedAt() {
    return tP
  }
  getMostRecentlyRequestedVoiceFilter() {
    return t1().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return t1().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return h().each(e7, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eR.TBI.PUSH_TO_TALK && e8.has(n) && (e[n] = i)
    }), e
  }
  getInputDeviceId() {
    return nm(tr, t1().inputDeviceId)
  }
  getOutputDeviceId() {
    return nm(ti, t1().outputDeviceId)
  }
  getVideoDeviceId() {
    return nm(ta, t1().videoDeviceId)
  }
  getInputDevices() {
    return tr
  }
  getOutputDevices() {
    return ti
  }
  getVideoDevices() {
    return ta
  }
  getEchoCancellation() {
    let e = t1();
    return eI.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getSidechainCompression() {
    return e5.supports(eM.O5.SIDECHAIN_COMPRESSION) && t1().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return t1().sidechainCompressionStrength
  }
  getH265Enabled() {
    return t1().h265Enabled
  }
  hasH265HardwareDecode() {
    return null !== tj && tj
  }
  getLoopback() {
    return tH.size > 0
  }
  getLoopbackReasons() {
    return tH
  }
  getNoiseSuppression() {
    let e = t1();
    return eI.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = t1();
    return eI.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return t1().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return t1().noiseCancellation
  }
  getHardwareEncoding() {
    return e1
  }
  getEnableSilenceWarning() {
    return t1().silenceWarning
  }
  getDebugLogging() {
    return e5.getDebugLogging()
  }
  getQoS() {
    return t1().qos
  }
  getAttenuation() {
    return t1().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return t1().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return t1().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return no() && t1().automaticAudioSubsystem ? eM.rB.AUTOMATIC : e5.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return e5.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return t1().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == e || e === ex.my.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
    return t1(e)
  }
  getState() {
    return {
      settingsByContext: e7,
      inputDevices: tr,
      outputDevices: ti,
      appSupported: tY,
      krispModuleLoaded: tS,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: tt
    }
  }
  getInputDetected() {
    return tb
  }
  getNoInputDetectedNotice() {
    return tv
  }
  getPacketDelay() {
    return eg.isPlatformEmbedded || this.getMode() !== eR.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    e5.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return te
  }
  getVideoHook() {
    return t1().videoHook
  }
  supportsVideoHook() {
    return e5.supports(eM.O5.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = t1().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return e5.supports(eM.O5.EXPERIMENTAL_SOUNDSHARE) && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, eP.$x)
  }
  supportsHookSoundshare() {
    return (0, eg.isWindows)() && e5.supports(eM.O5.SOUNDSHARE) && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, eP.ws)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = t1().useSystemScreensharePicker,
      n = (0, eg.isLinux)();
    return e && (null != t ? t : n)
  }
  supportsSystemScreensharePicker() {
    return e5.supports(eM.O5.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tZ
  }
  getUseGamescopeCapture() {
    return tq
  }
  getEverSpeakingWhileMuted() {
    return th
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
    return null != (e = t1().modeOptions.vadKrispActivationThreshold) ? e : ez
  }
  hasActiveCallKitCall() {
    return tz
  }
  setHasActiveCallKitCall(e) {
    tz = e
  }
  supportsScreenSoundshare() {
    return (0, eg.isMac)() ? e5.supports(eM.O5.SOUNDSHARE) && g().satisfies(null === I.A || true === I.A ? true : I.A.os.release, eP.P$) && na() : (0, eg.isWindows)() ? e5.supports(eM.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, eg.isLinux)() && e5.supports(eM.O5.SCREEN_SOUNDSHARE)
  }
  getSystemMicrophoneMode() {
    if ((0, eg.isWindows)()) {
      var e, t;
      return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects) ? true : e.find(e => e === e2)
    }
    if ((0, eg.isMac)() || (0, eg.isIOS)()) return u
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
      t = this.supports(eM.O5.VIDEO) ? [{
        rid: "100",
        type: e === eM.x.DEFAULT ? eM.mI.VIDEO : eM.mI.SCREEN,
        quality: eM.Y4
      }] : [];
    return this.isSimulcastSupported() && (e === eM.x.DEFAULT || this.goLiveSimulcastEnabled()) && t.push({
      rid: "50",
      type: e === eM.x.DEFAULT ? eM.mI.VIDEO : eM.mI.SCREEN,
      quality: eM.Cl
    }), t
  }
  fetchAsyncResources() {
    let e = {
      fetchDave: false
    };
    return (0, eg.isWeb)() && (e.fetchDave = J.f1.getCurrentConfig({
      location: "MediaEngineStore fetchAsyncResources"
    }).loadWasmModule), e5.fetchAsyncResources(e)
  }
  startDavePreload() {
    if (!tM && (tM = true, (0, eg.isWeb)())) {
      let e = {
        fetchDave: true
      };
      e5.fetchAsyncResources(e).catch(e => {
        eV.warn("DAVE preload failed:", e), ey.A.captureException(e)
      })
    }
  }
  getSupportedSecureFramesProtocolVersion() {
    if ((0, eg.isWeb)()) {
      let {
        useWasmModule: e
      } = J.f1.getCurrentConfig({
        location: "MediaEngineStore getSupportedSecureFramesProtocolVersion"
      });
      if (!e) return 0
    }
    let e = e5.getSupportedSecureFramesProtocolVersion();
    114 === e && (e = 1);
    let t = J.ex.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      n = J.a.getConfig({
        location: "MediaEngineStore"
      });
    return (t.canSupportDaveProtocol || n.allowOptIn && el.A.getPersistentCodesEnabled()) && e >= t.protocolVersionFloor ? e : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tW
  }
}

function rQ(e) {
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
ek(rZ, "displayName", "MediaEngineStore");
let rX = r = new rZ(Chunk73153.h, {
  VOICE_CHANNEL_SELECT: rT,
  VOICE_STATE_UPDATES: nR,
  CONNECTION_OPEN: nS,
  CONNECTION_CLOSED: nC,
  POST_CONNECTION_OPEN: nN,
  RTC_CONNECTION_STATE: nw,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nP,
  AUDIO_TOGGLE_SELF_MUTE: nD,
  AUDIO_SET_SELF_MUTE: nL,
  AUDIO_TOGGLE_SELF_DEAF: nM,
  AUDIO_TOGGLE_LOCAL_MUTE: nj,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nk,
  AUDIO_SET_LOCAL_VOLUME: nF,
  AUDIO_SET_LOCAL_PAN: nV,
  AUDIO_SET_MODE: nB,
  AUDIO_SET_INPUT_VOLUME: nH,
  AUDIO_SET_OUTPUT_VOLUME: nY,
  AUDIO_SET_INPUT_DEVICE: nW,
  AUDIO_SET_OUTPUT_DEVICE: nK,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nq,
  AUDIO_SET_ECHO_CANCELLATION: n$,
  AUDIO_SET_SIDECHAIN_COMPRESSION: n0,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n1,
  AUDIO_SET_LOOPBACK: n3,
  AUDIO_SET_NOISE_SUPPRESSION: n7,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n8,
  AUDIO_SET_NOISE_CANCELLATION: n9,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: re,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: rn,
  AUDIO_SET_DEBUG_LOGGING: rr,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: ri,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rt,
  MEDIA_ENGINE_SET_VIDEO_HOOK: ra,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ro,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rs,
  AUDIO_SET_ATTENUATION: rl,
  AUDIO_SET_QOS: rc,
  MEDIA_ENGINE_DEVICES: nQ,
  AUDIO_VOLUME_CHANGE: nX,
  AUDIO_RESET: ru,
  AUDIO_INPUT_DETECTED: rd,
  AUDIO_SET_SUBSYSTEM: rA,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rv,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rR,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rP,
  MEDIA_ENGINE_PERMISSION: rw,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rx,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nz,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nZ,
  USER_SETTINGS_MODAL_INIT: rM,
  USER_SETTINGS_MODAL_SET_SECTION: rM,
  CERTIFIED_DEVICES_SET: rj,
  RPC_APP_CONNECTED: rC,
  RPC_APP_DISCONNECTED: rN,
  OVERLAY_INITIALIZE: nT,
  APP_STATE_UPDATE: rG,
  SET_CHANNEL_BITRATE: rF,
  SET_VAD_PERMISSION: rf,
  SET_NATIVE_PERMISSION: rp,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rH,
  MEDIA_ENGINE_SET_AEC_DUMP: rk,
  MEDIA_ENGINE_RESET_SETTINGS: rU,
  CHANNEL_DELETE: rV,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rB,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rY,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rW,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rK,
  USER_SETTINGS_PROTO_UPDATE: nx,
  CLIPS_INIT: rD,
  CLIPS_SETTINGS_UPDATE: rL,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rz,
  VOICE_FILTER_REQUEST_SWITCH: ry,
  VOICE_FILTER_LOOPBACK_TOGGLE: rE,
  VOICE_FILTER_APPLIED: rO,
  VOICE_FILTER_DOWNLOAD_FAILED: rb,
  VOICE_FILTER_APPLY_FAILED: rb
})