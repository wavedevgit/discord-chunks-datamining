/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rU
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
  Chunk302630 = require("./302630.js"),
  Chunk166884 = require("./166884.js"),
  Chunk422797 = require("./422797.js"),
  Chunk64592 = require("./64592.js"),
  Chunk837968 = require("./837968.js"),
  Chunk529558 = require("./529558.js"),
  Chunk705946 = require("./705946.js"),
  Chunk412412 = require("./412412.js"),
  Chunk441167 = require("./441167.js"),
  Chunk986855 = require("./986855.js"),
  Chunk338336 = require("./338336.js"),
  Chunk751571 = require("./751571.js"),
  Chunk311473 = require("./311473.js"),
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

function eP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ew(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eP(e, t, n[t])
    })
  }
  return e
}

function eD(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ex(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eD(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eL = new Chunk710845.Z("MediaEngineStore"),
  eM = "MediaEngineStore",
  ej = 4,
  ek = 1,
  eU = 1,
  eG = 1,
  eB = 1,
  eZ = .5,
  eF = {
    left: 1,
    right: 1
  },
  eV = 500,
  eH = 5 * Chunk70956.Z.Millis.SECOND,
  eY = false,
  eW = 100,
  eK = 2 * Chunk70956.Z.Millis.SECOND,
  ez = true,
  eq = 0;

function eX() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eY,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eZ,
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
    videoHook: eJ.supports(Chunk65154.AN.VIDEO_HOOK),
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
let eQ = {
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
  eJ = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
eL.enableNativeLogger(true);
let e$ = {},
  e0 = new Set([Chunk65154.Yn.DEFAULT]),
  e1 = eJ.supports(Chunk65154.AN.AUTO_ENABLE),
  e3 = false,
  e2 = Chunk65154.Yn.STREAM,
  e4 = performance.now(),
  e8 = {
    [Chunk65154.w5]: ne("No Input Devices")
  },
  e5 = {
    [Chunk65154.w5]: ne("No Output Devices")
  },
  e6 = {
    [Chunk65154.w5]: ne("No Video Devices")
  },
  e7 = false,
  e9 = false,
  te = false,
  tt = false,
  tn = false,
  tr = Chunk65154.Av,
  ti = Chunk65154.Av,
  ta = false,
  to = false,
  ts = false,
  tl = new Chunk846519.V7,
  tc = false,
  tu = false,
  td = null,
  tf = false,
  t_ = false,
  tp = false,
  th = false,
  tm = false,
  tg = [],
  tE = false,
  tb = null,
  ty = null,
  tO = null,
  tv = null,
  tI = null,
  tT = false,
  tS = false,
  tA = false,
  tC = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tN = false,
  tR = new Set,
  tP = tN,
  tw = new Set,
  tD = {},
  tx = null,
  tL = true,
  tM = false,
  tj = false,
  tk = false;

function tU() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tG() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = e$[module];
  return null == exports && (t = eX(), e$[module] = exports), exports
}

function tB() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tG(r),
    a = eQ[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = ew({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return ex(ew({}, i, a), {
    modeOptions: o
  })
}

function tZ(e) {
  var t, n;
  let r = tB(e.context),
    i = r.mode;
  (0, er.f)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eI.pM4.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eI.pM4.VOICE_ACTIVITY), (0, K.I)(false, false, false), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && rt(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eZ,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tF(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eN.Qx;
  return p().clamp(e, 0, t)
}

function tV(e) {
  let t = tB(e.context),
    n = !e1 || t.mute || t.deaf;
  e.context === eN.Yn.DEFAULT ? n = n || e7 || e9 || te || !ee.Z.didHavePermission(eS.Eu.AUDIO) : e.context === eN.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eN.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tH(e) {
  e !== e2 && (null != a && eJ.setGoLiveSource(null, e2), e2 = e)
}

function tY() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : tn,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), eJ.setGoLiveSource(null, e2)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && eJ.setGoLiveSource(null, e2), tn || i) {
    let e = tB().videoDeviceId;
    tn && module === Chunk65154.w5 && ti === Chunk65154.w5 && tr !== Chunk65154.Av ? e = tr : ti = module, tr = (tn = i) ? nn(e6, module) : Chunk65154.Av, eJ.setVideoInputDevice(tr)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tU(),
        n = tB().videoHook,
        i = t$(),
        a = i ? t0() ? Chunk70722.zj : Chunk70722.ZM : 0,
        s = (0, Chunk358085.isWindows)() && (0, Chunk412412.t)("updateVideo").enabled;
      eJ.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: s,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: t1(),
          videoHookStaleFrameTimeoutMs: eV,
          graphicsCaptureStaleFrameTimeoutMs: eH,
          hdrCaptureMode: exports
        },
        quality: module
      }, e2)
    }
    null != o.cameraSource && eJ.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e2)
  }
}

function tW(e) {
  switch (e) {
    case eN.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case eN.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case eN.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tK(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return ew({
    enabled: e
  }, t)
}

function tz(e, t) {
  e.setAutomaticGainControl(tK(t))
}
async function tq(e, t) {
  if ((0, eu.isIOS)() || (0, eu.isMac)()) {
    let e = await eJ.getSystemMicrophoneMode();
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

function tX(e) {
  let t = tB(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eg.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eg.Z.hasNoiseSuppression(n) || t.noiseSuppression), tz(e, eg.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tq(e, t.noiseCancellation), e.setVoiceFilterId(tb), (0, eu.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tQ() {
  var e;
  return !(0, Chunk64592.f)("MediaEngine").enabled && !(0, Chunk986855.M)("MediaEngine").enabled && (null == (e = tB().openH264) || module)
}

function tJ() {
  eJ.on(Chunk46973.aB.Connection, e => {
    tZ(e), tV(e), tX(e);
    let t = tB();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos), e.setExperimentalEncoders(t.experimentalEncoders), e.setHardwareH264(ez), e.setSoftwareH264(tQ());
    let n = eb.Z.getGuildId(),
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
    i && e.setExperimentFlag(eN.V8.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(eN.V8.PTT_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eN.V8.SKIP_ENCODE, true);
    let l = false,
      c = true;
    if (e.setExperimentFlag(eN.V8.RESET_DECODER_ON_ERRORS, true), l && e.setExperimentFlag(eN.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), c && e.setExperimentFlag(eN.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eN.Yn.STREAM) {
      let t = ni(e5);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = H.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, eu.isWindows)() ? (null == tx ? true : tx.startsWith("NVIDIA")) || (null == tx ? true : tx.startsWith("AMD")) ? e.setExperimentFlag(eN.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eN.V8.SIGNAL_AV1_DECODE, true) : ((0, eu.isMac)() || (0, eu.isLinux)()) && e.setExperimentFlag(eN.V8.SIGNAL_AV1_DECODE, true), (0, eu.isWindows)() && e.setExperimentFlag(eN.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, eu.isWeb)()) {
      let {
        enabled: t
      } = (0, F.A)("MediaEngineStore");
      e.setExperimentFlag(eN.V8.BROWSER_HEVC, t)
    }
    if (eJ.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(eN.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = Q.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eN.ux)
    }
    for (let n of (t = tB(e.context), e.setPostponeDecodeLevel(eW), Object.keys(t.localMutes))) n !== eh.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eh.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
    }), e.context === eN.Yn.DEFAULT && (to = false, ts = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      to = true, ts = true, r.emitChange(), tl.stop(), tl.start(eK, () => {
        ts = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && es.default.track(eI.rMx.VIDEOHOOK_INITIALIZED, ew({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, L.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      eL.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tW(e)
      }), tT = true, es.default.track(eI.rMx.VOICE_PROCESSING, {
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
      eL.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tW(e)
      }), es.default.track(eI.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eN.Yn.DEFAULT,
        mode: eI.pM4.VOICE_ACTIVITY,
        options: ex(ew({}, tB(eN.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      es.default.track(eI.rMx.SDP_ERROR, {
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
    }), e.setBitRate(em.Z.bitrate), e.applyVideoQualityMode(ev.Z.mode), eJ.supports(eN.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && eJ.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled)
  }), eJ.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), eJ.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), eJ.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), eJ.on(Chunk46973.aB.AudioPermission, e => {
    tC = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), eJ.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), eJ.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
    eL.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), eJ.on(Chunk46973.aB.VideoInputInitialized, e => {
    es.default.track(eI.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ec.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eb.Z.getMediaSessionId(),
      rtc_connection_id: eb.Z.getRTCConnectionId()
    })
  }), eJ.on(Chunk46973.aB.AudioInputInitialized, e => {
    es.default.track(eI.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ec.Z.Millis.SECOND),
      rtc_connection_id: eb.Z.getRTCConnectionId()
    })
  }), eJ.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), eJ.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), eJ.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
  }), eJ.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), eJ.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), eJ.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), eJ.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    es.default.track(eI.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), eJ.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? ex(ew({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : ex(ew({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), eJ.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eq++,
          context: n.context
        }
      })
    })
  }), eJ.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rk(e);
    null !== t && es.default.track(eI.rMx.VOICE_QUEUE_METRICS, t)
  }), eJ.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nH(), nW(), t4.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tx = e.gpu_brand)
  }), eJ.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    eJ.eachConnection(tX)
  })
}

function t$() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function t0() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function t1() {
  return (0, Chunk358085.isMac)() && eJ.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function t3() {
  return (0, Chunk358085.isWindows)() && eJ.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eJ.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function t2() {
  return eJ.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let t4 = new class {
  start() {
    this.started || (this.started = true, eJ.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eJ.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tB();
    !tf && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eP(this, "stateChangeTimeout", true), eP(this, "noVoiceTimeout", 5e3), eP(this, "voiceTimeout", 1500), eP(this, "started", false), eP(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (t_ = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function t8() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eM, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), e$ = null != (e = Chunk433517.K.get(eM)) ? module : {}, p().each(e$, e => {
    if (p().defaultsDeep(e, eX()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ep.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ej && (e.vadUseKrispSettingVersion = ej, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eY)
    }
    eJ.supports(eN.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eB && (e.sidechainCompressionSettingVersion = eB, e.sidechainCompression = true), (0, eu.isWeb)() ? e.ncUseKrispjsSettingVersion !== eU && (e.ncUseKrispjsSettingVersion = eU, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== ek && (e.ncUseKrispSettingVersion = ek, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== eG && (e.hardwareH264 = true, e.hardwareEnabledVersion = eG), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), t7()
}

function t5(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tG(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eM, e$), r
}

function t6() {
  Chunk433517.K.remove(eM), location.reload()
}

function t7() {
  let e = tB();
  eJ.setAudioInputDevice(module.inputDeviceId), eJ.setAudioOutputDevice(module.outputDeviceId), tY(), eJ.setInputVolume(module.inputVolume), eJ.setOutputVolume(module.outputVolume), eJ.setH264Enabled(ez || tQ()), eJ.setAv1Enabled(ez), eJ.setH265Enabled(ez), eJ.setAecDump(module.aecDumpEnabled), eJ.setSidechainCompression(module.sidechainCompression), eJ.setSidechainCompressionStrength(module.sidechainCompressionStrength), eJ.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t9() {
  e1 || eJ.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function ne(e) {
  return {
    id: eN.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function nt(e, t) {
  if (0 === e.length) {
    let e = ne(t);
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

function nn(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eN.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function nr(e) {
  let t = e8;
  if (e8 = nt(e, eR.intl.string(eR.t["/QIjDA"])), !p().isEqual(e8, t)) {
    let e = tB(),
      t = nn(e8, e.inputDeviceId);
    eJ.setAudioInputDevice(t)
  }
}

function ni(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function na(e) {
  eJ.eachConnection(t => {
    t.context === eN.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function no(e) {
  let t = e5;
  if (e5 = nt(e, eR.intl.string(eR.t.xlUg0v)), !p().isEqual(e5, t)) {
    let e = tB(),
      n = nn(e5, e.outputDeviceId);
    eJ.setAudioOutputDevice(n);
    let r = ni(t),
      i = ni(e5);
    r !== i && na(i)
  }
}

function ns(e) {
  tu = e.length > 0;
  let t = e6;
  if (e6 = nt(e, eR.intl.string(eR.t.WKWARY)), tn && !p().isEqual(e6, t)) {
    var n;
    let e = true !== e6[tr],
      r = tr === eN.w5 && (null == (n = t[eN.w5]) ? true : n.disabled);
    tY(e || r)
  }
}

function nl() {
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
      } = tB(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], eJ.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], eJ.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t5({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nc(e) {
  if (null == r) return eL.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : el.Z.getAudioPid(e),
      n = "";
    return null != t && (n = el.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nu(e, t) {
  (0, eu.isWindows)() && e > 1 && T.YT(e, {
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

function nd(e) {
  i = e.sessionId, e7 = false, tt = false;
  let t = tB();
  if (t3() && (t2() ? rd(eN.iA.AUTOMATIC) : t.automaticAudioSubsystem && rf()), eJ.supports(eN.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, eu.isDesktop)() ? e = (0, k.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, eu.isIOS)() || (0, eu.isAndroid)()) && (e = (0, U.W)({
      location: "handleConnectionOpen"
    }).enabled), eJ.setOffloadAdmControls(e)
  }(0, ea.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, eu.isDesktop)() && (eo.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eN.Yn.DEFAULT,
    playSoundEffect: true
  }), t5({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), nl()
}

function nf(e) {
  let {
    mediaEngineState: t
  } = e;
  e$ = t.settingsByContext, e8 = t.inputDevices, e5 = t.outputDevices, tD = t.appSupported, tm = t.krispModuleLoaded, s = t.krispVersion, e2 = t.goLiveContext
}

function n_() {
  i = null
}

function np() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.N.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nh(e) {
  switch (e.state) {
    case eI.hes.CONNECTING:
      t9();
      break;
    case eI.hes.RTC_CONNECTING:
      tf = false, t_ = false;
      break;
    case eI.hes.RTC_CONNECTED:
      tY();
      break;
    case eI.hes.DISCONNECTED:
      nT(), nS()
  }
  t4.update()
}

function nm(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e7 = t.mute || t.suppress, tt = t.deaf, eJ.eachConnection(tV);
      let e = null != t.guildId && null != t.channelId && null != tI && tI !== t.channelId,
        n = !tp && null == t.channelId;
      return tY(!e && !n && tn), tI = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eh.default.getId() || null != eb.Z.getChannelId() || tY(false, null), e
  }, false)
}

function ng(e) {
  let {
    mute: t
  } = e;
  e9 = t, eJ.eachConnection(tV)
}

function nE(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tB(t);
  if (t === eN.Yn.DEFAULT && (ee.Z.requestPermission(eS.Eu.AUDIO), te)) returnfalse;
  (r = !i && !r) || (i = false), n || (ta = true), t5({
    mute: r,
    deaf: i
  }, t), eJ.eachConnection(tV)
}

function nb(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t5({
    mute: n
  }, t), r || (ta = true), eJ.eachConnection(tV)
}

function ny(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eA.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nl(true)
}

function nO(e) {
  let {
    context: t
  } = e;
  t5({
    deaf: !tB(t).deaf
  }, t), eJ.eachConnection(tV)
}

function nv(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eh.default.getId()) return;
  let {
    localMutes: r
  } = tB(t);
  r[n] ? delete r[n] : r[n] = true, t5({
    localMutes: r
  }, t), eJ.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nI(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === eI.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tB(l),
    m = null != (t = h[c]) && t,
    g = tR.has(c),
    E = u === eI.ZUi.AUTO_ENABLED || u === eI.ZUi.MANUAL_ENABLED;
  eL.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eN.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  eL.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tB(l);
  if (I[c] === eI.ZUi.AUTO_PROBING && u === eI.ZUi.AUTO_ENABLED && (0, $.Z)(c, p ? eN.fC.AUTO_DISABLE : eN.fC.AUTO_ENABLE, E), I[c] = u, t5({
      videoToggleStateMap: I
    }, l, d), u === eI.ZUi.AUTO_PROBING ? null == (n = eb.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eb.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tP || (eL.info("isAutoDisableAllowed=".concat(tP, " - disabling VideoHealthManager")), null == (a = eb.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tP) return;
    (0, $.Z)(c, p ? eN.fC.AUTO_DISABLE : eN.fC.AUTO_ENABLE, E), p ? tR.add(c) : tR.delete(c)
  } else v && (g && !p ? (eL.info("disallowing auto-disable for this session because of manual override by user"), tP = false, null == (s = eb.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, $.Z)(c, eN.fC.MANUAL_REENABLE, E)) : (0, $.Z)(c, p ? eN.fC.MANUAL_DISABLE : eN.fC.MANUAL_ENABLE, E));
  y && !p && tR.delete(c), p ? h[c] = true : delete h[c], t5({
    disabledLocalVideos: h
  }, l, d), eJ.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nT() {
  if (0 === tR.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tB(module);
  tR.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eJ.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tR.clear(), t5({
    disabledLocalVideos: exports
  }, module, false)
}

function nS() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tB(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t5({
    videoToggleStateMap: exports
  }, module, false)
}

function nA(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eh.default.getId()) return;
  let i = t === eN.Yn.STREAM ? eN.Yh : eN.Qx,
    {
      localVolumes: a
    } = tB(t);
  r === i ? delete a[n] : a[n] = r, t5({
    localVolumes: a
  }, t), eJ.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nC(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tB(t);
  a[n] = {
    left: r,
    right: i
  }, t5({
    localPans: a
  }, t), eJ.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nN(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t5({
    mode: n,
    modeOptions: r
  }, t), eJ.eachConnection(tZ), t4.update()
}

function nR(e) {
  let {
    volume: t
  } = e;
  t5({
    inputVolume: tF(t)
  }), eJ.setInputVolume(t)
}

function nP(e) {
  let {
    volume: t
  } = e;
  t5({
    outputVolume: t
  }), eJ.setOutputVolume(t)
}

function nw(e) {
  let {
    id: t
  } = e;
  t = nn(e8, t), e4 = performance.now(), t5({
    inputDeviceId: t
  }), eJ.setAudioInputDevice(t)
}

function nD(e) {
  let {
    id: t
  } = e;
  t5({
    outputDeviceId: t = nn(e5, t)
  }), eJ.setAudioOutputDevice(t)
}

function nx(e) {
  let {
    id: t
  } = e;
  t5({
    videoDeviceId: t = nn(e6, t)
  }), tY()
}

function nL(e) {
  let {
    inputProfile: t
  } = e;
  t5({
    activeInputProfile: t
  });
  let n = tB();
  eJ.eachConnection(e => {
    tZ(e), tz(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tq(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), eJ.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), t4.update(), nY()
}

function nM(e) {
  return e3 !== e.required && (e3 = e.required, e.required || eJ.interact(), true)
}

function nj(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  nr(t), no(n), ns(r)
}

function nk(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t5({
    inputVolume: tF(t),
    outputVolume: n
  })
}

function nU(e) {
  var t;
  let n = tB(),
    r = eJ.getAudioSubsystem(),
    i = eJ.getAudioLayer(),
    a = nn(e8, n.inputDeviceId),
    o = null == (t = e8[a]) ? true : t.name;
  es.default.track(eI.rMx.VOICE_PROCESSING, {
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

function nG(e) {
  let t = t5({
    echoCancellation: e.enabled
  });
  eJ.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nY(), nU(e.location)
}

function nB(e) {
  nF(e.enabled)
}

function nZ(e) {
  let t = t5({
    sidechainCompressionStrength: e.strength
  });
  eJ.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nF(e) {
  let t = t5({
    sidechainCompression: e
  });
  eJ.setSidechainCompression(t.sidechainCompression)
}

function nV(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tw.add(n) : tw.delete(n), nH(), nY()
}

function nH() {
  let e = !tw.has("voice_filter_preview") && !tw.has("mic_test");
  eJ.setMaybePreprocessMute(module)
}

function nY() {
  let e = tB(),
    t = tw.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tK(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tb,
    c = tw.has("voice_filter") && 1 === tw.size;
  eJ.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function nW() {
  var e, t, n, r;
  if (!eJ.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  if ((null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) == null || !(null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i)) return;
  let {
    enabled: a
  } = await (0, Chunk302630.m)("setGamescopeVaapiEnabled");
  tk = a, a && eJ.supports(Chunk65154.AN.GAMESCOPE_CAPTURE) && (tj = true)
}

function nK(e) {
  let t = t5({
    noiseSuppression: e.enabled
  });
  eJ.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nY(), nU(e.location)
}

function nz(e) {
  let t = t5({
    automaticGainControl: e.enabled
  });
  eJ.eachConnection(e => tz(e, t.automaticGainControl)), nY(), nU(e.location)
}

function nq(e) {
  let t = t5({
    noiseCancellation: e.enabled
  });
  eJ.eachConnection(e => tq(e, t.noiseCancellation)), nY(), nU(e.location)
}

function nX(e) {
  et.Z.setKrispModelOverride(e.model), c = e.model, nY()
}

function nQ(e) {
  var t;
  (0, eu.isWeb)() || (tE = e.enabled, null == (t = eJ.setNoiseCancellationEnableStats) || t.call(eJ, e.enabled))
}

function nJ(e) {
  let t = t5({
    experimentalEncoders: e.enabled
  });
  eJ.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function n$(e) {
  t5({
    silenceWarning: e.enabled
  }), t4.update()
}

function n0(e) {
  eJ.setDebugLogging(e.enabled)
}

function n1(e) {
  let {
    level: t
  } = e;
  l = t, et.Z.setKrispSuppressionLevel(t)
}

function n3(e) {
  t5({
    videoHook: e.enabled
  })
}

function n2(e) {
  t5({
    experimentalSoundshare2: e.enabled
  })
}

function n4(e) {
  let {
    enabled: t
  } = e;
  t5({
    useSystemScreensharePicker: t
  })
}

function n8(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t5({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  eJ.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n5(e) {
  let {
    enabled: t
  } = e;
  t5({
    qos: t
  }), eJ.eachConnection(e => e.setQoS(t))
}

function n6() {
  t6()
}

function n7(e) {
  let {
    inputDetected: t
  } = e;
  td = t, !tf && td && (tf = true, t4.update())
}

function n9(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === te) returnfalse;
  te = n, eJ.eachConnection(tV)
}

function re(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eS.PQ.ACCEPTED;
  switch (n) {
    case eS.Eu.AUDIO:
      tC = true, eJ.eachConnection(tV);
      break;
    case eS.Eu.CAMERA:
      !r && tn && tY(false);
      break;
    default:
      returnfalse
  }
}

function rt() {
  return tm || false
}
async function rn() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tm = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tg = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eL.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), t5({
      noiseCancellation: false
    })
  } finally {
    th = false
  }
}

function rr() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function ri() {
  !rr() || __OVERLAY__ || th || tm ? (0, Chunk358085.isWeb)() && eJ.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tm = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t5({
    noiseCancellation: false
  }) : (th = true, rn())
}

function ra(e) {
  let {
    enabled: t
  } = e;
  es.default.track(eI.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tb ? tb : null,
    enabled: t
  }), t5({
    voiceFilterPlaybackEnabled: t
  })
}

function ro(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t5({
    mostRecentlyRequestedVoiceFilter: t
  }), eJ.eachConnection(e => e.setVoiceFilterId(t))
}

function rs() {
  t5({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rl(e) {
  let {
    voiceFilterId: t
  } = e;
  tO = tb, tv = ty, tb = t, ty = null === t ? null : Date.now()
}

function rc(e) {
  let t = e.bypassEnabled;
  t5({
    bypassSystemInputProcessing: t
  }), eJ.setAudioInputBypassSystemProcessing(t), nU(e.location)
}

function ru(e) {
  rd(e.subsystem)
}

function rd(e) {
  e === eN.iA.AUTOMATIC ? (t5({
    automaticAudioSubsystem: true
  }), rf()) : (t5({
    automaticAudioSubsystem: false
  }), eJ.setAudioSubsystem(e))
}

function rf() {
  eJ.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function r_(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tY(i, null), null != t || null == n) {
    tp = false;
    return
  }
  if (tp) return;
  tp = true;
  let a = tB();
  (a.mute || a.deaf) && (t5({
    deaf: false,
    mute: false
  }), eJ.eachConnection(tV))
}

function rp(e) {
  let {
    application: t
  } = e;
  e0.add(t.id)
}

function rh(e) {
  let {
    application: t
  } = e;
  e0.delete(t.id)
}

function rm(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e1 = false, eJ.eachConnection(tV);
      break;
    case "video":
      tY(false)
  }
}

function rg(e) {
  e1 = e.enabled, e.unmute && t5({
    mute: false,
    deaf: false
  }), eJ.eachConnection(tV)
}

function rE(e) {
  let {
    enabled: t
  } = e;
  ee.Z.requestPermission(eS.Eu.CAMERA), tY(t)
}

function rb(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = el.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = nc(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (eJ.setClipsSource(null), (0, eu.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && nu(l, c), o = d;
  let f = tU(),
    _ = tB().videoHook;
  eJ.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: t$(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: t1(),
      videoHookStaleFrameTimeoutMs: eV,
      graphicsCaptureStaleFrameTimeoutMs: eH,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function ry(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, eJ.setClipsSource(null))
}

function rO(e) {
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
      s = null != (t = a.context) ? t : eN.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : el.Z.getPidFromDesktopSource(i);
    eu.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nc(c), null != e && nu(e, r)), tH(s), tY(s === eN.Yn.STREAM && tn, {
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
    let e = null != (r = a.context) ? r : eN.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eN.Yn.STREAM && tn,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tY(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tY(tn, null)
}

function rv(e) {
  let {
    section: t
  } = e;
  return t === eI.oAB.VOICE && t9(), false
}

function rI() {
  return eJ.eachConnection(tX), false
}

function rT(e) {
  let {
    enabled: t
  } = e;
  t5({
    openH264: t
  }), eJ.setH264Enabled(ez || tQ()), eJ.eachConnection(e => e.setSoftwareH264(tQ()))
}

function rS(e) {
  let {
    enabled: t
  } = e, n = t5({
    aecDumpEnabled: t
  });
  eJ.setAecDump(n.aecDumpEnabled)
}

function rA(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e$ = Object.values(eN.Yn).reduce((e, n) => {
    let r = n,
      i = eX();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(eM, e$), t7()
}

function rC(e) {
  let {
    state: t
  } = e, n = D.Z.isEnabled();
  if (t === eI.$7l.BACKGROUND && tn && !n) tc = true, tY(false);
  else {
    if (t !== eI.$7l.ACTIVE || !tc) returnfalse;
    tc = false, tY(true)
  }
  returntrue
}

function rN(e) {
  eJ.eachConnection(t => t.setBitRate(e.bitrate))
}

function rR() {
  if (!tn && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tY(false, null)
}

function rP() {
  return !!tT && (tT = false, true)
}

function rw(e) {
  eJ.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rD(e) {
  let {
    settings: t
  } = e;
  eJ.applyMediaFilterSettings(t).finally(() => {
    tS = false, r.emitChange()
  })
}

function rx() {
  tS = true
}

function rL() {
  tS = false
}

function rM(e) {
  tL = e.enabled
}
class rj extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tJ(), t8(), ri(), nS(), tD = {
      [Chunk65154.AN.VIDEO]: eJ.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: eJ.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: eJ.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return eJ.supports(e)
  }
  supportsInApp(e) {
    return tD[e] || eJ.supports(e)
  }
  isSupported() {
    return eJ.supported()
  }
  isExperimentalEncodersSupported() {
    return eJ.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eJ.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return rt()
  }
  isNoiseCancellationError() {
    return tT
  }
  isAutomaticGainControlSupported() {
    return eJ.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !t2() && (eJ.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || eJ.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return eJ.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eJ.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return rt()
  }
  isAecDumpSupported() {
    return eJ.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eJ.supports(Chunk65154.AN.VIDEO) && eJ.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(tI)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && ez && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tB().aecDumpEnabled
  }
  getMediaEngine() {
    return eJ
  }
  getVideoComponent() {
    return eJ.Video
  }
  getCameraComponent() {
    return eJ.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return tE
  }
  isEnabled() {
    return e1
  }
  isMute() {
    return this.isSelfMute() || e7
  }
  isDeaf() {
    return this.isSelfDeaf() || tt
  }
  hasContext(e) {
    return null != e$[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && e9
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tB(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && te
  }
  shouldSkipMuteUnmuteSound() {
    return ta
  }
  notifyMuteUnmuteSoundWasSkipped() {
    ta = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tL
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tB(module).deaf
  }
  isVideoEnabled() {
    return tn && tu
  }
  isVideoAvailable() {
    return Object.values(e6).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e2 === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e2 === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT;
    return e !== eh.default.getId() && (tB(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return eJ.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT;
    return null != (t = tB(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT;
    return null != (t = tB(n).videoToggleStateMap[e]) ? t : eI.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT;
    return t === eN.Yn.DEFAULT && tR.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tR.size > 0
  }
  isMediaFilterSettingLoading() {
    return tS
  }
  isNativeAudioPermissionReady() {
    return tC
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e2
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e4
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT,
      n = tB(t).localPans[e];
    return null != n ? n : eF
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT,
      n = t === eN.Yn.STREAM ? eN.Yh : eN.Qx,
      r = tB(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tB().inputVolume
  }
  getOutputVolume() {
    return tB().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tB(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tB(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tb
  }
  getActiveVoiceFilterAppliedAt() {
    return ty
  }
  getPreviousVoiceFilter() {
    return tO
  }
  getPreviousVoiceFilterAppliedAt() {
    return tv
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tB().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tB().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(e$, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eI.pM4.PUSH_TO_TALK && e0.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return nn(e8, tB().inputDeviceId)
  }
  getOutputDeviceId() {
    return nn(e5, tB().outputDeviceId)
  }
  getVideoDeviceId() {
    return nn(e6, tB().videoDeviceId)
  }
  getInputDevices() {
    return e8
  }
  getOutputDevices() {
    return e5
  }
  getVideoDevices() {
    return e6
  }
  getEchoCancellation() {
    let e = tB();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return eJ.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tB().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tB().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tB().h265Enabled
  }
  getLoopback() {
    return tw.size > 0
  }
  getLoopbackReasons() {
    return tw
  }
  getNoiseSuppression() {
    let e = tB();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tB();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tB().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tB().noiseCancellation
  }
  getExperimentalEncoders() {
    return tB().experimentalEncoders
  }
  getHardwareEncoding() {
    return ez
  }
  getEnableSilenceWarning() {
    return tB().silenceWarning
  }
  getDebugLogging() {
    return eJ.getDebugLogging()
  }
  getQoS() {
    return tB().qos
  }
  getAttenuation() {
    return tB().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tB().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tB().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return t3() && tB().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : eJ.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return eJ.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tB().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tB(module)
  }
  getState() {
    return {
      settingsByContext: e$,
      inputDevices: e8,
      outputDevices: e5,
      appSupported: tD,
      krispModuleLoaded: tm,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: e2
    }
  }
  getInputDetected() {
    return td
  }
  getNoInputDetectedNotice() {
    return t_
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eJ.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return e3
  }
  getVideoHook() {
    return tB().videoHook
  }
  supportsVideoHook() {
    return eJ.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tB().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return eJ.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && eJ.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tB().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return eJ.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tk
  }
  getUseGamescopeCapture() {
    return tj
  }
  getOpenH264() {
    return tB().openH264
  }
  getEverSpeakingWhileMuted() {
    return to
  }
  getSpeakingWhileMuted() {
    return ts
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tg
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tB().modeOptions.vadKrispActivationThreshold) ? module : eZ
  }
  hasActiveCallKitCall() {
    return tM
  }
  setHasActiveCallKitCall(e) {
    tM = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? eJ.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && t1() : (0, Chunk358085.isWindows)() ? eJ.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && eJ.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    }).loadWasmModule), eJ.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!tA && (tA = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      eJ.fetchAsyncResources(module).catch(e => {
        eL.warn("DAVE preload failed:", e), ef.Z.captureException(e)
      })
    }
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
    let e = eJ.getSupportedSecureFramesProtocolVersion(),
      t = Chunk529558.m.getCurrentConfig({
        location: "MediaEngineStore"
      });
    return 114 === module && (e = 1), exports.canSupportDaveProtocol && module >= exports.protocolVersionFloor ? module : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tx
  }
}

function rk(e) {
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
eP(rj, "displayName", "MediaEngineStore");
let rU = r = new rj(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: r_,
  VOICE_STATE_UPDATES: nm,
  CONNECTION_OPEN: nd,
  CONNECTION_CLOSED: n_,
  POST_CONNECTION_OPEN: np,
  RTC_CONNECTION_STATE: nh,
  AUDIO_SET_TEMPORARY_SELF_MUTE: ng,
  AUDIO_TOGGLE_SELF_MUTE: nE,
  AUDIO_SET_SELF_MUTE: nb,
  AUDIO_TOGGLE_SELF_DEAF: nO,
  AUDIO_TOGGLE_LOCAL_MUTE: nv,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nI,
  AUDIO_SET_LOCAL_VOLUME: nA,
  AUDIO_SET_LOCAL_PAN: nC,
  AUDIO_SET_MODE: nN,
  AUDIO_SET_INPUT_VOLUME: nR,
  AUDIO_SET_OUTPUT_VOLUME: nP,
  AUDIO_SET_INPUT_DEVICE: nw,
  AUDIO_SET_OUTPUT_DEVICE: nD,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nL,
  AUDIO_SET_ECHO_CANCELLATION: nG,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nB,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nZ,
  AUDIO_SET_LOOPBACK: nV,
  AUDIO_SET_NOISE_SUPPRESSION: nK,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nz,
  AUDIO_SET_NOISE_CANCELLATION: nq,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nX,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: n$,
  AUDIO_SET_DEBUG_LOGGING: n0,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n1,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nQ,
  MEDIA_ENGINE_SET_VIDEO_HOOK: n3,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n2,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n4,
  AUDIO_SET_ATTENUATION: n8,
  AUDIO_SET_QOS: n5,
  MEDIA_ENGINE_DEVICES: nj,
  AUDIO_VOLUME_CHANGE: nk,
  AUDIO_RESET: n6,
  AUDIO_INPUT_DETECTED: n7,
  AUDIO_SET_SUBSYSTEM: ru,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rc,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rg,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rE,
  MEDIA_ENGINE_PERMISSION: rm,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rO,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nx,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nJ,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nM,
  USER_SETTINGS_MODAL_INIT: rv,
  USER_SETTINGS_MODAL_SET_SECTION: rv,
  CERTIFIED_DEVICES_SET: rI,
  RPC_APP_CONNECTED: rp,
  RPC_APP_DISCONNECTED: rh,
  OVERLAY_INITIALIZE: nf,
  MEDIA_ENGINE_SET_OPEN_H264: rT,
  APP_STATE_UPDATE: rC,
  SET_CHANNEL_BITRATE: rN,
  SET_VAD_PERMISSION: n9,
  SET_NATIVE_PERMISSION: re,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rw,
  MEDIA_ENGINE_SET_AEC_DUMP: rS,
  MEDIA_ENGINE_RESET_SETTINGS: rA,
  CHANNEL_DELETE: rR,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rP,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rD,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rx,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rL,
  USER_SETTINGS_PROTO_UPDATE: ny,
  CLIPS_INIT: rb,
  CLIPS_SETTINGS_UPDATE: ry,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rM,
  VOICE_FILTER_REQUEST_SWITCH: ro,
  VOICE_FILTER_LOOPBACK_TOGGLE: ra,
  VOICE_FILTER_APPLIED: rl,
  VOICE_FILTER_DOWNLOAD_FAILED: rs,
  VOICE_FILTER_APPLY_FAILED: rs
})