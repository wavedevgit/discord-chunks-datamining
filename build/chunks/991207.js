/** Chunk was on 94678 **/
/** chunk id: 991207, original params: t,r,e (module,exports,require) **/
"use strict";
var n, Chunk155084 = require("./155084.js"),
  Chunk51784 = require("./51784.js"),
  Chunk940580 = require("./940580.js"),
  Chunk760326 = require("./760326.js"),
  Chunk784932 = require("./784932.js"),
  Chunk273900 = require("./273900.js"),
  Chunk157494 = require("./157494.js"),
  p = "prototype",
  l = "script",
  v = Chunk157494("IE_PROTO"),
  y = function() {},
  h = function(t) {
    return "<" + l + ">" + t + "</" + l + ">"
  },
  x = function(t) {
    t.write(h("")), t.close();
    var r = t.parentWindow.Object;
    return t = null, r
  },
  d = function() {
    var t, r = a("iframe");
    return r.style.display = "none", c.appendChild(r), r.src = String("java" + l + ":"), (t = r.contentWindow.document).open(), t.write(h("document.F=Object")), t.close(), t.F
  },
  g = function() {
    try {
      n = new ActiveXObject("htmlfile")
    } catch (t) {}
    g = "u" > typeof document ? document.domain && n ? x(n) : d() : x(n);
    for (var t = i.length; t--;) delete g[p][i[t]];
    return g()
  };
Chunk760326[v] = true, module.exports = Object.create || function(t, r) {
  var e;
  return null !== t ? (y[p] = o(t), e = new y, y[p] = null, e[v] = t) : e = g(), true === r ? e : s.f(e, r)
}