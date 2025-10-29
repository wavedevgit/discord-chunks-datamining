/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rM
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

function eC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eC(e, t, n[t])
    })
  }
  return e
}

function eR(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eP(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eR(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eD = new Chunk710845.Z("MediaEngineStore"),
  ew = "MediaEngineStore",
  eL = 4,
  ex = 1,
  eM = 1,
  ek = 1,
  ej = 1,
  eU = .5,
  eG = {
    left: 1,
    right: 1
  },
  eB = 500,
  eZ = 5 * Chunk70956.Z.Millis.SECOND,
  eF = false,
  eV = 100,
  eH = 2 * Chunk70956.Z.Millis.SECOND,
  eY = true,
  eW = 0;

function eK() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eF,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eU,
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
    videoHook: eq.supports(Chunk65154.AN.VIDEO_HOOK),
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
let ez = {
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
  eq = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
eD.enableNativeLogger(true);
let eX = {},
  eQ = new Set([Chunk65154.Yn.DEFAULT]),
  eJ = eq.supports(Chunk65154.AN.AUTO_ENABLE),
  e$ = false,
  e0 = Chunk65154.Yn.STREAM,
  e1 = performance.now(),
  e3 = {
    [Chunk65154.w5]: t6("No Input Devices")
  },
  e2 = {
    [Chunk65154.w5]: t6("No Output Devices")
  },
  e4 = {
    [Chunk65154.w5]: t6("No Video Devices")
  },
  e8 = false,
  e5 = false,
  e6 = false,
  e7 = false,
  e9 = false,
  te = Chunk65154.Av,
  tt = Chunk65154.Av,
  tn = false,
  tr = false,
  ti = false,
  ta = new Chunk846519.V7,
  to = false,
  ts = false,
  tl = null,
  tc = false,
  tu = false,
  td = false,
  tf = false,
  t_ = false,
  tp = [],
  th = false,
  tm = null,
  tg = null,
  tE = null,
  tb = null,
  ty = null,
  tO = false,
  tv = false,
  tI = false,
  tT = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tS = false,
  tA = new Set,
  tC = tS,
  tN = new Set,
  tR = {},
  tP = null,
  tD = true,
  tw = false,
  tL = false,
  tx = false;

function tM() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tk() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = eX[module];
  return null == exports && (t = eK(), eX[module] = exports), exports
}

function tj() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tk(r),
    a = ez[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = eN({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return eP(eN({}, i, a), {
    modeOptions: o
  })
}

function tU(e) {
  var t, n;
  let r = tj(e.context);
  e.setInputMode(r.mode, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && n7(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eU,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tG(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Qx;
  return p().clamp(e, 0, t)
}

function tB(e) {
  let t = tj(e.context),
    n = !eJ || t.mute || t.deaf;
  e.context === eS.Yn.DEFAULT ? n = n || e8 || e5 || e6 || !J.Z.didHavePermission(ev.Eu.AUDIO) : e.context === eS.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eS.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tZ(e) {
  e !== e0 && (null != a && eq.setGoLiveSource(null, e0), e0 = e)
}

function tF() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : e9,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), eq.setGoLiveSource(null, e0)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && eq.setGoLiveSource(null, e0), e9 || i) {
    let e = tj().videoDeviceId;
    e9 && module === Chunk65154.w5 && tt === Chunk65154.w5 && te !== Chunk65154.Av ? e = te : tt = module, te = (e9 = i) ? t9(e4, module) : Chunk65154.Av, eq.setVideoInputDevice(te)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tM(),
        n = tj().videoHook,
        i = tX(),
        a = i ? tQ() ? Chunk70722.zj : Chunk70722.ZM : 0;
      eq.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: tJ(),
          videoHookStaleFrameTimeoutMs: eB,
          graphicsCaptureStaleFrameTimeoutMs: eZ,
          hdrCaptureMode: exports
        },
        quality: module
      }, e0)
    }
    null != o.cameraSource && eq.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e0)
  }
}

function tV(e) {
  switch (e) {
    case eS.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case eS.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case eS.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tH(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eN({
    enabled: e
  }, t)
}

function tY(e, t) {
  e.setAutomaticGainControl(tH(t))
}
async function tW(e, t) {
  if ((0, es.isIOS)() || (0, es.isMac)()) {
    let e = await eq.getSystemMicrophoneMode();
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

function tK(e) {
  let t = tj(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ep.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ep.Z.hasNoiseSuppression(n) || t.noiseSuppression), tY(e, ep.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tW(e, t.noiseCancellation), e.setVoiceFilterId(tm), (0, es.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tz() {
  var e;
  return !(0, Chunk64592.f)("MediaEngine").enabled && !(0, Chunk986855.M)("MediaEngine").enabled && (null == (e = tj().openH264) || module)
}

function tq() {
  eq.on(Chunk46973.aB.Connection, e => {
    tU(e), tB(e), tK(e);
    let t = tj();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos), e.setExperimentalEncoders(t.experimentalEncoders), e.setHardwareH264(eY), e.setSoftwareH264(tz());
    let n = em.Z.getGuildId(),
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
    i && e.setExperimentFlag(eS.V8.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(eS.V8.PTT_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eS.V8.SKIP_ENCODE, true);
    let l = false,
      c = true;
    if (e.setExperimentFlag(eS.V8.RESET_DECODER_ON_ERRORS, true), l && e.setExperimentFlag(eS.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), c && e.setExperimentFlag(eS.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eS.Yn.STREAM) {
      let t = nt(e2);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = H.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, es.isWindows)() ? (null == tP ? true : tP.startsWith("NVIDIA")) || (null == tP ? true : tP.startsWith("AMD")) ? e.setExperimentFlag(eS.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, true) : ((0, es.isMac)() || (0, es.isLinux)()) && e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, true), (0, es.isWindows)() && e.setExperimentFlag(eS.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, es.isWeb)()) {
      let {
        enabled: t
      } = (0, F.A)("MediaEngineStore");
      e.setExperimentFlag(eS.V8.BROWSER_HEVC, t)
    }
    if (eq.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(eS.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = q.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eS.ux)
    }
    for (let n of (t = tj(e.context), e.setPostponeDecodeLevel(eV), Object.keys(t.localMutes))) n !== ef.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== ef.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
    }), e.context === eS.Yn.DEFAULT && (tr = false, ti = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      tr = true, ti = true, r.emitChange(), ta.stop(), ta.start(eH, () => {
        ti = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && ei.default.track(ey.rMx.VIDEOHOOK_INITIALIZED, eN({
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
        underlyingError: tV(e)
      }), tO = true, ei.default.track(ey.rMx.VOICE_PROCESSING, {
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
        underlyingError: tV(e)
      }), ei.default.track(ey.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eS.Yn.DEFAULT,
        mode: ey.pM4.VOICE_ACTIVITY,
        options: eP(eN({}, tj(eS.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      ei.default.track(ey.rMx.SDP_ERROR, {
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
    }), e.setBitRate(e_.Z.bitrate), e.applyVideoQualityMode(eb.Z.mode), eq.supports(eS.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && eq.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled)
  }), eq.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), eq.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), eq.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), eq.on(Chunk46973.aB.AudioPermission, e => {
    tT = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), eq.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), eq.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
  }), eq.on(Chunk46973.aB.VideoInputInitialized, e => {
    ei.default.track(ey.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * eo.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: em.Z.getMediaSessionId(),
      rtc_connection_id: em.Z.getRTCConnectionId()
    })
  }), eq.on(Chunk46973.aB.AudioInputInitialized, e => {
    ei.default.track(ey.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * eo.Z.Millis.SECOND),
      rtc_connection_id: em.Z.getRTCConnectionId()
    })
  }), eq.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), eq.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), eq.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
  }), eq.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), eq.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), eq.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), eq.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    ei.default.track(ey.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), eq.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eP(eN({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eP(eN({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), eq.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eW++,
          context: n.context
        }
      })
    })
  }), eq.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rx(e);
    null !== t && ei.default.track(ey.rMx.VOICE_QUEUE_METRICS, t)
  }), eq.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nZ(), nV(), t1.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tP = e.gpu_brand)
  }), eq.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    eq.eachConnection(tK)
  })
}

function tX() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function tQ() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function tJ() {
  return (0, Chunk358085.isMac)() && eq.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function t$() {
  return (0, Chunk358085.isWindows)() && eq.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eq.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function t0() {
  return eq.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let t1 = new class {
  start() {
    this.started || (this.started = true, eq.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eq.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tj();
    !tc && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eC(this, "stateChangeTimeout", true), eC(this, "noVoiceTimeout", 5e3), eC(this, "voiceTimeout", 1500), eC(this, "started", false), eC(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tu = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function t3() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(ew, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), eX = null != (e = Chunk433517.K.get(ew)) ? module : {}, p().each(eX, e => {
    if (p().defaultsDeep(e, eK()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ed.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eL && (e.vadUseKrispSettingVersion = eL, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eF)
    }
    eq.supports(eS.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < ej && (e.sidechainCompressionSettingVersion = ej, e.sidechainCompression = true), (0, es.isWeb)() ? e.ncUseKrispjsSettingVersion !== eM && (e.ncUseKrispjsSettingVersion = eM, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== ex && (e.ncUseKrispSettingVersion = ex, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== ek && (e.hardwareH264 = true, e.hardwareEnabledVersion = ek), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), t8()
}

function t2(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tk(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ew, eX), r
}

function t4() {
  Chunk433517.K.remove(ew), location.reload()
}

function t8() {
  let e = tj();
  eq.setAudioInputDevice(module.inputDeviceId), eq.setAudioOutputDevice(module.outputDeviceId), tF(), eq.setInputVolume(module.inputVolume), eq.setOutputVolume(module.outputVolume), eq.setH264Enabled(eY || tz()), eq.setAv1Enabled(eY), eq.setH265Enabled(eY), eq.setAecDump(module.aecDumpEnabled), eq.setSidechainCompression(module.sidechainCompression), eq.setSidechainCompressionStrength(module.sidechainCompressionStrength), eq.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t5() {
  eJ || eq.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function t6(e) {
  return {
    id: eS.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function t7(e, t) {
  if (0 === e.length) {
    let e = t6(t);
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

function t9(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eS.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function ne(e) {
  let t = e3;
  if (e3 = t7(e, eA.intl.string(eA.t["/QIjDA"])), !p().isEqual(e3, t)) {
    let e = tj(),
      t = t9(e3, e.inputDeviceId);
    eq.setAudioInputDevice(t)
  }
}

function nt(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nn(e) {
  eq.eachConnection(t => {
    t.context === eS.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nr(e) {
  let t = e2;
  if (e2 = t7(e, eA.intl.string(eA.t.xlUg0v)), !p().isEqual(e2, t)) {
    let e = tj(),
      n = t9(e2, e.outputDeviceId);
    eq.setAudioOutputDevice(n);
    let r = nt(t),
      i = nt(e2);
    r !== i && nn(i)
  }
}

function ni(e) {
  ts = e.length > 0;
  let t = e4;
  if (e4 = t7(e, eA.intl.string(eA.t.WKWARY)), e9 && !p().isEqual(e4, t)) {
    var n;
    let e = true !== e4[te],
      r = te === eS.w5 && (null == (n = t[eS.w5]) ? true : n.disabled);
    tF(e || r)
  }
}

function na() {
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
      } = tj(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], eq.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], eq.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t2({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function no(e) {
  if (null == r) return eD.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : ea.Z.getAudioPid(e),
      n = "";
    return null != t && (n = ea.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function ns(e, t) {
  (0, es.isWindows)() && e > 1 && T.YT(e, {
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

function nl(e) {
  i = e.sessionId, e8 = false, e7 = false;
  let t = tj();
  if (t$() && (t0() ? rl(eS.iA.AUTOMATIC) : t.automaticAudioSubsystem && rc()), eq.supports(eS.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, es.isDesktop)() ? e = (0, j.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, es.isIOS)() || (0, es.isAndroid)()) && (e = (0, U.W)({
      location: "handleConnectionOpen"
    }).enabled), eq.setOffloadAdmControls(e)
  }(0, en.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, es.isDesktop)() && (er.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eS.Yn.DEFAULT,
    playSoundEffect: true
  }), t2({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), na()
}

function nc(e) {
  let {
    mediaEngineState: t
  } = e;
  eX = t.settingsByContext, e3 = t.inputDevices, e2 = t.outputDevices, tR = t.appSupported, t_ = t.krispModuleLoaded, s = t.krispVersion, e0 = t.goLiveContext
}

function nu() {
  i = null
}

function nd() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.N.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nf(e) {
  switch (e.state) {
    case ey.hes.CONNECTING:
      t5();
      break;
    case ey.hes.RTC_CONNECTING:
      tc = false, tu = false;
      break;
    case ey.hes.RTC_CONNECTED:
      tF();
      break;
    case ey.hes.DISCONNECTED:
      nO(), nv()
  }
  t1.update()
}

function n_(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e8 = t.mute || t.suppress, e7 = t.deaf, eq.eachConnection(tB);
      let e = null != t.guildId && null != t.channelId && null != ty && ty !== t.channelId,
        n = !td && null == t.channelId;
      return tF(!e && !n && e9), ty = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== ef.default.getId() || null != em.Z.getChannelId() || tF(false, null), e
  }, false)
}

function np(e) {
  let {
    mute: t
  } = e;
  e5 = t, eq.eachConnection(tB)
}

function nh(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tj(t);
  if (t === eS.Yn.DEFAULT && (J.Z.requestPermission(ev.Eu.AUDIO), e6)) returnfalse;
  (r = !i && !r) || (i = false), n || (tn = true), t2({
    mute: r,
    deaf: i
  }, t), eq.eachConnection(tB)
}

function nm(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t2({
    mute: n
  }, t), r || (tn = true), eq.eachConnection(tB)
}

function ng(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eI.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  na(true)
}

function nE(e) {
  let {
    context: t
  } = e;
  t2({
    deaf: !tj(t).deaf
  }, t), eq.eachConnection(tB)
}

function nb(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === ef.default.getId()) return;
  let {
    localMutes: r
  } = tj(t);
  r[n] ? delete r[n] : r[n] = true, t2({
    localMutes: r
  }, t), eq.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function ny(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === ey.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tj(l),
    m = null != (t = h[c]) && t,
    g = tA.has(c),
    E = u === ey.ZUi.AUTO_ENABLED || u === ey.ZUi.MANUAL_ENABLED;
  eD.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eS.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  eD.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tj(l);
  if (I[c] === ey.ZUi.AUTO_PROBING && u === ey.ZUi.AUTO_ENABLED && (0, Q.Z)(c, p ? eS.fC.AUTO_DISABLE : eS.fC.AUTO_ENABLE, E), I[c] = u, t2({
      videoToggleStateMap: I
    }, l, d), u === ey.ZUi.AUTO_PROBING ? null == (n = em.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = em.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tC || (eD.info("isAutoDisableAllowed=".concat(tC, " - disabling VideoHealthManager")), null == (a = em.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tC) return;
    (0, Q.Z)(c, p ? eS.fC.AUTO_DISABLE : eS.fC.AUTO_ENABLE, E), p ? tA.add(c) : tA.delete(c)
  } else v && (g && !p ? (eD.info("disallowing auto-disable for this session because of manual override by user"), tC = false, null == (s = em.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, Q.Z)(c, eS.fC.MANUAL_REENABLE, E)) : (0, Q.Z)(c, p ? eS.fC.MANUAL_DISABLE : eS.fC.MANUAL_ENABLE, E));
  y && !p && tA.delete(c), p ? h[c] = true : delete h[c], t2({
    disabledLocalVideos: h
  }, l, d), eq.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nO() {
  if (0 === tA.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tj(module);
  tA.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eq.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tA.clear(), t2({
    disabledLocalVideos: exports
  }, module, false)
}

function nv() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tj(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t2({
    videoToggleStateMap: exports
  }, module, false)
}

function nI(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === ef.default.getId()) return;
  let i = t === eS.Yn.STREAM ? eS.Yh : eS.Qx,
    {
      localVolumes: a
    } = tj(t);
  r === i ? delete a[n] : a[n] = r, t2({
    localVolumes: a
  }, t), eq.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nT(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tj(t);
  a[n] = {
    left: r,
    right: i
  }, t2({
    localPans: a
  }, t), eq.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nS(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t2({
    mode: n,
    modeOptions: r
  }, t), eq.eachConnection(tU), t1.update()
}

function nA(e) {
  let {
    volume: t
  } = e;
  t2({
    inputVolume: tG(t)
  }), eq.setInputVolume(t)
}

function nC(e) {
  let {
    volume: t
  } = e;
  t2({
    outputVolume: t
  }), eq.setOutputVolume(t)
}

function nN(e) {
  let {
    id: t
  } = e;
  t = t9(e3, t), e1 = performance.now(), t2({
    inputDeviceId: t
  }), eq.setAudioInputDevice(t)
}

function nR(e) {
  let {
    id: t
  } = e;
  t2({
    outputDeviceId: t = t9(e2, t)
  }), eq.setAudioOutputDevice(t)
}

function nP(e) {
  let {
    id: t
  } = e;
  t2({
    videoDeviceId: t = t9(e4, t)
  }), tF()
}

function nD(e) {
  let {
    inputProfile: t
  } = e;
  t2({
    activeInputProfile: t
  });
  let n = tj();
  eq.eachConnection(e => {
    tU(e), tY(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tW(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), eq.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), t1.update(), nF()
}

function nw(e) {
  return e$ !== e.required && (e$ = e.required, e.required || eq.interact(), true)
}

function nL(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  ne(t), nr(n), ni(r)
}

function nx(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t2({
    inputVolume: tG(t),
    outputVolume: n
  })
}

function nM(e) {
  var t;
  let n = tj(),
    r = eq.getAudioSubsystem(),
    i = eq.getAudioLayer(),
    a = t9(e3, n.inputDeviceId),
    o = null == (t = e3[a]) ? true : t.name;
  ei.default.track(ey.rMx.VOICE_PROCESSING, {
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

function nk(e) {
  let t = t2({
    echoCancellation: e.enabled
  });
  eq.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nF(), nM(e.location)
}

function nj(e) {
  nG(e.enabled)
}

function nU(e) {
  let t = t2({
    sidechainCompressionStrength: e.strength
  });
  eq.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nG(e) {
  let t = t2({
    sidechainCompression: e
  });
  eq.setSidechainCompression(t.sidechainCompression)
}

function nB(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tN.add(n) : tN.delete(n), nZ(), nF()
}

function nZ() {
  let e = !tN.has("voice_filter_preview") && !tN.has("mic_test");
  eq.setMaybePreprocessMute(module)
}

function nF() {
  let e = tj(),
    t = tN.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tH(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tm,
    c = tN.has("voice_filter") && 1 === tN.size;
  eq.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function nV() {
  var e, t, n, r;
  if (!eq.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  if ((null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) == null || !(null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i)) return;
  let {
    enabled: a
  } = await (0, Chunk302630.m)("setGamescopeVaapiEnabled");
  tx = a, a && eq.supports(Chunk65154.AN.GAMESCOPE_CAPTURE) && (tL = true)
}

function nH(e) {
  let t = t2({
    noiseSuppression: e.enabled
  });
  eq.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nF(), nM(e.location)
}

function nY(e) {
  let t = t2({
    automaticGainControl: e.enabled
  });
  eq.eachConnection(e => tY(e, t.automaticGainControl)), nF(), nM(e.location)
}

function nW(e) {
  let t = t2({
    noiseCancellation: e.enabled
  });
  eq.eachConnection(e => tW(e, t.noiseCancellation)), nF(), nM(e.location)
}

function nK(e) {
  $.Z.setKrispModelOverride(e.model), c = e.model, nF()
}

function nz(e) {
  var t;
  (0, es.isWeb)() || (th = e.enabled, null == (t = eq.setNoiseCancellationEnableStats) || t.call(eq, e.enabled))
}

function nq(e) {
  let t = t2({
    experimentalEncoders: e.enabled
  });
  eq.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function nX(e) {
  t2({
    silenceWarning: e.enabled
  }), t1.update()
}

function nQ(e) {
  eq.setDebugLogging(e.enabled)
}

function nJ(e) {
  let {
    level: t
  } = e;
  l = t, $.Z.setKrispSuppressionLevel(t)
}

function n$(e) {
  t2({
    videoHook: e.enabled
  })
}

function n0(e) {
  t2({
    experimentalSoundshare2: e.enabled
  })
}

function n1(e) {
  let {
    enabled: t
  } = e;
  t2({
    useSystemScreensharePicker: t
  })
}

function n3(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t2({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  eq.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n2(e) {
  let {
    enabled: t
  } = e;
  t2({
    qos: t
  }), eq.eachConnection(e => e.setQoS(t))
}

function n4() {
  t4()
}

function n8(e) {
  let {
    inputDetected: t
  } = e;
  tl = t, !tc && tl && (tc = true, t1.update())
}

function n5(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === e6) returnfalse;
  e6 = n, eq.eachConnection(tB)
}

function n6(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === ev.PQ.ACCEPTED;
  switch (n) {
    case ev.Eu.AUDIO:
      tT = true, eq.eachConnection(tB);
      break;
    case ev.Eu.CAMERA:
      !r && e9 && tF(false);
      break;
    default:
      returnfalse
  }
}

function n7() {
  return t_ || false
}
async function n9() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    t_ = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tp = e, r.emitChange()
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
    }), t2({
      noiseCancellation: false
    })
  } finally {
    tf = false
  }
}

function re() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function rt() {
  !re() || __OVERLAY__ || tf || t_ ? (0, Chunk358085.isWeb)() && eq.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (t_ = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t2({
    noiseCancellation: false
  }) : (tf = true, n9())
}

function rn(e) {
  let {
    enabled: t
  } = e;
  ei.default.track(ey.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tm ? tm : null,
    enabled: t
  }), t2({
    voiceFilterPlaybackEnabled: t
  })
}

function rr(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t2({
    mostRecentlyRequestedVoiceFilter: t
  }), eq.eachConnection(e => e.setVoiceFilterId(t))
}

function ri() {
  t2({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function ra(e) {
  let {
    voiceFilterId: t
  } = e;
  tE = tm, tb = tg, tm = t, tg = null === t ? null : Date.now()
}

function ro(e) {
  let t = e.bypassEnabled;
  t2({
    bypassSystemInputProcessing: t
  }), eq.setAudioInputBypassSystemProcessing(t), nM(e.location)
}

function rs(e) {
  rl(e.subsystem)
}

function rl(e) {
  e === eS.iA.AUTOMATIC ? (t2({
    automaticAudioSubsystem: true
  }), rc()) : (t2({
    automaticAudioSubsystem: false
  }), eq.setAudioSubsystem(e))
}

function rc() {
  eq.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function ru(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tF(i, null), null != t || null == n) {
    td = false;
    return
  }
  if (td) return;
  td = true;
  let a = tj();
  (a.mute || a.deaf) && (t2({
    deaf: false,
    mute: false
  }), eq.eachConnection(tB))
}

function rd(e) {
  let {
    application: t
  } = e;
  eQ.add(t.id)
}

function rf(e) {
  let {
    application: t
  } = e;
  eQ.delete(t.id)
}

function r_(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      eJ = false, eq.eachConnection(tB);
      break;
    case "video":
      tF(false)
  }
}

function rp(e) {
  eJ = e.enabled, e.unmute && t2({
    mute: false,
    deaf: false
  }), eq.eachConnection(tB)
}

function rh(e) {
  let {
    enabled: t
  } = e;
  J.Z.requestPermission(ev.Eu.CAMERA), tF(t)
}

function rm(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = ea.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = no(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (eq.setClipsSource(null), (0, es.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && ns(l, c), o = d;
  let f = tM(),
    _ = tj().videoHook;
  eq.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: tX(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: tJ(),
      videoHookStaleFrameTimeoutMs: eB,
      graphicsCaptureStaleFrameTimeoutMs: eZ,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function rg(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, eq.setClipsSource(null))
}

function rE(e) {
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
      s = null != (t = a.context) ? t : eS.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : ea.Z.getPidFromDesktopSource(i);
    es.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = no(c), null != e && ns(e, r)), tZ(s), tF(s === eS.Yn.STREAM && e9, {
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
    let e = null != (r = a.context) ? r : eS.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eS.Yn.STREAM && e9,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tF(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tF(e9, null)
}

function rb(e) {
  let {
    section: t
  } = e;
  return t === ey.oAB.VOICE && t5(), false
}

function ry() {
  return eq.eachConnection(tK), false
}

function rO(e) {
  let {
    enabled: t
  } = e;
  t2({
    openH264: t
  }), eq.setH264Enabled(eY || tz()), eq.eachConnection(e => e.setSoftwareH264(tz()))
}

function rv(e) {
  let {
    enabled: t
  } = e, n = t2({
    aecDumpEnabled: t
  });
  eq.setAecDump(n.aecDumpEnabled)
}

function rI(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  eX = Object.values(eS.Yn).reduce((e, n) => {
    let r = n,
      i = eK();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(ew, eX), t8()
}

function rT(e) {
  let {
    state: t
  } = e, n = w.Z.isEnabled();
  if (t === ey.$7l.BACKGROUND && e9 && !n) to = true, tF(false);
  else {
    if (t !== ey.$7l.ACTIVE || !to) returnfalse;
    to = false, tF(true)
  }
  returntrue
}

function rS(e) {
  eq.eachConnection(t => t.setBitRate(e.bitrate))
}

function rA() {
  if (!e9 && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tF(false, null)
}

function rC() {
  return !!tO && (tO = false, true)
}

function rN(e) {
  eq.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rR(e) {
  let {
    settings: t
  } = e;
  eq.applyMediaFilterSettings(t).finally(() => {
    tv = false, r.emitChange()
  })
}

function rP() {
  tv = true
}

function rD() {
  tv = false
}

function rw(e) {
  tD = e.enabled
}
class rL extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tq(), t3(), rt(), nv(), tR = {
      [Chunk65154.AN.VIDEO]: eq.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: eq.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: eq.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return eq.supports(e)
  }
  supportsInApp(e) {
    return tR[e] || eq.supports(e)
  }
  isSupported() {
    return eq.supported()
  }
  isExperimentalEncodersSupported() {
    return eq.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eq.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return n7()
  }
  isNoiseCancellationError() {
    return tO
  }
  isAutomaticGainControlSupported() {
    return eq.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !t0() && (eq.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || eq.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return eq.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eq.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return n7()
  }
  isAecDumpSupported() {
    return eq.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eq.supports(Chunk65154.AN.VIDEO) && eq.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(ty)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && eY && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tj().aecDumpEnabled
  }
  getMediaEngine() {
    return eq
  }
  getVideoComponent() {
    return eq.Video
  }
  getCameraComponent() {
    return eq.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return th
  }
  isEnabled() {
    return eJ
  }
  isMute() {
    return this.isSelfMute() || e8
  }
  isDeaf() {
    return this.isSelfDeaf() || e7
  }
  hasContext(e) {
    return null != eX[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && e5
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tj(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && e6
  }
  shouldSkipMuteUnmuteSound() {
    return tn
  }
  notifyMuteUnmuteSoundWasSkipped() {
    tn = false
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
    return !this.isSupported() || tj(module).deaf
  }
  isVideoEnabled() {
    return e9 && ts
  }
  isVideoAvailable() {
    return Object.values(e4).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e0 === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e0 === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
    return e !== ef.default.getId() && (tj(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return eq.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
    return null != (t = tj(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
    return null != (t = tj(n).videoToggleStateMap[e]) ? t : ey.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
    return t === eS.Yn.DEFAULT && tA.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tA.size > 0
  }
  isMediaFilterSettingLoading() {
    return tv
  }
  isNativeAudioPermissionReady() {
    return tT
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e0
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e1
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
      n = tj(t).localPans[e];
    return null != n ? n : eG
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
      n = t === eS.Yn.STREAM ? eS.Yh : eS.Qx,
      r = tj(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tj().inputVolume
  }
  getOutputVolume() {
    return tj().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tj(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tj(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tm
  }
  getActiveVoiceFilterAppliedAt() {
    return tg
  }
  getPreviousVoiceFilter() {
    return tE
  }
  getPreviousVoiceFilterAppliedAt() {
    return tb
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tj().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tj().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(eX, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === ey.pM4.PUSH_TO_TALK && eQ.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return t9(e3, tj().inputDeviceId)
  }
  getOutputDeviceId() {
    return t9(e2, tj().outputDeviceId)
  }
  getVideoDeviceId() {
    return t9(e4, tj().videoDeviceId)
  }
  getInputDevices() {
    return e3
  }
  getOutputDevices() {
    return e2
  }
  getVideoDevices() {
    return e4
  }
  getEchoCancellation() {
    let e = tj();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return eq.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tj().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tj().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tj().h265Enabled
  }
  getLoopback() {
    return tN.size > 0
  }
  getLoopbackReasons() {
    return tN
  }
  getNoiseSuppression() {
    let e = tj();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tj();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tj().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tj().noiseCancellation
  }
  getExperimentalEncoders() {
    return tj().experimentalEncoders
  }
  getHardwareEncoding() {
    return eY
  }
  getEnableSilenceWarning() {
    return tj().silenceWarning
  }
  getDebugLogging() {
    return eq.getDebugLogging()
  }
  getQoS() {
    return tj().qos
  }
  getAttenuation() {
    return tj().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tj().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tj().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return t$() && tj().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : eq.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return eq.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tj().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tj(module)
  }
  getState() {
    return {
      settingsByContext: eX,
      inputDevices: e3,
      outputDevices: e2,
      appSupported: tR,
      krispModuleLoaded: t_,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: e0
    }
  }
  getInputDetected() {
    return tl
  }
  getNoInputDetectedNotice() {
    return tu
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eq.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return e$
  }
  getVideoHook() {
    return tj().videoHook
  }
  supportsVideoHook() {
    return eq.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tj().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return eq.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && eq.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tj().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return eq.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tx
  }
  getUseGamescopeCapture() {
    return tL
  }
  getOpenH264() {
    return tj().openH264
  }
  getEverSpeakingWhileMuted() {
    return tr
  }
  getSpeakingWhileMuted() {
    return ti
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tp
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tj().modeOptions.vadKrispActivationThreshold) ? module : eU
  }
  hasActiveCallKitCall() {
    return tw
  }
  setHasActiveCallKitCall(e) {
    tw = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? eq.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && tJ() : (0, Chunk358085.isWindows)() ? eq.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && eq.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    }).loadWasmModule), eq.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!tI && (tI = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      eq.fetchAsyncResources(module).catch(e => {
        eD.warn("DAVE preload failed:", e), ec.Z.captureException(e)
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
    let e = eq.getSupportedSecureFramesProtocolVersion(),
      t = Chunk529558.m.getCurrentConfig({
        location: "MediaEngineStore"
      });
    return 114 === module && (e = 1), exports.canSupportDaveProtocol && module >= exports.protocolVersionFloor ? module : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tP
  }
}

function rx(e) {
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
eC(rL, "displayName", "MediaEngineStore");
let rM = r = new rL(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: ru,
  VOICE_STATE_UPDATES: n_,
  CONNECTION_OPEN: nl,
  CONNECTION_CLOSED: nu,
  POST_CONNECTION_OPEN: nd,
  RTC_CONNECTION_STATE: nf,
  AUDIO_SET_TEMPORARY_SELF_MUTE: np,
  AUDIO_TOGGLE_SELF_MUTE: nh,
  AUDIO_SET_SELF_MUTE: nm,
  AUDIO_TOGGLE_SELF_DEAF: nE,
  AUDIO_TOGGLE_LOCAL_MUTE: nb,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: ny,
  AUDIO_SET_LOCAL_VOLUME: nI,
  AUDIO_SET_LOCAL_PAN: nT,
  AUDIO_SET_MODE: nS,
  AUDIO_SET_INPUT_VOLUME: nA,
  AUDIO_SET_OUTPUT_VOLUME: nC,
  AUDIO_SET_INPUT_DEVICE: nN,
  AUDIO_SET_OUTPUT_DEVICE: nR,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nD,
  AUDIO_SET_ECHO_CANCELLATION: nk,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nj,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nU,
  AUDIO_SET_LOOPBACK: nB,
  AUDIO_SET_NOISE_SUPPRESSION: nH,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nY,
  AUDIO_SET_NOISE_CANCELLATION: nW,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nK,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nX,
  AUDIO_SET_DEBUG_LOGGING: nQ,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nJ,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nz,
  MEDIA_ENGINE_SET_VIDEO_HOOK: n$,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n0,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n1,
  AUDIO_SET_ATTENUATION: n3,
  AUDIO_SET_QOS: n2,
  MEDIA_ENGINE_DEVICES: nL,
  AUDIO_VOLUME_CHANGE: nx,
  AUDIO_RESET: n4,
  AUDIO_INPUT_DETECTED: n8,
  AUDIO_SET_SUBSYSTEM: rs,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: ro,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rp,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rh,
  MEDIA_ENGINE_PERMISSION: r_,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rE,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nP,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nq,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nw,
  USER_SETTINGS_MODAL_INIT: rb,
  USER_SETTINGS_MODAL_SET_SECTION: rb,
  CERTIFIED_DEVICES_SET: ry,
  RPC_APP_CONNECTED: rd,
  RPC_APP_DISCONNECTED: rf,
  OVERLAY_INITIALIZE: nc,
  MEDIA_ENGINE_SET_OPEN_H264: rO,
  APP_STATE_UPDATE: rT,
  SET_CHANNEL_BITRATE: rS,
  SET_VAD_PERMISSION: n5,
  SET_NATIVE_PERMISSION: n6,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rN,
  MEDIA_ENGINE_SET_AEC_DUMP: rv,
  MEDIA_ENGINE_RESET_SETTINGS: rI,
  CHANNEL_DELETE: rA,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rC,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rR,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rP,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rD,
  USER_SETTINGS_PROTO_UPDATE: ng,
  CLIPS_INIT: rm,
  CLIPS_SETTINGS_UPDATE: rg,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rw,
  VOICE_FILTER_REQUEST_SWITCH: rr,
  VOICE_FILTER_LOOPBACK_TOGGLE: rn,
  VOICE_FILTER_APPLIED: ra,
  VOICE_FILTER_DOWNLOAD_FAILED: ri,
  VOICE_FILTER_APPLY_FAILED: ri
})