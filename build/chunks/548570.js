/** Chunk was on web.js **/
/** chunk id: 548570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ei
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
  Chunk866483 = require("./866483.js"),
  Chunk833508 = require("./833508.js"),
  Chunk981631 = require("./981631.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = new Chunk710845.Z("GatewaySocket"),
  H = new Chunk610308.Z;

function Y(e) {
  let {
    actuallySkipped: t,
    reason: n
  } = e;
  if (!(0, P.n)()) return;
  let r = M.a(),
    i = k.Pf(),
    a = m.Z.getState(),
    o = i.length > 0 ? "".concat(n, " + ").concat(i) : n,
    s = r ? "paused" : "request_state";
  v.default.track(U.rMx.GATEWAY_CONNECT_SKIPPED, {
    actually_skipped: null != t ? t : r,
    client_app_state: a,
    connect_reason: o,
    skip_context: s
  }), (0, P.L)() && setTimeout(() => {
    v.default.track(U.rMx.POST_GATEWAY_CONNECT_SKIPPED, {
      actually_skipped: null != t ? t : r,
      original_client_app_state: a,
      client_app_state: m.Z.getState(),
      skip_context: s,
      original_connect_reason: o,
      gateway_connect_reasons: k.Pf()
    })
  }, 200)
}

function W(e) {
  let t, {
    gatewayURL: n,
    newCallback: r,
    onOpen: i,
    onMessage: a,
    onError: o,
    onClose: s
  } = e;
  V.enableNativeLogger(true);
  let l = window._ws,
    c = false,
    u = false,
    d = null,
    f = null;
  if (window._ws = null, null != l)
    if (t = l.ws, l.state.gateway !== n) V.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(l.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
    else {
      var _;
      let e = B({}, l.state);
      null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? F(B({}, e), {
        data: e.data.substring(0, 100)
      }) : e)), V.log("[FAST CONNECT] successfully took over websocket, state:", F(B({}, e), {
        messages: null == (_ = e.messages) ? true : _.length
      })), c = l.state.open, u = l.state.identify, d = l.state.messages, f = l.state.clientState
    } null == t && ((t = (0, j.Z)(n)).binaryType = "arraybuffer"), r(t), c && i(u, f), null != d && d.forEach(a), t.onopen = () => i(u, f), t.onmessage = a, t.onclose = s, t.onerror = o
}

function K() {}
let z = 4,
  q = 1001,
  X = "Stream end encountered",
  Q = 4004,
  J = 30 * Chunk70956.Z.Millis.SECOND,
  $ = 3 * Chunk70956.Z.Millis.MINUTE,
  ee = +Chunk70956.Z.Millis.MINUTE;

function et(e, t, n) {
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
    null != n.raw_length ? r += n.raw_length : r += en(a);
    try {
      e.feed(a)
    } catch (e) {
      throw i || (i = true, t(false, 0, "A decompression error occurred")), e
    }
  }
}

function en(e) {
  return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
}
let er = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class ei extends Chunk183139.Z {
  get connectionState() {
    return this.connectionState_
  }
  set connectionState(e) {
    V.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
  }
  addAnalytics(e) {
    this.analytics = B({}, this.analytics, e)
  }
  setResumeUrl(e) {
    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && V.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
  }
  handleActiveStateChange(e) {
    var t;
    let n = !(null == (t = this.heartbeatQOSState.currentPayload) ? true : t.active);
    null == this.heartbeatQOSState.currentPayload && (this.heartbeatQOSState.currentPayload = e);
    let r = this.heartbeatQOSState.currentPayload;
    e.active && (r.active = true, r.reasons = [...new Set([...r.reasons, ...e.reasons])].sort(), n && this.isSessionEstablished() && this._sendHeartbeat()), this.heartbeatQOSState.upcomingState = e
  }
  handleUpdateTimeSpentSessionId(e, t, n) {
    this.connectionState_ === C.Z.SESSION_ESTABLISHED && (this.send(x.j.UPDATE_TIME_SPENT_SESSION_ID, {
      initialization_timestamp: e,
      session_id: t,
      client_launch_id: n
    }), this._sendHeartbeat())
  }
  _connect(e) {
    if (!this.willReconnect()) return void V.verbose("Skipping _connect because willReconnect is false");
    let t = M.a();
    if ((t || !k.RZ()) && (V.info("Skipping _connect because socket is paused"), Y({
        reason: e
      }), t)) return;
    this.connectionState = C.Z.CONNECTING, this.nextReconnectIsImmediate = false;
    let n = this.compressionHandler.getAlgorithm(),
      r = H.getName(),
      i = this._getGatewayUrl(),
      a = window.GLOBAL_ENV.API_VERSION;
    o.Z.mark("\uD83C\uDF10", "Socket._connect"), V.info("[CONNECT] ".concat(i, ", ") + "encoding: ".concat(r, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != n ? n : "none")), null !== this.webSocket && (V.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
      let e = Date.now() - this.connectionStartTime;
      this._handleClose(false, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
    }, J);
    let s = new URL(i);
    s.searchParams.append("encoding", r), s.searchParams.append("v", a.toString()), null != n && s.searchParams.append("compress", n), W({
      gatewayURL: s.toString(),
      newCallback: e => {
        this.webSocket = e, this.compressionHandler.bindWebSocket(e)
      },
      onOpen: e => {
        o.Z.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
        let t = Date.now() - this.connectionStartTime;
        V.info("[CONNECTED] ".concat(s.toString(), " in ").concat(t, " ms")), this.isFastConnect = e, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
      },
      onMessage: et(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
        let n = Date.now(),
          {
            op: r,
            s: i,
            t: a,
            d: s
          } = H.unpack(e);
        if (r !== x.j.DISPATCH && o.Z.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(r, " ").concat(x.j[r])), O.default.isLoggingGatewayEvents) {
          let e = [r];
          r === x.j.DISPATCH && e.push(a), e.push(s), V.verboseDangerously("<~", ...e)
        }
        let l = Date.now() - n;
        switch ("READY" === a ? y.Z.parseReady.set(n, l) : "READY_SUPPLEMENTAL" === a ? y.Z.parseReadySupplemental.set(n, l) : l > 10 && o.Z.mark("\uD83C\uDF10", "Parse " + a, l), null != i && (this.seq = i), r) {
          case x.j.HELLO:
            this._clearHelloTimeout(), this._handleHello(s);
            break;
          case x.j.RECONNECT:
            this._handleReconnect();
            break;
          case x.j.INVALID_SESSION:
            this._handleInvalidSession(s);
            break;
          case x.j.HEARTBEAT:
            this._handleHeartbeatReceive();
            break;
          case x.j.HEARTBEAT_ACK:
            this._handleHeartbeatAck(s);
            break;
          case x.j.DISPATCH:
            this._handleDispatch(s, a, "READY" === a ? {
              compressed_byte_size: t,
              uncompressed_byte_size: en(e),
              compression_algorithm: this.compressionHandler.getAlgorithm(),
              packing_algorithm: H.getName(),
              unpack_duration_ms: l
            } : null);
            break;
          default:
            V.info("Unhandled op ".concat(r))
        }
        this._sendHeartbeatIfDue()
      }),
      onError: () => {
        this.setResumeUrl(null), I.Z.flushDNSCache(), this._handleClose(false, 0, "An error with the websocket occurred")
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
    V.verbose("[HELLO] via ".concat((0, D.TO)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
  }
  _handleReconnect() {
    V.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = Chunk138859.Z.WILL_RECONNECT, this._connect("reconnect")
  }
  _handleInvalidSession(e) {
    V.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
  }
  _handleDispatch(e, t, n) {
    let r = Date.now() - this.connectionStartTime;
    if ("READY" === t) {
      let t = e.session_id;
      this.sessionId = t;
      let n = (0, D.TO)(e);
      o.Z.setServerTrace(n), V.info("[READY] took ".concat(r, "ms, as ").concat(t)), V.verbose("".concat(n)), this.connectionState = C.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
    } else "READY_SUPPLEMENTAL" === t ? (V.info("[READY_SUPPLEMENTAL] took ".concat(r, "ms")), this.connectionState = C.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (V.verbose((0, D.TO)(e)), this.connectionState = C.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
    this.dispatcher.receiveDispatch(e, t, n)
  }
  handleResumeDispatched() {
    let e = Date.now() - this.connectionStartTime;
    V.info("[RESUMED] took ".concat(module, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
  }
  handleReadyDispatched() {
    this.didForceClearGuildHashes = false, this.hasConnectedOnce = true
  }
  _getGatewayUrl() {
    return null != this.resumeUrl ? this.resumeUrl : er
  }
  _handleHeartbeatReceive() {
    this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval))
  }
  _handleHeartbeatAck(e) {
    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = true, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, V.verbose("Expedited heartbeat succeeded"))
  }
  _handleHeartbeatTimeout() {
    this._cleanup(e => e.close(4e3)), this.connectionState = Chunk138859.Z.WILL_RECONNECT;
    let e = this.gatewayBackoff.fail(() => this._connect("_handleHeartbeatTimeout"));
    V.warn("[ACK TIMEOUT] reconnecting in ".concat((module / 1e3).toFixed(2), " seconds."))
  }
  _handleClose(e, t, n) {
    if (e = e || false, this._cleanup(), this.emit("close", {
        code: t,
        reason: n
      }), t === Q) return this.connectionState = C.Z.CLOSED, V.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
    if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = C.Z.WILL_RECONNECT, this.nextReconnectIsImmediate) V.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect("_handleCloseImmediateReconnect");
    else {
      let r = this.gatewayBackoff.fail(() => this._connect("_handleClose:".concat(n)));
      V.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((r / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > z && this._reset(e, t, n)
    }
  }
  _tryDetectInvalidIOSToken(e, t, n) {
    (0, S.isIOS)() && null != this.token && e === q && t === X && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && d.tn.get({
      url: U.ANM.ME,
      headers: {
        authorization: this.token
      },
      rejectWithError: false
    }).then(e => {
      let {
        status: t
      } = e;
      v.default.track(U.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }, e => {
      let {
        status: t
      } = e;
      401 === t && (this.connectionState = C.Z.CLOSED, V.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, Q, "invalid token manually detected")), v.default.track(U.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }))
  }
  _reset(e, t, n) {
    this.sessionId = null, this.seq = 0, V.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
      wasClean: e,
      code: t,
      reason: n
    })
  }
  _sendHeartbeatIfDue() {
    if (null == this.heartbeatInterval || null == this.heartbeater) return;
    let e = this.lastHeartbeatTime;
    null != module && Date.now() - module > this.heartbeatInterval + 5e3 && this._sendHeartbeat()
  }
  _doHeartbeatInterval() {
    this.heartbeatAck ? (this.heartbeatAck = false, this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout()
  }
  _startHeartbeater() {
    let {
      heartbeatInterval: e
    } = this;
    i()(null != module, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), this.initialHeartbeatTimeout = setTimeout(() => {
      this.initialHeartbeatTimeout = null, this.heartbeatAck = true, this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), module), this._doHeartbeatInterval()
    }, Math.floor(Math.random() * module))
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
    this.webSocket = null, null != t && (t.onopen = K, t.onmessage = K, t.onerror = K, t.onclose = K, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = (0, R.I)(H)
  }
  _doResume() {
    var e;
    this.connectionState = Chunk138859.Z.RESUMING, this.dispatcher.resumeAnalytics = (0, Chunk91247.zH)(Date.now() - this.connectionStartTime), V.info("[RESUME] resuming session ".concat(null != (e = this.sessionId) ? module : "", ", seq: ").concat(this.seq)), this.send(Chunk183139.j.RESUME, {
      token: this.token,
      session_id: this.sessionId,
      seq: this.seq
    }, false)
  }
  async _doIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === module) return void this._handleClose(true, Q, "No connection info provided");
    this.connectionState = Chunk138859.Z.IDENTIFYING;
    let t = Date.now();
    this.identifyStartTime = exports;
    let [n, r, i] = await Promise.all([(0, Chunk768433.O)() ? Chunk406966.Z.getCommittedVersions() : {}, (0, Chunk768433.O)() ? Chunk266750.Z.getCommittedVersions() : {}, !!(0, Chunk768433.O)() && Chunk795513.Z.canUseGuildVersions()]), o = i ? {
      guild_versions: require,
      highest_last_message_id: Chunk512722.highest_last_message_id,
      read_state_version: Chunk512722.read_state_version,
      user_guild_settings_version: Chunk512722.user_guild_settings_version,
      user_settings_version: Chunk512722.user_settings_version,
      private_channels_version: Chunk512722.private_channels_version,
      api_code_version: Chunk512722.api_code_version,
      initial_guild_id: Chunk512722.initial_guild_id
    } : {
      guild_versions: {}
    };
    if (this.connectionState !== Chunk138859.Z.IDENTIFYING || this.identifyStartTime !== exports) return void V.warn("Skipping identify because connectionState or identifyStartTime has changed");
    let {
      token: s,
      properties: l = {},
      presence: c
    } = module;
    this.token = Chunk261470, V.verbose("[IDENTIFY]");
    let u = {
        token: Chunk261470,
        capabilities: (0, Chunk14639.t)(),
        properties: Chunk286379,
        presence: Chunk903772,
        compress: this.compressionHandler.usesLegacyCompression(),
        client_state: Chunk135273
      },
      d = JSON.stringify(Chunk442837);
    this.identifyUncompressedByteSize = Chunk544891.length, this.identifyCompressedByteSize = Chunk457854.deflate(Chunk544891).length, this.identifyCount += 1, this.send(Chunk183139.j.IDENTIFY, Chunk442837, false), Chunk626135.default.track(Chunk981631.rMx.SESSION_START_CLIENT, {})
  }
  _doFastConnectIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === module) return void this._handleClose(true, Q, "No connection info provided");
    let {
      token: t
    } = module;
    this.token = exports, this.connectionState = Chunk138859.Z.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, V.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
  }
  _doResumeOrIdentify() {
    let e = Date.now();
    null !== this.sessionId && (null == this.lastHeartbeatAckTime || module - this.lastHeartbeatAckTime <= $) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
  }
  _updateLastHeartbeatAckTime() {
    this.lastHeartbeatAckTime = Date.now()
  }
  _consumeQOSPayload() {
    var e;
    let t = this.heartbeatQOSState.currentPayload;
    return this.heartbeatQOSState.currentPayload = null != (e = this.heartbeatQOSState.upcomingState) ? module : this.heartbeatQOSState.currentPayload, this.heartbeatQOSState.upcomingState = null, exports
  }
  _sendHeartbeat() {
    let e = this._consumeQOSPayload();
    this.send(Chunk183139.j.QOS_HEARTBEAT, {
      seq: this.seq,
      qos: module
    }, false), this.lastHeartbeatTime = Date.now()
  }
  getLogger() {
    return V
  }
  willReconnect() {
    return this.connectionState === Chunk138859.Z.WILL_RECONNECT
  }
  isClosed() {
    return this.connectionState === Chunk138859.Z.CLOSED
  }
  isSessionEstablished() {
    return this.connectionState === Chunk138859.Z.SESSION_ESTABLISHED || this.connectionState === Chunk138859.Z.RESUMING
  }
  isConnected() {
    return this.connectionState === Chunk138859.Z.IDENTIFYING || this.connectionState === Chunk138859.Z.RESUMING || this.connectionState === Chunk138859.Z.SESSION_ESTABLISHED
  }
  connect() {
    return this.isClosed() ? (V.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = Chunk138859.Z.WILL_RECONNECT, this._connect("connect"), true) : (V.error("Cannot start a new connection, connection state is not closed"), false)
  }
  resetSocketOnError(e) {
    let {
      action: t,
      error: n,
      metricAction: r
    } = e;
    V.error("resetSocketOnError during ".concat(t, ": ").concat(n.message), n.stack);
    let i = (0, c.e)();
    b.Z.increment({
      name: l.V.SOCKET_CRASHED,
      tags: ["action:".concat(null != r ? r : t), "modded_client:".concat(i)]
    }, true), false !== e.sentry && A.Z.captureException(n, {
      tags: {
        socketCrashedAction: t
      }
    }), v.default.track(U.rMx.GATEWAY_SOCKET_RESET, {
      error_message: n.message,
      error_stack: n.stack,
      has_client_mods: i,
      action: t
    }), this._cleanup(e => e.close()), this._reset(true, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = C.Z.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel();
    let a = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
    0 === this.dispatchExceptionBackoff._fails ? (V.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect("resetSocketOnErrorImmediate"), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect("resetSocketOnError")), a && (this.didForceClearGuildHashes = true, f.Z.dispatch({
      type: "CLEAR_CACHES",
      reason: "Socket reset during ".concat(t)
    })), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * ee)
  }
  resetSocketOnDispatchError(e) {
    let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
    this.resetSocketOnError(F(B({}, e), {
      sentry: !t,
      clearCache: t
    }))
  }
  close() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    if (this.isClosed()) return void V.verbose("close() called, but socket is already closed.");
    V.info("Closing connection, current state is ".concat(this.connectionState));
    let t = module ? 4e3 : true;
    this._cleanup(e => e.close(t)), this.connectionState = Chunk138859.Z.CLOSED, module || setImmediate(() => {
      this._reset(true, 1e3, "Disconnect requested by user")
    })
  }
  networkStateChange(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    k.RZ() || Y({
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
        V.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = false, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
          this.expeditedHeartbeatTimeout = null, false === this.heartbeatAck && this._handleHeartbeatTimeout()
        }, e);
        return
      }
      n ? this.resetBackoff(t, r) : V.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
    }
  }
  resetBackoff() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
      t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    V.verbose("Connection has reset backoff".concat(null != module && "" !== module ? " for reason: " + module : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = true, this.willReconnect() ? this._connect(module) : exports && this.connectionState !== Chunk138859.Z.SESSION_ESTABLISHED && this._handleClose(true, 0, module)
  }
  constructor() {
    super(), G(this, "gatewayBackoff", true), G(this, "handleIdentify", true), G(this, "dispatchExceptionBackoff", new Chunk261470.Z(1e3, ee)), G(this, "dispatchSuccessTimer", 0), G(this, "connectionState_", true), G(this, "webSocket", true), G(this, "seq", true), G(this, "sessionId", true), G(this, "token", true), G(this, "initialHeartbeatTimeout", true), G(this, "expeditedHeartbeatTimeout", true), G(this, "heartbeatInterval", true), G(this, "helloTimeout", true), G(this, "heartbeater", true), G(this, "lastHeartbeatTime", true), G(this, "lastHeartbeatAckTime", true), G(this, "heartbeatAck", true), G(this, "connectionStartTime", true), G(this, "identifyStartTime", true), G(this, "nextReconnectIsImmediate", true), G(this, "compressionHandler", true), G(this, "hasConnectedOnce", true), G(this, "isFastConnect", true), G(this, "didForceClearGuildHashes", false), G(this, "identifyUncompressedByteSize", 0), G(this, "identifyCompressedByteSize", 0), G(this, "analytics", {}), G(this, "identifyCount", 0), G(this, "resumeUrl", null), G(this, "iosGoingAwayEventCount", 0), G(this, "dispatcher", true), G(this, "heartbeatQOSState", {
      currentPayload: null,
      upcomingState: null
    }), G(this, "send", (e, t, n) => {
      O.default.isLoggingGatewayEvents && V.verboseDangerously("~>", e, t);
      let r = H.pack({
        op: e,
        d: t
      });
      if (!n || this.isSessionEstablished()) try {
        null != this.webSocket && this.webSocket.send(r)
      } catch (e) {} else V.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
    }), this.dispatcher = new Chunk508569.Z(this), this.gatewayBackoff = new Chunk261470.Z(1e3, 6e4), this.connectionState_ = Chunk138859.Z.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatTime = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = true, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = false, this.compressionHandler = (0, Chunk639655.I)(H), this.hasConnectedOnce = false, this.isFastConnect = false, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
  }
}