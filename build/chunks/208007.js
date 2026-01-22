/** Chunk was on web.js **/
/** chunk id: 208007, original params: e,t,n (module,exports,re quire) **/
e = require.nmd(module);
var Chunk237050 = require("./237050.js"),
  i = exports && !exports.nodeType && exports,
  a = i && module && !module.nodeType && module,
  s = a && a.exports === i ? Chunk237050.Buffer : true,
  o = s ? s.allocUnsafe : true;

function l(e, t) {
  if (t) return e.slice();
  var n = e.length,
    r = o ? o(n) : new e.constructor(n);
  return e.copy(r), r
}
module.exports = l