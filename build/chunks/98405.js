/** Chunk was on web.js **/
/** chunk id: 98405, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk127849 = require("./127849.js"),
  i = require("./840991.js").f,
  Chunk436207 = require("./436207.js"),
  Chunk556585 = require("./556585.js"),
  Chunk587218 = require("./587218.js"),
  Chunk190289 = require("./190289.js"),
  Chunk275717 = require("./275717.js");
module.exports = function(e, t) {
  var n, u, d, f, p, _ = e.target,
    h = e.global,
    m = e.stat;
  if (n = h ? r : m ? r[_] || s(_, {}) : r[_] && r[_].prototype)
    for (u in t) {
      if (f = t[u], d = e.dontCallGetSet ? (p = i(n, u)) && p.value : n[u], !c(h ? u : _ + (m ? "." : "#") + u, e.forced) && true !== d) {
        if (typeof f == typeof d) continue;
        l(f, d)
      }(e.sham || d && d.sham) && a(f, "sham", true), o(n, u, f, e)
    }
}