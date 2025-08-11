/** Chunk was on web.js **/
/** chunk id: 900624, original params: e,t,n (module,exports,re quire) **/
var Chunk853647 = require("./853647.js"),
  Chunk440073 = require("./440073.js"),
  Chunk497903 = require("./497903.js"),
  Chunk843832 = require("./843832.js"),
  Chunk687074 = require("./687074.js");

function l(e) {
  var t = false,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1])
  }
}
l.prototype.clear = Chunk853647, l.prototype.delete = Chunk440073, l.prototype.get = Chunk497903, l.prototype.has = Chunk843832, l.prototype.set = Chunk687074, module.exports = l