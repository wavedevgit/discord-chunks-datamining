/** Chunk was on 1272 **/
n.d(t, {
  Z: () => E
}), n(47120), n(653041);
var r = n(836560),
  i = n(317381),
  l = n(16609),
  o = n(626135),
  a = n(585483),
  s = n(70956),
  c = n(996106),
  u = n(631467),
  d = n(452426),
  p = n(186901),
  h = n(981631);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = 10 * s.Z.Millis.SECOND,
  m = new Map,
  b = new Set,
  _ = (e, t, n) => {
    n([u.Z.CLOSE, t], e)
  };
class E extends r.EventEmitter {
  routeEvent(e, t, n, r) {
    if (!Array.isArray(n)) {
      console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
      return
    }
    let [i, l] = n;
    switch (i) {
      case u.Z.HANDSHAKE:
        if (null != e) throw new c.Z({
          closeCode: h.$VG.CLOSE_UNSUPPORTED
        }, "Already connected");
        return this.handleHandshake(t, l, r);
      case u.Z.FRAME:
        if (null == e) throw new c.Z({
          closeCode: h.$VG.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleFrame(t, e, l);
      case u.Z.CLOSE:
        if (null == e) throw new c.Z({
          closeCode: h.$VG.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleClose(e, l);
      default:
        throw new c.Z({
          closeCode: h.$VG.CLOSE_UNSUPPORTED
        }, "Invalid opcode")
    }
  }
  constructor(e, t, r, s) {
    var u;
    super(), u = this, g(this, "validateSocketClient", void 0), g(this, "logger", void 0), g(this, "createPostMessageProxySocket", void 0), g(this, "onFrameHandled", void 0), g(this, "handshakeFailureTimeoutId", void 0), g(this, "disconnectSocket", function(e, t) {
      var n, r;
      let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      u.emit("disconnect", e, i ? void 0 : t), e.close(t.code, null !== (n = t.message) && void 0 !== n ? n : "Unknown");
      let [l] = null !== (r = Array.from(m.entries()).find(t => {
        let [n, r] = t;
        return r === e
      })) && void 0 !== r ? r : [null, null];
      null != l && m.delete(l)
    }), g(this, "handleIFrameMount", e => {
      let {
        id: t
      } = e;
      b.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
        Array.from(i.ZP.getSelfEmbeddedActivities().entries()).forEach(e => {
          let [t, n] = e;
          o.default.track(h.rMx.ACTIVITY_HANDSHAKE_TIMED_OUT, {
            application_id: t,
            channel_id: (0, l.pY)(n.location),
            guild_id: (0, l.jS)(n.location),
            timeout_ms: f
          })
        })
      }, f)
    }), g(this, "handleIFrameUnmount", e => {
      var t;
      let {
        id: n
      } = e;
      b.delete(n);
      let [r, i] = null !== (t = Array.from(m.entries()).find(e => {
        let [t, r] = e;
        return r.frameId === n
      })) && void 0 !== t ? t : [null, null];
      null != i && null != r && (this.disconnectSocket(i, {
        code: h.$VG.CLOSE_NORMAL,
        message: "iFrame gone"
      }, !0), m.delete(r))
    }), g(this, "handleMessage", (e, t, n) => {
      let r = m.get(t);
      try {
        this.routeEvent(r, t, e, n)
      } catch (e) {
        if (e instanceof c.Z && e.errorCode === h.lTL.INVALID_PAYLOAD) throw e;
        null != r ? this.disconnectSocket(r, {
          code: e.code,
          message: e.message
        }, !0) : _(t, {
          code: e.code,
          message: e.message
        }, n)
      }
    }), g(this, "handleFrame", (e, t, n) => {
      var r;
      let i;
      if (e !== t.origin) throw new c.Z({
        closeCode: h.$VG.INVALID_ORIGIN
      }, "Origin has changed");
      try {
        i = "string" == typeof n ? JSON.parse(n) : n
      } catch (e) {
        throw new c.Z({
          closeCode: h.$VG.CLOSE_UNSUPPORTED
        }, "Payload not recognized encoding")
      }
      null === (r = this.onFrameHandled) || void 0 === r || r.call(this, i, this.logger, t), this.emit("request", t, i)
    }), g(this, "handleHandshake", async (e, t, r) => {
      let i;
      null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
      let l = (await n.e("85441").then(n.t.bind(n, 826753, 23))).default;
      try {
        l.assert(t, (0, d.Z)(l).required().keys({
          v: l.number().min(1).max(1).required(),
          encoding: l.string().equal("json").optional(),
          client_id: l.string().required(),
          frame_id: l.string().required(),
          sdk_version: l.string().optional()
        }))
      } catch (e) {
        throw new c.Z({
          closeCode: h.$VG.CLOSE_UNSUPPORTED
        }, e.message)
      }
      let a = t.frame_id;
      if (!b.has(a)) throw this.logger.error("Unrecognized frame ID ".concat(a)), new c.Z({
        closeCode: h.$VG.CLOSE_UNSUPPORTED
      }, "Unrecognized frame ID ".concat(a));
      null != t.sdk_version && o.default.track(h.rMx.ACTIVITY_HANDSHAKE, {
        application_id: t.client_id,
        sdk_version: t.sdk_version
      });
      try {
        var s;
        i = this.createPostMessageProxySocket({
          origin: e,
          postMessageToRPCClient: r,
          frameId: a,
          version: Number(t.v),
          logger: this.logger,
          postClose: _,
          encoding: null !== (s = t.encoding) && void 0 !== s ? s : "json"
        })
      } catch (e) {
        throw this.logger.error("Error opening window socket ".concat(e)), e
      }
      this.logger.info("Socket Opened: ".concat(i.id));
      try {
        if (await this.validateSocketClient(i, e, t.client_id), !b.has(a)) throw this.logger.error("Frame ID ".concat(a, " no longer exists")), new c.Z({
          closeCode: h.$VG.CLOSE_UNSUPPORTED
        }, "Unrecognized frame ID ".concat(a));
        m.set(e, i), b.delete(a), i.authorization.scopes.push(p.b_), this.emit("connect", i), this.logger.info("Socket Validated: ".concat(i.id))
      } catch (e) {
        throw this.logger.info("Socket Closed: ".concat(i.id, ", ").concat(e.message)), e
      }
    }), g(this, "handleClose", async (e, t) => {
      let r = (await n.e("85441").then(n.t.bind(n, 826753, 23))).default;
      try {
        r.assert(t, (0, d.Z)(r).required().keys({
          code: r.number().valid(Object.values(h.$VG)).required(),
          message: r.string().optional()
        }))
      } catch (e) {
        throw new c.Z({
          closeCode: h.$VG.CLOSE_UNSUPPORTED
        }, e.message)
      }
      this.disconnectSocket(e, t)
    }), a.S.subscribe(h.CkL.IFRAME_MOUNT, this.handleIFrameMount), a.S.subscribe(h.CkL.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = r, this.onFrameHandled = s
  }
}