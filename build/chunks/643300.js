/** Chunk was on web.js **/
/** chunk id: 643300, original params: e,t,n (module,exports,re quire) **/
var Chunk994665 = require("./994665.js"),
  i = "Expected a function";

function a(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError(i);
  var n = function() {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      a = n.cache;
    if (a.has(i)) return a.get(i);
    var s = e.apply(this, r);
    return n.cache = a.set(i, s) || a, s
  };
  return n.cache = new(a.Cache || r), n
}
a.Cache = Chunk994665, module.exports = a