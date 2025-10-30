/** Chunk was on 1272 **/
/** chunk id: 967351, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./415506.js"), require("./49124.js");
var Chunk413135 = require("./413135.js"),
  Chunk836560 = require("./836560.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk710845 = require("./710845.js"),
  Chunk998502 = require("./998502.js"),
  Chunk901077 = require("./901077.js"),
  Chunk76238 = require("./76238.js"),
  Chunk852926 = require("./852926.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = Chunk998502.ZP.requireModule("discord_rpc").RPCIPC,
  h = new Chunk710845.Z("RPCServer:IPC"),
  g = {
    HANDSHAKE: 0,
    FRAME: 1,
    CLOSE: 2,
    PING: 3,
    PONG: 4
  };

function _(e, t) {
  null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : e._didHandshake = t
}

function b(e) {
  return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake
}

function E(e) {
  return new Promise((t, n) => {
    "string" == typeof e && (e = m.net.createConnection(e));
    let r = new I(e, "json");
    e.on("data", t => {
      try {
        r.read(t)
      } catch (t) {
        e.end(O(g.CLOSE, {
          code: 1003,
          message: t.message
        })), e.destroy()
      }
    });
    let i = () => {
        try {
          e.end(O(g.CLOSE, {
            code: p.$VG.CLOSE_NORMAL,
            message: "test client going away"
          })), e.destroy()
        } catch (e) {}
      },
      l = Promise.race([new Promise(t => e.on("error", () => t())), new Promise((t, n) => {
        e.on("pong", () => n(Error("socket responded with pong")))
      }), new Promise((e, t) => {
        setTimeout(() => t(Error("socket alive timeout")), 1e3)
      })]).then(() => {
        i()
      }, e => {
        throw i(), e
      });
    return e.write(O(g.PING, a().uniqueId())), l.then(t, n)
  })
}

function O(e, t) {
  t = JSON.stringify(t);
  let n = r.Buffer.byteLength(t),
    i = r.Buffer.alloc(8 + n);
  return i.writeInt32LE(e, 0), i.writeInt32LE(n, 4), i.write(t, 8, n), i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength)
}
class I extends Chunk76238.Z {
  copyBuffer(e, t, n) {
    let i = r.Buffer.allocUnsafe(n - t);
    return e.copy(i, 0, t, n), i
  }
  send(e) {
    h.info("Socket Emit: ".concat(this.id), (0, c.Z)(e)), this.socket.write(O(g.FRAME, e))
  }
  close(e, t) {
    this.socket.end(O(g.CLOSE, {
      code: e,
      message: t
    })), this.socket.destroy()
  }
  read(e) {
    if (this.messageBuffer.byteLength + e.byteLength > this.MAX_BUFFER_SIZE) throw Error("total buffer size exceeded");
    this.messageBuffer = function(e, t) {
      let n = r.Buffer.alloc(e.byteLength + t.byteLength);
      return n.set(e), n.set(t, e.byteLength), n
    }(this.messageBuffer, e), this.processMessages()
  }
  processMessages() {
    for (; this.messageBuffer.byteLength >= 8;) {
      if (null === this.currentHeader) {
        if (this.currentHeader = {
            opcode: this.messageBuffer.readInt32LE(0),
            size: this.messageBuffer.readInt32LE(4)
          }, !Object.values(g).includes(this.currentHeader.opcode) || this.currentHeader.size < 0) throw Error("protocol error");
        if (this.currentHeader.size > 3145728) throw Error("message too large");
        this.messageBuffer = this.copyBuffer(this.messageBuffer, 8, this.messageBuffer.byteLength)
      }
      if (this.messageBuffer.byteLength >= this.currentHeader.size) {
        let e = JSON.parse(this.copyBuffer(this.messageBuffer, 0, this.currentHeader.size).toString());
        this.dispatchMessage(this.socket, this.currentHeader.opcode, module), this.messageBuffer = this.copyBuffer(this.messageBuffer, this.currentHeader.size, this.messageBuffer.byteLength), this.currentHeader = null
      } else break
    }
  }
  dispatchMessage(e, t, n) {
    switch (t) {
      case g.PING:
        e.emit("ping", n), e.write(O(g.PONG, n));
        break;
      case g.PONG:
        e.emit("pong", n);
        break;
      case g.HANDSHAKE:
        this.handleHandshake(e, n), e.emit("handshake", n);
        break;
      case g.FRAME:
        if (!b(e)) throw Error("did not handshake");
        e.emit("request", n);
        break;
      case g.CLOSE:
        e.end(O(g.CLOSE, {
          code: p.$VG.CLOSE_NORMAL,
          message: "client disconnect"
        })), e.destroy()
    }
  }
  handleHandshake(e, t) {
    if (b(e)) throw Error("already did handshake");
    this.clientId = t.client_id, this.checkRpcVersion(+t.v), _(e, true)
  }
  constructor(e, t) {
    super("ipc", p.X6Q, t), f(this, "messageBuffer", r.Buffer.alloc(0)), f(this, "currentHeader", null), f(this, "MAX_BUFFER_SIZE", 5242880), f(this, "socket", true), f(this, "clientId", null), this.socket = e, _(e, false)
  }
}
class y extends Chunk836560.EventEmitter {
  handleConnection(e) {
    let t = new I(e, "json");
    e.on("readable", () => {
      let n = e.read();
      null != n && t.read(r.Buffer.from(n))
    }), e.on("data", n => {
      try {
        t.read(r.Buffer.from(n))
      } catch (t) {
        h.error("Socket Error: ".concat(t.message)), e.end(O(g.CLOSE, {
          code: p.$VG.CLOSE_UNSUPPORTED,
          message: t.message
        })), e.destroy()
      }
    }), e.once("handshake", () => {
      let n = t.clientId;
      h.info("Socket Opened: ".concat(t.id)), e.on("error", e => h.error("Socket Error: ".concat(e.message))), e.on("close", () => {
        h.info("Socket Close: ".concat(t.id)), this.emit("disconnect", t)
      }), (0, d.em)(t, null, n).then(() => {
        e.on("request", e => {
          h.info("Socket Message: ".concat(t.id), (0, c.Z)(e)), this.emit("request", t, e)
        }), this.emit("connect", t)
      }).catch(e => {
        let {
          code: n,
          message: r
        } = e;
        t.close(n, r)
      })
    })
  }
  constructor() {
    super();
    let e = m.net.createServer(e => this.handleConnection(e));
    module.on("error", e => h.error("Error: ".concat(e.message))), m.getAvailableSocket(E).then(t => {
      e.listen(t, () => {
        ("function" == typeof e.listening ? e.listening() : e.listening) && h.info("Starting on ".concat(e.address()))
      })
    })
  }
}
let v = new y