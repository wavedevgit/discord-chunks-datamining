/** Chunk was on 21738 **/
/** chunk id: 998921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./65821.js"), require("./457529.js");
var Chunk264572 = require("./264572.js"),
  Chunk143236 = require("./143236.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk626584 = require("./626584.js"),
  Chunk837921 = require("./837921.js"),
  Chunk84002 = require("./84002.js"),
  Chunk313731 = require("./313731.js"),
  Chunk546983 = require("./546983.js"),
  Chunk652215 = require("./652215.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = Chunk837921.Ay.requireModule("discord_rpc").RPCIPC,
  m = new Chunk626584.A("RPCServer:IPC"),
  f = {
    HANDSHAKE: 0,
    FRAME: 1,
    CLOSE: 2,
    PING: 3,
    PONG: 4
  };

function A(e, t) {
  null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : e._didHandshake = t
}

function _(e) {
  return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake
}

function b(e) {
  return new Promise((t, n) => {
    "string" == typeof e && (e = g.net.createConnection(e));
    let r = new O(e, "json");
    e.on("data", t => {
      try {
        r.read(t)
      } catch (t) {
        e.end(E(f.CLOSE, {
          code: 1003,
          message: t.message
        })), e.destroy()
      }
    });
    let i = () => {
        try {
          e.end(E(f.CLOSE, {
            code: p.YI$.CLOSE_NORMAL,
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
    return e.write(E(f.PING, a().uniqueId())), l.then(t, n)
  })
}

function E(e, t) {
  t = JSON.stringify(t);
  let n = r.Buffer.byteLength(t),
    i = r.Buffer.alloc(8 + n);
  return i.writeInt32LE(e, 0), i.writeInt32LE(n, 4), i.write(t, 8, n), i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength)
}
class O extends Chunk313731.A {
  copyBuffer(e, t, n) {
    let i = r.Buffer.allocUnsafe(n - t);
    return e.copy(i, 0, t, n), i
  }
  send(e) {
    m.info("Socket Emit: ".concat(this.id), (0, c.A)(e)), this.socket.write(E(f.FRAME, e))
  }
  close(e, t) {
    this.socket.end(E(f.CLOSE, {
      code: e,
      message: t
    })), this.socket.destroy()
  }
  read(e) {
    var t;
    let n;
    if (this.messageBuffer.byteLength + e.byteLength > this.MAX_BUFFER_SIZE) throw Error("total buffer size exceeded");
    this.messageBuffer = (t = this.messageBuffer, (n = r.Buffer.alloc(t.byteLength + e.byteLength)).set(t), n.set(e, t.byteLength), n), this.processMessages()
  }
  processMessages() {
    for (; this.messageBuffer.byteLength >= 8;) {
      if (null === this.currentHeader) {
        if (this.currentHeader = {
            opcode: this.messageBuffer.readInt32LE(0),
            size: this.messageBuffer.readInt32LE(4)
          }, !Object.values(f).includes(this.currentHeader.opcode) || this.currentHeader.size < 0) throw Error("protocol error");
        if (this.currentHeader.size > 3145728) throw Error("message too large");
        this.messageBuffer = this.copyBuffer(this.messageBuffer, 8, this.messageBuffer.byteLength)
      }
      if (this.messageBuffer.byteLength >= this.currentHeader.size) {
        let e = JSON.parse(this.copyBuffer(this.messageBuffer, 0, this.currentHeader.size).toString());
        this.dispatchMessage(this.socket, this.currentHeader.opcode, e), this.messageBuffer = this.copyBuffer(this.messageBuffer, this.currentHeader.size, this.messageBuffer.byteLength), this.currentHeader = null
      } else break
    }
  }
  dispatchMessage(e, t, n) {
    switch (t) {
      case f.PING:
        e.emit("ping", n), e.write(E(f.PONG, n));
        break;
      case f.PONG:
        e.emit("pong", n);
        break;
      case f.HANDSHAKE:
        this.handleHandshake(e, n), e.emit("handshake", n);
        break;
      case f.FRAME:
        if (!_(e)) throw Error("did not handshake");
        e.emit("request", n);
        break;
      case f.CLOSE:
        e.end(E(f.CLOSE, {
          code: p.YI$.CLOSE_NORMAL,
          message: "client disconnect"
        })), e.destroy()
    }
  }
  handleHandshake(e, t) {
    if (_(e)) throw Error("already did handshake");
    this.clientId = t.client_id, this.checkRpcVersion(+t.v), A(e, true)
  }
  constructor(e, t) {
    super("ipc", p.dL4, t), h(this, "messageBuffer", r.Buffer.alloc(0)), h(this, "currentHeader", null), h(this, "MAX_BUFFER_SIZE", 5242880), h(this, "socket", true), h(this, "clientId", null), this.socket = e, A(e, false)
  }
}
class y extends Chunk143236.EventEmitter {
  handleConnection(e) {
    let t = new O(e, "json"),
      n = setTimeout(() => {
        m.warn("Handshake timeout for connection, closing socket");
        try {
          e.end(E(f.CLOSE, {
            code: p.YI$.CLOSE_ABNORMAL,
            message: "Handshake timeout"
          }))
        } catch (e) {}
        e.destroy()
      }, 1e4);
    e.on("readable", () => {
      let n = e.read();
      null != n && t.read(r.Buffer.from(n))
    }), e.on("data", i => {
      try {
        t.read(r.Buffer.from(i))
      } catch (t) {
        clearTimeout(n), m.error("Socket Error: ".concat(t.message)), e.end(E(f.CLOSE, {
          code: p.YI$.CLOSE_UNSUPPORTED,
          message: t.message
        })), e.destroy()
      }
    }), e.once("handshake", () => {
      clearTimeout(n);
      let r = t.clientId;
      m.info("Socket Opened: ".concat(t.id)), e.on("error", e => m.error("Socket Error: ".concat(e.message))), e.on("close", () => {
        m.info("Socket Close: ".concat(t.id)), this.emit("disconnect", t)
      }), (0, d.j7)(t, null, r).then(() => {
        e.on("request", e => {
          m.info("Socket Message: ".concat(t.id), (0, c.A)(e)), this.emit("request", t, e)
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
    const e = g.net.createServer(e => this.handleConnection(e));
    e.on("error", e => m.error("Error: ".concat(e.message))), g.getAvailableSocket(b).then(t => {
      e.listen(t, () => {
        ("function" == typeof e.listening ? e.listening() : e.listening) && m.info("Starting on ".concat(e.address()))
      })
    })
  }
}
let I = new y