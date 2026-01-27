/** Chunk was on web.js **/
/** chunk id: 821500, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk195554 = require("./195554.js"),
  Chunk549412 = require("./549412.js"),
  Chunk382811 = require("./382811.js"),
  Chunk231428 = require("./231428.js"),
  Chunk163173 = require("./163173.js"),
  Chunk267795 = require("./267795.js"),
  Chunk236525 = require("./236525.js"),
  u = Object.prototype.toString;

function d(e) {
  if (!(this instanceof d)) return new d(e);
  this.options = i.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ""
  }, e || {});
  var t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = false)), t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits) == 0 && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new l, this.strm.avail_out = 0;
  var n = r.inflateInit2(this.strm, t.windowBits);
  if (n !== o.Z_OK) throw Error(s[n]);
  this.header = new c, r.inflateGetHeader(this.strm, this.header)
}

function f(e, t) {
  var n = new d(t);
  if (n.push(e, true), n.err) throw n.msg || s[n.err];
  return n.result
}

function p(e, t) {
  return (t = t || {}).raw = true, f(e, t)
}
d.prototype.push = function(e, t) {
  var n, s, l, c, d, f, p = this.strm,
    _ = this.options.chunkSize,
    h = this.options.dictionary,
    m = false;
  if (this.ended) returnfalse;
  s = t === ~~t ? t : true === t ? o.Z_FINISH : o.Z_NO_FLUSH, "string" == typeof e ? p.input = a.binstring2buf(e) : "[object ArrayBuffer]" === u.call(e) ? p.input = new Uint8Array(e) : p.input = e, p.next_in = 0, p.avail_in = p.input.length;
  do {
    if (0 === p.avail_out && (p.output = new i.Buf8(_), p.next_out = 0, p.avail_out = _), (n = r.inflate(p, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && h && (f = "string" == typeof h ? a.string2buf(h) : "[object ArrayBuffer]" === u.call(h) ? new Uint8Array(h) : h, n = r.inflateSetDictionary(this.strm, f)), n === o.Z_BUF_ERROR && true === m && (n = o.Z_OK, m = false), n !== o.Z_STREAM_END && n !== o.Z_OK) return this.onEnd(n), this.ended = true, false;
    p.next_out && (0 === p.avail_out || n === o.Z_STREAM_END || 0 === p.avail_in && (s === o.Z_FINISH || s === o.Z_SYNC_FLUSH)) && ("string" === this.options.to ? (l = a.utf8border(p.output, p.next_out), c = p.next_out - l, d = a.buf2string(p.output, l), p.next_out = c, p.avail_out = _ - c, c && i.arraySet(p.output, p.output, l, c, 0), this.onData(d)) : this.onData(i.shrinkBuf(p.output, p.next_out))), 0 === p.avail_in && 0 === p.avail_out && (m = true)
  } while ((p.avail_in > 0 || 0 === p.avail_out) && n !== o.Z_STREAM_END);
  return (n === o.Z_STREAM_END && (s = o.Z_FINISH), s === o.Z_FINISH) ? (n = r.inflateEnd(this.strm), this.onEnd(n), this.ended = true, n === o.Z_OK) : (s === o.Z_SYNC_FLUSH && (this.onEnd(o.Z_OK), p.avail_out = 0), true)
}, d.prototype.onData = function(e) {
  this.chunks.push(e)
}, d.prototype.onEnd = function(e) {
  e === o.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
}, exports.Inflate = d, exports.inflate = f, exports.inflateRaw = p, exports.ungzip = f