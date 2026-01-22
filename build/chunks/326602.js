/** Chunk was on web.js **/
/** chunk id: 326602, original params: e,t,n (module,exports,re quire) **/
var Chunk634622 = require("./634622.js"),
  Chunk585022 = require("./585022.js"),
  Chunk581006 = require("./581006.js"),
  s = 200;
module.exports = function(e, t) {
  var n = this.__data__;
  if (n instanceof r) {
    var o = n.__data__;
    if (!i || o.length < s - 1) return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new a(o)
  }
  return n.set(e, t), this.size = n.size, this
}