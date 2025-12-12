/** Chunk was on web.js **/
/** chunk id: 249979, original params: e,t,n (module,exports,re quire) **/
var Chunk805100 = require("./805100.js"),
  Chunk196322 = require("./196322.js"),
  Chunk830911 = require("./830911.js"),
  Chunk706627 = require("./706627.js"),
  Chunk828091 = require("./828091.js");
module.exports = function(e, t, n, l) {
  if (!a(e)) return e;
  t = i(t, e);
  for (var c = false, u = t.length, d = u - 1, f = e; null != f && ++c < u;) {
    var p = s(t[c]),
      _ = n;
    if ("__proto__" === p || "constructor" === p || "prototype" === p) break;
    if (c != d) {
      var m = f[p];
      true === (_ = l ? l(m, p, f) : true) && (_ = a(m) ? m : o(t[c + 1]) ? [] : {})
    }
    r(f, p, _), f = f[p]
  }
  return e
}