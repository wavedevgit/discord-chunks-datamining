/** Chunk was on web.js **/
/** chunk id: 961304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => u,
  Z: () => d
});
var Chunk47770 = require("./47770.js"),
  Chunk579092 = require("./579092.js"),
  Chunk740197 = require("./740197.js"),
  Chunk376398 = require("./376398.js"),
  Chunk65154 = require("./65154.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Chunk579092.Yd("Output");
var u = function(e) {
  return e.InteractionRequired = "interactionrequired", e.Speaking = "speaking", e.Video = "video", e
}({});
class d extends Chunk47770.Z {
  play() {
    var e;
    null == (e = this.audioElement) || module.play()
  }
  destroy() {
    var e;
    null == (e = this.audioElement) || module.pause(), null != this.videoStreamId && (0, Chunk376398.jC)(this.videoStreamId), null != this.streamSourceNode && (this.streamSourceNode.disconnect(), this.streamSourceNode = null), null != this.levelNode && (this.levelNode.disconnect(), this.levelNode.port.postMessage("close"), this.levelNode = null), this.setSpeakingFlags(Chunk65154.Dg.NONE), this.removeAllListeners()
  }
  addTrack(e) {
    if (this.stream.getTracks().includes(e)) return this.stream.getTracks().length;
    if (this.stream.addTrack(e), null == this.audioElement) {
      let e = document.createElement("audio");
      e.srcObject = this.stream;
      let t = e.play();
      null != t && t.catch(() => this.emit("interactionrequired", true)), this.audioElement = e, this.updateAudioElement()
    }
    if (null == this.levelNode && this.stream.getAudioTracks().length > 0) {
      this.streamSourceNode = this.audioContext.createMediaStreamSource(this.stream);
      try {
        this.levelNode = new AudioWorkletNode(this.audioContext, "level-processor"), this.levelNode.port.onmessage = e => {
          this.emit("speaking", e.data)
        }, null != this.streamSourceNode && this.streamSourceNode.connect(this.levelNode)
      } catch (e) {
        c.warn("Output#Failed to setup speaking indicator: ".concat(e))
      }
    }
    return "video" === e.kind && (null != this.videoStreamId && (0, a.jC)(this.videoStreamId), this.stream.getVideoTracks().forEach(t => {
      e !== t && (t.discordIsTearingDown = true, this.stream.removeTrack(t))
    }), this.videoStreamId = (0, a.N7)(this.stream), this.emit("video", this.videoStreamId)), "audio" === e.kind && this.stream.getAudioTracks().forEach(t => {
      e !== t && (t.discordIsTearingDown = true, this.stream.removeTrack(t))
    }), this.stream.getTracks().length
  }
  removeTrack(e) {
    return this.stream.removeTrack(e), "video" === e.kind && (null != this.videoStreamId && (0, a.jC)(this.videoStreamId), this.emit("video", null)), this.stream.getTracks().length
  }
  setSinkId(e) {
    this.sinkId = e, this.updateAudioElement()
  }
  get mute() {
    return this._mute
  }
  set mute(e) {
    this._mute = e || false, this.updateAudioElement()
  }
  get priority() {
    return (this._speakingFlags & Chunk65154.Dg.PRIORITY) === Chunk65154.Dg.PRIORITY
  }
  get volume() {
    return this._volume
  }
  set volume(e) {
    this._volume = Math.max(0, Math.min(Math.round(e), s.Qx)), this.updateAudioElement()
  }
  get speakingFlags() {
    return this._speakingFlags
  }
  setSpeakingFlags(e) {
    this._speakingFlags !== e && (this._speakingFlags = e, this.updateAudioElement())
  }
  updateAudioElement() {
    let e = this.audioElement;
    if (null != module) {
      module.muted = this._mute, module.volume = this._volume / 100;
      let t = this.sinkId;
      null != exports && Chunk740197.ZA && module.setSinkId(exports)
    }
  }
  constructor(e, t) {
    super(), l(this, "id", true), l(this, "_speakingFlags", s.Dg.NONE), l(this, "_mute", false), l(this, "_volume", s.Qx), l(this, "sinkId", null), l(this, "audioElement", null), l(this, "stream", new MediaStream), l(this, "videoStreamId", null), l(this, "levelNode", null), l(this, "streamSourceNode", null), l(this, "audioContext", true), this.id = e, this.audioContext = t
  }
}