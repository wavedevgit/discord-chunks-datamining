/** Chunk was on web.js **/
/** chunk id: 126208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./747238.js");
var Chunk143236 = require("./143236.js"),
  Chunk647457 = require("./647457.js"),
  Chunk228272 = require("./228272.js"),
  Chunk731854 = require("./731854.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {
  voiceActivityDetection: true,
  offerToReceiveAudio: true,
  offerToReceiveVideo: false,
  iceRestart: false
};
class c extends Chunk143236.EventEmitter {
  stop() {
    for (let e of (this.pc1.close(), this.pc2.close(), this.input.destroy(), Object.keys(this.outputs))) this.destroyOutput(e)
  }
  setAudioSource(e) {
    this.input.setSource(e)
  }
  setAudioSink(e) {
    for (let t of (this.sinkId = e, Object.keys(this.outputs))) this.outputs[t].setSinkId(e)
  }
  setNoiseCancellation(e) {
    this.input.noiseCancellation = e
  }
  createOutput(e, t) {
    let n = this.outputs[e];
    null == n && ((n = new a.A(this.userId, this.audioContext)).mute = false, n.volume = 100, n.setSpeakingFlags(o.ME.VOICE), n.setSinkId(this.sinkId), this.outputs[e] = n), n.addTrack(t), n.play()
  }
  destroyOutput(e, t) {
    let n = this.outputs[e];
    null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e])
  }
  handshake() {
    let e = e => {
      let t = e.sdp.split("\n");
      for (let e = 0; e < t.length; e++) {
        let n = t[e];
        if (/^a=mid:/.test(n)) break
      }
      return e.sdp = t.join("\n"), e
    };
    this.pc1.createOffer(l).then(t => {
      this.pc1.setLocalDescription(e(t)).then(() => {
        this.pc2.setRemoteDescription(t).then(() => {
          this.pc2.createAnswer().then(e => {
            this.pc2.setLocalDescription(e).then(() => {
              this.pc1.setRemoteDescription(e)
            })
          })
        })
      })
    })
  }
  constructor(e, t, n, r = "") {
    super(), s(this, "userId", true), s(this, "sinkId", true), s(this, "input", true), s(this, "pc1", true), s(this, "pc2", true), s(this, "senders", []), s(this, "outputs", {}), s(this, "audioContext", true), s(this, "handleStream", () => {
      let e = this.input.getDelayedStream();
      this.senders.forEach(e => this.pc1.removeTrack(e)), this.senders = [...e.getAudioTracks().map(t => this.pc1.addTrack(t, e))], this.handshake()
    }), s(this, "handleTrack", e => {
      e.streams[0].getTracks().forEach(e => {
        this.createOutput(e.id, e), e.onmute = () => {
          this.destroyOutput(e.id, e)
        }
      })
    }), this.userId = r, this.sinkId = n, this.pc1 = new RTCPeerConnection, this.pc1.onicecandidate = e => {
      null != e.candidate && this.pc2.addIceCandidate(e.candidate)
    }, this.pc2 = new RTCPeerConnection, this.pc2.onicecandidate = e => {
      null != e.candidate && this.pc1.addIceCandidate(e.candidate)
    }, this.pc2.ontrack = this.handleTrack, this.input = new i.A(e), this.input.setSource(t), this.input.on("stream", this.handleStream), this.input.enable(), this.audioContext = e
  }
}