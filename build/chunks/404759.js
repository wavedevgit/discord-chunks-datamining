/** Chunk was on web.js **/
/** chunk id: 404759, original params: e,t,n (module,exports,re quire) **/
var Chunk660326 = require("./660326.js"),
  i = "Expected a function";

function a(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError(i);
  var n = function() {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      a = n.cache;
    if (a.has(i)) return a.get(i);
    var o = e.apply(this, r);
    return n.cache = a.set(i, o) || a, o
  };
  return n.cache = new(a.Cache || r), n
}
a.Cache = Chunk660326, module.exports = a