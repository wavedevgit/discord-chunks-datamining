/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rj
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

function ew(e, t, n) {
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
      ew(e, t, n[t])
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

function eM(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ex(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ej = new Chunk710845.Z("MediaEngineStore"),
  ek = "MediaEngineStore",
  eU = 4,
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
    videoHook: e$.supports(Chunk65154.AN.VIDEO_HOOK),
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
ej.enableNativeLogger(true);
let e0 = {},
  e1 = new Set([Chunk65154.Yn.DEFAULT]),
  e3 = e$.supports(Chunk65154.AN.AUTO_ENABLE),
  e2 = false,
  e4 = Chunk65154.Yn.STREAM,
  e5 = performance.now(),
  e8 = {
    [Chunk65154.w5]: ne("No Input Devices")
  },
  e6 = {
    [Chunk65154.w5]: ne("No Output Devices")
  },
  e7 = {
    [Chunk65154.w5]: ne("No Video Devices")
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
  tL = {},
  tx = null,
  tM = true,
  tj = false,
  tk = false,
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

function tF(e) {
  var t, n;
  let r = tZ(e.context),
    i = r.mode;
  e.context === eP.Yn.DEFAULT && ((0, ea.f)({
    location: "setInputMode",
    autoTrackExposure: false
  }).enableLatching && i === eS.pM4.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = eS.pM4.VOICE_ACTIVITY), (0, q.I)(false, false, false)), e.setInputMode(i, {
    vadThreshold: r.modeOptions.threshold,
    vadAutoThreshold: r.modeOptions.autoThreshold,
    vadUseKrisp: r.modeOptions.vadUseKrisp && re(),
    vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eF,
    vadLeading: r.modeOptions.vadLeading,
    vadTrailing: r.modeOptions.vadTrailing,
    vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
    pttReleaseDelay: Math.round(r.modeOptions.delay)
  })
}

function tV(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Qx;
  return p().clamp(e, 0, t)
}

function tH(e) {
  let t = tZ(e.context),
    n = !e3 || t.mute || t.deaf;
  e.context === eP.Yn.DEFAULT ? n = n || e9 || te || tt || !et.Z.didHavePermission(eC.Eu.AUDIO) : e.context === eP.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eP.Yn.DEFAULT && S.Z.updateNativeMute()
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
    tr && module === Chunk65154.w5 && ta === Chunk65154.w5 && ti !== Chunk65154.Av ? e = ti : ta = module, ti = (tr = i) ? nn(e7, module) : Chunk65154.Av, e$.setVideoInputDevice(ti)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tG(),
        n = tZ().videoHook,
        i = t$(),
        a = i ? t0() ? Chunk70722.zj : Chunk70722.ZM : 0,
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
          allowScreenCaptureKit: t1(),
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
    case eP.H3.CPU_OVERUSE:
      return D.Nk.NoiseCancellerCpuOveruse;
    case eP.H3.FAILED:
      return D.Nk.NoiseCancellerFailed;
    case eP.H3.VAD_CPU_OVERUSE:
      return D.Nk.NoiseCancellerVadCpuOveruse;
    default:
      return
  }
}

function tz(e) {
  let t = (0, j.U)({
    location: "getAutomaticGainControlConfig",
    disable: !e
  }).noiseCancellationConfig;
  return eL({
    enabled: e
  }, t)
}

function tq(e, t) {
  e.setAutomaticGainControl(tz(t))
}
async function tX(e, t) {
  if ((0, ef.isIOS)() || (0, ef.isMac)()) {
    let e = await e$.getSystemMicrophoneMode();
    "" !== e && "standard" !== e && k.Z.getConfig({
      location: "setNoiseCancellation"
    }).disabledModes.includes(e) && (t = false)
  }
  e.setNoiseCancellation(t);
  let {
    noiseCancellationDuringProcessing: n
  } = (0, j.U)({
    location: "setNoiseCancellation",
    disable: !t
  });
  e.setNoiseCancellationDuringProcessing(n);
  let {
    noiseCancellationAfterProcessing: r,
    vadAfterWebrtc: i
  } = (0, K.$)({
    location: "setNoiseCancellation"
  });
  e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i)
}

function tQ(e) {
  let t = tZ(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eb.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eb.Z.hasNoiseSuppression(n) || t.noiseSuppression), tq(e, eb.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tX(e, t.noiseCancellation), e.setVoiceFilterId(ty), (0, ef.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tJ() {
  e$.on(Chunk46973.aB.Connection, e => {
    tF(e), tH(e), tQ(e);
    let t = tZ();
    e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
    let n = eO.Z.getGuildId(),
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
    i && e.setExperimentFlag(eP.V8.MUTE_BEFORE_PROCESSING, true), o && e.setExperimentFlag(eP.V8.PTT_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eP.V8.SKIP_ENCODE, true), (0, z.J)({
      location: "setupMediaEngine"
    }).enabled && e.setExperimentFlag(eP.V8.LOW_LATENCY_RATE_CONTROL, true);
    let l = false,
      c = true;
    if (e.setExperimentFlag(eP.V8.RESET_DECODER_ON_ERRORS, true), l && e.setExperimentFlag(eP.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), c && e.setExperimentFlag(eP.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eP.Yn.STREAM) {
      let t = ni(e6);
      e.setSoundshareDiscardRearChannels(t);
      let {
        simulcastEnabled: n,
        lqStreamBitrate: r
      } = W.Z.getConfig();
      e.configureGoLiveSimulcast(n, r)
    }
    if ((0, ef.isWindows)() ? (null == tx ? true : tx.startsWith("NVIDIA")) || (null == tx ? true : tx.startsWith("AMD")) ? e.setExperimentFlag(eP.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eP.V8.SIGNAL_AV1_DECODE, true) : ((0, ef.isMac)() || (0, ef.isLinux)()) && e.setExperimentFlag(eP.V8.SIGNAL_AV1_DECODE, true), (0, ef.isWindows)() && e.setExperimentFlag(eP.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, ef.isWeb)()) {
      let {
        enabled: t
      } = (0, H.A)("MediaEngineStore");
      e.setExperimentFlag(eP.V8.BROWSER_HEVC, t)
    }
    if (e$.setHasFullbandPerformance((0, P.Z)()), e.setRemoteAudioHistory(1e3), (0, C.Z)(r)) {
      let {
        enableViewerClipping: t
      } = $.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eP.ux)
    }
    for (let n of (t = tZ(e.context), e.setPostponeDecodeLevel(eK), Object.keys(t.localMutes))) n !== eg.default.getId() && e.setLocalMute(n, t.localMutes[n]);
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
    }), e.context === eP.Yn.DEFAULT && (ts = false, tl = false, e.on(b.Sh.SpeakingWhileMuted, () => {
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
      (null == a ? true : a.desktopSource) != null && ec.default.track(eS.rMx.VIDEOHOOK_INITIALIZED, eL({
        backend: e,
        format: t,
        framebuffer_format: n,
        sample_count: r,
        success: i,
        reinitialization: o
      }, (0, M.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      ej.warn("noisecancellererror event: ".concat(e)), (0, D.kr)({
        type: D.u.NOISE_CANCELLER_ERROR,
        underlyingError: tK(e)
      }), tS = true, ec.default.track(eS.rMx.VOICE_PROCESSING, {
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
      ej.warn("voiceactivitydetectorerror event: ".concat(e)), (0, D.kr)({
        type: D.u.NOISE_CANCELLER_ERROR,
        underlyingError: tK(e)
      }), ec.default.track(eS.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eP.Yn.DEFAULT,
        mode: eS.pM4.VOICE_ACTIVITY,
        options: eM(eL({}, tZ(eP.Yn.DEFAULT).modeOptions), {
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
    }), e.setBitRate(eE.Z.bitrate), e.applyVideoQualityMode(eT.Z.mode), e$.supports(eP.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e$.setAsyncVideoInputDeviceInit((0, B.p)("setupMediaEngine").enabled)
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
    ej.warn("Watchdog timeout, report submission status: ".concat(null != module ? module : 200)), Chunk626135.default.track(Chunk981631.rMx.VOICE_WATCHDOG_TIMEOUT, {
      minidump_submission_error: module
    })
  }), e$.on(Chunk46973.aB.VideoInputInitialized, e => {
    ec.default.track(eS.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ed.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eO.Z.getMediaSessionId(),
      rtc_connection_id: eO.Z.getRTCConnectionId()
    })
  }), e$.on(Chunk46973.aB.AudioInputInitialized, e => {
    ec.default.track(eS.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ed.Z.Millis.SECOND),
      rtc_connection_id: eO.Z.getRTCConnectionId()
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
    ec.default.track(eS.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), e$.on(Chunk46973.aB.VideoCodecError, e => {
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
    let t = rM(e);
    null !== t && ec.default.track(eS.rMx.VOICE_QUEUE_METRICS, t)
  }), e$.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nH(), nW(), e$.supports(Chunk65154.AN.ASYNC_CLIPS_SOURCE_DEINIT) && e$.setAsyncClipsSourceDeinit((0, Chunk502450.C)("setupMediaEngine").enabled), t4.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tx = e.gpu_brand)
  }), e$.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    e$.eachConnection(tQ)
  })
}

function t$() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function t0() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function t1() {
  return (0, Chunk358085.isMac)() && e$.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function t3() {
  return (0, Chunk358085.isWindows)() && e$.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && e$.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function t2() {
  return e$.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let t4 = new class {
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
    ew(this, "stateChangeTimeout", true), ew(this, "noVoiceTimeout", 5e3), ew(this, "voiceTimeout", 1500), ew(this, "started", false), ew(this, "handleSilence", e => {
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
    if (p().defaultsDeep(e, eQ()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, em.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eU && (e.vadUseKrispSettingVersion = eU, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eW)
    }
    e$.supports(eP.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eZ && (e.sidechainCompressionSettingVersion = eZ, e.sidechainCompression = true), (0, ef.isWeb)() ? e.ncUseKrispjsSettingVersion !== eB && (e.ncUseKrispjsSettingVersion = eB, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== eG && (e.ncUseKrispSettingVersion = eG, e.noiseSuppression = false, e.noiseCancellation = true)
  }), t7()
}

function t8(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tB(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ek, e0), r
}

function t6() {
  Chunk433517.K.remove(ek), location.reload()
}

function t7() {
  let e = tZ();
  e$.setAudioInputDevice(module.inputDeviceId), e$.setAudioOutputDevice(module.outputDeviceId), tW(), e$.setInputVolume(module.inputVolume), e$.setOutputVolume(module.outputVolume), e$.setH264Enabled(eq), e$.setAv1Enabled(eq), e$.setH265Enabled(eq), e$.setAecDump(module.aecDumpEnabled), e$.setSidechainCompression(module.sidechainCompression), e$.setSidechainCompressionStrength(module.sidechainCompressionStrength), e$.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t9() {
  e3 || e$.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function ne(e) {
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
    guid: e.originalId,
    hardwareId: e.hardwareId,
    containerId: e.containerId
  })).keyBy("id").value()
}

function nn(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eP.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function nr(e) {
  let t = e8;
  if (e8 = nt(e, eD.intl.string(eD.t["/QIjDA"])), !p().isEqual(e8, t)) {
    let e = tZ(),
      t = nn(e8, e.inputDeviceId);
    e$.setAudioInputDevice(t)
  }
}

function ni(e) {
  return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function na(e) {
  e$.eachConnection(t => {
    t.context === eP.Yn.STREAM && t.setSoundshareDiscardRearChannels(e)
  })
}

function no(e) {
  let t = e6;
  if (e6 = nt(e, eD.intl.string(eD.t.xlUg0v)), !p().isEqual(e6, t)) {
    let e = tZ(),
      n = nn(e6, e.outputDeviceId);
    e$.setAudioOutputDevice(n);
    let r = ni(t),
      i = ni(e6);
    r !== i && na(i)
  }
}

function ns(e) {
  td = e.length > 0;
  let t = e7;
  if (e7 = nt(e, eD.intl.string(eD.t.WKWARY)), tr && !p().isEqual(e7, t)) {
    var n;
    let e = true !== e7[ti],
      r = ti === eP.w5 && (null == (n = t[eP.w5]) ? true : n.disabled);
    tW(e || r)
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
      } = tZ(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], e$.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], e$.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t8({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function nc(e) {
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

function nu(e, t) {
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

function nd(e) {
  i = e.sessionId, e9 = false, tn = false;
  let t = tZ();
  if (t3() && (t2() ? ru(eP.iA.AUTOMATIC) : t.automaticAudioSubsystem && rd()), e$.supports(eP.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, ef.isDesktop)() ? e = (0, U.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, ef.isIOS)() || (0, ef.isAndroid)()) && (e = (0, G.W)({
      location: "handleConnectionOpen"
    }).enabled), e$.setOffloadAdmControls(e)
  }(0, es.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, ef.isDesktop)() && (el.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eP.Yn.DEFAULT,
    playSoundEffect: true
  }), t8({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), nl()
}

function nf(e) {
  let {
    mediaEngineState: t
  } = e;
  e0 = t.settingsByContext, e8 = t.inputDevices, e6 = t.outputDevices, tL = t.appSupported, tg = t.krispModuleLoaded, s = t.krispVersion, e4 = t.goLiveContext
}

function n_() {
  i = null
}

function np() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.NJ.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function nh(e) {
  switch (e.state) {
    case eS.hes.CONNECTING:
      t9();
      break;
    case eS.hes.RTC_CONNECTING:
      t_ = false, tp = false;
      break;
    case eS.hes.RTC_CONNECTED:
      tW();
      break;
    case eS.hes.DISCONNECTED:
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
      e9 = t.mute || t.suppress, tn = t.deaf, e$.eachConnection(tH);
      let e = null != t.guildId && null != t.channelId && null != tT && tT !== t.channelId,
        n = !th && null == t.channelId;
      return tW(!e && !n && tr), tT = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== eg.default.getId() || null != eO.Z.getChannelId() || tW(false, null), e
  }, false)
}

function ng(e) {
  let {
    mute: t
  } = e;
  te = t, e$.eachConnection(tH)
}

function nE(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tZ(t);
  if (t === eP.Yn.DEFAULT && (et.Z.requestPermission(eC.Eu.AUDIO), tt)) returnfalse;
  (r = !i && !r) || (i = false), n || (to = true), t8({
    mute: r,
    deaf: i
  }, t), e$.eachConnection(tH)
}

function nb(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t8({
    mute: n
  }, t), r || (to = true), e$.eachConnection(tH)
}

function ny(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== eN.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  nl(true)
}

function nO(e) {
  let {
    context: t
  } = e;
  t8({
    deaf: !tZ(t).deaf
  }, t), e$.eachConnection(tH)
}

function nv(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === eg.default.getId()) return;
  let {
    localMutes: r
  } = tZ(t);
  r[n] ? delete r[n] : r[n] = true, t8({
    localMutes: r
  }, t), e$.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
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
  let p = u === eS.ZUi.DISABLED,
    {
      disabledLocalVideos: h
    } = tZ(l),
    m = null != (t = h[c]) && t,
    g = tP.has(c),
    E = u === eS.ZUi.AUTO_ENABLED || u === eS.ZUi.MANUAL_ENABLED;
  ej.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eP.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  ej.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tZ(l);
  if (I[c] === eS.ZUi.AUTO_PROBING && u === eS.ZUi.AUTO_ENABLED && (0, ee.Z)(c, p ? eP.fC.AUTO_DISABLE : eP.fC.AUTO_ENABLE, E), I[c] = u, t8({
      videoToggleStateMap: I
    }, l, d), u === eS.ZUi.AUTO_PROBING ? null == (n = eO.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eO.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tD || (ej.info("isAutoDisableAllowed=".concat(tD, " - disabling VideoHealthManager")), null == (a = eO.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tD) return;
    (0, ee.Z)(c, p ? eP.fC.AUTO_DISABLE : eP.fC.AUTO_ENABLE, E), p ? tP.add(c) : tP.delete(c)
  } else v && (g && !p ? (ej.info("disallowing auto-disable for this session because of manual override by user"), tD = false, null == (s = eO.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, ee.Z)(c, eP.fC.MANUAL_REENABLE, E)) : (0, ee.Z)(c, p ? eP.fC.MANUAL_DISABLE : eP.fC.MANUAL_ENABLE, E));
  y && !p && tP.delete(c), p ? h[c] = true : delete h[c], t8({
    disabledLocalVideos: h
  }, l, d), e$.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nT() {
  if (0 === tP.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tZ(module);
  tP.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e$.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tP.clear(), t8({
    disabledLocalVideos: exports
  }, module, false)
}

function nS() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tZ(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t8({
    videoToggleStateMap: exports
  }, module, false)
}

function nA(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === eg.default.getId()) return;
  let i = t === eP.Yn.STREAM ? eP.Yh : eP.Qx,
    {
      localVolumes: a
    } = tZ(t);
  r === i ? delete a[n] : a[n] = r, t8({
    localVolumes: a
  }, t), e$.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nC(e) {
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
  }, t8({
    localPans: a
  }, t), e$.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nN(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t8({
    mode: n,
    modeOptions: r
  }, t), e$.eachConnection(tF), t4.update()
}

function nR(e) {
  let {
    volume: t
  } = e;
  t8({
    inputVolume: tV(t)
  }), e$.setInputVolume(t)
}

function nP(e) {
  let {
    volume: t
  } = e;
  t8({
    outputVolume: t
  }), e$.setOutputVolume(t)
}

function nD(e) {
  let {
    id: t
  } = e;
  t = nn(e8, t), e5 = performance.now(), t8({
    inputDeviceId: t
  }), e$.setAudioInputDevice(t)
}

function nw(e) {
  let {
    id: t
  } = e;
  t8({
    outputDeviceId: t = nn(e6, t)
  }), e$.setAudioOutputDevice(t)
}

function nL(e) {
  let {
    id: t
  } = e;
  t8({
    videoDeviceId: t = nn(e7, t)
  }), tW()
}

function nx(e) {
  let {
    inputProfile: t
  } = e;
  t8({
    activeInputProfile: t
  });
  let n = tZ();
  e$.eachConnection(e => {
    tF(e), tq(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), tX(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), e$.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), t4.update(), nY()
}

function nM(e) {
  return e2 !== e.required && (e2 = e.required, e.required || e$.interact(), true)
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
  t8({
    inputVolume: tV(t),
    outputVolume: n
  })
}

function nU(e) {
  var t;
  let n = tZ(),
    r = e$.getAudioSubsystem(),
    i = e$.getAudioLayer(),
    a = nn(e8, n.inputDeviceId),
    o = null == (t = e8[a]) ? true : t.name;
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

function nG(e) {
  let t = t8({
    echoCancellation: e.enabled
  });
  e$.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nY(), nU(e.location)
}

function nB(e) {
  nF(e.enabled)
}

function nZ(e) {
  let t = t8({
    sidechainCompressionStrength: e.strength
  });
  e$.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nF(e) {
  let t = t8({
    sidechainCompression: e
  });
  e$.setSidechainCompression(t.sidechainCompression)
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
  e$.setMaybePreprocessMute(module)
}

function nY() {
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
async function nW() {
  var e, t, n, r;
  if (!e$.supports(Chunk65154.AN.VAAPI)) return;
  let i = 4098;
  (null == (t = window.DiscordNative) || null == (e = exports.processUtils) ? true : module.getSystemInfo) != null && (null != (r = null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? true : require.gpuDevice) ? r : []).some(e => e.vendorId === i) && (tU = true, tk = e$.supports(Chunk65154.AN.GAMESCOPE_CAPTURE))
}

function nK(e) {
  let t = t8({
    noiseSuppression: e.enabled
  });
  e$.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nY(), nU(e.location)
}

function nz(e) {
  let t = t8({
    automaticGainControl: e.enabled
  });
  e$.eachConnection(e => tq(e, t.automaticGainControl)), nY(), nU(e.location)
}

function nq(e) {
  let t = t8({
    noiseCancellation: e.enabled
  });
  e$.eachConnection(e => tX(e, t.noiseCancellation)), nY(), nU(e.location)
}

function nX(e) {
  en.Z.setKrispModelOverride(e.model), c = e.model, nY()
}

function nQ(e) {
  var t;
  (0, ef.isWeb)() || (tb = e.enabled, null == (t = e$.setNoiseCancellationEnableStats) || t.call(e$, e.enabled))
}

function nJ(e) {
  t8({
    silenceWarning: e.enabled
  }), t4.update()
}

function n$(e) {
  e$.setDebugLogging(e.enabled)
}

function n0(e) {
  let {
    level: t
  } = e;
  l = t, en.Z.setKrispSuppressionLevel(t)
}

function n1(e) {
  t8({
    videoHook: e.enabled
  })
}

function n3(e) {
  t8({
    experimentalSoundshare2: e.enabled
  })
}

function n2(e) {
  let {
    enabled: t
  } = e;
  t8({
    useSystemScreensharePicker: t
  })
}

function n4(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t8({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  e$.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function n5(e) {
  let {
    enabled: t
  } = e;
  t8({
    qos: t
  }), e$.eachConnection(e => e.setQoS(t))
}

function n8() {
  t6()
}

function n6(e) {
  let {
    inputDetected: t
  } = e;
  tf = t, !t_ && tf && (t_ = true, t4.update())
}

function n7(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === tt) returnfalse;
  tt = n, e$.eachConnection(tH)
}

function n9(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eC.PQ.ACCEPTED;
  switch (n) {
    case eC.Eu.AUDIO:
      tN = true, e$.eachConnection(tH);
      break;
    case eC.Eu.CAMERA:
      !r && tr && tW(false);
      break;
    default:
      returnfalse
  }
}

function re() {
  return tg || false
}
async function rt() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    tg = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tE = e, r.emitChange()
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
    }), t8({
      noiseCancellation: false
    })
  } finally {
    tm = false
  }
}

function rn() {
  return (0, Chunk358085.isWindows)() || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function rr() {
  !rn() || __OVERLAY__ || tm || tg ? (0, Chunk358085.isWeb)() && e$.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (tg = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t8({
    noiseCancellation: false
  }) : (tm = true, rt())
}

function ri(e) {
  let {
    enabled: t
  } = e;
  ec.default.track(eS.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != ty ? ty : null,
    enabled: t
  }), t8({
    voiceFilterPlaybackEnabled: t
  })
}

function ra(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t8({
    mostRecentlyRequestedVoiceFilter: t
  }), e$.eachConnection(e => e.setVoiceFilterId(t))
}

function ro() {
  t8({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function rs(e) {
  let {
    voiceFilterId: t
  } = e;
  tv = ty, tI = tO, ty = t, tO = null === t ? null : Date.now()
}

function rl(e) {
  let t = e.bypassEnabled;
  t8({
    bypassSystemInputProcessing: t
  }), e$.setAudioInputBypassSystemProcessing(t), nU(e.location)
}

function rc(e) {
  ru(e.subsystem)
}

function ru(e) {
  e === eP.iA.AUTOMATIC ? (t8({
    automaticAudioSubsystem: true
  }), rd()) : (t8({
    automaticAudioSubsystem: false
  }), e$.setAudioSubsystem(e))
}

function rd() {
  e$.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function rf(e) {
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
  (a.mute || a.deaf) && (t8({
    deaf: false,
    mute: false
  }), e$.eachConnection(tH))
}

function r_(e) {
  let {
    application: t
  } = e;
  e1.add(t.id)
}

function rp(e) {
  let {
    application: t
  } = e;
  e1.delete(t.id)
}

function rh(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      e3 = false, e$.eachConnection(tH);
      break;
    case "video":
      tW(false)
  }
}

function rm(e) {
  e3 = e.enabled, e.unmute && t8({
    mute: false,
    deaf: false
  }), e$.eachConnection(tH)
}

function rg(e) {
  let {
    enabled: t
  } = e;
  et.Z.requestPermission(eC.Eu.CAMERA), tW(t)
}

function rE(e) {
  let {
    sourceId: t,
    applicationName: n,
    quality: i
  } = e;
  if (!(0, N.CY)() || null == I.Z) returnfalse;
  let a = null,
    s = null,
    l = eu.Z.getPidFromDesktopSource(t);
  ({
    soundshareId: a,
    soundshareSession: s
  } = nc(l));
  let c = {
    desktopSource: {
      id: t,
      sourcePid: l,
      soundshareId: a,
      soundshareSession: s
    },
    quality: i
  };
  null != o && (e$.setClipsSource(null), (0, ef.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != a && nu(a, s), o = c;
  let u = tG(),
    d = tZ().videoHook;
  e$.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: d,
      useGraphicsCapture: t$(),
      useCaptureDeviceForEncode: false,
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: t1(),
      videoHookStaleFrameTimeoutMs: eH,
      graphicsCaptureStaleFrameTimeoutMs: eY,
      hdrCaptureMode: u
    },
    quality: i,
    applicationName: n
  })
}

function rb(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, e$.setClipsSource(null))
}

function ry(e) {
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
    } = nc(c), null != e && nu(e, r)), tY(s), tW(s === eP.Yn.STREAM && tr, {
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
      o = e === eP.Yn.STREAM && tr,
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

function rO(e) {
  let {
    section: t
  } = e;
  return t === eS.oAB.VOICE && t9(), false
}

function rv() {
  return e$.eachConnection(tQ), false
}

function rI(e) {
  let {
    enabled: t
  } = e, n = t8({
    aecDumpEnabled: t
  });
  e$.setAecDump(n.aecDumpEnabled)
}

function rT(e) {
  let {
    overrides: t
  } = e;
  if (__OVERLAY__) returnfalse;
  e0 = Object.values(eP.Yn).reduce((e, n) => {
    let r = n,
      i = eQ();
    return e[r] = p().merge(i, t[r]), e
  }, {}), y.K.set(ek, e0), t7()
}

function rS(e) {
  let {
    state: t
  } = e, n = L.Z.isEnabled();
  if (t === eS.$7l.BACKGROUND && tr && !n) tu = true, tW(false);
  else {
    if (t !== eS.$7l.ACTIVE || !tu) returnfalse;
    tu = false, tW(true)
  }
  returntrue
}

function rA(e) {
  e$.eachConnection(t => t.setBitRate(e.bitrate))
}

function rC() {
  if (!tr && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tW(false, null)
}

function rN() {
  return !!tS && (tS = false, true)
}

function rR(e) {
  e$.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rP(e) {
  let {
    settings: t
  } = e;
  e$.applyMediaFilterSettings(t).finally(() => {
    tA = false, r.emitChange()
  })
}

function rD() {
  tA = true
}

function rw() {
  tA = false
}

function rL(e) {
  tM = e.enabled
}
class rx extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tJ(), t5(), rr(), nS(), tL = {
      [Chunk65154.AN.VIDEO]: e$.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: e$.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: e$.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk967368.Z, Chunk463395.Z, Chunk592125.Z, Chunk435064.Z, Chunk353926.Z, Chunk19780.Z, Chunk594190.ZP, Chunk615830.Z, Chunk581883.Z, Chunk594174.default, Chunk631768.Z, Chunk420439.Z)
  }
  supports(e) {
    return e$.supports(e)
  }
  supportsInApp(e) {
    return tL[e] || e$.supports(e)
  }
  isSupported() {
    return e$.supported()
  }
  isNoiseSuppressionSupported() {
    return e$.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return re()
  }
  isNoiseCancellationError() {
    return tS
  }
  isAutomaticGainControlSupported() {
    return e$.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !t2() && (e$.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || e$.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return e$.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e$.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return re()
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
    return e3
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
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
    return e !== eg.default.getId() && (tZ(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return e$.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
    return null != (t = tZ(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
    return null != (t = tZ(n).videoToggleStateMap[e]) ? t : eS.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
    return t === eP.Yn.DEFAULT && tP.has(e)
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
    return e5
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
      n = tZ(t).localPans[e];
    return null != n ? n : eV
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
      n = t === eP.Yn.STREAM ? eP.Yh : eP.Qx,
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
      r === eS.pM4.PUSH_TO_TALK && e1.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return nn(e8, tZ().inputDeviceId)
  }
  getOutputDeviceId() {
    return nn(e6, tZ().outputDeviceId)
  }
  getVideoDeviceId() {
    return nn(e7, tZ().videoDeviceId)
  }
  getInputDevices() {
    return e8
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
      inputDevices: e8,
      outputDevices: e6,
      appSupported: tL,
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
    return e2
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
    return tk
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
    return tj
  }
  setHasActiveCallKitCall(e) {
    tj = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? e$.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && t1() : (0, Chunk358085.isWindows)() ? e$.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && e$.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    return tx
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
ew(rx, "displayName", "MediaEngineStore");
let rj = r = new rx(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: rf,
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
  AUDIO_SET_INPUT_DEVICE: nD,
  AUDIO_SET_OUTPUT_DEVICE: nw,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nx,
  AUDIO_SET_ECHO_CANCELLATION: nG,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nB,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nZ,
  AUDIO_SET_LOOPBACK: nV,
  AUDIO_SET_NOISE_SUPPRESSION: nK,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nz,
  AUDIO_SET_NOISE_CANCELLATION: nq,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nX,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nJ,
  AUDIO_SET_DEBUG_LOGGING: n$,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n0,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nQ,
  MEDIA_ENGINE_SET_VIDEO_HOOK: n1,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n3,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n2,
  AUDIO_SET_ATTENUATION: n4,
  AUDIO_SET_QOS: n5,
  MEDIA_ENGINE_DEVICES: nj,
  AUDIO_VOLUME_CHANGE: nk,
  AUDIO_RESET: n8,
  AUDIO_INPUT_DETECTED: n6,
  AUDIO_SET_SUBSYSTEM: rc,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rl,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rm,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rg,
  MEDIA_ENGINE_PERMISSION: rh,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ry,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nL,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nM,
  USER_SETTINGS_MODAL_INIT: rO,
  USER_SETTINGS_MODAL_SET_SECTION: rO,
  CERTIFIED_DEVICES_SET: rv,
  RPC_APP_CONNECTED: r_,
  RPC_APP_DISCONNECTED: rp,
  OVERLAY_INITIALIZE: nf,
  APP_STATE_UPDATE: rS,
  SET_CHANNEL_BITRATE: rA,
  SET_VAD_PERMISSION: n7,
  SET_NATIVE_PERMISSION: n9,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rR,
  MEDIA_ENGINE_SET_AEC_DUMP: rI,
  MEDIA_ENGINE_RESET_SETTINGS: rT,
  CHANNEL_DELETE: rC,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rN,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rP,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rD,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rw,
  USER_SETTINGS_PROTO_UPDATE: ny,
  CLIPS_INIT: rE,
  CLIPS_SETTINGS_UPDATE: rb,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rL,
  VOICE_FILTER_REQUEST_SWITCH: ra,
  VOICE_FILTER_LOOPBACK_TOGGLE: ri,
  VOICE_FILTER_APPLIED: rs,
  VOICE_FILTER_DOWNLOAD_FAILED: ro,
  VOICE_FILTER_APPLY_FAILED: ro
})