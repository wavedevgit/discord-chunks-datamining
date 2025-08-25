/** Chunk was on web.js **/
/** chunk id: 241405, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk223509 = require("./223509.js"),
  Chunk754793 = require("./754793.js"),
  Chunk911725 = require("./911725.js"),
  Chunk154470 = require("./154470.js"),
  Chunk441234 = require("./441234.js"),
  Chunk404625 = require("./404625.js"),
  Chunk769667 = require("./769667.js"),
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
  if (n !== a.Z_OK) throw Error(s[n]);
  this.header = new c, r.inflateGetHeader(this.strm, this.header)
}

function f(e, t) {
  var n = new d(t);
  if (n.push(e, true), n.err) throw n.msg || s[n.err];
  return n.result
}

function _(e, t) {
  return (t = t || {}).raw = true, f(e, t)
}
d.prototype.push = function(e, t) {
  var n, s, l, c, d, f, _ = this.strm,
    p = this.options.chunkSize,
    h = this.options.dictionary,
    m = false;
  if (this.ended) returnfalse;
  s = t === ~~t ? t : true === t ? a.Z_FINISH : a.Z_NO_FLUSH, "string" == typeof e ? _.input = o.binstring2buf(e) : "[object ArrayBuffer]" === u.call(e) ? _.input = new Uint8Array(e) : _.input = e, _.next_in = 0, _.avail_in = _.input.length;
  do {
    if (0 === _.avail_out && (_.output = new i.Buf8(p), _.next_out = 0, _.avail_out = p), (n = r.inflate(_, a.Z_NO_FLUSH)) === a.Z_NEED_DICT && h && (f = "string" == typeof h ? o.string2buf(h) : "[object ArrayBuffer]" === u.call(h) ? new Uint8Array(h) : h, n = r.inflateSetDictionary(this.strm, f)), n === a.Z_BUF_ERROR && true === m && (n = a.Z_OK, m = false), n !== a.Z_STREAM_END && n !== a.Z_OK) return this.onEnd(n), this.ended = true, false;
    _.next_out && (0 === _.avail_out || n === a.Z_STREAM_END || 0 === _.avail_in && (s === a.Z_FINISH || s === a.Z_SYNC_FLUSH)) && ("string" === this.options.to ? (l = o.utf8border(_.output, _.next_out), c = _.next_out - l, d = o.buf2string(_.output, l), _.next_out = c, _.avail_out = p - c, c && i.arraySet(_.output, _.output, l, c, 0), this.onData(d)) : this.onData(i.shrinkBuf(_.output, _.next_out))), 0 === _.avail_in && 0 === _.avail_out && (m = true)
  } while ((_.avail_in > 0 || 0 === _.avail_out) && n !== a.Z_STREAM_END);
  return (n === a.Z_STREAM_END && (s = a.Z_FINISH), s === a.Z_FINISH) ? (n = r.inflateEnd(this.strm), this.onEnd(n), this.ended = true, n === a.Z_OK) : (s === a.Z_SYNC_FLUSH && (this.onEnd(a.Z_OK), _.avail_out = 0), true)
}, d.prototype.onData = function(e) {
  this.chunks.push(e)
}, d.prototype.onEnd = function(e) {
  e === a.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
}, exports.Inflate = d, exports.inflate = f, exports.inflateRaw = _, exports.ungzip = f