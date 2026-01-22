/** Chunk was on web.js **/
/** chunk id: 133084, original params: e,t,n (module,exports,re quire) **/
var r = require("./412013.js").default;
module.exports = function(e, t) {
  if ("object" != r(e) || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var i = n.call(e, t || "default");
    if ("object" != r(i)) return i;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}, module.exports.__esModule = true, module.exports.default = module.exports