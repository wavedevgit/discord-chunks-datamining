/** Chunk was on web.js **/
/** chunk id: 430452, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f;
require.d(exports, {
  A: () => r3
}), require("./896048.js"), require("./228524.js"), require("./492834.js"), require("./321073.js"), require("./638769.js"), require("./457529.js"), require("./790599.js");
var p, Chunk284009 = require("./284009.js"),
  h = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  g = require.n(Chunk735438),
  Chunk299855 = require("./299855.js"),
  y = require.n(Chunk299855),
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
      autoThreshold: ev.isPlatformEmbedded || __OVERLAY__,
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
  tl = {
    [Chunk731854.dx]: nb("No Input Devices")
  },
  tc = {
    [Chunk731854.dx]: nb("No Output Devices")
  },
  tu = {
    [Chunk731854.dx]: nb("No Video Devices")
  },
  td = new Chunk451988.Ep,
  tf = false,
  tp = false,
  t_ = false,
  th = false,
  tm = false,
  tg = Chunk731854.qe,
  tE = Chunk731854.qe,
  ty = false,
  tb = false,
  tO = false,
  tv = new Chunk451988.Ep,
  tA = false,
  tI = false,
  tS = null,
  tT = false,
  tC = false,
  tN = false,
  tw = false,
  tR = false,
  tP = [],
  tD = false,
  tL = null,
  tx = null,
  tM = null,
  tj = null,
  tk = null,
  tU = false,
  tG = false,
  tF = false,
  tV = null,
  tB = null,
  tH = false,
  tY = false;
Chunk674966.A.hasPermission(Chunk765682.iL.AUDIO, {
  showAuthorizationError: false
}), Chunk674966.A.hasPermission(Chunk765682.iL.CAMERA, {
  showAuthorizationError: false
});
let tW = false,
  tK = new Set,
  tz = tW,
  tq = new Set,
  tZ = {},
  tQ = null,
  tX = true,
  tJ = false,
  t$ = false,
  t0 = false,
  t1 = false;

function t2() {
  var e, t;
  return null != (e = null == (t = eL.default.getCurrentUser()) ? true : t.isStaff()) && e ? "always" : eA.y === b.O.CANARY ? "permittedDevicesOnly" : "never"
}
async function t3() {
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

function t6() {
  return null != tB ? tB : "u" > typeof window ? tB = t3().then(e => (tV = e, e)) : Promise.resolve(false)
}

function t4() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
    t = tn[e];
  return null == t && (t = e9(), tn[e] = t), t
}

function t5() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
    i = t4(r),
    a = te[null != (e = i.activeInputProfile) ? e : eG.my.CUSTOM],
    o = eH({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, er.R)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, G.F)({
      location: "getSettings"
    });
    null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold)
  }
  return eW(eH({}, i, a), {
    modeOptions: o
  })
}

function t7(e) {
  var t, n;
  let r = t5(e.context),
    i = r.mode;
  e.context === eF.x.DEFAULT && ((0, eh.H)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eM.TBI.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eM.TBI.VOICE_ACTIVITY), (0, et.N)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && rb(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eJ,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function t8(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.Hz;
  return g().clamp(e, 0, t)
}

function t9(e) {
  let t = t5(e.context),
    n = !ti || t.mute || t.deaf;
  e.context === eF.x.DEFAULT ? n = n || tf || tp || t_ || !eu.A.didHavePermission(ek.iL.AUDIO) : e.context === eF.x.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eF.x.DEFAULT && N.A.updateNativeMute()
}

function ne(e) {
  e !== to && (null != a && tt.setGoLiveSource(null, to), to = e)
}

function nt() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : tm,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : e.id) && (null != s.desktopSource.soundshareId && (0, ev.isWindows)() && C.c1(s.desktopSource.soundshareId), tt.setGoLiveSource(null, to)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : n.audioDeviceGuid)) && tt.setGoLiveSource(null, to), tm || i) {
    let e = t5().videoDeviceId;
    tm && e === eF.dx && tE === eF.dx && tg !== eF.qe ? e = tg : tE = e, tg = (tm = i) ? nv(tu, e) : eF.qe, tt.setVideoInputDevice(tg)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = t2(),
        n = t5().videoHook,
        i = nl(),
        a = i ? nc() ? ej.zl : ej.eg : 0,
        s = (0, ev.isWindows)() && (0, ei.b)("updateVideo").enabled;
      tt.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: n,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: s,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: nu(),
          videoHookStaleFrameTimeoutMs: e0,
          graphicsCaptureStaleFrameTimeoutMs: e1,
          hdrCaptureMode: t,
          enableGlobalFramePoolLock: (0, Z.H)({
            location: "updateVideo"
          }).enabled
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

function nn(e) {
  switch (e) {
    case eF.CO.CPU_OVERUSE:
      return x.B6.NoiseCancellerCpuOveruse;
    case eF.CO.FAILED:
      return x.B6.NoiseCancellerFailed;
    case eF.CO.VAD_CPU_OVERUSE:
      return x.B6.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function nr(e) {
  let t = (0, G.F)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eH({
    enabled: e
  }, t)
}

function ni(e, t) {
  e.setAutomaticGainControl(nr(t))
}

function na(e, t) {
  let n = (0, ef.A)(t, r.getSystemMicrophoneMode(), {
    location: "setNoiseCancellation"
  });
  n !== t && eK.info("Falling back to system noise suppression."), t = n, e.setNoiseCancellation(t);
  let {
    noiseCancellationDuringProcessing: i
  } = (0, G.F)({
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

function no(e) {
  let t = t5(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ew.A.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ew.A.hasNoiseSuppression(n) || t.noiseSuppression), ni(e, ew.A.hasAutomaticGainControl(n) || t.automaticGainControl), na(e, t.noiseCancellation), e.setVoiceFilterId(tL), (0, ev.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function ns() {
  td.start(e4, () => {
    eK.error("Device enumeration timed out"), ey.default.track(eM.HAw.DEVICE_ENUMERATION_TIMEOUT, {})
  }), tt.on(v.bg.Connection, e => {
    t7(e), t9(e), no(e);
    let t = t5();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
    let n = (0, J.K)({
      location: "setupMediaEngine"
    }).treatment;
    tH = n === J.c.NoSoftwareDecodeWithFallback, n === J.c.NoSoftwareDecode || n === J.c.NoSoftwareDecodeWithFallback ? (e.setExperimentFlag(eF.fd.H265_HARDWARE_ONLY, true), (0, ev.isWindows)() ? t6().then(t => {
      e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, t)
    }) : (0, ev.isMac)() && e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, true)) : n === J.c.Disabled && (e.setExperimentFlag(eF.fd.H265_HARDWARE_ONLY, true), e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, false)), (0, ev.isWindows)() && (0, X.r)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eF.fd.USE_H264_MF_DECODER, true);
    let i = eP.A.getGuildId(),
      {
        muteBeforeProcessing: o,
        pttBeforeProcessing: s,
        skipEncode: l
      } = (null != i ? z.A : K.A).getCurrentConfig({
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
      let t = nI(tc);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = Q.A.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, ev.isWindows)()) e.setExperimentFlag(eF.fd.SIGNAL_AV1, true), e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, true);
    else if ((0, ev.isMac)()) {
      e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, true);
      let {
        enabled: t
      } = (0, V.t)("MediaEngineStore");
      t && e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, true)
    } else if ((0, ev.isLinux)()) e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, true);
    else if ((0, ev.isIOS)()) {
      let {
        enabled: t
      } = (0, F.$)("MediaEngineStore");
      t && (e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, true), e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, true))
    }
    if ((0, ev.isWeb)()) {
      let {
        enabled: t
      } = (0, q.O)("MediaEngineStore");
      e.setExperimentFlag(eF.fd.BROWSER_HEVC, t)
    }
    if ((0, ev.isWindows)() && (null == tQ ? true : tQ.startsWith("AMD")) && (0, eo.F)("MediaEngineStore").enabled && e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, true), (0, ev.isWindows)() && (null == tQ ? true : tQ.startsWith("Intel")) && (0, es.J)("MediaEngineStore").enabled && e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, true), (0, ev.isWindows)() && (null == tQ ? true : tQ.startsWith("Qualcomm")) && (0, eo.F)("MediaEngineStore").enabled && e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, true), tt.setHasFullbandPerformance((0, L.A)()), e.setRemoteAudioHistory(1e3), (0, R.A)(r)) {
      let {
        enableViewerClipping: t
      } = ea.A.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eF.X1)
    }
    for (let n of (t = t5(e.context), e.setPostponeDecodeLevel(e3), Object.keys(t.localMutes))) n !== eC.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eC.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
    for (let n of Object.keys(t.localPans)) {
      let r = t.localPans[n];
      e.setLocalPan(n, r.left, r.right)
    }
    for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
    e.on(v.yq.Speaking, (t, n, r, i) => {
      S.h.dispatch({
        type: "SPEAKING",
        context: e.context,
        userId: t,
        speakingFlags: n,
        voiceDb: i
      })
    }), e.context === eF.x.DEFAULT && (tb = false, tO = false, e.on(v.yq.SpeakingWhileMuted, () => {
      tb = true, tO = true, r.emitChange(), tv.stop(), tv.start(e6, () => {
        tO = false, r.emitChange()
      })
    })), e.on(v.yq.DesktopSourceEnd, (t, n) => {
      S.h.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: {
          context: e.context
        },
        endReason: t,
        errorCode: n
      })
    }), e.on(v.yq.InteractionRequired, e => {
      S.h.dispatch({
        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
        required: e
      })
    }), e.on(v.yq.VideoHookInitialize, (e, t, n, r, i, o) => {
      (null == a ? true : a.desktopSource) != null && ey.default.track(eM.HAw.VIDEOHOOK_INITIALIZED, eH({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, U.A)(null == a ? true : a.desktopSource)))
    }), e.on(v.yq.NoiseCancellationError, e => {
      eK.warn("noisecancellererror event: ".concat(e)), (0, x.QW)({
        type: x.iy.NOISE_CANCELLER_ERROR,
        underlyingError: nn(e)
      }), tU = true, ey.default.track(eM.HAw.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), S.h.dispatch({
        type: "AUDIO_SET_NOISE_SUPPRESSION",
        enabled: true
      }), S.h.dispatch({
        type: "AUDIO_SET_NOISE_CANCELLATION",
        enabled: false
      }), S.h.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
        code: e
      })
    }), e.on(v.yq.VoiceActivityDetectorError, e => {
      eK.warn("voiceactivitydetectorerror event: ".concat(e)), (0, x.QW)({
        type: x.iy.NOISE_CANCELLER_ERROR,
        underlyingError: nn(e)
      }), ey.default.track(eM.HAw.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), S.h.dispatch({
        type: "AUDIO_SET_MODE",
        context: eF.x.DEFAULT,
        mode: eM.TBI.VOICE_ACTIVITY,
        options: eW(eH({}, t5(eF.x.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), S.h.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(v.yq.SdpError, (e, t, n, r) => {
      ey.default.track(eM.HAw.SDP_ERROR, {
        operation: e,
        error: t,
        type: n,
        sdp: r
      })
    }), e.on(v.yq.VideoState, t => {
      S.h.dispatch({
        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
        videoState: t,
        context: e.context
      })
    }), e.setBitRate(eN.A.bitrate), e.applyVideoQualityMode(ex.A.mode), tt.supports(eF.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) && tt.setAsyncVideoInputDeviceInit((0, Y.v)("setupMediaEngine").enabled)
  }), tt.on(v.bg.DeviceChange, (e, t, n) => {
    td.stop(), S.h.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), tt.on(v.bg.VolumeChange, (e, t) => {
    S.h.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), tt.on(v.bg.DesktopSourceEnd, (e, t) => {
    S.h.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), tt.on(v.bg.AudioPermission, e => {
    tY = true, S.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), tt.on(v.bg.VideoPermission, e => {
    S.h.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), tt.on(v.bg.WatchdogTimeout, async () => {
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
    eK.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), ey.default.track(eM.HAw.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: e
    })
  }), tt.on(v.bg.VideoInputInitialized, e => {
    ey.default.track(eM.HAw.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * eO.A.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eP.A.getMediaSessionId(),
      rtc_connection_id: eP.A.getRTCConnectionId()
    })
  }), tt.on(v.bg.AudioInputInitialized, e => {
    ey.default.track(eM.HAw.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * eO.A.Millis.SECOND),
      rtc_connection_id: eP.A.getRTCConnectionId()
    })
  }), tt.on(v.bg.ClipsRecordingRestartNeeded, () => {
    S.h.dispatch({
      type: "CLIPS_RESTART"
    })
  }), tt.on(v.bg.ClipsInitFailure, (e, t) => {
    S.h.wait(() => {
      S.h.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), tt.on(v.bg.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && C.c1(t), o = null)
  }), tt.on(v.bg.NativeScreenSharePickerUpdate, (e, t) => {
    S.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), tt.on(v.bg.NativeScreenSharePickerCancel, e => {
    S.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), tt.on(v.bg.NativeScreenSharePickerError, e => {
    S.h.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), tt.on(v.bg.AudioDeviceModuleError, (e, t, n) => {
    ey.default.track(eM.HAw.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), tt.on(v.bg.VideoCodecError, e => {
    let t = "encode" === e.mode ? x.iy.VIDEO_ENCODE_ERROR : x.iy.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, x.QW)(t === x.iy.VIDEO_ENCODE_ERROR ? eW(eH({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eW(eH({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), tt.on(v.bg.ConnectionStats, e => {
    S.h.dispatch({
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
  }), tt.on(v.bg.VoiceQueueMetrics, e => {
    let t = r2(e);
    null !== t && ey.default.track(eM.HAw.VOICE_QUEUE_METRICS, t)
  }), tt.setOnVideoContainerResized((e, t, n) => {
    S.h.wait(() => S.h.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      dimensions: {
        width: t,
        height: n
      }
    }))
  }), re(), rn(), tt.supports(eF.O5.ASYNC_CLIPS_SOURCE_DEINIT) && tt.setAsyncClipsSourceDeinit((0, W.V)("setupMediaEngine").enabled), n_.reset(), (0, eD.w)().then(e => {
    null != e && (tQ = e.gpu_brand)
  }), tt.on(v.bg.SystemMicrophoneModeChange, e => {
    f = e, tt.eachConnection(no)
  })
}

function nl() {
  return (0, ev.isWindows)() && y().satisfies(null === T.A || true === T.A ? true : T.A.os.release, ej.yg)
}

function nc() {
  return (0, ev.isWindows)() && y().satisfies(null === T.A || true === T.A ? true : T.A.os.release, ej.fG)
}

function nu() {
  return (0, ev.isMac)() && tt.supports(eF.O5.SCREEN_CAPTURE_KIT) && y().satisfies(null === T.A || true === T.A ? true : T.A.os.release, ej.e)
}

function nd() {
  return (0, ev.isWindows)() && tt.supports(eF.O5.AUTOMATIC_AUDIO_SUBSYSTEM) && tt.supports(eF.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function nf() {
  return tt.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
async function np() {
  let {
    windowsMuteAndZeroVolumeDetectionEnabled: e
  } = (0, el.F)({
    location: "MediaEngineStore.fetchInputDeviceOSConfig"
  });
  if ((0, ev.isWindows)() && y().satisfies(null === T.A || true === T.A ? true : T.A.os.release, ej.PH) && e) try {
    var t;
    let e = nv(tl, t5().inputDeviceId),
      n = null == (t = tl[e]) ? true : t.guid;
    if (null != n && "" !== n) {
      await eS.Ay.ensureModule("discord_voice");
      let [e, t] = await Promise.all([tt.getDeviceOSVolume(n), tt.getDeviceOSMuted(n)]);
      l = e, s = t
    }
  } catch (e) {
    eK.warn("Failed to get device OS volume and/or mute state: ".concat(e))
  }
}
let n_ = new class {
  start() {
    this.started || (this.started = true, tt.on(v.bg.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), tt.removeListener(v.bg.Silence, this.handleSilence), S.h.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = t5();
    !tT && eP.A.getState() === eM.S7L.RTC_CONNECTED && e.mode === eM.TBI.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eB(this, "stateChangeTimeout", true), eB(this, "noVoiceTimeout", 5e3), eB(this, "voiceTimeout", 1500), eB(this, "started", false), eB(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout);
      let n = () => {
        S.h.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tC = true)
      };
      this.stateChangeTimeout = setTimeout(async () => {
        this.stateChangeTimeout = null, e && this.started && await np(), this.started && n()
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function nh() {
  var e;
  let t = A.w.get("audio");
  null != t && (A.w.set(ez, {
    [eF.x.DEFAULT]: t
  }), A.w.remove("audio")), tn = null != (e = A.w.get(ez)) ? e : {}, g().each(tn, e => {
    if (g().defaultsDeep(e, e9()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eT.OH)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eq && (e.vadUseKrispSettingVersion = eq, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = e2)
    }
    tt.supports(eF.O5.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eX && (e.sidechainCompressionSettingVersion = eX, e.sidechainCompression = true), (0, ev.isWeb)() ? e.ncUseKrispjsSettingVersion !== eQ && (e.ncUseKrispjsSettingVersion = eQ, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eZ && (e.ncUseKrispSettingVersion = eZ, e.noiseSuppression = false, e.noiseCancellation = true)
  }), nE()
}

function nm(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = t4(t);
  return Object.assign(r, e), !__OVERLAY__ && n && A.w.set(ez, tn), r
}

function ng() {
  A.w.remove(ez), location.reload()
}

function nE() {
  let e = t5();
  tt.setAudioInputDevice(e.inputDeviceId), tt.setAudioOutputDevice(e.outputDeviceId), nt(), tt.setInputVolume(e.inputVolume), tt.setOutputVolume(e.outputVolume), tt.setAecDump(e.aecDumpEnabled), tt.setSidechainCompression(e.sidechainCompression), tt.setSidechainCompressionStrength(e.sidechainCompressionStrength), tt.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing)
}

function ny() {
  ti || tt.enable().then(() => S.h.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function nb(e) {
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

function nO(e, t) {
  if (0 === e.length) {
    let e = nb(t);
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

function nv(e, t) {
  var n, r;
  let i = null != (n = null != (r = e[t]) ? r : e[eF.dx]) ? n : g()(e).values().first();
  return null != i ? i.id : t
}

function nA(e) {
  let t = tl;
  if (tl = nO(e, eV.intl.string(eV.t["/QIjDA"])), !g().isEqual(tl, t)) {
    let e = t5(),
      t = nv(tl, e.inputDeviceId);
    tt.setAudioInputDevice(t), tt.eachConnection(no)
  }
}

function nI(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nS(e) {
  tt.eachConnection(t => {
    t.context === eF.x.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nT(e) {
  let t = tc;
  if (tc = nO(e, eV.intl.string(eV.t.xlUg0v)), !g().isEqual(tc, t)) {
    let e = t5(),
      n = nv(tc, e.outputDeviceId);
    tt.setAudioOutputDevice(n);
    let r = nI(t),
      i = nI(tc);
    r !== i && nS(i)
  }
}

function nC(e) {
  tI = e.length > 0;
  let t = tu;
  if (tu = nO(e, eV.intl.string(eV.t.WKWARY)), tm && !g().isEqual(tu, t)) {
    var n;
    let e = true !== tu[tg],
      r = tg === eF.dx && (null == (n = t[eF.dx]) ? true : n.disabled);
    nt(e || r)
  }
}

function nN() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] && arguments[0],
    r = null != (e = em.A.settings.audioContextSettings) ? e : {
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
      } = t5(i);
    for (let [e, t] of Object.entries(o)) null == (0, e_.tM)(i, e) && (t.muted ? s[e] = true : delete s[e], t.volume !== a ? l[e] = t.volume : delete l[e], tt.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (n)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[e] && (delete s[e], delete l[e], tt.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    nm({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nw(e) {
  if (null == r) return eK.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
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

function nR(e, t) {
  (0, ev.isWindows)() && e > 1 && C.GH(e, {
    soundshare_session: t
  }).then(t => {
    null == t || k.Ay.shouldContinueWithoutElevatedProcessForPID(e) || S.h.wait(() => {
      S.h.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function nP(e) {
  i = e.sessionId, tf = false, th = false;
  let t = t5();
  if (nd() && (nf() ? rR(eF.rB.AUTOMATIC) : t.automaticAudioSubsystem && rP()), tt.supports(eF.O5.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, ev.isDesktop)() ? e = (0, B.i)({
      location: "handleConnectionOpen"
    }).enabled: ((0, ev.isIOS)() || (0, ev.isAndroid)()) && (e = (0, H.Y)({
      location: "handleConnectionOpen"
    }).enabled), tt.setOffloadAdmControls(e)
  }(0, eg.Lb)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, ev.isDesktop)() && (eE.A.getLastInitAttemptMayHaveCrashed() ? (S.h.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eF.x.DEFAULT,
    playSoundEffect: true
  }), nm({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(342887).md()), nN()
}

function nD(e) {
  let {
    mediaEngineState: t
  } = e;
  tn = t.settingsByContext, tl = t.inputDevices, tc = t.outputDevices, tZ = t.appSupported, tR = t.krispModuleLoaded, c = t.krispVersion, to = t.goLiveContext
}

function nL() {
  i = null
}

function nx() {
  if ((0, ev.isWeb)()) {
    let e = en.f1.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    e.loadWasmModule && e.preload && r.startDavePreload()
  }
  returnfalse
}

function nM(e) {
  switch (e.state) {
    case eM.S7L.CONNECTING:
      ny();
      break;
    case eM.S7L.RTC_CONNECTING:
      tT = false, tC = false, s = true, l = true;
      break;
    case eM.S7L.RTC_CONNECTED:
      nt();
      break;
    case eM.S7L.DISCONNECTED:
      nY(), nW()
  }
  n_.update()
}

function nj(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      tf = t.mute || t.suppress, th = t.deaf, tt.eachConnection(t9);
      let e = null != t.guildId && null != t.channelId && null != tk && tk !== t.channelId,
        n = !tN && null == t.channelId;
      return nt(!e && !n && tm), tk = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eC.default.getId() || null != eP.A.getChannelId() || nt(false, null), e
  }, false)
}

function nk(e) {
  let {
    mute: t
  } = e;
  tp = t, tt.eachConnection(t9)
}

function nU(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = t5(t);
  if (t === eF.x.DEFAULT && (eu.A.requestPermission(ek.iL.AUDIO), t_)) returnfalse;
  (r = !i && !r) || (i = false), n || (ty = true), nm({
    mute: r,
    deaf: i
  }, t), tt.eachConnection(t9)
}

function nG(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  nm({
    mute: n
  }, t), r || (ty = true), tt.eachConnection(t9)
}

function nF(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eU.oD.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nN(true)
}

function nV(e) {
  let {
    context: t
  } = e;
  nm({
    deaf: !t5(t).deaf
  }, t), tt.eachConnection(t9)
}

function nB(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eC.default.getId()) return;
  let {
    localMutes: r
  } = t5(t);
  r[n] ? delete r[n] : r[n] = true, nm({
    localMutes: r
  }, t), tt.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nH(e) {
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
    } = t5(l),
    m = null != (t = _[c]) && t,
    g = tK.has(c),
    E = u === eM.bb8.AUTO_ENABLED || u === eM.bb8.MANUAL_ENABLED;
  eK.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), h()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let y = p !== m,
    b = l === eF.x.DEFAULT,
    O = f && y && b,
    v = d && y && b;
  eK.info("changed=".concat(y, " isDefaultContext=").concat(b, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: A
  } = t5(l);
  if (A[c] === eM.bb8.AUTO_PROBING && u === eM.bb8.AUTO_ENABLED && (0, ec.A)(c, p ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, E), A[c] = u, nm({
      videoToggleStateMap: A
    }, l, d), u === eM.bb8.AUTO_PROBING ? null == (n = eP.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eP.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tz || (eK.info("isAutoDisableAllowed=".concat(tz, " - disabling VideoHealthManager")), null == (a = eP.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tz) return;
    (0, ec.A)(c, p ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, E), p ? tK.add(c) : tK.delete(c)
  } else v && (g && !p ? (eK.info("disallowing auto-disable for this session because of manual override by user"), tz = false, null == (s = eP.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, ec.A)(c, eF.Al.MANUAL_REENABLE, E)) : (0, ec.A)(c, p ? eF.Al.MANUAL_DISABLE : eF.Al.MANUAL_ENABLE, E));
  b && !p && tK.delete(c), p ? _[c] = true : delete _[c], nm({
    disabledLocalVideos: _
  }, l, d), tt.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = _[c]) && t)
  }, l)
}

function nY() {
  if (0 === tK.size) return;
  let e = eF.x.DEFAULT,
    {
      disabledLocalVideos: t
    } = t5(e);
  tK.forEach(n => {
    h()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], tt.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tK.clear(), nm({
    disabledLocalVideos: t
  }, e, false)
}

function nW() {
  let e = eF.x.DEFAULT,
    {
      videoToggleStateMap: t
    } = t5(e);
  for (let [e, n] of Object.entries(t)) n === eM.bb8.AUTO_PROBING && delete t[e];
  nm({
    videoToggleStateMap: t
  }, e, false)
}

function nK(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eC.default.getId()) return;
  let i = t === eF.x.STREAM ? eF.Cn : eF.Hz,
    {
      localVolumes: a
    } = t5(t);
  r === i ? delete a[n] : a[n] = r, nm({
    localVolumes: a
  }, t), tt.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nz(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = t5(t);
  a[n] = {
    left: r,
    right: i
  }, nm({
    localPans: a
  }, t), tt.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nq(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  nm({
    mode: n,
    modeOptions: r
  }, t), tt.eachConnection(t7), n_.update()
}

function nZ(e) {
  let {
    volume: t
  } = e;
  nm({
    inputVolume: t8(t)
  }), tt.setInputVolume(t)
}

function nQ(e) {
  let {
    volume: t
  } = e;
  nm({
    outputVolume: t
  }), tt.setOutputVolume(t)
}

function nX(e) {
  let {
    id: t
  } = e;
  t = nv(tl, t), ts = performance.now(), nm({
    inputDeviceId: t
  }), tt.setAudioInputDevice(t), tt.eachConnection(no), s = true, l = true
}

function nJ(e) {
  let {
    id: t
  } = e;
  nm({
    outputDeviceId: t = nv(tc, t)
  }), tt.setAudioOutputDevice(t)
}

function n$(e) {
  let {
    id: t
  } = e;
  nm({
    videoDeviceId: t = nv(tu, t)
  }), nt()
}

function n0(e) {
  let {
    inputProfile: t
  } = e;
  nm({
    activeInputProfile: t
  });
  let n = t5();
  tt.eachConnection(e => {
    t7(e), no(e)
  }), tt.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), n_.update(), rt()
}

function n1(e) {
  return ta !== e.required && (ta = e.required, e.required || tt.interact(), true)
}

function n2(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  nA(t), nT(n), nC(r)
}

function n3(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  nm({
    inputVolume: t8(t),
    outputVolume: n
  })
}

function n6(e) {
  var t;
  let n = t5(),
    i = tt.getAudioSubsystem(),
    a = tt.getAudioLayer(),
    o = nv(tl, n.inputDeviceId),
    s = null == (t = tl[o]) ? true : t.name,
    l = (0, ef.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
      location: "trackVoiceProcessing"
    });
  ey.default.track(eM.HAw.VOICE_PROCESSING, {
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

function n4(e) {
  let t = nm({
    echoCancellation: e.enabled
  });
  tt.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), rt(), n6(e.location)
}

function n5(e) {
  n8(e.enabled)
}

function n7(e) {
  let t = nm({
    sidechainCompressionStrength: e.strength
  });
  tt.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function n8(e) {
  let t = nm({
    sidechainCompression: e
  });
  tt.setSidechainCompression(t.sidechainCompression)
}

function n9(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tq.add(n) : tq.delete(n), re(), rt()
}

function re() {
  let e = !tq.has("voice_filter_preview") && !tq.has("mic_test");
  tt.setMaybePreprocessMute(e)
}

function rt() {
  let e = t5(),
    t = tq.size > 0,
    n = e.inputDeviceId,
    r = ew.A.hasEchoCancellation(n) || e.echoCancellation,
    i = !t,
    a = ew.A.hasNoiseSuppression(n) || e.noiseSuppression,
    o = nr(ew.A.hasAutomaticGainControl(n) || e.automaticGainControl),
    s = e.noiseCancellation,
    l = null !== tL,
    c = tq.has("voice_filter") && 1 === tq.size;
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
async function rn() {
  var e, t, n, r;
  if (!tt.supports(eF.O5.VAAPI)) return;
  let i = 4098;
  (null == (n = window.DiscordNative) || null == (t = n.processUtils) ? true : t.getSystemInfo) == null || (null != (e = null == (r = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : r.gpuDevice) ? e : []).some(e => e.vendorId === i) && (t0 = true, t$ = tt.supports(eF.O5.GAMESCOPE_CAPTURE))
}

function rr(e) {
  let t = nm({
    noiseSuppression: e.enabled
  });
  tt.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), rt(), n6(e.location)
}

function ri(e) {
  let t = nm({
    automaticGainControl: e.enabled
  });
  tt.eachConnection(e => ni(e, t.automaticGainControl)), rt(), n6(e.location)
}

function ra(e) {
  let t = nm({
    noiseCancellation: e.enabled
  });
  tt.eachConnection(e => na(e, t.noiseCancellation)), rt(), n6(e.location)
}

function ro(e) {
  ed.A.setKrispModelOverride(e.model), d = e.model, rt()
}

function rs(e) {
  var t;
  (0, ev.isWeb)() || (tD = e.enabled, null == (t = tt.setNoiseCancellationEnableStats) || t.call(tt, e.enabled))
}

function rl(e) {
  nm({
    silenceWarning: e.enabled
  }), n_.update()
}

function rc(e) {
  tt.setDebugLogging(e.enabled)
}

function ru(e) {
  let {
    level: t
  } = e;
  u = t, ed.A.setKrispSuppressionLevel(t)
}

function rd(e) {
  nm({
    videoHook: e.enabled
  })
}

function rf(e) {
  nm({
    experimentalSoundshare2: e.enabled
  })
}

function rp(e) {
  let {
    enabled: t
  } = e;
  nm({
    useSystemScreensharePicker: t
  })
}

function r_(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = nm({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  tt.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function rh(e) {
  let {
    enabled: t
  } = e;
  nm({
    qos: t
  }), tt.eachConnection(e => e.setQoS(t))
}

function rm() {
  ng()
}

function rg(e) {
  let {
    inputDetected: t
  } = e;
  tS = t, !tT && tS && (tT = true, n_.update())
}

function rE(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === t_) returnfalse;
  t_ = n, tt.eachConnection(t9)
}

function ry(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === ek.hL.ACCEPTED;
  switch (n) {
    case ek.iL.AUDIO:
      tY = true, tt.eachConnection(t9);
      break;
    case ek.iL.CAMERA:
      !r && tm && nt(false);
      break;
    default:
      returnfalse
  }
}

function rb() {
  return tR || false
}
async function rO() {
  try {
    var e, t, n, i;
    await eS.Ay.ensureModule("discord_krisp");
    let a = eS.Ay.requireModule("discord_krisp");
    tR = true, c = null == (t = a.getSdkVersion) ? true : t.call(a), u = null != (e = null == (n = a.getSuppressionLevel) ? true : n.call(a)) ? e : 100, null == (i = a.getNcModels) || i.call(a).then(e => {
      tP = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eK.warn("Failed to load Krisp module: ".concat(t.message)), eI.A.captureException(t);
    let e = eF.CO.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eF.CO.INITIALIZED : n
    }
    ey.default.track(eM.HAw.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), nm({
      noiseCancellation: false
    })
  } finally {
    tw = false
  }
}

function rv() {
  return (0, ev.isWindows)() || (0, ev.isLinux)() || (0, ev.isMac)()
}

function rA() {
  !rv() || __OVERLAY__ || tw || tR ? (0, ev.isWeb)() && tt.supports(eF.O5.NOISE_CANCELLATION) ? (tR = true, r.emitChange()) : (0, ev.isWeb)() && nm({
    noiseCancellation: false
  }) : (tw = true, rO())
}

function rI(e) {
  let {
    enabled: t
  } = e;
  ey.default.track(eM.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tL ? tL : null,
    enabled: t
  }), nm({
    voiceFilterPlaybackEnabled: t
  })
}

function rS(e) {
  let {
    newVoiceFilterId: t
  } = e;
  nm({
    mostRecentlyRequestedVoiceFilter: t
  }), tt.eachConnection(e => e.setVoiceFilterId(t))
}

function rT() {
  nm({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rC(e) {
  let {
    voiceFilterId: t
  } = e;
  tM = tL, tj = tx, tL = t, tx = null === t ? null : Date.now()
}

function rN(e) {
  let t = e.bypassEnabled;
  nm({
    bypassSystemInputProcessing: t
  }), tt.setAudioInputBypassSystemProcessing(t), n6(e.location)
}

function rw(e) {
  rR(e.subsystem)
}

function rR(e) {
  e === eF.rB.AUTOMATIC ? (nm({
    automaticAudioSubsystem: true
  }), rP()) : (nm({
    automaticAudioSubsystem: false
  }), tt.setAudioSubsystem(e))
}

function rP() {
  tt.queueAudioSubsystem(eF.rB.EXPERIMENTAL)
}

function rD(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && nt(i, null), null != t || null == n) {
    tN = false;
    return
  }
  if (tN) return;
  tN = true;
  let a = t5();
  (a.mute || a.deaf) && (nm({
    deaf: false,
    mute: false
  }), tt.eachConnection(t9))
}

function rL(e) {
  let {
    application: t
  } = e;
  tr.add(t.id)
}

function rx(e) {
  let {
    application: t
  } = e;
  tr.delete(t.id)
}

function rM(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      ti = false, tt.eachConnection(t9);
      break;
    case "video":
      nt(false)
  }
}

function rj(e) {
  ti = e.enabled, e.unmute && nm({
    mute: false,
    deaf: false
  }), tt.eachConnection(t9)
}

function rk(e) {
  let {
    enabled: t
  } = e;
  eu.A.requestPermission(ek.iL.CAMERA), nt(t)
}

function rU(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e;
  if (!(0, P.Ao)() || null == T.A) returnfalse;
  let a = null,
    s = null,
    l = eb.A.getPidFromDesktopSource(t);
  ({
    soundshareId: a,
    soundshareSession: s
  } = nw(l));
  let c = {
    desktopSource: {
      id: t,
      sourcePid: l,
      soundshareId: a,
      soundshareSession: s
    },
    quality: i
  };
  null != o && (tt.setClipsSource(null), (0, ev.isWindows)() && null != o.desktopSource.soundshareId && C.c1(o.desktopSource.soundshareId)), null != a && nR(a, s), o = c;
  let u = t2(),
    d = t5().videoHook;
  tt.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: d,
      useGraphicsCapture: nl(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: nu(),
      videoHookStaleFrameTimeoutMs: e0,
      graphicsCaptureStaleFrameTimeoutMs: e1,
      hdrCaptureMode: u
    },
    quality: i,
    applicationName: n
  })
}

function rG(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, tt.setClipsSource(null))
}

function rF(e) {
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
      c = false === o ? null : eb.A.getPidFromDesktopSource(i);
    ev.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nw(c), null != e && nR(e, r)), ne(s), nt(s === eF.x.STREAM && tm, {
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
      o = e === eF.x.STREAM && tm,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    nt(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else nt(tm, null)
}

function rV(e) {
  let {
    section: t
  } = e;
  return t === eM.nc_.VOICE && ny(), false
}

function rB() {
  return tt.eachConnection(no), false
}

function rH(e) {
  let {
    enabled: t
  } = e, n = nm({
    aecDumpEnabled: t
  });
  tt.setAecDump(n.aecDumpEnabled)
}

function rY(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  tn = Object.values(eF.x).reduce((e, n) => {
    let r = n,
      i = e9();
    return e[r] = g().merge(i, t[r]), e
  }, {}), A.w.set(ez, tn), nE()
}

function rW(e) {
  let {
    state: t
  } = e, n = j.A.isEnabled();
  if (t === eM.g6G.BACKGROUND && tm && !n) tA = true, nt(false);
  else {
    if (t !== eM.g6G.ACTIVE || !tA) returnfalse;
    tA = false, nt(true)
  }
  returntrue
}

function rK(e) {
  tt.eachConnection(t => t.setBitRate(e.bitrate))
}

function rz() {
  if (!tm && null == a || null != eP.A.getRTCConnectionId()) returnfalse;
  nt(false, null)
}

function rq() {
  return !!tU && (tU = false, true)
}

function rZ(e) {
  tt.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rQ(e) {
  let {
    settings: t
  } = e;
  tt.applyMediaFilterSettings(t).finally(() => {
    tG = false, r.emitChange()
  })
}

function rX() {
  tG = true
}

function rJ() {
  tG = false
}

function r$(e) {
  tX = e.enabled
}

function r0() {
  if ((0, ev.isDesktop)() && ev.isPlatformEmbedded && !t1) {
    t1 = true;
    let e = async () => {
      let t = await new Promise(e => {
        eS.Ay.pollQueueMetrics(t => {
          e(t)
        })
      });
      t.periodMs = eF.tl;
      let n = r2(t);
      null !== n && ey.default.track(eM.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eF.tl)
    };
    setTimeout(e, eF.tl)
  }
}
class r1 extends(p = Chunk311907.Ay.Store) {
  initialize() {
    ns(), nh(), rA(), nW(), r0(), tZ = {
      [eF.O5.VIDEO]: tt.supports(eF.O5.VIDEO),
      [eF.O5.DESKTOP_CAPTURE]: tt.supports(eF.O5.DESKTOP_CAPTURE),
      [eF.O5.HYBRID_VIDEO]: tt.supports(eF.O5.HYBRID_VIDEO)
    }, this.waitFor(eC.default, eN.A, ew.A, eR.A, w.A, M.A, eP.A, k.Ay, ep.A, em.A, eL.default, ex.A, eE.A)
  }
  supports(e) {
    return tt.supports(e)
  }
  supportsInApp(e) {
    return tZ[e] || tt.supports(e)
  }
  isSupported() {
    return tt.supported()
  }
  isNoiseSuppressionSupported() {
    return tt.supports(eF.O5.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return rb()
  }
  isNoiseCancellationError() {
    return tU
  }
  isAutomaticGainControlSupported() {
    return tt.supports(eF.O5.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !nf() && (tt.supports(eF.O5.LEGACY_AUDIO_SUBSYSTEM) || tt.supports(eF.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return tt.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tt.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return rb()
  }
  isAecDumpSupported() {
    return tt.supports(eF.O5.AEC_DUMP)
  }
  isSimulcastSupported() {
    return tt.supports(eF.O5.VIDEO) && tt.supports(eF.O5.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = eR.A.getChannel(tk)) ? true : e.type) !== eM.rbe.GUILD_STAGE_VOICE && e5 && Q.A.simulcastEnabled()
  }
  isVideoDecoderFallbackEnabled() {
    return tH
  }
  getAecDump() {
    return t5().aecDumpEnabled
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
    return tD
  }
  isEnabled() {
    return ti
  }
  isMute() {
    return this.isSelfMute() || tf
  }
  isDeaf() {
    return this.isSelfDeaf() || th
  }
  hasContext(e) {
    return null != tn[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return e === eF.x.DEFAULT && tp
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return !this.isEnabled() || t5(e).mute || !eu.A.didHavePermission(ek.iL.AUDIO) || this.isSelfDeaf(e) || e === eF.x.DEFAULT && t_
  }
  shouldSkipMuteUnmuteSound() {
    return ty
  }
  notifyMuteUnmuteSoundWasSkipped() {
    ty = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && ew.A.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tX
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return !this.isSupported() || t5(e).deaf
  }
  isVideoEnabled() {
    return tm && tI
  }
  isVideoAvailable() {
    return Object.values(tu).some(e => {
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
    return e !== eC.default.getId() && (t5(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return tt.supports(eF.O5.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
    return null != (t = t5(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
    return null != (t = t5(n).videoToggleStateMap[e]) ? t : eM.bb8.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
    return t === eF.x.DEFAULT && tK.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return e === eF.x.DEFAULT && tK.size > 0
  }
  isMediaFilterSettingLoading() {
    return tG
  }
  isNativeAudioPermissionReady() {
    return tY
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
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
      n = t5(t).localPans[e];
    return null != n ? n : e$
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
      n = t === eF.x.STREAM ? eF.Cn : eF.Hz,
      r = t5(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return t5().inputVolume
  }
  getOutputVolume() {
    return t5().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return t5(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return t5(e).modeOptions
  }
  getActiveVoiceFilter() {
    return tL
  }
  getActiveVoiceFilterAppliedAt() {
    return tx
  }
  getPreviousVoiceFilter() {
    return tM
  }
  getPreviousVoiceFilterAppliedAt() {
    return tj
  }
  getMostRecentlyRequestedVoiceFilter() {
    return t5().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return t5().voiceFilterPlaybackEnabled
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
    return nv(tl, t5().inputDeviceId)
  }
  getOutputDeviceId() {
    return nv(tc, t5().outputDeviceId)
  }
  getVideoDeviceId() {
    return nv(tu, t5().videoDeviceId)
  }
  getInputDevices() {
    return tl
  }
  getOutputDevices() {
    return tc
  }
  getVideoDevices() {
    return tu
  }
  getEchoCancellation() {
    let e = t5();
    return ew.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getSidechainCompression() {
    return tt.supports(eF.O5.SIDECHAIN_COMPRESSION) && t5().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return t5().sidechainCompressionStrength
  }
  getH265Enabled() {
    return t5().h265Enabled
  }
  hasH265HardwareDecode() {
    return null !== tV && tV
  }
  getLoopback() {
    return tq.size > 0
  }
  getLoopbackReasons() {
    return tq
  }
  getNoiseSuppression() {
    let e = t5();
    return ew.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = t5();
    return ew.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return t5().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return t5().noiseCancellation
  }
  getHardwareEncoding() {
    return e5
  }
  getEnableSilenceWarning() {
    return t5().silenceWarning
  }
  getDebugLogging() {
    return tt.getDebugLogging()
  }
  getQoS() {
    return t5().qos
  }
  getAttenuation() {
    return t5().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return t5().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return t5().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return nd() && t5().automaticAudioSubsystem ? eF.rB.AUTOMATIC : tt.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return tt.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return t5().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == e || e === eG.my.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
    return t5(e)
  }
  getState() {
    return {
      settingsByContext: tn,
      inputDevices: tl,
      outputDevices: tc,
      appSupported: tZ,
      krispModuleLoaded: tR,
      krispVersion: c,
      krispSuppressionLevel: u,
      goLiveSource: a,
      goLiveContext: to
    }
  }
  getInputDetected() {
    return tS
  }
  getNoInputDetectedNotice() {
    return tC
  }
  getInputDeviceOSMuted() {
    return s
  }
  getInputDeviceOSVolume() {
    return l
  }
  getPacketDelay() {
    return ev.isPlatformEmbedded || this.getMode() !== eM.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    tt.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return ta
  }
  getVideoHook() {
    return t5().videoHook
  }
  supportsVideoHook() {
    return tt.supports(eF.O5.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = t5().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return tt.supports(eF.O5.EXPERIMENTAL_SOUNDSHARE) && y().satisfies(null === T.A || true === T.A ? true : T.A.os.release, ej.$x)
  }
  supportsHookSoundshare() {
    return (0, ev.isWindows)() && tt.supports(eF.O5.SOUNDSHARE) && y().satisfies(null === T.A || true === T.A ? true : T.A.os.release, ej.ws)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = t5().useSystemScreensharePicker,
      n = (0, ev.isLinux)();
    return e && (null != t ? t : n)
  }
  supportsSystemScreensharePicker() {
    return tt.supports(eF.O5.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return t0
  }
  getUseGamescopeCapture() {
    return t$
  }
  getEverSpeakingWhileMuted() {
    return tb
  }
  getSpeakingWhileMuted() {
    return tO
  }
  getKrispModelOverride() {
    return d
  }
  getKrispModels() {
    return tP
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = t5().modeOptions.vadKrispActivationThreshold) ? e : eJ
  }
  hasActiveCallKitCall() {
    return tJ
  }
  setHasActiveCallKitCall(e) {
    tJ = e
  }
  supportsScreenSoundshare() {
    return (0, ev.isMac)() ? tt.supports(eF.O5.SOUNDSHARE) && y().satisfies(null === T.A || true === T.A ? true : T.A.os.release, ej.P$) && nu() : (0, ev.isWindows)() ? tt.supports(eF.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, ev.isLinux)() && tt.supports(eF.O5.SCREEN_SOUNDSHARE)
  }
  getSystemMicrophoneMode() {
    if ((0, ev.isWindows)()) {
      var e, t;
      return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects) ? true : e.find(e => e === e7)
    }
    if ((0, ev.isMac)() || (0, ev.isIOS)()) return f
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
    return (0, ev.isWeb)() && (e.fetchDave = en.f1.getCurrentConfig({
      location: "MediaEngineStore fetchAsyncResources"
    }).loadWasmModule), tt.fetchAsyncResources(e)
  }
  startDavePreload() {
    if (!tF && (tF = true, (0, ev.isWeb)())) {
      let e = {
        fetchDave: true
      };
      tt.fetchAsyncResources(e).catch(e => {
        eK.warn("DAVE preload failed:", e), eI.A.captureException(e)
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
    let e = tt.getSupportedSecureFramesProtocolVersion();
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
    return tQ
  }
}

function r2(e) {
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
eB(r1, "displayName", "MediaEngineStore");
let r3 = r = new r1(Chunk73153.h, {
  VOICE_CHANNEL_SELECT: rD,
  VOICE_STATE_UPDATES: nj,
  CONNECTION_OPEN: nP,
  CONNECTION_CLOSED: nL,
  POST_CONNECTION_OPEN: nx,
  RTC_CONNECTION_STATE: nM,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nk,
  AUDIO_TOGGLE_SELF_MUTE: nU,
  AUDIO_SET_SELF_MUTE: nG,
  AUDIO_TOGGLE_SELF_DEAF: nV,
  AUDIO_TOGGLE_LOCAL_MUTE: nB,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nH,
  AUDIO_SET_LOCAL_VOLUME: nK,
  AUDIO_SET_LOCAL_PAN: nz,
  AUDIO_SET_MODE: nq,
  AUDIO_SET_INPUT_VOLUME: nZ,
  AUDIO_SET_OUTPUT_VOLUME: nQ,
  AUDIO_SET_INPUT_DEVICE: nX,
  AUDIO_SET_OUTPUT_DEVICE: nJ,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: n0,
  AUDIO_SET_ECHO_CANCELLATION: n4,
  AUDIO_SET_SIDECHAIN_COMPRESSION: n5,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n7,
  AUDIO_SET_LOOPBACK: n9,
  AUDIO_SET_NOISE_SUPPRESSION: rr,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: ri,
  AUDIO_SET_NOISE_CANCELLATION: ra,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: ro,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: rl,
  AUDIO_SET_DEBUG_LOGGING: rc,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: ru,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rs,
  MEDIA_ENGINE_SET_VIDEO_HOOK: rd,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rf,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rp,
  AUDIO_SET_ATTENUATION: r_,
  AUDIO_SET_QOS: rh,
  MEDIA_ENGINE_DEVICES: n2,
  AUDIO_VOLUME_CHANGE: n3,
  AUDIO_RESET: rm,
  AUDIO_INPUT_DETECTED: rg,
  AUDIO_SET_SUBSYSTEM: rw,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rN,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rj,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rk,
  MEDIA_ENGINE_PERMISSION: rM,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rF,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: n$,
  MEDIA_ENGINE_INTERACTION_REQUIRED: n1,
  USER_SETTINGS_MODAL_INIT: rV,
  USER_SETTINGS_MODAL_SET_SECTION: rV,
  CERTIFIED_DEVICES_SET: rB,
  RPC_APP_CONNECTED: rL,
  RPC_APP_DISCONNECTED: rx,
  OVERLAY_INITIALIZE: nD,
  APP_STATE_UPDATE: rW,
  SET_CHANNEL_BITRATE: rK,
  SET_VAD_PERMISSION: rE,
  SET_NATIVE_PERMISSION: ry,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rZ,
  MEDIA_ENGINE_SET_AEC_DUMP: rH,
  MEDIA_ENGINE_RESET_SETTINGS: rY,
  CHANNEL_DELETE: rz,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rq,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rQ,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rX,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rJ,
  USER_SETTINGS_PROTO_UPDATE: nF,
  CLIPS_INIT: rU,
  CLIPS_SETTINGS_UPDATE: rG,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r$,
  VOICE_FILTER_REQUEST_SWITCH: rS,
  VOICE_FILTER_LOOPBACK_TOGGLE: rI,
  VOICE_FILTER_APPLIED: rC,
  VOICE_FILTER_DOWNLOAD_FAILED: rT,
  VOICE_FILTER_APPLY_FAILED: rT
})