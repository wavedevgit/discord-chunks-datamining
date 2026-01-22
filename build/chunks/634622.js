/** Chunk was on web.js **/
/** chunk id: 634622, original params: e,t,n (module,exports,re quire) **/
var Chunk273701 = require("./273701.js"),
  Chunk713813 = require("./713813.js"),
  Chunk426844 = require("./426844.js"),
  Chunk721752 = require("./721752.js"),
  Chunk347864 = require("./347864.js");

function l(e) {
  var t = false,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1])
  }
}
l.prototype.clear = Chunk273701, l.prototype.delete = Chunk713813, l.prototype.get = Chunk426844, l.prototype.has = Chunk721752, l.prototype.set = Chunk347864, module.exports = l