/** Chunk was on 50448 **/
/** chunk id: 425184, original params: t,r,n (module,exports,require) **/
"use strict";
var e, Chunk921413 = require("./921413.js"),
  Chunk410339 = require("./410339.js"),
  Chunk22590 = require("./22590.js"),
  Chunk270498 = require("./270498.js"),
  Chunk604417 = require("./604417.js"),
  Chunk442119 = require("./442119.js"),
  Chunk459079 = require("./459079.js"),
  p = "prototype",
  l = "script",
  v = Chunk459079("IE_PROTO"),
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
    var t, r = f("iframe");
    return r.style.display = "none", c.appendChild(r), r.src = String("java" + l + ":"), (t = r.contentWindow.document).open(), t.write(h("document.F=Object")), t.close(), t.F
  },
  g = function() {
    try {
      e = new ActiveXObject("htmlfile")
    } catch (t) {}
    g = "undefined" != typeof document ? document.domain && e ? x(e) : d() : x(e);
    for (var t = u.length; t--;) delete g[p][u[t]];
    return g()
  };
Chunk270498[v] = true, module.exports = Object.create || function(t, r) {
  var n;
  return null !== t ? (y[p] = o(t), n = new y, y[p] = null, n[v] = t) : n = g(), true === r ? n : i.f(n, r)
}