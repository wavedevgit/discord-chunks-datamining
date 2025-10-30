/** Chunk was on web.js **/
/** chunk id: 135670, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./415506.js"), require("./388685.js");
var Chunk47770 = require("./47770.js"),
  Chunk46973 = require("./46973.js"),
  Chunk65154 = require("./65154.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  return null
}

function l(e) {
  return null
}
class c extends Chunk47770.Z {
  destroy() {
    this.emit(Chunk46973.aB.Destroy), this.removeAllListeners()
  }
  interact() {}
  supported() {
    return __OVERLAY__
  }
  supports(e) {
    return e === a.AN.AUTO_ENABLE && __OVERLAY__
  }
  connect(e, t, n) {
    throw Error("NOT_IMPLEMENTED")
  }
  eachConnection() {}
  enable() {
    return Promise.resolve()
  }
  setInputVolume(e) {}
  setOutputVolume(e) {}
  getAudioInputDevices() {
    return Promise.resolve([])
  }
  setAudioInputDevice(e) {}
  getAudioOutputDevices() {
    return Promise.resolve([])
  }
  setAudioOutputDevice(e) {}
  getVideoInputDevices() {
    return Promise.resolve([])
  }
  setVideoInputDevice(e) {}
  getVideoInputDeviceId() {
    return Chunk65154.Av
  }
  setAsyncVideoInputDeviceInit(e) {}
  getSupportedVideoCodecs(e) {
    e([])
  }
  getCodecCapabilities(e) {
    e("")
  }
  getCodecSurvey() {
    return Promise.reject(Error("getCodecSurvey is not implemented for MediaEngineDummy"))
  }
  getAudioSubsystem() {
    return Chunk65154.iA.STANDARD
  }
  getAudioLayer() {
    return ""
  }
  setGoLiveSource(e, t) {}
  setClipsSource(e) {}
  setClipsQualitySettings(e, t, n) {
    returnfalse
  }
  setDesktopSource(e) {
    arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.Yn.DEFAULT
  }
  setSoundshareSource(e, t, n) {}
  getDesktopSource() {
    return Promise.reject(Error("NO_STREAM"))
  }
  getScreenPreviews(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  getWindowPreviews(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  setClipBufferLength(e) {}
  setClipsMLPipelineEnabled(e) {}
  setClipsMLPipelineTypeEnabled(e, t) {}
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
  saveScreenshot(e, t, n, r, i) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  setAudioSubsystem(e) {}
  queueAudioSubsystem(e) {}
  setOffloadAdmControls(e) {}
  getDebugLogging() {
    returnfalse
  }
  setDebugLogging(e) {}
  writeAudioDebugState() {
    return Promise.reject(Error("Audio debug state is not supported."))
  }
  setLoopback(e, t) {}
  getLoopback() {
    returnfalse
  }
  setH264Enabled(e) {}
  setAv1Enabled(e) {}
  setH265Enabled(e) {}
  setExperimentFlag(e, t) {}
  startAecDump() {}
  stopAecDump() {}
  setAecDump(e) {}
  startRecordingRawSamples(e) {}
  stopRecordingRawSamples() {}
  createReplayConnection(e, t) {
    throw Error("Connection replay is not supported.")
  }
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
    return Promise.reject(Error("NOT_IMPLEMENTED"))
  }
  setSidechainCompression(e) {}
  setSidechainCompressionStrength(e) {}
  getSystemMicrophoneMode() {
    return Promise.resolve("")
  }
  showSystemCaptureConfigurationUI(e) {}
  setNativeDesktopVideoSourcePickerActive(e) {}
  presentNativeScreenSharePicker(e) {}
  releaseNativeDesktopVideoSourcePickerStream() {}
  setMaybePreprocessMute(e) {}
  setAudioInputBypassSystemProcessing(e) {}
  fetchAsyncResources(e) {
    return Promise.resolve()
  }
  getNoiseCancellationStats() {
    return Promise.reject(Error("Dummy noise cancellation stats not supported"))
  }
  setNoiseCancellationEnableStats(e) {}
  constructor(...e) {
    super(...e), o(this, "Video", s), o(this, "Camera", l)
  }
}