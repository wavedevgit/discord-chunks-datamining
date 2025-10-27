/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rx
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

function eA(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eA(e, t, n[t])
    })
  }
  return e
}

function eN(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eR(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eN(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eP = new Chunk710845.Z("MediaEngineStore"),
  eD = "MediaEngineStore",
  ew = 4,
  eL = 1,
  ex = 1,
  eM = 1,
  ek = 1,
  ej = .5,
  eU = {
    left: 1,
    right: 1
  },
  eG = 500,
  eB = 5 * Chunk70956.Z.Millis.SECOND,
  eZ = false,
  eF = 100,
  eV = 2 * Chunk70956.Z.Millis.SECOND,
  eH = true,
  eY = 0;

function eW() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eZ,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: ej,
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
    videoHook: ez.supports(Chunk65154.AN.VIDEO_HOOK),
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
let eK = {
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
  ez = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
eP.enableNativeLogger(true);
let eq = {},
  eX = new Set([Chunk65154.Yn.DEFAULT]),
  eQ = ez.supports(Chunk65154.AN.AUTO_ENABLE),
  eJ = false,
  e$ = Chunk65154.Yn.STREAM,
  e0 = performance.now(),
  e1 = {
    [Chunk65154.w5]: t5("No Input Devices")
  },
  e3 = {
    [Chunk65154.w5]: t5("No Output Devices")
  },
  e2 = {
    [Chunk65154.w5]: t5("No Video Devices")
  },
  e4 = false,
  e8 = false,
  e5 = false,
  e6 = false,
  e7 = false,
  e9 = Chunk65154.Av,
  te = Chunk65154.Av,
  tt = false,
  tn = false,
  tr = false,
  ti = new Chunk846519.V7,
  ta = false,
  to = false,
  ts = null,
  tl = false,
  tc = false,
  tu = false,
  td = false,
  tf = false,
  t_ = [],
  tp = false,
  th = null,
  tm = null,
  tg = null,
  tE = null,
  tb = null,
  ty = false,
  tO = false,
  tv = false,
  tI = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tT = false,
  tS = new Set,
  tA = tT,
  tC = new Set,
  tN = {},
  tR = null,
  tP = true,
  tD = false,
  tw = false,
  tL = false;

function tx() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tM() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = eq[module];
  return null == exports && (t = eW(), eq[module] = exports), exports
}

function tk() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tM(r),
    a = eK[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM],
    o = eC({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {});
  if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Chunk705946.C)({
      location: "getSettings"
    }).enabled), null == o.vadKrispActivationThreshold && true === a.automaticGainControl || true === i.automaticGainControl) {
    let e = (0, Chunk883794.U)({
      location: "getSettings"
    });
    null != module.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = module.vadKrispActivationThreshold)
  }
  return eR(eC({}, i, a), {
    modeOptions: o
  })
}

function tj(e) {
  var t, n;
  let r = tk(e.context);
  e.setInputMode(r.mode, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && n6(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : ej,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tU(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Qx;
  return p().clamp(e, 0, t)
}

function tG(e) {
  let t = tk(e.context),
    n = !eQ || t.mute || t.deaf;
  e.context === eT.Yn.DEFAULT ? n = n || e4 || e8 || e5 || !Q.Z.didHavePermission(eO.Eu.AUDIO) : e.context === eT.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eT.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tB(e) {
  e !== e$ && (null != a && ez.setGoLiveSource(null, e$), e$ = e)
}

function tZ() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : e7,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), ez.setGoLiveSource(null, e$)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && ez.setGoLiveSource(null, e$), e7 || i) {
    let e = tk().videoDeviceId;
    e7 && module === Chunk65154.w5 && te === Chunk65154.w5 && e9 !== Chunk65154.Av ? e = e9 : te = module, e9 = (e7 = i) ? t7(e2, module) : Chunk65154.Av, ez.setVideoInputDevice(e9)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tx(),
        n = tk().videoHook,
        i = tq(),
        a = i ? tX() ? Chunk70722.zj : Chunk70722.ZM : 0;
      ez.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: tQ(),
          videoHookStaleFrameTimeoutMs: eG,
          graphicsCaptureStaleFrameTimeoutMs: eB,
          hdrCaptureMode: exports
        },
        quality: module
      }, e$)
    }
    null != o.cameraSource && ez.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, e$)
  }
}

function tF(e) {
  switch (e) {
    case eT.H3.CPU_OVERUSE:
      return P.Nk.NoiseCancellerCpuOveruse;
    case eT.H3.FAILED:
      return P.Nk.NoiseCancellerFailed;
    case eT.H3.VAD_CPU_OVERUSE:
      return P.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tV(e) {
  let t = (0, M.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eC({
    enabled: e
  }, t)
}

function tH(e, t) {
  e.setAutomaticGainControl(tV(t))
}
async function tY(e, t) {
  if ((0, eo.isIOS)() || (0, eo.isMac)()) {
    let e = await ez.getSystemMicrophoneMode();
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

function tW(e) {
  let t = tk(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(e_.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(e_.Z.hasNoiseSuppression(n) || t.noiseSuppression), tH(e, e_.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tY(e, t.noiseCancellation), e.setVoiceFilterId(th), (0, eo.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tK() {
  var e;
  return !(0, Chunk64592.f)("MediaEngine").enabled && (null == (e = tk().openH264) || module)
}

function tz() {
  ez.on(Chunk46973.aB.Connection, e => {
    tj(e), tG(e), tW(e);
    let t = tk();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos), e.setExperimentalEncoders(t.experimentalEncoders), e.setHardwareH264(eH), e.setSoftwareH264(tK());
    let n = eh.Z.getGuildId(),
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
    i && e.setExperimentFlag(eT.V8.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(eT.V8.PTT_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eT.V8.SKIP_ENCODE, true);
    let l = false,
      c = true;
    if (e.setExperimentFlag(eT.V8.RESET_DECODER_ON_ERRORS, true), l && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), c && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eT.Yn.STREAM) {
      let t = ne(e3);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = H.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, eo.isWindows)() ? (null == tR ? true : tR.startsWith("NVIDIA")) || (null == tR ? true : tR.startsWith("AMD")) ? e.setExperimentFlag(eT.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, true) : ((0, eo.isMac)() || (0, eo.isLinux)()) && e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, true), (0, eo.isWindows)() && e.setExperimentFlag(eT.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, eo.isWeb)()) {
      let {
        enabled: t
      } = (0, F.A)("MediaEngineStore");
      e.setExperimentFlag(eT.V8.BROWSER_HEVC, t)
    }
    if (ez.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(eT.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = q.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eT.ux)
    }
    for (let n of (t = tk(e.context), e.setPostponeDecodeLevel(eF), Object.keys(t.localMutes))) n !== ed.default.getId() && e.setLocalMute(n, t.localMutes[n]);
    for (let n of Object.keys(t.localVolumes)) n !== ed.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
    }), e.context === eT.Yn.DEFAULT && (tn = false, tr = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      tn = true, tr = true, r.emitChange(), ti.stop(), ti.start(eV, () => {
        tr = false, r.emitChange()
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
      (null == a ? true : a.desktopSource) != null && er.default.track(eb.rMx.VIDEOHOOK_INITIALIZED, eC({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, x.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      eP.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tF(e)
      }), ty = true, er.default.track(eb.rMx.VOICE_PROCESSING, {
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
      eP.warn("voiceactivitydetectorerror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tF(e)
      }), er.default.track(eb.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eT.Yn.DEFAULT,
        mode: eb.pM4.VOICE_ACTIVITY,
        options: eR(eC({}, tk(eT.Yn.DEFAULT).modeOptions), {
          vadUseKrisp: false
        })
      }), v.Z.dispatch({
        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
        code: e
      })
    }), e.on(b.Sh.SdpError, (e, t, n, r) => {
      er.default.track(eb.rMx.SDP_ERROR, {
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
    }), e.setBitRate(ef.Z.bitrate), e.applyVideoQualityMode(eE.Z.mode)
  }), ez.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), ez.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), ez.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), ez.on(Chunk46973.aB.AudioPermission, e => {
    tI = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), ez.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), ez.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
    eP.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), ez.on(Chunk46973.aB.VideoInputInitialized, e => {
    er.default.track(eb.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ea.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eh.Z.getMediaSessionId(),
      rtc_connection_id: eh.Z.getRTCConnectionId()
    })
  }), ez.on(Chunk46973.aB.AudioInputInitialized, e => {
    er.default.track(eb.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ea.Z.Millis.SECOND),
      rtc_connection_id: eh.Z.getRTCConnectionId()
    })
  }), ez.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), ez.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), ez.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
  }), ez.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), ez.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), ez.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), ez.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    er.default.track(eb.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), ez.on(Chunk46973.aB.VideoCodecError, e => {
    let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
      n = {
        videoCodec: e.codecStandard,
        errorMessage: e.message
      };
    (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eR(eC({
      type: t
    }, n), {
      videoEncoder: e.implName
    }) : eR(eC({
      type: t
    }, n), {
      videoDecoder: e.implName
    }))
  }), ez.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eY++,
          context: n.context
        }
      })
    })
  }), ez.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rL(e);
    null !== t && er.default.track(eb.rMx.VOICE_QUEUE_METRICS, t)
  }), ez.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nB(), nF(), t0.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tR = e.gpu_brand)
  }), ez.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    ez.eachConnection(tW)
  })
}

function tq() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function tX() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function tQ() {
  return (0, Chunk358085.isMac)() && ez.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function tJ() {
  return (0, Chunk358085.isWindows)() && ez.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && ez.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function t$() {
  return ez.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let t0 = new class {
  start() {
    this.started || (this.started = true, ez.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), ez.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tk();
    !tl && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eA(this, "stateChangeTimeout", true), eA(this, "noVoiceTimeout", 5e3), eA(this, "voiceTimeout", 1500), eA(this, "started", false), eA(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (v.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (tc = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function t1() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(eD, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), eq = null != (e = Chunk433517.K.get(eD)) ? module : {}, p().each(eq, e => {
    if (p().defaultsDeep(e, eW()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eu.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ew && (e.vadUseKrispSettingVersion = ew, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eZ)
    }
    ez.supports(eT.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < ek && (e.sidechainCompressionSettingVersion = ek, e.sidechainCompression = true), (0, eo.isWeb)() ? e.ncUseKrispjsSettingVersion !== ex && (e.ncUseKrispjsSettingVersion = ex, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eL && (e.ncUseKrispSettingVersion = eL, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== eM && (e.hardwareH264 = true, e.hardwareEnabledVersion = eM), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), t4()
}

function t3(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tM(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eD, eq), r
}

function t2() {
  Chunk433517.K.remove(eD), location.reload()
}

function t4() {
  let e = tk();
  ez.setAudioInputDevice(module.inputDeviceId), ez.setAudioOutputDevice(module.outputDeviceId), tZ(), ez.setInputVolume(module.inputVolume), ez.setOutputVolume(module.outputVolume), ez.setH264Enabled(eH || tK()), ez.setAv1Enabled(eH), ez.setH265Enabled(eH), ez.setAecDump(module.aecDumpEnabled), ez.setSidechainCompression(module.sidechainCompression), ez.setSidechainCompressionStrength(module.sidechainCompressionStrength), ez.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t8() {
  eQ || ez.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function t5(e) {
  return {
    id: eT.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function t6(e, t) {
  if (0 === e.length) {
    let e = t5(t);
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

function t7(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eT.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function t9(e) {
  let t = e1;
  if (e1 = t6(e, eS.intl.string(eS.t["/QIjDA"])), !p().isEqual(e1, t)) {
    let e = tk(),
      t = t7(e1, e.inputDeviceId);
    ez.setAudioInputDevice(t)
  }
}

function ne(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nt(e) {
  ez.eachConnection(t => {
    t.context === eT.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function nn(e) {
  let t = e3;
  if (e3 = t6(e, eS.intl.string(eS.t.xlUg0v)), !p().isEqual(e3, t)) {
    let e = tk(),
      n = t7(e3, e.outputDeviceId);
    ez.setAudioOutputDevice(n);
    let r = ne(t),
      i = ne(e3);
    r !== i && nt(i)
  }
}

function nr(e) {
  to = e.length > 0;
  let t = e2;
  if (e2 = t6(e, eS.intl.string(eS.t.WKWARY)), e7 && !p().isEqual(e2, t)) {
    var n;
    let e = true !== e2[e9],
      r = e9 === eT.w5 && (null == (n = t[eT.w5]) ? true : n.disabled);
    tZ(e || r)
  }
}

function ni() {
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
      } = tk(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], ez.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], ez.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t3({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function na(e) {
  if (null == r) return eP.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = r.getExperimentalSoundshare() ? e : ei.Z.getAudioPid(e),
      n = "";
    return null != t && (n = ei.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function no(e, t) {
  (0, eo.isWindows)() && e > 1 && T.YT(e, {
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

function ns(e) {
  i = e.sessionId, e4 = false, e6 = false;
  let t = tk();
  if (tJ() && (t$() ? rs(eT.iA.AUTOMATIC) : t.automaticAudioSubsystem && rl()), ez.supports(eT.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, eo.isDesktop)() ? e = (0, j.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, eo.isIOS)() || (0, eo.isAndroid)()) && (e = (0, U.W)({
      location: "handleConnectionOpen"
    }).enabled), ez.setOffloadAdmControls(e)
  }(0, et.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, eo.isDesktop)() && (en.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eT.Yn.DEFAULT,
    playSoundEffect: true
  }), t3({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), ez.setAsyncVideoInputDeviceInit((0, G.p)("handleConnectionOpen").enabled), ni()
}

function nl(e) {
  let {
    mediaEngineState: t
  } = e;
  eq = t.settingsByContext, e1 = t.inputDevices, e3 = t.outputDevices, tN = t.appSupported, tf = t.krispModuleLoaded, s = t.krispVersion, e$ = t.goLiveContext
}

function nc() {
  i = null
}

function nu() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.N.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nd(e) {
  switch (e.state) {
    case eb.hes.CONNECTING:
      t8();
      break;
    case eb.hes.RTC_CONNECTING:
      tl = false, tc = false;
      break;
    case eb.hes.RTC_CONNECTED:
      tZ();
      break;
    case eb.hes.DISCONNECTED:
      ny(), nO()
  }
  t0.update()
}

function nf(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e4 = t.mute || t.suppress, e6 = t.deaf, ez.eachConnection(tG);
      let e = null != t.guildId && null != t.channelId && null != tb && tb !== t.channelId,
        n = !tu && null == t.channelId;
      return tZ(!e && !n && e7), tb = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== ed.default.getId() || null != eh.Z.getChannelId() || tZ(false, null), e
  }, false)
}

function n_(e) {
  let {
    mute: t
  } = e;
  e8 = t, ez.eachConnection(tG)
}

function np(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tk(t);
  if (t === eT.Yn.DEFAULT && (Q.Z.requestPermission(eO.Eu.AUDIO), e5)) returnfalse;
  (r = !i && !r) || (i = false), n || (tt = true), t3({
    mute: r,
    deaf: i
  }, t), ez.eachConnection(tG)
}

function nh(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t3({
    mute: n
  }, t), r || (tt = true), ez.eachConnection(tG)
}

function nm(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== ev.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  ni(true)
}

function ng(e) {
  let {
    context: t
  } = e;
  t3({
    deaf: !tk(t).deaf
  }, t), ez.eachConnection(tG)
}

function nE(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === ed.default.getId()) return;
  let {
    localMutes: r
  } = tk(t);
  r[n] ? delete r[n] : r[n] = true, t3({
    localMutes: r
  }, t), ez.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function nb(e) {
  var t, n, r, i, a, o, s;
  let {
    context: l,
    userId: c,
    videoToggleState: u,
    persist: d,
    isAutomatic: _
  } = e;
  f()(!(d && _), "These are not allowed to both be true.");
  let p = u === eb.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tk(l),
    m = null != (t = h[c]) && t,
    g = tS.has(c),
    E = u === eb.ZUi.AUTO_ENABLED || u === eb.ZUi.MANUAL_ENABLED;
  eP.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eT.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  eP.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tk(l);
  if (I[c] === eb.ZUi.AUTO_PROBING && u === eb.ZUi.AUTO_ENABLED && (0, X.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E), I[c] = u, t3({
      videoToggleStateMap: I
    }, l, d), u === eb.ZUi.AUTO_PROBING ? null == (n = eh.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eh.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tA || (eP.info("isAutoDisableAllowed=".concat(tA, " - disabling VideoHealthManager")), null == (a = eh.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tA) return;
    (0, X.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E), p ? tS.add(c) : tS.delete(c)
  } else v && (g && !p ? (eP.info("disallowing auto-disable for this session because of manual override by user"), tA = false, null == (s = eh.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, X.Z)(c, eT.fC.MANUAL_REENABLE, E)) : (0, X.Z)(c, p ? eT.fC.MANUAL_DISABLE : eT.fC.MANUAL_ENABLE, E));
  y && !p && tS.delete(c), p ? h[c] = true : delete h[c], t3({
    disabledLocalVideos: h
  }, l, d), ez.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function ny() {
  if (0 === tS.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tk(module);
  tS.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], ez.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tS.clear(), t3({
    disabledLocalVideos: exports
  }, module, false)
}

function nO() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tk(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t3({
    videoToggleStateMap: exports
  }, module, false)
}

function nv(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === ed.default.getId()) return;
  let i = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
    {
      localVolumes: a
    } = tk(t);
  r === i ? delete a[n] : a[n] = r, t3({
    localVolumes: a
  }, t), ez.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nI(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tk(t);
  a[n] = {
    left: r,
    right: i
  }, t3({
    localPans: a
  }, t), ez.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nT(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t3({
    mode: n,
    modeOptions: r
  }, t), ez.eachConnection(tj), t0.update()
}

function nS(e) {
  let {
    volume: t
  } = e;
  t3({
    inputVolume: tU(t)
  }), ez.setInputVolume(t)
}

function nA(e) {
  let {
    volume: t
  } = e;
  t3({
    outputVolume: t
  }), ez.setOutputVolume(t)
}

function nC(e) {
  let {
    id: t
  } = e;
  t = t7(e1, t), e0 = performance.now(), t3({
    inputDeviceId: t
  }), ez.setAudioInputDevice(t)
}

function nN(e) {
  let {
    id: t
  } = e;
  t3({
    outputDeviceId: t = t7(e3, t)
  }), ez.setAudioOutputDevice(t)
}

function nR(e) {
  let {
    id: t
  } = e;
  t3({
    videoDeviceId: t = t7(e2, t)
  }), tZ()
}

function nP(e) {
  let {
    inputProfile: t
  } = e;
  t3({
    activeInputProfile: t
  });
  let n = tk();
  ez.eachConnection(e => {
    tj(e), tH(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tY(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), ez.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), t0.update(), nZ()
}

function nD(e) {
  return eJ !== e.required && (eJ = e.required, e.required || ez.interact(), true)
}

function nw(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  t9(t), nn(n), nr(r)
}

function nL(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t3({
    inputVolume: tU(t),
    outputVolume: n
  })
}

function nx(e) {
  var t;
  let n = tk(),
    r = ez.getAudioSubsystem(),
    i = ez.getAudioLayer(),
    a = t7(e1, n.inputDeviceId),
    o = null == (t = e1[a]) ? true : t.name;
  er.default.track(eb.rMx.VOICE_PROCESSING, {
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

function nM(e) {
  let t = t3({
    echoCancellation: e.enabled
  });
  ez.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nZ(), nx(e.location)
}

function nk(e) {
  nU(e.enabled)
}

function nj(e) {
  let t = t3({
    sidechainCompressionStrength: e.strength
  });
  ez.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nU(e) {
  let t = t3({
    sidechainCompression: e
  });
  ez.setSidechainCompression(t.sidechainCompression)
}

function nG(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tC.add(n) : tC.delete(n), nB(), nZ()
}

function nB() {
  let e = !tC.has("voice_filter_preview") && !tC.has("mic_test");
  ez.setMaybePreprocessMute(module)
}

function nZ() {
  let e = tk(),
    t = tC.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tV(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== th,
    c = tC.has("voice_filter") && 1 === tC.size;
  ez.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}
async function nF() {
  var e, t, n, r;
  if (!ez.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  if ((null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) == null || !(null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i)) return;
  let {
    enabled: a
  } = await (0, Chunk302630.m)("setGamescopeVaapiEnabled");
  tL = a, a && ez.supports(Chunk65154.AN.GAMESCOPE_CAPTURE) && (tw = true)
}

function nV(e) {
  let t = t3({
    noiseSuppression: e.enabled
  });
  ez.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nZ(), nx(e.location)
}

function nH(e) {
  let t = t3({
    automaticGainControl: e.enabled
  });
  ez.eachConnection(e => tH(e, t.automaticGainControl)), nZ(), nx(e.location)
}

function nY(e) {
  let t = t3({
    noiseCancellation: e.enabled
  });
  ez.eachConnection(e => tY(e, t.noiseCancellation)), nZ(), nx(e.location)
}

function nW(e) {
  J.Z.setKrispModelOverride(e.model), c = e.model, nZ()
}

function nK(e) {
  var t;
  (0, eo.isWeb)() || (tp = e.enabled, null == (t = ez.setNoiseCancellationEnableStats) || t.call(ez, e.enabled))
}

function nz(e) {
  let t = t3({
    experimentalEncoders: e.enabled
  });
  ez.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function nq(e) {
  t3({
    silenceWarning: e.enabled
  }), t0.update()
}

function nX(e) {
  ez.setDebugLogging(e.enabled)
}

function nQ(e) {
  let {
    level: t
  } = e;
  l = t, J.Z.setKrispSuppressionLevel(t)
}

function nJ(e) {
  t3({
    videoHook: e.enabled
  })
}

function n$(e) {
  t3({
    experimentalSoundshare2: e.enabled
  })
}

function n0(e) {
  let {
    enabled: t
  } = e;
  t3({
    useSystemScreensharePicker: t
  })
}

function n1(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t3({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  ez.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n3(e) {
  let {
    enabled: t
  } = e;
  t3({
    qos: t
  }), ez.eachConnection(e => e.setQoS(t))
}

function n2() {
  t2()
}

function n4(e) {
  let {
    inputDetected: t
  } = e;
  ts = t, !tl && ts && (tl = true, t0.update())
}

function n8(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === e5) returnfalse;
  e5 = n, ez.eachConnection(tG)
}

function n5(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eO.PQ.ACCEPTED;
  switch (n) {
    case eO.Eu.AUDIO:
      tI = true, ez.eachConnection(tG);
      break;
    case eO.Eu.CAMERA:
      !r && e7 && tZ(false);
      break;
    default:
      returnfalse
  }
}

function n6() {
  return tf || false
}
async function n7() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tf = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      t_ = e, r.emitChange()
    }), r.emitChange()
  } catch (t) {
    eP.warn("Failed to load Krisp module: ".concat(exports.message)), Chunk960048.Z.captureException(exports);
    let e = Chunk65154.H3.INITIALIZED;
    if (exports.message.includes(": ")) {
      let n = parseInt(exports.message.substring(exports.message.indexOf(": ") + 1));
      e = isNaN(require) || 0 === require ? Chunk65154.H3.INITIALIZED : require
    }
    Chunk626135.default.track(Chunk981631.rMx.VOICE_PROCESSING, {
      noise_canceller_error: module
    }), t3({
      noiseCancellation: false
    })
  } finally {
    td = false
  }
}

function n9() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function re() {
  !n9() || __OVERLAY__ || td || tf ? (0, Chunk358085.isWeb)() && ez.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tf = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t3({
    noiseCancellation: false
  }) : (td = true, n7())
}

function rt(e) {
  let {
    enabled: t
  } = e;
  er.default.track(eb.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != th ? th : null,
    enabled: t
  }), t3({
    voiceFilterPlaybackEnabled: t
  })
}

function rn(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t3({
    mostRecentlyRequestedVoiceFilter: t
  }), ez.eachConnection(e => e.setVoiceFilterId(t))
}

function rr() {
  t3({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function ri(e) {
  let {
    voiceFilterId: t
  } = e;
  tg = th, tE = tm, th = t, tm = null === t ? null : Date.now()
}

function ra(e) {
  let t = e.bypassEnabled;
  t3({
    bypassSystemInputProcessing: t
  }), ez.setAudioInputBypassSystemProcessing(t), nx(e.location)
}

function ro(e) {
  rs(e.subsystem)
}

function rs(e) {
  e === eT.iA.AUTOMATIC ? (t3({
    automaticAudioSubsystem: true
  }), rl()) : (t3({
    automaticAudioSubsystem: false
  }), ez.setAudioSubsystem(e))
}

function rl() {
  ez.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rc(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tZ(i, null), null != t || null == n) {
    tu = false;
    return
  }
  if (tu) return;
  tu = true;
  let a = tk();
  (a.mute || a.deaf) && (t3({
    deaf: false,
    mute: false
  }), ez.eachConnection(tG))
}

function ru(e) {
  let {
    application: t
  } = e;
  eX.add(t.id)
}

function rd(e) {
  let {
    application: t
  } = e;
  eX.delete(t.id)
}

function rf(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      eQ = false, ez.eachConnection(tG);
      break;
    case "video":
      tZ(false)
  }
}

function r_(e) {
  eQ = e.enabled, e.unmute && t3({
    mute: false,
    deaf: false
  }), ez.eachConnection(tG)
}

function rp(e) {
  let {
    enabled: t
  } = e;
  Q.Z.requestPermission(eO.Eu.CAMERA), tZ(t)
}

function rh(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e, a = A.Z.isDecoupledGameClippingEnabled(), s = A.Z.getSettings().decoupledClipsEnabled;
  if (!a || !s || null == I.Z) return;
  let l = null,
    c = null,
    u = ei.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: l,
    soundshareSession: c
  } = na(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (ez.setClipsSource(null), (0, eo.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && no(l, c), o = d;
  let f = tx(),
    _ = tk().videoHook;
  ez.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: tq(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: tQ(),
      videoHookStaleFrameTimeoutMs: eG,
      graphicsCaptureStaleFrameTimeoutMs: eB,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function rm(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, ez.setClipsSource(null))
}

function rg(e) {
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
      s = null != (t = a.context) ? t : eT.Yn.DEFAULT,
      l = null != (n = a.qualityOptions) ? n : {
        resolution: 720,
        frameRate: 30
      },
      c = false === o ? null : ei.Z.getPidFromDesktopSource(i);
    eo.isPlatformEmbedded && true === o && ({
      soundshareId: e,
      soundshareSession: r
    } = na(c), null != e && no(e, r)), tB(s), tZ(s === eT.Yn.STREAM && e7, {
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
    let e = null != (r = a.context) ? r : eT.Yn.DEFAULT,
      {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      } = a.cameraSettings,
      o = e === eT.Yn.STREAM && e7,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tZ(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tZ(e7, null)
}

function rE(e) {
  let {
    section: t
  } = e;
  return t === eb.oAB.VOICE && t8(), false
}

function rb() {
  return ez.eachConnection(tW), false
}

function ry(e) {
  let {
    enabled: t
  } = e;
  t3({
    openH264: t
  }), ez.setH264Enabled(eH || tK()), ez.eachConnection(e => e.setSoftwareH264(tK()))
}

function rO(e) {
  let {
    enabled: t
  } = e, n = t3({
    aecDumpEnabled: t
  });
  ez.setAecDump(n.aecDumpEnabled)
}

function rv(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  eq = Object.values(eT.Yn).reduce((e, n) => {
    let r = n,
      i = eW();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(eD, eq), t4()
}

function rI(e) {
  let {
    state: t
  } = e, n = w.Z.isEnabled();
  if (t === eb.$7l.BACKGROUND && e7 && !n) ta = true, tZ(false);
  else {
    if (t !== eb.$7l.ACTIVE || !ta) returnfalse;
    ta = false, tZ(true)
  }
  returntrue
}

function rT(e) {
  ez.eachConnection(t => t.setBitRate(e.bitrate))
}

function rS() {
  if (!e7 && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tZ(false, null)
}

function rA() {
  return !!ty && (ty = false, true)
}

function rC(e) {
  ez.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rN(e) {
  let {
    settings: t
  } = e;
  ez.applyMediaFilterSettings(t).finally(() => {
    tO = false, r.emitChange()
  })
}

function rR() {
  tO = true
}

function rP() {
  tO = false
}

function rD(e) {
  tP = e.enabled
}
class rw extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tz(), t1(), re(), nO(), tN = {
      [Chunk65154.AN.VIDEO]: ez.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: ez.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: ez.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return ez.supports(e)
  }
  supportsInApp(e) {
    return tN[e] || ez.supports(e)
  }
  isSupported() {
    return ez.supported()
  }
  isExperimentalEncodersSupported() {
    return ez.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return ez.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return n6()
  }
  isNoiseCancellationError() {
    return ty
  }
  isAutomaticGainControlSupported() {
    return ez.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !t$() && (ez.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || ez.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return ez.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ez.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return n6()
  }
  isAecDumpSupported() {
    return ez.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return ez.supports(Chunk65154.AN.VIDEO) && ez.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    return (null == (e = Chunk592125.Z.getChannel(tb)) ? true : module.type) !== Chunk981631.d4z.GUILD_STAGE_VOICE && eH && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tk().aecDumpEnabled
  }
  getMediaEngine() {
    return ez
  }
  getVideoComponent() {
    return ez.Video
  }
  getCameraComponent() {
    return ez.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return tp
  }
  isEnabled() {
    return eQ
  }
  isMute() {
    return this.isSelfMute() || e4
  }
  isDeaf() {
    return this.isSelfDeaf() || e6
  }
  hasContext(e) {
    return null != eq[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && e8
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tk(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && e5
  }
  shouldSkipMuteUnmuteSound() {
    return tt
  }
  notifyMuteUnmuteSoundWasSkipped() {
    tt = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tP
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tk(module).deaf
  }
  isVideoEnabled() {
    return e7 && to
  }
  isVideoAvailable() {
    return Object.values(e2).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e$ === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return e$ === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return e !== ed.default.getId() && (tk(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return ez.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return null != (t = tk(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return null != (t = tk(n).videoToggleStateMap[e]) ? t : eb.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return t === eT.Yn.DEFAULT && tS.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tS.size > 0
  }
  isMediaFilterSettingLoading() {
    return tO
  }
  isNativeAudioPermissionReady() {
    return tI
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return e$
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e0
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
      n = tk(t).localPans[e];
    return null != n ? n : eU
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
      n = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
      r = tk(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tk().inputVolume
  }
  getOutputVolume() {
    return tk().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tk(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tk(module).modeOptions
  }
  getActiveVoiceFilter() {
    return th
  }
  getActiveVoiceFilterAppliedAt() {
    return tm
  }
  getPreviousVoiceFilter() {
    return tg
  }
  getPreviousVoiceFilterAppliedAt() {
    return tE
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tk().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tk().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(eq, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eb.pM4.PUSH_TO_TALK && eX.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return t7(e1, tk().inputDeviceId)
  }
  getOutputDeviceId() {
    return t7(e3, tk().outputDeviceId)
  }
  getVideoDeviceId() {
    return t7(e2, tk().videoDeviceId)
  }
  getInputDevices() {
    return e1
  }
  getOutputDevices() {
    return e3
  }
  getVideoDevices() {
    return e2
  }
  getEchoCancellation() {
    let e = tk();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return ez.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tk().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tk().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tk().h265Enabled
  }
  getLoopback() {
    return tC.size > 0
  }
  getLoopbackReasons() {
    return tC
  }
  getNoiseSuppression() {
    let e = tk();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tk();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tk().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tk().noiseCancellation
  }
  getExperimentalEncoders() {
    return tk().experimentalEncoders
  }
  getHardwareEncoding() {
    return eH
  }
  getEnableSilenceWarning() {
    return tk().silenceWarning
  }
  getDebugLogging() {
    return ez.getDebugLogging()
  }
  getQoS() {
    return tk().qos
  }
  getAttenuation() {
    return tk().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tk().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tk().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return tJ() && tk().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : ez.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return ez.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tk().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tk(module)
  }
  getState() {
    return {
      settingsByContext: eq,
      inputDevices: e1,
      outputDevices: e3,
      appSupported: tN,
      krispModuleLoaded: tf,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: e$
    }
  }
  getInputDetected() {
    return ts
  }
  getNoInputDetectedNotice() {
    return tc
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    ez.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eJ
  }
  getVideoHook() {
    return tk().videoHook
  }
  supportsVideoHook() {
    return ez.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tk().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return ez.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && ez.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tk().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)();
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return ez.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getUseVaapiEncoder() {
    return tL
  }
  getUseGamescopeCapture() {
    return tw
  }
  getOpenH264() {
    return tk().openH264
  }
  getEverSpeakingWhileMuted() {
    return tn
  }
  getSpeakingWhileMuted() {
    return tr
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return t_
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tk().modeOptions.vadKrispActivationThreshold) ? module : ej
  }
  hasActiveCallKitCall() {
    return tD
  }
  setHasActiveCallKitCall(e) {
    tD = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? ez.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && tQ() : (0, Chunk358085.isWindows)() ? ez.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && ez.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    }).loadWasmModule), ez.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!tv && (tv = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      ez.fetchAsyncResources(module).catch(e => {
        eP.warn("DAVE preload failed:", e), el.Z.captureException(e)
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
    let e = ez.getSupportedSecureFramesProtocolVersion(),
      t = Chunk529558.m.getCurrentConfig({
        location: "MediaEngineStore"
      });
    return 114 === module && (e = 1), exports.canSupportDaveProtocol && module >= exports.protocolVersionFloor ? module : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tR
  }
}

function rL(e) {
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
eA(rw, "displayName", "MediaEngineStore");
let rx = r = new rw(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rc,
  VOICE_STATE_UPDATES: nf,
  CONNECTION_OPEN: ns,
  CONNECTION_CLOSED: nc,
  POST_CONNECTION_OPEN: nu,
  RTC_CONNECTION_STATE: nd,
  AUDIO_SET_TEMPORARY_SELF_MUTE: n_,
  AUDIO_TOGGLE_SELF_MUTE: np,
  AUDIO_SET_SELF_MUTE: nh,
  AUDIO_TOGGLE_SELF_DEAF: ng,
  AUDIO_TOGGLE_LOCAL_MUTE: nE,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: nb,
  AUDIO_SET_LOCAL_VOLUME: nv,
  AUDIO_SET_LOCAL_PAN: nI,
  AUDIO_SET_MODE: nT,
  AUDIO_SET_INPUT_VOLUME: nS,
  AUDIO_SET_OUTPUT_VOLUME: nA,
  AUDIO_SET_INPUT_DEVICE: nC,
  AUDIO_SET_OUTPUT_DEVICE: nN,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nP,
  AUDIO_SET_ECHO_CANCELLATION: nM,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nk,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nj,
  AUDIO_SET_LOOPBACK: nG,
  AUDIO_SET_NOISE_SUPPRESSION: nV,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nH,
  AUDIO_SET_NOISE_CANCELLATION: nY,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nW,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nq,
  AUDIO_SET_DEBUG_LOGGING: nX,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nQ,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nK,
  MEDIA_ENGINE_SET_VIDEO_HOOK: nJ,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n$,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n0,
  AUDIO_SET_ATTENUATION: n1,
  AUDIO_SET_QOS: n3,
  MEDIA_ENGINE_DEVICES: nw,
  AUDIO_VOLUME_CHANGE: nL,
  AUDIO_RESET: n2,
  AUDIO_INPUT_DETECTED: n4,
  AUDIO_SET_SUBSYSTEM: ro,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: ra,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: r_,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rp,
  MEDIA_ENGINE_PERMISSION: rf,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rg,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nR,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nz,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nD,
  USER_SETTINGS_MODAL_INIT: rE,
  USER_SETTINGS_MODAL_SET_SECTION: rE,
  CERTIFIED_DEVICES_SET: rb,
  RPC_APP_CONNECTED: ru,
  RPC_APP_DISCONNECTED: rd,
  OVERLAY_INITIALIZE: nl,
  MEDIA_ENGINE_SET_OPEN_H264: ry,
  APP_STATE_UPDATE: rI,
  SET_CHANNEL_BITRATE: rT,
  SET_VAD_PERMISSION: n8,
  SET_NATIVE_PERMISSION: n5,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rC,
  MEDIA_ENGINE_SET_AEC_DUMP: rO,
  MEDIA_ENGINE_RESET_SETTINGS: rv,
  CHANNEL_DELETE: rS,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rA,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rN,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rR,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rP,
  USER_SETTINGS_PROTO_UPDATE: nm,
  CLIPS_INIT: rh,
  CLIPS_SETTINGS_UPDATE: rm,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rD,
  VOICE_FILTER_REQUEST_SWITCH: rn,
  VOICE_FILTER_LOOPBACK_TOGGLE: rt,
  VOICE_FILTER_APPLIED: ri,
  VOICE_FILTER_DOWNLOAD_FAILED: rr,
  VOICE_FILTER_APPLY_FAILED: rr
})