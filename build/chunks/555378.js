/** Chunk was on 84018 **/
/** chunk id: 555378, original params: e,t,n (module,exports,require) **/
var Chunk66823 = require("./66823.js"),
  Chunk274581 = require("./274581.js"),
  Chunk279137 = require("./279137.js"),
  Chunk659671 = require("./659671.js");
module.exports = function(e) {
  return function(t) {
    var n = r(t = l(t)) ? s(t) : true,
      o = n ? n[0] : t.charAt(0),
      a = n ? i(n, 1).join("") : t.slice(1);
    return o[e]() + a
  }
}