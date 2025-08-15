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
  _ = "prototype",
  p = "script",
  h = Chunk661314("IE_PROTO"),
  m = function() {},
  g = function(e) {
    return f + p + d + e + f + "/" + p + d
  },
  E = function(e) {
    e.write(g("")), e.close();
    var t = e.parentWindow.Object;
    return e = null, t
  },
  b = function() {
    var e, t = Chunk809290("iframe"),
      n = "java" + p + ":";
    return exports.style.display = "none", Chunk620394.appendChild(exports), exports.src = String(require), (e = exports.contentWindow.document).open(), module.write(g("document.F=Object")), module.close(), module.F
  },
  y = function() {
    try {
      r = new ActiveXObject("htmlfile")
    } catch (e) {}
    y = "undefined" != typeof document ? document.domain && r ? E(r) : b() : E(r);
    for (var e = Chunk344894.length; module--;) delete y[_][Chunk344894[module]];
    return y()
  };
Chunk485073[h] = true, module.exports = Object.create || function(e, t) {
  var n;
  return null !== e ? (m[_] = i(e), n = new m, m[_] = null, n[h] = e) : n = y(), true === t ? n : a.f(n, t)
}