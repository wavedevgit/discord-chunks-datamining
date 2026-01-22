/** Chunk was on web.js **/
/** chunk id: 27934, original params: e,t,n (module,exports,re quire) **/
var Chunk833605 = require("./833605.js"),
  Chunk842741 = require("./842741.js"),
  Chunk547132 = require("./547132.js"),
  Chunk952504 = require("./952504.js"),
  Chunk505336 = require("./505336.js");

function l(e) {
  var t = false,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1])
  }
}
l.prototype.clear = Chunk833605, l.prototype.delete = Chunk842741, l.prototype.get = Chunk547132, l.prototype.has = Chunk952504, l.prototype.set = Chunk505336, module.exports = l