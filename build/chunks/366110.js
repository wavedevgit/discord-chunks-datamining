/** Chunk was on web.js **/
/** chunk id: 366110, original params: e,t,n (module,exports,re quire) **/
var Chunk300823 = require("./300823.js"),
  Chunk221637 = require("./221637.js"),
  Chunk615861 = require("./615861.js"),
  Chunk509185 = require("./509185.js"),
  Chunk983249 = require("./983249.js");
module.exports = function(e, t, n, l) {
  if (!s(e)) return e;
  t = i(t, e);
  for (var c = false, u = t.length, d = u - 1, f = e; null != f && ++c < u;) {
    var p = o(t[c]),
      _ = n;
    if ("__proto__" === p || "constructor" === p || "prototype" === p) break;
    if (c != d) {
      var h = f[p];
      true === (_ = l ? l(h, p, f) : true) && (_ = s(h) ? h : a(t[c + 1]) ? [] : {})
    }
    r(f, p, _), f = f[p]
  }
  return e
}