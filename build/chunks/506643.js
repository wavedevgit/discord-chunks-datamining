/** Chunk was on web.js **/
/** chunk id: 506643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./747238.js"), require("./896048.js"), require("./65821.js");
var Chunk143236 = require("./143236.js"),
  Chunk118356 = require("./118356.js"),
  Chunk396574 = require("./396574.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new Chunk118356.Vy("PeerConnection");
class l extends Chunk143236.EventEmitter {
  setBitRate(e) {
    this.bitrate !== e && (this.bitrate = e, this.negotiationNeeded())
  }
  close() {
    o.info("Close RTCPeerConnection"), "closed" !== this.signalingState && this.pc.close(), this.removeAllListeners()
  }
  get peerConnectionState() {
    return this.pc.connectionState
  }
  get iceGatheringState() {
    return this.pc.iceGatheringState
  }
  get iceConnectionState() {
    return this.pc.iceConnectionState
  }
  get signalingState() {
    return this.pc.signalingState
  }
  get connected() {
    return null != this.pc && /connected|completed/.test(this.pc.iceConnectionState)
  }
  setStream(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = this.pc,
      r = "closed" === this.iceConnectionState,
      i = false;
    null == this.stream || r || (this.senders.forEach(e => n.removeTrack(e)), i = true), this.stream = e, this.senders = [], null == e || r || (this.senders = [...e.getAudioTracks().map(t => n.addTrack(t, e)), ...e.getVideoTracks().map(t => n.addTrack(t, e))], i = true), i && !t && this.negotiationNeeded()
  }
  createOffer() {
    let e = this.pc;
    return e.createOffer(this.makeOfferAnswerOptions()).then(t => e.setLocalDescription(this.mungeLocalDescription(t))).then(() => {
      let t = e.localDescription;
      if (null == t) throw Error("localDescription is null");
      return this.emit("offer", t), t
    }).catch(t => {
      if ("have-remote-offer" === e.signalingState) return o.error(t), this.createOffer();
      throw t
    })
  }
  createAnswer() {
    let e = this.pc;
    return e.createAnswer(this.makeOfferAnswerOptions()).then(t => e.setLocalDescription(this.mungeLocalDescription(t))).then(() => {
      let t = e.localDescription;
      if (null == t) throw Error("localDescription is null");
      return this.emit("answer", t), t
    }).catch(t => {
      throw o.warn("PeerConnection#createAnswer: Attempted to set local description in state: ".concat(e.signalingState)), t
    })
  }
  negotiationNeeded() {
    if (this.negotiating) {
      this._negotiationNeeded = true;
      return
    }
    this.negotiating = true, this._negotiationNeeded = false, this.createOffer()
  }
  setRemoteDescription(e) {
    return this.pc.setRemoteDescription(e)
  }
  getStats() {
    return this.pc.getStats()
  }
  makeOfferAnswerOptions() {
    return {
      offerToReceiveAudio: true,
      offerToReceiveVideo: a.g7,
      iceRestart: false
    }
  }
  mungeLocalDescription(e) {
    let t = e.sdp.split("\n");
    for (let e = 0; e < t.length; e++) {
      let n = t[e];
      if (/^a=mid:/.test(n)) {
        null != this.bitrate && t.splice(e + 1, 0, "b=AS:".concat(Math.floor(this.bitrate / 1e3)));
        break
      }
    }
    return e.sdp = t.join("\n"), e
  }
  emitTrack(e, t) {
    /^default/.test(t.id) || (t.onended = () => {
      this.emit("removetrack", e, t)
    }, this.emit("addtrack", e, t))
  }
  constructor(e) {
    super(), s(this, "bitrate", true), s(this, "pc", true), s(this, "stream", null), s(this, "senders", []), s(this, "negotiating", false), s(this, "_negotiationNeeded", false), s(this, "handlePeerConnectionStateChange", () => {
      let e = this.peerConnectionState;
      o.info("peerConnectionState =>", e), "connecting" === e ? "connected" === this.iceConnectionState ? this.emit(e) : this.emit(this.iceConnectionState) : this.emit(e)
    }), s(this, "handleIceConnectionStateChange", () => {
      let e = this.iceConnectionState;
      o.info("iceConnectionState =>", e), "completed" === e && (e = "connected"), this.emit(e)
    }), s(this, "handleSignalingStateChange", () => {
      o.info("signalingState => ".concat(this.signalingState, ", negotiation needed: ").concat(this._negotiationNeeded.toString())), "stable" === this.signalingState && (this.negotiating = false, this._negotiationNeeded && this.negotiationNeeded())
    }), s(this, "handleIceGatheringStateChange", () => {
      o.info("iceGatheringState =>", this.iceGatheringState)
    }), s(this, "handleTrack", e => {
      this.emitTrack(e.streams[0].id, e.track)
    }), this.bitrate = e;
    const t = this.pc = new RTCPeerConnection({
      sdpSemantics: "plan-b"
    });
    a.LU ? (t.onconnectionstatechange = this.handlePeerConnectionStateChange, t.oniceconnectionstatechange = this.handlePeerConnectionStateChange) : t.oniceconnectionstatechange = this.handleIceConnectionStateChange, t.onsignalingstatechange = this.handleSignalingStateChange, t.onicegatheringstatechange = this.handleIceGatheringStateChange, t.ontrack = this.handleTrack.bind(this), o.info("Constructed RTCPeerConnection")
  }
}