/** Chunk was on web.js **/
/** chunk id: 381065, original params: e,t,n (module,exports,re quire) **/
var Chunk710170 = require("./710170.js"),
  Chunk481062 = require("./481062.js"),
  Chunk660326 = require("./660326.js"),
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