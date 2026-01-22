/** Chunk was on web.js **/
/** chunk id: 960890, original params: e,t,n (module,exports,re quire) **/
var Chunk42265 = require("./42265.js");

function i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, r(i.key), i)
  }
}
module.exports = function(e, t, n) {
  return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {
    writable: false
  }), e
}, module.exports.__esModule = true, module.exports.default = module.exports