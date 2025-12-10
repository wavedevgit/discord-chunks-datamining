/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rV
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

function ex(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ex(e, t, n[t])
    })
  }
  return e
}

function ej(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ej(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ek = new Chunk710845.Z("MediaEngineStore"),
  eU = "MediaEngineStore",
  eG = 4,
  eZ = 1,
  eB = 1,
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
  eQ = true,
  eX = 0;

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
    videoHook: e0.supports(Chunk65154.AN.VIDEO_HOOK),
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
ek.enableNativeLogger(true);
let e1 = {},
  e3 = new Set([Chunk65154.Yn.DEFAULT]),
  e2 = e0.supports(Chunk65154.AN.AUTO_ENABLE),
  e4 = false,
  e5 = Chunk65154.Yn.STREAM,
  e8 = performance.now(),
  e6 = {
    [Chunk65154.w5]: no("No Input Devices")
  },
  e7 = {
    [Chunk65154.w5]: no("No Output Devices")
  },
  e9 = {
    [Chunk65154.w5]: no("No Video Devices")
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
  tp = null,
  t_ = false,
  tm = false,
  th = false,
  tg = false,
  tE = false,
  tb = [],
  ty = false,
  tO = null,
  tv = null,
  tS = null,
  tI = null,
  tT = null,
  tC = false,
  tA = false,
  tN = false,
  tP = null,
  tR = null,
  tD = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tw = false,
  tx = new Set,
  tL = tw,
  tj = new Set,
  tM = {},
  tk = null,
  tU = true,
  tG = false,
  tZ = false,
  tB = false,
  tF = false;

function tV() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}
async function tH() {
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

function tY() {
  return null != tR ? tR : "undefined" != typeof window ? tR = tH().then(e => (tP = e, e)) : Promise.resolve(false)
}

function tW() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = e1[module];
  return null == exports && (t = eJ(), e1[module] = exports), exports
}

function tK() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tW(r),
    a = e$[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = eL({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return eM(eL({}, i, a), {
    modeOptions: o
  })
}

function tz(e) {
  var t, n;
  let r = tK(e.context),
    i = r.mode;
  e.context === eD.Yn.DEFAULT && ((0, eo.f)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eC.pM4.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eC.pM4.VOICE_ACTIVITY), (0, Q.I)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && ro(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eV,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tq(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Qx;
  return _().clamp(e, 0, t)
}

function tQ(e) {
  let t = tK(e.context),
    n = !e2 || t.mute || t.deaf;
  e.context === eD.Yn.DEFAULT ? n = n || te || tt || tn || !en.Z.didHavePermission(eN.Eu.AUDIO) : e.context === eD.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eD.Yn.DEFAULT && T.Z.updateNativeMute()
}

function tX(e) {
  e !== e5 && (null != a && e0.setGoLiveSource(null, e5), e5 = e)
}

function tJ() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : ti,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), e0.setGoLiveSource(null, e5)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && e0.setGoLiveSource(null, e5), ti || i) {
    let e = tK().videoDeviceId;
    ti && module === Chunk65154.w5 && to === Chunk65154.w5 && ta !== Chunk65154.Av ? e = ta : to = module, ta = (ti = i) ? nl(e9, module) : Chunk65154.Av, e0.setVideoInputDevice(ta)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tV(),
        n = tK().videoHook,
        i = t5(),
        a = i ? t8() ? Chunk70722.zj : Chunk70722.ZM : 0,
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
          allowScreenCaptureKit: t6(),
          videoHookStaleFrameTimeoutMs: eY,
          graphicsCaptureStaleFrameTimeoutMs: eW,
          hdrCaptureMode: exports,
          enableGlobalFramePoolLock: (0, Chunk27955.T)({
            location: "updateVideo"
          }).enabled
        },
        quality: module
      }, e5)
    }
    null != o.cameraSource && e0.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e5)
  }
}

function t$(e) {
  switch (e) {
    case eD.H3.CPU_OVERUSE:
      return D.Nk.NoiseCancellerCpuOveruse;
    case eD.H3.FAILED:
      return D.Nk.NoiseCancellerFailed;
    case eD.H3.VAD_CPU_OVERUSE:
      return D.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function t0(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eL({
    enabled: e
  }, t)
}

function t1(e, t) {
  e.setAutomaticGainControl(t0(t))
}
async function t3(e, t) {
  if ((0, ep.isIOS)() || (0, ep.isMac)()) {
    let e = await e0.getSystemMicrophoneMode();
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

function t2(e) {
  let t = tK(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ey.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ey.Z.hasNoiseSuppression(n) || t.noiseSuppression), t1(e, ey.Z.hasAutomaticGainControl(n) || t.automaticGainControl), t3(e, t.noiseCancellation), e.setVoiceFilterId(tO), (0, ep.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function t4() {
  e0.on(Chunk46973.aB.Connection, e => {
    tz(e), tQ(e), t2(e);
    let t = tK();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos), (0, K.D)({
      location: "setupMediaEngine"
    }).enabled && (e.setExperimentFlag(eD.V8.H265_HARDWARE_ONLY, true), (0, ep.isWindows)() ? tY().then(t => {
      e.setExperimentFlag(eD.V8.H265_HARDWARE_DECODE_AVAILABLE, t)
    }) : (0, ep.isMac)() && e.setExperimentFlag(eD.V8.H265_HARDWARE_DECODE_AVAILABLE, true));
    let n = ev.Z.getGuildId(),
      {
        muteBeforeProcessing: i,
        pttBeforeProcessing: o,
        skipEncode: s
      } = (null != n ? V.Z : F.Z).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != n ? n : true
      }, {
        autoTrackExposure: true
      });
    i && e.setExperimentFlag(eD.V8.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(eD.V8.PTT_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eD.V8.SKIP_ENCODE, true), (0, q.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eD.V8.LOW_LATENCY_RATE_CONTROL, true);
    let l = false,
      c = true;
    if (e.setExperimentFlag(eD.V8.RESET_DECODER_ON_ERRORS, true), l && e.setExperimentFlag(eD.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), c && e.setExperimentFlag(eD.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eD.Yn.STREAM) {
      let t = nu(e7);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = W.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, ep.isWindows)() ? (null == tk ? true : tk.startsWith("NVIDIA")) || (null == tk ? true : tk.startsWith("AMD")) ? e.setExperimentFlag(eD.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eD.V8.SIGNAL_AV1_DECODE, true) : ((0, ep.isMac)() || (0, ep.isLinux)()) && e.setExperimentFlag(eD.V8.SIGNAL_AV1_DECODE, true), (0, ep.isWindows)() && e.setExperimentFlag(eD.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, ep.isWeb)()) {
      let {
        enabled: t
      } = (0, H.A)("MediaEngineStore");
      e.setExperimentFlag(eD.V8.BROWSER_HEVC, t)
    }
    if (e0.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, A.Z)(r)) {
      let {
        enableViewerClipping: t
      } = ee.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eD.ux)
    }
    for (let n of (t = tK(e.context), e.setPostponeDecodeLevel(ez), Object.keys(t.localMutes))) n !== eE.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== eE.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
    }), e.context === eD.Yn.DEFAULT && (tl = false, tc = false, e.on(b.Sh.SpeakingWhileMuted, () => {
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
      (null == a ? true : a.desktopSource) != null && eu.default.track(eC.rMx.VIDEOHOOK_INITIALIZED, eL({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, j.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      ek.warn("noisecancellererror event: ".concat(e)), (0, D.kr)({
        type: D.u.NOISE_CANCELLER_ERROR,
        underlyingError: t$(e)
      }), tC = true, eu.default.track(eC.rMx.VOICE_PROCESSING, {
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
      ek.warn("voiceactivitydetectorerror event: ".concat(e)), (0, D.kr)({
        type: D.u.NOISE_CANCELLER_ERROR,
        underlyingError: t$(e)
      }), eu.default.track(eC.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eD.Yn.DEFAULT,
        mode: eC.pM4.VOICE_ACTIVITY,
        options: eM(eL({}, tK(eD.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      eu.default.track(eC.rMx.SDP_ERROR, {
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
    }), e.setBitRate(eb.Z.bitrate), e.applyVideoQualityMode(eT.Z.mode), e0.supports(eD.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e0.setAsyncVideoInputDeviceInit((0, Z.p)("setupMediaEngine").enabled)
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
    tD = true, v.Z.dispatch({
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
    ek.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), e0.on(Chunk46973.aB.VideoInputInitialized, e => {
    eu.default.track(eC.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ef.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: ev.Z.getMediaSessionId(),
      rtc_connection_id: ev.Z.getRTCConnectionId()
    })
  }), e0.on(Chunk46973.aB.AudioInputInitialized, e => {
    eu.default.track(eC.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ef.Z.Millis.SECOND),
      rtc_connection_id: ev.Z.getRTCConnectionId()
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
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && I.pn(t), o = null)
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
    eu.default.track(eC.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), e0.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? D.u.VIDEO_ENCODE_ERROR : D.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, D.kr)(t === D.u.VIDEO_ENCODE_ERROR ? eM(eL({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eM(eL({
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
          version: eX++,
          context: n.context
        }
      })
    })
  }), e0.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rF(e);
    null !== t && eu.default.track(eC.rMx.VOICE_QUEUE_METRICS, t)
  }), e0.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nQ(), nJ(), e0.supports(Chunk65154.AN.ASYNC_CLIPS_SOURCE_DEINIT) && e0.setAsyncClipsSourceDeinit((0, Chunk502450.C)("setupMediaEngine").enabled), ne.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tk = e.gpu_brand)
  }), e0.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    e0.eachConnection(t2)
  })
}

function t5() {
  return (0, Chunk358085.isWindows)() && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function t8() {
  return (0, Chunk358085.isWindows)() && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function t6() {
  return (0, Chunk358085.isMac)() && e0.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function t7() {
  return (0, Chunk358085.isWindows)() && e0.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && e0.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function t9() {
  return e0.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let ne = new class {
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
    let e = tK();
    !t_ && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    ex(this, "stateChangeTimeout", true), ex(this, "noVoiceTimeout", 5e3), ex(this, "voiceTimeout", 1500), ex(this, "started", false), ex(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tm = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function nt() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eU, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), e1 = null != (e = Chunk433517.K.get(eU)) ? module : {}, _().each(e1, e => {
    if (_().defaultsDeep(e, eJ()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eg.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eG && (e.vadUseKrispSettingVersion = eG, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eK)
    }
    e0.supports(eD.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eF && (e.sidechainCompressionSettingVersion = eF, e.sidechainCompression = true), (0, ep.isWeb)() ? e.ncUseKrispjsSettingVersion !== eB && (e.ncUseKrispjsSettingVersion = eB, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eZ && (e.ncUseKrispSettingVersion = eZ, e.noiseSuppression = false, e.noiseCancellation = true)
  }), ni()
}

function nn(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tW(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eU, e1), r
}

function nr() {
  Chunk433517.K.remove(eU), location.reload()
}

function ni() {
  let e = tK();
  e0.setAudioInputDevice(module.inputDeviceId), e0.setAudioOutputDevice(module.outputDeviceId), tJ(), e0.setInputVolume(module.inputVolume), e0.setOutputVolume(module.outputVolume), e0.setH264Enabled(eQ), e0.setAv1Enabled(eQ), e0.setH265Enabled(eQ), e0.setAecDump(module.aecDumpEnabled), e0.setSidechainCompression(module.sidechainCompression), e0.setSidechainCompressionStrength(module.sidechainCompressionStrength), e0.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function na() {
  e2 || e0.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function no(e) {
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

function ns(e, t) {
  if (0 === e.length) {
    let e = no(t);
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

function nl(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eD.w5]) ? r : _()(e).values().first();
  return null != i ? i.id : t
}

function nc(e) {
  let t = e6;
  if (e6 = ns(e, ew.intl.string(ew.t["/QIjDA"])), !_().isEqual(e6, t)) {
    let e = tK(),
      t = nl(e6, e.inputDeviceId);
    e0.setAudioInputDevice(t)
  }
}

function nu(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nd(e) {
  e0.eachConnection(t => {
    t.context === eD.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nf(e) {
  let t = e7;
  if (e7 = ns(e, ew.intl.string(ew.t.xlUg0v)), !_().isEqual(e7, t)) {
    let e = tK(),
      n = nl(e7, e.outputDeviceId);
    e0.setAudioOutputDevice(n);
    let r = nu(t),
      i = nu(e7);
    r !== i && nd(i)
  }
}

function np(e) {
  tf = e.length > 0;
  let t = e9;
  if (e9 = ns(e, ew.intl.string(ew.t.WKWARY)), ti && !_().isEqual(e9, t)) {
    var n;
    let e = true !== e9[ta],
      r = ta === eD.w5 && (null == (n = t[eD.w5]) ? true : n.disabled);
    tJ(e || r)
  }
}

function n_() {
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
      } = tK(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], e0.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], e0.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    nn({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nm(e) {
  if (null == r) return ek.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : ed.Z.getAudioPid(e),
      n = "";
    return null != t && (n = ed.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nh(e, t) {
  (0, ep.isWindows)() && e > 1 && I.YT(e, {
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

function ng(e) {
  i = e.sessionId, te = false, tr = false;
  let t = tK();
  if (t7() && (t9() ? rh(eD.iA.AUTOMATIC) : t.automaticAudioSubsystem && rg()), e0.supports(eD.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, ep.isDesktop)() ? e = (0, U.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, ep.isIOS)() || (0, ep.isAndroid)()) && (e = (0, G.W)({
      location: "handleConnectionOpen"
    }).enabled), e0.setOffloadAdmControls(e)
  }(0, el.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, ep.isDesktop)() && (ec.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eD.Yn.DEFAULT,
    playSoundEffect: true
  }), nn({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), n_()
}

function nE(e) {
  let {
    mediaEngineState: t
  } = e;
  e1 = t.settingsByContext, e6 = t.inputDevices, e7 = t.outputDevices, tM = t.appSupported, tE = t.krispModuleLoaded, s = t.krispVersion, e5 = t.goLiveContext
}

function nb() {
  i = null
}

function ny() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.NJ.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nO(e) {
  switch (e.state) {
    case eC.hes.CONNECTING:
      na();
      break;
    case eC.hes.RTC_CONNECTING:
      t_ = false, tm = false;
      break;
    case eC.hes.RTC_CONNECTED:
      tJ();
      break;
    case eC.hes.DISCONNECTED:
      nR(), nD()
  }
  ne.update()
}

function nv(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      te = t.mute || t.suppress, tr = t.deaf, e0.eachConnection(tQ);
      let e = null != t.guildId && null != t.channelId && null != tT && tT !== t.channelId,
        n = !th && null == t.channelId;
      return tJ(!e && !n && ti), tT = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eE.default.getId() || null != ev.Z.getChannelId() || tJ(false, null), e
  }, false)
}

function nS(e) {
  let {
    mute: t
  } = e;
  tt = t, e0.eachConnection(tQ)
}

function nI(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tK(t);
  if (t === eD.Yn.DEFAULT && (en.Z.requestPermission(eN.Eu.AUDIO), tn)) returnfalse;
  (r = !i && !r) || (i = false), n || (ts = true), nn({
    mute: r,
    deaf: i
  }, t), e0.eachConnection(tQ)
}

function nT(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  nn({
    mute: n
  }, t), r || (ts = true), e0.eachConnection(tQ)
}

function nC(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eP.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  n_(true)
}

function nA(e) {
  let {
    context: t
  } = e;
  nn({
    deaf: !tK(t).deaf
  }, t), e0.eachConnection(tQ)
}

function nN(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eE.default.getId()) return;
  let {
    localMutes: r
  } = tK(t);
  r[n] ? delete r[n] : r[n] = true, nn({
    localMutes: r
  }, t), e0.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nP(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: p
  } = e;
  f()(!(d && p), "These are not allowed to both be true.");
  let _ = u === eC.ZUi.DISABLED,
    {
      disabledLocalVideos: m
    } = tK(l),
    h = null != (t = m[c]) && t,
    g = tx.has(c),
    E = u === eC.ZUi.AUTO_ENABLED || u === eC.ZUi.MANUAL_ENABLED;
  ek.info("disableVideo=".concat(_, " currentlyDisabled=").concat(h, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !h), "If you are auto-disabled, then you are also disabled.");
  let b = _ !== h,
    y = l === eD.Yn.DEFAULT,
    O = p && b && y,
    v = d && b && y;
  ek.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: S
  } = tK(l);
  if (S[c] === eC.ZUi.AUTO_PROBING && u === eC.ZUi.AUTO_ENABLED && (0, et.Z)(c, _ ? eD.fC.AUTO_DISABLE : eD.fC.AUTO_ENABLE, E), S[c] = u, nn({
      videoToggleStateMap: S
    }, l, d), u === eC.ZUi.AUTO_PROBING ? null == (n = ev.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = ev.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tL || (ek.info("isAutoDisableAllowed=".concat(tL, " - disabling VideoHealthManager")), null == (a = ev.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!_ && !g || _ && !tL) return;
    (0, et.Z)(c, _ ? eD.fC.AUTO_DISABLE : eD.fC.AUTO_ENABLE, E), _ ? tx.add(c) : tx.delete(c)
  } else v && (g && !_ ? (ek.info("disallowing auto-disable for this session because of manual override by user"), tL = false, null == (s = ev.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, et.Z)(c, eD.fC.MANUAL_REENABLE, E)) : (0, et.Z)(c, _ ? eD.fC.MANUAL_DISABLE : eD.fC.MANUAL_ENABLE, E));
  y && !_ && tx.delete(c), _ ? m[c] = true : delete m[c], nn({
    disabledLocalVideos: m
  }, l, d), e0.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = m[c]) && t)
  }, l)
}

function nR() {
  if (0 === tx.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tK(module);
  tx.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e0.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tx.clear(), nn({
    disabledLocalVideos: exports
  }, module, false)
}

function nD() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tK(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  nn({
    videoToggleStateMap: exports
  }, module, false)
}

function nw(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eE.default.getId()) return;
  let i = t === eD.Yn.STREAM ? eD.Yh : eD.Qx,
    {
      localVolumes: a
    } = tK(t);
  r === i ? delete a[n] : a[n] = r, nn({
    localVolumes: a
  }, t), e0.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nx(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tK(t);
  a[n] = {
    left: r,
    right: i
  }, nn({
    localPans: a
  }, t), e0.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nL(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  nn({
    mode: n,
    modeOptions: r
  }, t), e0.eachConnection(tz), ne.update()
}

function nj(e) {
  let {
    volume: t
  } = e;
  nn({
    inputVolume: tq(t)
  }), e0.setInputVolume(t)
}

function nM(e) {
  let {
    volume: t
  } = e;
  nn({
    outputVolume: t
  }), e0.setOutputVolume(t)
}

function nk(e) {
  let {
    id: t
  } = e;
  t = nl(e6, t), e8 = performance.now(), nn({
    inputDeviceId: t
  }), e0.setAudioInputDevice(t)
}

function nU(e) {
  let {
    id: t
  } = e;
  nn({
    outputDeviceId: t = nl(e7, t)
  }), e0.setAudioOutputDevice(t)
}

function nG(e) {
  let {
    id: t
  } = e;
  nn({
    videoDeviceId: t = nl(e9, t)
  }), tJ()
}

function nZ(e) {
  let {
    inputProfile: t
  } = e;
  nn({
    activeInputProfile: t
  });
  let n = tK();
  e0.eachConnection(e => {
    tz(e), t1(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), t3(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), e0.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), ne.update(), nX()
}

function nB(e) {
  return e4 !== e.required && (e4 = e.required, e.required || e0.interact(), true)
}

function nF(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  nc(t), nf(n), np(r)
}

function nV(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  nn({
    inputVolume: tq(t),
    outputVolume: n
  })
}

function nH(e) {
  var t;
  let n = tK(),
    r = e0.getAudioSubsystem(),
    i = e0.getAudioLayer(),
    a = nl(e6, n.inputDeviceId),
    o = null == (t = e6[a]) ? true : t.name;
  eu.default.track(eC.rMx.VOICE_PROCESSING, {
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

function nY(e) {
  let t = nn({
    echoCancellation: e.enabled
  });
  e0.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nX(), nH(e.location)
}

function nW(e) {
  nz(e.enabled)
}

function nK(e) {
  let t = nn({
    sidechainCompressionStrength: e.strength
  });
  e0.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nz(e) {
  let t = nn({
    sidechainCompression: e
  });
  e0.setSidechainCompression(t.sidechainCompression)
}

function nq(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tj.add(n) : tj.delete(n), nQ(), nX()
}

function nQ() {
  let e = !tj.has("voice_filter_preview") && !tj.has("mic_test");
  e0.setMaybePreprocessMute(module)
}

function nX() {
  let e = tK(),
    t = tj.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = t0(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tO,
    c = tj.has("voice_filter") && 1 === tj.size;
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
async function nJ() {
  var e, t, n, r;
  if (!e0.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  (null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) != null && (null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i) && (tB = true, tZ = e0.supports(Chunk65154.AN.GAMESCOPE_CAPTURE))
}

function n$(e) {
  let t = nn({
    noiseSuppression: e.enabled
  });
  e0.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nX(), nH(e.location)
}

function n0(e) {
  let t = nn({
    automaticGainControl: e.enabled
  });
  e0.eachConnection(e => t1(e, t.automaticGainControl)), nX(), nH(e.location)
}

function n1(e) {
  let t = nn({
    noiseCancellation: e.enabled
  });
  e0.eachConnection(e => t3(e, t.noiseCancellation)), nX(), nH(e.location)
}

function n3(e) {
  er.Z.setKrispModelOverride(e.model), c = e.model, nX()
}

function n2(e) {
  var t;
  (0, ep.isWeb)() || (ty = e.enabled, null == (t = e0.setNoiseCancellationEnableStats) || t.call(e0, e.enabled))
}

function n4(e) {
  nn({
    silenceWarning: e.enabled
  }), ne.update()
}

function n5(e) {
  e0.setDebugLogging(e.enabled)
}

function n8(e) {
  let {
    level: t
  } = e;
  l = t, er.Z.setKrispSuppressionLevel(t)
}

function n6(e) {
  nn({
    videoHook: e.enabled
  })
}

function n7(e) {
  nn({
    experimentalSoundshare2: e.enabled
  })
}

function n9(e) {
  let {
    enabled: t
  } = e;
  nn({
    useSystemScreensharePicker: t
  })
}

function re(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = nn({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  e0.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function rt(e) {
  let {
    enabled: t
  } = e;
  nn({
    qos: t
  }), e0.eachConnection(e => e.setQoS(t))
}

function rn() {
  nr()
}

function rr(e) {
  let {
    inputDetected: t
  } = e;
  tp = t, !t_ && tp && (t_ = true, ne.update())
}

function ri(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tn) returnfalse;
  tn = n, e0.eachConnection(tQ)
}

function ra(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eN.PQ.ACCEPTED;
  switch (n) {
    case eN.Eu.AUDIO:
      tD = true, e0.eachConnection(tQ);
      break;
    case eN.Eu.CAMERA:
      !r && ti && tJ(false);
      break;
    default:
      returnfalse
  }
}

function ro() {
  return tE || false
}
async function rs() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tE = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tb = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    ek.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), nn({
      noiseCancellation: false
    })
  } finally {
    tg = false
  }
}

function rl() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function rc() {
  !rl() || __OVERLAY__ || tg || tE ? (0, Chunk358085.isWeb)() && e0.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tE = true, r.emitChange()) : (0, Chunk358085.isWeb)() && nn({
    noiseCancellation: false
  }) : (tg = true, rs())
}

function ru(e) {
  let {
    enabled: t
  } = e;
  eu.default.track(eC.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tO ? tO : null,
    enabled: t
  }), nn({
    voiceFilterPlaybackEnabled: t
  })
}

function rd(e) {
  let {
    newVoiceFilterId: t
  } = e;
  nn({
    mostRecentlyRequestedVoiceFilter: t
  }), e0.eachConnection(e => e.setVoiceFilterId(t))
}

function rf() {
  nn({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rp(e) {
  let {
    voiceFilterId: t
  } = e;
  tS = tO, tI = tv, tO = t, tv = null === t ? null : Date.now()
}

function r_(e) {
  let t = e.bypassEnabled;
  nn({
    bypassSystemInputProcessing: t
  }), e0.setAudioInputBypassSystemProcessing(t), nH(e.location)
}

function rm(e) {
  rh(e.subsystem)
}

function rh(e) {
  e === eD.iA.AUTOMATIC ? (nn({
    automaticAudioSubsystem: true
  }), rg()) : (nn({
    automaticAudioSubsystem: false
  }), e0.setAudioSubsystem(e))
}

function rg() {
  e0.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rE(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tJ(i, null), null != t || null == n) {
    th = false;
    return
  }
  if (th) return;
  th = true;
  let a = tK();
  (a.mute || a.deaf) && (nn({
    deaf: false,
    mute: false
  }), e0.eachConnection(tQ))
}

function rb(e) {
  let {
    application: t
  } = e;
  e3.add(t.id)
}

function ry(e) {
  let {
    application: t
  } = e;
  e3.delete(t.id)
}

function rO(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e2 = false, e0.eachConnection(tQ);
      break;
    case "video":
      tJ(false)
  }
}

function rv(e) {
  e2 = e.enabled, e.unmute && nn({
    mute: false,
    deaf: false
  }), e0.eachConnection(tQ)
}

function rS(e) {
  let {
    enabled: t
  } = e;
  en.Z.requestPermission(eN.Eu.CAMERA), tJ(t)
}

function rI(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e;
  if (!(0, N.CY)() || null == S.Z) returnfalse;
  let a = null,
    s = null,
    l = ed.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: a,
    soundshareSession: s
  } = nm(l));
  let c = {
    desktopSource: {
      id: t,
      sourcePid: l,
      soundshareId: a,
      soundshareSession: s
    },
    quality: i
  };
  null != o && (e0.setClipsSource(null), (0, ep.isWindows)() && null != o.desktopSource.soundshareId && I.pn(o.desktopSource.soundshareId)), null != a && nh(a, s), o = c;
  let u = tV(),
    d = tK().videoHook;
  e0.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: d,
      useGraphicsCapture: t5(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: t6(),
      videoHookStaleFrameTimeoutMs: eY,
      graphicsCaptureStaleFrameTimeoutMs: eW,
      hdrCaptureMode: u
    },
    quality: i,
    applicationName: n
  })
}

function rT(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, e0.setClipsSource(null))
}

function rC(e) {
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
      c = false === o ? null : ed.Z.getPidFromDesktopSource(i);
    ep.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = nm(c), null != e && nh(e, r)), tX(s), tJ(s === eD.Yn.STREAM && ti, {
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
      o = e === eD.Yn.STREAM && ti,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tJ(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tJ(ti, null)
}

function rA(e) {
  let {
    section: t
  } = e;
  return t === eC.oAB.VOICE && na(), false
}

function rN() {
  return e0.eachConnection(t2), false
}

function rP(e) {
  let {
    enabled: t
  } = e, n = nn({
    aecDumpEnabled: t
  });
  e0.setAecDump(n.aecDumpEnabled)
}

function rR(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e1 = Object.values(eD.Yn).reduce((e, n) => {
    let r = n,
      i = eJ();
    return e[r] = _().merge(i, t[r]), e
  }, {}), y.K.set(eU, e1), ni()
}

function rD(e) {
  let {
    state: t
  } = e, n = x.Z.isEnabled();
  if (t === eC.$7l.BACKGROUND && ti && !n) td = true, tJ(false);
  else {
    if (t !== eC.$7l.ACTIVE || !td) returnfalse;
    td = false, tJ(true)
  }
  returntrue
}

function rw(e) {
  e0.eachConnection(t => t.setBitRate(e.bitrate))
}

function rx() {
  if (!ti && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tJ(false, null)
}

function rL() {
  return !!tC && (tC = false, true)
}

function rj(e) {
  e0.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rM(e) {
  let {
    settings: t
  } = e;
  e0.applyMediaFilterSettings(t).finally(() => {
    tA = false, r.emitChange()
  })
}

function rk() {
  tA = true
}

function rU() {
  tA = false
}

function rG(e) {
  tU = e.enabled
}

function rZ() {
  if ((0, Chunk358085.isDesktop)() && Chunk358085.isPlatformEmbedded && !tF) {
    tF = true;
    let e = async () => {
      let t = await new Promise(e => {
        eh.ZP.pollQueueMetrics(t => {
          e(t)
        })
      });
      exports.periodMs = Chunk65154.rp;
      let n = rF(exports);
      null !== require && Chunk626135.default.track(Chunk981631.rMx.VOICE_QUEUE_METRICS, require), setTimeout(module, Chunk65154.rp)
    };
    setTimeout(module, Chunk65154.rp)
  }
}
class rB extends(u = Chunk442837.ZP.Store) {
  initialize() {
    t4(), nt(), rc(), nD(), rZ(), tM = {
      [Chunk65154.AN.VIDEO]: e0.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: e0.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: e0.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk615830.Z, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return e0.supports(e)
  }
  supportsInApp(e) {
    return tM[e] || e0.supports(e)
  }
  isSupported() {
    return e0.supported()
  }
  isNoiseSuppressionSupported() {
    return e0.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return ro()
  }
  isNoiseCancellationError() {
    return tC
  }
  isAutomaticGainControlSupported() {
    return e0.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !t9() && (e0.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || e0.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return e0.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e0.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return ro()
  }
  isAecDumpSupported() {
    return e0.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return e0.supports(Chunk65154.AN.VIDEO) && e0.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(tT)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && eQ && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tK().aecDumpEnabled
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
    return !this.isEnabled() || tK(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && tn
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
    return tU
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tK(module).deaf
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
    return e5 === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e5 === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
    return e !== eE.default.getId() && (tK(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return e0.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
    return null != (t = tK(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
    return null != (t = tK(n).videoToggleStateMap[e]) ? t : eC.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
    return t === eD.Yn.DEFAULT && tx.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tx.size > 0
  }
  isMediaFilterSettingLoading() {
    return tA
  }
  isNativeAudioPermissionReady() {
    return tD
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e5
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e8
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT,
      n = tK(t).localPans[e];
    return null != n ? n : eH
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT,
      n = t === eD.Yn.STREAM ? eD.Yh : eD.Qx,
      r = tK(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tK().inputVolume
  }
  getOutputVolume() {
    return tK().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tK(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tK(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tO
  }
  getActiveVoiceFilterAppliedAt() {
    return tv
  }
  getPreviousVoiceFilter() {
    return tS
  }
  getPreviousVoiceFilterAppliedAt() {
    return tI
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tK().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tK().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return _().each(e1, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eC.pM4.PUSH_TO_TALK && e3.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return nl(e6, tK().inputDeviceId)
  }
  getOutputDeviceId() {
    return nl(e7, tK().outputDeviceId)
  }
  getVideoDeviceId() {
    return nl(e9, tK().videoDeviceId)
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
    let e = tK();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return e0.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tK().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tK().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tK().h265Enabled
  }
  hasH265HardwareDecode() {
    return null !== tP && tP
  }
  getLoopback() {
    return tj.size > 0
  }
  getLoopbackReasons() {
    return tj
  }
  getNoiseSuppression() {
    let e = tK();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tK();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tK().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tK().noiseCancellation
  }
  getHardwareEncoding() {
    return eQ
  }
  getEnableSilenceWarning() {
    return tK().silenceWarning
  }
  getDebugLogging() {
    return e0.getDebugLogging()
  }
  getQoS() {
    return tK().qos
  }
  getAttenuation() {
    return tK().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tK().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tK().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return t7() && tK().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : e0.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return e0.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tK().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tK(module)
  }
  getState() {
    return {
      settingsByContext: e1,
      inputDevices: e6,
      outputDevices: e7,
      appSupported: tM,
      krispModuleLoaded: tE,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: e5
    }
  }
  getInputDetected() {
    return tp
  }
  getNoInputDetectedNotice() {
    return tm
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
    return tK().videoHook
  }
  supportsVideoHook() {
    return e0.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tK().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return e0.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && e0.supports(Chunk65154.AN.SOUNDSHARE) && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tK().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return e0.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tB
  }
  getUseGamescopeCapture() {
    return tZ
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
    return null != (e = tK().modeOptions.vadKrispActivationThreshold) ? module : eV
  }
  hasActiveCallKitCall() {
    return tG
  }
  setHasActiveCallKitCall(e) {
    tG = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? e0.supports(Chunk65154.AN.SOUNDSHARE) && h().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && t6() : (0, Chunk358085.isWindows)() ? e0.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && e0.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
        ek.warn("DAVE preload failed:", e), em.Z.captureException(e)
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
    return tk
  }
}

function rF(e) {
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
ex(rB, "displayName", "MediaEngineStore");
let rV = r = new rB(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rE,
  VOICE_STATE_UPDATES: nv,
  CONNECTION_OPEN: ng,
  CONNECTION_CLOSED: nb,
  POST_CONNECTION_OPEN: ny,
  RTC_CONNECTION_STATE: nO,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nS,
  AUDIO_TOGGLE_SELF_MUTE: nI,
  AUDIO_SET_SELF_MUTE: nT,
  AUDIO_TOGGLE_SELF_DEAF: nA,
  AUDIO_TOGGLE_LOCAL_MUTE: nN,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nP,
  AUDIO_SET_LOCAL_VOLUME: nw,
  AUDIO_SET_LOCAL_PAN: nx,
  AUDIO_SET_MODE: nL,
  AUDIO_SET_INPUT_VOLUME: nj,
  AUDIO_SET_OUTPUT_VOLUME: nM,
  AUDIO_SET_INPUT_DEVICE: nk,
  AUDIO_SET_OUTPUT_DEVICE: nU,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nZ,
  AUDIO_SET_ECHO_CANCELLATION: nY,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nW,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nK,
  AUDIO_SET_LOOPBACK: nq,
  AUDIO_SET_NOISE_SUPPRESSION: n$,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n0,
  AUDIO_SET_NOISE_CANCELLATION: n1,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: n3,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: n4,
  AUDIO_SET_DEBUG_LOGGING: n5,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n8,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n2,
  MEDIA_ENGINE_SET_VIDEO_HOOK: n6,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n7,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n9,
  AUDIO_SET_ATTENUATION: re,
  AUDIO_SET_QOS: rt,
  MEDIA_ENGINE_DEVICES: nF,
  AUDIO_VOLUME_CHANGE: nV,
  AUDIO_RESET: rn,
  AUDIO_INPUT_DETECTED: rr,
  AUDIO_SET_SUBSYSTEM: rm,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: r_,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rv,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rS,
  MEDIA_ENGINE_PERMISSION: rO,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rC,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nG,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nB,
  USER_SETTINGS_MODAL_INIT: rA,
  USER_SETTINGS_MODAL_SET_SECTION: rA,
  CERTIFIED_DEVICES_SET: rN,
  RPC_APP_CONNECTED: rb,
  RPC_APP_DISCONNECTED: ry,
  OVERLAY_INITIALIZE: nE,
  APP_STATE_UPDATE: rD,
  SET_CHANNEL_BITRATE: rw,
  SET_VAD_PERMISSION: ri,
  SET_NATIVE_PERMISSION: ra,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rj,
  MEDIA_ENGINE_SET_AEC_DUMP: rP,
  MEDIA_ENGINE_RESET_SETTINGS: rR,
  CHANNEL_DELETE: rx,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rL,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rM,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rk,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rU,
  USER_SETTINGS_PROTO_UPDATE: nC,
  CLIPS_INIT: rI,
  CLIPS_SETTINGS_UPDATE: rT,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rG,
  VOICE_FILTER_REQUEST_SWITCH: rd,
  VOICE_FILTER_LOOPBACK_TOGGLE: ru,
  VOICE_FILTER_APPLIED: rp,
  VOICE_FILTER_DOWNLOAD_FAILED: rf,
  VOICE_FILTER_APPLY_FAILED: rf
})