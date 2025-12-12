/** Chunk was on web.js **/
/** chunk id: 569506, original params: e,t,n (module,exports,re quire) **/
var Chunk867996 = require("./867996.js"),
  Chunk350780 = require("./350780.js"),
  Chunk661233 = require("./661233.js"),
  Chunk785775 = require("./785775.js"),
  s = /[\\^$.*+?()[\]{}|]/g,
  l = /^\[object .+?Constructor\]$/,
  c = Object.prototype,
  u = Function.prototype.toString,
  d = c.hasOwnProperty,
  f = RegExp("^" + u.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function(e) {
  return !(!a(e) || i(e)) && (r(e) ? f : l).test(o(e))
}