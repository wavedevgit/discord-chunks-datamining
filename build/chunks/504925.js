/** Chunk was on web.js **/
/** chunk id: 504925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
class r {
  constructor(e) {
    if (i(e)) throw Error("DataView: Passed buffer type is unsupported.");
    this.buffer = e, this.byteLength = this.buffer.length
  }
  getUint8(e) {
    return this.buffer.readUInt8(e)
  }
  getUint16(e, t) {
    return t ? this.buffer.readUInt16LE(e) : this.buffer.readUInt16BE(e)
  }
  getUint32(e, t) {
    return t ? this.buffer.readUInt32LE(e) : this.buffer.readUInt32BE(e)
  }
  getInt32(e, t) {
    return t ? this.buffer.readInt32LE(e) : this.buffer.readInt32BE(e)
  }
}

function i(e) {
  return "object" != typeof e || true === e.length || true === e.readUInt8 || true === e.readUInt16LE || true === e.readUInt16BE || true === e.readUInt32LE || true === e.readUInt32BE || true === e.readInt32LE || true === e.readInt32BE
}