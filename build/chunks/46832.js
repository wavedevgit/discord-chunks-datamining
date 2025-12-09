/** Chunk was on 1272 **/
/** chunk id: 46832, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./539854.js");
var Chunk836560 = require("./836560.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk996106 = require("./996106.js"),
  Chunk631467 = require("./631467.js"),
  Chunk452426 = require("./452426.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 10 * Chunk70956.Z.Millis.SECOND,
  m = new Map,
  _ = new Set,
  b = (e, t, n) => {
    n([u.Z.CLOSE, t], e)
  };
class E extends Chunk836560.EventEmitter {
  routeEvent(e, t, n, r) {
    if (!Array.isArray(n)) return void console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
    let [i, l] = n;
    switch (i) {
      case u.Z.HANDSHAKE:
        if (null != e) throw new c.Z({
          closeCode: f.$VG.CLOSE_UNSUPPORTED
        }, "Already connected");
        return this.handleHandshake(t, l, r);
      case u.Z.FRAME:
        if (null == e) throw new c.Z({
          closeCode: f.$VG.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleFrame(t, e, l);
      case u.Z.CLOSE:
        if (null == e) throw new c.Z({
          closeCode: f.$VG.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleClose(e, l);
      default:
        throw new c.Z({
          closeCode: f.$VG.CLOSE_UNSUPPORTED
        }, "Invalid opcode")
    }
  }
  constructor(e, t, r, o) {
    var u;
    super(), u = this, g(this, "validateSocketClient", true), g(this, "logger", true), g(this, "createPostMessageProxySocket", true), g(this, "onFrameHandled", true), g(this, "handshakeFailureTimeoutId", true), g(this, "disconnectSocket", function(e, t) {
      var n, r;
      let i = arguments.length > 2 && true !== arguments[2] && arguments[2];
      u.emit("disconnect", e, i ? true : t), e.close(t.code, null != (n = t.message) ? n : "Unknown");
      let [l] = null != (r = Array.from(m.entries()).find(t => {
        let [n, r] = t;
        return r === e
      })) ? r : [null, null];
      null != l && m.delete(l)
    }), g(this, "handleIFrameMount", e => {
      let {
        id: t
      } = e;
      _.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
        Array.from(i.ZP.getSelfEmbeddedActivities().entries()).forEach(e => {
          let [t, n] = e;
          a.default.track(f.rMx.ACTIVITY_HANDSHAKE_TIMED_OUT, {
            application_id: t,
            channel_id: (0, l.p)(n.location),
            guild_id: (0, l.j)(n.location),
            timeout_ms: h
          })
        })
      }, h)
    }), g(this, "handleIFrameUnmount", e => {
      var t;
      let {
        id: n
      } = e;
      _.delete(n);
      let [r, i] = null != (t = Array.from(m.entries()).find(e => {
        let [t, r] = e;
        return r.frameId === n
      })) ? t : [null, null];
      null != i && null != r && (this.disconnectSocket(i, {
        code: f.$VG.CLOSE_NORMAL,
        message: "iFrame gone"
      }, true), m.delete(r))
    }), g(this, "handleMessage", (e, t, n) => {
      let r = m.get(t);
      try {
        this.routeEvent(r, t, e, n)
      } catch (e) {
        if (e instanceof c.Z && e.errorCode === f.lTL.INVALID_PAYLOAD) throw e;
        null != r ? this.disconnectSocket(r, {
          code: e.code,
          message: e.message
        }, true) : b(t, {
          code: e.code,
          message: e.message
        }, n)
      }
    }), g(this, "handleFrame", (e, t, n) => {
      var r;
      let i;
      if (e !== t.origin) throw new c.Z({
        closeCode: f.$VG.INVALID_ORIGIN
      }, "Origin has changed");
      try {
        i = "string" == typeof n ? JSON.parse(n) : n
      } catch (e) {
        throw new c.Z({
          closeCode: f.$VG.CLOSE_UNSUPPORTED
        }, "Payload not recognized encoding")
      }
      null == (r = this.onFrameHandled) || r.call(this, i, this.logger, t), this.emit("request", t, i)
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
          closeCode: f.$VG.CLOSE_UNSUPPORTED
        }, e.message)
      }
      let s = t.frame_id;
      if (!_.has(s)) throw this.logger.error("Unrecognized frame ID ".concat(s)), new c.Z({
        closeCode: f.$VG.CLOSE_UNSUPPORTED
      }, "Unrecognized frame ID ".concat(s));
      null != t.sdk_version && a.default.track(f.rMx.ACTIVITY_HANDSHAKE, {
        application_id: t.client_id,
        sdk_version: t.sdk_version
      });
      try {
        var o;
        i = this.createPostMessageProxySocket({
          origin: e,
          postMessageToRPCClient: r,
          frameId: s,
          version: Number(t.v),
          logger: this.logger,
          postClose: b,
          encoding: null != (o = t.encoding) ? o : "json"
        })
      } catch (e) {
        throw this.logger.error("Error opening window socket ".concat(e)), e
      }
      this.logger.info("Socket Opened: ".concat(i.id));
      try {
        if (await this.validateSocketClient(i, e, t.client_id), !_.has(s)) throw this.logger.error("Frame ID ".concat(s, " no longer exists")), new c.Z({
          closeCode: f.$VG.CLOSE_UNSUPPORTED
        }, "Unrecognized frame ID ".concat(s));
        m.set(e, i), _.delete(s), i.authorization.scopes.push(p.b_), this.emit("connect", i), this.logger.info("Socket Validated: ".concat(i.id))
      } catch (e) {
        throw this.logger.info("Socket Closed: ".concat(i.id, ", ").concat(e.message)), e
      }
    }), g(this, "handleClose", async (e, t) => {
      let r = (await n.e("85441").then(n.t.bind(n, 826753, 23))).default;
      try {
        r.assert(t, (0, d.Z)(r).required().keys({
          code: r.number().valid(Object.values(f.$VG)).required(),
          message: r.string().optional()
        }))
      } catch (e) {
        throw new c.Z({
          closeCode: f.$VG.CLOSE_UNSUPPORTED
        }, e.message)
      }
      this.disconnectSocket(e, t)
    }), s.S.subscribe(f.CkL.IFRAME_MOUNT, this.handleIFrameMount), s.S.subscribe(f.CkL.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = r, this.onFrameHandled = o
  }
}