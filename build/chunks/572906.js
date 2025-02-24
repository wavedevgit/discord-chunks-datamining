/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
var r = n(546299),
  i = n(740245);

function o() {
  if (!(this instanceof o)) return new o;
  i.call(this), this.h = [0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4]
}
r.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function(e) {
  return "hex" === e ? r.toHex32(this.h.slice(0, 12), "big") : r.split32(this.h.slice(0, 12), "big")
}