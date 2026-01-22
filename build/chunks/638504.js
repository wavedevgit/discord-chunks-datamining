/** Chunk was on web.js **/
/** chunk id: 638504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => l,
  e: () => o
});
var Chunk852015 = require("./852015.js"),
  Chunk82180 = require("./82180.js"),
  Chunk679314 = require("./679314.js");
let s = {
  readUnknownField: true,
  readerFactory: e => new l(e)
};

function o(e) {
  return e ? Object.assign(Object.assign({}, s), e) : s
}
class l {
  constructor(e, t) {
    this.varint64 = a.ls, this.uint32 = a.Gn, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = null != t ? t : new TextDecoder("utf-8", {
      fatal: true,
      ignoreBOM: true
    })
  }
  tag() {
    let e = this.uint32(),
      t = e >>> 3,
      n = 7 & e;
    if (t <= 0 || n < 0 || n > 5) throw Error("illegal tag: field no " + t + " wire type " + n);
    return [t, n]
  }
  skip(e) {
    let t = this.pos;
    switch (e) {
      case r.O0.Varint:
        for (; 128 & this.buf[this.pos++];);
        break;
      case r.O0.Bit64:
        this.pos += 4;
      case r.O0.Bit32:
        this.pos += 4;
        break;
      case r.O0.LengthDelimited:
        let n = this.uint32();
        this.pos += n;
        break;
      case r.O0.StartGroup:
        let i;
        for (;
          (i = this.tag()[1]) !== r.O0.EndGroup;) this.skip(i);
        break;
      default:
        throw Error("cant skip wire type " + e)
    }
    return this.assertBounds(), this.buf.subarray(t, this.pos)
  }
  assertBounds() {
    if (this.pos > this.len) throw RangeError("premature EOF")
  }
  int32() {
    return 0 | this.uint32()
  }
  sint32() {
    let e = this.uint32();
    return e >>> 1 ^ -(1 & e)
  }
  int64() {
    return new i.h(...this.varint64())
  }
  uint64() {
    return new i.e(...this.varint64())
  }
  sint64() {
    let [e, t] = this.varint64(), n = -(1 & e);
    return e = (e >>> 1 | (1 & t) << 31) ^ n, t = t >>> 1 ^ n, new i.h(e, t)
  }
  bool() {
    let [e, t] = this.varint64();
    return 0 !== e || 0 !== t
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, true)
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, true)
  }
  fixed64() {
    return new i.e(this.sfixed32(), this.sfixed32())
  }
  sfixed64() {
    return new i.h(this.sfixed32(), this.sfixed32())
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, true)
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, true)
  }
  bytes() {
    let e = this.uint32(),
      t = this.pos;
    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
  }
  string() {
    return this.textDecoder.decode(this.bytes())
  }
}