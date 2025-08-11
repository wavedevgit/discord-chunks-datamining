/** Chunk was on web.js **/
/** chunk id: 88579, original params: e,t,n (module,exports,re quire) **/
var Chunk706627 = require("./706627.js"),
  i = Object.create;
module.exports = function() {
  function e() {}
  return function(t) {
    if (!r(t)) return {};
    if (i) return i(t);
    e.prototype = t;
    var n = new e;
    return e.prototype = true, n
  }
}()