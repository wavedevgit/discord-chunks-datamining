/** Chunk was on web.js **/
/** chunk id: 440073, original params: e,t,n (module,exports,re quire) **/
var Chunk815869 = require("./815869.js"),
  i = Array.prototype.splice;
module.exports = function(e) {
  var t = this.__data__,
    n = r(t, e);
  return !(n < 0) && (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, true)
}