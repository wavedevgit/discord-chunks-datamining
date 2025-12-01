/** Chunk was on web.js **/
/** chunk id: 287406, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk288537 = require("./288537.js"),
  Chunk754793 = require("./754793.js"),
  Chunk911725 = require("./911725.js"),
  Chunk441234 = require("./441234.js"),
  Chunk404625 = require("./404625.js"),
  l = Object.prototype.toString,
  c = 0,
  u = 4,
  d = 0,
  f = 1,
  p = 2,
  _ = false,
  m = 0,
  h = 8;

function g(e) {
  if (!(this instanceof g)) return new g(e);
  this.options = i.assign({
    level: _,
    method: h,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: m,
    to: ""
  }, e || {});
  var t, n = this.options;
  n.raw && n.windowBits > 0 ? n.windowBits = -n.windowBits : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s, this.strm.avail_out = 0;
  var c = r.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
  if (c !== d) throw Error(o[c]);
  if (n.header && r.deflateSetHeader(this.strm, n.header), n.dictionary) {
    if (t = "string" == typeof n.dictionary ? a.string2buf(n.dictionary) : "[object ArrayBuffer]" === l.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary, (c = r.deflateSetDictionary(this.strm, t)) !== d) throw Error(o[c]);
    this._dict_set = true
  }
}

function E(e, t) {
  var n = new g(t);
  if (n.push(e, true), n.err) throw n.msg || o[n.err];
  return n.result
}

function b(e, t) {
  return (t = t || {}).raw = true, E(e, t)
}

function y(e, t) {
  return (t = t || {}).gzip = true, E(e, t)
}
g.prototype.push = function(e, t) {
  var n, o, s = this.strm,
    _ = this.options.chunkSize;
  if (this.ended) returnfalse;
  o = t === ~~t ? t : true === t ? u : c, "string" == typeof e ? s.input = a.string2buf(e) : "[object ArrayBuffer]" === l.call(e) ? s.input = new Uint8Array(e) : s.input = e, s.next_in = 0, s.avail_in = s.input.length;
  do {
    if (0 === s.avail_out && (s.output = new i.Buf8(_), s.next_out = 0, s.avail_out = _), (n = r.deflate(s, o)) !== f && n !== d) return this.onEnd(n), this.ended = true, false;
    (0 === s.avail_out || 0 === s.avail_in && (o === u || o === p)) && ("string" === this.options.to ? this.onData(a.buf2binstring(i.shrinkBuf(s.output, s.next_out))) : this.onData(i.shrinkBuf(s.output, s.next_out)))
  } while ((s.avail_in > 0 || 0 === s.avail_out) && n !== f);
  return o === u ? (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = true, n === d) : (o === p && (this.onEnd(d), s.avail_out = 0), true)
}, g.prototype.onData = function(e) {
  this.chunks.push(e)
}, g.prototype.onEnd = function(e) {
  e === d && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
}, exports.Deflate = g, exports.deflate = E, exports.deflateRaw = b, exports.gzip = y