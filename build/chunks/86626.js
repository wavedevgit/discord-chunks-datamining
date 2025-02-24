/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
var r = n(689118),
  i = n(849490),
  o = n(676972),
  a = n(957578).Buffer,
  s = Array(64);

function l() {
  this.init(), this._w = s, o.call(this, 64, 56)
}
r(l, i), l.prototype.init = function() {
  return this._a = 0xc1059ed8, this._b = 0x367cd507, this._c = 0x3070dd17, this._d = 0xf70e5939, this._e = 0xffc00b31, this._f = 0x68581511, this._g = 0x64f98fa7, this._h = 0xbefa4fa4, this
}, l.prototype._hash = function() {
  var e = a.allocUnsafe(28);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
}, e.exports = l