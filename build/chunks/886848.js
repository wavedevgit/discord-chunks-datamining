/** Chunk was on web.js **/
/** chunk id: 886848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => s,
  Z: () => l
});
var Chunk47770 = require("./47770.js"),
  Chunk68721 = require("./68721.js"),
  Chunk591218 = require("./591218.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = function(e) {
  return e.Stream = "stream", e.Video = "video", e.Mute = "mute", e.VoiceActivity = "voiceactivity", e.DesktopSourceEnd = "desktopsourceend", e.Speaking = "speaking", e.AudioPermission = "audio-permission", e.VideoPermission = "video-permission", e.AddVideoTrack = "add-video-track", e
}({});
class l extends Chunk47770.Z {
  destroy() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    this.removeAllListeners(), this.destroyStreams(module)
  }
  destroyStreams() {
    var e, t;
    let n = arguments.length > 0 && true !== arguments[0] && arguments[0];
    this.audio.destroy(), this.video.destroy(), require ? null == (e = this.desktop) || module.reuse() : null == (t = this.desktop) || exports.destroy()
  }
  setDesktop(e) {
    this.destroyStreams(), null == e || e.addListener("desktopsourceend", this.handleDesktopSourceEnd), null == e || e.addListener("speaking", this.handleSpeaking), this.desktop = e, this.mergeStreams()
  }
  reset() {
    var e;
    this.audio.reset(), null == (e = this.desktop) || module.reset()
  }
  getVideoStream() {
    return null != this.desktop ? this.desktop.stream : this.video.stream
  }
  getVideoStreamId() {
    return null != this.desktop ? this.desktop.getStreamId() : this.video.getStreamId()
  }
  enableAudioInput() {
    this.audio.enable()
  }
  setAudioMode(e, t) {
    this.audio.setMode(e, t)
  }
  setMute(e) {
    this.audio.mute = e, this.emit("mute", e)
  }
  setEchoCancellation(e) {
    this.audio.echoCancellation = e
  }
  setNoiseSuppression(e) {
    this.audio.noiseSuppression = e
  }
  setNoiseCancellation(e) {
    this.audio.noiseCancellation = e
  }
  getNoiseCancellation() {
    return this.audio.noiseCancellation
  }
  setAutomaticGainControl(e) {
    this.audio.automaticGainControl = e.enabled
  }
  setPTTActive(e) {
    this.audio.setPTTActive(e)
  }
  setAudioSource(e) {
    this.audio.setSource(e)
  }
  setVideoSource(e) {
    this.video.setSource(e)
  }
  mute() {
    return this.audio.mute
  }
  resumeAudio() {
    this.audio.resume()
  }
  getAudioState() {
    return this.audio.state
  }
  hasDesktopSource() {
    return null != this.desktop
  }
  constructor(e) {
    super(), o(this, "audio", true), o(this, "video", new a.Z), o(this, "desktop", null), o(this, "stream", true), o(this, "mergeStreams", () => {
      var e, t, n;
      let r = new MediaStream;
      return null != this.desktop ? (null == (e = this.desktop.stream) || e.getTracks().forEach(e => r.addTrack(e)), this.desktop.refreshSpeaking()) : (null == (t = this.audio.stream) || t.getAudioTracks().forEach(e => r.addTrack(e)), null == (n = this.video.stream) || n.getVideoTracks().forEach(e => r.addTrack(e))), this.stream = r, this.emit("stream", r), this.emit("video", this.getVideoStreamId()), r
    }), o(this, "handleVoiceActivity", e => {
      this.emit("voiceactivity", e)
    }), o(this, "handleDesktopSourceEnd", () => {
      this.emit("desktopsourceend")
    }), o(this, "handleSpeaking", e => {
      this.emit("speaking", e)
    }), o(this, "handleAudioPermission", e => {
      this.emit("audio-permission", e)
    }), o(this, "handleVideoPermission", e => {
      this.emit("video-permission", e)
    }), this.audio = new i.Z(e), this.audio.addListener("voiceactivity", this.handleVoiceActivity), this.audio.addListener("speaking", this.handleSpeaking), this.audio.addListener("stream", this.mergeStreams), this.audio.addListener("permission", this.handleAudioPermission), this.video.addListener("stream", this.mergeStreams), this.video.addListener("permission", this.handleVideoPermission), this.video.addListener("add-video-track", e => this.emit("add-video-track", e))
  }
}