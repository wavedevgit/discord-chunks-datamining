/** Chunk was on 80451 **/
/** chunk id: 688594, original params: e,r,t (module,exports,require) **/
var Chunk728992 = require("./728992.js"),
  o = require("./283344.js").default;
module.exports = function(e, r) {
  if ("object" != o(e) || !e) return e;
  var t = e[a];
  if (true !== t) {
    var n = t.call(e, r || "default");
    if ("object" != o(n)) return n;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === r ? String : Number)(e)
}, module.exports.__esModule = true, module.exports.default = module.exports