/** Chunk was on web.js **/
"use strict";
var r, i = n(24033),
  o = n(94567),
  a = n(202234),
  s = n(624906),
  l = n(620623),
  c = n(722063),
  u = n(883539),
  d = ">",
  f = "<",
  _ = "prototype",
  p = "script",
  h = u("IE_PROTO"),
  m = function() {},
  g = function(e) {
    return f + p + d + e + f + "/" + p + d
  },
  E = function(e) {
    e.write(g("")), e.close();
    var t = e.parentWindow.Object;
    return e = null, t
  },
  v = function() {
    var e, t = c("iframe"),
      n = "java" + p + ":";
    return t.style.display = "none", l.appendChild(t), t.src = String(n), (e = t.contentWindow.document).open(), e.write(g("document.F=Object")), e.close(), e.F
  },
  b = function() {
    try {
      r = new ActiveXObject("htmlfile")
    } catch (e) {}
    b = "undefined" != typeof document ? document.domain && r ? E(r) : v() : E(r);
    for (var e = a.length; e--;) delete b[_][a[e]];
    return b()
  };
s[h] = !0, e.exports = Object.create || function(e, t) {
  var n;
  return null !== e ? (m[_] = i(e), n = new m, m[_] = null, n[h] = e) : n = b(), void 0 === t ? n : o.f(n, t)
}