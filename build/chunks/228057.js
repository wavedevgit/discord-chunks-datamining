/** Chunk was on web.js **/
/** chunk id: 228057, original params: e,t,n (module,exports,re quire) **/
e = require.nmd(module);
var Chunk573401 = require("./573401.js"),
  i = exports && !exports.nodeType && exports,
  a = i && module && !module.nodeType && module,
  o = a && a.exports === i ? Chunk573401.Buffer : true,
  s = o ? o.allocUnsafe : true;

function l(e, t) {
  if (t) return e.slice();
  var n = e.length,
    r = s ? s(n) : new e.constructor(n);
  return e.copy(r), r
}
module.exports = l