/** Chunk was on web.js **/
/** chunk id: 199857, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./539854.js"), require("./415506.js"), require("./388685.js"), require("./49124.js"), require("./290780.js"), require("./35282.js");
var r, Chunk74514 = require("./74514.js"),
  a = require.n(Chunk74514),
  Chunk117806 = require("./117806.js"),
  s = require.n(Chunk117806),
  Chunk264344 = require("./264344.js"),
  c = require.n(Chunk264344),
  Chunk579092 = require("./579092.js"),
  Chunk46973 = require("./46973.js"),
  Chunk912095 = require("./912095.js"),
  Chunk405475 = require("./405475.js"),
  Chunk886848 = require("./886848.js"),
  Chunk586021 = require("./586021.js"),
  Chunk649318 = require("./649318.js"),
  Chunk65154 = require("./65154.js"),
  Chunk436620 = require("./436620.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 10,
  O = 10,
  v = null == (r = c().name) ? true : r.toLowerCase().includes("firefox");

function I(e, t) {
  e.sender.replaceTrack(t), e.direction = null != t ? "sendrecv" : "recvonly"
}
class S extends Chunk912095.Z {
  destroy() {
    super.destroy(), "closed" !== this.signalingState && this.pc.close()
  }
  setCodecs(e, t, n) {
    var r, i, a, o;
    let s;
    (this.audioCodec !== e || this.videoCodec !== t) && (s = this.codecs.find(t => t.name === e), this.audioCodec = e, this.audioPayloadType = null != (i = null == s ? true : s.payloadType) ? i : 0, s = this.codecs.find(e => e.name === t), this.videoCodec = t, this.videoPayloadType = null != (a = null == s ? true : s.payloadType) ? a : 0, this.rtxPayloadType = null != (o = null == s ? true : s.rtxPayloadType) ? o : 0, null == (r = this.daveSessionManager) || r.updateLocalUserCodecs(e, t), this.logger.info("Renegotiating: Codecs changed"), this.handleNegotiationNeeded())
  }
  setStream(e) {
    let t = "closed" === this.iceConnectionState;
    null != e && !t && (I(this.audioTransceiver, e.getAudioTracks()[0]), this.videoSupported && I(this.videoTransceiver, e.getVideoTracks()[0])), this.logger.info("Renegotiating: Streams changed"), this.handleNegotiationNeeded()
  }
  createUser(e, t, n) {
    var r, i, a;
    if (null == (r = this.daveSessionManager) || r.createUser(e), 0 === t) return void this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
    this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null != (i = null == n ? true : n.join(",")) ? i : 0));
    let o = false,
      s = this.users.get(e);
    if (null == s && (s = {}), s.audioSSRC !== t) {
      s.audioSSRC = t, o = true, this.unassignedStreams.audio.push({
        cname: e,
        ssrc: t
      });
      let n = this.inactiveTransceivers.audio.length,
        r = y + this.unassignedStreams.audio.length - n;
      this.addTransceivers("audio", "recvonly", r)
    }
    if (this.videoSupported && true !== n && (!v || true === s.videoSSRC)) {
      let t = null != n && n.length > 0 ? n[0] : 0;
      if (t > 0) {
        if (s.videoSSRC !== t) {
          s.videoSSRC = t, o = true, this.unassignedStreams.video.push({
            cname: e,
            ssrc: t
          });
          let n = this.inactiveTransceivers.video.length,
            r = O + this.unassignedStreams.video.length - n;
          this.addTransceivers("video", "recvonly", r)
        }
      } else null != s.videoSSRC && (s.videoSSRC = true, o = true)
    }
    if (o) {
      this.users.set(e, s), t > 0 && this.userIdsBySsrc.set(t, e);
      let r = null != n && n.length > 0 ? n[0] : 0;
      r > 0 && this.userIdsBySsrc.set(r, e), null == (a = this.daveSessionManager) || a.updateSsrcs(e, t, null != n ? n : []), this.logger.info("Renegotiating: User joined"), this.handleNegotiationNeeded()
    }
  }
  destroyUser(e) {
    var t;
    null == (t = this.daveSessionManager) || t.destroyUser(e);
    let n = this.users.get(e);
    if (null != n) {
      let {
        audioSSRC: t,
        videoSSRC: r
      } = n;
      this.users.delete(e), null != t && this.userIdsBySsrc.delete(t), null != r && this.userIdsBySsrc.delete(r), this.logger.info("Renegotiating: User left: ".concat(e)), this.handleNegotiationNeeded()
    }
  }
  setBitRate(e) {
    this.voiceBitrate !== e && (super.setBitRate(e), this.setAudioEncoderParameters([{
      parameter: f.p.AUDIO_BITRATE,
      value: e
    }]))
  }
  setRemoteAudioHistory(e) {
    this.enableAudioNack = e > 0
  }
  setSDP(e) {
    if (!(0, m.$6)(e)) throw Error("Incorrect SDP received from rtc-worker: ".concat(e));
    if ("have-local-offer" !== this.signalingState) throw Error("Invalid signaling state ".concat(this.signalingState));
    let {
      outboundStreams: t
    } = this.parseLocalDescription();
    this.sdp = e, this.setRemoteAnswer(t, [], [], new Map)
  }
  prepareSecureFramesTransition(e, t, n) {
    var r;
    null == (r = this.daveSessionManager) || r.prepareSecureFramesTransition(e, t, n)
  }
  prepareSecureFramesEpoch(e, t, n) {
    var r;
    null == (r = this.daveSessionManager) || r.prepareSecureFramesEpoch(e, t, n)
  }
  executeSecureFramesTransition(e) {
    var t;
    null == (t = this.daveSessionManager) || t.executeSecureFramesTransition(e)
  }
  getMLSKeyPackage(e) {
    var t;
    null == (t = this.daveSessionManager) || t.getMLSKeyPackage(e)
  }
  updateMLSExternalSender(e) {
    var t;
    null == (t = this.daveSessionManager) || t.updateMLSExternalSender(e)
  }
  processMLSProposals(e, t) {
    var n;
    null == (n = this.daveSessionManager) || n.processMLSProposals(e, t)
  }
  prepareMLSCommitTransition(e, t, n) {
    var r;
    null == (r = this.daveSessionManager) || r.prepareMLSCommitTransition(e, t, n)
  }
  processMLSWelcome(e, t, n) {
    var r;
    null == (r = this.daveSessionManager) || r.processMLSWelcome(e, t, n)
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
    return "connected" === this.pc.iceConnectionState
  }
  setTransceiverEncodingParameters(e, t) {
    if (null == e || 0 === t.length) return;
    let n = e.sender,
      r = n.getParameters();
    if (null == r.encodings) return;
    let i = false;
    for (let e of r.encodings)
      for (let {
          propertyName: n,
          value: r
        }
        of t) e[n] !== r && (this.logger.info("UnifiedConnection.setTransceiverEncodingParameters: ".concat(n, ": from '").concat(e[n], "' to '").concat(r, "'")), i = true, e[n] = r);
    if (!i) return;
    let a = e => {
      this.logger.error('UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "'.concat(e, '" (').concat(JSON.stringify(t), ')"'))
    };
    n.setParameters(r).then(() => {}, e => a(e)).catch(e => a(e))
  }
  setAudioEncoderParameters(e) {
    let t = {
        [f.p.AUDIO_BITRATE]: "maxBitrate"
      },
      n = [];
    for (let {
        parameter: r,
        value: i
      }
      of e) {
      let e = t[r];
      if (null == e) return void this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(r, '"'));
      n.push({
        propertyName: e,
        value: i
      })
    }
    this.setTransceiverEncodingParameters(this.audioTransceiver, n)
  }
  setVideoEncoderParameters(e) {
    let t = {
        [f.p.VIDEO_BITRATE]: "maxBitrate",
        [f.p.VIDEO_RESOLUTION_SCALE]: "scaleResolutionDownBy",
        [f.p.VIDEO_FRAMERATE]: "maxFramerate"
      },
      n = [];
    for (let {
        parameter: r,
        value: i
      }
      of e) {
      let e = t[r];
      if (null == e) return void this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(r, '"'));
      n.push({
        propertyName: e,
        value: i
      })
    }
    this.setTransceiverEncodingParameters(this.videoTransceiver, n)
  }
  getRawStats() {
    return this.pc.getStats()
  }
  makeOfferAnswerOptions() {
    return {
      iceRestart: false
    }
  }
  parseLocalDescription() {
    let e = this.pc.localDescription;
    if (null == module) throw Error("localDescription is null");
    let t = module.sdp,
      {
        outboundStreams: n,
        codecs: r,
        audioSSRC: i,
        videoSSRC: a,
        rtxSSRC: o
      } = (0, Chunk649318.Nl)(exports, this.experimentFlags.has(Chunk65154.V8.BROWSER_HEVC)),
      s = (0, Chunk649318.nX)(exports);
    return {
      sdp: exports,
      outboundStreams: require,
      codecs: r,
      audioSSRC: Chunk74514,
      videoSSRC: a,
      rtxSSRC: Chunk117806,
      extensions: s
    }
  }
  addTransceivers(e, t, n, r) {
    let i = this.pc,
      a = i.getTransceivers().length;
    for (let s = a; s < a + n; s++) {
      var o;
      let n = {
        direction: t
      };
      "video" === e && null != r && (n.streams = [r]);
      let a = i.addTransceiver(e, n);
      null == (o = this.daveSessionManager) || o.setupEncodedTransformsForTransceiver(a), this.inactiveTransceivers[e].push(s.toString())
    }
  }
  buildSSRCsFromOutboundStreams(e, t, n, r) {
    return {
      ssrcs: e.map(e => {
        let {
          mid: i,
          type: a,
          direction: o
        } = e;
        i = String(i);
        let s = this.assignedStreams.get(i);
        if (null != s) {
          let e = r.get(s.cname),
            t = "audio" === a ? null == e ? true : e.audioSSRC : null == e ? true : e.videoSSRC;
          s.ssrc !== t && (this.logger.info("Deleting inactive stream for user with mid: ".concat(i, ", type: ").concat(a, ", ssrc: ").concat(s.ssrc)), s = true, this.assignedStreams.delete(i))
        }
        let l = "audio" === a ? t : n,
          c = this.inactiveTransceivers[a],
          u = c.indexOf(i);
        return null == s && l.length > 0 && false !== u && (s = l.pop(), c.splice(u, 1), this.assignedStreams.set(i, s)), null == s && (s = {
          ssrc: false,
          cname: ""
        }), {
          ssrc: s.ssrc,
          cname: s.cname,
          type: a,
          direction: (0, m.Mg)(o),
          mid: i
        }
      }),
      remainingAudioStreams: t,
      remainingVideoStreams: n
    }
  }
  generateSDPAnswer(e, t, n, r) {
    var i, a;
    let o = this.audioCodec,
      s = this.audioPayloadType,
      l = this.videoCodec,
      c = this.videoPayloadType,
      u = this.videoSupported && (null == (a = this.videoTransceiver) || null == (i = a.sender) ? true : i.track) != null,
      d = this.rtxPayloadType,
      f = this.sdp;
    if (null == o || null == s || null == l || null == c || null == d || null == f) throw Error("Invalid payload: audioCodec: ".concat(o, ", audioPayloadType: ").concat(null == s ? "null" : s, ", videoCodec: ").concat(l, ", videoCodecPayloadType: ").concat(null == c ? "null" : c, ", rtxPayloadType: ").concat(null == d ? "null" : d, ", sdp: ").concat(null == f ? "null" : f));
    let {
      ssrcs: _,
      remainingAudioStreams: p,
      remainingVideoStreams: h
    } = this.buildSSRCsFromOutboundStreams(e, t, n, r);
    return {
      remainingAudioStreams: p,
      remainingVideoStreams: h,
      answer: (0, m.Rx)({
        type: "answer",
        baseSDP: f,
        audioCodec: o,
        audioPayloadType: s,
        audioBitRate: this.voiceBitrate,
        videoCodec: l,
        videoPayloadType: c,
        videoBitRate: 2500,
        sendingVideo: u,
        rtxPayloadType: d,
        ssrcs: _,
        extensions: this.extensions,
        enableAudioNack: this.enableAudioNack
      })
    }
  }
  async setRemoteAnswer(e, t, n, r) {
    let i = this.pc,
      {
        answer: a,
        remainingAudioStreams: o,
        remainingVideoStreams: s
      } = this.generateSDPAnswer(e, t, n, r);
    try {
      await i.setRemoteDescription(a)
    } catch (e) {
      this.logger.warn("Failed to set remote answer: ".concat(e, ", type: ").concat(a.type)), this.emit(d.Sh.SdpError, "setRemoteDescription", e.message, a.type)
    }
    this.unassignedStreams.audio.unshift(...o), this.unassignedStreams.video.unshift(...s), (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) && (this.negotiationNeeded = true, this.logger.info("Renegotiating: Streams left unassigned after negotiation - renegotiate")), this.negotiating = false, this.negotiationNeeded && this.handleNegotiationNeeded()
  }
  setConnected() {
    this.input.reset(), this.setConnectionState(Chunk65154.$j.CONNECTED), this.on(Chunk46973.Sh.Stats, this.handleStats), this.input.on(Chunk886848.G.VoiceActivity, this.handleVoiceActivity)
  }
  async handleNegotiationNeeded() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    if (!module && (this.negotiating || null == this.sdp)) {
      this.negotiationNeeded = true;
      return
    }
    this.negotiating = true, this.negotiationNeeded = false;
    let t = a()(this.unassignedStreams.audio),
      n = a()(this.unassignedStreams.video),
      r = s()(this.users);
    this.unassignedStreams.audio = [], this.unassignedStreams.video = [];
    let i = this.pc,
      o = await Chunk74514.createOffer(this.makeOfferAnswerOptions());
    try {
      await Chunk74514.setLocalDescription(Chunk117806)
    } catch (e) {
      this.logger.warn("Failed to set local offer: ".concat(module, ", type: ").concat(Chunk117806.type, ", sdp: ").concat(Chunk117806.sdp)), this.emit(Chunk46973.Sh.SdpError, "setLocalDescription", module.message, Chunk117806.type)
    }
    let {
      sdp: l,
      outboundStreams: c,
      codecs: u,
      audioSSRC: f,
      videoSSRC: _,
      rtxSSRC: p,
      extensions: h
    } = this.parseLocalDescription();
    if (this.codecs = Chunk579092, this.extensions = Chunk586021, Chunk912095 !== this.audioSSRC || Chunk405475 !== this.videoSSRC) {
      var E;
      null == (E = this.daveSessionManager) || Chunk436620.updateSsrcs(this.userId, Chunk912095, [Chunk405475])
    }
    this.audioSSRC = Chunk912095, this.videoSSRC = Chunk405475, this.videoReady = Chunk405475 > 0 && Chunk886848 > 0, (this.videoStreamParameters[0].ssrc !== Chunk405475 || this.videoStreamParameters[0].rtxSsrc !== Chunk886848 || this.videoReady) && (this.videoStreamParameters[0].ssrc = 0 === Chunk405475 ? this.videoStreamParameters[0].ssrc : Chunk405475, this.videoStreamParameters[0].rtxSsrc = 0 === Chunk886848 ? this.videoStreamParameters[0].rtxSsrc : Chunk886848, this.videoStreamParameters[0].active = this.videoReady, this.emit(Chunk46973.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, Chunk405475, Chunk886848, this.videoStreamParameters)), null == this.sdp ? this.emit(Chunk46973.Sh.Connected, "webrtc", (0, Chunk649318.sc)(Chunk264344, this.experimentFlags.has(Chunk65154.V8.BROWSER_HEVC))) : this.setRemoteAnswer(c, exports, require, r)
  }
  constructor(e) {
    var t;
    super(e), b(this, "pc", true), b(this, "sdp", null), b(this, "negotiating", false), b(this, "negotiationNeeded", false), b(this, "audioTransceiver", true), b(this, "videoTransceiver", true), b(this, "users", new Map), b(this, "userIdsBySsrc", new Map), b(this, "assignedStreams", new Map), b(this, "unassignedStreams", {
      audio: [],
      video: []
    }), b(this, "inactiveTransceivers", {
      audio: [],
      video: []
    }), b(this, "trackUserIds", {}), b(this, "audioCodec", null), b(this, "audioPayloadType", null), b(this, "videoCodec", null), b(this, "videoPayloadType", null), b(this, "rtxPayloadType", null), b(this, "enableAudioNack", false), b(this, "extensions", []), b(this, "codecs", []), b(this, "daveSessionManager", null), b(this, "logger", true), b(this, "getUserIdBySsrc", e => this.userIdsBySsrc.get(e)), b(this, "handlePeerConnectionStateChange", () => {
      let e = this.peerConnectionState;
      switch (this.logger.info("peerConnectionState =>", e), e) {
        case "connected":
          this.setConnected();
          break;
        case "connecting":
          "connected" === this.iceConnectionState ? this.setConnectionState(g.$j.DTLS_CONNECTING) : this.setConnectionState(g.$j.ICE_CHECKING);
          break;
        case "failed":
          this.setConnectionState(g.$j.NO_ROUTE);
          break;
        case "disconnected":
        case "closed":
          this.setConnectionState(g.$j.DISCONNECTED)
      }
    }), b(this, "handleIceConnectionStateChange", () => {
      let e = this.iceConnectionState;
      switch (this.logger.info("iceConnectionState =>", e), e) {
        case "connected":
          this.setConnected();
          break;
        case "checking":
          this.setConnectionState(g.$j.ICE_CHECKING);
          break;
        case "failed":
          this.setConnectionState(g.$j.NO_ROUTE);
          break;
        case "disconnected":
        case "closed":
          this.setConnectionState(g.$j.DISCONNECTED)
      }
    }), b(this, "handleSignalingStateChange", () => {
      let e = this.signalingState;
      this.logger.info("signalingState => ".concat(e))
    }), b(this, "handleIceGatheringStateChange", () => {
      this.logger.info("iceGatheringState =>", this.iceGatheringState)
    }), b(this, "handleTrack", e => {
      let t = e.streams[0].id,
        n = e.track;
      if (!/^default/.test(n.id)) {
        var r, i, a, o;
        let [e, s] = t.split("-");
        this.trackUserIds[n.id] = e;
        let l = this.users.get(e);
        if ((null == l || null == (i = l.videoSSRC) || null == (r = i.toString) ? true : r.call(i)) !== s && (null == l || null == (o = l.audioSSRC) || null == (a = o.toString) ? true : a.call(o)) !== s) return void this.logger.info("Got stale ssrc ".concat(s, " for ").concat(n.kind, " track, user ID ").concat(e));
        this.createOutput(e, n), n.onunmute = () => this.createOutput(e, n), n.onmute = () => {
          var t;
          (null == (t = this.users.get(e)) ? true : t.videoSSRC) == null && this.destroyOutput(e, n)
        }
      }
    }), this.logger = new u.Yd("UnifiedConnection(".concat(e.context, ")"));
    let n = e.dave;
    null == n || (0, h.IT)() || (this.logger.warn("DAVE is initialized but encoded transforms are not supported"), n = null), null != n && (this.daveSessionManager = new _.j(n, e.transientKeys, this.userId), this.daveSessionManager.on(d.Sh.MLSFailure, (e, t) => {
      this.emit(d.Sh.MLSFailure, e, t)
    }), this.daveSessionManager.on(d.Sh.SecureFramesUpdate, e => {
      this.emit(d.Sh.SecureFramesUpdate, e)
    })), this.videoSupported = E.U8;
    let r = this.pc = new RTCPeerConnection({
      bundlePolicy: "max-bundle",
      sdpSemantics: "unified-plan",
      encodedInsertableStreams: null != this.daveSessionManager
    });
    E.X6 ? (r.onconnectionstatechange = this.handlePeerConnectionStateChange, r.oniceconnectionstatechange = this.handlePeerConnectionStateChange) : r.oniceconnectionstatechange = this.handleIceConnectionStateChange, r.onsignalingstatechange = this.handleSignalingStateChange, r.onicegatheringstatechange = this.handleIceGatheringStateChange, r.ontrack = this.handleTrack, this.audioTransceiver = r.addTransceiver("audio", {
      direction: "recvonly",
      sendEncodings: [{
        maxBitrate: this.voiceBitrate
      }]
    }), null == (t = this.daveSessionManager) || t.setupEncodedTransformsForTransceiver(this.audioTransceiver), this.videoSupported && (this.addTransceivers("video", "recvonly", 1, this.input.getVideoStream()), this.videoTransceiver = r.getTransceivers()[1]), this.addTransceivers("audio", "recvonly", y), this.videoSupported && this.addTransceivers("video", "recvonly", O), this.setStream(this.input.stream), this.logger.info("Renegotiating: Initial negotiation, user id: ".concat(e.userId)), this.handleNegotiationNeeded(true)
  }
}