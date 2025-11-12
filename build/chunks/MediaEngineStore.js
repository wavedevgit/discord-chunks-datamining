/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rB
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

function ew(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ex(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ew(e, t, n[t])
    })
  }
  return e
}

function eL(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eM(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eL(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ej = new Chunk710845.Z("MediaEngineStore"),
  ek = "MediaEngineStore",
  eU = 4,
  eG = 1,
  eB = 1,
  eZ = 1,
  eF = 1,
  eV = .5,
  eH = {
    left: 1,
    right: 1
  },
  eY = 500,
  eW = 5 * Chunk70956.Z.Millis.SECOND,
  eK = false,
  ez = 100,
  eq = 2 * Chunk70956.Z.Millis.SECOND,
  eX = true,
  eQ = 0;

function eJ() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eK,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eV,
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
    videoHook: e0.supports(Chunk65154.AN.VIDEO_HOOK),
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
let e$ = {
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
  e0 = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
ej.enableNativeLogger(true);
let e1 = {},
  e3 = new Set([Chunk65154.Yn.DEFAULT]),
  e2 = e0.supports(Chunk65154.AN.AUTO_ENABLE),
  e4 = false,
  e8 = Chunk65154.Yn.STREAM,
  e5 = performance.now(),
  e6 = {
    [Chunk65154.w5]: nn("No Input Devices")
  },
  e7 = {
    [Chunk65154.w5]: nn("No Output Devices")
  },
  e9 = {
    [Chunk65154.w5]: nn("No Video Devices")
  },
  te = false,
  tt = false,
  tn = false,
  tr = false,
  ti = false,
  ta = Chunk65154.Av,
  to = Chunk65154.Av,
  ts = false,
  tl = false,
  tc = false,
  tu = new Chunk846519.V7,
  td = false,
  tf = false,
  t_ = null,
  tp = false,
  th = false,
  tm = false,
  tg = false,
  tE = false,
  tb = [],
  ty = false,
  tO = null,
  tv = null,
  tI = null,
  tT = null,
  tS = null,
  tA = false,
  tC = false,
  tN = false,
  tR = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tP = false,
  tD = new Set,
  tw = tP,
  tx = new Set,
  tL = {},
  tM = null,
  tj = true,
  tk = false,
  tU = false,
  tG = false;

function tB() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tZ() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = e1[module];
  return null == exports && (t = eJ(), e1[module] = exports), exports
}

function tF() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tZ(r),
    a = e$[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = ex({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return eM(ex({}, i, a), {
    modeOptions: o
  })
}

function tV(e) {
  var t, n;
  let r = tF(e.context),
    i = r.mode;
  e.context === eP.Yn.DEFAULT && ((0, ea.f)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eS.pM4.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eS.pM4.VOICE_ACTIVITY), (0, K.I)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && rr(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eV,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tH(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Qx;
  return p().clamp(e, 0, t)
}

function tY(e) {
  let t = tF(e.context),
    n = !e2 || t.mute || t.deaf;
  e.context === eP.Yn.DEFAULT ? n = n || te || tt || tn || !et.Z.didHavePermission(eC.Eu.AUDIO) : e.context === eP.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eP.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tW(e) {
  e !== e8 && (null != a && e0.setGoLiveSource(null, e8), e8 = e)
}

function tK() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : ti,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), e0.setGoLiveSource(null, e8)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && e0.setGoLiveSource(null, e8), ti || i) {
    let e = tF().videoDeviceId;
    ti && module === Chunk65154.w5 && to === Chunk65154.w5 && ta !== Chunk65154.Av ? e = ta : to = module, ta = (ti = i) ? ni(e9, module) : Chunk65154.Av, e0.setVideoInputDevice(ta)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tB(),
        n = tF().videoHook,
        i = t1(),
        a = i ? t3() ? Chunk70722.zj : Chunk70722.ZM : 0,
        s = (0, Chunk358085.isWindows)() && (0, Chunk412412.t)("updateVideo").enabled;
      e0.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: s,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: t2(),
          videoHookStaleFrameTimeoutMs: eY,
          graphicsCaptureStaleFrameTimeoutMs: eW,
          hdrCaptureMode: exports,
          enableGlobalFramePoolLock: (0, Chunk27955.T)({
            location: "updateVideo"
          }).enabled
        },
        quality: module
      }, e8)
    }
    null != o.cameraSource && e0.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e8)
  }
}

function tz(e) {
  switch (e) {
    case eP.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case eP.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case eP.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tq(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return ex({
    enabled: e
  }, t)
}

function tX(e, t) {
  e.setAutomaticGainControl(tq(t))
}
async function tQ(e, t) {
  if ((0, ef.isIOS)() || (0, ef.isMac)()) {
    let e = await e0.getSystemMicrophoneMode();
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

function tJ(e) {
  let t = tF(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eb.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eb.Z.hasNoiseSuppression(n) || t.noiseSuppression), tX(e, eb.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tQ(e, t.noiseCancellation), e.setVoiceFilterId(tO), (0, ef.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function t$() {
  var e;
  return !((0, Chunk986855.M)("MediaEngine").enabled || (0, Chunk35662.c)("MediaEngine").enabled || (0, Chunk358085.isLinux)()) && (null == (e = tF().openH264) || module)
}

function t0() {
  e0.on(Chunk46973.aB.Connection, e => {
    tV(e), tY(e), tJ(e);
    let t = tF();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos), e.setExperimentalEncoders(t.experimentalEncoders), e.setHardwareH264(eX), e.setSoftwareH264(t$());
    let n = eO.Z.getGuildId(),
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
    i && e.setExperimentFlag(eP.V8.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(eP.V8.PTT_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eP.V8.SKIP_ENCODE, true), (0, W.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eP.V8.LOW_LATENCY_RATE_CONTROL, true);
    let l = false,
      c = true;
    if (e.setExperimentFlag(eP.V8.RESET_DECODER_ON_ERRORS, true), l && e.setExperimentFlag(eP.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), c && e.setExperimentFlag(eP.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eP.Yn.STREAM) {
      let t = no(e7);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = H.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, ef.isWindows)() ? (null == tM ? true : tM.startsWith("NVIDIA")) || (null == tM ? true : tM.startsWith("AMD")) ? e.setExperimentFlag(eP.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eP.V8.SIGNAL_AV1_DECODE, true) : ((0, ef.isMac)() || (0, ef.isLinux)()) && e.setExperimentFlag(eP.V8.SIGNAL_AV1_DECODE, true), (0, ef.isWindows)() && e.setExperimentFlag(eP.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, ef.isWeb)()) {
      let {
        enabled: t
      } = (0, F.A)("MediaEngineStore");
      e.setExperimentFlag(eP.V8.BROWSER_HEVC, t)
    }
    if (e0.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(eP.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = J.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eP.ux)
    }
    for (let n of (t = tF(e.context), e.setPostponeDecodeLevel(ez), Object.keys(t.localMutes))) n !== eg.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eg.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
    }), e.context === eP.Yn.DEFAULT && (tl = false, tc = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      tl = true, tc = true, r.emitChange(), tu.stop(), tu.start(eq, () => {
        tc = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && ec.default.track(eS.rMx.VIDEOHOOK_INITIALIZED, ex({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, L.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      ej.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tz(e)
      }), tA = true, ec.default.track(eS.rMx.VOICE_PROCESSING, {
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
      ej.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tz(e)
      }), ec.default.track(eS.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eP.Yn.DEFAULT,
        mode: eS.pM4.VOICE_ACTIVITY,
        options: eM(ex({}, tF(eP.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      ec.default.track(eS.rMx.SDP_ERROR, {
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
    }), e.setBitRate(eE.Z.bitrate), e.applyVideoQualityMode(eT.Z.mode), e0.supports(eP.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e0.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled)
  }), e0.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), e0.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), e0.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), e0.on(Chunk46973.aB.AudioPermission, e => {
    tR = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), e0.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), e0.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
    ej.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), e0.on(Chunk46973.aB.VideoInputInitialized, e => {
    ec.default.track(eS.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ed.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eO.Z.getMediaSessionId(),
      rtc_connection_id: eO.Z.getRTCConnectionId()
    })
  }), e0.on(Chunk46973.aB.AudioInputInitialized, e => {
    ec.default.track(eS.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ed.Z.Millis.SECOND),
      rtc_connection_id: eO.Z.getRTCConnectionId()
    })
  }), e0.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), e0.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), e0.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
  }), e0.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), e0.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), e0.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), e0.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    ec.default.track(eS.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), e0.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eM(ex({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eM(ex({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), e0.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eQ++,
          context: n.context
        }
      })
    })
  }), e0.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rG(e);
    null !== t && ec.default.track(eS.rMx.VOICE_QUEUE_METRICS, t)
  }), e0.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nW(), nz(), t5.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tM = e.gpu_brand)
  }), e0.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    e0.eachConnection(tJ)
  })
}

function t1() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function t3() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function t2() {
  return (0, Chunk358085.isMac)() && e0.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function t4() {
  return (0, Chunk358085.isWindows)() && e0.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && e0.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function t8() {
  return e0.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let t5 = new class {
  start() {
    this.started || (this.started = true, e0.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), e0.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tF();
    !tp && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    ew(this, "stateChangeTimeout", true), ew(this, "noVoiceTimeout", 5e3), ew(this, "voiceTimeout", 1500), ew(this, "started", false), ew(this, "handleSilence", e => {
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

function t6() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(ek, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), e1 = null != (e = Chunk433517.K.get(ek)) ? module : {}, p().each(e1, e => {
    if (p().defaultsDeep(e, eJ()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, em.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eU && (e.vadUseKrispSettingVersion = eU, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eK)
    }
    e0.supports(eP.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eF && (e.sidechainCompressionSettingVersion = eF, e.sidechainCompression = true), (0, ef.isWeb)() ? e.ncUseKrispjsSettingVersion !== eB && (e.ncUseKrispjsSettingVersion = eB, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eG && (e.ncUseKrispSettingVersion = eG, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== eZ && (e.hardwareH264 = true, e.hardwareEnabledVersion = eZ), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), ne()
}

function t7(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tZ(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ek, e1), r
}

function t9() {
  Chunk433517.K.remove(ek), location.reload()
}

function ne() {
  let e = tF();
  e0.setAudioInputDevice(module.inputDeviceId), e0.setAudioOutputDevice(module.outputDeviceId), tK(), e0.setInputVolume(module.inputVolume), e0.setOutputVolume(module.outputVolume), e0.setH264Enabled(eX || t$()), e0.setAv1Enabled(eX), e0.setH265Enabled(eX), e0.setAecDump(module.aecDumpEnabled), e0.setSidechainCompression(module.sidechainCompression), e0.setSidechainCompressionStrength(module.sidechainCompressionStrength), e0.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function nt() {
  e2 || e0.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function nn(e) {
  return {
    id: eP.w5,
    index: 0,
    name: e,
    disabled: true,
    guid: true,
    hardwareId: true,
    containerId: true
  }
}

function nr(e, t) {
  if (0 === e.length) {
    let e = nn(t);
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

function ni(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eP.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function na(e) {
  let t = e6;
  if (e6 = nr(e, eD.intl.string(eD.t["/QIjDA"])), !p().isEqual(e6, t)) {
    let e = tF(),
      t = ni(e6, e.inputDeviceId);
    e0.setAudioInputDevice(t)
  }
}

function no(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function ns(e) {
  e0.eachConnection(t => {
    t.context === eP.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nl(e) {
  let t = e7;
  if (e7 = nr(e, eD.intl.string(eD.t.xlUg0v)), !p().isEqual(e7, t)) {
    let e = tF(),
      n = ni(e7, e.outputDeviceId);
    e0.setAudioOutputDevice(n);
    let r = no(t),
      i = no(e7);
    r !== i && ns(i)
  }
}

function nc(e) {
  tf = e.length > 0;
  let t = e9;
  if (e9 = nr(e, eD.intl.string(eD.t.WKWARY)), ti && !p().isEqual(e9, t)) {
    var n;
    let e = true !== e9[ta],
      r = ta === eP.w5 && (null == (n = t[eP.w5]) ? true : n.disabled);
    tK(e || r)
  }
}

function nu() {
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
      } = tF(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], e0.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], e0.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t7({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nd(e) {
  if (null == r) return ej.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : eu.Z.getAudioPid(e),
      n = "";
    return null != t && (n = eu.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nf(e, t) {
  (0, ef.isWindows)() && e > 1 && T.YT(e, {
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

function n_(e) {
  i = e.sessionId, te = false, tr = false;
  let t = tF();
  if (t4() && (t8() ? r_(eP.iA.AUTOMATIC) : t.automaticAudioSubsystem && rp()), e0.supports(eP.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, ef.isDesktop)() ? e = (0, k.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, ef.isIOS)() || (0, ef.isAndroid)()) && (e = (0, U.W)({
      location: "handleConnectionOpen"
    }).enabled), e0.setOffloadAdmControls(e)
  }(0, es.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, ef.isDesktop)() && (el.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eP.Yn.DEFAULT,
    playSoundEffect: true
  }), t7({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), nu()
}

function np(e) {
  let {
    mediaEngineState: t
  } = e;
  e1 = t.settingsByContext, e6 = t.inputDevices, e7 = t.outputDevices, tL = t.appSupported, tE = t.krispModuleLoaded, s = t.krispVersion, e8 = t.goLiveContext
}

function nh() {
  i = null
}

function nm() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.NJ.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function ng(e) {
  switch (e.state) {
    case eS.hes.CONNECTING:
      nt();
      break;
    case eS.hes.RTC_CONNECTING:
      tp = false, th = false;
      break;
    case eS.hes.RTC_CONNECTED:
      tK();
      break;
    case eS.hes.DISCONNECTED:
      nA(), nC()
  }
  t5.update()
}

function nE(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      te = t.mute || t.suppress, tr = t.deaf, e0.eachConnection(tY);
      let e = null != t.guildId && null != t.channelId && null != tS && tS !== t.channelId,
        n = !tm && null == t.channelId;
      return tK(!e && !n && ti), tS = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eg.default.getId() || null != eO.Z.getChannelId() || tK(false, null), e
  }, false)
}

function nb(e) {
  let {
    mute: t
  } = e;
  tt = t, e0.eachConnection(tY)
}

function ny(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tF(t);
  if (t === eP.Yn.DEFAULT && (et.Z.requestPermission(eC.Eu.AUDIO), tn)) returnfalse;
  (r = !i && !r) || (i = false), n || (ts = true), t7({
    mute: r,
    deaf: i
  }, t), e0.eachConnection(tY)
}

function nO(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t7({
    mute: n
  }, t), r || (ts = true), e0.eachConnection(tY)
}

function nv(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eN.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nu(true)
}

function nI(e) {
  let {
    context: t
  } = e;
  t7({
    deaf: !tF(t).deaf
  }, t), e0.eachConnection(tY)
}

function nT(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eg.default.getId()) return;
  let {
    localMutes: r
  } = tF(t);
  r[n] ? delete r[n] : r[n] = true, t7({
    localMutes: r
  }, t), e0.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nS(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === eS.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tF(l),
    m = null != (t = h[c]) && t,
    g = tD.has(c),
    E = u === eS.ZUi.AUTO_ENABLED || u === eS.ZUi.MANUAL_ENABLED;
  ej.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eP.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  ej.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tF(l);
  if (I[c] === eS.ZUi.AUTO_PROBING && u === eS.ZUi.AUTO_ENABLED && (0, ee.Z)(c, p ? eP.fC.AUTO_DISABLE : eP.fC.AUTO_ENABLE, E), I[c] = u, t7({
      videoToggleStateMap: I
    }, l, d), u === eS.ZUi.AUTO_PROBING ? null == (n = eO.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eO.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tw || (ej.info("isAutoDisableAllowed=".concat(tw, " - disabling VideoHealthManager")), null == (a = eO.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tw) return;
    (0, ee.Z)(c, p ? eP.fC.AUTO_DISABLE : eP.fC.AUTO_ENABLE, E), p ? tD.add(c) : tD.delete(c)
  } else v && (g && !p ? (ej.info("disallowing auto-disable for this session because of manual override by user"), tw = false, null == (s = eO.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, ee.Z)(c, eP.fC.MANUAL_REENABLE, E)) : (0, ee.Z)(c, p ? eP.fC.MANUAL_DISABLE : eP.fC.MANUAL_ENABLE, E));
  y && !p && tD.delete(c), p ? h[c] = true : delete h[c], t7({
    disabledLocalVideos: h
  }, l, d), e0.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nA() {
  if (0 === tD.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tF(module);
  tD.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e0.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tD.clear(), t7({
    disabledLocalVideos: exports
  }, module, false)
}

function nC() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tF(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t7({
    videoToggleStateMap: exports
  }, module, false)
}

function nN(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eg.default.getId()) return;
  let i = t === eP.Yn.STREAM ? eP.Yh : eP.Qx,
    {
      localVolumes: a
    } = tF(t);
  r === i ? delete a[n] : a[n] = r, t7({
    localVolumes: a
  }, t), e0.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nR(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tF(t);
  a[n] = {
    left: r,
    right: i
  }, t7({
    localPans: a
  }, t), e0.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nP(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t7({
    mode: n,
    modeOptions: r
  }, t), e0.eachConnection(tV), t5.update()
}

function nD(e) {
  let {
    volume: t
  } = e;
  t7({
    inputVolume: tH(t)
  }), e0.setInputVolume(t)
}

function nw(e) {
  let {
    volume: t
  } = e;
  t7({
    outputVolume: t
  }), e0.setOutputVolume(t)
}

function nx(e) {
  let {
    id: t
  } = e;
  t = ni(e6, t), e5 = performance.now(), t7({
    inputDeviceId: t
  }), e0.setAudioInputDevice(t)
}

function nL(e) {
  let {
    id: t
  } = e;
  t7({
    outputDeviceId: t = ni(e7, t)
  }), e0.setAudioOutputDevice(t)
}

function nM(e) {
  let {
    id: t
  } = e;
  t7({
    videoDeviceId: t = ni(e9, t)
  }), tK()
}

function nj(e) {
  let {
    inputProfile: t
  } = e;
  t7({
    activeInputProfile: t
  });
  let n = tF();
  e0.eachConnection(e => {
    tV(e), tX(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tQ(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), e0.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), t5.update(), nK()
}

function nk(e) {
  return e4 !== e.required && (e4 = e.required, e.required || e0.interact(), true)
}

function nU(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  na(t), nl(n), nc(r)
}

function nG(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t7({
    inputVolume: tH(t),
    outputVolume: n
  })
}

function nB(e) {
  var t;
  let n = tF(),
    r = e0.getAudioSubsystem(),
    i = e0.getAudioLayer(),
    a = ni(e6, n.inputDeviceId),
    o = null == (t = e6[a]) ? true : t.name;
  ec.default.track(eS.rMx.VOICE_PROCESSING, {
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

function nZ(e) {
  let t = t7({
    echoCancellation: e.enabled
  });
  e0.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nK(), nB(e.location)
}

function nF(e) {
  nH(e.enabled)
}

function nV(e) {
  let t = t7({
    sidechainCompressionStrength: e.strength
  });
  e0.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nH(e) {
  let t = t7({
    sidechainCompression: e
  });
  e0.setSidechainCompression(t.sidechainCompression)
}

function nY(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tx.add(n) : tx.delete(n), nW(), nK()
}

function nW() {
  let e = !tx.has("voice_filter_preview") && !tx.has("mic_test");
  e0.setMaybePreprocessMute(module)
}

function nK() {
  let e = tF(),
    t = tx.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tq(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tO,
    c = tx.has("voice_filter") && 1 === tx.size;
  e0.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function nz() {
  var e, t, n, r;
  if (!e0.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  (null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) != null && (null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i) && (tG = true, tU = e0.supports(Chunk65154.AN.GAMESCOPE_CAPTURE))
}

function nq(e) {
  let t = t7({
    noiseSuppression: e.enabled
  });
  e0.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nK(), nB(e.location)
}

function nX(e) {
  let t = t7({
    automaticGainControl: e.enabled
  });
  e0.eachConnection(e => tX(e, t.automaticGainControl)), nK(), nB(e.location)
}

function nQ(e) {
  let t = t7({
    noiseCancellation: e.enabled
  });
  e0.eachConnection(e => tQ(e, t.noiseCancellation)), nK(), nB(e.location)
}

function nJ(e) {
  en.Z.setKrispModelOverride(e.model), c = e.model, nK()
}

function n$(e) {
  var t;
  (0, ef.isWeb)() || (ty = e.enabled, null == (t = e0.setNoiseCancellationEnableStats) || t.call(e0, e.enabled))
}

function n0(e) {
  let t = t7({
    experimentalEncoders: e.enabled
  });
  e0.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function n1(e) {
  t7({
    silenceWarning: e.enabled
  }), t5.update()
}

function n3(e) {
  e0.setDebugLogging(e.enabled)
}

function n2(e) {
  let {
    level: t
  } = e;
  l = t, en.Z.setKrispSuppressionLevel(t)
}

function n4(e) {
  t7({
    videoHook: e.enabled
  })
}

function n8(e) {
  t7({
    experimentalSoundshare2: e.enabled
  })
}

function n5(e) {
  let {
    enabled: t
  } = e;
  t7({
    useSystemScreensharePicker: t
  })
}

function n6(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t7({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  e0.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n7(e) {
  let {
    enabled: t
  } = e;
  t7({
    qos: t
  }), e0.eachConnection(e => e.setQoS(t))
}

function n9() {
  t9()
}

function re(e) {
  let {
    inputDetected: t
  } = e;
  t_ = t, !tp && t_ && (tp = true, t5.update())
}

function rt(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tn) returnfalse;
  tn = n, e0.eachConnection(tY)
}

function rn(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eC.PQ.ACCEPTED;
  switch (n) {
    case eC.Eu.AUDIO:
      tR = true, e0.eachConnection(tY);
      break;
    case eC.Eu.CAMERA:
      !r && ti && tK(false);
      break;
    default:
      returnfalse
  }
}

function rr() {
  return tE || false
}
async function ri() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tE = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tb = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    ej.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), t7({
      noiseCancellation: false
    })
  } finally {
    tg = false
  }
}

function ra() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function ro() {
  !ra() || __OVERLAY__ || tg || tE ? (0, Chunk358085.isWeb)() && e0.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tE = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t7({
    noiseCancellation: false
  }) : (tg = true, ri())
}

function rs(e) {
  let {
    enabled: t
  } = e;
  ec.default.track(eS.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tO ? tO : null,
    enabled: t
  }), t7({
    voiceFilterPlaybackEnabled: t
  })
}

function rl(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t7({
    mostRecentlyRequestedVoiceFilter: t
  }), e0.eachConnection(e => e.setVoiceFilterId(t))
}

function rc() {
  t7({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function ru(e) {
  let {
    voiceFilterId: t
  } = e;
  tI = tO, tT = tv, tO = t, tv = null === t ? null : Date.now()
}

function rd(e) {
  let t = e.bypassEnabled;
  t7({
    bypassSystemInputProcessing: t
  }), e0.setAudioInputBypassSystemProcessing(t), nB(e.location)
}

function rf(e) {
  r_(e.subsystem)
}

function r_(e) {
  e === eP.iA.AUTOMATIC ? (t7({
    automaticAudioSubsystem: true
  }), rp()) : (t7({
    automaticAudioSubsystem: false
  }), e0.setAudioSubsystem(e))
}

function rp() {
  e0.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rh(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tK(i, null), null != t || null == n) {
    tm = false;
    return
  }
  if (tm) return;
  tm = true;
  let a = tF();
  (a.mute || a.deaf) && (t7({
    deaf: false,
    mute: false
  }), e0.eachConnection(tY))
}

function rm(e) {
  let {
    application: t
  } = e;
  e3.add(t.id)
}

function rg(e) {
  let {
    application: t
  } = e;
  e3.delete(t.id)
}

function rE(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e2 = false, e0.eachConnection(tY);
      break;
    case "video":
      tK(false)
  }
}

function rb(e) {
  e2 = e.enabled, e.unmute && t7({
    mute: false,
    deaf: false
  }), e0.eachConnection(tY)
}

function ry(e) {
  let {
    enabled: t
  } = e;
  et.Z.requestPermission(eC.Eu.CAMERA), tK(t)
}

function rO(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = eu.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = nd(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (e0.setClipsSource(null), (0, ef.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && nf(l, c), o = d;
  let f = tB(),
    _ = tF().videoHook;
  e0.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: t1(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: t2(),
      videoHookStaleFrameTimeoutMs: eY,
      graphicsCaptureStaleFrameTimeoutMs: eW,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function rv(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, e0.setClipsSource(null))
}

function rI(e) {
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
      s = null != (t = a.context) ? t : eP.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : eu.Z.getPidFromDesktopSource(i);
    ef.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nd(c), null != e && nf(e, r)), tW(s), tK(s === eP.Yn.STREAM && ti, {
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
    let e = null != (r = a.context) ? r : eP.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eP.Yn.STREAM && ti,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tK(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tK(ti, null)
}

function rT(e) {
  let {
    section: t
  } = e;
  return t === eS.oAB.VOICE && nt(), false
}

function rS() {
  return e0.eachConnection(tJ), false
}

function rA(e) {
  let {
    enabled: t
  } = e;
  t7({
    openH264: t
  }), e0.setH264Enabled(eX || t$()), e0.eachConnection(e => e.setSoftwareH264(t$()))
}

function rC(e) {
  let {
    enabled: t
  } = e, n = t7({
    aecDumpEnabled: t
  });
  e0.setAecDump(n.aecDumpEnabled)
}

function rN(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e1 = Object.values(eP.Yn).reduce((e, n) => {
    let r = n,
      i = eJ();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(ek, e1), ne()
}

function rR(e) {
  let {
    state: t
  } = e, n = w.Z.isEnabled();
  if (t === eS.$7l.BACKGROUND && ti && !n) td = true, tK(false);
  else {
    if (t !== eS.$7l.ACTIVE || !td) returnfalse;
    td = false, tK(true)
  }
  returntrue
}

function rP(e) {
  e0.eachConnection(t => t.setBitRate(e.bitrate))
}

function rD() {
  if (!ti && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tK(false, null)
}

function rw() {
  return !!tA && (tA = false, true)
}

function rx(e) {
  e0.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rL(e) {
  let {
    settings: t
  } = e;
  e0.applyMediaFilterSettings(t).finally(() => {
    tC = false, r.emitChange()
  })
}

function rM() {
  tC = true
}

function rj() {
  tC = false
}

function rk(e) {
  tj = e.enabled
}
class rU extends(u = Chunk442837.ZP.Store) {
  initialize() {
    t0(), t6(), ro(), nC(), tL = {
      [Chunk65154.AN.VIDEO]: e0.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: e0.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: e0.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk615830.Z, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return e0.supports(e)
  }
  supportsInApp(e) {
    return tL[e] || e0.supports(e)
  }
  isSupported() {
    return e0.supported()
  }
  isExperimentalEncodersSupported() {
    return e0.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return e0.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return rr()
  }
  isNoiseCancellationError() {
    return tA
  }
  isAutomaticGainControlSupported() {
    return e0.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !t8() && (e0.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || e0.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return e0.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e0.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return rr()
  }
  isAecDumpSupported() {
    return e0.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return e0.supports(Chunk65154.AN.VIDEO) && e0.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(tS)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && eX && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tF().aecDumpEnabled
  }
  getMediaEngine() {
    return e0
  }
  getVideoComponent() {
    return e0.Video
  }
  getCameraComponent() {
    return e0.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return ty
  }
  isEnabled() {
    return e2
  }
  isMute() {
    return this.isSelfMute() || te
  }
  isDeaf() {
    return this.isSelfDeaf() || tr
  }
  hasContext(e) {
    return null != e1[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tt
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tF(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && tn
  }
  shouldSkipMuteUnmuteSound() {
    return ts
  }
  notifyMuteUnmuteSoundWasSkipped() {
    ts = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tj
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tF(module).deaf
  }
  isVideoEnabled() {
    return ti && tf
  }
  isVideoAvailable() {
    return Object.values(e9).some(e => {
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
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
    return e !== eg.default.getId() && (tF(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return e0.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
    return null != (t = tF(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
    return null != (t = tF(n).videoToggleStateMap[e]) ? t : eS.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
    return t === eP.Yn.DEFAULT && tD.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tD.size > 0
  }
  isMediaFilterSettingLoading() {
    return tC
  }
  isNativeAudioPermissionReady() {
    return tR
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e8
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e5
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
      n = tF(t).localPans[e];
    return null != n ? n : eH
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
      n = t === eP.Yn.STREAM ? eP.Yh : eP.Qx,
      r = tF(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tF().inputVolume
  }
  getOutputVolume() {
    return tF().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tF(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tF(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tO
  }
  getActiveVoiceFilterAppliedAt() {
    return tv
  }
  getPreviousVoiceFilter() {
    return tI
  }
  getPreviousVoiceFilterAppliedAt() {
    return tT
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tF().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tF().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(e1, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eS.pM4.PUSH_TO_TALK && e3.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return ni(e6, tF().inputDeviceId)
  }
  getOutputDeviceId() {
    return ni(e7, tF().outputDeviceId)
  }
  getVideoDeviceId() {
    return ni(e9, tF().videoDeviceId)
  }
  getInputDevices() {
    return e6
  }
  getOutputDevices() {
    return e7
  }
  getVideoDevices() {
    return e9
  }
  getEchoCancellation() {
    let e = tF();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return e0.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tF().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tF().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tF().h265Enabled
  }
  getLoopback() {
    return tx.size > 0
  }
  getLoopbackReasons() {
    return tx
  }
  getNoiseSuppression() {
    let e = tF();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tF();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tF().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tF().noiseCancellation
  }
  getExperimentalEncoders() {
    return tF().experimentalEncoders
  }
  getHardwareEncoding() {
    return eX
  }
  getEnableSilenceWarning() {
    return tF().silenceWarning
  }
  getDebugLogging() {
    return e0.getDebugLogging()
  }
  getQoS() {
    return tF().qos
  }
  getAttenuation() {
    return tF().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tF().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tF().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return t4() && tF().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : e0.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return e0.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tF().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tF(module)
  }
  getState() {
    return {
      settingsByContext: e1,
      inputDevices: e6,
      outputDevices: e7,
      appSupported: tL,
      krispModuleLoaded: tE,
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
    e0.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return e4
  }
  getVideoHook() {
    return tF().videoHook
  }
  supportsVideoHook() {
    return e0.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tF().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return e0.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && e0.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tF().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return e0.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tG
  }
  getUseGamescopeCapture() {
    return tU
  }
  getOpenH264() {
    return tF().openH264
  }
  getEverSpeakingWhileMuted() {
    return tl
  }
  getSpeakingWhileMuted() {
    return tc
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tb
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tF().modeOptions.vadKrispActivationThreshold) ? module : eV
  }
  hasActiveCallKitCall() {
    return tk
  }
  setHasActiveCallKitCall(e) {
    tk = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? e0.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && t2() : (0, Chunk358085.isWindows)() ? e0.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && e0.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    }).loadWasmModule), e0.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!tN && (tN = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      e0.fetchAsyncResources(module).catch(e => {
        ej.warn("DAVE preload failed:", e), ep.Z.captureException(e)
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
    let e = e0.getSupportedSecureFramesProtocolVersion();
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
    return tM
  }
}

function rG(e) {
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
ew(rU, "displayName", "MediaEngineStore");
let rB = r = new rU(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rh,
  VOICE_STATE_UPDATES: nE,
  CONNECTION_OPEN: n_,
  CONNECTION_CLOSED: nh,
  POST_CONNECTION_OPEN: nm,
  RTC_CONNECTION_STATE: ng,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nb,
  AUDIO_TOGGLE_SELF_MUTE: ny,
  AUDIO_SET_SELF_MUTE: nO,
  AUDIO_TOGGLE_SELF_DEAF: nI,
  AUDIO_TOGGLE_LOCAL_MUTE: nT,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nS,
  AUDIO_SET_LOCAL_VOLUME: nN,
  AUDIO_SET_LOCAL_PAN: nR,
  AUDIO_SET_MODE: nP,
  AUDIO_SET_INPUT_VOLUME: nD,
  AUDIO_SET_OUTPUT_VOLUME: nw,
  AUDIO_SET_INPUT_DEVICE: nx,
  AUDIO_SET_OUTPUT_DEVICE: nL,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nj,
  AUDIO_SET_ECHO_CANCELLATION: nZ,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nF,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nV,
  AUDIO_SET_LOOPBACK: nY,
  AUDIO_SET_NOISE_SUPPRESSION: nq,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nX,
  AUDIO_SET_NOISE_CANCELLATION: nQ,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nJ,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: n1,
  AUDIO_SET_DEBUG_LOGGING: n3,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n2,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n$,
  MEDIA_ENGINE_SET_VIDEO_HOOK: n4,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n8,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n5,
  AUDIO_SET_ATTENUATION: n6,
  AUDIO_SET_QOS: n7,
  MEDIA_ENGINE_DEVICES: nU,
  AUDIO_VOLUME_CHANGE: nG,
  AUDIO_RESET: n9,
  AUDIO_INPUT_DETECTED: re,
  AUDIO_SET_SUBSYSTEM: rf,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rd,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rb,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: ry,
  MEDIA_ENGINE_PERMISSION: rE,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rI,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nM,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: n0,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nk,
  USER_SETTINGS_MODAL_INIT: rT,
  USER_SETTINGS_MODAL_SET_SECTION: rT,
  CERTIFIED_DEVICES_SET: rS,
  RPC_APP_CONNECTED: rm,
  RPC_APP_DISCONNECTED: rg,
  OVERLAY_INITIALIZE: np,
  MEDIA_ENGINE_SET_OPEN_H264: rA,
  APP_STATE_UPDATE: rR,
  SET_CHANNEL_BITRATE: rP,
  SET_VAD_PERMISSION: rt,
  SET_NATIVE_PERMISSION: rn,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rx,
  MEDIA_ENGINE_SET_AEC_DUMP: rC,
  MEDIA_ENGINE_RESET_SETTINGS: rN,
  CHANNEL_DELETE: rD,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rw,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rL,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rM,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rj,
  USER_SETTINGS_PROTO_UPDATE: nv,
  CLIPS_INIT: rO,
  CLIPS_SETTINGS_UPDATE: rv,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rk,
  VOICE_FILTER_REQUEST_SWITCH: rl,
  VOICE_FILTER_LOOPBACK_TOGGLE: rs,
  VOICE_FILTER_APPLIED: ru,
  VOICE_FILTER_DOWNLOAD_FAILED: rc,
  VOICE_FILTER_APPLY_FAILED: rc
})