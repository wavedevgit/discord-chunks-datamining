/** Chunk was on web.js **/
/** chunk id: 457853, original params: e,t,n (module,exports,re quire) **/
var Chunk900624 = require("./900624.js"),
  Chunk117973 = require("./117973.js"),
  Chunk302767 = require("./302767.js"),
  a = 200;
module.exports = function(e, t) {
  var n = this.__data__;
  if (n instanceof r) {
    var s = n.__data__;
    if (!i || s.length < a - 1) return s.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new o(s)
  }
  return n.set(e, t), this.size = n.size, this
}