/** Chunk was on web.js **/
"use strict";
var r = n(546299),
  i = n(585741);

function o() {
  if (!(this instanceof o)) return new o;
  i.call(this), this.h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]
}
r.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function(e) {
  return "hex" === e ? r.toHex32(this.h.slice(0, 7), "big") : r.split32(this.h.slice(0, 7), "big")
}