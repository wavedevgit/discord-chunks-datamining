/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => A
}), n(773603), n(411104), n(47120), n(600040);
var r = n(512722),
  i = n.n(r),
  o = n(264344),
  a = n.n(o),
  s = n(259443),
  l = n(47770),
  c = n(174498),
  u = n.n(c),
  d = n(839548),
  f = n(46973),
  p = n(734298),
  _ = n(970838),
  h = n(68721),
  m = n(997653),
  g = n(384136),
  E = n(740197),
  v = n(548820),
  b = n(579237),
  y = n(582168),
  O = n(825040),
  S = n(65154),
  I = n(436620);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = new s.Yd("MediaEngineWebRTC");
class A extends l.Z {
  destroy() {
    null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null), this.eachConnection(e => e.destroy()), this.emit(f.aB.Destroy), this.removeAllListeners()
  }
  interact() {
    this.interacted || (document.createElement("audio").play(), this.interacted = !0), this.eachConnection(e => e.interact())
  }
  static supported() {
    return !__OVERLAY__ && (I.fi && null != window.AudioContext && null != window.RTCPeerConnection ? (n(250678), !0) : (N.info("WebRTC is not supported on", a().name, a().version), !1))
  }
  supported() {
    return !0
  }
  supports(e) {
    switch (e) {
      case S.AN.AUDIO_INPUT_DEVICE:
        return E.S5;
      case S.AN.AUDIO_OUTPUT_DEVICE:
        return E.ZA;
      case S.AN.VIDEO:
        return I.U8;
      case S.AN.DESKTOP_CAPTURE:
        var t;
        return (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.getDisplayMedia) != null;
      case S.AN.VOICE_PROCESSING:
        return "Chrome" === a().name;
      case S.AN.NATIVE_PING:
      case S.AN.DIAGNOSTICS:
        return I.Fo;
      case S.AN.DESKTOP_CAPTURE_APPLICATIONS:
      case S.AN.LOOPBACK:
      case S.AN.NOISE_SUPPRESSION:
      case S.AN.AUTOMATIC_GAIN_CONTROL:
        return "Safari" !== a().name;
      case S.AN.NOISE_CANCELLATION:
        return u()();
      case S.AN.QOS:
      case S.AN.ATTENUATION:
      case S.AN.AUTOMATIC_VAD:
      case S.AN.LEGACY_AUDIO_SUBSYSTEM:
      case S.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
      case S.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
      case S.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
      case S.AN.DEBUG_LOGGING:
      case S.AN.VOICE_PANNING:
      case S.AN.AUTO_ENABLE:
      case S.AN.DESKTOP_CAPTURE_FORMAT:
      case S.AN.VIDEO_HOOK:
      case S.AN.OPEN_H264:
      case S.AN.AEC_DUMP:
      case S.AN.DISABLE_VIDEO:
      case S.AN.CONNECTION_REPLAY:
      case S.AN.SIMULCAST:
      case S.AN.SCREEN_CAPTURE_KIT:
      default:
        return !1
    }
  }
  getAudioContext() {
    return null == this._audioContext && (this._audioContext = new AudioContext), this._audioContext
  }
  connect(e, t, n) {
    let {
      ssrc: r,
      address: i,
      port: o,
      modes: a,
      streamUserId: s,
      streamParameters: l
    } = n, c = (0, m.Q)(e, t, this.getAudioContext(), l);
    return c.streamUserId = s, c.setOutputVolume(this.outputVolume), c.setSinkId(this.sinkId), c.once(d.S.Destroy, e => this.connections.delete(e)), c.on(d.S.Silence, e => this.emit(f.aB.Silence, e)), c.on(d.S.DesktopSourceEnd, this.handleDesktopSourceEnd), c.on(d.S.AudioPermission, this.handleAudioPermission), c.on(d.S.VideoPermission, this.handleVideoPermission), this.interacted && c.interact(), e === S.Yn.DEFAULT && (c.setAudioSource(this.sourceId), this.enabled && c.input.enableAudioInput()), this.connections.add(c), this.emit(f.aB.Connection, c), c
  }
  findConnection(e) {
    return Array.from(this.connections).find(t => null == e || t.context === e)
  }
  eachConnection(e, t) {
    this.connections.forEach(n => {
      (null == t || n.context === t) && e(n)
    })
  }
  enable() {
    return null == this.enablePromise && (this.enablePromise = this._enable().finally(() => {
      this.enablePromise = null
    })), this.enablePromise
  }
  async _enable() {
    if (this.enabled) return;
    await this.getAudioContext().audioWorklet.addModule(v);
    let e = new h.Z(this.getAudioContext());
    e.on("permission", this.handleAudioPermission);
    try {
      var t;
      await e.enable(), "Firefox" === a().name && await this.handleDeviceChange(), this.enabled = !0, this.eachConnection(e => e.input.enableAudioInput(), S.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.enable()
    } finally {
      e.destroy()
    }
  }
  setInputVolume(e) {}
  setOutputVolume(e) {
    this.outputVolume = e, this.connections.forEach(t => t.setOutputVolume(e))
  }
  getAudioInputDevices() {
    return (0, E.Hg)()
  }
  setAudioInputDevice(e) {
    var t, n;
    this.sourceId = e, this.eachConnection(t => t.setAudioSource(e), S.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.setSource(e), null === (n = this.loopback) || void 0 === n || n.setAudioSource(e)
  }
  getAudioOutputDevices() {
    return (0, E.HS)()
  }
  setAudioOutputDevice(e) {
    var t;
    this.sinkId = e, this.connections.forEach(t => t.setSinkId(e)), null === (t = this.loopback) || void 0 === t || t.setAudioSink(e)
  }
  getVideoInputDevices() {
    return (0, E.l0)()
  }
  setVideoInputDevice(e) {
    this.eachConnection(t => t.setVideoSource(e), S.Yn.DEFAULT)
  }
  getSupportedVideoCodecs(e) {
    e([])
  }
  getCodecCapabilities(e) {
    e("")
  }
  async getDesktopSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = await g.Z.get(e, t);
    return this.pendingDesktopInputs[n.id] = n, n.id
  }
  getScreenPreviews(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  getWindowPreviews(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  setClipBufferLength(e) {}
  saveClip(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  saveClipForUser(e, t, n) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  updateClipMetadata(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  exportClip(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  setGoLiveSource(e, t) {
    if (null == e) this.eachConnection(e => e.setDesktopInput(null), t);
    else if (null != e.desktopDescription && null != this.findConnection(t)) {
      i()(t === S.Yn.STREAM, "Go live context is not STREAM");
      let n = !1,
        r = this.pendingDesktopInputs[e.desktopDescription.id];
      null != r && this.eachConnection(e => {
        e.streamUserId === e.userId && (n = !0, e.setDesktopInput(r))
      }, t), n && delete this.pendingDesktopInputs[e.desktopDescription.id]
    }
  }
  setClipsSource(e) {}
  setClipsQualitySettings(e, t, n) {
    return !1
  }
  setSoundshareSource(e, t, n) {}
  setAudioSubsystem(e) {}
  queueAudioSubsystem(e) {}
  getAudioSubsystem() {
    return S.iA.STANDARD
  }
  getAudioLayer() {
    return ""
  }
  getDebugLogging() {
    return !1
  }
  setDebugLogging(e) {}
  writeAudioDebugState() {
    return Promise.reject(Error("Audio debug state is not supported."))
  }
  setExperimentalAdm(e) {}
  setLoopback(e, t) {
    e && null == this.loopback ? (this.enable(), this.loopback = new b.Z(this.getAudioContext(), this.sourceId, this.sinkId), this.loopback.setNoiseCancellation(t.noiseCancellation)) : e || null == this.loopback || (this.loopback.stop(), this.loopback = null)
  }
  getLoopback() {
    return null != this.loopback
  }
  setH264Enabled(e) {}
  setAv1Enabled(e) {}
  setH265Enabled(e) {}
  getCodecSurvey() {
    return Promise.reject(Error("getCodecSurvey is not implemented on MediaEngine of browsers."))
  }
  startAecDump() {}
  stopAecDump() {}
  setAecDump(e) {}
  createReplayConnection(e, t) {
    throw Error("Connection replay is not supported.")
  }
  setUseDirectVideo(e) {}
  setOnVideoContainerResized(e) {}
  setMaxSyncDelayOverride(e) {}
  rankRtcRegions(e) {
    return Promise.reject(Error("RTC region latency test is not supported."))
  }
  applyMediaFilterSettings(e) {
    return Promise.resolve()
  }
  startLocalAudioRecording() {
    return Promise.reject(Error("startLocalAudioRecording is not supported."))
  }
  stopLocalAudioRecording(e) {}
  setHasFullbandPerformance(e) {}
  getSupportedSecureFramesProtocolVersion() {
    return 0
  }
  getSupportedBandwidthEstimationExperiments(e) {
    e([])
  }
  getMLSSigningKey(e, t) {
    return Promise.reject(Error("getMLSSigningKey is not supported."))
  }
  setSidechainCompression(e) {}
  setSidechainCompressionStrength(e) {}
  setNativeDesktopVideoSourcePickerActive(e) {}
  presentNativeScreenSharePicker(e) {}
  releaseNativeDesktopVideoSourcePickerStream() {}
  constructor() {
    super(), T(this, "Video", O.Z), T(this, "Camera", y.Z), T(this, "_audioContext", null), T(this, "outputVolume", S.Qx), T(this, "sourceId", S.w5), T(this, "sinkId", S.w5), T(this, "enabled", !1), T(this, "connections", new Set), T(this, "interacted", !1), T(this, "loopback", null), T(this, "voiceActivityInput", null), T(this, "pendingDesktopInputs", {}), T(this, "enablePromise", null), T(this, "handleActiveSinksChange", (e, t) => {
      this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t, "MediaEngineWebRTC.handleActiveSinksChange"))
    }), T(this, "handleNewListener", e => {
      switch (e) {
        case f.aB.DeviceChange:
          null != navigator.mediaDevices && null == navigator.mediaDevices.ondevicechange && (navigator.mediaDevices.ondevicechange = () => {
            this.handleDeviceChange()
          }, this.handleDeviceChange());
          break;
        case f.aB.VoiceActivity:
          null == this.voiceActivityInput && (this.voiceActivityInput = new h.Z(this.getAudioContext()), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable())
      }
    }), T(this, "handleRemoveListener", e => {
      switch (e) {
        case f.aB.DeviceChange:
          var t;
          (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.ondevicechange) != null && 0 === this.listenerCount(f.aB.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
          break;
        case f.aB.VoiceActivity:
          null != this.voiceActivityInput && 0 === this.listenerCount(f.aB.VoiceActivity) && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null)
      }
    }), T(this, "handleDeviceChange", () => (0, E.PW)().then(e => {
      let [t, n, r] = e;
      return this.emit(f.aB.DeviceChange, t, n, r)
    })), T(this, "handleVoiceActivity", e => {
      this.emit(f.aB.VoiceActivity, e, 0)
    }), T(this, "handleDesktopSourceEnd", () => {
      this.emit(f.aB.DesktopSourceEnd)
    }), T(this, "handleAudioPermission", e => {
      this.emit(f.aB.AudioPermission, e)
    }), T(this, "handleVideoPermission", e => {
      this.emit(f.aB.VideoPermission, e)
    }), this.on("newListener", this.handleNewListener), this.on("removeListener", this.handleRemoveListener), (0, _.px)(this.handleActiveSinksChange), (0, p.Z)(this)
  }
}