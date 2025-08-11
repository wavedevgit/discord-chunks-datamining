/** Chunk was on web.js **/
/** chunk id: 299578, original params: e,t,n (module,exports,re quire) **/
var Chunk807419 = require("./807419.js"),
  Chunk143283 = require("./143283.js"),
  Chunk706627 = require("./706627.js"),
  Chunk19235 = require("./19235.js"),
  s = /[\\^$.*+?()[\]{}|]/g,
  l = /^\[object .+?Constructor\]$/,
  c = Object.prototype,
  u = Function.prototype.toString,
  d = c.hasOwnProperty,
  f = RegExp("^" + u.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function(e) {
  return !(!o(e) || i(e)) && (r(e) ? f : l).test(a(e))
}