/** Chunk was on web.js **/
/** chunk id: 430452, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f;
require.d(exports, {
  A: () => r5
}), require("./896048.js"), require("./65821.js"), require("./492834.js"), require("./228524.js"), require("./321073.js"), require("./638769.js"), require("./457529.js"), require("./790599.js");
var p, Chunk284009 = require("./284009.js"),
  h = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  g = require.n(Chunk735438),
  Chunk299855 = require("./299855.js"),
  y = require.n(Chunk299855),
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
  Chunk544746 = require("./544746.js"),
  Chunk820344 = require("./820344.js"),
  Chunk593595 = require("./593595.js"),
  Chunk788601 = require("./788601.js"),
  Chunk626078 = require("./626078.js"),
  Chunk509034 = require("./509034.js"),
  Chunk638188 = require("./638188.js"),
  Chunk269377 = require("./269377.js"),
  Chunk934341 = require("./934341.js"),
  Chunk658046 = require("./658046.js"),
  Chunk621963 = require("./621963.js"),
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
  Chunk165479 = require("./165479.js"),
  Chunk896014 = require("./896014.js"),
  Chunk765396 = require("./765396.js"),
  Chunk37770 = require("./37770.js"),
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

function eB(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eH(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eB(e, t, n[t])
    })
  }
  return e
}

function eY(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eW(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eY(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eK = new Chunk626584.A("MediaEngineStore"),
  ez = "MediaEngineStore",
  eq = 4,
  eZ = 1,
  eQ = 1,
  eX = 1,
  eJ = .5,
  e$ = {
    left: 1,
    right: 1
  },
  e0 = 500,
  e1 = 5 * Chunk927813.A.Millis.SECOND,
  e2 = false,
  e3 = 100,
  e6 = 2 * Chunk927813.A.Millis.SECOND,
  e4 = 30 * Chunk927813.A.Millis.SECOND,
  e5 = true,
  e7 = "deep_noise_suppression",
  e8 = 0;

function e9() {
  return {
    mode: eM.TBI.VOICE_ACTIVITY,
    modeOptions: {
      threshold: e2,
      autoThreshold: eA.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eJ,
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
    inputVolume: eF.Hz,
    outputVolume: eF.Hz,
    inputDeviceId: eF.dx,
    outputDeviceId: eF.dx,
    videoDeviceId: eF.dx,
    qos: false,
    qosMigrated: false,
    videoHook: tt.supports(eF.O5.VIDEO_HOOK),
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
let te = {
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
  tt = (0, Chunk205693.hB)((0, Chunk205693.WI)());
eK.enableNativeLogger(true);
let tn = {},
  tr = new Set([Chunk731854.x.DEFAULT]),
  ti = tt.supports(Chunk731854.O5.AUTO_ENABLE),
  ta = false,
  to = Chunk731854.x.STREAM,
  ts = performance.now(),
  tl = null,
  tc = {
    [Chunk731854.dx]: nA("No Input Devices")
  },
  tu = {
    [Chunk731854.dx]: nA("No Output Devices")
  },
  td = {
    [Chunk731854.dx]: nA("No Video Devices")
  },
  tf = new Chunk451988.Ep,
  tp = false,
  t_ = false,
  th = false,
  tm = false,
  tg = false,
  tE = Chunk731854.qe,
  ty = Chunk731854.qe,
  tb = false,
  tO = false,
  tv = false,
  tA = new Chunk451988.Ep,
  tI = false,
  tS = false,
  tT = null,
  tC = false,
  tN = false,
  tw = false,
  tR = false,
  tP = false,
  tD = [],
  tL = false,
  tx = null,
  tM = null,
  tj = null,
  tk = null,
  tU = null,
  tG = false,
  tF = false,
  tV = false,
  tB = null,
  tH = null,
  tY = false,
  tW = false;
Chunk674966.A.hasPermission(Chunk765682.iL.AUDIO, {
  showAuthorizationError: false
}), Chunk674966.A.hasPermission(Chunk765682.iL.CAMERA, {
  showAuthorizationError: false
});
let tK = false,
  tz = new Set,
  tq = tK,
  tZ = new Set,
  tQ = {},
  tX = null,
  tJ = null,
  t$ = true,
  t0 = false,
  t1 = false,
  t2 = false,
  t3 = false;

function t6(e) {
  return (0, Z.p)({
    location: e
  }).hdrCaptureMode
}
async function t4() {
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

function t5() {
  return null != tH ? tH : "u" > typeof window ? tH = t4().then(e => (tB = e, e)) : Promise.resolve(false)
}

function t7() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
    t = tn[e];
  return null == t && (t = e9(), tn[e] = t), t
}

function t8() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
    i = t7(r),
    a = te[null != (e = i.activeInputProfile) ? e : eG.my.CUSTOM],
    o = eH({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, er.R)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, U.F)({
      location: "getSettings"
    });
    null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold)
  }
  return eW(eH({}, i, a), {
    modeOptions: o
  })
}

function t9(e) {
  var t, n;
  let r = t8(e.context),
    i = r.mode;
  e.context === eF.x.DEFAULT && ((0, em.H)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eM.TBI.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eM.TBI.VOICE_ACTIVITY), (0, et.N)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && rA(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eJ,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function ne(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.Hz;
  return g().clamp(e, 0, t)
}

function nt(e) {
  let t = t8(e.context),
    n = !ti || t.mute || t.deaf;
  e.context === eF.x.DEFAULT ? n = n || tp || t_ || th || !ed.A.didHavePermission(ek.iL.AUDIO) : e.context === eF.x.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eF.x.DEFAULT && C.A.updateNativeMute()
}

function nn(e) {
  e !== to && (null != a && tt.setGoLiveSource(null, to), to = e)
}

function nr() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : tg,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : e.id) && (null != s.desktopSource.soundshareId && (0, eA.isWindows)() && T.c1(s.desktopSource.soundshareId), tt.setGoLiveSource(null, to)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : n.audioDeviceGuid)) && tt.setGoLiveSource(null, to), tg || i) {
    let e = t8().videoDeviceId;
    tg && e === eF.dx && ty === eF.dx && tE !== eF.qe ? e = tE : ty = e, tE = (tg = i) ? nS(td, e) : eF.qe, tt.setVideoInputDevice(tE)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = t6("MediaEngineStore go live"),
        n = t8().videoHook,
        i = nd(),
        a = i ? nf() ? ej.zl : ej.eg : 0,
        s = (0, eA.isWindows)() && (0, ei.b)("updateVideo").enabled,
        l = false;
      (0, eA.isWindows)() && tJ && (l = eo.q.getConfig({
        location: "updateVideo"
      }).enabled), tt.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: n,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: s,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: np(),
          videoHookStaleFrameTimeoutMs: e0,
          graphicsCaptureStaleFrameTimeoutMs: e1,
          hdrCaptureMode: t,
          enableGlobalFramePoolLock: (0, q.H)({
            location: "updateVideo"
          }).enabled,
          useGraphicsCaptureDirtyRegions: l
        },
        quality: e
      }, to)
    }
    null != o.cameraSource && tt.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: e
    }, to)
  }
}

function ni(e) {
  switch (e) {
    case eF.CO.CPU_OVERUSE:
      return L.B6.NoiseCancellerCpuOveruse;
    case eF.CO.FAILED:
      return L.B6.NoiseCancellerFailed;
    case eF.CO.VAD_CPU_OVERUSE:
      return L.B6.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function na() {
  null === tl && tt.getCodecSurvey().then(e => {
    try {
      let t = JSON.parse(e);
      if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
      tl = t.available_video_decoders.some(e => "MediaFoundation H.264" === e)
    } catch (e) {
      eK.error("Failed to parse codec survey", e), tl = false
    }
  }).catch(e => {
    eK.error("Failed to get codec survey", e), tl = false
  }).finally(() => {
    I.h.dispatch({
      type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED"
    })
  })
}

function no(e) {
  let t = (0, U.F)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eH({
    enabled: e
  }, t)
}

function ns(e, t) {
  e.setAutomaticGainControl(no(t))
}

function nl(e, t) {
  let n = (0, ep.A)(t, r.getSystemMicrophoneMode(), {
    location: "setNoiseCancellation"
  });
  n !== t && eK.info("Falling back to system noise suppression."), t = n, e.setNoiseCancellation(t);
  let {
    noiseCancellationDuringProcessing: i
  } = (0, U.F)({
    location: "setNoiseCancellation",
    disable: !t
  });
  e.setNoiseCancellationDuringProcessing(i);
  let {
    noiseCancellationAfterProcessing: a,
    vadAfterWebrtc: o
  } = (0, $.$)({
    location: "setNoiseCancellation"
  });
  e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(o)
}

function nc(e) {
  let t = t8(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ew.A.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ew.A.hasNoiseSuppression(n) || t.noiseSuppression), ns(e, ew.A.hasAutomaticGainControl(n) || t.automaticGainControl), nl(e, t.noiseCancellation), e.setVoiceFilterId(tx), (0, eA.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function nu() {
  tf.start(e4, () => {
    eK.error("Device enumeration timed out"), eb.default.track(eM.HAw.DEVICE_ENUMERATION_TIMEOUT, {})
  }), tt.on(O.bg.Connection, e => {
    t9(e), nt(e), nc(e);
    let t = t8();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
    let n = (0, J.K)({
      location: "setupMediaEngine"
    }).treatment;
    tY = n === J.c.NoSoftwareDecodeWithFallback, n === J.c.NoSoftwareDecode || n === J.c.NoSoftwareDecodeWithFallback ? (e.setExperimentFlag(eF.fd.H265_HARDWARE_ONLY, true), (0, eA.isWindows)() ? t5().then(t => {
      e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, t)
    }) : (0, eA.isMac)() && e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, true)) : n === J.c.Disabled && (e.setExperimentFlag(eF.fd.H265_HARDWARE_ONLY, true), e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, false)), (0, eA.isWindows)() && (0, X.r)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eF.fd.USE_H264_MF_DECODER, true);
    let i = eP.A.getGuildId(),
      {
        muteBeforeProcessing: o,
        pttBeforeProcessing: s,
        skipEncode: l
      } = (null != i ? K.A : W.A).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != i ? i : true
      }, {
        autoTrackExposure: true
      });
    o && e.setExperimentFlag(eF.fd.MUTE_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eF.fd.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(eF.fd.SKIP_ENCODE, true), (0, ee.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eF.fd.LOW_LATENCY_RATE_CONTROL, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(eF.fd.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(eF.fd.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(eF.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eF.x.STREAM) {
      let t = nC(tu);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = Q.A.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, eA.isWindows)()) e.setExperimentFlag(eF.fd.SIGNAL_AV1, true), e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, true);
    else if ((0, eA.isMac)()) {
      e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, true);
      let {
        enabled: t
      } = (0, F.t)("MediaEngineStore");
      t && e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, true)
    } else if ((0, eA.isLinux)()) e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, true);
    else if ((0, eA.isIOS)()) {
      let {
        enabled: t
      } = (0, G.$)("MediaEngineStore");
      t && (e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, true), e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, true))
    }
    if ((0, eA.isWeb)()) {
      let {
        enabled: t
      } = (0, z.O)("MediaEngineStore");
      e.setExperimentFlag(eF.fd.BROWSER_HEVC, t)
    }
    if ((0, eA.isWindows)() && (null == tX ? true : tX.startsWith("AMD")) && (0, es.F)("MediaEngineStore").enabled && e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, true), (0, eA.isWindows)() && (null == tX ? true : tX.startsWith("Intel")) && (0, el.J)("MediaEngineStore").enabled && e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, true), (0, eA.isWindows)() && (null == tX ? true : tX.startsWith("Qualcomm")) && (0, es.F)("MediaEngineStore").enabled && e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, true), tt.setHasFullbandPerformance((0, D.A)()), e.setRemoteAudioHistory(1e3), (0, w.A)(r)) {
      let {
        enableViewerClipping: t
      } = ea.A.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eF.X1)
    }
    for (let n of (t = t8(e.context), e.setPostponeDecodeLevel(e3), Object.keys(t.localMutes))) n !== eC.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eC.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
    for (let n of Object.keys(t.localPans)) {
      let r = t.localPans[n];
      e.setLocalPan(n, r.left, r.right)
    }
    for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
    e.on(O.yq.Speaking, (t, n, r, i) => {
      I.h.dispatch({
        type: "SPEAKING",
        context: e.context,
        userId: t,
        speakingFlags: n,
        voiceDb: i
      })
    }), e.context === eF.x.DEFAULT && (tO = false, tv = false, e.on(O.yq.SpeakingWhileMuted, () => {
      tO = true, tv = true, r.emitChange(), tA.stop(), tA.start(e6, () => {
        tv = false, r.emitChange()
      })
    })), e.on(O.yq.DesktopSourceEnd, (t, n) => {
      I.h.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: {
          context: e.context
        },
        endReason: t,
        errorCode: n
      })
    }), e.on(O.yq.InteractionRequired, e => {
      I.h.dispatch({
        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
        required: e
      })
    }), e.on(O.yq.VideoHookInitialize, (e, t, n, r, i, o) => {
      (null == a ? true : a.desktopSource) != null && eb.default.track(eM.HAw.VIDEOHOOK_INITIALIZED, eH({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, k.A)(null == a ? true : a.desktopSource)))
    }), e.on(O.yq.NoiseCancellationError, e => {
      eK.warn("noisecancellererror event: ".concat(e)), (0, L.QW)({
        type: L.iy.NOISE_CANCELLER_ERROR,
        underlyingError: ni(e)
      }), tG = true, eb.default.track(eM.HAw.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), I.h.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: true
      }), I.h.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION",
        enabled: false
      }), I.h.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
        code: e
      })
    }), e.on(O.yq.VoiceActivityDetectorError, e => {
      eK.warn("voiceactivitydetectorerror event: ".concat(e)), (0, L.QW)({
        type: L.iy.NOISE_CANCELLER_ERROR,
        underlyingError: ni(e)
      }), eb.default.track(eM.HAw.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), I.h.dispatch({
        type: "AUDIO_SET_MODE",
        context: eF.x.DEFAULT,
        mode: eM.TBI.VOICE_ACTIVITY,
        options: eW(eH({}, t8(eF.x.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), I.h.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(O.yq.SdpError, (e, t, n, r) => {
      eb.default.track(eM.HAw.SDP_ERROR, {
        operation: e,
        error: t,
        type: n,
        sdp: r
      })
    }), e.on(O.yq.VideoState, t => {
      I.h.dispatch({
        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
        videoState: t,
        context: e.context
      })
    }), e.setBitRate(eN.A.bitrate), e.applyVideoQualityMode(ex.A.mode), tt.supports(eF.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) && tt.setAsyncVideoInputDeviceInit((0, H.v)("setupMediaEngine").enabled)
  }), tt.on(O.bg.DeviceChange, (e, t, n) => {
    tf.stop(), I.h.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), tt.on(O.bg.VolumeChange, (e, t) => {
    I.h.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), tt.on(O.bg.DesktopSourceEnd, (e, t) => {
    I.h.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), tt.on(O.bg.AudioPermission, e => {
    tW = true, I.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), tt.on(O.bg.VideoPermission, e => {
    I.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), tt.on(O.bg.WatchdogTimeout, async () => {
    let e;
    try {
      await eO.A.submitLiveCrashReport({
        message: {
          message: "Voice Watchdog Timeout"
        }
      })
    } catch (t) {
      "number" == typeof t.status && (e = t.status)
    }
    eK.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), eb.default.track(eM.HAw.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: e
    })
  }), tt.on(O.bg.VideoInputInitialized, e => {
    eb.default.track(eM.HAw.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ev.A.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eP.A.getMediaSessionId(),
      rtc_connection_id: eP.A.getRTCConnectionId()
    })
  }), tt.on(O.bg.AudioInputInitialized, e => {
    eb.default.track(eM.HAw.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ev.A.Millis.SECOND),
      rtc_connection_id: eP.A.getRTCConnectionId()
    })
  }), tt.on(O.bg.ClipsRecordingRestartNeeded, () => {
    I.h.dispatch({
      type: "CLIPS_RESTART"
    })
  }), tt.on(O.bg.ClipsInitFailure, (e, t) => {
    I.h.wait(() => {
      I.h.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), tt.on(O.bg.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.c1(t), o = null)
  }), tt.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
    I.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), tt.on(O.bg.NativeScreenSharePickerCancel, e => {
    I.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), tt.on(O.bg.NativeScreenSharePickerError, e => {
    I.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), tt.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
    eb.default.track(eM.HAw.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), tt.on(O.bg.VideoCodecError, e => {
    let t = "encode" === e.mode ? L.iy.VIDEO_ENCODE_ERROR : L.iy.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, L.QW)(t === L.iy.VIDEO_ENCODE_ERROR ? eW(eH({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eW(eH({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), tt.on(O.bg.ConnectionStats, e => {
    I.h.dispatch({
      type: "MEDIA_ENGINE_CONNECTION_STATS",
      connectionStats: e.map(e => {
        let {
          stats: t,
          connection: n
        } = e;
        return {
          stats: t,
          mediaEngineConnectionId: n.mediaEngineConnectionId,
          version: e8++,
          context: n.context
        }
      })
    })
  }), tt.on(O.bg.VoiceQueueMetrics, e => {
    let t = r4(e);
    null !== t && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, t)
  }), tt.setOnVideoContainerResized((e, t, n) => {
    I.h.wait(() => I.h.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      dimensions: {
        width: t,
        height: n
      }
    }))
  }), rr(), ra(), tt.supports(eF.O5.ASYNC_CLIPS_SOURCE_DEINIT) && tt.setAsyncClipsSourceDeinit((0, Y.V)("setupMediaEngine").enabled), ng.reset(), (0, eD.w)().then(e => {
    null != e && (tX = e.gpu_brand, tJ = e.has_intel_hybrid_igpu)
  }), tt.on(O.bg.SystemMicrophoneModeChange, e => {
    f = e, tt.eachConnection(nc)
  })
}

function nd() {
  return (0, eA.isWindows)() && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, ej.yg)
}

function nf() {
  return (0, eA.isWindows)() && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, ej.fG)
}

function np() {
  return (0, eA.isMac)() && tt.supports(eF.O5.SCREEN_CAPTURE_KIT) && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, ej.e)
}

function n_() {
  return (0, eA.isWindows)() && tt.supports(eF.O5.AUTOMATIC_AUDIO_SUBSYSTEM) && tt.supports(eF.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function nh() {
  return tt.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
async function nm() {
  let {
    windowsMuteAndZeroVolumeDetectionEnabled: e
  } = (0, ec.F)({
    location: "MediaEngineStore.fetchInputDeviceOSConfig"
  });
  if ((0, eA.isWindows)() && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, ej.PH) && e) try {
    var t;
    let e = nS(tc, t8().inputDeviceId),
      n = null == (t = tc[e]) ? true : t.guid;
    if (null != n && "" !== n) {
      await eS.Ay.ensureModule("discord_voice");
      let [e, t] = await Promise.all([tt.getDeviceOSVolume(n), tt.getDeviceOSMuted(n)]);
      l = e, s = t
    }
  } catch (e) {
    eK.warn("Failed to get device OS volume and/or mute state: ".concat(e))
  }
}
let ng = new class {
  start() {
    this.started || (this.started = true, tt.on(O.bg.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), tt.removeListener(O.bg.Silence, this.handleSilence), I.h.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = t8();
    !tC && eP.A.getState() === eM.S7L.RTC_CONNECTED && e.mode === eM.TBI.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eB(this, "stateChangeTimeout", true), eB(this, "noVoiceTimeout", 5e3), eB(this, "voiceTimeout", 1500), eB(this, "started", false), eB(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout);
      let n = () => {
        I.h.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tN = true)
      };
      this.stateChangeTimeout = setTimeout(async () => {
        this.stateChangeTimeout = null, e && this.started && await nm(), this.started && n()
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function nE() {
  var e;
  let t = v.w.get("audio");
  null != t && (v.w.set(ez, {
    [eF.x.DEFAULT]: t
  }), v.w.remove("audio")), tn = null != (e = v.w.get(ez)) ? e : {}, g().each(tn, e => {
    if (g().defaultsDeep(e, e9()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eT.OH)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eq && (e.vadUseKrispSettingVersion = eq, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = e2)
    }
    tt.supports(eF.O5.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eX && (e.sidechainCompressionSettingVersion = eX, e.sidechainCompression = true), (0, eA.isWeb)() ? e.ncUseKrispjsSettingVersion !== eQ && (e.ncUseKrispjsSettingVersion = eQ, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eZ && (e.ncUseKrispSettingVersion = eZ, e.noiseSuppression = false, e.noiseCancellation = true)
  }), nO()
}

function ny(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = t7(t);
  return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(ez, tn), r
}

function nb() {
  v.w.remove(ez), location.reload()
}

function nO() {
  let e = t8();
  tt.setAudioInputDevice(e.inputDeviceId), tt.setAudioOutputDevice(e.outputDeviceId), nr(), tt.setInputVolume(e.inputVolume), tt.setOutputVolume(e.outputVolume), tt.setAecDump(e.aecDumpEnabled), tt.setSidechainCompression(e.sidechainCompression), tt.setSidechainCompressionStrength(e.sidechainCompressionStrength), tt.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing)
}

function nv() {
  ti || tt.enable().then(() => I.h.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function nA(e) {
  return {
    id: eF.dx,
    index: 0,
    name: e,
    disabled: true,
    guid: true,
    hardwareId: true,
    containerId: true
  }
}

function nI(e, t) {
  if (0 === e.length) {
    let e = nA(t);
    return {
      [e.id]: e
    }
  }
  return g()(e).map(e => ({
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

function nS(e, t) {
  var n, r;
  let i = null != (n = null != (r = e[t]) ? r : e[eF.dx]) ? n : g()(e).values().first();
  return null != i ? i.id : t
}

function nT(e) {
  let t = tc;
  if (tc = nI(e, eV.intl.string(eV.t["/QIjDA"])), !g().isEqual(tc, t)) {
    let e = t8(),
      t = nS(tc, e.inputDeviceId);
    tt.setAudioInputDevice(t), tt.eachConnection(nc)
  }
}

function nC(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nN(e) {
  tt.eachConnection(t => {
    t.context === eF.x.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nw(e) {
  let t = tu;
  if (tu = nI(e, eV.intl.string(eV.t.xlUg0v)), !g().isEqual(tu, t)) {
    let e = t8(),
      n = nS(tu, e.outputDeviceId);
    tt.setAudioOutputDevice(n);
    let r = nC(t),
      i = nC(tu);
    r !== i && nN(i)
  }
}

function nR(e) {
  tS = e.length > 0;
  let t = td;
  if (td = nI(e, eV.intl.string(eV.t.WKWARY)), tg && !g().isEqual(td, t)) {
    var n;
    let e = true !== td[tE],
      r = tE === eF.dx && (null == (n = t[eF.dx]) ? true : n.disabled);
    nr(e || r)
  }
}

function nP() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
    r = null != (e = eg.A.settings.audioContextSettings) ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(r)) {
    let i = e === eU.W.USER ? eF.x.DEFAULT : eF.x.STREAM,
      a = i === eF.x.STREAM ? eF.Cn : eF.Hz,
      o = null != (t = r[e]) ? t : {},
      {
        localMutes: s,
        localVolumes: l
      } = t8(i);
    for (let [e, t] of Object.entries(o)) null == (0, eh.tM)(i, e) && (t.muted ? s[e] = true : delete s[e], t.volume !== a ? l[e] = t.volume : delete l[e], tt.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (n)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[e] && (delete s[e], delete l[e], tt.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    ny({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nD(e) {
  if (null == r) return eK.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : eO.A.getAudioPid(e),
      n = "";
    return null != t && (n = eO.A.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nL(e, t) {
  (0, eA.isWindows)() && e > 1 && T.GH(e, {
    soundshare_session: t
  }).then(t => {
    null == t || j.Ay.shouldContinueWithoutElevatedProcessForPID(e) || I.h.wait(() => {
      I.h.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function nx(e) {
  i = e.sessionId, tp = false, tm = false;
  let t = t8();
  if (n_() && (nh() ? rL(eF.rB.AUTOMATIC) : t.automaticAudioSubsystem && rx()), tt.supports(eF.O5.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, eA.isDesktop)() ? e = (0, V.i)({
      location: "handleConnectionOpen"
    }).enabled: ((0, eA.isIOS)() || (0, eA.isAndroid)()) && (e = (0, B.Y)({
      location: "handleConnectionOpen"
    }).enabled), tt.setOffloadAdmControls(e)
  }(0, eE.Lb)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, eA.isDesktop)() && (ey.A.getLastInitAttemptMayHaveCrashed() ? (I.h.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eF.x.DEFAULT,
    playSoundEffect: true
  }), ny({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(342887).md()), nP()
}

function nM(e) {
  let {
    mediaEngineState: t
  } = e;
  tn = t.settingsByContext, tc = t.inputDevices, tu = t.outputDevices, tQ = t.appSupported, tP = t.krispModuleLoaded, c = t.krispVersion, to = t.goLiveContext
}

function nj() {
  i = null
}

function nk() {
  if ((0, eA.isWeb)()) {
    let e = en.f1.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    e.loadWasmModule && e.preload && r.startDavePreload()
  }
  returnfalse
}

function nU(e) {
  switch (e.state) {
    case eM.S7L.CONNECTING:
      nv();
      break;
    case eM.S7L.RTC_CONNECTING:
      tC = false, tN = false, s = true, l = true;
      break;
    case eM.S7L.RTC_CONNECTED:
      nr();
      break;
    case eM.S7L.DISCONNECTED:
      nz(), nq()
  }
  ng.update()
}

function nG(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      tp = t.mute || t.suppress, tm = t.deaf, tt.eachConnection(nt);
      let e = null != t.guildId && null != t.channelId && null != tU && tU !== t.channelId,
        n = !tw && null == t.channelId;
      return nr(!e && !n && tg), tU = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eC.default.getId() || null != eP.A.getChannelId() || nr(false, null), e
  }, false)
}

function nF(e) {
  let {
    mute: t
  } = e;
  t_ = t, tt.eachConnection(nt)
}

function nV(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = t8(t);
  if (t === eF.x.DEFAULT && (ed.A.requestPermission(ek.iL.AUDIO), th)) returnfalse;
  (r = !i && !r) || (i = false), n || (tb = true), ny({
    mute: r,
    deaf: i
  }, t), tt.eachConnection(nt)
}

function nB(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  ny({
    mute: n
  }, t), r || (tb = true), tt.eachConnection(nt)
}

function nH(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eU.oD.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nP(true)
}

function nY(e) {
  let {
    context: t
  } = e;
  ny({
    deaf: !t8(t).deaf
  }, t), tt.eachConnection(nt)
}

function nW(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eC.default.getId()) return;
  let {
    localMutes: r
  } = t8(t);
  r[n] ? delete r[n] : r[n] = true, ny({
    localMutes: r
  }, t), tt.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nK(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: f
  } = e;
  h()(!(d && f), "These are not allowed to both be true.");
  let p = u === eM.bb8.DISABLED,
    {
      disabledLocalVideos: _
    } = t8(l),
    m = null != (t = _[c]) && t,
    g = tz.has(c),
    E = u === eM.bb8.AUTO_ENABLED || u === eM.bb8.MANUAL_ENABLED;
  eK.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), h()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let y = p !== m,
    b = l === eF.x.DEFAULT,
    O = f && y && b,
    v = d && y && b;
  eK.info("changed=".concat(y, " isDefaultContext=").concat(b, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: A
  } = t8(l);
  if (A[c] === eM.bb8.AUTO_PROBING && u === eM.bb8.AUTO_ENABLED && (0, eu.A)(c, p ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, E), A[c] = u, ny({
      videoToggleStateMap: A
    }, l, d), u === eM.bb8.AUTO_PROBING ? null == (n = eP.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eP.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tq || (eK.info("isAutoDisableAllowed=".concat(tq, " - disabling VideoHealthManager")), null == (a = eP.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tq) return;
    (0, eu.A)(c, p ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, E), p ? tz.add(c) : tz.delete(c)
  } else v && (g && !p ? (eK.info("disallowing auto-disable for this session because of manual override by user"), tq = false, null == (s = eP.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, eu.A)(c, eF.Al.MANUAL_REENABLE, E)) : (0, eu.A)(c, p ? eF.Al.MANUAL_DISABLE : eF.Al.MANUAL_ENABLE, E));
  b && !p && tz.delete(c), p ? _[c] = true : delete _[c], ny({
    disabledLocalVideos: _
  }, l, d), tt.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = _[c]) && t)
  }, l)
}

function nz() {
  if (0 === tz.size) return;
  let e = eF.x.DEFAULT,
    {
      disabledLocalVideos: t
    } = t8(e);
  tz.forEach(n => {
    h()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], tt.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tz.clear(), ny({
    disabledLocalVideos: t
  }, e, false)
}

function nq() {
  let e = eF.x.DEFAULT,
    {
      videoToggleStateMap: t
    } = t8(e);
  for (let [e, n] of Object.entries(t)) n === eM.bb8.AUTO_PROBING && delete t[e];
  ny({
    videoToggleStateMap: t
  }, e, false)
}

function nZ(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eC.default.getId()) return;
  let i = t === eF.x.STREAM ? eF.Cn : eF.Hz,
    {
      localVolumes: a
    } = t8(t);
  r === i ? delete a[n] : a[n] = r, ny({
    localVolumes: a
  }, t), tt.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nQ(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = t8(t);
  a[n] = {
    left: r,
    right: i
  }, ny({
    localPans: a
  }, t), tt.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nX(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  ny({
    mode: n,
    modeOptions: r
  }, t), tt.eachConnection(t9), ng.update()
}

function nJ(e) {
  let {
    volume: t
  } = e;
  ny({
    inputVolume: ne(t)
  }), tt.setInputVolume(t)
}

function n$(e) {
  let {
    volume: t
  } = e;
  ny({
    outputVolume: t
  }), tt.setOutputVolume(t)
}

function n0(e) {
  let {
    id: t
  } = e;
  t = nS(tc, t), ts = performance.now(), ny({
    inputDeviceId: t
  }), tt.setAudioInputDevice(t), tt.eachConnection(nc), s = true, l = true
}

function n1(e) {
  let {
    id: t
  } = e;
  ny({
    outputDeviceId: t = nS(tu, t)
  }), tt.setAudioOutputDevice(t)
}

function n2(e) {
  let {
    id: t
  } = e;
  ny({
    videoDeviceId: t = nS(td, t)
  }), nr()
}

function n3(e) {
  let {
    inputProfile: t
  } = e;
  ny({
    activeInputProfile: t
  });
  let n = t8();
  tt.eachConnection(e => {
    t9(e), nc(e)
  }), tt.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), ng.update(), ri()
}

function n6(e) {
  return ta !== e.required && (ta = e.required, e.required || tt.interact(), true)
}

function n4(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  nT(t), nw(n), nR(r)
}

function n5(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  ny({
    inputVolume: ne(t),
    outputVolume: n
  })
}

function n7(e) {
  var t;
  let n = t8(),
    i = tt.getAudioSubsystem(),
    a = tt.getAudioLayer(),
    o = nS(tc, n.inputDeviceId),
    s = null == (t = tc[o]) ? true : t.name,
    l = (0, ep.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
      location: "trackVoiceProcessing"
    });
  eb.default.track(eM.HAw.VOICE_PROCESSING, {
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

function n8(e) {
  let t = ny({
    echoCancellation: e.enabled
  });
  tt.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), ri(), n7(e.location)
}

function n9(e) {
  rt(e.enabled)
}

function re(e) {
  let t = ny({
    sidechainCompressionStrength: e.strength
  });
  tt.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function rt(e) {
  let t = ny({
    sidechainCompression: e
  });
  tt.setSidechainCompression(t.sidechainCompression)
}

function rn(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tZ.add(n) : tZ.delete(n), rr(), ri()
}

function rr() {
  let e = !tZ.has("voice_filter_preview") && !tZ.has("mic_test");
  tt.setMaybePreprocessMute(e)
}

function ri() {
  let e = t8(),
    t = tZ.size > 0,
    n = e.inputDeviceId,
    r = ew.A.hasEchoCancellation(n) || e.echoCancellation,
    i = !t,
    a = ew.A.hasNoiseSuppression(n) || e.noiseSuppression,
    o = no(ew.A.hasAutomaticGainControl(n) || e.automaticGainControl),
    s = e.noiseCancellation,
    l = null !== tx,
    c = tZ.has("voice_filter") && 1 === tZ.size;
  tt.setLoopback(t, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function ra() {
  var e, t, n, r;
  if (!tt.supports(eF.O5.VAAPI)) return;
  let i = 4098;
  (null == (n = window.DiscordNative) || null == (t = n.processUtils) ? true : t.getSystemInfo) == null || (null != (e = null == (r = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : r.gpuDevice) ? e : []).some(e => e.vendorId === i) && (t2 = true, t1 = tt.supports(eF.O5.GAMESCOPE_CAPTURE))
}

function ro(e) {
  let t = ny({
    noiseSuppression: e.enabled
  });
  tt.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), ri(), n7(e.location)
}

function rs(e) {
  let t = ny({
    automaticGainControl: e.enabled
  });
  tt.eachConnection(e => ns(e, t.automaticGainControl)), ri(), n7(e.location)
}

function rl(e) {
  let t = ny({
    noiseCancellation: e.enabled
  });
  tt.eachConnection(e => nl(e, t.noiseCancellation)), ri(), n7(e.location)
}

function rc(e) {
  ef.A.setKrispModelOverride(e.model), d = e.model, ri()
}

function ru(e) {
  var t;
  (0, eA.isWeb)() || (tL = e.enabled, null == (t = tt.setNoiseCancellationEnableStats) || t.call(tt, e.enabled))
}

function rd(e) {
  ny({
    silenceWarning: e.enabled
  }), ng.update()
}

function rf(e) {
  tt.setDebugLogging(e.enabled)
}

function rp(e) {
  let {
    level: t
  } = e;
  u = t, ef.A.setKrispSuppressionLevel(t)
}

function r_(e) {
  ny({
    videoHook: e.enabled
  })
}

function rh(e) {
  ny({
    experimentalSoundshare2: e.enabled
  })
}

function rm(e) {
  let {
    enabled: t
  } = e;
  ny({
    useSystemScreensharePicker: t
  })
}

function rg(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = ny({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  tt.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function rE(e) {
  let {
    enabled: t
  } = e;
  ny({
    qos: t
  }), tt.eachConnection(e => e.setQoS(t))
}

function ry() {
  nb()
}

function rb(e) {
  let {
    inputDetected: t
  } = e;
  tT = t, !tC && tT && (tC = true, ng.update())
}

function rO(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === th) returnfalse;
  th = n, tt.eachConnection(nt)
}

function rv(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === ek.hL.ACCEPTED;
  switch (n) {
    case ek.iL.AUDIO:
      tW = true, tt.eachConnection(nt);
      break;
    case ek.iL.CAMERA:
      !r && tg && nr(false);
      break;
    default:
      returnfalse
  }
}

function rA() {
  return tP || false
}
async function rI() {
  try {
    var e, t, n, i;
    await eS.Ay.ensureModule("discord_krisp");
    let a = eS.Ay.requireModule("discord_krisp");
    tP = true, c = null == (t = a.getSdkVersion) ? true : t.call(a), u = null != (e = null == (n = a.getSuppressionLevel) ? true : n.call(a)) ? e : 100, null == (i = a.getNcModels) || i.call(a).then(e => {
      tD = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eK.warn("Failed to load Krisp module: ".concat(t.message)), eI.A.captureException(t);
    let e = eF.CO.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eF.CO.INITIALIZED : n
    }
    eb.default.track(eM.HAw.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), ny({
      noiseCancellation: false
    })
  } finally {
    tR = false
  }
}

function rS() {
  return (0, eA.isWindows)() || (0, eA.isLinux)() || (0, eA.isMac)()
}

function rT() {
  !rS() || __OVERLAY__ || tR || tP ? (0, eA.isWeb)() && tt.supports(eF.O5.NOISE_CANCELLATION) ? (tP = true, r.emitChange()) : (0, eA.isWeb)() && ny({
    noiseCancellation: false
  }) : (tR = true, rI())
}

function rC(e) {
  let {
    enabled: t
  } = e;
  eb.default.track(eM.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tx ? tx : null,
    enabled: t
  }), ny({
    voiceFilterPlaybackEnabled: t
  })
}

function rN(e) {
  let {
    newVoiceFilterId: t
  } = e;
  ny({
    mostRecentlyRequestedVoiceFilter: t
  }), tt.eachConnection(e => e.setVoiceFilterId(t))
}

function rw() {
  ny({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rR(e) {
  let {
    voiceFilterId: t
  } = e;
  tj = tx, tk = tM, tx = t, tM = null === t ? null : Date.now()
}

function rP(e) {
  let t = e.bypassEnabled;
  ny({
    bypassSystemInputProcessing: t
  }), tt.setAudioInputBypassSystemProcessing(t), n7(e.location)
}

function rD(e) {
  rL(e.subsystem)
}

function rL(e) {
  e === eF.rB.AUTOMATIC ? (ny({
    automaticAudioSubsystem: true
  }), rx()) : (ny({
    automaticAudioSubsystem: false
  }), tt.setAudioSubsystem(e))
}

function rx() {
  tt.queueAudioSubsystem(eF.rB.EXPERIMENTAL)
}

function rM(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && nr(i, null), null != t || null == n) {
    tw = false;
    return
  }
  if (tw) return;
  tw = true;
  let a = t8();
  (a.mute || a.deaf) && (ny({
    deaf: false,
    mute: false
  }), tt.eachConnection(nt))
}

function rj(e) {
  let {
    application: t
  } = e;
  tr.add(t.id)
}

function rk(e) {
  let {
    application: t
  } = e;
  tr.delete(t.id)
}

function rU(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      ti = false, tt.eachConnection(nt);
      break;
    case "video":
      nr(false)
  }
}

function rG(e) {
  ti = e.enabled, e.unmute && ny({
    mute: false,
    deaf: false
  }), tt.eachConnection(nt)
}

function rF(e) {
  let {
    enabled: t
  } = e;
  ed.A.requestPermission(ek.iL.CAMERA), nr(t)
}

function rV(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e;
  if (!(0, R.Ao)() || null == S.A) returnfalse;
  let a = null,
    s = null,
    l = eO.A.getPidFromDesktopSource(t);
  ({
    soundshareId: a,
    soundshareSession: s
  } = nD(l));
  let c = {
    desktopSource: {
      id: t,
      sourcePid: l,
      soundshareId: a,
      soundshareSession: s
    },
    quality: i
  };
  null != o && (tt.setClipsSource(null), (0, eA.isWindows)() && null != o.desktopSource.soundshareId && T.c1(o.desktopSource.soundshareId)), null != a && nL(a, s), o = c;
  let u = t6("MediaEngineStore clips"),
    d = t8().videoHook;
  tt.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: d,
      useGraphicsCapture: nd(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: np(),
      videoHookStaleFrameTimeoutMs: e0,
      graphicsCaptureStaleFrameTimeoutMs: e1,
      hdrCaptureMode: u
    },
    quality: i,
    applicationName: n
  })
}

function rB(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, tt.setClipsSource(null))
}

function rH(e) {
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
      s = null != (t = a.context) ? t : eF.x.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : eO.A.getPidFromDesktopSource(i);
    eA.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nD(c), null != e && nL(e, r)), nn(s), nr(s === eF.x.STREAM && tg, {
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
    let e = null != (r = a.context) ? r : eF.x.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eF.x.STREAM && tg,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    nr(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else nr(tg, null)
}

function rY(e) {
  let {
    section: t
  } = e;
  return t === eM.nc_.VOICE && nv(), false
}

function rW() {
  return tt.eachConnection(nc), false
}

function rK(e) {
  let {
    enabled: t
  } = e, n = ny({
    aecDumpEnabled: t
  });
  tt.setAecDump(n.aecDumpEnabled)
}

function rz(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  tn = Object.values(eF.x).reduce((e, n) => {
    let r = n,
      i = e9();
    return e[r] = g().merge(i, t[r]), e
  }, {}), v.w.set(ez, tn), nO()
}

function rq(e) {
  let {
    state: t
  } = e, n = M.A.isEnabled();
  if (t === eM.g6G.BACKGROUND && tg && !n) tI = true, nr(false);
  else {
    if (t !== eM.g6G.ACTIVE || !tI) returnfalse;
    tI = false, nr(true)
  }
  returntrue
}

function rZ(e) {
  tt.eachConnection(t => t.setBitRate(e.bitrate))
}

function rQ() {
  if (!tg && null == a || null != eP.A.getRTCConnectionId()) returnfalse;
  nr(false, null)
}

function rX() {
  return !!tG && (tG = false, true)
}

function rJ(e) {
  tt.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function r$(e) {
  let {
    settings: t
  } = e;
  tt.applyMediaFilterSettings(t).finally(() => {
    tF = false, r.emitChange()
  })
}

function r0() {
  tF = true
}

function r1() {
  tF = false
}

function r2(e) {
  t$ = e.enabled
}

function r3() {
  if ((0, eA.isDesktop)() && eA.isPlatformEmbedded && !t3) {
    t3 = true;
    let e = async () => {
      let t = await new Promise(e => {
        eS.Ay.pollQueueMetrics(t => {
          e(t)
        })
      });
      t.periodMs = eF.tl;
      let n = r4(t);
      null !== n && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eF.tl)
    };
    setTimeout(e, eF.tl)
  }
}
class r6 extends(p = Chunk311907.Ay.Store) {
  initialize() {
    nu(), nE(), rT(), nq(), r3(), (0, eA.isWindows)() && eA.isPlatformEmbedded && na(), tQ = {
      [eF.O5.VIDEO]: tt.supports(eF.O5.VIDEO),
      [eF.O5.DESKTOP_CAPTURE]: tt.supports(eF.O5.DESKTOP_CAPTURE),
      [eF.O5.HYBRID_VIDEO]: tt.supports(eF.O5.HYBRID_VIDEO)
    }, this.waitFor(eC.default, eN.A, ew.A, eR.A, N.A, x.A, eP.A, j.Ay, e_.A, eg.A, eL.default, ex.A, ey.A)
  }
  supports(e) {
    return tt.supports(e)
  }
  supportsInApp(e) {
    return tQ[e] || tt.supports(e)
  }
  isSupported() {
    return tt.supported()
  }
  isNoiseSuppressionSupported() {
    return tt.supports(eF.O5.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return rA()
  }
  isNoiseCancellationError() {
    return tG
  }
  isAutomaticGainControlSupported() {
    return tt.supports(eF.O5.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !nh() && (tt.supports(eF.O5.LEGACY_AUDIO_SUBSYSTEM) || tt.supports(eF.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return tt.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tt.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return rA()
  }
  isAecDumpSupported() {
    return tt.supports(eF.O5.AEC_DUMP)
  }
  isSimulcastSupported() {
    return tt.supports(eF.O5.VIDEO) && tt.supports(eF.O5.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = eR.A.getChannel(tU)) ? true : e.type) !== eM.rbe.GUILD_STAGE_VOICE && e5 && Q.A.simulcastEnabled()
  }
  isVideoDecoderFallbackEnabled() {
    return tY
  }
  getAecDump() {
    return t8().aecDumpEnabled
  }
  getMediaEngine() {
    return tt
  }
  getVideoComponent() {
    return tt.Video
  }
  getCameraComponent() {
    return tt.Camera
  }
  getKrispSuppressionLevel() {
    return null != u ? u : 100
  }
  getKrispEnableStats() {
    return tL
  }
  isEnabled() {
    return ti
  }
  isMute() {
    return this.isSelfMute() || tp
  }
  isDeaf() {
    return this.isSelfDeaf() || tm
  }
  hasContext(e) {
    return null != tn[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return e === eF.x.DEFAULT && t_
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return !this.isEnabled() || t8(e).mute || !ed.A.didHavePermission(ek.iL.AUDIO) || this.isSelfDeaf(e) || e === eF.x.DEFAULT && th
  }
  shouldSkipMuteUnmuteSound() {
    return tb
  }
  notifyMuteUnmuteSoundWasSkipped() {
    tb = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && ew.A.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return t$
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return !this.isSupported() || t8(e).deaf
  }
  isVideoEnabled() {
    return tg && tS
  }
  isVideoAvailable() {
    return Object.values(td).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.STREAM;
    return to === e && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.STREAM;
    return to === t && null != a && (null == (e = a.desktopSource) ? true : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
    return e !== eC.default.getId() && (t8(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return tt.supports(eF.O5.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
    return null != (t = t8(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
    return null != (t = t8(n).videoToggleStateMap[e]) ? t : eM.bb8.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
    return t === eF.x.DEFAULT && tz.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return e === eF.x.DEFAULT && tz.size > 0
  }
  isMediaFilterSettingLoading() {
    return tF
  }
  isNativeAudioPermissionReady() {
    return tW
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return to
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return ts
  }
  isH264MfDecodeAvailable() {
    return tl
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
      n = t8(t).localPans[e];
    return null != n ? n : e$
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
      n = t === eF.x.STREAM ? eF.Cn : eF.Hz,
      r = t8(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return t8().inputVolume
  }
  getOutputVolume() {
    return t8().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return t8(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return t8(e).modeOptions
  }
  getActiveVoiceFilter() {
    return tx
  }
  getActiveVoiceFilterAppliedAt() {
    return tM
  }
  getPreviousVoiceFilter() {
    return tj
  }
  getPreviousVoiceFilterAppliedAt() {
    return tk
  }
  getMostRecentlyRequestedVoiceFilter() {
    return t8().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return t8().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return g().each(tn, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eM.TBI.PUSH_TO_TALK && tr.has(n) && (e[n] = i)
    }), e
  }
  getInputDeviceId() {
    return nS(tc, t8().inputDeviceId)
  }
  getOutputDeviceId() {
    return nS(tu, t8().outputDeviceId)
  }
  getVideoDeviceId() {
    return nS(td, t8().videoDeviceId)
  }
  getInputDevices() {
    return tc
  }
  getOutputDevices() {
    return tu
  }
  getVideoDevices() {
    return td
  }
  getEchoCancellation() {
    let e = t8();
    return ew.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getSidechainCompression() {
    return tt.supports(eF.O5.SIDECHAIN_COMPRESSION) && t8().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return t8().sidechainCompressionStrength
  }
  getH265Enabled() {
    return t8().h265Enabled
  }
  hasH265HardwareDecode() {
    return null !== tB && tB
  }
  getLoopback() {
    return tZ.size > 0
  }
  getLoopbackReasons() {
    return tZ
  }
  getNoiseSuppression() {
    let e = t8();
    return ew.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = t8();
    return ew.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return t8().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return t8().noiseCancellation
  }
  getHardwareEncoding() {
    return e5
  }
  getEnableSilenceWarning() {
    return t8().silenceWarning
  }
  getDebugLogging() {
    return tt.getDebugLogging()
  }
  getQoS() {
    return t8().qos
  }
  getAttenuation() {
    return t8().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return t8().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return t8().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return n_() && t8().automaticAudioSubsystem ? eF.rB.AUTOMATIC : tt.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return tt.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return t8().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == e || e === eG.my.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return t8(e)
  }
  getState() {
    return {
      settingsByContext: tn,
      inputDevices: tc,
      outputDevices: tu,
      appSupported: tQ,
      krispModuleLoaded: tP,
      krispVersion: c,
      krispSuppressionLevel: u,
      goLiveSource: a,
      goLiveContext: to
    }
  }
  getInputDetected() {
    return tT
  }
  getNoInputDetectedNotice() {
    return tN
  }
  getInputDeviceOSMuted() {
    return s
  }
  getInputDeviceOSVolume() {
    return l
  }
  getPacketDelay() {
    return eA.isPlatformEmbedded || this.getMode() !== eM.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    tt.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return ta
  }
  getVideoHook() {
    return t8().videoHook
  }
  supportsVideoHook() {
    return tt.supports(eF.O5.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = t8().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return tt.supports(eF.O5.EXPERIMENTAL_SOUNDSHARE) && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, ej.$x)
  }
  supportsHookSoundshare() {
    return (0, eA.isWindows)() && tt.supports(eF.O5.SOUNDSHARE) && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, ej.ws)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = t8().useSystemScreensharePicker,
      n = (0, eA.isLinux)();
    return e && (null != t ? t : n)
  }
  supportsSystemScreensharePicker() {
    return tt.supports(eF.O5.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return t2
  }
  getUseGamescopeCapture() {
    return t1
  }
  getEverSpeakingWhileMuted() {
    return tO
  }
  getSpeakingWhileMuted() {
    return tv
  }
  getKrispModelOverride() {
    return d
  }
  getKrispModels() {
    return tD
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = t8().modeOptions.vadKrispActivationThreshold) ? e : eJ
  }
  hasActiveCallKitCall() {
    return t0
  }
  setHasActiveCallKitCall(e) {
    t0 = e
  }
  supportsScreenSoundshare() {
    return (0, eA.isMac)() ? tt.supports(eF.O5.SOUNDSHARE) && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, ej.P$) && np() : (0, eA.isWindows)() ? tt.supports(eF.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, eA.isLinux)() && tt.supports(eF.O5.SCREEN_SOUNDSHARE)
  }
  getSystemMicrophoneMode() {
    if ((0, eA.isWindows)()) {
      var e, t;
      return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects) ? true : e.find(e => e === e7)
    }
    if ((0, eA.isMac)() || (0, eA.isIOS)()) return f
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
      t = this.supports(eF.O5.VIDEO) ? [{
        rid: "100",
        type: e === eF.x.DEFAULT ? eF.mI.VIDEO : eF.mI.SCREEN,
        quality: eF.Y4
      }] : [];
    return this.isSimulcastSupported() && (e === eF.x.DEFAULT || this.goLiveSimulcastEnabled()) && t.push({
      rid: "50",
      type: e === eF.x.DEFAULT ? eF.mI.VIDEO : eF.mI.SCREEN,
      quality: eF.Cl
    }), t
  }
  fetchAsyncResources() {
    let e = {
      fetchDave: false
    };
    return (0, eA.isWeb)() && (e.fetchDave = en.f1.getCurrentConfig({
      location: "MediaEngineStore fetchAsyncResources"
    }).loadWasmModule), tt.fetchAsyncResources(e)
  }
  startDavePreload() {
    if (!tV && (tV = true, (0, eA.isWeb)())) {
      let e = {
        fetchDave: true
      };
      tt.fetchAsyncResources(e).catch(e => {
        eK.warn("DAVE preload failed:", e), eI.A.captureException(e)
      })
    }
  }
  getSupportedSecureFramesProtocolVersion() {
    if ((0, eA.isWeb)()) {
      let {
        useWasmModule: e
      } = en.f1.getCurrentConfig({
        location: "MediaEngineStore getSupportedSecureFramesProtocolVersion"
      });
      if (!e) return 0
    }
    let e = tt.getSupportedSecureFramesProtocolVersion();
    114 === e && (e = 1);
    let t = en.ex.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      n = en.a.getConfig({
        location: "MediaEngineStore"
      });
    return (t.canSupportDaveProtocol || n.allowOptIn && e_.A.getPersistentCodesEnabled()) && e >= t.protocolVersionFloor ? e : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tX
  }
}

function r4(e) {
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
eB(r6, "displayName", "MediaEngineStore");
let r5 = r = new r6(Chunk73153.h, {
  VOICE_CHANNEL_SELECT: rM,
  VOICE_STATE_UPDATES: nG,
  CONNECTION_OPEN: nx,
  CONNECTION_CLOSED: nj,
  POST_CONNECTION_OPEN: nk,
  RTC_CONNECTION_STATE: nU,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nF,
  AUDIO_TOGGLE_SELF_MUTE: nV,
  AUDIO_SET_SELF_MUTE: nB,
  AUDIO_TOGGLE_SELF_DEAF: nY,
  AUDIO_TOGGLE_LOCAL_MUTE: nW,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nK,
  AUDIO_SET_LOCAL_VOLUME: nZ,
  AUDIO_SET_LOCAL_PAN: nQ,
  AUDIO_SET_MODE: nX,
  AUDIO_SET_INPUT_VOLUME: nJ,
  AUDIO_SET_OUTPUT_VOLUME: n$,
  AUDIO_SET_INPUT_DEVICE: n0,
  AUDIO_SET_OUTPUT_DEVICE: n1,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: n3,
  AUDIO_SET_ECHO_CANCELLATION: n8,
  AUDIO_SET_SIDECHAIN_COMPRESSION: n9,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: re,
  AUDIO_SET_LOOPBACK: rn,
  AUDIO_SET_NOISE_SUPPRESSION: ro,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rs,
  AUDIO_SET_NOISE_CANCELLATION: rl,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: rc,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: rd,
  AUDIO_SET_DEBUG_LOGGING: rf,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rp,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: ru,
  MEDIA_ENGINE_SET_VIDEO_HOOK: r_,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rh,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rm,
  AUDIO_SET_ATTENUATION: rg,
  AUDIO_SET_QOS: rE,
  MEDIA_ENGINE_DEVICES: n4,
  AUDIO_VOLUME_CHANGE: n5,
  AUDIO_RESET: ry,
  AUDIO_INPUT_DETECTED: rb,
  AUDIO_SET_SUBSYSTEM: rD,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rP,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rG,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rF,
  MEDIA_ENGINE_PERMISSION: rU,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rH,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: n2,
  MEDIA_ENGINE_INTERACTION_REQUIRED: n6,
  USER_SETTINGS_MODAL_INIT: rY,
  USER_SETTINGS_MODAL_SET_SECTION: rY,
  CERTIFIED_DEVICES_SET: rW,
  RPC_APP_CONNECTED: rj,
  RPC_APP_DISCONNECTED: rk,
  OVERLAY_INITIALIZE: nM,
  APP_STATE_UPDATE: rq,
  SET_CHANNEL_BITRATE: rZ,
  SET_VAD_PERMISSION: rO,
  SET_NATIVE_PERMISSION: rv,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rJ,
  MEDIA_ENGINE_SET_AEC_DUMP: rK,
  MEDIA_ENGINE_RESET_SETTINGS: rz,
  CHANNEL_DELETE: rQ,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rX,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r$,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r0,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r1,
  USER_SETTINGS_PROTO_UPDATE: nH,
  CLIPS_INIT: rV,
  CLIPS_SETTINGS_UPDATE: rB,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r2,
  VOICE_FILTER_REQUEST_SWITCH: rN,
  VOICE_FILTER_LOOPBACK_TOGGLE: rC,
  VOICE_FILTER_APPLIED: rR,
  VOICE_FILTER_DOWNLOAD_FAILED: rw,
  VOICE_FILTER_APPLY_FAILED: rw
})