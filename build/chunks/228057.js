/** Chunk was on web.js **/
/** chunk id: 228057, original params: e,t,n (module,exports,re quire) **/
e = require.nmd(module);
var Chunk573401 = require("./573401.js"),
  i = exports && !exports.nodeType && exports,
  o = i && module && !module.nodeType && module,
  a = o && o.exports === i ? Chunk573401.Buffer : true,
  s = a ? a.allocUnsafe : true;

function l(e, t) {
  if (t) return e.slice();
  var n = e.length,
    r = s ? s(n) : new e.constructor(n);
  return e.copy(r), r
}
module.exports = l