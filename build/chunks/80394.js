/** Chunk was on 80628 **/
/** chunk id: 80394, original params: e,t,n (module,exports,require) **/
function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  A: () => r
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./65821.js"), require("./896048.js"), require("./834879.js"), require("./321073.js");
class a {
  appendBytes(e) {
    if (this._offset + e.length > this._buffer.length) {
      let t = this._offset + e.length,
        n = new Uint8Array(Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))));
      n.set(this._buffer.subarray(0, this._offset)), this._buffer = n
    }
    this._buffer.set(e, this._offset), this._offset += e.length
  }
  addPage(e) {
    if (e.segments.length > 255) throw Error("Too many segments: ".concat(e.segments.length, " exceeds limit of ").concat(255));
    for (let [t, n] of e.segments.entries())
      if (n.length > 255) throw Error("Segment at index ".concat(t, " too large (length ").concat(n.length, " exceeds ").concat(255, ")"));
    let t = e.segments.reduce((e, t) => e + t.length, 0),
      n = 27 + e.segments.length + t;
    if (n > 65307) throw Error("Page too large (size ".concat(n, " exceeds ").concat(65307, ")"));
    let i = this._offset,
      a = 0;
    switch (e.pageType) {
      case 1:
        a = 1;
        break;
      case 2:
        a = 2;
        break;
      case 4:
        a = 4
    }
    this.appendBytes([79, 103, 103, 83, 0, a, 255 & e.granulePosition, e.granulePosition >> 8 & 255, e.granulePosition >> 16 & 255, e.granulePosition >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 1, 255 & this._pageSequenceNumber, this._pageSequenceNumber >> 8 & 255, this._pageSequenceNumber >> 16 & 255, this._pageSequenceNumber >> 24 & 255]);
    let r = this._offset;
    for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]), this.appendBytes(e.segments.map(e => e.length)), e.segments)) this.appendBytes(t);
    let o = this._buffer.subarray(i, this._offset).reduce((e, t) => e << 8 >>> 0 ^ l[e >>> 24 ^ t], 0) >>> 0;
    this._buffer.set([255 & o, o >> 8 & 255, o >> 16 & 255, o >> 24 & 255], r), this._pageSequenceNumber++
  }
  finalize(e) {
    this.addPage({
      pageType: 4,
      granulePosition: e,
      segments: []
    });
    let t = this._buffer,
      n = this._offset;
    return this._buffer = new Uint8Array(4096), this._offset = 0, this._pageSequenceNumber = 0, t.subarray(0, n)
  }
  constructor() {
    i(this, "_buffer", new Uint8Array(4096)), i(this, "_pageSequenceNumber", 0), i(this, "_offset", 0)
  }
}

function r(e, t) {
  let n = new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100, 1, t.channelCount, 0, 0, 255 & t.inputSampleRate, t.inputSampleRate >> 8 & 255, t.inputSampleRate >> 16 & 255, t.inputSampleRate >> 24 & 255, 255 & t.outputGain, t.outputGain >> 8 & 255, t.channelMappingFamily]),
    i = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
    r = new a;
  r.addPage({
    pageType: 2,
    granulePosition: 0,
    segments: [n]
  });
  let l = 0;
  for (let t of (r.addPage({
      pageType: 0,
      granulePosition: l,
      segments: [i]
    }), e)) {
    let e = function(e) {
      let t = Math.floor(e.length / 255),
        n = [];
      for (let i = 0; i <= t; i++) {
        let a = 0 === i ? 0 : 255 * i,
          r = i === t ? e.length : (i + 1) * 255;
        n.push(e.slice(a, r))
      }
      return n
    }(t.buffer);
    l += t.numSamples, r.addPage({
      pageType: 0,
      granulePosition: l,
      segments: e
    })
  }
  return r.finalize(l)
}
let l = function() {
  let e = new Uint32Array(256);
  for (let t = 256; t > 0; t--) {
    let n = t << 24;
    for (let e = 8; e > 0; e--) n = 0x80000000 & n ? 0x4c11db7 ^ n << 1 : n << 1;
    e[t] = n
  }
  return e
}()