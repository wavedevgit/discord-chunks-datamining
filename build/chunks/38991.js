/** Chunk was on web.js **/
/** chunk id: 38991, original params: e,t,n (module,exports,re quire) **/
var Chunk99302 = require("./99302.js"),
  Chunk632516 = require("./632516.js"),
  Chunk509185 = require("./509185.js"),
  Chunk429397 = require("./429397.js"),
  s = /[\\^$.*+?()[\]{}|]/g,
  l = /^\[object .+?Constructor\]$/,
  c = Object.prototype,
  u = Function.prototype.toString,
  d = c.hasOwnProperty,
  f = RegExp("^" + u.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function(e) {
  return !(!a(e) || i(e)) && (r(e) ? f : l).test(o(e))
}