/** Chunk was on web.js **/
/** chunk id: 862949, original params: e,t,n (module,exports,re quire) **/
var Chunk578795 = require("./578795.js"),
  Chunk624443 = require("./624443.js"),
  Chunk994665 = require("./994665.js"),
  o = 200;
module.exports = function(e, t) {
  var n = this.__data__;
  if (n instanceof r) {
    var s = n.__data__;
    if (!i || s.length < o - 1) return s.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new a(s)
  }
  return n.set(e, t), this.size = n.size, this
}