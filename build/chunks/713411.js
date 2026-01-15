/** Chunk was on web.js **/
/** chunk id: 713411, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk179122 = require("./179122.js"),
  Chunk465034 = require("./465034.js"),
  Chunk344894 = require("./344894.js"),
  Chunk485073 = require("./485073.js"),
  Chunk620394 = require("./620394.js"),
  Chunk809290 = require("./809290.js"),
  Chunk661314 = require("./661314.js"),
  d = ">",
  f = "<",
  p = "prototype",
  _ = "script",
  h = Chunk661314("IE_PROTO"),
  m = function() {},
  g = function(e) {
    return f + _ + d + e + f + "/" + _ + d
  },
  E = function(e) {
    e.write(g("")), e.close();
    var t = e.parentWindow.Object;
    return e = null, t
  },
  b = function() {
    var e, t = c("iframe"),
      n = "java" + _ + ":";
    return t.style.display = "none", l.appendChild(t), t.src = String(n), (e = t.contentWindow.document).open(), e.write(g("document.F=Object")), e.close(), e.F
  },
  y = function() {
    try {
      r = new ActiveXObject("htmlfile")
    } catch (e) {}
    y = "undefined" != typeof document ? document.domain && r ? E(r) : b() : E(r);
    for (var e = o.length; e--;) delete y[p][o[e]];
    return y()
  };
Chunk485073[h] = true, module.exports = Object.create || function(e, t) {
  var n;
  return null !== e ? (m[p] = i(e), n = new m, m[p] = null, n[h] = e) : n = y(), true === t ? n : a.f(n, t)
}