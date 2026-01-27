/** Chunk was on web.js **/
/** chunk id: 509860, original params: e,t,n (module,exports,re quire) **/
var Chunk586443 = require("./586443.js"),
  Chunk683715 = require("./683715.js"),
  Chunk646344 = require("./646344.js"),
  Chunk731214 = require("./731214.js"),
  s = /[\\^$.*+?()[\]{}|]/g,
  l = /^\[object .+?Constructor\]$/,
  c = Object.prototype,
  u = Function.prototype.toString,
  d = c.hasOwnProperty,
  f = RegExp("^" + u.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function(e) {
  return !(!a(e) || i(e)) && (r(e) ? f : l).test(o(e))
}