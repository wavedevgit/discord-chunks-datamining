/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rG
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

function eD(e, t, n) {
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
      eD(e, t, n[t])
    })
  }
  return e
}

function ex(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eL(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ex(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eM = new Chunk710845.Z("MediaEngineStore"),
  ek = "MediaEngineStore",
  ej = 4,
  eU = 1,
  eG = 1,
  eB = 1,
  eZ = 1,
  eF = .5,
  eV = {
    left: 1,
    right: 1
  },
  eH = 500,
  eY = 5 * Chunk70956.Z.Millis.SECOND,
  eW = false,
  eK = 100,
  ez = 2 * Chunk70956.Z.Millis.SECOND,
  eq = true,
  eX = 0;

function eQ() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eW,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eF,
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
    videoHook: e$.supports(Chunk65154.AN.VIDEO_HOOK),
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
let eJ = {
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
  e$ = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
eM.enableNativeLogger(true);
let e0 = {},
  e1 = new Set([Chunk65154.Yn.DEFAULT]),
  e2 = e$.supports(Chunk65154.AN.AUTO_ENABLE),
  e3 = false,
  e4 = Chunk65154.Yn.STREAM,
  e8 = performance.now(),
  e5 = {
    [Chunk65154.w5]: nt("No Input Devices")
  },
  e6 = {
    [Chunk65154.w5]: nt("No Output Devices")
  },
  e7 = {
    [Chunk65154.w5]: nt("No Video Devices")
  },
  e9 = false,
  te = false,
  tt = false,
  tn = false,
  tr = false,
  ti = Chunk65154.Av,
  ta = Chunk65154.Av,
  to = false,
  ts = false,
  tl = false,
  tc = new Chunk846519.V7,
  tu = false,
  td = false,
  tf = null,
  t_ = false,
  tp = false,
  th = false,
  tm = false,
  tg = false,
  tE = [],
  tb = false,
  ty = null,
  tO = null,
  tv = null,
  tI = null,
  tT = null,
  tS = false,
  tA = false,
  tC = false,
  tN = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tR = false,
  tP = new Set,
  tD = tR,
  tw = new Set,
  tx = {},
  tL = null,
  tM = true,
  tk = false,
  tj = false,
  tU = false;

function tG() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tB() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = e0[module];
  return null == exports && (t = eQ(), e0[module] = exports), exports
}

function tZ() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tB(r),
    a = eJ[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = ew({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return eL(ew({}, i, a), {
    modeOptions: o
  })
}

function tF(e) {
  var t, n;
  let r = tZ(e.context),
    i = r.mode;
  e.context === eR.Yn.DEFAULT && ((0, ei.f)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eT.pM4.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eT.pM4.VOICE_ACTIVITY), (0, K.I)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && rn(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eF,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tV(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eR.Qx;
  return p().clamp(e, 0, t)
}

function tH(e) {
  let t = tZ(e.context),
    n = !e2 || t.mute || t.deaf;
  e.context === eR.Yn.DEFAULT ? n = n || e9 || te || tt || !ee.Z.didHavePermission(eA.Eu.AUDIO) : e.context === eR.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eR.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tY(e) {
  e !== e4 && (null != a && e$.setGoLiveSource(null, e4), e4 = e)
}

function tW() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : tr,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), e$.setGoLiveSource(null, e4)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && e$.setGoLiveSource(null, e4), tr || i) {
    let e = tZ().videoDeviceId;
    tr && module === Chunk65154.w5 && ta === Chunk65154.w5 && ti !== Chunk65154.Av ? e = ti : ta = module, ti = (tr = i) ? nr(e7, module) : Chunk65154.Av, e$.setVideoInputDevice(ti)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tG(),
        n = tZ().videoHook,
        i = t0(),
        a = i ? t1() ? Chunk70722.zj : Chunk70722.ZM : 0,
        s = (0, Chunk358085.isWindows)() && (0, Chunk412412.t)("updateVideo").enabled;
      e$.setGoLiveSource({
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
          videoHookStaleFrameTimeoutMs: eH,
          graphicsCaptureStaleFrameTimeoutMs: eY,
          hdrCaptureMode: exports,
          enableGlobalFramePoolLock: (0, Chunk27955.T)({
            location: "updateVideo"
          }).enabled
        },
        quality: module
      }, e4)
    }
    null != o.cameraSource && e$.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e4)
  }
}

function tK(e) {
  switch (e) {
    case eR.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case eR.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case eR.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tz(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return ew({
    enabled: e
  }, t)
}

function tq(e, t) {
  e.setAutomaticGainControl(tz(t))
}
async function tX(e, t) {
  if ((0, ed.isIOS)() || (0, ed.isMac)()) {
    let e = await e$.getSystemMicrophoneMode();
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
  } = (0, Y.$)({
    location: "setNoiseCancellation"
  });
  e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i)
}

function tQ(e) {
  let t = tZ(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eE.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eE.Z.hasNoiseSuppression(n) || t.noiseSuppression), tq(e, eE.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tX(e, t.noiseCancellation), e.setVoiceFilterId(ty), (0, ed.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tJ() {
  var e;
  return !((0, Chunk986855.M)("MediaEngine").enabled || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()) && (null == (e = tZ().openH264) || module)
}

function t$() {
  e$.on(Chunk46973.aB.Connection, e => {
    tF(e), tH(e), tQ(e);
    let t = tZ();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos), e.setExperimentalEncoders(t.experimentalEncoders), e.setHardwareH264(eq), e.setSoftwareH264(tJ());
    let n = ey.Z.getGuildId(),
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
    i && e.setExperimentFlag(eR.V8.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(eR.V8.PTT_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eR.V8.SKIP_ENCODE, true), (0, W.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eR.V8.LOW_LATENCY_RATE_CONTROL, true);
    let l = false,
      c = true;
    if (e.setExperimentFlag(eR.V8.RESET_DECODER_ON_ERRORS, true), l && e.setExperimentFlag(eR.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), c && e.setExperimentFlag(eR.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eR.Yn.STREAM) {
      let t = na(e6);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = H.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, ed.isWindows)() ? (null == tL ? true : tL.startsWith("NVIDIA")) || (null == tL ? true : tL.startsWith("AMD")) ? e.setExperimentFlag(eR.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eR.V8.SIGNAL_AV1_DECODE, true) : ((0, ed.isMac)() || (0, ed.isLinux)()) && e.setExperimentFlag(eR.V8.SIGNAL_AV1_DECODE, true), (0, ed.isWindows)() && e.setExperimentFlag(eR.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, ed.isWeb)()) {
      let {
        enabled: t
      } = (0, F.A)("MediaEngineStore");
      e.setExperimentFlag(eR.V8.BROWSER_HEVC, t)
    }
    if (e$.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(eR.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = Q.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eR.ux)
    }
    for (let n of (t = tZ(e.context), e.setPostponeDecodeLevel(eK), Object.keys(t.localMutes))) n !== em.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== em.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
    }), e.context === eR.Yn.DEFAULT && (ts = false, tl = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      ts = true, tl = true, r.emitChange(), tc.stop(), tc.start(ez, () => {
        tl = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && el.default.track(eT.rMx.VIDEOHOOK_INITIALIZED, ew({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, L.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      eM.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tK(e)
      }), tS = true, el.default.track(eT.rMx.VOICE_PROCESSING, {
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
      eM.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tK(e)
      }), el.default.track(eT.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eR.Yn.DEFAULT,
        mode: eT.pM4.VOICE_ACTIVITY,
        options: eL(ew({}, tZ(eR.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      el.default.track(eT.rMx.SDP_ERROR, {
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
    }), e.setBitRate(eg.Z.bitrate), e.applyVideoQualityMode(eI.Z.mode), e$.supports(eR.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e$.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled)
  }), e$.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), e$.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), e$.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), e$.on(Chunk46973.aB.AudioPermission, e => {
    tN = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), e$.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), e$.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
    eM.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), e$.on(Chunk46973.aB.VideoInputInitialized, e => {
    el.default.track(eT.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * eu.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: ey.Z.getMediaSessionId(),
      rtc_connection_id: ey.Z.getRTCConnectionId()
    })
  }), e$.on(Chunk46973.aB.AudioInputInitialized, e => {
    el.default.track(eT.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * eu.Z.Millis.SECOND),
      rtc_connection_id: ey.Z.getRTCConnectionId()
    })
  }), e$.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), e$.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), e$.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
  }), e$.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), e$.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), e$.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), e$.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    el.default.track(eT.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), e$.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eL(ew({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eL(ew({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), e$.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eX++,
          context: n.context
        }
      })
    })
  }), e$.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rU(e);
    null !== t && el.default.track(eT.rMx.VOICE_QUEUE_METRICS, t)
  }), e$.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nY(), nK(), t8.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tL = e.gpu_brand)
  }), e$.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    e$.eachConnection(tQ)
  })
}

function t0() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function t1() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function t2() {
  return (0, Chunk358085.isMac)() && e$.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function t3() {
  return (0, Chunk358085.isWindows)() && e$.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && e$.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function t4() {
  return e$.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let t8 = new class {
  start() {
    this.started || (this.started = true, e$.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), e$.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tZ();
    !t_ && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eD(this, "stateChangeTimeout", true), eD(this, "noVoiceTimeout", 5e3), eD(this, "voiceTimeout", 1500), eD(this, "started", false), eD(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tp = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function t5() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(ek, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), e0 = null != (e = Chunk433517.K.get(ek)) ? module : {}, p().each(e0, e => {
    if (p().defaultsDeep(e, eQ()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eh.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ej && (e.vadUseKrispSettingVersion = ej, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eW)
    }
    e$.supports(eR.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eZ && (e.sidechainCompressionSettingVersion = eZ, e.sidechainCompression = true), (0, ed.isWeb)() ? e.ncUseKrispjsSettingVersion !== eG && (e.ncUseKrispjsSettingVersion = eG, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eU && (e.ncUseKrispSettingVersion = eU, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== eB && (e.hardwareH264 = true, e.hardwareEnabledVersion = eB), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), t9()
}

function t6(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tB(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ek, e0), r
}

function t7() {
  Chunk433517.K.remove(ek), location.reload()
}

function t9() {
  let e = tZ();
  e$.setAudioInputDevice(module.inputDeviceId), e$.setAudioOutputDevice(module.outputDeviceId), tW(), e$.setInputVolume(module.inputVolume), e$.setOutputVolume(module.outputVolume), e$.setH264Enabled(eq || tJ()), e$.setAv1Enabled(eq), e$.setH265Enabled(eq), e$.setAecDump(module.aecDumpEnabled), e$.setSidechainCompression(module.sidechainCompression), e$.setSidechainCompressionStrength(module.sidechainCompressionStrength), e$.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function ne() {
  e2 || e$.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function nt(e) {
  return {
    id: eR.w5,
    index: 0,
    name: e,
    disabled: true,
    guid: true,
    hardwareId: true,
    containerId: true
  }
}

function nn(e, t) {
  if (0 === e.length) {
    let e = nt(t);
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

function nr(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eR.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function ni(e) {
  let t = e5;
  if (e5 = nn(e, eP.intl.string(eP.t["/QIjDA"])), !p().isEqual(e5, t)) {
    let e = tZ(),
      t = nr(e5, e.inputDeviceId);
    e$.setAudioInputDevice(t)
  }
}

function na(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function no(e) {
  e$.eachConnection(t => {
    t.context === eR.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function ns(e) {
  let t = e6;
  if (e6 = nn(e, eP.intl.string(eP.t.xlUg0v)), !p().isEqual(e6, t)) {
    let e = tZ(),
      n = nr(e6, e.outputDeviceId);
    e$.setAudioOutputDevice(n);
    let r = na(t),
      i = na(e6);
    r !== i && no(i)
  }
}

function nl(e) {
  td = e.length > 0;
  let t = e7;
  if (e7 = nn(e, eP.intl.string(eP.t.WKWARY)), tr && !p().isEqual(e7, t)) {
    var n;
    let e = true !== e7[ti],
      r = ti === eR.w5 && (null == (n = t[eR.w5]) ? true : n.disabled);
    tW(e || r)
  }
}

function nc() {
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
      } = tZ(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], e$.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], e$.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t6({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nu(e) {
  if (null == r) return eM.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : ec.Z.getAudioPid(e),
      n = "";
    return null != t && (n = ec.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nd(e, t) {
  (0, ed.isWindows)() && e > 1 && T.YT(e, {
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

function nf(e) {
  i = e.sessionId, e9 = false, tn = false;
  let t = tZ();
  if (t3() && (t4() ? rf(eR.iA.AUTOMATIC) : t.automaticAudioSubsystem && r_()), e$.supports(eR.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, ed.isDesktop)() ? e = (0, j.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, ed.isIOS)() || (0, ed.isAndroid)()) && (e = (0, U.W)({
      location: "handleConnectionOpen"
    }).enabled), e$.setOffloadAdmControls(e)
  }(0, eo.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, ed.isDesktop)() && (es.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eR.Yn.DEFAULT,
    playSoundEffect: true
  }), t6({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), nc()
}

function n_(e) {
  let {
    mediaEngineState: t
  } = e;
  e0 = t.settingsByContext, e5 = t.inputDevices, e6 = t.outputDevices, tx = t.appSupported, tg = t.krispModuleLoaded, s = t.krispVersion, e4 = t.goLiveContext
}

function np() {
  i = null
}

function nh() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.NJ.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nm(e) {
  switch (e.state) {
    case eT.hes.CONNECTING:
      ne();
      break;
    case eT.hes.RTC_CONNECTING:
      t_ = false, tp = false;
      break;
    case eT.hes.RTC_CONNECTED:
      tW();
      break;
    case eT.hes.DISCONNECTED:
      nS(), nA()
  }
  t8.update()
}

function ng(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e9 = t.mute || t.suppress, tn = t.deaf, e$.eachConnection(tH);
      let e = null != t.guildId && null != t.channelId && null != tT && tT !== t.channelId,
        n = !th && null == t.channelId;
      return tW(!e && !n && tr), tT = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== em.default.getId() || null != ey.Z.getChannelId() || tW(false, null), e
  }, false)
}

function nE(e) {
  let {
    mute: t
  } = e;
  te = t, e$.eachConnection(tH)
}

function nb(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tZ(t);
  if (t === eR.Yn.DEFAULT && (ee.Z.requestPermission(eA.Eu.AUDIO), tt)) returnfalse;
  (r = !i && !r) || (i = false), n || (to = true), t6({
    mute: r,
    deaf: i
  }, t), e$.eachConnection(tH)
}

function ny(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t6({
    mute: n
  }, t), r || (to = true), e$.eachConnection(tH)
}

function nO(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eC.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nc(true)
}

function nv(e) {
  let {
    context: t
  } = e;
  t6({
    deaf: !tZ(t).deaf
  }, t), e$.eachConnection(tH)
}

function nI(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === em.default.getId()) return;
  let {
    localMutes: r
  } = tZ(t);
  r[n] ? delete r[n] : r[n] = true, t6({
    localMutes: r
  }, t), e$.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nT(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === eT.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tZ(l),
    m = null != (t = h[c]) && t,
    g = tP.has(c),
    E = u === eT.ZUi.AUTO_ENABLED || u === eT.ZUi.MANUAL_ENABLED;
  eM.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eR.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  eM.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tZ(l);
  if (I[c] === eT.ZUi.AUTO_PROBING && u === eT.ZUi.AUTO_ENABLED && (0, $.Z)(c, p ? eR.fC.AUTO_DISABLE : eR.fC.AUTO_ENABLE, E), I[c] = u, t6({
      videoToggleStateMap: I
    }, l, d), u === eT.ZUi.AUTO_PROBING ? null == (n = ey.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = ey.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tD || (eM.info("isAutoDisableAllowed=".concat(tD, " - disabling VideoHealthManager")), null == (a = ey.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tD) return;
    (0, $.Z)(c, p ? eR.fC.AUTO_DISABLE : eR.fC.AUTO_ENABLE, E), p ? tP.add(c) : tP.delete(c)
  } else v && (g && !p ? (eM.info("disallowing auto-disable for this session because of manual override by user"), tD = false, null == (s = ey.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, $.Z)(c, eR.fC.MANUAL_REENABLE, E)) : (0, $.Z)(c, p ? eR.fC.MANUAL_DISABLE : eR.fC.MANUAL_ENABLE, E));
  y && !p && tP.delete(c), p ? h[c] = true : delete h[c], t6({
    disabledLocalVideos: h
  }, l, d), e$.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nS() {
  if (0 === tP.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tZ(module);
  tP.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e$.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tP.clear(), t6({
    disabledLocalVideos: exports
  }, module, false)
}

function nA() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tZ(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t6({
    videoToggleStateMap: exports
  }, module, false)
}

function nC(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === em.default.getId()) return;
  let i = t === eR.Yn.STREAM ? eR.Yh : eR.Qx,
    {
      localVolumes: a
    } = tZ(t);
  r === i ? delete a[n] : a[n] = r, t6({
    localVolumes: a
  }, t), e$.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nN(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tZ(t);
  a[n] = {
    left: r,
    right: i
  }, t6({
    localPans: a
  }, t), e$.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nR(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t6({
    mode: n,
    modeOptions: r
  }, t), e$.eachConnection(tF), t8.update()
}

function nP(e) {
  let {
    volume: t
  } = e;
  t6({
    inputVolume: tV(t)
  }), e$.setInputVolume(t)
}

function nD(e) {
  let {
    volume: t
  } = e;
  t6({
    outputVolume: t
  }), e$.setOutputVolume(t)
}

function nw(e) {
  let {
    id: t
  } = e;
  t = nr(e5, t), e8 = performance.now(), t6({
    inputDeviceId: t
  }), e$.setAudioInputDevice(t)
}

function nx(e) {
  let {
    id: t
  } = e;
  t6({
    outputDeviceId: t = nr(e6, t)
  }), e$.setAudioOutputDevice(t)
}

function nL(e) {
  let {
    id: t
  } = e;
  t6({
    videoDeviceId: t = nr(e7, t)
  }), tW()
}

function nM(e) {
  let {
    inputProfile: t
  } = e;
  t6({
    activeInputProfile: t
  });
  let n = tZ();
  e$.eachConnection(e => {
    tF(e), tq(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tX(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), e$.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), t8.update(), nW()
}

function nk(e) {
  return e3 !== e.required && (e3 = e.required, e.required || e$.interact(), true)
}

function nj(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  ni(t), ns(n), nl(r)
}

function nU(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t6({
    inputVolume: tV(t),
    outputVolume: n
  })
}

function nG(e) {
  var t;
  let n = tZ(),
    r = e$.getAudioSubsystem(),
    i = e$.getAudioLayer(),
    a = nr(e5, n.inputDeviceId),
    o = null == (t = e5[a]) ? true : t.name;
  el.default.track(eT.rMx.VOICE_PROCESSING, {
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

function nB(e) {
  let t = t6({
    echoCancellation: e.enabled
  });
  e$.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nW(), nG(e.location)
}

function nZ(e) {
  nV(e.enabled)
}

function nF(e) {
  let t = t6({
    sidechainCompressionStrength: e.strength
  });
  e$.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nV(e) {
  let t = t6({
    sidechainCompression: e
  });
  e$.setSidechainCompression(t.sidechainCompression)
}

function nH(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tw.add(n) : tw.delete(n), nY(), nW()
}

function nY() {
  let e = !tw.has("voice_filter_preview") && !tw.has("mic_test");
  e$.setMaybePreprocessMute(module)
}

function nW() {
  let e = tZ(),
    t = tw.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tz(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== ty,
    c = tw.has("voice_filter") && 1 === tw.size;
  e$.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function nK() {
  var e, t, n, r;
  if (!e$.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  (null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) != null && (null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i) && (tU = true, tj = e$.supports(Chunk65154.AN.GAMESCOPE_CAPTURE))
}

function nz(e) {
  let t = t6({
    noiseSuppression: e.enabled
  });
  e$.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nW(), nG(e.location)
}

function nq(e) {
  let t = t6({
    automaticGainControl: e.enabled
  });
  e$.eachConnection(e => tq(e, t.automaticGainControl)), nW(), nG(e.location)
}

function nX(e) {
  let t = t6({
    noiseCancellation: e.enabled
  });
  e$.eachConnection(e => tX(e, t.noiseCancellation)), nW(), nG(e.location)
}

function nQ(e) {
  et.Z.setKrispModelOverride(e.model), c = e.model, nW()
}

function nJ(e) {
  var t;
  (0, ed.isWeb)() || (tb = e.enabled, null == (t = e$.setNoiseCancellationEnableStats) || t.call(e$, e.enabled))
}

function n$(e) {
  let t = t6({
    experimentalEncoders: e.enabled
  });
  e$.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function n0(e) {
  t6({
    silenceWarning: e.enabled
  }), t8.update()
}

function n1(e) {
  e$.setDebugLogging(e.enabled)
}

function n2(e) {
  let {
    level: t
  } = e;
  l = t, et.Z.setKrispSuppressionLevel(t)
}

function n3(e) {
  t6({
    videoHook: e.enabled
  })
}

function n4(e) {
  t6({
    experimentalSoundshare2: e.enabled
  })
}

function n8(e) {
  let {
    enabled: t
  } = e;
  t6({
    useSystemScreensharePicker: t
  })
}

function n5(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t6({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  e$.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n6(e) {
  let {
    enabled: t
  } = e;
  t6({
    qos: t
  }), e$.eachConnection(e => e.setQoS(t))
}

function n7() {
  t7()
}

function n9(e) {
  let {
    inputDetected: t
  } = e;
  tf = t, !t_ && tf && (t_ = true, t8.update())
}

function re(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tt) returnfalse;
  tt = n, e$.eachConnection(tH)
}

function rt(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eA.PQ.ACCEPTED;
  switch (n) {
    case eA.Eu.AUDIO:
      tN = true, e$.eachConnection(tH);
      break;
    case eA.Eu.CAMERA:
      !r && tr && tW(false);
      break;
    default:
      returnfalse
  }
}

function rn() {
  return tg || false
}
async function rr() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tg = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tE = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eM.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), t6({
      noiseCancellation: false
    })
  } finally {
    tm = false
  }
}

function ri() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function ra() {
  !ri() || __OVERLAY__ || tm || tg ? (0, Chunk358085.isWeb)() && e$.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tg = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t6({
    noiseCancellation: false
  }) : (tm = true, rr())
}

function ro(e) {
  let {
    enabled: t
  } = e;
  el.default.track(eT.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != ty ? ty : null,
    enabled: t
  }), t6({
    voiceFilterPlaybackEnabled: t
  })
}

function rs(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t6({
    mostRecentlyRequestedVoiceFilter: t
  }), e$.eachConnection(e => e.setVoiceFilterId(t))
}

function rl() {
  t6({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rc(e) {
  let {
    voiceFilterId: t
  } = e;
  tv = ty, tI = tO, ty = t, tO = null === t ? null : Date.now()
}

function ru(e) {
  let t = e.bypassEnabled;
  t6({
    bypassSystemInputProcessing: t
  }), e$.setAudioInputBypassSystemProcessing(t), nG(e.location)
}

function rd(e) {
  rf(e.subsystem)
}

function rf(e) {
  e === eR.iA.AUTOMATIC ? (t6({
    automaticAudioSubsystem: true
  }), r_()) : (t6({
    automaticAudioSubsystem: false
  }), e$.setAudioSubsystem(e))
}

function r_() {
  e$.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rp(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tW(i, null), null != t || null == n) {
    th = false;
    return
  }
  if (th) return;
  th = true;
  let a = tZ();
  (a.mute || a.deaf) && (t6({
    deaf: false,
    mute: false
  }), e$.eachConnection(tH))
}

function rh(e) {
  let {
    application: t
  } = e;
  e1.add(t.id)
}

function rm(e) {
  let {
    application: t
  } = e;
  e1.delete(t.id)
}

function rg(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e2 = false, e$.eachConnection(tH);
      break;
    case "video":
      tW(false)
  }
}

function rE(e) {
  e2 = e.enabled, e.unmute && t6({
    mute: false,
    deaf: false
  }), e$.eachConnection(tH)
}

function rb(e) {
  let {
    enabled: t
  } = e;
  ee.Z.requestPermission(eA.Eu.CAMERA), tW(t)
}

function ry(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = ec.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = nu(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (e$.setClipsSource(null), (0, ed.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && nd(l, c), o = d;
  let f = tG(),
    _ = tZ().videoHook;
  e$.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: t0(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: t2(),
      videoHookStaleFrameTimeoutMs: eH,
      graphicsCaptureStaleFrameTimeoutMs: eY,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function rO(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, e$.setClipsSource(null))
}

function rv(e) {
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
      s = null != (t = a.context) ? t : eR.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : ec.Z.getPidFromDesktopSource(i);
    ed.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nu(c), null != e && nd(e, r)), tY(s), tW(s === eR.Yn.STREAM && tr, {
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
    let e = null != (r = a.context) ? r : eR.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eR.Yn.STREAM && tr,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tW(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tW(tr, null)
}

function rI(e) {
  let {
    section: t
  } = e;
  return t === eT.oAB.VOICE && ne(), false
}

function rT() {
  return e$.eachConnection(tQ), false
}

function rS(e) {
  let {
    enabled: t
  } = e;
  t6({
    openH264: t
  }), e$.setH264Enabled(eq || tJ()), e$.eachConnection(e => e.setSoftwareH264(tJ()))
}

function rA(e) {
  let {
    enabled: t
  } = e, n = t6({
    aecDumpEnabled: t
  });
  e$.setAecDump(n.aecDumpEnabled)
}

function rC(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e0 = Object.values(eR.Yn).reduce((e, n) => {
    let r = n,
      i = eQ();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(ek, e0), t9()
}

function rN(e) {
  let {
    state: t
  } = e, n = w.Z.isEnabled();
  if (t === eT.$7l.BACKGROUND && tr && !n) tu = true, tW(false);
  else {
    if (t !== eT.$7l.ACTIVE || !tu) returnfalse;
    tu = false, tW(true)
  }
  returntrue
}

function rR(e) {
  e$.eachConnection(t => t.setBitRate(e.bitrate))
}

function rP() {
  if (!tr && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tW(false, null)
}

function rD() {
  return !!tS && (tS = false, true)
}

function rw(e) {
  e$.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rx(e) {
  let {
    settings: t
  } = e;
  e$.applyMediaFilterSettings(t).finally(() => {
    tA = false, r.emitChange()
  })
}

function rL() {
  tA = true
}

function rM() {
  tA = false
}

function rk(e) {
  tM = e.enabled
}
class rj extends(u = Chunk442837.ZP.Store) {
  initialize() {
    t$(), t5(), ra(), nA(), tx = {
      [Chunk65154.AN.VIDEO]: e$.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: e$.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: e$.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk615830.Z, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return e$.supports(e)
  }
  supportsInApp(e) {
    return tx[e] || e$.supports(e)
  }
  isSupported() {
    return e$.supported()
  }
  isExperimentalEncodersSupported() {
    return e$.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return e$.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return rn()
  }
  isNoiseCancellationError() {
    return tS
  }
  isAutomaticGainControlSupported() {
    return e$.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !t4() && (e$.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || e$.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return e$.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e$.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return rn()
  }
  isAecDumpSupported() {
    return e$.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return e$.supports(Chunk65154.AN.VIDEO) && e$.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(tT)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && eq && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tZ().aecDumpEnabled
  }
  getMediaEngine() {
    return e$
  }
  getVideoComponent() {
    return e$.Video
  }
  getCameraComponent() {
    return e$.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return tb
  }
  isEnabled() {
    return e2
  }
  isMute() {
    return this.isSelfMute() || e9
  }
  isDeaf() {
    return this.isSelfDeaf() || tn
  }
  hasContext(e) {
    return null != e0[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && te
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tZ(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && tt
  }
  shouldSkipMuteUnmuteSound() {
    return to
  }
  notifyMuteUnmuteSoundWasSkipped() {
    to = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tM
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tZ(module).deaf
  }
  isVideoEnabled() {
    return tr && td
  }
  isVideoAvailable() {
    return Object.values(e7).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e4 === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e4 === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
    return e !== em.default.getId() && (tZ(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return e$.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
    return null != (t = tZ(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
    return null != (t = tZ(n).videoToggleStateMap[e]) ? t : eT.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
    return t === eR.Yn.DEFAULT && tP.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tP.size > 0
  }
  isMediaFilterSettingLoading() {
    return tA
  }
  isNativeAudioPermissionReady() {
    return tN
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e4
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e8
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT,
      n = tZ(t).localPans[e];
    return null != n ? n : eV
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT,
      n = t === eR.Yn.STREAM ? eR.Yh : eR.Qx,
      r = tZ(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tZ().inputVolume
  }
  getOutputVolume() {
    return tZ().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tZ(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tZ(module).modeOptions
  }
  getActiveVoiceFilter() {
    return ty
  }
  getActiveVoiceFilterAppliedAt() {
    return tO
  }
  getPreviousVoiceFilter() {
    return tv
  }
  getPreviousVoiceFilterAppliedAt() {
    return tI
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tZ().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tZ().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(e0, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eT.pM4.PUSH_TO_TALK && e1.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return nr(e5, tZ().inputDeviceId)
  }
  getOutputDeviceId() {
    return nr(e6, tZ().outputDeviceId)
  }
  getVideoDeviceId() {
    return nr(e7, tZ().videoDeviceId)
  }
  getInputDevices() {
    return e5
  }
  getOutputDevices() {
    return e6
  }
  getVideoDevices() {
    return e7
  }
  getEchoCancellation() {
    let e = tZ();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return e$.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tZ().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tZ().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tZ().h265Enabled
  }
  getLoopback() {
    return tw.size > 0
  }
  getLoopbackReasons() {
    return tw
  }
  getNoiseSuppression() {
    let e = tZ();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tZ();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tZ().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tZ().noiseCancellation
  }
  getExperimentalEncoders() {
    return tZ().experimentalEncoders
  }
  getHardwareEncoding() {
    return eq
  }
  getEnableSilenceWarning() {
    return tZ().silenceWarning
  }
  getDebugLogging() {
    return e$.getDebugLogging()
  }
  getQoS() {
    return tZ().qos
  }
  getAttenuation() {
    return tZ().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tZ().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tZ().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return t3() && tZ().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : e$.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return e$.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tZ().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tZ(module)
  }
  getState() {
    return {
      settingsByContext: e0,
      inputDevices: e5,
      outputDevices: e6,
      appSupported: tx,
      krispModuleLoaded: tg,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: e4
    }
  }
  getInputDetected() {
    return tf
  }
  getNoInputDetectedNotice() {
    return tp
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    e$.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return e3
  }
  getVideoHook() {
    return tZ().videoHook
  }
  supportsVideoHook() {
    return e$.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tZ().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return e$.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && e$.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tZ().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return e$.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tU
  }
  getUseGamescopeCapture() {
    return tj
  }
  getOpenH264() {
    return tZ().openH264
  }
  getEverSpeakingWhileMuted() {
    return ts
  }
  getSpeakingWhileMuted() {
    return tl
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tE
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tZ().modeOptions.vadKrispActivationThreshold) ? module : eF
  }
  hasActiveCallKitCall() {
    return tk
  }
  setHasActiveCallKitCall(e) {
    tk = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? e$.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && t2() : (0, Chunk358085.isWindows)() ? e$.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && e$.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    }).loadWasmModule), e$.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!tC && (tC = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      e$.fetchAsyncResources(module).catch(e => {
        eM.warn("DAVE preload failed:", e), e_.Z.captureException(e)
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
    let e = e$.getSupportedSecureFramesProtocolVersion();
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
    return tL
  }
}

function rU(e) {
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
eD(rj, "displayName", "MediaEngineStore");
let rG = r = new rj(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rp,
  VOICE_STATE_UPDATES: ng,
  CONNECTION_OPEN: nf,
  CONNECTION_CLOSED: np,
  POST_CONNECTION_OPEN: nh,
  RTC_CONNECTION_STATE: nm,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nE,
  AUDIO_TOGGLE_SELF_MUTE: nb,
  AUDIO_SET_SELF_MUTE: ny,
  AUDIO_TOGGLE_SELF_DEAF: nv,
  AUDIO_TOGGLE_LOCAL_MUTE: nI,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nT,
  AUDIO_SET_LOCAL_VOLUME: nC,
  AUDIO_SET_LOCAL_PAN: nN,
  AUDIO_SET_MODE: nR,
  AUDIO_SET_INPUT_VOLUME: nP,
  AUDIO_SET_OUTPUT_VOLUME: nD,
  AUDIO_SET_INPUT_DEVICE: nw,
  AUDIO_SET_OUTPUT_DEVICE: nx,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nM,
  AUDIO_SET_ECHO_CANCELLATION: nB,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nZ,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nF,
  AUDIO_SET_LOOPBACK: nH,
  AUDIO_SET_NOISE_SUPPRESSION: nz,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nq,
  AUDIO_SET_NOISE_CANCELLATION: nX,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nQ,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: n0,
  AUDIO_SET_DEBUG_LOGGING: n1,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n2,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nJ,
  MEDIA_ENGINE_SET_VIDEO_HOOK: n3,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n4,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n8,
  AUDIO_SET_ATTENUATION: n5,
  AUDIO_SET_QOS: n6,
  MEDIA_ENGINE_DEVICES: nj,
  AUDIO_VOLUME_CHANGE: nU,
  AUDIO_RESET: n7,
  AUDIO_INPUT_DETECTED: n9,
  AUDIO_SET_SUBSYSTEM: rd,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: ru,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rE,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rb,
  MEDIA_ENGINE_PERMISSION: rg,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rv,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nL,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: n$,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nk,
  USER_SETTINGS_MODAL_INIT: rI,
  USER_SETTINGS_MODAL_SET_SECTION: rI,
  CERTIFIED_DEVICES_SET: rT,
  RPC_APP_CONNECTED: rh,
  RPC_APP_DISCONNECTED: rm,
  OVERLAY_INITIALIZE: n_,
  MEDIA_ENGINE_SET_OPEN_H264: rS,
  APP_STATE_UPDATE: rN,
  SET_CHANNEL_BITRATE: rR,
  SET_VAD_PERMISSION: re,
  SET_NATIVE_PERMISSION: rt,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rw,
  MEDIA_ENGINE_SET_AEC_DUMP: rA,
  MEDIA_ENGINE_RESET_SETTINGS: rC,
  CHANNEL_DELETE: rP,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rD,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rx,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rL,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rM,
  USER_SETTINGS_PROTO_UPDATE: nO,
  CLIPS_INIT: ry,
  CLIPS_SETTINGS_UPDATE: rO,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rk,
  VOICE_FILTER_REQUEST_SWITCH: rs,
  VOICE_FILTER_LOOPBACK_TOGGLE: ro,
  VOICE_FILTER_APPLIED: rc,
  VOICE_FILTER_DOWNLOAD_FAILED: rl,
  VOICE_FILTER_APPLY_FAILED: rl
})