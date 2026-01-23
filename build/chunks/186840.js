/** Chunk was on web.js **/
/** chunk id: 186840, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ea
}), require("./896048.js"), require("./638769.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./321073.js"), require("./457529.js"), require("./142703.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk777915 = require("./777915.js"),
  Chunk61090 = require("./61090.js"),
  Chunk158390 = require("./158390.js"),
  Chunk731738 = require("./731738.js"),
  Chunk70298 = require("./70298.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk766034 = require("./766034.js"),
  Chunk324827 = require("./324827.js"),
  Chunk214771 = require("./214771.js"),
  Chunk183636 = require("./183636.js"),
  Chunk937724 = require("./937724.js"),
  Chunk626584 = require("./626584.js"),
  Chunk831062 = require("./831062.js"),
  Chunk614792 = require("./614792.js"),
  Chunk111162 = require("./111162.js"),
  Chunk954571 = require("./954571.js"),
  Chunk353835 = require("./353835.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk175306 = require("./175306.js"),
  Chunk949189 = require("./949189.js"),
  Chunk313449 = require("./313449.js"),
  Chunk362488 = require("./362488.js"),
  Chunk805396 = require("./805396.js"),
  Chunk932170 = require("./932170.js"),
  Chunk538343 = require("./538343.js"),
  Chunk969091 = require("./969091.js"),
  Chunk33282 = require("./33282.js"),
  Chunk318015 = require("./318015.js"),
  Chunk469177 = require("./469177.js"),
  Chunk751124 = require("./751124.js"),
  Chunk652215 = require("./652215.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = new Chunk626584.A("GatewaySocket"),
  W = new Chunk805396.A;

function K(e) {
  let {
    actuallySkipped: t,
    reason: n
  } = e;
  if (!(0, R.K)()) return;
  let r = j.j(),
    i = k.L7(),
    a = m.A.getState(),
    s = i.length > 0 ? "".concat(n, " + ").concat(i) : n,
    o = r ? "paused" : "request_state";
  v.default.track(G.HAw.GATEWAY_CONNECT_SKIPPED, {
    actually_skipped: null != t ? t : r,
    client_app_state: a,
    connect_reason: s,
    skip_context: o
  }), (0, R.a)() && setTimeout(() => {
    v.default.track(G.HAw.POST_GATEWAY_CONNECT_SKIPPED, {
      actually_skipped: null != t ? t : r,
      original_client_app_state: a,
      client_app_state: m.A.getState(),
      skip_context: o,
      original_connect_reason: s,
      gateway_connect_reasons: k.L7()
    })
  }, 200)
}

function z(e) {
  let t, {
    gatewayURL: n,
    newCallback: r,
    onOpen: i,
    onMessage: a,
    onError: s,
    onClose: o
  } = e;
  Y.enableNativeLogger(true);
  let l = window._ws,
    c = false,
    u = false,
    d = null,
    f = null;
  if (window._ws = null, null != l)
    if (t = l.ws, l.state.gateway !== n) Y.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(l.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
    else {
      var p;
      let e = F({}, l.state);
      null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? H(F({}, e), {
        data: e.data.substring(0, 100)
      }) : e)), Y.log("[FAST CONNECT] successfully took over websocket, state:", H(F({}, e), {
        messages: null == (p = e.messages) ? true : p.length
      })), c = l.state.open, u = l.state.identify, d = l.state.messages, f = l.state.clientState
    } null == t && ((t = (0, U.A)(n)).binaryType = "arraybuffer"), r(t), c && i(u, f), null != d && d.forEach(a), t.onopen = () => i(u, f), t.onmessage = a, t.onclose = o, t.onerror = s
}

function q() {}
let Z = 4,
  X = 1001,
  Q = "Stream end encountered",
  J = 4004,
  $ = 30 * Chunk927813.A.Millis.SECOND,
  ee = 3 * Chunk927813.A.Millis.MINUTE,
  et = +Chunk927813.A.Millis.MINUTE;

function en(e, t, n) {
  let r = 0;
  e.dataReady(e => {
    try {
      return n(e, r)
    } finally {
      r = 0
    }
  });
  let i = false;
  return n => {
    let a = n.data;
    null != n.raw_length ? r += n.raw_length : r += er(a);
    try {
      e.feed(a)
    } catch (e) {
      throw i || (i = true, t(false, 0, "A decompression error occurred")), e
    }
  }
}

function er(e) {
  return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
}
let ei = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class ea extends Chunk969091.A {
  get connectionState() {
    return this.connectionState_
  }
  set connectionState(e) {
    Y.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
  }
  addAnalytics(e) {
    this.analytics = F({}, this.analytics, e)
  }
  setResumeUrl(e) {
    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && Y.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
  }
  handleActiveStateChange(e) {
    var t;
    let n = !(null == (t = this.heartbeatQOSState.currentPayload) ? true : t.active);
    null == this.heartbeatQOSState.currentPayload && (this.heartbeatQOSState.currentPayload = e);
    let r = this.heartbeatQOSState.currentPayload;
    e.active && (r.active = true, r.reasons = [...new Set([...r.reasons, ...e.reasons])].sort(), n && this.isSessionEstablished() && this._sendHeartbeat()), this.heartbeatQOSState.upcomingState = e
  }
  handleUpdateTimeSpentSessionId(e, t, n) {
    this.connectionState_ === C.A.SESSION_ESTABLISHED && (this.send(L.p.UPDATE_TIME_SPENT_SESSION_ID, {
      initialization_timestamp: e,
      session_id: t,
      client_launch_id: n
    }), this._sendHeartbeat())
  }
  _connect(e) {
    if (!this.willReconnect()) return void Y.verbose("Skipping _connect because willReconnect is false");
    let t = j.j();
    if ((t || !k.DQ()) && (Y.info("Skipping _connect because socket is paused"), K({
        reason: e
      }), t)) return;
    this.connectionState = C.A.CONNECTING, this.nextReconnectIsImmediate = false;
    let n = this.compressionHandler.getAlgorithm(),
      r = W.getName(),
      i = this._getGatewayUrl(),
      a = window.GLOBAL_ENV.API_VERSION;
    s.A.mark("\uD83C\uDF10", "Socket._connect"), Y.info("[CONNECT] ".concat(i, ", ") + "encoding: ".concat(r, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != n ? n : "none")), null !== this.webSocket && (Y.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
      let e = Date.now() - this.connectionStartTime;
      this._handleClose(false, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
    }, $);
    let o = new URL(i);
    o.searchParams.append("encoding", r), o.searchParams.append("v", a.toString()), null != n && o.searchParams.append("compress", n), z({
      gatewayURL: o.toString(),
      newCallback: e => {
        this.webSocket = e, this.compressionHandler.bindWebSocket(e)
      },
      onOpen: e => {
        s.A.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
        let t = Date.now() - this.connectionStartTime;
        Y.info("[CONNECTED] ".concat(o.toString(), " in ").concat(t, " ms")), this.isFastConnect = e, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
      },
      onMessage: en(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
        let n = Date.now(),
          {
            op: r,
            s: i,
            t: a,
            d: o
          } = W.unpack(e);
        if (r !== L.p.DISPATCH && s.A.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(r, " ").concat(L.p[r])), O.default.isLoggingGatewayEvents) {
          let e = [r];
          r === L.p.DISPATCH && e.push(a), e.push(o), Y.verboseDangerously("<~", ...e)
        }
        let l = Date.now() - n;
        switch ("READY" === a ? b.A.parseReady.set(n, l) : "READY_SUPPLEMENTAL" === a ? b.A.parseReadySupplemental.set(n, l) : l > 10 && s.A.mark("\uD83C\uDF10", "Parse " + a, l), null != i && (this.seq = i), r) {
          case L.p.HELLO:
            this._clearHelloTimeout(), this._handleHello(o);
            break;
          case L.p.RECONNECT:
            this._handleReconnect();
            break;
          case L.p.INVALID_SESSION:
            this._handleInvalidSession(o);
            break;
          case L.p.HEARTBEAT:
            this._handleHeartbeatReceive();
            break;
          case L.p.HEARTBEAT_ACK:
            this._handleHeartbeatAck(o);
            break;
          case L.p.DISPATCH:
            this._handleDispatch(o, a, "READY" === a ? {
              compressed_byte_size: t,
              uncompressed_byte_size: er(e),
              compression_algorithm: this.compressionHandler.getAlgorithm(),
              packing_algorithm: W.getName(),
              unpack_duration_ms: l
            } : null);
            break;
          default:
            Y.info("Unhandled op ".concat(r))
        }
        this._sendHeartbeatIfDue()
      }),
      onError: () => {
        this.setResumeUrl(null), A.A.flushDNSCache(), this._handleClose(false, 0, "An error with the websocket occurred")
      },
      onClose: e => {
        let {
          wasClean: t,
          code: n,
          reason: r
        } = e;
        return this._handleClose(t, n, r)
      }
    })
  }
  _handleHello(e) {
    let t = this.heartbeatInterval = e.heartbeat_interval,
      n = Date.now() - this.connectionStartTime;
    Y.verbose("[HELLO] via ".concat((0, D.m6)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
  }
  _handleReconnect() {
    Y.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = C.A.WILL_RECONNECT, this._connect("reconnect")
  }
  _handleInvalidSession(e) {
    Y.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
  }
  _handleDispatch(e, t, n) {
    let r = Date.now() - this.connectionStartTime;
    if ("READY" === t) {
      let t = e.session_id;
      this.sessionId = t;
      let n = (0, D.m6)(e);
      s.A.setServerTrace(n), Y.info("[READY] took ".concat(r, "ms, as ").concat(t)), Y.verbose("".concat(n)), this.connectionState = C.A.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
    } else "READY_SUPPLEMENTAL" === t ? (Y.info("[READY_SUPPLEMENTAL] took ".concat(r, "ms")), this.connectionState = C.A.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (Y.verbose((0, D.m6)(e)), this.connectionState = C.A.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
    this.dispatcher.receiveDispatch(e, t, n)
  }
  handleResumeDispatched() {
    let e = Date.now() - this.connectionStartTime;
    Y.info("[RESUMED] took ".concat(e, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
  }
  handleReadyDispatched() {
    this.didForceClearGuildHashes = false, this.hasConnectedOnce = true
  }
  _getGatewayUrl() {
    return null != this.resumeUrl ? this.resumeUrl : ei
  }
  _handleHeartbeatReceive() {
    this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval))
  }
  _handleHeartbeatAck(e) {
    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = true, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, Y.verbose("Expedited heartbeat succeeded"))
  }
  _handleHeartbeatTimeout() {
    this._cleanup(e => e.close(4e3)), this.connectionState = C.A.WILL_RECONNECT;
    let e = this.gatewayBackoff.fail(() => this._connect("_handleHeartbeatTimeout"));
    Y.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
  }
  _handleClose(e, t, n) {
    if (e = e || false, this._cleanup(), this.emit("close", {
        code: t,
        reason: n
      }), t === J) return this.connectionState = C.A.CLOSED, Y.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
    if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = C.A.WILL_RECONNECT, this.nextReconnectIsImmediate) Y.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect("_handleCloseImmediateReconnect");
    else {
      let r = this.gatewayBackoff.fail(() => this._connect("_handleClose:".concat(n)));
      Y.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((r / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > Z && this._reset(e, t, n)
    }
  }
  _tryDetectInvalidIOSToken(e, t, n) {
    (0, S.isIOS)() && null != this.token && e === X && t === Q && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && d.Bo.get({
      url: G.Rsh.ME,
      headers: {
        authorization: this.token
      },
      rejectWithError: false
    }).then(e => {
      let {
        status: t
      } = e;
      v.default.track(G.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }, e => {
      let {
        status: t
      } = e;
      401 === t && (this.connectionState = C.A.CLOSED, Y.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, J, "invalid token manually detected")), v.default.track(G.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }))
  }
  _reset(e, t, n) {
    this.sessionId = null, this.seq = 0, Y.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
      wasClean: e,
      code: t,
      reason: n
    })
  }
  _sendHeartbeatIfDue() {
    if (null == this.heartbeatInterval || null == this.heartbeater) return;
    let e = this.lastHeartbeatTime;
    null != e && Date.now() - e > this.heartbeatInterval + 5e3 && this._sendHeartbeat()
  }
  _doHeartbeatInterval() {
    this.heartbeatAck ? (this.heartbeatAck = false, this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout()
  }
  _startHeartbeater() {
    let {
      heartbeatInterval: e
    } = this;
    i()(null != e, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), this.initialHeartbeatTimeout = setTimeout(() => {
      this.initialHeartbeatTimeout = null, this.heartbeatAck = true, this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), e), this._doHeartbeatInterval()
    }, Math.floor(Math.random() * e))
  }
  _stopHeartbeater() {
    null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), this.initialHeartbeatTimeout = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
  }
  _clearHelloTimeout() {
    null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
  }
  _cleanup(e) {
    u.Ay.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
    let t = this.webSocket;
    this.webSocket = null, null != t && (t.onopen = q, t.onmessage = q, t.onerror = q, t.onclose = q, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = (0, w.Z)(W)
  }
  _doResume() {
    var e;
    this.connectionState = C.A.RESUMING, this.dispatcher.resumeAnalytics = (0, D.Qo)(Date.now() - this.connectionStartTime), Y.info("[RESUME] resuming session ".concat(null != (e = this.sessionId) ? e : "", ", seq: ").concat(this.seq)), this.send(L.p.RESUME, {
      token: this.token,
      session_id: this.sessionId,
      seq: this.seq
    }, false)
  }
  async _doIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) return void this._handleClose(true, J, "No connection info provided");
    this.connectionState = C.A.IDENTIFYING;
    let t = Date.now();
    this.identifyStartTime = t;
    let [n, r, i] = await Promise.all([(0, g.O)() ? p.A.getCommittedVersions() : {}, (0, g.O)() ? h.A.getCommittedVersions() : {}, !!(0, g.O)() && _.A.canUseGuildVersions()]), s = i ? {
      guild_versions: n,
      highest_last_message_id: r.highest_last_message_id,
      read_state_version: r.read_state_version,
      user_guild_settings_version: r.user_guild_settings_version,
      user_settings_version: r.user_settings_version,
      private_channels_version: r.private_channels_version,
      api_code_version: r.api_code_version,
      initial_guild_id: r.initial_guild_id
    } : {
      guild_versions: {}
    };
    if (this.connectionState !== C.A.IDENTIFYING || this.identifyStartTime !== t) return void Y.warn("Skipping identify because connectionState or identifyStartTime has changed");
    let {
      token: o,
      properties: l = {},
      presence: c
    } = e;
    this.token = o, Y.verbose("[IDENTIFY]");
    let u = {
        token: o,
        capabilities: (0, N.O)({
          useChannelObfuscation: (0, M.RK)("GatewaySocket")
        }),
        properties: l,
        presence: c,
        compress: this.compressionHandler.usesLegacyCompression(),
        client_state: s
      },
      d = JSON.stringify(u);
    this.identifyUncompressedByteSize = d.length, this.identifyCompressedByteSize = a.deflate(d).length, this.identifyCount += 1, this.send(L.p.IDENTIFY, u, false), v.default.track(G.HAw.SESSION_START_CLIENT, {})
  }
  _doFastConnectIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) return void this._handleClose(true, J, "No connection info provided");
    let {
      token: t
    } = e;
    this.token = t, this.connectionState = C.A.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, Y.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
  }
  _doResumeOrIdentify() {
    let e = Date.now();
    null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= ee) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
  }
  _updateLastHeartbeatAckTime() {
    this.lastHeartbeatAckTime = Date.now()
  }
  _consumeQOSPayload() {
    var e;
    let t = this.heartbeatQOSState.currentPayload;
    return this.heartbeatQOSState.currentPayload = null != (e = this.heartbeatQOSState.upcomingState) ? e : this.heartbeatQOSState.currentPayload, this.heartbeatQOSState.upcomingState = null, t
  }
  _sendHeartbeat() {
    let e = this._consumeQOSPayload();
    this.send(L.p.QOS_HEARTBEAT, {
      seq: this.seq,
      qos: e
    }, false), this.lastHeartbeatTime = Date.now()
  }
  getLogger() {
    return Y
  }
  willReconnect() {
    return this.connectionState === C.A.WILL_RECONNECT
  }
  isClosed() {
    return this.connectionState === C.A.CLOSED
  }
  isSessionEstablished() {
    return this.connectionState === C.A.SESSION_ESTABLISHED || this.connectionState === C.A.RESUMING
  }
  isConnected() {
    return this.connectionState === C.A.IDENTIFYING || this.connectionState === C.A.RESUMING || this.connectionState === C.A.SESSION_ESTABLISHED
  }
  connect() {
    return this.isClosed() ? (Y.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = C.A.WILL_RECONNECT, this._connect("connect"), true) : (Y.error("Cannot start a new connection, connection state is not closed"), false)
  }
  resetSocketOnError(e) {
    let {
      action: t,
      error: n,
      metricAction: r
    } = e;
    Y.error("resetSocketOnError during ".concat(t, ": ").concat(n.message), n.stack);
    let i = (0, c.b)();
    y.A.increment({
      name: l.K.SOCKET_CRASHED,
      tags: ["action:".concat(null != r ? r : t), "modded_client:".concat(i)]
    }, true), false !== e.sentry && T.A.captureException(n, {
      tags: {
        socketCrashedAction: t
      }
    }), v.default.track(G.HAw.GATEWAY_SOCKET_RESET, {
      error_message: n.message,
      error_stack: n.stack,
      has_client_mods: i,
      action: t
    }), this._cleanup(e => e.close()), this._reset(true, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = C.A.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel();
    let a = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
    0 === this.dispatchExceptionBackoff._fails ? (Y.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect("resetSocketOnErrorImmediate"), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect("resetSocketOnError")), a && (this.didForceClearGuildHashes = true, f.h.dispatch({
      type: "CLEAR_CACHES",
      reason: "Socket reset during ".concat(t)
    })), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * et)
  }
  resetSocketOnDispatchError(e) {
    let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
    this.resetSocketOnError(H(F({}, e), {
      sentry: !t,
      clearCache: t
    }))
  }
  close() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    if (this.isClosed()) return void Y.verbose("close() called, but socket is already closed.");
    Y.info("Closing connection, current state is ".concat(this.connectionState));
    let t = e ? 4e3 : true;
    this._cleanup(e => e.close(t)), this.connectionState = C.A.CLOSED, e || setImmediate(() => {
      this._reset(true, 1e3, "Disconnect requested by user")
    })
  }
  networkStateChange(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    k.DQ() || K({
      reason: t,
      actuallySkipped: false
    }), this.expeditedHeartbeat(e, t, n, false)
  }
  expeditedHeartbeat(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "",
      n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
    if (!this.isClosed()) {
      if (this.isConnected()) {
        Y.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = false, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
          this.expeditedHeartbeatTimeout = null, false === this.heartbeatAck && this._handleHeartbeatTimeout()
        }, e);
        return
      }
      n ? this.resetBackoff(t, r) : Y.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
    }
  }
  resetBackoff() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
      t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    Y.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = true, this.willReconnect() ? this._connect(e) : t && this.connectionState !== C.A.SESSION_ESTABLISHED && this._handleClose(true, 0, e)
  }
  constructor() {
    super(), V(this, "gatewayBackoff", true), V(this, "handleIdentify", true), V(this, "dispatchExceptionBackoff", new o.A(1e3, et)), V(this, "dispatchSuccessTimer", 0), V(this, "connectionState_", true), V(this, "webSocket", true), V(this, "seq", true), V(this, "sessionId", true), V(this, "token", true), V(this, "initialHeartbeatTimeout", true), V(this, "expeditedHeartbeatTimeout", true), V(this, "heartbeatInterval", true), V(this, "helloTimeout", true), V(this, "heartbeater", true), V(this, "lastHeartbeatTime", true), V(this, "lastHeartbeatAckTime", true), V(this, "heartbeatAck", true), V(this, "connectionStartTime", true), V(this, "identifyStartTime", true), V(this, "nextReconnectIsImmediate", true), V(this, "compressionHandler", true), V(this, "hasConnectedOnce", true), V(this, "isFastConnect", true), V(this, "didForceClearGuildHashes", false), V(this, "identifyUncompressedByteSize", 0), V(this, "identifyCompressedByteSize", 0), V(this, "analytics", {}), V(this, "identifyCount", 0), V(this, "resumeUrl", null), V(this, "iosGoingAwayEventCount", 0), V(this, "dispatcher", true), V(this, "heartbeatQOSState", {
      currentPayload: null,
      upcomingState: null
    }), V(this, "send", (e, t, n) => {
      O.default.isLoggingGatewayEvents && Y.verboseDangerously("~>", e, t);
      let r = W.pack({
        op: e,
        d: t
      });
      if (!n || this.isSessionEstablished()) try {
        null != this.webSocket && this.webSocket.send(r)
      } catch (e) {} else Y.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
    }), this.dispatcher = new x.A(this), this.gatewayBackoff = new o.A(1e3, 6e4), this.connectionState_ = C.A.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatTime = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = true, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = false, this.compressionHandler = (0, w.Z)(W), this.hasConnectedOnce = false, this.isFastConnect = false, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
  }
}