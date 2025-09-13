/** Chunk was on web.js **/
/** chunk id: 131951, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  Z: () => rN
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
  Chunk355552 = require("./355552.js"),
  Chunk294473 = require("./294473.js"),
  Chunk706629 = require("./706629.js"),
  Chunk159142 = require("./159142.js"),
  Chunk166884 = require("./166884.js"),
  Chunk585360 = require("./585360.js"),
  Chunk947851 = require("./947851.js"),
  Chunk839758 = require("./839758.js"),
  Chunk529558 = require("./529558.js"),
  Chunk441167 = require("./441167.js"),
  Chunk787517 = require("./787517.js"),
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
  ew = "MediaEngineStore",
  eD = 4,
  ex = 1,
  eL = 1,
  ej = 1,
  ek = 1,
  eM = .5,
  eU = {
    left: 1,
    right: 1
  },
  eG = 500,
  eB = 5 * Chunk70956.Z.Millis.SECOND,
  eZ = false,
  eF = 100,
  eV = 2 * Chunk70956.Z.Millis.SECOND,
  eH = 0;

function eY() {
  return {
    mode: Chunk981631.pM4.VOICE_ACTIVITY,
    modeOptions: {
      threshold: eZ,
      autoThreshold: Chunk358085.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: true,
      vadKrispActivationThreshold: eM,
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
    videoHook: eK.supports(Chunk65154.AN.VIDEO_HOOK),
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
let eW = {
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
  eK = (0, Chunk46973.Mt)((0, Chunk46973.jj)());
eP.enableNativeLogger(true);
let ez = {},
  eq = new Set([Chunk65154.Yn.DEFAULT]),
  eX = eK.supports(Chunk65154.AN.AUTO_ENABLE),
  eQ = false,
  eJ = Chunk65154.Yn.STREAM,
  e$ = performance.now(),
  e0 = {
    [Chunk65154.w5]: t3("No Input Devices")
  },
  e1 = {
    [Chunk65154.w5]: t3("No Output Devices")
  },
  e2 = {
    [Chunk65154.w5]: t3("No Video Devices")
  },
  e3 = false,
  e4 = false,
  e8 = false,
  e5 = false,
  e6 = false,
  e7 = Chunk65154.Av,
  e9 = Chunk65154.Av,
  te = false,
  tt = false,
  tn = false,
  tr = new Chunk846519.V7,
  ti = false,
  ta = false,
  to = null,
  ts = false,
  tl = false,
  tc = false,
  tu = false,
  td = false,
  tf = [],
  t_ = false,
  tp = null,
  th = null,
  tm = null,
  tg = null,
  tE = null,
  tb = false,
  ty = false,
  tO = false,
  tv = false;
Chunk751571.Z.hasPermission(Chunk761274.Eu.AUDIO, {
  showAuthorizationError: false
}), Chunk751571.Z.hasPermission(Chunk761274.Eu.CAMERA, {
  showAuthorizationError: false
});
let tI = false,
  tT = new Set,
  tS = tI,
  tA = new Set,
  tC = {},
  tN = null,
  tR = true,
  tP = false;

function tw() {
  var e, t;
  return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports ? "always" : Chunk747268.Z === Chunk404097.R.CANARY ? "permittedDevicesOnly" : "never"
}

function tD() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = ez[module];
  return null == exports && (t = eY(), ez[module] = exports), exports
}

function tx() {
  var e, t, n;
  let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    i = tD(r),
    a = eW[null != (e = i.activeInputProfile) ? module : Chunk345655._.CUSTOM];
  return eR(eC({}, i, a), {
    modeOptions: eC({}, null != (t = i.modeOptions) ? exports : {}, null != (n = a.modeOptions) ? require : {})
  })
}

function tL(e) {
  var t;
  let n = tx(e.context);
  e.setInputMode(n.mode, {
    vadThreshold: n.modeOptions.threshold,
    vadAutoThreshold: n.modeOptions.autoThreshold,
    vadUseKrisp: n.modeOptions.vadUseKrisp && n2(),
    vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : .5,
    vadLeading: n.modeOptions.vadLeading,
    vadTrailing: n.modeOptions.vadTrailing,
    pttReleaseDelay: Math.round(n.modeOptions.delay)
  })
}

function tj(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Qx;
  return p().clamp(e, 0, t)
}

function tk(e) {
  let t = tx(e.context),
    n = !eX || t.mute || t.deaf;
  e.context === eT.Yn.DEFAULT ? n = n || e3 || e4 || e8 || !Q.Z.didHavePermission(eO.Eu.AUDIO) : e.context === eT.Yn.STREAM && (n = true), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eT.Yn.DEFAULT && S.Z.updateNativeMute()
}

function tM(e) {
  e !== eJ && (null != a && eK.setGoLiveSource(null, eJ), eJ = e)
}

function tU() {
  var e, t, n;
  let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : e6,
    o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a,
    s = a;
  if ((null == s ? true : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? true : module.id) && (null != s.desktopSource.soundshareId && (0, Chunk358085.isWindows)() && Chunk887278.pn(s.desktopSource.soundshareId), eK.setGoLiveSource(null, eJ)), (null == s ? true : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? true : exports.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? true : require.audioDeviceGuid)) && eK.setGoLiveSource(null, eJ), e6 || i) {
    let e = tx().videoDeviceId;
    e6 && module === Chunk65154.w5 && e9 === Chunk65154.w5 && e7 !== Chunk65154.Av ? e = e7 : e9 = module, e7 = (e6 = i) ? t8(e2, module) : Chunk65154.Av, eK.setVideoInputDevice(e7)
  }
  if (a = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let t = tw(),
        n = tx().videoHook,
        i = tW(),
        a = i ? tK() && (0, Chunk787517.R)("MediaEngineStore_updateVideo").enabled ? Chunk70722.zj : Chunk70722.ZM : 0;
      eK.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: require,
          useGraphicsCapture: i,
          useGraphicsCaptureApiLevel: a,
          useLoopback: r.getExperimentalSoundshare(),
          useQuartzCapturer: true,
          allowScreenCaptureKit: tz(),
          videoHookStaleFrameTimeoutMs: eG,
          graphicsCaptureStaleFrameTimeoutMs: eB,
          hdrCaptureMode: exports
        },
        quality: module
      }, eJ)
    }
    null != o.cameraSource && eK.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: module
    }, eJ)
  }
}

function tG(e) {
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

function tB(e) {
  let t = (0, W.n)({
      location: "getAutomaticGainControlConfig",
      disable: !e
    }).enabled,
    n = (0, j.U)({
      location: "getAutomaticGainControlConfig",
      disable: !e || !t
    });
  return eC({
    enabled: e
  }, n)
}

function tZ(e, t) {
  e.setAutomaticGainControl(tB(t))
}
async function tF(e, t) {
  if ((0, eo.isIOS)() || (0, eo.isMac)()) {
    let e = await eK.getSystemMicrophoneMode();
    "" !== e && "standard" !== e && k.Z.getConfig({
      location: "setNoiseCancellation"
    }).disabledModes.includes(e) && (t = false)
  }
  e.setNoiseCancellation(t);
  let n = (0, W.n)({
    location: "setNoiseCancellation",
    disable: !t
  }).enabled;
  e.setNoiseCancellationDuringProcessing(n)
}

function tV(e) {
  let t = tx(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(e_.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(e_.Z.hasNoiseSuppression(n) || t.noiseSuppression), tZ(e, e_.Z.hasAutomaticGainControl(n) || t.automaticGainControl), tF(e, t.noiseCancellation), e.setVoiceFilterId(tp), (0, eo.isWeb)()) {
    let n = t.noiseCancellation ? false : false;
    e.setSilenceThreshold(n)
  }
}

function tH() {
  var e;
  return !!(0, Chunk947851.m)("MediaEngineStore") || null == (e = tx().hardwareEncoding) || module
}

function tY() {
  eK.on(Chunk46973.aB.Connection, e => {
    var t;
    tL(e), tk(e), tV(e);
    let n = tx();
    e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(tH()), e.setSoftwareH264(null == (t = n.openH264) || t);
    let i = eh.Z.getGuildId(),
      {
        muteBeforeProcessing: o,
        pttBeforeProcessing: s,
        skipEncode: l
      } = (null != i ? Z.Z : B.Z).getCurrentConfig({
        location: "setupMediaEngine",
        guildId: null != i ? i : true
      }, {
        autoTrackExposure: true
      });
    o && e.setExperimentFlag(eT.V8.MUTE_BEFORE_PROCESSING, true), s && e.setExperimentFlag(eT.V8.PTT_BEFORE_PROCESSING, true), l && e.setExperimentFlag(eT.V8.SKIP_ENCODE, true);
    let c = false,
      u = true;
    if (e.setExperimentFlag(eT.V8.RESET_DECODER_ON_ERRORS, true), c && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_ERRORS, true), u && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, true), e.context === eT.Yn.STREAM) {
      let {
        simulcastEnabled: t,
        lqStreamBitrate: n
      } = V.Z.getConfig();
      e.configureGoLiveSimulcast(t, n);
      let {
        enabled: r,
        scaleOffBitrateFloor: i,
        adjustMaxBitrateFloor: a
      } = (0, H.k)({
        location: "setupMediaEngine",
        autoTrackExposure: true
      });
      e.setGoLiveUsePixelCounts(r, i, a)
    }
    if ((0, eo.isWindows)() ? (null == tN ? true : tN.startsWith("NVIDIA")) || (null == tN ? true : tN.startsWith("AMD")) ? e.setExperimentFlag(eT.V8.SIGNAL_AV1, true) : e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, true) : ((0, eo.isMac)() || (0, eo.isLinux)()) && e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, true), (0, eo.isWindows)() && e.setExperimentFlag(eT.V8.SIGNAL_AV1_HARDWARE_DECODE, true), (0, eo.isWeb)()) {
      let {
        enabled: t
      } = (0, F.A)("MediaEngineStore");
      e.setExperimentFlag(eT.V8.BROWSER_HEVC, t)
    }
    eK.setHasFullbandPerformance((0, R.Z)());
    let d = (0, G.D)("setupMediaEngine").enabled;
    if (e.setRemoteAudioHistory(1e3 * !!d), (0, C.Z)(r)) {
      let t = A.Z.getSettings();
      e.setExperimentFlag(eT.V8.STREAMER_CLIP, t.clipsEnabled);
      let {
        enableViewerClipping: n
      } = z.Z.getCurrentConfig({
        location: "f627ab_15"
      }, {
        autoTrackExposure: false
      });
      e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eT.ux)
    }
    for (let t of (n = tx(e.context), e.setPostponeDecodeLevel(eF), Object.keys(n.localMutes))) t !== ed.default.getId() && e.setLocalMute(t, n.localMutes[t]);
    for (let t of Object.keys(n.localVolumes)) t !== ed.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
    for (let t of Object.keys(n.localPans)) {
      let r = n.localPans[t];
      e.setLocalPan(t, r.left, r.right)
    }
    for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
    e.on(b.Sh.Speaking, (t, n) => {
      v.Z.dispatch({
        type: "SPEAKING",
        context: e.context,
        userId: t,
        speakingFlags: n
      })
    }), e.context === eT.Yn.DEFAULT && (tt = false, tn = false, e.on(b.Sh.SpeakingWhileMuted, () => {
      tt = true, tn = true, r.emitChange(), tr.stop(), tr.start(eV, () => {
        tn = false, r.emitChange()
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
      }, (0, L.Z)(null == a ? true : a.desktopSource)))
    }), e.on(b.Sh.NoiseCancellationError, e => {
      eP.warn("noisecancellererror event: ".concat(e)), (0, P.kr)({
        type: P.u.NOISE_CANCELLER_ERROR,
        underlyingError: tG(e)
      }), tb = true, er.default.track(eb.rMx.VOICE_PROCESSING, {
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
        underlyingError: tG(e)
      }), er.default.track(eb.rMx.VOICE_PROCESSING, {
        noise_canceller_error: e
      }), v.Z.dispatch({
        type: "AUDIO_SET_MODE",
        context: eT.Yn.DEFAULT,
        mode: eb.pM4.VOICE_ACTIVITY,
        options: eR(eC({}, tx(eT.Yn.DEFAULT).modeOptions), {
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
  }), eK.on(Chunk46973.aB.DeviceChange, (e, t, n) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_DEVICES",
      inputDevices: e,
      outputDevices: t,
      videoDevices: n
    })
  }), eK.on(Chunk46973.aB.VolumeChange, (e, t) => {
    v.Z.dispatch({
      type: "AUDIO_VOLUME_CHANGE",
      inputVolume: e,
      outputVolume: t
    })
  }), eK.on(Chunk46973.aB.DesktopSourceEnd, (e, t) => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: null,
      endReason: e,
      errorCode: t
    })
  }), eK.on(Chunk46973.aB.AudioPermission, e => {
    tv = true, v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "audio",
      granted: e
    })
  }), eK.on(Chunk46973.aB.VideoPermission, e => {
    v.Z.dispatch({
      type: "MEDIA_ENGINE_PERMISSION",
      kind: "video",
      granted: e
    })
  }), eK.on(Chunk46973.aB.WatchdogTimeout, async () => {
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
  }), eK.on(Chunk46973.aB.VideoInputInitialized, e => {
    er.default.track(eb.rMx.VIDEO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ea.Z.Millis.SECOND),
      timed_out: e.initializationTimerExpired,
      activity: e.entropy,
      media_session_id: eh.Z.getMediaSessionId(),
      rtc_connection_id: eh.Z.getRTCConnectionId()
    })
  }), eK.on(Chunk46973.aB.AudioInputInitialized, e => {
    er.default.track(eb.rMx.AUDIO_INPUT_INITIALIZED, {
      device_name: e.description.name,
      time_to_initialized_ms: Math.round(e.timeToInitialized * ea.Z.Millis.SECOND),
      rtc_connection_id: eh.Z.getRTCConnectionId()
    })
  }), eK.on(Chunk46973.aB.ClipsRecordingRestartNeeded, () => {
    Chunk570140.Z.dispatch({
      type: "CLIPS_RESTART"
    })
  }), eK.on(Chunk46973.aB.ClipsInitFailure, (e, t) => {
    v.Z.wait(() => {
      v.Z.dispatch({
        type: "CLIPS_INIT_FAILURE",
        errMsg: e,
        applicationName: t
      })
    })
  }), eK.on(Chunk46973.aB.ClipsRecordingEnded, (e, t) => {
    var n, r;
    (null == o || null == (n = o.desktopSource) ? true : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? true : r.soundshareId) !== t && T.pn(t), o = null)
  }), eK.on(Chunk46973.aB.NativeScreenSharePickerUpdate, (e, t) => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
      existing: e,
      content: t
    })
  }), eK.on(Chunk46973.aB.NativeScreenSharePickerCancel, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
      existing: e
    })
  }), eK.on(Chunk46973.aB.NativeScreenSharePickerError, e => {
    v.Z.dispatch({
      type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
      error: e
    })
  }), eK.on(Chunk46973.aB.AudioDeviceModuleError, (e, t, n) => {
    er.default.track(eb.rMx.AUDIO_DEVICE_MODULE_ERROR, {
      audio_device_module: e,
      code: t,
      device_name: n
    })
  }), eK.on(Chunk46973.aB.VideoCodecError, e => {
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
  }), eK.on(Chunk46973.aB.ConnectionStats, e => {
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
          version: eH++,
          context: n.context
        }
      })
    })
  }), eK.on(Chunk46973.aB.VoiceQueueMetrics, e => {
    let t = rC(e);
    null !== t && er.default.track(eb.rMx.VOICE_QUEUE_METRICS, t)
  }), eK.setOnVideoContainerResized((e, t, n) => {
    v.Z.wait(() => v.Z.dispatch({
      type: "VIDEO_SIZE_UPDATE",
      streamId: e,
      width: t,
      height: n
    }))
  }), nj(), tQ.reset(), (0, Chunk704806.q)().then(e => {
    null != e && (tN = e.gpu_brand)
  }), eK.on(Chunk46973.aB.SystemMicrophoneModeChange, e => {
    eK.eachConnection(tV)
  })
}

function tW() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.c5)
}

function tK() {
  return (0, Chunk358085.isWindows)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sN)
}

function tz() {
  return (0, Chunk358085.isMac)() && eK.supports(Chunk65154.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.C7)
}

function tq() {
  return (0, Chunk358085.isWindows)() && eK.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eK.supports(Chunk65154.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function tX() {
  return eK.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let tQ = new class {
  start() {
    this.started || (this.started = true, eK.on(Chunk46973.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = false, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eK.removeListener(Chunk46973.aB.Silence, this.handleSilence), Chunk570140.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = tx();
    !ts && Chunk19780.Z.getState() === Chunk981631.hes.RTC_CONNECTED && module.mode === Chunk981631.pM4.VOICE_ACTIVITY && module.silenceWarning ? this.start() : this.stop()
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
        }), e && (tl = true))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function tJ() {
  var e;
  let t = Chunk433517.K.get("audio");
  null != exports && (Chunk433517.K.set(ew, {
    [Chunk65154.Yn.DEFAULT]: exports
  }), Chunk433517.K.remove("audio")), ez = null != (e = Chunk433517.K.get(ew)) ? module : {}, p().each(ez, e => {
    if (p().defaultsDeep(e, eY()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eu.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eD && (e.vadUseKrispSettingVersion = eD, e.modeOptions.vadUseKrisp = true), e.qosMigrated || (e.qosMigrated = true, e.qos = false), !e.vadThrehsoldMigrated) {
      var t;
      e.vadThrehsoldMigrated = true, (null == (t = e.modeOptions) ? true : t.threshold) === false && (e.modeOptions.threshold = eZ)
    }
    eK.supports(eT.AN.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < ek && (e.sidechainCompressionSettingVersion = ek, e.sidechainCompression = true), (0, eo.isWeb)() ? e.ncUseKrispjsSettingVersion !== eL && (e.ncUseKrispjsSettingVersion = eL, e.noiseSuppression = false, e.noiseCancellation = true) : e.ncUseKrispSettingVersion !== ex && (e.ncUseKrispSettingVersion = ex, e.noiseSuppression = false, e.noiseCancellation = true), e.hardwareEnabledVersion !== ej && (e.hardwareH264 = true, e.hardwareEnabledVersion = ej), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
  }), t1()
}

function t$(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = tD(t);
  return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ew, ez), r
}

function t0() {
  Chunk433517.K.remove(ew), location.reload()
}

function t1() {
  let e = tx();
  eK.setAudioInputDevice(module.inputDeviceId), eK.setAudioOutputDevice(module.outputDeviceId), tU(), eK.setInputVolume(module.inputVolume), eK.setOutputVolume(module.outputVolume), eK.setH264Enabled(tH() || module.openH264), eK.setAv1Enabled(tH()), eK.setH265Enabled(tH()), eK.setAecDump(module.aecDumpEnabled), eK.setSidechainCompression(module.sidechainCompression), eK.setSidechainCompressionStrength(module.sidechainCompressionStrength), eK.setAudioInputBypassSystemProcessing(module.bypassSystemInputProcessing)
}

function t2() {
  eX || eK.enable().then(() => Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: true,
    unmute: false
  }))
}

function t3(e) {
  return {
    id: eT.w5,
    index: 0,
    name: e,
    disabled: true,
    hardwareId: true,
    containerId: true
  }
}

function t4(e, t) {
  if (0 === e.length) {
    let e = t3(t);
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

function t8(e, t) {
  var n, r;
  let i = null != (r = null != (n = e[t]) ? n : e[eT.w5]) ? r : p()(e).values().first();
  return null != i ? i.id : t
}

function t5(e) {
  let t = e0;
  if (e0 = t4(e, eS.intl.string(eS.t["/QIjDA"])), !p().isEqual(e0, t)) {
    let e = tx(),
      t = t8(e0, e.inputDeviceId);
    eK.setAudioInputDevice(t)
  }
}

function t6(e) {
  let t = e1;
  if (e1 = t4(e, eS.intl.string(eS.t.xlUg0t)), !p().isEqual(e1, t)) {
    let e = tx(),
      t = t8(e1, e.outputDeviceId);
    eK.setAudioOutputDevice(t)
  }
}

function t7(e) {
  ta = e.length > 0;
  let t = e2;
  if (e2 = t4(e, eS.intl.string(eS.t.WKWARU)), e6 && !p().isEqual(e2, t)) {
    var n;
    let e = true !== e2[e7],
      r = e7 === eT.w5 && (null == (n = t[eT.w5]) ? true : n.disabled);
    tU(e || r)
  }
}

function t9() {
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
      } = tx(i);
    for (let [e, t] of Object.entries(o)) null == (0, Chunk725380.Ky)(i, module) && (exports.muted ? s[module] = true : delete s[module], exports.volume !== a ? l[module] = exports.volume : delete l[module], eK.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, i));
    if (require)
      for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[module] && (delete s[module], delete l[module], eK.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, false)
      }, i));
    t$({
      localMutes: s,
      localVolumes: l
    }, i)
  }
}

function ne(e) {
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

function nt(e, t) {
  (0, eo.isWindows)() && T.YT(e, {
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

function nn(e) {
  i = e.sessionId, e3 = false, e5 = false;
  let t = tx();
  if (tq() && (tX() ? rn(eT.iA.AUTOMATIC) : t.automaticAudioSubsystem && rr()), eK.supports(eT.AN.OFFLOAD_ADM_CONTROLS)) {
    let e = false;
    (0, eo.isDesktop)() ? e = (0, M.E)({
      location: "handleConnectionOpen"
    }).enabled: ((0, eo.isIOS)() || (0, eo.isAndroid)()) && (e = (0, U.W)({
      location: "handleConnectionOpen"
    }).enabled), eK.setOffloadAdmControls(e)
  }(0, et.wt)({
    location: "MediaEngineStore",
    autoTrackExposure: false
  }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, eo.isDesktop)() && (en.Z.getLastInitAttemptMayHaveCrashed() ? (v.Z.dispatch({
    type: "AUDIO_SET_SELF_MUTE",
    mute: true,
    context: eT.Yn.DEFAULT,
    playSoundEffect: true
  }), t$({
    mostRecentlyRequestedVoiceFilter: null
  })) : n(358820).r5()), t9()
}

function nr(e) {
  let {
    mediaEngineState: t
  } = e;
  ez = t.settingsByContext, e0 = t.inputDevices, e1 = t.outputDevices, tC = t.appSupported, td = t.krispModuleLoaded, s = t.krispVersion, eJ = t.goLiveContext
}

function ni() {
  i = null
}

function na() {
  if ((0, Chunk358085.isWeb)()) {
    let e = Chunk529558.N.getCurrentConfig({
      location: "MediaEngineStore handlePostConnectionOpen"
    });
    module.loadWasmModule && module.preload && r.startDavePreload()
  }
  returnfalse
}

function no(e) {
  switch (e.state) {
    case eb.hes.CONNECTING:
      t2();
      break;
    case eb.hes.RTC_CONNECTING:
      ts = false, tl = false;
      break;
    case eb.hes.RTC_CONNECTED:
      tU();
      break;
    case eb.hes.DISCONNECTED:
      nh(), nm()
  }
  tQ.update()
}

function ns(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (i === t.sessionId) {
      e3 = t.mute || t.suppress, e5 = t.deaf, eK.eachConnection(tk);
      let e = null != t.guildId && null != t.channelId && null != tE && tE !== t.channelId,
        n = !tc && null == t.channelId;
      return tU(!e && !n && e6), tE = t.channelId, true
    }
    return __OVERLAY__ || t.userId !== ed.default.getId() || null != eh.Z.getChannelId() || tU(false, null), e
  }, false)
}

function nl(e) {
  let {
    mute: t
  } = e;
  e4 = t, eK.eachConnection(tk)
}

function nc(e) {
  let {
    context: t,
    playSoundEffect: n
  } = e, {
    mute: r,
    deaf: i
  } = tx(t);
  if (t === eT.Yn.DEFAULT && (Q.Z.requestPermission(eO.Eu.AUDIO), e8)) returnfalse;
  (r = !i && !r) || (i = false), n || (te = true), t$({
    mute: r,
    deaf: i
  }, t), eK.eachConnection(tk)
}

function nu(e) {
  let {
    context: t,
    mute: n,
    playSoundEffect: r
  } = e;
  t$({
    mute: n
  }, t), r || (te = true), eK.eachConnection(tk)
}

function nd(e) {
  let {
    settings: {
      type: t
    },
    local: n,
    wasSaved: r
  } = e;
  if (t !== ev.yP.PRELOADED_USER_SETTINGS || n || null != r) returnfalse;
  t9(true)
}

function nf(e) {
  let {
    context: t
  } = e;
  t$({
    deaf: !tx(t).deaf
  }, t), eK.eachConnection(tk)
}

function n_(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n === ed.default.getId()) return;
  let {
    localMutes: r
  } = tx(t);
  r[n] ? delete r[n] : r[n] = true, t$({
    localMutes: r
  }, t), eK.eachConnection(e => e.setLocalMute(n, r[n] || false), t)
}

function np(e) {
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
    } = tx(l),
    m = null != (t = h[c]) && t,
    g = tT.has(c),
    E = u === eb.ZUi.AUTO_ENABLED || u === eb.ZUi.MANUAL_ENABLED;
  eP.info("disableVideo=".concat(p, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
  let b = p !== m,
    y = l === eT.Yn.DEFAULT,
    O = _ && b && y,
    v = d && b && y;
  eP.info("changed=".concat(b, " isDefaultContext=").concat(y, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
  let {
    videoToggleStateMap: I
  } = tx(l);
  if (I[c] === eb.ZUi.AUTO_PROBING && u === eb.ZUi.AUTO_ENABLED && (0, X.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E), I[c] = u, t$({
      videoToggleStateMap: I
    }, l, d), u === eb.ZUi.AUTO_PROBING ? null == (n = eh.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, true) : null == (r = eh.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, false), tS || (eP.info("isAutoDisableAllowed=".concat(tS, " - disabling VideoHealthManager")), null == (a = eh.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
    if (!p && !g || p && !tS) return;
    (0, X.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E), p ? tT.add(c) : tT.delete(c)
  } else v && (g && !p ? (eP.info("disallowing auto-disable for this session because of manual override by user"), tS = false, null == (s = eh.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, X.Z)(c, eT.fC.MANUAL_REENABLE, E)) : (0, X.Z)(c, p ? eT.fC.MANUAL_DISABLE : eT.fC.MANUAL_ENABLE, E));
  y && !p && tT.delete(c), p ? h[c] = true : delete h[c], t$({
    disabledLocalVideos: h
  }, l, d), eK.eachConnection(e => {
    var t;
    return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
  }, l)
}

function nh() {
  if (0 === tT.size) return;
  let e = Chunk65154.Yn.DEFAULT,
    {
      disabledLocalVideos: t
    } = tx(module);
  tT.forEach(n => {
    f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eK.eachConnection(e => e.setLocalVideoDisabled(n, false), e)
  }), tT.clear(), t$({
    disabledLocalVideos: exports
  }, module, false)
}

function nm() {
  let e = Chunk65154.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = tx(module);
  for (let [e, n] of Object.entries(exports)) require === Chunk981631.ZUi.AUTO_PROBING && delete exports[module];
  t$({
    videoToggleStateMap: exports
  }, module, false)
}

function ng(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === ed.default.getId()) return;
  let i = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
    {
      localVolumes: a
    } = tx(t);
  r === i ? delete a[n] : a[n] = r, t$({
    localVolumes: a
  }, t), eK.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nE(e) {
  let {
    context: t,
    userId: n,
    left: r,
    right: i
  } = e, {
    localPans: a
  } = tx(t);
  a[n] = {
    left: r,
    right: i
  }, t$({
    localPans: a
  }, t), eK.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nb(e) {
  let {
    context: t,
    mode: n,
    options: r
  } = e;
  t$({
    mode: n,
    modeOptions: r
  }, t), eK.eachConnection(tL), tQ.update()
}

function ny(e) {
  let {
    volume: t
  } = e;
  t$({
    inputVolume: tj(t)
  }), eK.setInputVolume(t)
}

function nO(e) {
  let {
    volume: t
  } = e;
  t$({
    outputVolume: t
  }), eK.setOutputVolume(t)
}

function nv(e) {
  let {
    id: t
  } = e;
  t = t8(e0, t), e$ = performance.now(), t$({
    inputDeviceId: t
  }), eK.setAudioInputDevice(t)
}

function nI(e) {
  let {
    id: t
  } = e;
  t$({
    outputDeviceId: t = t8(e1, t)
  }), eK.setAudioOutputDevice(t)
}

function nT(e) {
  let {
    id: t
  } = e;
  t$({
    videoDeviceId: t = t8(e2, t)
  }), tU()
}

function nS(e) {
  let {
    inputProfile: t
  } = e;
  t$({
    activeInputProfile: t
  });
  let n = tx();
  eK.eachConnection(e => {
    tL(e), tZ(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), tF(e, n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression)
  }), eK.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), tQ.update(), nk()
}

function nA(e) {
  return eQ !== e.required && (eQ = e.required, e.required || eK.interact(), true)
}

function nC(e) {
  let {
    inputDevices: t,
    outputDevices: n,
    videoDevices: r
  } = e;
  t5(t), t6(n), t7(r)
}

function nN(e) {
  let {
    inputVolume: t,
    outputVolume: n
  } = e;
  t$({
    inputVolume: tj(t),
    outputVolume: n
  })
}

function nR(e) {
  var t;
  let n = tx(),
    r = eK.getAudioSubsystem(),
    i = eK.getAudioLayer(),
    a = t8(e0, n.inputDeviceId),
    o = null == (t = e0[a]) ? true : t.name;
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

function nP(e) {
  let t = t$({
    echoCancellation: e.enabled
  });
  eK.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), nk(), nR(e.location)
}

function nw(e) {
  nx(e.enabled)
}

function nD(e) {
  let t = t$({
    sidechainCompressionStrength: e.strength
  });
  eK.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function nx(e) {
  let t = t$({
    sidechainCompression: e
  });
  eK.setSidechainCompression(t.sidechainCompression)
}

function nL(e) {
  let {
    enabled: t,
    loopbackReason: n
  } = e;
  return t ? tA.add(n) : tA.delete(n), nj(), nk()
}

function nj() {
  let e = !tA.has("voice_filter_preview") && !tA.has("mic_test");
  eK.setMaybePreprocessMute(module)
}

function nk() {
  let e = tx(),
    t = tA.size > 0,
    n = module.inputDeviceId,
    r = Chunk463395.Z.hasEchoCancellation(require) || module.echoCancellation,
    i = !exports,
    a = Chunk463395.Z.hasNoiseSuppression(require) || module.noiseSuppression,
    o = tB(Chunk463395.Z.hasAutomaticGainControl(require) || module.automaticGainControl),
    s = module.noiseCancellation,
    l = null !== tp,
    c = tA.has("voice_filter") && 1 === tA.size;
  eK.setLoopback(exports, {
    echoCancellation: r,
    echoCancellationPreEcho: i,
    noiseSuppression: a,
    automaticGainControlConfig: o,
    noiseCancellation: s,
    voiceFilters: l,
    loopbackUseAudioMode: c
  })
}

function nM(e) {
  let t = t$({
    noiseSuppression: e.enabled
  });
  eK.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), nk(), nR(e.location)
}

function nU(e) {
  let t = t$({
    automaticGainControl: e.enabled
  });
  eK.eachConnection(e => tZ(e, t.automaticGainControl)), nk(), nR(e.location)
}

function nG(e) {
  let t = t$({
    noiseCancellation: e.enabled
  });
  eK.eachConnection(e => tF(e, t.noiseCancellation)), nk(), nR(e.location)
}

function nB(e) {
  J.Z.setKrispModelOverride(e.model), c = e.model, nk()
}

function nZ(e) {
  var t;
  (0, eo.isWeb)() || (t_ = e.enabled, null == (t = eK.setNoiseCancellationEnableStats) || t.call(eK, e.enabled))
}

function nF(e) {
  let t = t$({
    experimentalEncoders: e.enabled
  });
  eK.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
}

function nV(e) {
  let {
    enabled: t
  } = e, n = t$({
    hardwareEncoding: t
  }), r = tH();
  eK.eachConnection(e => e.setHardwareH264(r)), eK.setH264Enabled(r || n.openH264), eK.setAv1Enabled(r), eK.setH265Enabled(r)
}

function nH(e) {
  t$({
    silenceWarning: e.enabled
  }), tQ.update()
}

function nY(e) {
  eK.setDebugLogging(e.enabled)
}

function nW(e) {
  let {
    level: t
  } = e;
  l = t, J.Z.setKrispSuppressionLevel(t)
}

function nK(e) {
  t$({
    videoHook: e.enabled
  })
}

function nz(e) {
  t$({
    experimentalSoundshare2: e.enabled
  })
}

function nq(e) {
  let {
    enabled: t
  } = e;
  t$({
    useSystemScreensharePicker: t
  })
}

function nX(e) {
  let {
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  } = e, i = t$({
    attenuation: t,
    attenuateWhileSpeakingSelf: n,
    attenuateWhileSpeakingOthers: r
  });
  eK.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function nQ(e) {
  let {
    enabled: t
  } = e;
  t$({
    qos: t
  }), eK.eachConnection(e => e.setQoS(t))
}

function nJ() {
  t0()
}

function n$(e) {
  let {
    inputDetected: t
  } = e;
  to = t, !ts && to && (ts = true, tQ.update())
}

function n0(e) {
  let {
    hasPermission: t
  } = e, n = !t;
  if (n === e8) returnfalse;
  e8 = n, eK.eachConnection(tk)
}

function n1(e) {
  let {
    state: t,
    permissionType: n
  } = e, r = t === eO.PQ.ACCEPTED;
  switch (n) {
    case eO.Eu.AUDIO:
      tv = true, eK.eachConnection(tk);
      break;
    case eO.Eu.CAMERA:
      !r && e6 && tU(false);
      break;
    default:
      returnfalse
  }
}

function n2() {
  return td || false
}
async function n3() {
  try {
    var e, t, n, i;
    await Chunk998502.ZP.ensureModule("discord_krisp");
    let a = Chunk998502.ZP.requireModule("discord_krisp");
    td = true, s = null == (e = a.getSdkVersion) ? true : module.call(a), l = null != (i = null == (t = a.getSuppressionLevel) ? true : exports.call(a)) ? i : 100, null == (n = a.getNcModels) || require.call(a).then(e => {
      tf = e, r.emitChange()
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
    }), t$({
      noiseCancellation: false
    })
  } finally {
    tu = false
  }
}

function n4() {
  return (0, Chunk358085.isWindows)() && "arm64" !== Chunk998502.ZP.architecture || (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)()
}

function n8() {
  !n4() || __OVERLAY__ || tu || td ? (0, Chunk358085.isWeb)() && eK.supports(Chunk65154.AN.NOISE_CANCELLATION) ? (td = true, r.emitChange()) : (0, Chunk358085.isWeb)() && t$({
    noiseCancellation: false
  }) : (tu = true, n3())
}

function n5(e) {
  let {
    enabled: t
  } = e;
  er.default.track(eb.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
    active_voice_filter_id: null != tp ? tp : null,
    enabled: t
  }), t$({
    voiceFilterPlaybackEnabled: t
  })
}

function n6(e) {
  let {
    newVoiceFilterId: t
  } = e;
  t$({
    mostRecentlyRequestedVoiceFilter: t
  }), eK.eachConnection(e => e.setVoiceFilterId(t))
}

function n7() {
  t$({
    mostRecentlyRequestedVoiceFilter: null
  })
}

function n9(e) {
  let {
    voiceFilterId: t
  } = e;
  tm = tp, tg = th, tp = t, th = null === t ? null : Date.now()
}

function re(e) {
  let t = e.bypassEnabled;
  t$({
    bypassSystemInputProcessing: t
  }), eK.setAudioInputBypassSystemProcessing(t), nR(e.location)
}

function rt(e) {
  rn(e.subsystem)
}

function rn(e) {
  e === eT.iA.AUTOMATIC ? (t$({
    automaticAudioSubsystem: true
  }), rr()) : (t$({
    automaticAudioSubsystem: false
  }), eK.setAudioSubsystem(e))
}

function rr() {
  eK.queueAudioSubsystem(Chunk65154.iA.EXPERIMENTAL)
}

function ri(e) {
  let {
    guildId: t,
    channelId: n,
    currentVoiceChannelId: r,
    video: i
  } = e;
  if (r !== n && tU(i, null), null != t || null == n) {
    tc = false;
    return
  }
  if (tc) return;
  tc = true;
  let a = tx();
  (a.mute || a.deaf) && (t$({
    deaf: false,
    mute: false
  }), eK.eachConnection(tk))
}

function ra(e) {
  let {
    application: t
  } = e;
  eq.add(t.id)
}

function ro(e) {
  let {
    application: t
  } = e;
  eq.delete(t.id)
}

function rs(e) {
  let {
    kind: t,
    granted: n
  } = e;
  if (!n) switch (t) {
    case "audio":
      eX = false, eK.eachConnection(tk);
      break;
    case "video":
      tU(false)
  }
}

function rl(e) {
  eX = e.enabled, e.unmute && t$({
    mute: false,
    deaf: false
  }), eK.eachConnection(tk)
}

function rc(e) {
  let {
    enabled: t
  } = e;
  Q.Z.requestPermission(eO.Eu.CAMERA), tU(t)
}

function ru(e) {
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
  } = ne(u));
  let d = {
    desktopSource: {
      id: t,
      sourcePid: u,
      soundshareId: l,
      soundshareSession: c
    },
    quality: i
  };
  null != o && (eK.setClipsSource(null), (0, eo.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && nt(l, c), o = d;
  let f = tw(),
    _ = tx().videoHook;
  eK.setClipsSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: _,
      useGraphicsCapture: tW(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: true,
      allowScreenCaptureKit: tz(),
      videoHookStaleFrameTimeoutMs: eG,
      graphicsCaptureStaleFrameTimeoutMs: eB,
      hdrCaptureMode: f
    },
    quality: i,
    applicationName: n
  })
}

function rd(e) {
  let {
    settings: t
  } = e;
  false === t.decoupledClipsEnabled && (o = null, eK.setClipsSource(null))
}

function rf(e) {
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
    } = ne(c), null != e && nt(e, r)), tM(s), tU(s === eT.Yn.STREAM && e6, {
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
      o = e === eT.Yn.STREAM && e6,
      s = null != (i = a.qualityOptions) ? i : {
        resolution: 720,
        frameRate: 30
      };
    tU(o, {
      cameraSource: {
        videoDeviceGuid: t,
        audioDeviceGuid: n
      },
      quality: {
        resolution: s.resolution,
        frameRate: s.frameRate
      }
    })
  } else tU(e6, null)
}

function r_(e) {
  let {
    section: t
  } = e;
  return t === eb.oAB.VOICE && t2(), false
}

function rp() {
  return eK.eachConnection(tV), false
}

function rh(e) {
  let {
    enabled: t
  } = e, n = t$({
    openH264: t
  });
  eK.setH264Enabled(tH() || n.openH264), eK.eachConnection(e => {
    var t;
    return e.setSoftwareH264(null == (t = n.openH264) || t)
  })
}

function rm(e) {
  let {
    enabled: t
  } = e, n = t$({
    aecDumpEnabled: t
  });
  eK.setAecDump(n.aecDumpEnabled)
}

function rg(e) {
  let {
    state: t
  } = e, n = D.Z.isEnabled();
  if (t === eb.$7l.BACKGROUND && e6 && !n) ti = true, tU(false);
  else {
    if (t !== eb.$7l.ACTIVE || !ti) returnfalse;
    ti = false, tU(true)
  }
  returntrue
}

function rE(e) {
  eK.eachConnection(t => t.setBitRate(e.bitrate))
}

function rb() {
  if (!e6 && null == a || null != Chunk19780.Z.getRTCConnectionId()) returnfalse;
  tU(false, null)
}

function ry() {
  return !!tb && (tb = false, true)
}

function rO(e) {
  eK.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rv(e) {
  let {
    settings: t
  } = e;
  eK.applyMediaFilterSettings(t).finally(() => {
    ty = false, r.emitChange()
  })
}

function rI() {
  ty = true
}

function rT() {
  ty = false
}

function rS(e) {
  tR = e.enabled
}
class rA extends(u = Chunk442837.ZP.Store) {
  initialize() {
    tY(), tJ(), n8(), nm(), tC = {
      [Chunk65154.AN.VIDEO]: eK.supports(Chunk65154.AN.VIDEO),
      [Chunk65154.AN.DESKTOP_CAPTURE]: eK.supports(Chunk65154.AN.DESKTOP_CAPTURE),
      [Chunk65154.AN.HYBRID_VIDEO]: eK.supports(Chunk65154.AN.HYBRID_VIDEO)
    }, this.waitFor(Chunk314897.default, Chunk463395.Z, Chunk592125.Z, Chunk19780.Z, Chunk594190.ZP, Chunk751571.Z.storage, Chunk581883.Z, Chunk353926.Z, Chunk435064.Z)
  }
  supports(e) {
    return eK.supports(e)
  }
  supportsInApp(e) {
    return tC[e] || eK.supports(e)
  }
  isSupported() {
    return eK.supported()
  }
  isExperimentalEncodersSupported() {
    return eK.supports(Chunk65154.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eK.supports(Chunk65154.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return n2()
  }
  isNoiseCancellationError() {
    return tb
  }
  isAutomaticGainControlSupported() {
    return eK.supports(Chunk65154.AN.AUTOMATIC_GAIN_CONTROL)
  }
  shouldOfferManualSubsystemSelection() {
    return !tX() && (eK.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM) || eK.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM))
  }
  showBypassSystemInputProcessing() {
    return eK.supports(Chunk65154.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eK.getAudioSubsystem()
  }
  isAdvancedVoiceActivitySupported() {
    return n2()
  }
  isAecDumpSupported() {
    return eK.supports(Chunk65154.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eK.supports(Chunk65154.AN.VIDEO) && eK.supports(Chunk65154.AN.SIMULCAST)
  }
  goLiveSimulcastEnabled() {
    var e;
    let t = (null == (e = Chunk592125.Z.getChannel(tE)) ? true : module.type) === Chunk981631.d4z.GUILD_STAGE_VOICE,
      n = tH();
    return !exports && require && Chunk166884.Z.simulcastEnabled()
  }
  getAecDump() {
    return tx().aecDumpEnabled
  }
  getMediaEngine() {
    return eK
  }
  getVideoComponent() {
    return eK.Video
  }
  getCameraComponent() {
    return eK.Camera
  }
  getKrispSuppressionLevel() {
    return null != l ? l : 100
  }
  getKrispEnableStats() {
    return t_
  }
  isEnabled() {
    return eX
  }
  isMute() {
    return this.isSelfMute() || e3
  }
  isDeaf() {
    return this.isSelfDeaf() || e5
  }
  hasContext(e) {
    return null != ez[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && e4
  }
  isSelfMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isEnabled() || tx(module).mute || !Chunk751571.Z.didHavePermission(Chunk761274.Eu.AUDIO) || this.isSelfDeaf(module) || module === Chunk65154.Yn.DEFAULT && e8
  }
  shouldSkipMuteUnmuteSound() {
    return te
  }
  notifyMuteUnmuteSoundWasSkipped() {
    te = false
  }
  isHardwareMute() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(module) && Chunk463395.Z.isHardwareMute(this.getInputDeviceId())
  }
  isEnableHardwareMuteNotice() {
    return tR
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return !this.isSupported() || tx(module).deaf
  }
  isVideoEnabled() {
    return e6 && ta
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
    return eJ === module && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.STREAM;
    return eJ === exports && null != a && (null == (e = a.desktopSource) ? true : module.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return e !== ed.default.getId() && (tx(t).localMutes[e] || false)
  }
  supportsDisableLocalVideo() {
    return eK.supports(Chunk65154.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return null != (t = tx(n).disabledLocalVideos[e]) && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return null != (t = tx(n).videoToggleStateMap[e]) ? t : eb.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return t === eT.Yn.DEFAULT && tT.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return module === Chunk65154.Yn.DEFAULT && tT.size > 0
  }
  isMediaFilterSettingLoading() {
    return ty
  }
  isNativeAudioPermissionReady() {
    return tv
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return eJ
  }
  getLastAudioInputDeviceChangeTimestamp() {
    return e$
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
      n = tx(t).localPans[e];
    return null != n ? n : eU
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
      n = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
      r = tx(t).localVolumes[e];
    return null != r ? r : n
  }
  getInputVolume() {
    return tx().inputVolume
  }
  getOutputVolume() {
    return tx().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tx(module).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tx(module).modeOptions
  }
  getActiveVoiceFilter() {
    return tp
  }
  getActiveVoiceFilterAppliedAt() {
    return th
  }
  getPreviousVoiceFilter() {
    return tm
  }
  getPreviousVoiceFilterAppliedAt() {
    return tg
  }
  getMostRecentlyRequestedVoiceFilter() {
    return tx().mostRecentlyRequestedVoiceFilter
  }
  getVoiceFilterPlaybackEnabled() {
    return tx().voiceFilterPlaybackEnabled
  }
  getShortcuts() {
    let e = {};
    return p().each(ez, (t, n) => {
      let {
        mode: r,
        modeOptions: {
          shortcut: i
        }
      } = t;
      r === eb.pM4.PUSH_TO_TALK && eq.has(n) && (e[n] = i)
    }), module
  }
  getInputDeviceId() {
    return t8(e0, tx().inputDeviceId)
  }
  getOutputDeviceId() {
    return t8(e1, tx().outputDeviceId)
  }
  getVideoDeviceId() {
    return t8(e2, tx().videoDeviceId)
  }
  getInputDevices() {
    return e0
  }
  getOutputDevices() {
    return e1
  }
  getVideoDevices() {
    return e2
  }
  getEchoCancellation() {
    let e = tx();
    return Chunk463395.Z.hasEchoCancellation(module.inputDeviceId) || module.echoCancellation
  }
  getSidechainCompression() {
    return eK.supports(Chunk65154.AN.SIDECHAIN_COMPRESSION) && tx().sidechainCompression
  }
  getSidechainCompressionStrength() {
    return tx().sidechainCompressionStrength
  }
  getH265Enabled() {
    return tx().h265Enabled
  }
  getLoopback() {
    return tA.size > 0
  }
  getLoopbackReasons() {
    return tA
  }
  getNoiseSuppression() {
    let e = tx();
    return Chunk463395.Z.hasNoiseSuppression(module.inputDeviceId) || module.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = tx();
    return Chunk463395.Z.hasAutomaticGainControl(module.inputDeviceId) || module.automaticGainControl
  }
  getBypassSystemInputProcessing() {
    return tx().bypassSystemInputProcessing
  }
  getNoiseCancellation() {
    return tx().noiseCancellation
  }
  getExperimentalEncoders() {
    return tx().experimentalEncoders
  }
  getHardwareEncoding() {
    return tH()
  }
  getHardwareEncodingSetting() {
    var e;
    return null == (e = tx().hardwareEncoding) || module
  }
  getEnableSilenceWarning() {
    return tx().silenceWarning
  }
  getDebugLogging() {
    return eK.getDebugLogging()
  }
  getQoS() {
    return tx().qos
  }
  getAttenuation() {
    return tx().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return tx().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return tx().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return tq() && tx().automaticAudioSubsystem ? Chunk65154.iA.AUTOMATIC : eK.getAudioSubsystem()
  }
  getMLSSigningKey(e, t) {
    return eK.getMLSSigningKey(e, t)
  }
  getActiveInputProfile() {
    return tx().activeInputProfile
  }
  isInputProfileCustom() {
    let e = this.getActiveInputProfile();
    return null == module || module === Chunk345655._.CUSTOM
  }
  getSettings() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return tx(module)
  }
  getState() {
    return {
      settingsByContext: ez,
      inputDevices: e0,
      outputDevices: e1,
      appSupported: tC,
      krispModuleLoaded: td,
      krispVersion: s,
      krispSuppressionLevel: l,
      goLiveSource: a,
      goLiveContext: eJ
    }
  }
  getInputDetected() {
    return to
  }
  getNoInputDetectedNotice() {
    return tl
  }
  getPacketDelay() {
    return Chunk358085.isPlatformEmbedded || this.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eK.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eQ
  }
  getVideoHook() {
    return tx().videoHook
  }
  supportsVideoHook() {
    return eK.supports(Chunk65154.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = tx().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == module || module || !this.supportsHookSoundshare())
  }
  supportsExperimentalSoundshare() {
    return eK.supports(Chunk65154.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.T6)
  }
  supportsHookSoundshare() {
    return (0, Chunk358085.isWindows)() && eK.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.sA)
  }
  getUseSystemScreensharePicker() {
    let e = this.supportsSystemScreensharePicker(),
      t = tx().useSystemScreensharePicker,
      n = (0, Chunk358085.isLinux)() || (0, Chunk358085.isMac)() && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.jR);
    return module && (null != exports ? exports : require)
  }
  supportsSystemScreensharePicker() {
    return eK.supports(Chunk65154.AN.NATIVE_SCREENSHARE_PICKER)
  }
  getOpenH264() {
    return tx().openH264
  }
  getEverSpeakingWhileMuted() {
    return tt
  }
  getSpeakingWhileMuted() {
    return tn
  }
  getKrispModelOverride() {
    return c
  }
  getKrispModels() {
    return tf
  }
  getKrispVadActivationThreshold() {
    var e;
    return null != (e = tx().modeOptions.vadKrispActivationThreshold) ? module : eM
  }
  hasActiveCallKitCall() {
    return tP
  }
  setHasActiveCallKitCall(e) {
    tP = e
  }
  supportsScreenSoundshare() {
    return (0, Chunk358085.isMac)() ? eK.supports(Chunk65154.AN.SOUNDSHARE) && m().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.yG) && tz() : (0, Chunk358085.isWindows)() ? eK.supports(Chunk65154.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Chunk358085.isLinux)() && eK.supports(Chunk65154.AN.SCREEN_SOUNDSHARE)
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
    }).loadWasmModule), eK.fetchAsyncResources(module)
  }
  startDavePreload() {
    if (!tO && (tO = true, (0, Chunk358085.isWeb)())) {
      let e = {
        fetchDave: true
      };
      eK.fetchAsyncResources(module).catch(e => {
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
    let e = eK.getSupportedSecureFramesProtocolVersion(),
      t = Chunk529558.m.getCurrentConfig({
        location: "MediaEngineStore"
      });
    return 114 === module && (e = 1), exports.canSupportDaveProtocol && module >= exports.protocolVersionFloor ? module : 0
  }
  hasClipsSource() {
    return null != o
  }
  getGpuBrand() {
    return tN
  }
}

function rC(e) {
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
eA(rA, "displayName", "MediaEngineStore");
let rN = r = new rA(Chunk570140.Z, {
  VOICE_CHANNEL_SELECT: ri,
  VOICE_STATE_UPDATES: ns,
  CONNECTION_OPEN: nn,
  CONNECTION_CLOSED: ni,
  POST_CONNECTION_OPEN: na,
  RTC_CONNECTION_STATE: no,
  AUDIO_SET_TEMPORARY_SELF_MUTE: nl,
  AUDIO_TOGGLE_SELF_MUTE: nc,
  AUDIO_SET_SELF_MUTE: nu,
  AUDIO_TOGGLE_SELF_DEAF: nf,
  AUDIO_TOGGLE_LOCAL_MUTE: n_,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: np,
  AUDIO_SET_LOCAL_VOLUME: ng,
  AUDIO_SET_LOCAL_PAN: nE,
  AUDIO_SET_MODE: nb,
  AUDIO_SET_INPUT_VOLUME: ny,
  AUDIO_SET_OUTPUT_VOLUME: nO,
  AUDIO_SET_INPUT_DEVICE: nv,
  AUDIO_SET_OUTPUT_DEVICE: nI,
  AUDIO_SET_ACTIVE_INPUT_PROFILE: nS,
  AUDIO_SET_ECHO_CANCELLATION: nP,
  AUDIO_SET_SIDECHAIN_COMPRESSION: nw,
  AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nD,
  AUDIO_SET_LOOPBACK: nL,
  AUDIO_SET_NOISE_SUPPRESSION: nM,
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nU,
  AUDIO_SET_NOISE_CANCELLATION: nG,
  AUDIO_SET_KRISP_MODEL_OVERRIDE: nB,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: nH,
  AUDIO_SET_DEBUG_LOGGING: nY,
  AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nW,
  AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nZ,
  MEDIA_ENGINE_SET_VIDEO_HOOK: nK,
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nz,
  MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nq,
  AUDIO_SET_ATTENUATION: nX,
  AUDIO_SET_QOS: nQ,
  MEDIA_ENGINE_DEVICES: nC,
  AUDIO_VOLUME_CHANGE: nN,
  AUDIO_RESET: nJ,
  AUDIO_INPUT_DETECTED: n$,
  AUDIO_SET_SUBSYSTEM: rt,
  AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: re,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: rl,
  MEDIA_ENGINE_SET_VIDEO_ENABLED: rc,
  MEDIA_ENGINE_PERMISSION: rs,
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rf,
  MEDIA_ENGINE_SET_VIDEO_DEVICE: nT,
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nF,
  MEDIA_ENGINE_INTERACTION_REQUIRED: nA,
  USER_SETTINGS_MODAL_INIT: r_,
  USER_SETTINGS_MODAL_SET_SECTION: r_,
  CERTIFIED_DEVICES_SET: rp,
  RPC_APP_CONNECTED: ra,
  RPC_APP_DISCONNECTED: ro,
  OVERLAY_INITIALIZE: nr,
  MEDIA_ENGINE_SET_OPEN_H264: rh,
  MEDIA_ENGINE_SET_HARDWARE_ENCODING: nV,
  APP_STATE_UPDATE: rg,
  SET_CHANNEL_BITRATE: rE,
  SET_VAD_PERMISSION: n0,
  SET_NATIVE_PERMISSION: n1,
  SET_CHANNEL_VIDEO_QUALITY_MODE: rO,
  MEDIA_ENGINE_SET_AEC_DUMP: rm,
  CHANNEL_DELETE: rb,
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: ry,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rv,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rI,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rT,
  USER_SETTINGS_PROTO_UPDATE: nd,
  CLIPS_INIT: ru,
  CLIPS_SETTINGS_UPDATE: rd,
  MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rS,
  VOICE_FILTER_REQUEST_SWITCH: n6,
  VOICE_FILTER_LOOPBACK_TOGGLE: n5,
  VOICE_FILTER_APPLIED: n9,
  VOICE_FILTER_DOWNLOAD_FAILED: n7,
  VOICE_FILTER_APPLY_FAILED: n7
})