/** Chunk was on web.js **/
/** chunk id: 639655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => _
}), require("./539854.js"), require("./415506.js"), require("./644351.js"), require("./146733.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./388685.js");
var Chunk710845 = require("./710845.js"),
  Chunk358085 = require("./358085.js"),
  Chunk374023 = require("./374023.js"),
  Chunk988348 = require("./988348.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let {
  NativeModules: l
} = {}, c = {}, u = 65535, d = [];
class f {
  static canUse() {
    returnfalse
  }
  bindWebSocket(e) {}
  feed(e) {}
  dataReady(e) {
    this._onDataReady = e
  }
  constructor(e) {
    s(this, "_onDataReady", true), s(this, "_gatewayEncoding", true), this._onDataReady = null, this._gatewayEncoding = e
  }
}
d.push(class extends f {
  static canUse() {
    return (0, Chunk988348.N)()
  }
  getAlgorithm() {
    return "zstd-stream"
  }
  usesLegacyCompression() {
    returnfalse
  }
  feed(e) {
    let t;
    if (null == this._stream) throw Error("Trying to decompress with zstd but did not initialize with it");
    if (!(e instanceof ArrayBuffer)) throw Error("Expected array buffer, but got " + typeof e);
    t = this._stream.decompress(e), null != this._decoder && (t = this._decoder.decode(t)), null != this._onDataReady && this._onDataReady(t)
  }
  close() {}
  constructor(e) {
    super(e), s(this, "_decoder", null), s(this, "_stream", true), this._gatewayEncoding.wantsString() ? this._decoder = new TextDecoder("utf-8") : this._decoder = null, this._stream = (0, a.G)()
  }
}), d.push(class extends f {
  static canUse() {
    return true !== window.Uint8Array
  }
  getAlgorithm() {
    return "zlib-stream"
  }
  usesLegacyCompression() {
    returnfalse
  }
  feed(e) {
    if (null == this._inflate) throw Error("Trying to feed to closed compression adapter");
    if (null === this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
    if (!(e instanceof ArrayBuffer)) throw Error("Expected array buffer, but got " + typeof e);
    let t = new DataView(e),
      n = t.byteLength >= 4 && t.getUint32(t.byteLength - 4, false) === u;
    this._inflate.push(e, !!n && this._pako.Z_SYNC_FLUSH)
  }
  close() {
    null != this._inflate && (this._inflate.onEnd = null, this._inflate.chunks = []), this._inflate = null
  }
  handleFlushEnd(e) {
    let t, n = this._pako,
      i = this._inflate;
    if (null == i) return void new r.Z("GatewayCompressionHandler").error("flush end happened on closed compression adapter");
    if (e !== n.Z_OK) throw Error("zlib error, ".concat(e, ", ").concat(i.strm.msg));
    let {
      chunks: o
    } = i, a = o.length;
    if (this._gatewayEncoding.wantsString()) t = a > 1 ? o.join("") : o[0];
    else if (a > 1) {
      let e = 0;
      for (let t = 0; t < a; t++) e += o[t].length;
      let n = new Uint8Array(e),
        r = 0;
      for (let e = 0; e < a; e++) {
        let t = o[e];
        n.set(t, r), r += t.length
      }
      t = n
    } else t = o[0];
    o.length = 0, null != this._onDataReady && this._onDataReady(t)
  }
  constructor(e) {
    super(e), s(this, "_inflate", true), s(this, "_pako", n(457854)), s(this, "_usesZstd", false), s(this, "_zstdDecoder", null), s(this, "_zstdStream", null), this._inflate = new this._pako.Inflate({
      chunkSize: 65536,
      to: this._gatewayEncoding.wantsString() ? "string" : ""
    }), this._inflate.onEnd = this.handleFlushEnd.bind(this)
  }
}), d.push(class extends f {
  static canUse() {
    returntrue
  }
  getAlgorithm() {
    return null
  }
  usesLegacyCompression() {
    returntrue
  }
  feed(e) {
    let t = this._pako;
    if (e instanceof ArrayBuffer && this._gatewayEncoding.wantsString() && (e = t.inflate(e, {
        to: "string"
      })), null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
    this._onDataReady(e)
  }
  close() {}
  constructor(...e) {
    super(...e), s(this, "_pako", n(457854))
  }
}), d.push(class extends f {
  static canUse() {
    returnfalse
  }
  bindWebSocket(e) {
    this.close(), this._socketId = e._socketId, (0, a.N)() ? (0, i.isAndroid)() ? null == c || c.enableZstdStreamSupport(this._socketId) : l.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0) : (0, i.isAndroid)() ? null == c || c.enableZlibStreamSupport(this._socketId) : l.DCDCompressionManager.enableZlibStreamSupport(this._socketId)
  }
  getAlgorithm() {
    return (0, Chunk988348.N)() ? "zstd-stream" : "zlib-stream"
  }
  usesLegacyCompression() {
    returnfalse
  }
  feed(e) {
    if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
    null !== e && this._onDataReady(e)
  }
  close() {
    let e = this._socketId;
    this._socketId = null, null !== module && ((0, Chunk358085.isAndroid)() ? null == c || c.disableZlibStreamSupport(module) : l.DCDCompressionManager.disableZlibStreamSupport(module))
  }
  constructor(e) {
    super(e), s(this, "_socketId", true), this._socketId = null
  }
});
class p extends f {
  static canUse() {
    returntrue
  }
  getAlgorithm() {
    return null
  }
  usesLegacyCompression() {
    returnfalse
  }
  feed(e) {
    if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
    this._onDataReady(e)
  }
  close() {}
}

function _(e) {
  if (o.s.isDiscordGatewayPlaintextSet()) return new p(e);
  for (var t of d)
    if (t.canUse()) return new t(e);
  return new p(e)
}
d.push(p)