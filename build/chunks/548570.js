/** Chunk was on web.js **/
/** chunk id: 548570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ea
}), require("./388685.js"), require("./642613.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./539854.js"), require("./49124.js"), require("./358797.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk457854 = require("./457854.js"),
  Chunk135273 = require("./135273.js"),
  Chunk261470 = require("./261470.js"),
  Chunk286379 = require("./286379.js"),
  Chunk903772 = require("./903772.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk406966 = require("./406966.js"),
  Chunk795513 = require("./795513.js"),
  Chunk266750 = require("./266750.js"),
  Chunk15624 = require("./15624.js"),
  Chunk768433 = require("./768433.js"),
  Chunk710845 = require("./710845.js"),
  Chunk797614 = require("./797614.js"),
  Chunk218543 = require("./218543.js"),
  Chunk857192 = require("./857192.js"),
  Chunk626135 = require("./626135.js"),
  Chunk12647 = require("./12647.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk138859 = require("./138859.js"),
  Chunk14639 = require("./14639.js"),
  Chunk639655 = require("./639655.js"),
  Chunk249308 = require("./249308.js"),
  Chunk610308 = require("./610308.js"),
  Chunk91247 = require("./91247.js"),
  Chunk508569 = require("./508569.js"),
  Chunk183139 = require("./183139.js"),
  Chunk645436 = require("./645436.js"),
  Chunk742151 = require("./742151.js"),
  Chunk866483 = require("./866483.js"),
  Chunk833508 = require("./833508.js"),
  Chunk981631 = require("./981631.js");

function Z(e, t, n) {
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
      Z(e, t, n[t])
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

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let H = new Chunk710845.Z("GatewaySocket"),
  Y = new Chunk610308.Z;

function W(e) {
  let {
    actuallySkipped: t,
    reason: n
  } = e;
  if (!(0, w.n)()) return;
  let r = j.a(),
    i = k.Pf(),
    a = m.Z.getState(),
    o = i.length > 0 ? "".concat(n, " + ").concat(i) : n,
    s = r ? "paused" : "request_state";
  v.default.track(G.rMx.GATEWAY_CONNECT_SKIPPED, {
    actually_skipped: null != t ? t : r,
    client_app_state: a,
    connect_reason: o,
    skip_context: s
  }), (0, w.L)() && setTimeout(() => {
    v.default.track(G.rMx.POST_GATEWAY_CONNECT_SKIPPED, {
      actually_skipped: null != t ? t : r,
      original_client_app_state: a,
      client_app_state: m.Z.getState(),
      skip_context: s,
      original_connect_reason: o,
      gateway_connect_reasons: k.Pf()
    })
  }, 200)
}

function K(e) {
  let t, {
    gatewayURL: n,
    newCallback: r,
    onOpen: i,
    onMessage: a,
    onError: o,
    onClose: s
  } = e;
  H.enableNativeLogger(true);
  let l = window._ws,
    c = false,
    u = false,
    d = null,
    f = null;
  if (window._ws = null, null != l)
    if (t = l.ws, l.state.gateway !== n) H.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(l.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
    else {
      var p;
      let e = F({}, l.state);
      null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? V(F({}, e), {
        data: e.data.substring(0, 100)
      }) : e)), H.log("[FAST CONNECT] successfully took over websocket, state:", V(F({}, e), {
        messages: null == (p = e.messages) ? true : p.length
      })), c = l.state.open, u = l.state.identify, d = l.state.messages, f = l.state.clientState
    } null == t && ((t = (0, U.Z)(n)).binaryType = "arraybuffer"), r(t), c && i(u, f), null != d && d.forEach(a), t.onopen = () => i(u, f), t.onmessage = a, t.onclose = s, t.onerror = o
}

function z() {}
let q = 4,
  Q = 1001,
  X = "Stream end encountered",
  J = 4004,
  $ = 30 * Chunk70956.Z.Millis.SECOND,
  ee = 3 * Chunk70956.Z.Millis.MINUTE,
  et = +Chunk70956.Z.Millis.MINUTE;

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
class ea extends Chunk183139.Z {
  get connectionState() {
    return this.connectionState_
  }
  set connectionState(e) {
    H.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
  }
  addAnalytics(e) {
    this.analytics = F({}, this.analytics, e)
  }
  setResumeUrl(e) {
    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && H.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
  }
  handleActiveStateChange(e) {
    var t;
    let n = !(null == (t = this.heartbeatQOSState.currentPayload) ? true : t.active);
    null == this.heartbeatQOSState.currentPayload && (this.heartbeatQOSState.currentPayload = e);
    let r = this.heartbeatQOSState.currentPayload;
    e.active && (r.active = true, r.reasons = [...new Set([...r.reasons, ...e.reasons])].sort(), n && this.isSessionEstablished() && this._sendHeartbeat()), this.heartbeatQOSState.upcomingState = e
  }
  handleUpdateTimeSpentSessionId(e, t, n) {
    this.connectionState_ === A.Z.SESSION_ESTABLISHED && (this.send(L.j.UPDATE_TIME_SPENT_SESSION_ID, {
      initialization_timestamp: e,
      session_id: t,
      client_launch_id: n
    }), this._sendHeartbeat())
  }
  _connect(e) {
    if (!this.willReconnect()) return void H.verbose("Skipping _connect because willReconnect is false");
    let t = j.a();
    if ((t || !k.RZ()) && (H.info("Skipping _connect because socket is paused"), W({
        reason: e
      }), t)) return;
    this.connectionState = A.Z.CONNECTING, this.nextReconnectIsImmediate = false;
    let n = this.compressionHandler.getAlgorithm(),
      r = Y.getName(),
      i = this._getGatewayUrl(),
      a = window.GLOBAL_ENV.API_VERSION;
    o.Z.mark("\uD83C\uDF10", "Socket._connect"), H.info("[CONNECT] ".concat(i, ", ") + "encoding: ".concat(r, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != n ? n : "none")), null !== this.webSocket && (H.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
      let e = Date.now() - this.connectionStartTime;
      this._handleClose(false, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
    }, $);
    let s = new URL(i);
    s.searchParams.append("encoding", r), s.searchParams.append("v", a.toString()), null != n && s.searchParams.append("compress", n), K({
      gatewayURL: s.toString(),
      newCallback: e => {
        this.webSocket = e, this.compressionHandler.bindWebSocket(e)
      },
      onOpen: e => {
        o.Z.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
        let t = Date.now() - this.connectionStartTime;
        H.info("[CONNECTED] ".concat(s.toString(), " in ").concat(t, " ms")), this.isFastConnect = e, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
      },
      onMessage: en(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
        let n = Date.now(),
          {
            op: r,
            s: i,
            t: a,
            d: s
          } = Y.unpack(e);
        if (r !== L.j.DISPATCH && o.Z.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(r, " ").concat(L.j[r])), O.default.isLoggingGatewayEvents) {
          let e = [r];
          r === L.j.DISPATCH && e.push(a), e.push(s), H.verboseDangerously("<~", ...e)
        }
        let l = Date.now() - n;
        switch ("READY" === a ? y.Z.parseReady.set(n, l) : "READY_SUPPLEMENTAL" === a ? y.Z.parseReadySupplemental.set(n, l) : l > 10 && o.Z.mark("\uD83C\uDF10", "Parse " + a, l), null != i && (this.seq = i), r) {
          case L.j.HELLO:
            this._clearHelloTimeout(), this._handleHello(s);
            break;
          case L.j.RECONNECT:
            this._handleReconnect();
            break;
          case L.j.INVALID_SESSION:
            this._handleInvalidSession(s);
            break;
          case L.j.HEARTBEAT:
            this._handleHeartbeatReceive();
            break;
          case L.j.HEARTBEAT_ACK:
            this._handleHeartbeatAck(s);
            break;
          case L.j.DISPATCH:
            this._handleDispatch(s, a, "READY" === a ? {
              compressed_byte_size: t,
              uncompressed_byte_size: er(e),
              compression_algorithm: this.compressionHandler.getAlgorithm(),
              packing_algorithm: Y.getName(),
              unpack_duration_ms: l
            } : null);
            break;
          default:
            H.info("Unhandled op ".concat(r))
        }
        this._sendHeartbeatIfDue()
      }),
      onError: () => {
        this.setResumeUrl(null), S.Z.flushDNSCache(), this._handleClose(false, 0, "An error with the websocket occurred")
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
    H.verbose("[HELLO] via ".concat((0, D.TO)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
  }
  _handleReconnect() {
    H.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = A.Z.WILL_RECONNECT, this._connect("reconnect")
  }
  _handleInvalidSession(e) {
    H.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
  }
  _handleDispatch(e, t, n) {
    let r = Date.now() - this.connectionStartTime;
    if ("READY" === t) {
      let t = e.session_id;
      this.sessionId = t;
      let n = (0, D.TO)(e);
      o.Z.setServerTrace(n), H.info("[READY] took ".concat(r, "ms, as ").concat(t)), H.verbose("".concat(n)), this.connectionState = A.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
    } else "READY_SUPPLEMENTAL" === t ? (H.info("[READY_SUPPLEMENTAL] took ".concat(r, "ms")), this.connectionState = A.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (H.verbose((0, D.TO)(e)), this.connectionState = A.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
    this.dispatcher.receiveDispatch(e, t, n)
  }
  handleResumeDispatched() {
    let e = Date.now() - this.connectionStartTime;
    H.info("[RESUMED] took ".concat(e, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
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
    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = true, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, H.verbose("Expedited heartbeat succeeded"))
  }
  _handleHeartbeatTimeout() {
    this._cleanup(e => e.close(4e3)), this.connectionState = A.Z.WILL_RECONNECT;
    let e = this.gatewayBackoff.fail(() => this._connect("_handleHeartbeatTimeout"));
    H.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
  }
  _handleClose(e, t, n) {
    if (e = e || false, this._cleanup(), this.emit("close", {
        code: t,
        reason: n
      }), t === J) return this.connectionState = A.Z.CLOSED, H.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
    if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = A.Z.WILL_RECONNECT, this.nextReconnectIsImmediate) H.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect("_handleCloseImmediateReconnect");
    else {
      let r = this.gatewayBackoff.fail(() => this._connect("_handleClose:".concat(n)));
      H.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((r / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > q && this._reset(e, t, n)
    }
  }
  _tryDetectInvalidIOSToken(e, t, n) {
    (0, T.isIOS)() && null != this.token && e === Q && t === X && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && d.tn.get({
      url: G.ANM.ME,
      headers: {
        authorization: this.token
      },
      rejectWithError: false
    }).then(e => {
      let {
        status: t
      } = e;
      v.default.track(G.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }, e => {
      let {
        status: t
      } = e;
      401 === t && (this.connectionState = A.Z.CLOSED, H.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, J, "invalid token manually detected")), v.default.track(G.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }))
  }
  _reset(e, t, n) {
    this.sessionId = null, this.seq = 0, H.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
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
    u.ZP.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
    let t = this.webSocket;
    this.webSocket = null, null != t && (t.onopen = z, t.onmessage = z, t.onerror = z, t.onclose = z, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = (0, P.I)(Y)
  }
  _doResume() {
    var e;
    this.connectionState = A.Z.RESUMING, this.dispatcher.resumeAnalytics = (0, D.zH)(Date.now() - this.connectionStartTime), H.info("[RESUME] resuming session ".concat(null != (e = this.sessionId) ? e : "", ", seq: ").concat(this.seq)), this.send(L.j.RESUME, {
      token: this.token,
      session_id: this.sessionId,
      seq: this.seq
    }, false)
  }
  async _doIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) return void this._handleClose(true, J, "No connection info provided");
    this.connectionState = A.Z.IDENTIFYING;
    let t = Date.now();
    this.identifyStartTime = t;
    let [n, r, i] = await Promise.all([(0, g.O)() ? p.Z.getCommittedVersions() : {}, (0, g.O)() ? h.Z.getCommittedVersions() : {}, !!(0, g.O)() && _.Z.canUseGuildVersions()]), o = i ? {
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
    if (this.connectionState !== A.Z.IDENTIFYING || this.identifyStartTime !== t) return void H.warn("Skipping identify because connectionState or identifyStartTime has changed");
    let {
      token: s,
      properties: l = {},
      presence: c
    } = e;
    this.token = s, H.verbose("[IDENTIFY]");
    let u = {
        token: s,
        capabilities: (0, N.t)({
          useChannelObfuscation: (0, M.n)()
        }),
        properties: l,
        presence: c,
        compress: this.compressionHandler.usesLegacyCompression(),
        client_state: o
      },
      d = JSON.stringify(u);
    this.identifyUncompressedByteSize = d.length, this.identifyCompressedByteSize = a.deflate(d).length, this.identifyCount += 1, this.send(L.j.IDENTIFY, u, false), v.default.track(G.rMx.SESSION_START_CLIENT, {})
  }
  _doFastConnectIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) return void this._handleClose(true, J, "No connection info provided");
    let {
      token: t
    } = e;
    this.token = t, this.connectionState = A.Z.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, H.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
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
    this.send(L.j.QOS_HEARTBEAT, {
      seq: this.seq,
      qos: e
    }, false), this.lastHeartbeatTime = Date.now()
  }
  getLogger() {
    return H
  }
  willReconnect() {
    return this.connectionState === A.Z.WILL_RECONNECT
  }
  isClosed() {
    return this.connectionState === A.Z.CLOSED
  }
  isSessionEstablished() {
    return this.connectionState === A.Z.SESSION_ESTABLISHED || this.connectionState === A.Z.RESUMING
  }
  isConnected() {
    return this.connectionState === A.Z.IDENTIFYING || this.connectionState === A.Z.RESUMING || this.connectionState === A.Z.SESSION_ESTABLISHED
  }
  connect() {
    return this.isClosed() ? (H.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = A.Z.WILL_RECONNECT, this._connect("connect"), true) : (H.error("Cannot start a new connection, connection state is not closed"), false)
  }
  resetSocketOnError(e) {
    let {
      action: t,
      error: n,
      metricAction: r
    } = e;
    H.error("resetSocketOnError during ".concat(t, ": ").concat(n.message), n.stack);
    let i = (0, c.e)();
    b.Z.increment({
      name: l.V.SOCKET_CRASHED,
      tags: ["action:".concat(null != r ? r : t), "modded_client:".concat(i)]
    }, true), false !== e.sentry && C.Z.captureException(n, {
      tags: {
        socketCrashedAction: t
      }
    }), v.default.track(G.rMx.GATEWAY_SOCKET_RESET, {
      error_message: n.message,
      error_stack: n.stack,
      has_client_mods: i,
      action: t
    }), this._cleanup(e => e.close()), this._reset(true, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = A.Z.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel();
    let a = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
    0 === this.dispatchExceptionBackoff._fails ? (H.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect("resetSocketOnErrorImmediate"), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect("resetSocketOnError")), a && (this.didForceClearGuildHashes = true, f.Z.dispatch({
      type: "CLEAR_CACHES",
      reason: "Socket reset during ".concat(t)
    })), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * et)
  }
  resetSocketOnDispatchError(e) {
    let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
    this.resetSocketOnError(V(F({}, e), {
      sentry: !t,
      clearCache: t
    }))
  }
  close() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    if (this.isClosed()) return void H.verbose("close() called, but socket is already closed.");
    H.info("Closing connection, current state is ".concat(this.connectionState));
    let t = e ? 4e3 : true;
    this._cleanup(e => e.close(t)), this.connectionState = A.Z.CLOSED, e || setImmediate(() => {
      this._reset(true, 1e3, "Disconnect requested by user")
    })
  }
  networkStateChange(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    k.RZ() || W({
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
        H.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = false, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
          this.expeditedHeartbeatTimeout = null, false === this.heartbeatAck && this._handleHeartbeatTimeout()
        }, e);
        return
      }
      n ? this.resetBackoff(t, r) : H.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
    }
  }
  resetBackoff() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
      t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    H.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = true, this.willReconnect() ? this._connect(e) : t && this.connectionState !== A.Z.SESSION_ESTABLISHED && this._handleClose(true, 0, e)
  }
  constructor() {
    super(), Z(this, "gatewayBackoff", true), Z(this, "handleIdentify", true), Z(this, "dispatchExceptionBackoff", new s.Z(1e3, et)), Z(this, "dispatchSuccessTimer", 0), Z(this, "connectionState_", true), Z(this, "webSocket", true), Z(this, "seq", true), Z(this, "sessionId", true), Z(this, "token", true), Z(this, "initialHeartbeatTimeout", true), Z(this, "expeditedHeartbeatTimeout", true), Z(this, "heartbeatInterval", true), Z(this, "helloTimeout", true), Z(this, "heartbeater", true), Z(this, "lastHeartbeatTime", true), Z(this, "lastHeartbeatAckTime", true), Z(this, "heartbeatAck", true), Z(this, "connectionStartTime", true), Z(this, "identifyStartTime", true), Z(this, "nextReconnectIsImmediate", true), Z(this, "compressionHandler", true), Z(this, "hasConnectedOnce", true), Z(this, "isFastConnect", true), Z(this, "didForceClearGuildHashes", false), Z(this, "identifyUncompressedByteSize", 0), Z(this, "identifyCompressedByteSize", 0), Z(this, "analytics", {}), Z(this, "identifyCount", 0), Z(this, "resumeUrl", null), Z(this, "iosGoingAwayEventCount", 0), Z(this, "dispatcher", true), Z(this, "heartbeatQOSState", {
      currentPayload: null,
      upcomingState: null
    }), Z(this, "send", (e, t, n) => {
      O.default.isLoggingGatewayEvents && H.verboseDangerously("~>", e, t);
      let r = Y.pack({
        op: e,
        d: t
      });
      if (!n || this.isSessionEstablished()) try {
        null != this.webSocket && this.webSocket.send(r)
      } catch (e) {} else H.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
    }), this.dispatcher = new x.Z(this), this.gatewayBackoff = new s.Z(1e3, 6e4), this.connectionState_ = A.Z.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatTime = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = true, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = false, this.compressionHandler = (0, P.I)(Y), this.hasConnectedOnce = false, this.isFastConnect = false, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
  }
}