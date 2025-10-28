/** Chunk was on 1272 **/
/** chunk id: 178318, original params: e,t,n (module,exports,require) **/
let r, i;
require.d(exports, {
  Z: () => Z
}), require("./49124.js"), require("./388685.js"), require("./35282.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./539854.js"), require("./415506.js");
var Chunk836560 = require("./836560.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk857192 = require("./857192.js"),
  Chunk591759 = require("./591759.js"),
  Chunk998502 = require("./998502.js"),
  Chunk996106 = require("./996106.js"),
  Chunk901077 = require("./901077.js"),
  Chunk76238 = require("./76238.js"),
  Chunk852926 = require("./852926.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js"),
  E = require("./413135.js").Buffer;

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
try {
  r = Chunk998502.ZP.requireModule("discord_erlpack")
} catch (e) {
  try {
    r = Chunk998502.ZP.requireModule("erlpack")
  } catch (e) {}
}
let I = Chunk998502.ZP.requireModule("discord_rpc").RPCWebSocket,
  v = window.GLOBAL_ENV.MARKETING_ENDPOINT,
  y = new Chunk710845.Z("RPCServer:WSS"),
  C = [];

function S(e) {
  return "function" == typeof e ? e() : e
}

function T() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0,
    t = module > 0 ? true : () => {
      if (!S(i.listening)) return;
      let e = i.address().port;
      y.info("Starting on ".concat(module)), Chunk570140.Z.dispatch({
        type: "RPC_SERVER_READY",
        port: module
      })
    };
  i.listen(Chunk981631.V6Z + module % Chunk981631.frH, "127.0.0.1", exports)
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
  n = n ? JSON.stringify(n) : "", r = 200 === r && 0 === n.length ? 204 : r, t.setHeader("Content-Length", E.byteLength(n).toString()), t.setHeader("Content-Type", "application/json"), t.writeHead(r, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        O(e, t, n[t])
      })
    }
    return e
  }({}, i, l)), t.end(n)
}

function j(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 0;
  N(e, t, {
    code: i,
    message: r
  }, n)
}
class P extends Chunk76238.Z {
  send(e) {
    (u.default.isLoggingOverlayEvents || e.cmd !== b.Etm.OVERLAY && e.evt !== b.zMe.OVERLAY) && y.info("Socket Emit: ".concat(this.id), (0, m.Z)(e)), null != r && "etf" === this.encoding ? this._socket.send(r.pack(e), {
      binary: true
    }) : this._socket.send(JSON.stringify(e))
  }
  close(e, t) {
    this._socket.close(e, t)
  }
  constructor(e, t, n) {
    if (super("ws", t, n), O(this, "_socket", true), false === ["etf", "json"].indexOf(n)) throw new f.Z({
      closeCode: b.$VG.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(n));
    if ("etf" === n && null == r) throw new f.Z({
      closeCode: b.$VG.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this._socket = e
  }
}
class x extends Chunk76238.Z {
  send(e) {
    (u.default.isLoggingOverlayEvents || e.cmd !== b.Etm.OVERLAY) && y.info("Socket Emit: ".concat(this.id), e), this._sendCallback(e)
  }
  close(e, t) {
    this._closeCallback(t, e)
  }
  constructor(e, t, n, r) {
    if (super("http", n, r), O(this, "_sendCallback", true), O(this, "_closeCallback", true), "json" !== r) throw new f.Z({
      closeCode: b.$VG.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(r));
    this._sendCallback = e, this._closeCallback = t
  }
}
class A extends Chunk836560.EventEmitter {
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
          } = null != (r = d.Z.toURLSafe(null != (e = n.get("callback")) ? e : "")) ? r : {};
          i === location.protocol && l === location.host ? t.setHeader("Location", n.get("callback")) : t.setHeader("Location", v), t.writeHead(301), t.end()
        },
        o = new x(!l ? s : N.bind(null, e, t), !l ? s : j.bind(null, e, t, 400), Number(n.get("v")), i);
      if (l)(0, g.em)(o, S(e.headers).origin, n.get("client_id")).then(() => {
        let n = "";
        e.on("data", e => n += e), e.on("error", () => j(e, t, 500, "Internal Server Error")), e.on("end", () => this.handleMessage(o, n))
      }).catch(e => {
        let {
          code: t,
          message: n
        } = e;
        return o.close(t, n)
      });
      else {
        var a;
        o.authorization.scopes = [_.CN], this.handleMessage(o, decodeURIComponent(null != (a = n.get("payload")) ? a : ""))
      }
      return
    }
    j(e, t, 404, "Not Found")
  }
  handleConnection(e) {
    var t, n;
    let r, i = new URLSearchParams(S(e.upgradeReq).url.split("?")[1]),
      l = null != (t = S(e.upgradeReq).headers.origin) ? t : "";
    try {
      r = new P(e, Number(i.get("v")), null != (n = i.get("encoding")) ? n : "json")
    } catch (t) {
      e.close(t.code, t.message);
      return
    }
    y.info("Socket Opened: ".concat(r.id)), e.on("error", e => y.error("WS Error: ".concat(e.message))), e.on("close", (e, t) => {
      y.info("Socket Closed: ".concat(r.id, ", code ").concat(e, ", message ").concat(t)), s().remove(C, e => e === r), this.emit("disconnect", r)
    }), (0, g.em)(r, l, i.get("client_id")).then(() => {
      C.push(r), e.on("message", e => this.handleMessage(r, e)), this.emit("connect", r)
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
      e.close(b.$VG.CLOSE_UNSUPPORTED, "Payload not ".concat(e.encoding));
      return
    }(u.default.isLoggingOverlayEvents || n.cmd !== b.Etm.OVERLAY) && y.info("Socket Message: ".concat(e.id), (0, m.Z)(n)), this.emit("request", e, n)
  }
  constructor() {
    var e;
    super();
    let t = 0;
    (i = I.http.createServer()).on("error", e => {
      y.error("Error: ".concat(e.message)), ("EADDRINUSE" === e.code || e.message.includes("EADDRINUSE")) && setTimeout(() => T(++t), 1e3)
    }), i.on("request", this.handleRequest.bind(this)), T(exports);
    let n = {
      instanceId: null != (e = i.instanceId) ? module : 0,
      server: i
    };
    new I.ws.Server(require).on("connection", e => this.handleConnection(e))
  }
}
let Z = new A