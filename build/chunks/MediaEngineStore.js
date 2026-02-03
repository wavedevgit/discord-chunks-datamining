/** Chunk was on web.js **/
/** chunk id: 430452, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f;
require.d(exports, {
  A: () => r2
}), require("./896048.js"), require("./228524.js"), require("./492834.js"), require("./321073.js"), require("./638769.js"), require("./457529.js"), require("./790599.js");
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

function eF(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eF(e, t, n[t])
    })
  }
  return e
}

function eH(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eY(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eH(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eW = new Chunk626584.A("MediaEngineStore"),
  eK = "MediaEngineStore",
  ez = 4,
  eq = 1,
  eZ = 1,
  eQ = 1,
  eX = .5,
  eJ = {
    left: 1,
    right: 1
  },
  e$ = 500,
  e0 = 5 * Chunk927813.A.Millis.SECOND,
  e1 = false,
  e2 = 100,
  e3 = 2 * Chunk927813.A.Millis.SECOND,
  e6 = 30 * Chunk927813.A.Millis.SECOND,
  e4 = true,
  e5 = "deep_noise_suppression",
  e7 = 0;

function e8() {
  return {
    mode: ex.TBI.VOICE_ACTIVITY,
    modeOptions: {
      threshold: e1,
      autoThreshold: ev.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eX,
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
    inputVolume: eG.Hz,
    outputVolume: eG.Hz,
    inputDeviceId: eG.dx,
    outputDeviceId: eG.dx,
    videoDeviceId: eG.dx,
    qos: false,
    qosMigrated: false,
    videoHook: te.supports(eG.O5.VIDEO_HOOK),
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
let e9 = {
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
  te = (0, Chunk205693.hB)((0, Chunk205693.WI)());
eW.enableNativeLogger(true);
let tt = {},
  tn = new Set([Chunk731854.x.DEFAULT]),
  tr = te.supports(Chunk731854.O5.AUTO_ENABLE),
  ti = false,
  ta = Chunk731854.x.STREAM,
  to = performance.now(),
  ts = {
    [Chunk731854.dx]: ny("No Input Devices")
  },
  tl = {
    [Chunk731854.dx]: ny("No Output Devices")
  },
  tc = {
    [Chunk731854.dx]: ny("No Video Devices")
  },
  tu = new Chunk451988.Ep,
  td = false,
  tf = false,
  tp = false,
  t_ = false,
  th = false,
  tm = Chunk731854.qe,
  tg = Chunk731854.qe,
  tE = false,
  ty = false,
  tb = false,
  tO = new Chunk451988.Ep,
  tv = false,
  tA = false,
  tI = null,
  tS = false,
  tT = false,
  tC = false,
  tN = false,
  tw = false,
  tR = [],
  tP = false,
  tD = null,
  tL = null,
  tx = null,
  tM = null,
  tj = null,
  tk = false,
  tU = false,
  tG = false,
  tV = null,
  tF = null,
  tB = false,
  tH = false;
Chunk674966.A.hasPermission(Chunk765682.iL.AUDIO, {
  showAuthorizationError: false
}), Chunk674966.A.hasPermission(Chunk765682.iL.CAMERA, {
  showAuthorizationError: false
});
let tY = false,
  tW = new Set,
  tK = tY,
  tz = new Set,
  tq = {},
  tZ = null,
  tQ = true,
  tX = false,
  tJ = false,
  t$ = false,
  t0 = false;

function t1(e) {
  return (0, Z.p)({
    location: e
  }).hdrCaptureMode
}
async function t2() {
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

function t3() {
  return null != tF ? tF : "u" > typeof window ? tF = t2().then(e => (tV = e, e)) : Promise.resolve(false)
}

function t6() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
    t = tt[e];
  return null == t && (t = e8(), tt[e] = t), t
}

function t4() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
    i = t6(r),
    a = e9[null != (e = i.activeInputProfile) ? e : eU.my.CUSTOM],
    o = eB({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, er.R)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, U.F)({
      location: "getSettings"
    });
    null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold)
  }
  return eY(eB({}, i, a), {
    modeOptions: o
  })
}

function t5(e) {
  var t, n;
  let r = t4(e.context),
    i = r.mode;
  e.context === eG.x.DEFAULT && ((0, eh.H)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === ex.TBI.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = ex.TBI.VOICE_ACTIVITY), (0, et.N)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && ry(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eX,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function t7(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eG.Hz;
  return g().clamp(e, 0, t)
}

function t8(e) {
  let t = t4(e.context),
    n = !tr || t.mute || t.deaf;
  e.context === eG.x.DEFAULT ? n = n || td || tf || tp || !eu.A.didHavePermission(ej.iL.AUDIO) : e.context === eG.x.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eG.x.DEFAULT && C.A.updateNativeMute()
}

function t9(e) {
  e !== ta && (null != a && te.setGoLiveSource(null, ta), ta = e)
}

function ne() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : th,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : e.id) && (null != s.desktopSource.soundshareId && (0, ev.isWindows)() && T.c1(s.desktopSource.soundshareId), te.setGoLiveSource(null, ta)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : n.audioDeviceGuid)) && te.setGoLiveSource(null, ta), th || i) {
    let e = t4().videoDeviceId;
    th && e === eG.dx && tg === eG.dx && tm !== eG.qe ? e = tm : tg = e, tm = (th = i) ? nO(tc, e) : eG.qe, te.setVideoInputDevice(tm)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = t1("MediaEngineStore go live"),
        n = t4().videoHook,
        i = ns(),
        a = i ? nl() ? eM.zl : eM.eg : 0,
        s = (0, ev.isWindows)() && (0, ei.b)("updateVideo").enabled;
      te.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: n,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: s,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: nc(),
          videoHookStaleFrameTimeoutMs: e$,
          graphicsCaptureStaleFrameTimeoutMs: e0,
          hdrCaptureMode: t,
          enableGlobalFramePoolLock: (0, q.H)({
            location: "updateVideo"
          }).enabled
        },
        quality: e
      }, ta)
    }
    null != o.cameraSource && te.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: e
    }, ta)
  }
}

function nt(e) {
  switch (e) {
    case eG.CO.CPU_OVERUSE:
      return L.B6.NoiseCancellerCpuOveruse;
    case eG.CO.FAILED:
      return L.B6.NoiseCancellerFailed;
    case eG.CO.VAD_CPU_OVERUSE:
      return L.B6.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function nn(e) {
  let t = (0, U.F)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eB({
    enabled: e
  }, t)
}

function nr(e, t) {
  e.setAutomaticGainControl(nn(t))
}

function ni(e, t) {
  let n = (0, ef.A)(t, r.getSystemMicrophoneMode(), {
    location: "setNoiseCancellation"
  });
  n !== t && eW.info("Falling back to system noise suppression."), t = n, e.setNoiseCancellation(t);
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

function na(e) {
  let t = t4(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eN.A.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eN.A.hasNoiseSuppression(n) || t.noiseSuppression), nr(e, eN.A.hasAutomaticGainControl(n) || t.automaticGainControl), ni(e, t.noiseCancellation), e.setVoiceFilterId(tD), (0, ev.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function no() {
  tu.start(e6, () => {
    eW.error("Device enumeration timed out"), ey.default.track(ex.HAw.DEVICE_ENUMERATION_TIMEOUT, {})
  }), te.on(O.bg.Connection, e => {
    t5(e), t8(e), na(e);
    let t = t4();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
    let n = (0, J.K)({
      location: "setupMediaEngine"
    }).treatment;
    tB = n === J.c.NoSoftwareDecodeWithFallback, n === J.c.NoSoftwareDecode || n === J.c.NoSoftwareDecodeWithFallback ? (e.setExperimentFlag(eG.fd.H265_HARDWARE_ONLY, true), (0, ev.isWindows)() ? t3().then(t => {
      e.setExperimentFlag(eG.fd.H265_HARDWARE_DECODE_AVAILABLE, t)
    }) : (0, ev.isMac)() && e.setExperimentFlag(eG.fd.H265_HARDWARE_DECODE_AVAILABLE, true)) : n === J.c.Disabled && (e.setExperimentFlag(eG.fd.H265_HARDWARE_ONLY, true), e.setExperimentFlag(eG.fd.H265_HARDWARE_DECODE_AVAILABLE, false)), (0, ev.isWindows)() && (0, X.r)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eG.fd.USE_H264_MF_DECODER, true);
    let i = eR.A.getGuildId(),
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
    o && e.setExperimentFlag(eG.fd.MUTE_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eG.fd.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(eG.fd.SKIP_ENCODE, true), (0, ee.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eG.fd.LOW_LATENCY_RATE_CONTROL, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(eG.fd.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(eG.fd.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(eG.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eG.x.STREAM) {
      let t = nA(tl);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = Q.A.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, ev.isWindows)()) e.setExperimentFlag(eG.fd.SIGNAL_AV1, true), e.setExperimentFlag(eG.fd.SIGNAL_AV1_HARDWARE_DECODE, true);
    else if ((0, ev.isMac)()) {
      e.setExperimentFlag(eG.fd.SIGNAL_AV1_DECODE, true);
      let {
        enabled: t
      } = (0, V.t)("MediaEngineStore");
      t && e.setExperimentFlag(eG.fd.SIGNAL_AV1_HARDWARE_DECODE, true)
    } else if ((0, ev.isLinux)()) e.setExperimentFlag(eG.fd.SIGNAL_AV1_DECODE, true);
    else if ((0, ev.isIOS)()) {
      let {
        enabled: t
      } = (0, G.$)("MediaEngineStore");
      t && (e.setExperimentFlag(eG.fd.SIGNAL_AV1_DECODE, true), e.setExperimentFlag(eG.fd.SIGNAL_AV1_HARDWARE_DECODE, true))
    }
    if ((0, ev.isWeb)()) {
      let {
        enabled: t
      } = (0, z.O)("MediaEngineStore");
      e.setExperimentFlag(eG.fd.BROWSER_HEVC, t)
    }
    if ((0, ev.isWindows)() && (null == tZ ? true : tZ.startsWith("AMD")) && (0, eo.F)("MediaEngineStore").enabled && e.setExperimentFlag(eG.fd.WMF_GPU_ENCODE, true), (0, ev.isWindows)() && (null == tZ ? true : tZ.startsWith("Intel")) && (0, es.J)("MediaEngineStore").enabled && e.setExperimentFlag(eG.fd.WMF_GPU_ENCODE, true), (0, ev.isWindows)() && (null == tZ ? true : tZ.startsWith("Qualcomm")) && (0, eo.F)("MediaEngineStore").enabled && e.setExperimentFlag(eG.fd.WMF_GPU_ENCODE, true), te.setHasFullbandPerformance((0, D.A)()), e.setRemoteAudioHistory(1e3), (0, w.A)(r)) {
      let {
        enableViewerClipping: t
      } = ea.A.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eG.X1)
    }
    for (let n of (t = t4(e.context), e.setPostponeDecodeLevel(e2), Object.keys(t.localMutes))) n !== eT.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eT.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
    }), e.context === eG.x.DEFAULT && (ty = false, tb = false, e.on(O.yq.SpeakingWhileMuted, () => {
      ty = true, tb = true, r.emitChange(), tO.stop(), tO.start(e3, () => {
        tb = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && ey.default.track(ex.HAw.VIDEOHOOK_INITIALIZED, eB({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, k.A)(null == a ? true : a.desktopSource)))
    }), e.on(O.yq.NoiseCancellationError, e => {
      eW.warn("noisecancellererror event: ".concat(e)), (0, L.QW)({
        type: L.iy.NOISE_CANCELLER_ERROR,
        underlyingError: nt(e)
      }), tk = true, ey.default.track(ex.HAw.VOICE_PROCESSING, {
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
      eW.warn("voiceactivitydetectorerror event: ".concat(e)), (0, L.QW)({
        type: L.iy.NOISE_CANCELLER_ERROR,
        underlyingError: nt(e)
      }), ey.default.track(ex.HAw.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), I.h.dispatch({
        type: "AUDIO_SET_MODE",
        context: eG.x.DEFAULT,
        mode: ex.TBI.VOICE_ACTIVITY,
        options: eY(eB({}, t4(eG.x.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), I.h.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(O.yq.SdpError, (e, t, n, r) => {
      ey.default.track(ex.HAw.SDP_ERROR, {
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
    }), e.setBitRate(eC.A.bitrate), e.applyVideoQualityMode(eL.A.mode), te.supports(eG.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) && te.setAsyncVideoInputDeviceInit((0, H.v)("setupMediaEngine").enabled)
  }), te.on(O.bg.DeviceChange, (e, t, n) => {
    tu.stop(), I.h.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), te.on(O.bg.VolumeChange, (e, t) => {
    I.h.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), te.on(O.bg.DesktopSourceEnd, (e, t) => {
    I.h.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), te.on(O.bg.AudioPermission, e => {
    tH = true, I.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), te.on(O.bg.VideoPermission, e => {
    I.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), te.on(O.bg.WatchdogTimeout, async () => {
    let e;
    try {
      await eb.A.submitLiveCrashReport({
        message: {
          message: "Voice Watchdog Timeout"
        }
      })
    } catch (t) {
      "number" == typeof t.status && (e = t.status)
    }
    eW.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), ey.default.track(ex.HAw.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: e
    })
  }), te.on(O.bg.VideoInputInitialized, e => {
    ey.default.track(ex.HAw.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * eO.A.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eR.A.getMediaSessionId(),
      rtc_connection_id: eR.A.getRTCConnectionId()
    })
  }), te.on(O.bg.AudioInputInitialized, e => {
    ey.default.track(ex.HAw.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * eO.A.Millis.SECOND),
      rtc_connection_id: eR.A.getRTCConnectionId()
    })
  }), te.on(O.bg.ClipsRecordingRestartNeeded, () => {
    I.h.dispatch({
      type: "CLIPS_RESTART"
    })
  }), te.on(O.bg.ClipsInitFailure, (e, t) => {
    I.h.wait(() => {
      I.h.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), te.on(O.bg.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.c1(t), o = null)
  }), te.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
    I.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), te.on(O.bg.NativeScreenSharePickerCancel, e => {
    I.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), te.on(O.bg.NativeScreenSharePickerError, e => {
    I.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), te.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
    ey.default.track(ex.HAw.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), te.on(O.bg.VideoCodecError, e => {
    let t = "encode" === e.mode ? L.iy.VIDEO_ENCODE_ERROR : L.iy.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, L.QW)(t === L.iy.VIDEO_ENCODE_ERROR ? eY(eB({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eY(eB({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), te.on(O.bg.ConnectionStats, e => {
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
          version: e7++,
          context: n.context
        }
      })
    })
  }), te.on(O.bg.VoiceQueueMetrics, e => {
    let t = r1(e);
    null !== t && ey.default.track(ex.HAw.VOICE_QUEUE_METRICS, t)
  }), te.setOnVideoContainerResized((e, t, n) => {
    I.h.wait(() => I.h.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      dimensions: {
        width: t,
        height: n
      }
    }))
  }), n9(), rt(), te.supports(eG.O5.ASYNC_CLIPS_SOURCE_DEINIT) && te.setAsyncClipsSourceDeinit((0, Y.V)("setupMediaEngine").enabled), np.reset(), (0, eP.w)().then(e => {
    null != e && (tZ = e.gpu_brand)
  }), te.on(O.bg.SystemMicrophoneModeChange, e => {
    f = e, te.eachConnection(na)
  })
}

function ns() {
  return (0, ev.isWindows)() && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, eM.yg)
}

function nl() {
  return (0, ev.isWindows)() && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, eM.fG)
}

function nc() {
  return (0, ev.isMac)() && te.supports(eG.O5.SCREEN_CAPTURE_KIT) && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, eM.e)
}

function nu() {
  return (0, ev.isWindows)() && te.supports(eG.O5.AUTOMATIC_AUDIO_SUBSYSTEM) && te.supports(eG.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function nd() {
  return te.supports(eG.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
async function nf() {
  let {
    windowsMuteAndZeroVolumeDetectionEnabled: e
  } = (0, el.F)({
    location: "MediaEngineStore.fetchInputDeviceOSConfig"
  });
  if ((0, ev.isWindows)() && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, eM.PH) && e) try {
    var t;
    let e = nO(ts, t4().inputDeviceId),
      n = null == (t = ts[e]) ? true : t.guid;
    if (null != n && "" !== n) {
      await eI.Ay.ensureModule("discord_voice");
      let [e, t] = await Promise.all([te.getDeviceOSVolume(n), te.getDeviceOSMuted(n)]);
      l = e, s = t
    }
  } catch (e) {
    eW.warn("Failed to get device OS volume and/or mute state: ".concat(e))
  }
}
let np = new class {
  start() {
    this.started || (this.started = true, te.on(O.bg.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), te.removeListener(O.bg.Silence, this.handleSilence), I.h.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = t4();
    !tS && eR.A.getState() === ex.S7L.RTC_CONNECTED && e.mode === ex.TBI.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eF(this, "stateChangeTimeout", true), eF(this, "noVoiceTimeout", 5e3), eF(this, "voiceTimeout", 1500), eF(this, "started", false), eF(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout);
      let n = () => {
        I.h.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tT = true)
      };
      this.stateChangeTimeout = setTimeout(async () => {
        this.stateChangeTimeout = null, e && this.started && await nf(), this.started && n()
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function n_() {
  var e;
  let t = v.w.get("audio");
  null != t && (v.w.set(eK, {
    [eG.x.DEFAULT]: t
  }), v.w.remove("audio")), tt = null != (e = v.w.get(eK)) ? e : {}, g().each(tt, e => {
    if (g().defaultsDeep(e, e8()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eS.OH)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ez && (e.vadUseKrispSettingVersion = ez, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = e1)
    }
    te.supports(eG.O5.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eQ && (e.sidechainCompressionSettingVersion = eQ, e.sidechainCompression = true), (0, ev.isWeb)() ? e.ncUseKrispjsSettingVersion !== eZ && (e.ncUseKrispjsSettingVersion = eZ, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eq && (e.ncUseKrispSettingVersion = eq, e.noiseSuppression = false, e.noiseCancellation = true)
  }), ng()
}

function nh(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eG.x.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = t6(t);
  return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eK, tt), r
}

function nm() {
  v.w.remove(eK), location.reload()
}

function ng() {
  let e = t4();
  te.setAudioInputDevice(e.inputDeviceId), te.setAudioOutputDevice(e.outputDeviceId), ne(), te.setInputVolume(e.inputVolume), te.setOutputVolume(e.outputVolume), te.setAecDump(e.aecDumpEnabled), te.setSidechainCompression(e.sidechainCompression), te.setSidechainCompressionStrength(e.sidechainCompressionStrength), te.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing)
}

function nE() {
  tr || te.enable().then(() => I.h.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function ny(e) {
  return {
    id: eG.dx,
    index: 0,
    name: e,
    disabled: true,
    guid: true,
    hardwareId: true,
    containerId: true
  }
}

function nb(e, t) {
  if (0 === e.length) {
    let e = ny(t);
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

function nO(e, t) {
  var n, r;
  let i = null != (n = null != (r = e[t]) ? r : e[eG.dx]) ? n : g()(e).values().first();
  return null != i ? i.id : t
}

function nv(e) {
  let t = ts;
  if (ts = nb(e, eV.intl.string(eV.t["/QIjDA"])), !g().isEqual(ts, t)) {
    let e = t4(),
      t = nO(ts, e.inputDeviceId);
    te.setAudioInputDevice(t), te.eachConnection(na)
  }
}

function nA(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nI(e) {
  te.eachConnection(t => {
    t.context === eG.x.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nS(e) {
  let t = tl;
  if (tl = nb(e, eV.intl.string(eV.t.xlUg0v)), !g().isEqual(tl, t)) {
    let e = t4(),
      n = nO(tl, e.outputDeviceId);
    te.setAudioOutputDevice(n);
    let r = nA(t),
      i = nA(tl);
    r !== i && nI(i)
  }
}

function nT(e) {
  tA = e.length > 0;
  let t = tc;
  if (tc = nb(e, eV.intl.string(eV.t.WKWARY)), th && !g().isEqual(tc, t)) {
    var n;
    let e = true !== tc[tm],
      r = tm === eG.dx && (null == (n = t[eG.dx]) ? true : n.disabled);
    ne(e || r)
  }
}

function nC() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
    r = null != (e = em.A.settings.audioContextSettings) ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(r)) {
    let i = e === ek.W.USER ? eG.x.DEFAULT : eG.x.STREAM,
      a = i === eG.x.STREAM ? eG.Cn : eG.Hz,
      o = null != (t = r[e]) ? t : {},
      {
        localMutes: s,
        localVolumes: l
      } = t4(i);
    for (let [e, t] of Object.entries(o)) null == (0, e_.tM)(i, e) && (t.muted ? s[e] = true : delete s[e], t.volume !== a ? l[e] = t.volume : delete l[e], te.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (n)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[e] && (delete s[e], delete l[e], te.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    nh({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nN(e) {
  if (null == r) return eW.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : eb.A.getAudioPid(e),
      n = "";
    return null != t && (n = eb.A.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nw(e, t) {
  (0, ev.isWindows)() && e > 1 && T.GH(e, {
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

function nR(e) {
  i = e.sessionId, td = false, t_ = false;
  let t = t4();
  if (nu() && (nd() ? rw(eG.rB.AUTOMATIC) : t.automaticAudioSubsystem && rR()), te.supports(eG.O5.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, ev.isDesktop)() ? e = (0, F.i)({
      location: "handleConnectionOpen"
    }).enabled: ((0, ev.isIOS)() || (0, ev.isAndroid)()) && (e = (0, B.Y)({
      location: "handleConnectionOpen"
    }).enabled), te.setOffloadAdmControls(e)
  }(0, eg.Lb)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, ev.isDesktop)() && (eE.A.getLastInitAttemptMayHaveCrashed() ? (I.h.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eG.x.DEFAULT,
    playSoundEffect: true
  }), nh({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(342887).md()), nC()
}

function nP(e) {
  let {
    mediaEngineState: t
  } = e;
  tt = t.settingsByContext, ts = t.inputDevices, tl = t.outputDevices, tq = t.appSupported, tw = t.krispModuleLoaded, c = t.krispVersion, ta = t.goLiveContext
}

function nD() {
  i = null
}

function nL() {
  if ((0, ev.isWeb)()) {
    let e = en.f1.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    e.loadWasmModule && e.preload && r.startDavePreload()
  }
  returnfalse
}

function nx(e) {
  switch (e.state) {
    case ex.S7L.CONNECTING:
      nE();
      break;
    case ex.S7L.RTC_CONNECTING:
      tS = false, tT = false, s = true, l = true;
      break;
    case ex.S7L.RTC_CONNECTED:
      ne();
      break;
    case ex.S7L.DISCONNECTED:
      nH(), nY()
  }
  np.update()
}

function nM(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      td = t.mute || t.suppress, t_ = t.deaf, te.eachConnection(t8);
      let e = null != t.guildId && null != t.channelId && null != tj && tj !== t.channelId,
        n = !tC && null == t.channelId;
      return ne(!e && !n && th), tj = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eT.default.getId() || null != eR.A.getChannelId() || ne(false, null), e
  }, false)
}

function nj(e) {
  let {
    mute: t
  } = e;
  tf = t, te.eachConnection(t8)
}

function nk(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = t4(t);
  if (t === eG.x.DEFAULT && (eu.A.requestPermission(ej.iL.AUDIO), tp)) returnfalse;
  (r = !i && !r) || (i = false), n || (tE = true), nh({
    mute: r,
    deaf: i
  }, t), te.eachConnection(t8)
}

function nU(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  nh({
    mute: n
  }, t), r || (tE = true), te.eachConnection(t8)
}

function nG(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== ek.oD.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nC(true)
}

function nV(e) {
  let {
    context: t
  } = e;
  nh({
    deaf: !t4(t).deaf
  }, t), te.eachConnection(t8)
}

function nF(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eT.default.getId()) return;
  let {
    localMutes: r
  } = t4(t);
  r[n] ? delete r[n] : r[n] = true, nh({
    localMutes: r
  }, t), te.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nB(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: f
  } = e;
  h()(!(d && f), "These are not allowed to both be true.");
  let p = u === ex.bb8.DISABLED,
    {
      disabledLocalVideos: _
    } = t4(l),
    m = null != (t = _[c]) && t,
    g = tW.has(c),
    E = u === ex.bb8.AUTO_ENABLED || u === ex.bb8.MANUAL_ENABLED;
  eW.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), h()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let y = p !== m,
    b = l === eG.x.DEFAULT,
    O = f && y && b,
    v = d && y && b;
  eW.info("changed=".concat(y, " isDefaultContext=").concat(b, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: A
  } = t4(l);
  if (A[c] === ex.bb8.AUTO_PROBING && u === ex.bb8.AUTO_ENABLED && (0, ec.A)(c, p ? eG.Al.AUTO_DISABLE : eG.Al.AUTO_ENABLE, E), A[c] = u, nh({
      videoToggleStateMap: A
    }, l, d), u === ex.bb8.AUTO_PROBING ? null == (n = eR.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eR.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tK || (eW.info("isAutoDisableAllowed=".concat(tK, " - disabling VideoHealthManager")), null == (a = eR.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tK) return;
    (0, ec.A)(c, p ? eG.Al.AUTO_DISABLE : eG.Al.AUTO_ENABLE, E), p ? tW.add(c) : tW.delete(c)
  } else v && (g && !p ? (eW.info("disallowing auto-disable for this session because of manual override by user"), tK = false, null == (s = eR.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, ec.A)(c, eG.Al.MANUAL_REENABLE, E)) : (0, ec.A)(c, p ? eG.Al.MANUAL_DISABLE : eG.Al.MANUAL_ENABLE, E));
  b && !p && tW.delete(c), p ? _[c] = true : delete _[c], nh({
    disabledLocalVideos: _
  }, l, d), te.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = _[c]) && t)
  }, l)
}

function nH() {
  if (0 === tW.size) return;
  let e = eG.x.DEFAULT,
    {
      disabledLocalVideos: t
    } = t4(e);
  tW.forEach(n => {
    h()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], te.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tW.clear(), nh({
    disabledLocalVideos: t
  }, e, false)
}

function nY() {
  let e = eG.x.DEFAULT,
    {
      videoToggleStateMap: t
    } = t4(e);
  for (let [e, n] of Object.entries(t)) n === ex.bb8.AUTO_PROBING && delete t[e];
  nh({
    videoToggleStateMap: t
  }, e, false)
}

function nW(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eT.default.getId()) return;
  let i = t === eG.x.STREAM ? eG.Cn : eG.Hz,
    {
      localVolumes: a
    } = t4(t);
  r === i ? delete a[n] : a[n] = r, nh({
    localVolumes: a
  }, t), te.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nK(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = t4(t);
  a[n] = {
    left: r,
    right: i
  }, nh({
    localPans: a
  }, t), te.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nz(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  nh({
    mode: n,
    modeOptions: r
  }, t), te.eachConnection(t5), np.update()
}

function nq(e) {
  let {
    volume: t
  } = e;
  nh({
    inputVolume: t7(t)
  }), te.setInputVolume(t)
}

function nZ(e) {
  let {
    volume: t
  } = e;
  nh({
    outputVolume: t
  }), te.setOutputVolume(t)
}

function nQ(e) {
  let {
    id: t
  } = e;
  t = nO(ts, t), to = performance.now(), nh({
    inputDeviceId: t
  }), te.setAudioInputDevice(t), te.eachConnection(na), s = true, l = true
}

function nX(e) {
  let {
    id: t
  } = e;
  nh({
    outputDeviceId: t = nO(tl, t)
  }), te.setAudioOutputDevice(t)
}

function nJ(e) {
  let {
    id: t
  } = e;
  nh({
    videoDeviceId: t = nO(tc, t)
  }), ne()
}

function n$(e) {
  let {
    inputProfile: t
  } = e;
  nh({
    activeInputProfile: t
  });
  let n = t4();
  te.eachConnection(e => {
    t5(e), na(e)
  }), te.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), np.update(), re()
}

function n0(e) {
  return ti !== e.required && (ti = e.required, e.required || te.interact(), true)
}

function n1(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  nv(t), nS(n), nT(r)
}

function n2(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  nh({
    inputVolume: t7(t),
    outputVolume: n
  })
}

function n3(e) {
  var t;
  let n = t4(),
    i = te.getAudioSubsystem(),
    a = te.getAudioLayer(),
    o = nO(ts, n.inputDeviceId),
    s = null == (t = ts[o]) ? true : t.name,
    l = (0, ef.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
      location: "trackVoiceProcessing"
    });
  ey.default.track(ex.HAw.VOICE_PROCESSING, {
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

function n6(e) {
  let t = nh({
    echoCancellation: e.enabled
  });
  te.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), re(), n3(e.location)
}

function n4(e) {
  n7(e.enabled)
}

function n5(e) {
  let t = nh({
    sidechainCompressionStrength: e.strength
  });
  te.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function n7(e) {
  let t = nh({
    sidechainCompression: e
  });
  te.setSidechainCompression(t.sidechainCompression)
}

function n8(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tz.add(n) : tz.delete(n), n9(), re()
}

function n9() {
  let e = !tz.has("voice_filter_preview") && !tz.has("mic_test");
  te.setMaybePreprocessMute(e)
}

function re() {
  let e = t4(),
    t = tz.size > 0,
    n = e.inputDeviceId,
    r = eN.A.hasEchoCancellation(n) || e.echoCancellation,
    i = !t,
    a = eN.A.hasNoiseSuppression(n) || e.noiseSuppression,
    o = nn(eN.A.hasAutomaticGainControl(n) || e.automaticGainControl),
    s = e.noiseCancellation,
    l = null !== tD,
    c = tz.has("voice_filter") && 1 === tz.size;
  te.setLoopback(t, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function rt() {
  var e, t, n, r;
  if (!te.supports(eG.O5.VAAPI)) return;
  let i = 4098;
  (null == (n = window.DiscordNative) || null == (t = n.processUtils) ? true : t.getSystemInfo) == null || (null != (e = null == (r = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : r.gpuDevice) ? e : []).some(e => e.vendorId === i) && (t$ = true, tJ = te.supports(eG.O5.GAMESCOPE_CAPTURE))
}

function rn(e) {
  let t = nh({
    noiseSuppression: e.enabled
  });
  te.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), re(), n3(e.location)
}

function rr(e) {
  let t = nh({
    automaticGainControl: e.enabled
  });
  te.eachConnection(e => nr(e, t.automaticGainControl)), re(), n3(e.location)
}

function ri(e) {
  let t = nh({
    noiseCancellation: e.enabled
  });
  te.eachConnection(e => ni(e, t.noiseCancellation)), re(), n3(e.location)
}

function ra(e) {
  ed.A.setKrispModelOverride(e.model), d = e.model, re()
}

function ro(e) {
  var t;
  (0, ev.isWeb)() || (tP = e.enabled, null == (t = te.setNoiseCancellationEnableStats) || t.call(te, e.enabled))
}

function rs(e) {
  nh({
    silenceWarning: e.enabled
  }), np.update()
}

function rl(e) {
  te.setDebugLogging(e.enabled)
}

function rc(e) {
  let {
    level: t
  } = e;
  u = t, ed.A.setKrispSuppressionLevel(t)
}

function ru(e) {
  nh({
    videoHook: e.enabled
  })
}

function rd(e) {
  nh({
    experimentalSoundshare2: e.enabled
  })
}

function rf(e) {
  let {
    enabled: t
  } = e;
  nh({
    useSystemScreensharePicker: t
  })
}

function rp(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = nh({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  te.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function r_(e) {
  let {
    enabled: t
  } = e;
  nh({
    qos: t
  }), te.eachConnection(e => e.setQoS(t))
}

function rh() {
  nm()
}

function rm(e) {
  let {
    inputDetected: t
  } = e;
  tI = t, !tS && tI && (tS = true, np.update())
}

function rg(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tp) returnfalse;
  tp = n, te.eachConnection(t8)
}

function rE(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === ej.hL.ACCEPTED;
  switch (n) {
    case ej.iL.AUDIO:
      tH = true, te.eachConnection(t8);
      break;
    case ej.iL.CAMERA:
      !r && th && ne(false);
      break;
    default:
      returnfalse
  }
}

function ry() {
  return tw || false
}
async function rb() {
  try {
    var e, t, n, i;
    await eI.Ay.ensureModule("discord_krisp");
    let a = eI.Ay.requireModule("discord_krisp");
    tw = true, c = null == (t = a.getSdkVersion) ? true : t.call(a), u = null != (e = null == (n = a.getSuppressionLevel) ? true : n.call(a)) ? e : 100, null == (i = a.getNcModels) || i.call(a).then(e => {
      tR = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eW.warn("Failed to load Krisp module: ".concat(t.message)), eA.A.captureException(t);
    let e = eG.CO.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eG.CO.INITIALIZED : n
    }
    ey.default.track(ex.HAw.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), nh({
      noiseCancellation: false
    })
  } finally {
    tN = false
  }
}

function rO() {
  return (0, ev.isWindows)() || (0, ev.isLinux)() || (0, ev.isMac)()
}

function rv() {
  !rO() || __OVERLAY__ || tN || tw ? (0, ev.isWeb)() && te.supports(eG.O5.NOISE_CANCELLATION) ? (tw = true, r.emitChange()) : (0, ev.isWeb)() && nh({
    noiseCancellation: false
  }) : (tN = true, rb())
}

function rA(e) {
  let {
    enabled: t
  } = e;
  ey.default.track(ex.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tD ? tD : null,
    enabled: t
  }), nh({
    voiceFilterPlaybackEnabled: t
  })
}

function rI(e) {
  let {
    newVoiceFilterId: t
  } = e;
  nh({
    mostRecentlyRequestedVoiceFilter: t
  }), te.eachConnection(e => e.setVoiceFilterId(t))
}

function rS() {
  nh({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rT(e) {
  let {
    voiceFilterId: t
  } = e;
  tx = tD, tM = tL, tD = t, tL = null === t ? null : Date.now()
}

function rC(e) {
  let t = e.bypassEnabled;
  nh({
    bypassSystemInputProcessing: t
  }), te.setAudioInputBypassSystemProcessing(t), n3(e.location)
}

function rN(e) {
  rw(e.subsystem)
}

function rw(e) {
  e === eG.rB.AUTOMATIC ? (nh({
    automaticAudioSubsystem: true
  }), rR()) : (nh({
    automaticAudioSubsystem: false
  }), te.setAudioSubsystem(e))
}

function rR() {
  te.queueAudioSubsystem(eG.rB.EXPERIMENTAL)
}

function rP(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && ne(i, null), null != t || null == n) {
    tC = false;
    return
  }
  if (tC) return;
  tC = true;
  let a = t4();
  (a.mute || a.deaf) && (nh({
    deaf: false,
    mute: false
  }), te.eachConnection(t8))
}

function rD(e) {
  let {
    application: t
  } = e;
  tn.add(t.id)
}

function rL(e) {
  let {
    application: t
  } = e;
  tn.delete(t.id)
}

function rx(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      tr = false, te.eachConnection(t8);
      break;
    case "video":
      ne(false)
  }
}

function rM(e) {
  tr = e.enabled, e.unmute && nh({
    mute: false,
    deaf: false
  }), te.eachConnection(t8)
}

function rj(e) {
  let {
    enabled: t
  } = e;
  eu.A.requestPermission(ej.iL.CAMERA), ne(t)
}

function rk(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e;
  if (!(0, R.Ao)() || null == S.A) returnfalse;
  let a = null,
    s = null,
    l = eb.A.getPidFromDesktopSource(t);
  ({
    soundshareId: a,
    soundshareSession: s
  } = nN(l));
  let c = {
    desktopSource: {
      id: t,
      sourcePid: l,
      soundshareId: a,
      soundshareSession: s
    },
    quality: i
  };
  null != o && (te.setClipsSource(null), (0, ev.isWindows)() && null != o.desktopSource.soundshareId && T.c1(o.desktopSource.soundshareId)), null != a && nw(a, s), o = c;
  let u = t1("MediaEngineStore clips"),
    d = t4().videoHook;
  te.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: d,
      useGraphicsCapture: ns(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: nc(),
      videoHookStaleFrameTimeoutMs: e$,
      graphicsCaptureStaleFrameTimeoutMs: e0,
      hdrCaptureMode: u
    },
    quality: i,
    applicationName: n
  })
}

function rU(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, te.setClipsSource(null))
}

function rG(e) {
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
      s = null != (t = a.context) ? t : eG.x.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : eb.A.getPidFromDesktopSource(i);
    ev.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nN(c), null != e && nw(e, r)), t9(s), ne(s === eG.x.STREAM && th, {
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
    let e = null != (r = a.context) ? r : eG.x.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eG.x.STREAM && th,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    ne(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else ne(th, null)
}

function rV(e) {
  let {
    section: t
  } = e;
  return t === ex.nc_.VOICE && nE(), false
}

function rF() {
  return te.eachConnection(na), false
}

function rB(e) {
  let {
    enabled: t
  } = e, n = nh({
    aecDumpEnabled: t
  });
  te.setAecDump(n.aecDumpEnabled)
}

function rH(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  tt = Object.values(eG.x).reduce((e, n) => {
    let r = n,
      i = e8();
    return e[r] = g().merge(i, t[r]), e
  }, {}), v.w.set(eK, tt), ng()
}

function rY(e) {
  let {
    state: t
  } = e, n = M.A.isEnabled();
  if (t === ex.g6G.BACKGROUND && th && !n) tv = true, ne(false);
  else {
    if (t !== ex.g6G.ACTIVE || !tv) returnfalse;
    tv = false, ne(true)
  }
  returntrue
}

function rW(e) {
  te.eachConnection(t => t.setBitRate(e.bitrate))
}

function rK() {
  if (!th && null == a || null != eR.A.getRTCConnectionId()) returnfalse;
  ne(false, null)
}

function rz() {
  return !!tk && (tk = false, true)
}

function rq(e) {
  te.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rZ(e) {
  let {
    settings: t
  } = e;
  te.applyMediaFilterSettings(t).finally(() => {
    tU = false, r.emitChange()
  })
}

function rQ() {
  tU = true
}

function rX() {
  tU = false
}

function rJ(e) {
  tQ = e.enabled
}

function r$() {
  if ((0, ev.isDesktop)() && ev.isPlatformEmbedded && !t0) {
    t0 = true;
    let e = async () => {
      let t = await new Promise(e => {
        eI.Ay.pollQueueMetrics(t => {
          e(t)
        })
      });
      t.periodMs = eG.tl;
      let n = r1(t);
      null !== n && ey.default.track(ex.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eG.tl)
    };
    setTimeout(e, eG.tl)
  }
}
class r0 extends(p = Chunk311907.Ay.Store) {
  initialize() {
    no(), n_(), rv(), nY(), r$(), tq = {
      [eG.O5.VIDEO]: te.supports(eG.O5.VIDEO),
      [eG.O5.DESKTOP_CAPTURE]: te.supports(eG.O5.DESKTOP_CAPTURE),
      [eG.O5.HYBRID_VIDEO]: te.supports(eG.O5.HYBRID_VIDEO)
    }, this.waitFor(eT.default, eC.A, eN.A, ew.A, N.A, x.A, eR.A, j.Ay, ep.A, em.A, eD.default, eL.A, eE.A)
  }
  supports(e) {
    return te.supports(e)
  }
  supportsInApp(e) {
    return tq[e] || te.supports(e)
  }
  isSupported() {
    return te.supported()
  }
  isNoiseSuppressionSupported() {
    return te.supports(eG.O5.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return ry()
  }
  isNoiseCancellationError() {
    return tk
  }
  isAutomaticGainControlSupported() {
    return te.supports(eG.O5.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !nd() && (te.supports(eG.O5.LEGACY_AUDIO_SUBSYSTEM) || te.supports(eG.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return te.supports(eG.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === te.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return ry()
  }
  isAecDumpSupported() {
    return te.supports(eG.O5.AEC_DUMP)
  }
  isSimulcastSupported() {
    return te.supports(eG.O5.VIDEO) && te.supports(eG.O5.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = ew.A.getChannel(tj)) ? true : e.type) !== ex.rbe.GUILD_STAGE_VOICE && e4 && Q.A.simulcastEnabled()
  }
  isVideoDecoderFallbackEnabled() {
    return tB
  }
  getAecDump() {
    return t4().aecDumpEnabled
  }
  getMediaEngine() {
    return te
  }
  getVideoComponent() {
    return te.Video
  }
  getCameraComponent() {
    return te.Camera
  }
  getKrispSuppressionLevel() {
    return null != u ? u : 100
  }
  getKrispEnableStats() {
    return tP
  }
  isEnabled() {
    return tr
  }
  isMute() {
    return this.isSelfMute() || td
  }
  isDeaf() {
    return this.isSelfDeaf() || t_
  }
  hasContext(e) {
    return null != tt[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
    return e === eG.x.DEFAULT && tf
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
    return !this.isEnabled() || t4(e).mute || !eu.A.didHavePermission(ej.iL.AUDIO) || this.isSelfDeaf(e) || e === eG.x.DEFAULT && tp
  }
  shouldSkipMuteUnmuteSound() {
    return tE
  }
  notifyMuteUnmuteSoundWasSkipped() {
    tE = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && eN.A.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tQ
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
    return !this.isSupported() || t4(e).deaf
  }
  isVideoEnabled() {
    return th && tA
  }
  isVideoAvailable() {
    return Object.values(tc).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.STREAM;
    return ta === e && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.STREAM;
    return ta === t && null != a && (null == (e = a.desktopSource) ? true : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
    return e !== eT.default.getId() && (t4(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return te.supports(eG.O5.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
    return null != (t = t4(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
    return null != (t = t4(n).videoToggleStateMap[e]) ? t : ex.bb8.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
    return t === eG.x.DEFAULT && tW.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
    return e === eG.x.DEFAULT && tW.size > 0
  }
  isMediaFilterSettingLoading() {
    return tU
  }
  isNativeAudioPermissionReady() {
    return tH
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return ta
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return to
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eG.x.DEFAULT,
      n = t4(t).localPans[e];
    return null != n ? n : eJ
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eG.x.DEFAULT,
      n = t === eG.x.STREAM ? eG.Cn : eG.Hz,
      r = t4(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return t4().inputVolume
  }
  getOutputVolume() {
    return t4().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
    return t4(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
    return t4(e).modeOptions
  }
  getActiveVoiceFilter() {
    return tD
  }
  getActiveVoiceFilterAppliedAt() {
    return tL
  }
  getPreviousVoiceFilter() {
    return tx
  }
  getPreviousVoiceFilterAppliedAt() {
    return tM
  }
  getMostRecentlyRequestedVoiceFilter() {
    return t4().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return t4().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return g().each(tt, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === ex.TBI.PUSH_TO_TALK && tn.has(n) && (e[n] = i)
    }), e
  }
  getInputDeviceId() {
    return nO(ts, t4().inputDeviceId)
  }
  getOutputDeviceId() {
    return nO(tl, t4().outputDeviceId)
  }
  getVideoDeviceId() {
    return nO(tc, t4().videoDeviceId)
  }
  getInputDevices() {
    return ts
  }
  getOutputDevices() {
    return tl
  }
  getVideoDevices() {
    return tc
  }
  getEchoCancellation() {
    let e = t4();
    return eN.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getSidechainCompression() {
    return te.supports(eG.O5.SIDECHAIN_COMPRESSION) && t4().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return t4().sidechainCompressionStrength
  }
  getH265Enabled() {
    return t4().h265Enabled
  }
  hasH265HardwareDecode() {
    return null !== tV && tV
  }
  getLoopback() {
    return tz.size > 0
  }
  getLoopbackReasons() {
    return tz
  }
  getNoiseSuppression() {
    let e = t4();
    return eN.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = t4();
    return eN.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return t4().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return t4().noiseCancellation
  }
  getHardwareEncoding() {
    return e4
  }
  getEnableSilenceWarning() {
    return t4().silenceWarning
  }
  getDebugLogging() {
    return te.getDebugLogging()
  }
  getQoS() {
    return t4().qos
  }
  getAttenuation() {
    return t4().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return t4().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return t4().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return nu() && t4().automaticAudioSubsystem ? eG.rB.AUTOMATIC : te.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return te.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return t4().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == e || e === eU.my.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
    return t4(e)
  }
  getState() {
    return {
      settingsByContext: tt,
      inputDevices: ts,
      outputDevices: tl,
      appSupported: tq,
      krispModuleLoaded: tw,
      krispVersion: c,
      krispSuppressionLevel: u,
      goLiveSource: a,
      goLiveContext: ta
    }
  }
  getInputDetected() {
    return tI
  }
  getNoInputDetectedNotice() {
    return tT
  }
  getInputDeviceOSMuted() {
    return s
  }
  getInputDeviceOSVolume() {
    return l
  }
  getPacketDelay() {
    return ev.isPlatformEmbedded || this.getMode() !== ex.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    te.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return ti
  }
  getVideoHook() {
    return t4().videoHook
  }
  supportsVideoHook() {
    return te.supports(eG.O5.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = t4().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return te.supports(eG.O5.EXPERIMENTAL_SOUNDSHARE) && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, eM.$x)
  }
  supportsHookSoundshare() {
    return (0, ev.isWindows)() && te.supports(eG.O5.SOUNDSHARE) && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, eM.ws)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = t4().useSystemScreensharePicker,
      n = (0, ev.isLinux)();
    return e && (null != t ? t : n)
  }
  supportsSystemScreensharePicker() {
    return te.supports(eG.O5.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return t$
  }
  getUseGamescopeCapture() {
    return tJ
  }
  getEverSpeakingWhileMuted() {
    return ty
  }
  getSpeakingWhileMuted() {
    return tb
  }
  getKrispModelOverride() {
    return d
  }
  getKrispModels() {
    return tR
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = t4().modeOptions.vadKrispActivationThreshold) ? e : eX
  }
  hasActiveCallKitCall() {
    return tX
  }
  setHasActiveCallKitCall(e) {
    tX = e
  }
  supportsScreenSoundshare() {
    return (0, ev.isMac)() ? te.supports(eG.O5.SOUNDSHARE) && y().satisfies(null === S.A || true === S.A ? true : S.A.os.release, eM.P$) && nc() : (0, ev.isWindows)() ? te.supports(eG.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, ev.isLinux)() && te.supports(eG.O5.SCREEN_SOUNDSHARE)
  }
  getSystemMicrophoneMode() {
    if ((0, ev.isWindows)()) {
      var e, t;
      return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects) ? true : e.find(e => e === e5)
    }
    if ((0, ev.isMac)() || (0, ev.isIOS)()) return f
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
      t = this.supports(eG.O5.VIDEO) ? [{
        rid: "100",
        type: e === eG.x.DEFAULT ? eG.mI.VIDEO : eG.mI.SCREEN,
        quality: eG.Y4
      }] : [];
    return this.isSimulcastSupported() && (e === eG.x.DEFAULT || this.goLiveSimulcastEnabled()) && t.push({
      rid: "50",
      type: e === eG.x.DEFAULT ? eG.mI.VIDEO : eG.mI.SCREEN,
      quality: eG.Cl
    }), t
  }
  fetchAsyncResources() {
    let e = {
      fetchDave: false
    };
    return (0, ev.isWeb)() && (e.fetchDave = en.f1.getCurrentConfig({
      location: "MediaEngineStore fetchAsyncResources"
    }).loadWasmModule), te.fetchAsyncResources(e)
  }
  startDavePreload() {
    if (!tG && (tG = true, (0, ev.isWeb)())) {
      let e = {
        fetchDave: true
      };
      te.fetchAsyncResources(e).catch(e => {
        eW.warn("DAVE preload failed:", e), eA.A.captureException(e)
      })
    }
  }
  getSupportedSecureFramesProtocolVersion() {
    if ((0, ev.isWeb)()) {
      let {
        useWasmModule: e
      } = en.f1.getCurrentConfig({
        location: "MediaEngineStore getSupportedSecureFramesProtocolVersion"
      });
      if (!e) return 0
    }
    let e = te.getSupportedSecureFramesProtocolVersion();
    114 === e && (e = 1);
    let t = en.ex.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      n = en.a.getConfig({
        location: "MediaEngineStore"
      });
    return (t.canSupportDaveProtocol || n.allowOptIn && ep.A.getPersistentCodesEnabled()) && e >= t.protocolVersionFloor ? e : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tZ
  }
}

function r1(e) {
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
eF(r0, "displayName", "MediaEngineStore");
let r2 = r = new r0(Chunk73153.h, {
  VOICE_CHANNEL_SELECT: rP,
  VOICE_STATE_UPDATES: nM,
  CONNECTION_OPEN: nR,
  CONNECTION_CLOSED: nD,
  POST_CONNECTION_OPEN: nL,
  RTC_CONNECTION_STATE: nx,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nj,
  AUDIO_TOGGLE_SELF_MUTE: nk,
  AUDIO_SET_SELF_MUTE: nU,
  AUDIO_TOGGLE_SELF_DEAF: nV,
  AUDIO_TOGGLE_LOCAL_MUTE: nF,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nB,
  AUDIO_SET_LOCAL_VOLUME: nW,
  AUDIO_SET_LOCAL_PAN: nK,
  AUDIO_SET_MODE: nz,
  AUDIO_SET_INPUT_VOLUME: nq,
  AUDIO_SET_OUTPUT_VOLUME: nZ,
  AUDIO_SET_INPUT_DEVICE: nQ,
  AUDIO_SET_OUTPUT_DEVICE: nX,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: n$,
  AUDIO_SET_ECHO_CANCELLATION: n6,
  AUDIO_SET_SIDECHAIN_COMPRESSION: n4,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n5,
  AUDIO_SET_LOOPBACK: n8,
  AUDIO_SET_NOISE_SUPPRESSION: rn,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rr,
  AUDIO_SET_NOISE_CANCELLATION: ri,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: ra,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: rs,
  AUDIO_SET_DEBUG_LOGGING: rl,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rc,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: ro,
  MEDIA_ENGINE_SET_VIDEO_HOOK: ru,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rd,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rf,
  AUDIO_SET_ATTENUATION: rp,
  AUDIO_SET_QOS: r_,
  MEDIA_ENGINE_DEVICES: n1,
  AUDIO_VOLUME_CHANGE: n2,
  AUDIO_RESET: rh,
  AUDIO_INPUT_DETECTED: rm,
  AUDIO_SET_SUBSYSTEM: rN,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rC,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rM,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rj,
  MEDIA_ENGINE_PERMISSION: rx,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rG,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nJ,
  MEDIA_ENGINE_INTERACTION_REQUIRED: n0,
  USER_SETTINGS_MODAL_INIT: rV,
  USER_SETTINGS_MODAL_SET_SECTION: rV,
  CERTIFIED_DEVICES_SET: rF,
  RPC_APP_CONNECTED: rD,
  RPC_APP_DISCONNECTED: rL,
  OVERLAY_INITIALIZE: nP,
  APP_STATE_UPDATE: rY,
  SET_CHANNEL_BITRATE: rW,
  SET_VAD_PERMISSION: rg,
  SET_NATIVE_PERMISSION: rE,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rq,
  MEDIA_ENGINE_SET_AEC_DUMP: rB,
  MEDIA_ENGINE_RESET_SETTINGS: rH,
  CHANNEL_DELETE: rK,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rz,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rZ,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rQ,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rX,
  USER_SETTINGS_PROTO_UPDATE: nG,
  CLIPS_INIT: rk,
  CLIPS_SETTINGS_UPDATE: rU,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rJ,
  VOICE_FILTER_REQUEST_SWITCH: rI,
  VOICE_FILTER_LOOPBACK_TOGGLE: rA,
  VOICE_FILTER_APPLIED: rT,
  VOICE_FILTER_DOWNLOAD_FAILED: rS,
  VOICE_FILTER_APPLY_FAILED: rS
})