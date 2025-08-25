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
  var n, u, d, f, _, p = e.target,
    h = e.global,
    m = e.stat;
  if (n = h ? r : m ? r[p] || s(p, {}) : r[p] && r[p].prototype)
    for (u in t) {
      if (f = t[u], d = e.dontCallGetSet ? (_ = i(n, u)) && _.value : n[u], !c(h ? u : p + (m ? "." : "#") + u, e.forced) && true !== d) {
        if (typeof f == typeof d) continue;
        l(f, d)
      }(e.sham || d && d.sham) && o(f, "sham", true), a(n, u, f, e)
    }
}