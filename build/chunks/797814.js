/** Chunk was on 896 **/
/** chunk id: 797814, original params: e,r,t (module,exports,require) **/
var Chunk35910 = require("./35910.js"),
  l = require("./797407.js").default;
module.exports = function(e, r) {
  if ("object" != l(e) || !e) return e;
  var t = e[a];
  if (true !== t) {
    var o = t.call(e, r || "default");
    if ("object" != l(o)) return o;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === r ? String : Number)(e)
}, module.exports.__esModule = true, module.exports.default = module.exports