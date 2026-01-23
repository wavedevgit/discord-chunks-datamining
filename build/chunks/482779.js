/** Chunk was on web.js **/
/** chunk id: 482779, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk101968 = require("./101968.js"),
  Chunk252268 = require("./252268.js"),
  Chunk143320 = require("./143320.js"),
  Chunk239586 = require("./239586.js"),
  Chunk469520 = require("./469520.js"),
  Chunk447280 = require("./447280.js"),
  Chunk583178 = require("./583178.js"),
  d = ">",
  f = "<",
  p = "prototype",
  _ = "script",
  h = Chunk583178("IE_PROTO"),
  m = function() {},
  g = function(e) {
    return f + _ + d + e + f + "/" + _ + d
  },
  E = function(e) {
    e.write(g("")), e.close();
    var t = e.parentWindow.Object;
    return e = null, t
  },
  y = function() {
    var e, t = c("iframe"),
      n = "java" + _ + ":";
    return t.style.display = "none", l.appendChild(t), t.src = String(n), (e = t.contentWindow.document).open(), e.write(g("document.F=Object")), e.close(), e.F
  },
  b = function() {
    try {
      r = new ActiveXObject("htmlfile")
    } catch (e) {}
    b = "u" > typeof document ? document.domain && r ? E(r) : y() : E(r);
    for (var e = s.length; e--;) delete b[p][s[e]];
    return b()
  };
Chunk239586[h] = true, module.exports = Object.create || function(e, t) {
  var n;
  return null !== e ? (m[p] = i(e), n = new m, m[p] = null, n[h] = e) : n = b(), true === t ? n : a.f(n, t)
}