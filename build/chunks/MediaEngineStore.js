/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rk
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
  Chunk529558 = require("./529558.js"),
  Chunk705946 = require("./705946.js"),
  Chunk412412 = require("./412412.js"),
  Chunk441167 = require("./441167.js"),
  Chunk986855 = require("./986855.js"),
  Chunk338336 = require("./338336.js"),
  Chunk751571 = require("./751571.js"),
  Chunk311473 = require("./311473.js"),
  Chunk725380 = require("./725380.js"),
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

function eN(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eN(e, t, n[t])
    })
  }
  return e
}

function eP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ew(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eP(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eD = new Chunk710845.Z("MediaEngineStore"),
  eL = "MediaEngineStore",
  ex = 4,
  eM = 1,
  ek = 1,
  ej = 1,
  eU = 1,
  eG = .5,
  eB = {
    left: 1,
    right: 1
  },
  eZ = 500,
  eF = 5 * Chunk70956.Z.Millis.SECOND,
  eV = false,
  eH = 100,
  eY = 2 * Chunk70956.Z.Millis.SECOND,
  eW = true,
  eK = 0;

function ez() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eV,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eG,
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
    videoHook: eX.supports(Chunk65154.AN.VIDEO_HOOK),
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
let eq = {
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
  eX = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
eD.enableNativeLogger(true);
let eQ = {},
  eJ = new Set([Chunk65154.Yn.DEFAULT]),
  e$ = eX.supports(Chunk65154.AN.AUTO_ENABLE),
  e0 = false,
  e1 = Chunk65154.Yn.STREAM,
  e3 = performance.now(),
  e2 = {
    [Chunk65154.w5]: t7("No Input Devices")
  },
  e4 = {
    [Chunk65154.w5]: t7("No Output Devices")
  },
  e8 = {
    [Chunk65154.w5]: t7("No Video Devices")
  },
  e5 = false,
  e6 = false,
  e7 = false,
  e9 = false,
  te = false,
  tt = Chunk65154.Av,
  tn = Chunk65154.Av,
  tr = false,
  ti = false,
  ta = false,
  to = new Chunk846519.V7,
  ts = false,
  tl = false,
  tc = null,
  tu = false,
  td = false,
  tf = false,
  t_ = false,
  tp = false,
  th = [],
  tm = false,
  tg = null,
  tE = null,
  tb = null,
  ty = null,
  tO = null,
  tv = false,
  tI = false,
  tS = false,
  tT = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tA = false,
  tC = new Set,
  tN = tA,
  tR = new Set,
  tP = {},
  tw = null,
  tD = true,
  tL = false,
  tx = false,
  tM = false;

function tk() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tj() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = eQ[module];
  return null == exports && (t = ez(), eQ[module] = exports), exports
}

function tU() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tj(r),
    a = eq[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = eR({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return ew(eR({}, i, a), {
    modeOptions: o
  })
}

function tG(e) {
  var t, n;
  let r = tU(e.context);
  e.setInputMode(r.mode, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && n9(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eG,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tB(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eA.Qx;
  return p().clamp(e, 0, t)
}

function tZ(e) {
  let t = tU(e.context),
    n = !e$ || t.mute || t.deaf;
  e.context === eA.Yn.DEFAULT ? n = n || e5 || e6 || e7 || !$.Z.didHavePermission(eI.Eu.AUDIO) : e.context === eA.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eA.Yn.DEFAULT && T.Z.updateNativeMute()
}

function tF(e) {
  e !== e1 && (null != a && eX.setGoLiveSource(null, e1), e1 = e)
}

function tV() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : te,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), eX.setGoLiveSource(null, e1)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && eX.setGoLiveSource(null, e1), te || i) {
    let e = tU().videoDeviceId;
    te && module === Chunk65154.w5 && tn === Chunk65154.w5 && tt !== Chunk65154.Av ? e = tt : tn = module, tt = (te = i) ? ne(e8, module) : Chunk65154.Av, eX.setVideoInputDevice(tt)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tk(),
        n = tU().videoHook,
        i = tQ(),
        a = i ? tJ() ? Chunk70722.zj : Chunk70722.ZM : 0,
        s = (0, Chunk358085.isWindows)() && (0, Chunk412412.t)("updateVideo").enabled;
      eX.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useCaptureDeviceForEncode: s,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: t$(),
          videoHookStaleFrameTimeoutMs: eZ,
          graphicsCaptureStaleFrameTimeoutMs: eF,
          hdrCaptureMode: exports
        },
        quality: module
      }, e1)
    }
    null != o.cameraSource && eX.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e1)
  }
}

function tH(e) {
  switch (e) {
    case eA.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case eA.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case eA.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tY(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eR({
    enabled: e
  }, t)
}

function tW(e, t) {
  e.setAutomaticGainControl(tY(t))
}
async function tK(e, t) {
  if ((0, el.isIOS)() || (0, el.isMac)()) {
    let e = await eX.getSystemMicrophoneMode();
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

function tz(e) {
  let t = tU(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eh.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eh.Z.hasNoiseSuppression(n) || t.noiseSuppression), tW(e, eh.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tK(e, t.noiseCancellation), e.setVoiceFilterId(tg), (0, el.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tq() {
  var e;
  return !(0, Chunk64592.f)("MediaEngine").enabled && !(0, Chunk986855.M)("MediaEngine").enabled && (null == (e = tU().openH264) || module)
}

function tX() {
  eX.on(Chunk46973.aB.Connection, e => {
    tG(e), tZ(e), tz(e);
    let t = tU();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos), e.setExperimentalEncoders(t.experimentalEncoders), e.setHardwareH264(eW), e.setSoftwareH264(tq());
    let n = eg.Z.getGuildId(),
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
    i && e.setExperimentFlag(eA.V8.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(eA.V8.PTT_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eA.V8.SKIP_ENCODE, true);
    let l = false,
      c = true;
    if (e.setExperimentFlag(eA.V8.RESET_DECODER_ON_ERRORS, true), l && e.setExperimentFlag(eA.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), c && e.setExperimentFlag(eA.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eA.Yn.STREAM) {
      let t = nn(e4);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = H.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, el.isWindows)() ? (null == tw ? true : tw.startsWith("NVIDIA")) || (null == tw ? true : tw.startsWith("AMD")) ? e.setExperimentFlag(eA.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eA.V8.SIGNAL_AV1_DECODE, true) : ((0, el.isMac)() || (0, el.isLinux)()) && e.setExperimentFlag(eA.V8.SIGNAL_AV1_DECODE, true), (0, el.isWindows)() && e.setExperimentFlag(eA.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, el.isWeb)()) {
      let {
        enabled: t
      } = (0, F.A)("MediaEngineStore");
      e.setExperimentFlag(eA.V8.BROWSER_HEVC, t)
    }
    if (eX.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(eA.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = X.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eA.ux)
    }
    for (let n of (t = tU(e.context), e.setPostponeDecodeLevel(eH), Object.keys(t.localMutes))) n !== e_.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== e_.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
    }), e.context === eA.Yn.DEFAULT && (ti = false, ta = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      ti = true, ta = true, r.emitChange(), to.stop(), to.start(eY, () => {
        ta = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && ea.default.track(eO.rMx.VIDEOHOOK_INITIALIZED, eR({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, x.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      eD.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tH(e)
      }), tv = true, ea.default.track(eO.rMx.VOICE_PROCESSING, {
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
      eD.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tH(e)
      }), ea.default.track(eO.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eA.Yn.DEFAULT,
        mode: eO.pM4.VOICE_ACTIVITY,
        options: ew(eR({}, tU(eA.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      ea.default.track(eO.rMx.SDP_ERROR, {
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
    }), e.setBitRate(ep.Z.bitrate), e.applyVideoQualityMode(ey.Z.mode), eX.supports(eA.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && eX.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled)
  }), eX.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), eX.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), eX.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), eX.on(Chunk46973.aB.AudioPermission, e => {
    tT = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), eX.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), eX.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
    eD.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), eX.on(Chunk46973.aB.VideoInputInitialized, e => {
    ea.default.track(eO.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * es.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eg.Z.getMediaSessionId(),
      rtc_connection_id: eg.Z.getRTCConnectionId()
    })
  }), eX.on(Chunk46973.aB.AudioInputInitialized, e => {
    ea.default.track(eO.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * es.Z.Millis.SECOND),
      rtc_connection_id: eg.Z.getRTCConnectionId()
    })
  }), eX.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), eX.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), eX.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && S.pn(t), o = null)
  }), eX.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), eX.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), eX.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), eX.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    ea.default.track(eO.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), eX.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? ew(eR({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : ew(eR({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), eX.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eK++,
          context: n.context
        }
      })
    })
  }), eX.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rM(e);
    null !== t && ea.default.track(eO.rMx.VOICE_QUEUE_METRICS, t)
  }), eX.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nF(), nH(), t3.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tw = e.gpu_brand)
  }), eX.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    eX.eachConnection(tz)
  })
}

function tQ() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function tJ() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function t$() {
  return (0, Chunk358085.isMac)() && eX.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function t0() {
  return (0, Chunk358085.isWindows)() && eX.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eX.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function t1() {
  return eX.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let t3 = new class {
  start() {
    this.started || (this.started = true, eX.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eX.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tU();
    !tu && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eN(this, "stateChangeTimeout", true), eN(this, "noVoiceTimeout", 5e3), eN(this, "voiceTimeout", 1500), eN(this, "started", false), eN(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (td = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function t2() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eL, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), eQ = null != (e = Chunk433517.K.get(eL)) ? module : {}, p().each(eQ, e => {
    if (p().defaultsDeep(e, ez()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ef.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ex && (e.vadUseKrispSettingVersion = ex, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eV)
    }
    eX.supports(eA.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eU && (e.sidechainCompressionSettingVersion = eU, e.sidechainCompression = true), (0, el.isWeb)() ? e.ncUseKrispjsSettingVersion !== ek && (e.ncUseKrispjsSettingVersion = ek, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eM && (e.ncUseKrispSettingVersion = eM, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== ej && (e.hardwareH264 = true, e.hardwareEnabledVersion = ej), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), t5()
}

function t4(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tj(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eL, eQ), r
}

function t8() {
  Chunk433517.K.remove(eL), location.reload()
}

function t5() {
  let e = tU();
  eX.setAudioInputDevice(module.inputDeviceId), eX.setAudioOutputDevice(module.outputDeviceId), tV(), eX.setInputVolume(module.inputVolume), eX.setOutputVolume(module.outputVolume), eX.setH264Enabled(eW || tq()), eX.setAv1Enabled(eW), eX.setH265Enabled(eW), eX.setAecDump(module.aecDumpEnabled), eX.setSidechainCompression(module.sidechainCompression), eX.setSidechainCompressionStrength(module.sidechainCompressionStrength), eX.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t6() {
  e$ || eX.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function t7(e) {
  return {
    id: eA.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function t9(e, t) {
  if (0 === e.length) {
    let e = t7(t);
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

function ne(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eA.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function nt(e) {
  let t = e2;
  if (e2 = t9(e, eC.intl.string(eC.t["/QIjDA"])), !p().isEqual(e2, t)) {
    let e = tU(),
      t = ne(e2, e.inputDeviceId);
    eX.setAudioInputDevice(t)
  }
}

function nn(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nr(e) {
  eX.eachConnection(t => {
    t.context === eA.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function ni(e) {
  let t = e4;
  if (e4 = t9(e, eC.intl.string(eC.t.xlUg0v)), !p().isEqual(e4, t)) {
    let e = tU(),
      n = ne(e4, e.outputDeviceId);
    eX.setAudioOutputDevice(n);
    let r = nn(t),
      i = nn(e4);
    r !== i && nr(i)
  }
}

function na(e) {
  tl = e.length > 0;
  let t = e8;
  if (e8 = t9(e, eC.intl.string(eC.t.WKWARY)), te && !p().isEqual(e8, t)) {
    var n;
    let e = true !== e8[tt],
      r = tt === eA.w5 && (null == (n = t[eA.w5]) ? true : n.disabled);
    tV(e || r)
  }
}

function no() {
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
      } = tU(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], eX.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], eX.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t4({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function ns(e) {
  if (null == r) return eD.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : eo.Z.getAudioPid(e),
      n = "";
    return null != t && (n = eo.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function nl(e, t) {
  (0, el.isWindows)() && e > 1 && S.YT(e, {
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

function nc(e) {
  i = e.sessionId, e5 = false, e9 = false;
  let t = tU();
  if (t0() && (t1() ? rc(eA.iA.AUTOMATIC) : t.automaticAudioSubsystem && ru()), eX.supports(eA.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, el.isDesktop)() ? e = (0, j.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, el.isIOS)() || (0, el.isAndroid)()) && (e = (0, U.W)({
      location: "handleConnectionOpen"
    }).enabled), eX.setOffloadAdmControls(e)
  }(0, er.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, el.isDesktop)() && (ei.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eA.Yn.DEFAULT,
    playSoundEffect: true
  }), t4({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), no()
}

function nu(e) {
  let {
    mediaEngineState: t
  } = e;
  eQ = t.settingsByContext, e2 = t.inputDevices, e4 = t.outputDevices, tP = t.appSupported, tp = t.krispModuleLoaded, s = t.krispVersion, e1 = t.goLiveContext
}

function nd() {
  i = null
}

function nf() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.N.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function n_(e) {
  switch (e.state) {
    case eO.hes.CONNECTING:
      t6();
      break;
    case eO.hes.RTC_CONNECTING:
      tu = false, td = false;
      break;
    case eO.hes.RTC_CONNECTED:
      tV();
      break;
    case eO.hes.DISCONNECTED:
      nv(), nI()
  }
  t3.update()
}

function np(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e5 = t.mute || t.suppress, e9 = t.deaf, eX.eachConnection(tZ);
      let e = null != t.guildId && null != t.channelId && null != tO && tO !== t.channelId,
        n = !tf && null == t.channelId;
      return tV(!e && !n && te), tO = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== e_.default.getId() || null != eg.Z.getChannelId() || tV(false, null), e
  }, false)
}

function nh(e) {
  let {
    mute: t
  } = e;
  e6 = t, eX.eachConnection(tZ)
}

function nm(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tU(t);
  if (t === eA.Yn.DEFAULT && ($.Z.requestPermission(eI.Eu.AUDIO), e7)) returnfalse;
  (r = !i && !r) || (i = false), n || (tr = true), t4({
    mute: r,
    deaf: i
  }, t), eX.eachConnection(tZ)
}

function ng(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t4({
    mute: n
  }, t), r || (tr = true), eX.eachConnection(tZ)
}

function nE(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eS.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  no(true)
}

function nb(e) {
  let {
    context: t
  } = e;
  t4({
    deaf: !tU(t).deaf
  }, t), eX.eachConnection(tZ)
}

function ny(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === e_.default.getId()) return;
  let {
    localMutes: r
  } = tU(t);
  r[n] ? delete r[n] : r[n] = true, t4({
    localMutes: r
  }, t), eX.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nO(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === eO.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tU(l),
    m = null != (t = h[c]) && t,
    g = tC.has(c),
    E = u === eO.ZUi.AUTO_ENABLED || u === eO.ZUi.MANUAL_ENABLED;
  eD.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eA.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  eD.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tU(l);
  if (I[c] === eO.ZUi.AUTO_PROBING && u === eO.ZUi.AUTO_ENABLED && (0, J.Z)(c, p ? eA.fC.AUTO_DISABLE : eA.fC.AUTO_ENABLE, E), I[c] = u, t4({
      videoToggleStateMap: I
    }, l, d), u === eO.ZUi.AUTO_PROBING ? null == (n = eg.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eg.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tN || (eD.info("isAutoDisableAllowed=".concat(tN, " - disabling VideoHealthManager")), null == (a = eg.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tN) return;
    (0, J.Z)(c, p ? eA.fC.AUTO_DISABLE : eA.fC.AUTO_ENABLE, E), p ? tC.add(c) : tC.delete(c)
  } else v && (g && !p ? (eD.info("disallowing auto-disable for this session because of manual override by user"), tN = false, null == (s = eg.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, J.Z)(c, eA.fC.MANUAL_REENABLE, E)) : (0, J.Z)(c, p ? eA.fC.MANUAL_DISABLE : eA.fC.MANUAL_ENABLE, E));
  y && !p && tC.delete(c), p ? h[c] = true : delete h[c], t4({
    disabledLocalVideos: h
  }, l, d), eX.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nv() {
  if (0 === tC.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tU(module);
  tC.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eX.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tC.clear(), t4({
    disabledLocalVideos: exports
  }, module, false)
}

function nI() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tU(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t4({
    videoToggleStateMap: exports
  }, module, false)
}

function nS(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === e_.default.getId()) return;
  let i = t === eA.Yn.STREAM ? eA.Yh : eA.Qx,
    {
      localVolumes: a
    } = tU(t);
  r === i ? delete a[n] : a[n] = r, t4({
    localVolumes: a
  }, t), eX.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nT(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tU(t);
  a[n] = {
    left: r,
    right: i
  }, t4({
    localPans: a
  }, t), eX.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nA(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t4({
    mode: n,
    modeOptions: r
  }, t), eX.eachConnection(tG), t3.update()
}

function nC(e) {
  let {
    volume: t
  } = e;
  t4({
    inputVolume: tB(t)
  }), eX.setInputVolume(t)
}

function nN(e) {
  let {
    volume: t
  } = e;
  t4({
    outputVolume: t
  }), eX.setOutputVolume(t)
}

function nR(e) {
  let {
    id: t
  } = e;
  t = ne(e2, t), e3 = performance.now(), t4({
    inputDeviceId: t
  }), eX.setAudioInputDevice(t)
}

function nP(e) {
  let {
    id: t
  } = e;
  t4({
    outputDeviceId: t = ne(e4, t)
  }), eX.setAudioOutputDevice(t)
}

function nw(e) {
  let {
    id: t
  } = e;
  t4({
    videoDeviceId: t = ne(e8, t)
  }), tV()
}

function nD(e) {
  let {
    inputProfile: t
  } = e;
  t4({
    activeInputProfile: t
  });
  let n = tU();
  eX.eachConnection(e => {
    tG(e), tW(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tK(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), eX.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), t3.update(), nV()
}

function nL(e) {
  return e0 !== e.required && (e0 = e.required, e.required || eX.interact(), true)
}

function nx(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  nt(t), ni(n), na(r)
}

function nM(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t4({
    inputVolume: tB(t),
    outputVolume: n
  })
}

function nk(e) {
  var t;
  let n = tU(),
    r = eX.getAudioSubsystem(),
    i = eX.getAudioLayer(),
    a = ne(e2, n.inputDeviceId),
    o = null == (t = e2[a]) ? true : t.name;
  ea.default.track(eO.rMx.VOICE_PROCESSING, {
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

function nj(e) {
  let t = t4({
    echoCancellation: e.enabled
  });
  eX.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nV(), nk(e.location)
}

function nU(e) {
  nB(e.enabled)
}

function nG(e) {
  let t = t4({
    sidechainCompressionStrength: e.strength
  });
  eX.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nB(e) {
  let t = t4({
    sidechainCompression: e
  });
  eX.setSidechainCompression(t.sidechainCompression)
}

function nZ(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tR.add(n) : tR.delete(n), nF(), nV()
}

function nF() {
  let e = !tR.has("voice_filter_preview") && !tR.has("mic_test");
  eX.setMaybePreprocessMute(module)
}

function nV() {
  let e = tU(),
    t = tR.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tY(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tg,
    c = tR.has("voice_filter") && 1 === tR.size;
  eX.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function nH() {
  var e, t, n, r;
  if (!eX.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  if ((null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) == null || !(null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i)) return;
  let {
    enabled: a
  } = await (0, Chunk302630.m)("setGamescopeVaapiEnabled");
  tM = a, a && eX.supports(Chunk65154.AN.GAMESCOPE_CAPTURE) && (tx = true)
}

function nY(e) {
  let t = t4({
    noiseSuppression: e.enabled
  });
  eX.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nV(), nk(e.location)
}

function nW(e) {
  let t = t4({
    automaticGainControl: e.enabled
  });
  eX.eachConnection(e => tW(e, t.automaticGainControl)), nV(), nk(e.location)
}

function nK(e) {
  let t = t4({
    noiseCancellation: e.enabled
  });
  eX.eachConnection(e => tK(e, t.noiseCancellation)), nV(), nk(e.location)
}

function nz(e) {
  ee.Z.setKrispModelOverride(e.model), c = e.model, nV()
}

function nq(e) {
  var t;
  (0, el.isWeb)() || (tm = e.enabled, null == (t = eX.setNoiseCancellationEnableStats) || t.call(eX, e.enabled))
}

function nX(e) {
  let t = t4({
    experimentalEncoders: e.enabled
  });
  eX.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function nQ(e) {
  t4({
    silenceWarning: e.enabled
  }), t3.update()
}

function nJ(e) {
  eX.setDebugLogging(e.enabled)
}

function n$(e) {
  let {
    level: t
  } = e;
  l = t, ee.Z.setKrispSuppressionLevel(t)
}

function n0(e) {
  t4({
    videoHook: e.enabled
  })
}

function n1(e) {
  t4({
    experimentalSoundshare2: e.enabled
  })
}

function n3(e) {
  let {
    enabled: t
  } = e;
  t4({
    useSystemScreensharePicker: t
  })
}

function n2(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t4({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  eX.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n4(e) {
  let {
    enabled: t
  } = e;
  t4({
    qos: t
  }), eX.eachConnection(e => e.setQoS(t))
}

function n8() {
  t8()
}

function n5(e) {
  let {
    inputDetected: t
  } = e;
  tc = t, !tu && tc && (tu = true, t3.update())
}

function n6(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === e7) returnfalse;
  e7 = n, eX.eachConnection(tZ)
}

function n7(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eI.PQ.ACCEPTED;
  switch (n) {
    case eI.Eu.AUDIO:
      tT = true, eX.eachConnection(tZ);
      break;
    case eI.Eu.CAMERA:
      !r && te && tV(false);
      break;
    default:
      returnfalse
  }
}

function n9() {
  return tp || false
}
async function re() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tp = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      th = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eD.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), t4({
      noiseCancellation: false
    })
  } finally {
    t_ = false
  }
}

function rt() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function rn() {
  !rt() || __OVERLAY__ || t_ || tp ? (0, Chunk358085.isWeb)() && eX.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tp = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t4({
    noiseCancellation: false
  }) : (t_ = true, re())
}

function rr(e) {
  let {
    enabled: t
  } = e;
  ea.default.track(eO.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tg ? tg : null,
    enabled: t
  }), t4({
    voiceFilterPlaybackEnabled: t
  })
}

function ri(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t4({
    mostRecentlyRequestedVoiceFilter: t
  }), eX.eachConnection(e => e.setVoiceFilterId(t))
}

function ra() {
  t4({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function ro(e) {
  let {
    voiceFilterId: t
  } = e;
  tb = tg, ty = tE, tg = t, tE = null === t ? null : Date.now()
}

function rs(e) {
  let t = e.bypassEnabled;
  t4({
    bypassSystemInputProcessing: t
  }), eX.setAudioInputBypassSystemProcessing(t), nk(e.location)
}

function rl(e) {
  rc(e.subsystem)
}

function rc(e) {
  e === eA.iA.AUTOMATIC ? (t4({
    automaticAudioSubsystem: true
  }), ru()) : (t4({
    automaticAudioSubsystem: false
  }), eX.setAudioSubsystem(e))
}

function ru() {
  eX.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rd(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tV(i, null), null != t || null == n) {
    tf = false;
    return
  }
  if (tf) return;
  tf = true;
  let a = tU();
  (a.mute || a.deaf) && (t4({
    deaf: false,
    mute: false
  }), eX.eachConnection(tZ))
}

function rf(e) {
  let {
    application: t
  } = e;
  eJ.add(t.id)
}

function r_(e) {
  let {
    application: t
  } = e;
  eJ.delete(t.id)
}

function rp(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e$ = false, eX.eachConnection(tZ);
      break;
    case "video":
      tV(false)
  }
}

function rh(e) {
  e$ = e.enabled, e.unmute && t4({
    mute: false,
    deaf: false
  }), eX.eachConnection(tZ)
}

function rm(e) {
  let {
    enabled: t
  } = e;
  $.Z.requestPermission(eI.Eu.CAMERA), tV(t)
}

function rg(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = eo.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = ns(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (eX.setClipsSource(null), (0, el.isWindows)() && null != o.desktopSource.soundshareId && S.pn(o.desktopSource.soundshareId)), null != l && nl(l, c), o = d;
  let f = tk(),
    _ = tU().videoHook;
  eX.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: tQ(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: t$(),
      videoHookStaleFrameTimeoutMs: eZ,
      graphicsCaptureStaleFrameTimeoutMs: eF,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function rE(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, eX.setClipsSource(null))
}

function rb(e) {
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
      s = null != (t = a.context) ? t : eA.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : eo.Z.getPidFromDesktopSource(i);
    el.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = ns(c), null != e && nl(e, r)), tF(s), tV(s === eA.Yn.STREAM && te, {
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
    let e = null != (r = a.context) ? r : eA.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eA.Yn.STREAM && te,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tV(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tV(te, null)
}

function ry(e) {
  let {
    section: t
  } = e;
  return t === eO.oAB.VOICE && t6(), false
}

function rO() {
  return eX.eachConnection(tz), false
}

function rv(e) {
  let {
    enabled: t
  } = e;
  t4({
    openH264: t
  }), eX.setH264Enabled(eW || tq()), eX.eachConnection(e => e.setSoftwareH264(tq()))
}

function rI(e) {
  let {
    enabled: t
  } = e, n = t4({
    aecDumpEnabled: t
  });
  eX.setAecDump(n.aecDumpEnabled)
}

function rS(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  eQ = Object.values(eA.Yn).reduce((e, n) => {
    let r = n,
      i = ez();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(eL, eQ), t5()
}

function rT(e) {
  let {
    state: t
  } = e, n = D.Z.isEnabled();
  if (t === eO.$7l.BACKGROUND && te && !n) ts = true, tV(false);
  else {
    if (t !== eO.$7l.ACTIVE || !ts) returnfalse;
    ts = false, tV(true)
  }
  returntrue
}

function rA(e) {
  eX.eachConnection(t => t.setBitRate(e.bitrate))
}

function rC() {
  if (!te && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tV(false, null)
}

function rN() {
  return !!tv && (tv = false, true)
}

function rR(e) {
  eX.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rP(e) {
  let {
    settings: t
  } = e;
  eX.applyMediaFilterSettings(t).finally(() => {
    tI = false, r.emitChange()
  })
}

function rw() {
  tI = true
}

function rD() {
  tI = false
}

function rL(e) {
  tD = e.enabled
}
class rx extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tX(), t2(), rn(), nI(), tP = {
      [Chunk65154.AN.VIDEO]: eX.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: eX.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: eX.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return eX.supports(e)
  }
  supportsInApp(e) {
    return tP[e] || eX.supports(e)
  }
  isSupported() {
    return eX.supported()
  }
  isExperimentalEncodersSupported() {
    return eX.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eX.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return n9()
  }
  isNoiseCancellationError() {
    return tv
  }
  isAutomaticGainControlSupported() {
    return eX.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !t1() && (eX.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || eX.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return eX.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eX.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return n9()
  }
  isAecDumpSupported() {
    return eX.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eX.supports(Chunk65154.AN.VIDEO) && eX.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(tO)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && eW && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tU().aecDumpEnabled
  }
  getMediaEngine() {
    return eX
  }
  getVideoComponent() {
    return eX.Video
  }
  getCameraComponent() {
    return eX.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return tm
  }
  isEnabled() {
    return e$
  }
  isMute() {
    return this.isSelfMute() || e5
  }
  isDeaf() {
    return this.isSelfDeaf() || e9
  }
  hasContext(e) {
    return null != eQ[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && e6
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tU(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && e7
  }
  shouldSkipMuteUnmuteSound() {
    return tr
  }
  notifyMuteUnmuteSoundWasSkipped() {
    tr = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tD
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tU(module).deaf
  }
  isVideoEnabled() {
    return te && tl
  }
  isVideoAvailable() {
    return Object.values(e8).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e1 === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e1 === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
    return e !== e_.default.getId() && (tU(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return eX.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
    return null != (t = tU(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
    return null != (t = tU(n).videoToggleStateMap[e]) ? t : eO.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
    return t === eA.Yn.DEFAULT && tC.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tC.size > 0
  }
  isMediaFilterSettingLoading() {
    return tI
  }
  isNativeAudioPermissionReady() {
    return tT
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e1
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e3
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT,
      n = tU(t).localPans[e];
    return null != n ? n : eB
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT,
      n = t === eA.Yn.STREAM ? eA.Yh : eA.Qx,
      r = tU(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tU().inputVolume
  }
  getOutputVolume() {
    return tU().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tU(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tU(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tg
  }
  getActiveVoiceFilterAppliedAt() {
    return tE
  }
  getPreviousVoiceFilter() {
    return tb
  }
  getPreviousVoiceFilterAppliedAt() {
    return ty
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tU().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tU().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(eQ, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eO.pM4.PUSH_TO_TALK && eJ.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return ne(e2, tU().inputDeviceId)
  }
  getOutputDeviceId() {
    return ne(e4, tU().outputDeviceId)
  }
  getVideoDeviceId() {
    return ne(e8, tU().videoDeviceId)
  }
  getInputDevices() {
    return e2
  }
  getOutputDevices() {
    return e4
  }
  getVideoDevices() {
    return e8
  }
  getEchoCancellation() {
    let e = tU();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return eX.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tU().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tU().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tU().h265Enabled
  }
  getLoopback() {
    return tR.size > 0
  }
  getLoopbackReasons() {
    return tR
  }
  getNoiseSuppression() {
    let e = tU();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tU();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tU().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tU().noiseCancellation
  }
  getExperimentalEncoders() {
    return tU().experimentalEncoders
  }
  getHardwareEncoding() {
    return eW
  }
  getEnableSilenceWarning() {
    return tU().silenceWarning
  }
  getDebugLogging() {
    return eX.getDebugLogging()
  }
  getQoS() {
    return tU().qos
  }
  getAttenuation() {
    return tU().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tU().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tU().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return t0() && tU().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : eX.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return eX.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tU().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tU(module)
  }
  getState() {
    return {
      settingsByContext: eQ,
      inputDevices: e2,
      outputDevices: e4,
      appSupported: tP,
      krispModuleLoaded: tp,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: e1
    }
  }
  getInputDetected() {
    return tc
  }
  getNoInputDetectedNotice() {
    return td
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eX.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return e0
  }
  getVideoHook() {
    return tU().videoHook
  }
  supportsVideoHook() {
    return eX.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tU().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return eX.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && eX.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tU().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return eX.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tM
  }
  getUseGamescopeCapture() {
    return tx
  }
  getOpenH264() {
    return tU().openH264
  }
  getEverSpeakingWhileMuted() {
    return ti
  }
  getSpeakingWhileMuted() {
    return ta
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return th
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tU().modeOptions.vadKrispActivationThreshold) ? module : eG
  }
  hasActiveCallKitCall() {
    return tL
  }
  setHasActiveCallKitCall(e) {
    tL = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? eX.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && t$() : (0, Chunk358085.isWindows)() ? eX.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && eX.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    }).loadWasmModule), eX.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!tS && (tS = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      eX.fetchAsyncResources(module).catch(e => {
        eD.warn("DAVE preload failed:", e), eu.Z.captureException(e)
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
    let e = eX.getSupportedSecureFramesProtocolVersion(),
      t = Chunk529558.m.getCurrentConfig({
        location: "MediaEngineStore"
      });
    return 114 === module && (e = 1), exports.canSupportDaveProtocol && module >= exports.protocolVersionFloor ? module : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tw
  }
}

function rM(e) {
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
eN(rx, "displayName", "MediaEngineStore");
let rk = r = new rx(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rd,
  VOICE_STATE_UPDATES: np,
  CONNECTION_OPEN: nc,
  CONNECTION_CLOSED: nd,
  POST_CONNECTION_OPEN: nf,
  RTC_CONNECTION_STATE: n_,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nh,
  AUDIO_TOGGLE_SELF_MUTE: nm,
  AUDIO_SET_SELF_MUTE: ng,
  AUDIO_TOGGLE_SELF_DEAF: nb,
  AUDIO_TOGGLE_LOCAL_MUTE: ny,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nO,
  AUDIO_SET_LOCAL_VOLUME: nS,
  AUDIO_SET_LOCAL_PAN: nT,
  AUDIO_SET_MODE: nA,
  AUDIO_SET_INPUT_VOLUME: nC,
  AUDIO_SET_OUTPUT_VOLUME: nN,
  AUDIO_SET_INPUT_DEVICE: nR,
  AUDIO_SET_OUTPUT_DEVICE: nP,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nD,
  AUDIO_SET_ECHO_CANCELLATION: nj,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nU,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nG,
  AUDIO_SET_LOOPBACK: nZ,
  AUDIO_SET_NOISE_SUPPRESSION: nY,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nW,
  AUDIO_SET_NOISE_CANCELLATION: nK,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nz,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nQ,
  AUDIO_SET_DEBUG_LOGGING: nJ,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n$,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nq,
  MEDIA_ENGINE_SET_VIDEO_HOOK: n0,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n1,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n3,
  AUDIO_SET_ATTENUATION: n2,
  AUDIO_SET_QOS: n4,
  MEDIA_ENGINE_DEVICES: nx,
  AUDIO_VOLUME_CHANGE: nM,
  AUDIO_RESET: n8,
  AUDIO_INPUT_DETECTED: n5,
  AUDIO_SET_SUBSYSTEM: rl,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rs,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rh,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rm,
  MEDIA_ENGINE_PERMISSION: rp,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rb,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nw,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nX,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nL,
  USER_SETTINGS_MODAL_INIT: ry,
  USER_SETTINGS_MODAL_SET_SECTION: ry,
  CERTIFIED_DEVICES_SET: rO,
  RPC_APP_CONNECTED: rf,
  RPC_APP_DISCONNECTED: r_,
  OVERLAY_INITIALIZE: nu,
  MEDIA_ENGINE_SET_OPEN_H264: rv,
  APP_STATE_UPDATE: rT,
  SET_CHANNEL_BITRATE: rA,
  SET_VAD_PERMISSION: n6,
  SET_NATIVE_PERMISSION: n7,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rR,
  MEDIA_ENGINE_SET_AEC_DUMP: rI,
  MEDIA_ENGINE_RESET_SETTINGS: rS,
  CHANNEL_DELETE: rC,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rN,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rP,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rw,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rD,
  USER_SETTINGS_PROTO_UPDATE: nE,
  CLIPS_INIT: rg,
  CLIPS_SETTINGS_UPDATE: rE,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rL,
  VOICE_FILTER_REQUEST_SWITCH: ri,
  VOICE_FILTER_LOOPBACK_TOGGLE: rr,
  VOICE_FILTER_APPLIED: ro,
  VOICE_FILTER_DOWNLOAD_FAILED: ra,
  VOICE_FILTER_APPLY_FAILED: ra
})