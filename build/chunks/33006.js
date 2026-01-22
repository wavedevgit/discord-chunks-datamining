/** Chunk was on 21738 **/
/** chunk id: 33006, original params: e,t,n (module,exports,require) **/
let r, i;
require.d(exports, {
  A: () => w
}), require("./457529.js"), require("./896048.js"), require("./747238.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./321073.js"), require("./65821.js");
var Chunk143236 = require("./143236.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk111162 = require("./111162.js"),
  Chunk998218 = require("./998218.js"),
  Chunk837921 = require("./837921.js"),
  Chunk636401 = require("./636401.js"),
  Chunk84002 = require("./84002.js"),
  Chunk313731 = require("./313731.js"),
  Chunk546983 = require("./546983.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js"),
  _ = require("./264572.js").Buffer;

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
try {
  r = Chunk837921.Ay.requireModule("discord_erlpack")
} catch (e) {
  try {
    r = Chunk837921.Ay.requireModule("erlpack")
  } catch (e) {}
}
let O = Chunk837921.Ay.requireModule("discord_rpc").RPCWebSocket,
  y = window.GLOBAL_ENV.MARKETING_ENDPOINT,
  I = new Chunk626584.A("RPCServer:WSS"),
  v = [];

function S(e) {
  return "function" == typeof e ? e() : e
}

function C() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0,
    t = e > 0 ? true : () => {
      if (!S(i.listening)) return;
      let e = i.address().port;
      I.info("Starting on ".concat(e)), o.h.dispatch({
        type: "RPC_SERVER_READY",
        port: e
      })
    };
  i.listen(b.xEi + e % b.sJq, "127.0.0.1", t)
}

function N(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 200,
    i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {},
    l = null != S(e.headers).origin ? {
      "Access-Control-Allow-Origin": S(e.headers).origin,
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    } : {};
  n = n ? JSON.stringify(n) : "", r = 200 === r && 0 === n.length ? 204 : r, t.setHeader("Content-Length", _.byteLength(n).toString()), t.setHeader("Content-Type", "application/json"), t.writeHead(r, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        E(e, t, n[t])
      })
    }
    return e
  }({}, i, l)), t.end(n)
}

function T(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 0;
  N(e, t, {
    code: i,
    message: r
  }, n)
}
class j extends Chunk313731.A {
  send(e) {
    (u.default.isLoggingOverlayEvents || e.cmd !== b.e$_.OVERLAY && e.evt !== b.ZE4.OVERLAY) && I.info("Socket Emit: ".concat(this.id), (0, h.A)(e)), null != r && "etf" === this.encoding ? this._socket.send(r.pack(e), {
      binary: true
    }) : this._socket.send(JSON.stringify(e))
  }
  close(e, t) {
    this._socket.close(e, t)
  }
  constructor(e, t, n) {
    if (super("ws", t, n), E(this, "_socket", true), false === ["etf", "json"].indexOf(n)) throw new f.A({
      closeCode: b.YI$.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(n));
    if ("etf" === n && null == r) throw new f.A({
      closeCode: b.YI$.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this._socket = e
  }
}
class x extends Chunk313731.A {
  send(e) {
    (u.default.isLoggingOverlayEvents || e.cmd !== b.e$_.OVERLAY) && I.info("Socket Emit: ".concat(this.id), e), this._sendCallback(e)
  }
  close(e, t) {
    this._closeCallback(t, e)
  }
  constructor(e, t, n, r) {
    if (super("http", n, r), E(this, "_sendCallback", true), E(this, "_closeCallback", true), "json" !== r) throw new f.A({
      closeCode: b.YI$.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(r));
    this._sendCallback = e, this._closeCallback = t
  }
}
class P extends Chunk143236.EventEmitter {
  handleRequest(e, t) {
    let [n, r] = S(e.url).split("?"), i = S(e.method);
    if ("/rpc" === n && "OPTIONS" === i) return void N(e, t, {
      body: ""
    });
    let l = "POST" === i;
    if ("/rpc" === n && ("GET" === i || l)) {
      let n = new URLSearchParams(r),
        i = l ? S(e.headers)["content-type"].split("/")[1] : "json",
        s = function() {
          var e, r;
          let {
            protocol: i,
            host: l
          } = null != (e = d.A.toURLSafe(null != (r = n.get("callback")) ? r : "")) ? e : {};
          i === location.protocol && l === location.host ? t.setHeader("Location", n.get("callback")) : t.setHeader("Location", y), t.writeHead(301), t.end()
        },
        o = new x(!l ? s : N.bind(null, e, t), !l ? s : T.bind(null, e, t, 400), Number(n.get("v")), i);
      if (l)(0, g.j7)(o, S(e.headers).origin, n.get("client_id")).then(() => {
        let n = "";
        e.on("data", e => n += e), e.on("error", () => T(e, t, 500, "Internal Server Error")), e.on("end", () => this.handleMessage(o, n))
      }).catch(e => {
        let {
          code: t,
          message: n
        } = e;
        return o.close(t, n)
      });
      else {
        var a;
        o.authorization.scopes = [m.kw], this.handleMessage(o, decodeURIComponent(null != (a = n.get("payload")) ? a : ""))
      }
      return
    }
    T(e, t, 404, "Not Found")
  }
  handleConnection(e) {
    var t, n;
    let r, i = new URLSearchParams(S(e.upgradeReq).url.split("?")[1]),
      l = null != (t = S(e.upgradeReq).headers.origin) ? t : "";
    try {
      r = new j(e, Number(i.get("v")), null != (n = i.get("encoding")) ? n : "json")
    } catch (t) {
      e.close(t.code, t.message);
      return
    }
    I.info("Socket Opened: ".concat(r.id)), e.on("error", e => I.error("WS Error: ".concat(e.message))), e.on("close", (e, t) => {
      I.info("Socket Closed: ".concat(r.id, ", code ").concat(e, ", message ").concat(t)), s().remove(v, e => e === r), this.emit("disconnect", r)
    }), (0, g.j7)(r, l, i.get("client_id")).then(() => {
      v.push(r), e.on("message", e => this.handleMessage(r, e)), this.emit("connect", r)
    }).catch(e => {
      let {
        code: t,
        message: n
      } = e;
      return r.close(t, n)
    })
  }
  handleMessage(e, t) {
    let n;
    try {
      if (null != r && "etf" === e.encoding) n = r.unpack(t);
      else if ("string" == typeof t) n = JSON.parse(t);
      else throw Error()
    } catch (t) {
      e.close(b.YI$.CLOSE_UNSUPPORTED, "Payload not ".concat(e.encoding));
      return
    }(u.default.isLoggingOverlayEvents || n.cmd !== b.e$_.OVERLAY) && I.info("Socket Message: ".concat(e.id), (0, h.A)(n)), this.emit("request", e, n)
  }
  constructor() {
    var e;
    super();
    let t = 0;
    (i = O.http.createServer()).on("error", e => {
      I.error("Error: ".concat(e.message)), ("EADDRINUSE" === e.code || e.message.includes("EADDRINUSE")) && setTimeout(() => C(++t), 1e3)
    }), i.on("request", this.handleRequest.bind(this)), C(t);
    const n = {
      instanceId: null != (e = i.instanceId) ? e : 0,
      server: i
    };
    new O.ws.Server(n).on("connection", e => this.handleConnection(e))
  }
}
let w = new P