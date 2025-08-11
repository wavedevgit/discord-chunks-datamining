/** Chunk was on web.js **/
/** chunk id: 660326, original params: e,t,n (module,exports,re quire) **/
var Chunk521092 = require("./521092.js"),
  Chunk824362 = require("./824362.js"),
  Chunk672744 = require("./672744.js"),
  Chunk170630 = require("./170630.js"),
  Chunk306216 = require("./306216.js");

function l(e) {
  var t = false,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1])
  }
}
l.prototype.clear = Chunk521092, l.prototype.delete = Chunk824362, l.prototype.get = Chunk672744, l.prototype.has = Chunk170630, l.prototype.set = Chunk306216, module.exports = l