/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
var r = n(689118),
  i = n(807799),
  o = n(676972),
  a = n(957578).Buffer,
  s = Array(160);

function l() {
  this.init(), this._w = s, o.call(this, 128, 112)
}
r(l, i), l.prototype.init = function() {
  return this._ah = 0xcbbb9d5d, this._bh = 0x629a292a, this._ch = 0x9159015a, this._dh = 0x152fecd8, this._eh = 0x67332667, this._fh = 0x8eb44a87, this._gh = 0xdb0c2e0d, this._hh = 0x47b5481d, this._al = 0xc1059ed8, this._bl = 0x367cd507, this._cl = 0x3070dd17, this._dl = 0xf70e5939, this._el = 0xffc00b31, this._fl = 0x68581511, this._gl = 0x64f98fa7, this._hl = 0xbefa4fa4, this
}, l.prototype._hash = function() {
  var e = a.allocUnsafe(48);

  function t(t, n, r) {
    e.writeInt32BE(t, r), e.writeInt32BE(n, r + 4)
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
}, e.exports = l