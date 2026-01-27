/** Chunk was on web.js **/
/** chunk id: 326602, original params: e,t,n (module,exports,re quire) **/
var Chunk634622 = require("./634622.js"),
  Chunk585022 = require("./585022.js"),
  Chunk581006 = require("./581006.js"),
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