/** Chunk was on web.js **/
/** chunk id: 313449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./321073.js"), require("./65821.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./896048.js");
var Chunk626584 = require("./626584.js"),
  Chunk723702 = require("./723702.js"),
  Chunk536194 = require("./536194.js"),
  Chunk4655 = require("./4655.js");

function o(e, t, n) {
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
    o(this, "_onDataReady", true), o(this, "_gatewayEncoding", true), this._onDataReady = null, this._gatewayEncoding = e
  }
}
d.push(class extends f {
  static canUse() {
    return (0, s.y)()
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
    super(e), o(this, "_decoder", null), o(this, "_stream", true), this._gatewayEncoding.wantsString() ? this._decoder = new TextDecoder("utf-8") : this._decoder = null, this._stream = (0, s.t)()
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
    if (null == i) return void new r.A("GatewayCompressionHandler").error("flush end happened on closed compression adapter");
    if (e !== n.Z_OK) throw Error("zlib error, ".concat(e, ", ").concat(i.strm.msg));
    let {
      chunks: a
    } = i, s = a.length;
    if (this._gatewayEncoding.wantsString()) t = s > 1 ? a.join("") : a[0];
    else if (s > 1) {
      let e = 0;
      for (let t = 0; t < s; t++) e += a[t].length;
      let n = new Uint8Array(e),
        r = 0;
      for (let e = 0; e < s; e++) {
        let t = a[e];
        n.set(t, r), r += t.length
      }
      t = n
    } else t = a[0];
    a.length = 0, null != this._onDataReady && this._onDataReady(t)
  }
  constructor(e) {
    super(e), o(this, "_inflate", true), o(this, "_pako", n(777915)), o(this, "_usesZstd", false), o(this, "_zstdDecoder", null), o(this, "_zstdStream", null), this._inflate = new this._pako.Inflate({
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
    super(...e), o(this, "_pako", n(777915))
  }
}), d.push(class extends f {
  static canUse() {
    returnfalse
  }
  bindWebSocket(e) {
    this.close(), this._socketId = e._socketId, (0, s.y)() ? (0, i.isAndroid)() ? null == c || c.enableZstdStreamSupport(this._socketId) : l.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0) : (0, i.isAndroid)() ? null == c || c.enableZlibStreamSupport(this._socketId) : l.DCDCompressionManager.enableZlibStreamSupport(this._socketId)
  }
  getAlgorithm() {
    return (0, s.y)() ? "zstd-stream" : "zlib-stream"
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
    this._socketId = null, null !== e && ((0, i.isAndroid)() ? null == c || c.disableZlibStreamSupport(e) : l.DCDCompressionManager.disableZlibStreamSupport(e))
  }
  constructor(e) {
    super(e), o(this, "_socketId", true), this._socketId = null
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
  if (a.P.isDiscordGatewayPlaintextSet()) return new p(e);
  for (var t of d)
    if (t.canUse()) return new t(e);
  return new p(e)
}
d.push(p)