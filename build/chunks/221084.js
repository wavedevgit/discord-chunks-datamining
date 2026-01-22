/** Chunk was on web.js **/
/** chunk id: 221084, original params: e,t,n (module,exports,re quire) **/
var Chunk509185 = require("./509185.js"),
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