/** Chunk was on web.js **/
/** chunk id: 685756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => w,
  Z: () => L
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./388685.js"), require("./49124.js"), require("./997841.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk261470 = require("./261470.js"),
  Chunk47770 = require("./47770.js"),
  Chunk379649 = require("./379649.js"),
  Chunk710845 = require("./710845.js"),
  Chunk857192 = require("./857192.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk65154 = require("./65154.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = 3,
  E = 9;

function b() {}
let y = 20 * Chunk70956.Z.Millis.SECOND,
  O = 3,
  v = +Chunk70956.Z.Millis.MINUTE,
  I = .25,
  T = .1,
  S = 5 * Chunk70956.Z.Millis.SECOND,
  A = 2,
  C = 8;

function N(e) {
  return e.map(e => ({
    name: e.name,
    type: e.type,
    priority: 1e3 * e.priority,
    payload_type: e.payloadType,
    rtx_payload_type: e.rtxPayloadType,
    encode: e.encode,
    decode: e.decode
  }))
}

function R(e) {
  return null == e ? true : e.map(e => ({
    type: e.type,
    rid: e.rid,
    ssrc: e.ssrc,
    active: e.active,
    quality: e.quality,
    rtx_ssrc: e.rtxSsrc,
    max_bitrate: e.maxBitrate,
    max_framerate: e.maxFrameRate,
    max_resolution: null != e.maxResolution ? {
      type: e.maxResolution.type,
      width: e.maxResolution.width,
      height: e.maxResolution.height
    } : true
  }))
}

function P(e) {
  return "audio" === e ? f.Tr.AUDIO : "test" === e ? f.Tr.TEST : "screen" === e ? f.Tr.SCREEN : f.Tr.VIDEO
}

function D(e) {
  var t;
  return null != (t = null == e ? true : e.map(e => ({
    type: P(e.type),
    rid: e.rid,
    ssrc: e.ssrc,
    rtxSsrc: e.rtx_ssrc,
    active: e.active,
    quality: e.quality,
    maxBitrate: e.max_bitrate,
    maxFrameRate: e.max_framerate,
    maxResolution: null != e.max_resolution ? {
      type: e.max_resolution.type,
      width: e.max_resolution.width,
      height: e.max_resolution.height
    } : true
  }))) ? t : []
}
var w = function(e) {
  return e.Connecting = "connecting", e.Connect = "connect", e.Disconnect = "disconnect", e.Resuming = "resuming", e.Ready = "ready", e.Speaking = "speaking", e.Video = "video", e.Ping = "ping", e.ClientConnect = "client-connect", e.ClientDisconnect = "client-disconnect", e.Codecs = "codecs", e.MediaSessionId = "media-session-id", e.MediaSinkWants = "media-sink-wants", e.VoiceBackendVersion = "voice-backend-version", e.KeyframeInterval = "keyframe-interval", e.ChannelOptionsUpdateSecureFramesProtocol = "update-secure-frames-protocol", e.Flags = "flags", e.Platform = "platform", e.SDP = "sdp", e.Encryption = "encryption", e.BandwidthEstimationExperiment = "bandwidth-estimation-experiment", e.SecureFramesInit = "secure-frames-init", e.SecureFramesPrepareTransition = "secure-frames-prepare-transition", e.SecureFramesExecuteTransition = "secure-frames-execute-transition", e.SecureFramesPrepareEpoch = "secure-frames-prepare-epoch", e.MLSExternalSenderPackage = "mls-external-sender-package", e.MLSProposals = "mls-proposals", e.MLSPrepareCommitTransition = "mls-prepare-commit-transition", e.MLSWelcome = "mls-welcome", e.ReceiveMessage = "receive-message", e.SendMessage = "send-message", e
}({});
class L extends Chunk47770.Z {
  createWebSocket() {
    this.logger.info("[CONNECT] ".concat(this.url)), null !== this.webSocket && (this.logger.error("Connect called with already existing websocket"), this.cleanupWebSocket(e => e.close(4e3))), this.connectionStartTime = (0, Chunk379649.zO)(), this.helloTimeout = setTimeout(() => {
      let e = (0, Chunk379649.zO)() - this.connectionStartTime;
      this.handleClose(false, 0, "The connection timed out after ".concat(module, " ms - did not receive OP_HELLO in time."))
    }, y);
    let e = this.webSocket = new WebSocket("".concat(this.url, "?v=").concat(E));
    module.binaryType = "arraybuffer", module.onopen = () => {
      1 === this.connectionState ? this.emit("connect") : 5 === this.connectionState && this.doResumeOrClose(), this.connectionState = 4;
      let e = (0, Chunk379649.zO)() - this.connectionStartTime;
      this.logger.info("[CONNECTED] ".concat(this.url, " in ").concat(module, " ms")), this.emit("ping", Math.round(module / 2))
    }, module.onmessage = e => {
      let {
        op: t,
        seq: n,
        d: r
      } = this.parseWebSocketMessage(e);
      if (this.emit("receive-message", t, r), n && (this.lastRecvSeqNum = n), c.default.isLoggingGatewayEvents)
        if (r instanceof Uint8Array) {
          let e = [...r].map(e => e.toString(16).padStart(2, "0")).join("");
          this.logger.info("~> ".concat(t, ": 0x").concat(e))
        } else this.logger.info("~> ".concat(t, ": ").concat(JSON.stringify(r)));
      switch (t) {
        case 8:
          this.clearHelloTimeout(), this.handleHello(r);
          break;
        case 2:
          this.handleReady(r);
          break;
        case 9:
          this.handleResumed(r);
          break;
        case 4:
          r.bandwidth_estimation_experiment && this.emit("bandwidth-estimation-experiment", r.bandwidth_estimation_experiment), this.emit("codecs", r.audio_codec, r.video_codec), r.media_session_id && this.emit("media-session-id", r.media_session_id), r.sdp ? this.emit("sdp", r.sdp) : r.mode && this.emit("encryption", r.mode, r.secret_key), r.keyframe_interval && this.emit("keyframe-interval", r.keyframe_interval), this.emit("secure-frames-init", r.dave_protocol_version || 0), this.resumable = true;
          break;
        case 5:
          let i = r.speaking;
          "boolean" == typeof i && (i = i ? f.Dg.VOICE : f.Dg.NONE), this.emit("speaking", r.user_id, r.ssrc, i);
          break;
        case 3:
          this.sendHeartbeat();
          break;
        case 6:
          this.handleHeartbeatAck(r);
          break;
        case 12:
          this.emit("video", r.user_id, r.audio_ssrc, r.video_ssrc, D(r.streams));
          break;
        case 11:
          this.emit("client-connect", r.user_ids);
          break;
        case 13:
          this.emit("client-disconnect", r.user_id);
          break;
        case 14:
          (null != r.audio_codec || null != r.video_codec) && this.emit("codecs", r.audio_codec, r.video_codec), null != r.media_session_id && this.emit("media-session-id", r.media_session_id), r.keyframe_interval && this.emit("keyframe-interval", r.keyframe_interval);
          break;
        case 15:
          this.emit("media-sink-wants", r);
          break;
        case 16:
          null != r.voice && null != r.rtc_worker && this.emit("voice-backend-version", r.voice, r.rtc_worker);
          break;
        case 18:
          null != r.flags && null != r.user_id && this.emit("flags", r.user_id, r.flags);
          break;
        case 20:
          null != r.platform && null != r.user_id && this.emit("platform", r.user_id, r.platform);
          break;
        case 21:
          null != r.transition_id && null != r.protocol_version && this.emit("secure-frames-prepare-transition", r.transition_id, r.protocol_version);
          break;
        case 22:
          null != r.transition_id && this.emit("secure-frames-execute-transition", r.transition_id);
          break;
        case 24:
          null != r.epoch && null != r.protocol_version && this.emit("secure-frames-prepare-epoch", r.epoch, r.protocol_version);
          break;
        case 25:
          this.emit("mls-external-sender-package", r);
          break;
        case 27:
          this.emit("mls-proposals", r);
          break;
        case 29: {
          let e = new DataView(r.buffer, r.byteOffset, A).getUint16(0, false),
            t = r.slice(A);
          this.emit("mls-prepare-commit-transition", e, t);
          break
        }
        case 30: {
          let e = new DataView(r.buffer, r.byteOffset, A).getUint16(0, false),
            t = r.slice(A);
          this.emit("mls-welcome", e, t);
          break
        }
        default:
          this.logger.info("Unhandled op ".concat(t))
      }
    }, module.onerror = () => this.handleClose(false, 0, "An error with the websocket occurred"), module.onclose = e => {
      let {
        wasClean: t,
        code: n,
        reason: r
      } = e;
      return this.handleClose(t, n, r)
    }
  }
  send(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      n = this.webSocket;
    if (null == n || n.readyState !== WebSocket.OPEN) return;
    let r = JSON.stringify({
      op: e,
      d: t
    });
    c.default.isLoggingGatewayEvents && this.logger.info("<~ ".concat(r)), this.emit("send-message", e, t);
    try {
      n.send(r)
    } catch (e) {}
  }
  sendBinary(e, t) {
    let n = this.webSocket;
    if (null == n || n.readyState !== WebSocket.OPEN) return;
    let r = new Uint8Array(t.byteLength + 1);
    r[0] = e, r.set(t, 1);
    try {
      n.send(r.buffer)
    } catch (e) {}
  }
  ping() {
    this.sendHeartbeat()
  }
  doResumeOrClose() {
    let e = (0, Chunk379649.zO)();
    null !== this.serverId && null !== this.channelId && null !== this.token && null !== this.sessionId && this.resumable && (null == this.lastHeartbeatAckTime || module - this.lastHeartbeatAckTime <= v) ? (this.doResume(), this.lastHeartbeatAckTime = module) : this.disconnect(false, 4801, "Cannot resume connection.")
  }
  doResume() {
    var e, t, n, r;
    let i = null != (e = this.lastRecvSeqNum) ? module : false;
    this.logger.info("[RESUME] resuming session. serverId=".concat(null != (t = this.serverId) ? exports : "", " channelId=").concat(null != (n = this.channelId) ? require : "", " sessionId=").concat(null != (r = this.sessionId) ? Chunk512722 : "", " seqAck=").concat(i)), this.emit("resuming"), this.connectionState = 3, this.send(7, {
      token: this.token,
      session_id: this.sessionId,
      server_id: this.serverId,
      channel_id: this.channelId,
      seq_ack: i
    })
  }
  handleHello(e) {
    var t, n, r;
    if (this.serverVersion = null != (t = e.v) ? t : g, this.serverVersion <= 3) {
      let t = d.isPlatformEmbedded ? I : T;
      this.heartbeatInterval = e.heartbeat_interval * t
    } else this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier, d.isPlatformEmbedded || (this.heartbeatInterval = Math.min(S, null != (n = this.heartbeatInterval) ? n : NaN));
    let i = (0, s.zO)() - this.connectionStartTime;
    this.logger.info("[HELLO] heartbeat interval: ".concat(null != (r = this.heartbeatInterval) ? r : "??", ", version: ").concat(this.serverVersion, ", took ").concat(i, " ms")), this.startHeartbeater()
  }
  handleReady(e) {
    this.backoff.succeed();
    let t = (0, s.zO)() - this.connectionStartTime;
    this.logger.info("[READY] took ".concat(t, " ms")), this.serverVersion >= 6 && this.send(16, {}), this.emit("ready", e.ip, e.port, e.modes, e.ssrc, D(e.streams), e.experiments)
  }
  handleResumed(e) {
    this.backoff.succeed()
  }
  handleClose(e, t, n) {
    if (this.connectionState = 0, e = e || false, this.cleanupWebSocket(), 4004 === t || 4015 === t || 4011 === t || 4006 === t) return this.disconnect(e, t, n);
    if (this.backoff.fails > O) this.logger.warn("[WS CLOSED] Backoff exceed. Resetting."), this.disconnect(e, t, n);
    else {
      let r = this.backoff.fail(() => this.reconnect(e, t, n));
      this.logger.warn("[WS CLOSED] (clean: ".concat(e.toString(), ", code: ").concat(t, ", reason: ").concat(n, ") retrying in ").concat((r / 1e3).toFixed(2), " seconds."))
    }
  }
  disconnect(e, t, n) {
    this.logger.warn("[DISCONNECT] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.cleanupWebSocket(), this.cleanupState(), this.connectionState = 0, this.emit("disconnect", e, t, n)
  }
  reconnect(e, t, n) {
    this.logger.info("[RECONNECT] wasClean=".concat(e.toString(), " code=").concat(t, " reason=").concat(n)), this.cleanupWebSocket(e => e.close(4e3)), this.connectionState = 5, this.createWebSocket()
  }
  cleanupWebSocket(e) {
    this.stopHeartbeater(), this.clearHelloTimeout();
    let t = this.webSocket;
    this.webSocket = null, null != t && (t.onopen = b, t.onmessage = b, t.onerror = b, t.onclose = b, null == e || e(t)), this.backoff.cancel()
  }
  cleanupState() {
    this.serverId = null, this.channelId = null, this.sessionId = null, this.token = null, this.resumable = false, this.lastRecvSeqNum = null
  }
  parseWebSocketMessage(e) {
    if (!(e.data instanceof ArrayBuffer)) return JSON.parse(e.data);
    {
      let t = new Uint8Array(e.data),
        n = null;
      this.serverVersion >= C && (n = new DataView(t.buffer).getUint16(0, false));
      let r = 2 * (this.serverVersion >= C),
        i = 1;
      return {
        op: t[r],
        seq: n,
        d: t.subarray(r + i)
      }
    }
  }
  clearHelloTimeout() {
    null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
  }
  handleHeartbeatAck(e) {
    this.logger.info("Heartbeat ACK received");
    let t = null;
    t = this.serverVersion >= C ? e.t : e, this.emit("ping", (0, s.zO)() - t), this.lastHeartbeatAckTime = (0, s.zO)(), this.heartbeatAck = true, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, this.logger.info("Expedited heartbeat succeeded"))
  }
  handleHeartbeatTimeout() {
    this.cleanupWebSocket(e => e.close(4e3));
    let e = this.backoff.fail(() => this.reconnect(false, 4800, "Heartbeat timeout."));
    this.logger.warn("[HEARTBEAT ACK TIMEOUT] reconnecting in ".concat((module / 1e3).toFixed(2), " seconds."))
  }
  startHeartbeater() {
    i()(null != this.heartbeatInterval, "RTCControlSocket: Heartbeat interval should never null here."), this.logger.info("Starting heartbeat with interval: ".concat(this.heartbeatInterval)), null !== this.heartbeater && clearInterval(this.heartbeater), this.heartbeatAck = true, this.heartbeater = setInterval(() => {
      this.heartbeatAck ? (this.heartbeatAck = false, this.sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this.handleHeartbeatTimeout()
    }, this.heartbeatInterval)
  }
  sendHeartbeat() {
    if (this.serverVersion >= C) {
      var e;
      let t = null != (e = this.lastRecvSeqNum) ? module : false;
      this.logger.info("Sending heartbeat with last received sequence number: ".concat(exports)), this.send(3, {
        t: (0, Chunk379649.zO)(),
        seq_ack: exports
      })
    } else this.logger.info("Sending heartbeat"), this.send(3, (0, Chunk379649.zO)())
  }
  stopHeartbeater() {
    null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
  }
  connect() {
    return 0 !== this.connectionState ? (this.logger.error("Cannot start a new connection, connection state is not disconnected"), false) : (this.connectionState = 1, this.createWebSocket(), this.emit("connecting"), true)
  }
  identify(e) {
    let {
      serverId: t,
      channelId: n,
      userId: r,
      sessionId: i,
      token: a,
      maxDaveProtocolVersion: o,
      video: s = false,
      streamParameters: l
    } = e;
    this.serverId = t, this.channelId = n, this.sessionId = i, this.token = a, this.connectionState = 2, this.send(0, {
      server_id: t,
      channel_id: n,
      user_id: r,
      session_id: i,
      token: a,
      max_dave_protocol_version: o,
      video: s,
      streams: R(l)
    })
  }
  expeditedHeartbeat(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "",
      n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    if (null != this.webSocket) this.logger.info("Performing an expedited heartbeat ".concat("" !== t ? "reason: " + t : "")), this.heartbeatAck = false, this.sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
      this.expeditedHeartbeatTimeout = null, false === this.heartbeatAck && this.handleHeartbeatTimeout()
    }, e);
    else {
      if (n) return this.resetBackoff(t);
      this.logger.info("Expedited heartbeat requested, but is disconnected and a reset was not " + "requested ".concat("" !== t ? "reason: " + t : ""))
    }
    returnfalse
  }
  resetBackoff() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "";
    return this.backoff.fails > 0 && null == this.webSocket && (this.logger.info("Connection backoff reset ".concat("" !== module ? "for reason: " + module : "")), this.backoff.succeed(), this.reconnect(false, 4802, "Reset backoff."), true)
  }
  close() {
    this.logger.info("CLOSE"), this.cleanupWebSocket(e => e.close(4e3)), this.cleanupState(), this.connectionState = 0, this.emit("disconnect", true, 1e3, "Force Close")
  }
  destroy() {
    this.close()
  }
  selectProtocol(e, t, n, r) {
    let i, a = {};
    null == n ? i = null : "sdp" in n && null != n.sdp && "" !== n.sdp ? (i = n.sdp, a = m(p({}, n), {
      codecs: N(n.codecs),
      rtc_connection_id: t
    })) : "address" in n && null != n.address && "" !== n.address && n.port && null != n.mode && "" !== n.mode && (i = {
      address: n.address,
      port: n.port,
      mode: n.mode
    }, a = m(p({}, n), {
      codecs: N(n.codecs),
      rtc_connection_id: t,
      experiments: r
    })), this.send(1, p({
      protocol: e,
      data: i
    }, a))
  }
  updateSession(e) {
    this.send(14, {
      codecs: N(e.codecs)
    })
  }
  speaking(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0;
    this.send(5, {
      speaking: this.serverVersion <= 3 ? !!e : e,
      delay: t,
      ssrc: n
    })
  }
  video(e, t, n, r) {
    this.send(12, {
      audio_ssrc: e,
      video_ssrc: t,
      rtx_ssrc: n,
      streams: R(r)
    })
  }
  mediaSinkWants(e) {
    this.serverVersion >= 5 && this.send(15, e)
  }
  secureFramesReadyForTransition(e) {
    this.send(23, {
      transition_id: e
    })
  }
  sendMLSKeyPackage(e) {
    this.logger.info("Sending MLS key package"), this.sendBinary(26, new Uint8Array(e))
  }
  sendMLSCommitWelcome(e) {
    this.logger.info("Sending MLS commit + welcome message"), this.sendBinary(28, new Uint8Array(e))
  }
  flagMLSInvalidCommitWelcome(e) {
    this.send(31, {
      transition_id: e
    })
  }
  noRoute() {
    this.send(32, {})
  }
  setHeartbeatIntervalModifier(e) {
    this.heartbeatIntervalModifier = e
  }
  constructor(e, t = f.Yn.DEFAULT) {
    super(), _(this, "url", true), _(this, "logger", true), _(this, "backoff", new a.Z(1e3, 5e3)), _(this, "webSocket", true), _(this, "connectionState", true), _(this, "heartbeatInterval", true), _(this, "helloTimeout", true), _(this, "heartbeater", true), _(this, "lastHeartbeatAckTime", true), _(this, "expeditedHeartbeatTimeout", true), _(this, "heartbeatAck", true), _(this, "heartbeatIntervalModifier", true), _(this, "connectionStartTime", true), _(this, "lastRecvSeqNum", true), _(this, "sessionId", true), _(this, "serverId", true), _(this, "channelId", true), _(this, "token", true), _(this, "resumable", true), _(this, "serverVersion", 0), this.url = e, this.logger = new l.Z("RTCControlSocket(".concat(t, ")")), this.logger.enableNativeLogger(true), this.webSocket = null, this.connectionState = 0, this.helloTimeout = null, this.lastHeartbeatAckTime = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = true, this.expeditedHeartbeatTimeout = null, this.heartbeatIntervalModifier = 1, this.connectionStartTime = 0, this.lastRecvSeqNum = null, this.sessionId = null, this.serverId = null, this.channelId = null, this.token = null, this.resumable = false
  }
}