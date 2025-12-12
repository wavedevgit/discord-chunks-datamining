/** Chunk was on web.js **/
/** chunk id: 973408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => s
});
var Chunk69122 = require("./69122.js"),
  Chunk825842 = require("./825842.js"),
  Chunk17146 = require("./17146.js");
let o = {
  writeUnknownFields: true,
  writerFactory: () => new l
};

function s(e) {
  return e ? Object.assign(Object.assign({}, o), e) : o
}
class l {
  constructor(e) {
    this.stack = [], this.textEncoder = null != e ? e : new TextEncoder, this.chunks = [], this.buf = []
  }
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let e = 0;
    for (let t = 0; exports < this.chunks.length; exports++) e += this.chunks[exports].length;
    let t = new Uint8Array(module),
      n = 0;
    for (let e = 0; module < this.chunks.length; module++) exports.set(this.chunks[module], require), n += this.chunks[module].length;
    return this.chunks = [], exports
  }
  fork() {
    return this.stack.push({
      chunks: this.chunks,
      buf: this.buf
    }), this.chunks = [], this.buf = [], this
  }
  join() {
    let e = this.finish(),
      t = this.stack.pop();
    if (!exports) throw Error("invalid state, fork stack empty");
    return this.chunks = exports.chunks, this.buf = exports.buf, this.uint32(module.byteLength), this.raw(module)
  }
  tag(e, t) {
    return this.uint32((e << 3 | t) >>> 0)
  }
  raw(e) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
  }
  uint32(e) {
    for ((0, a.fp)(e); e > 127;) this.buf.push(127 & e | 128), e >>>= 7;
    return this.buf.push(e), this
  }
  int32(e) {
    return (0, a.ug)(e), (0, i.fC)(e, this.buf), this
  }
  bool(e) {
    return this.buf.push(+!!e), this
  }
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e)
  }
  string(e) {
    let t = this.textEncoder.encode(e);
    return this.uint32(t.byteLength), this.raw(t)
  }
  float(e) {
    (0, a.E_)(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setFloat32(0, e, true), this.raw(t)
  }
  double(e) {
    let t = new Uint8Array(8);
    return new DataView(t.buffer).setFloat64(0, e, true), this.raw(t)
  }
  fixed32(e) {
    (0, a.fp)(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, true), this.raw(t)
  }
  sfixed32(e) {
    (0, a.ug)(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, true), this.raw(t)
  }
  sint32(e) {
    return (0, a.ug)(e), e = (e << 1 ^ e >> 31) >>> 0, (0, i.fC)(e, this.buf), this
  }
  sfixed64(e) {
    let t = new Uint8Array(8),
      n = new DataView(t.buffer),
      i = r.M.from(e);
    return n.setInt32(0, i.lo, true), n.setInt32(4, i.hi, true), this.raw(t)
  }
  fixed64(e) {
    let t = new Uint8Array(8),
      n = new DataView(t.buffer),
      i = r.p.from(e);
    return n.setInt32(0, i.lo, true), n.setInt32(4, i.hi, true), this.raw(t)
  }
  int64(e) {
    let t = r.M.from(e);
    return (0, i._y)(t.lo, t.hi, this.buf), this
  }
  sint64(e) {
    let t = r.M.from(e),
      n = t.hi >> 31,
      a = t.lo << 1 ^ n,
      o = (t.hi << 1 | t.lo >>> 31) ^ n;
    return (0, i._y)(a, o, this.buf), this
  }
  uint64(e) {
    let t = r.p.from(e);
    return (0, i._y)(t.lo, t.hi, this.buf), this
  }
}