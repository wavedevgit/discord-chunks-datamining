/** Chunk was on web.js **/
/** chunk id: 557939, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  i = require("./873078.js").f,
  Chunk706938 = require("./706938.js"),
  Chunk693655 = require("./693655.js"),
  Chunk88388 = require("./88388.js"),
  Chunk517771 = require("./517771.js"),
  Chunk521351 = require("./521351.js");
module.exports = function(e, t) {
  var n, u, d, f, p, _ = e.target,
    h = e.global,
    m = e.stat;
  if (n = h ? r : m ? r[_] || o(_, {}) : r[_] && r[_].prototype)
    for (u in t) {
      if (f = t[u], d = e.dontCallGetSet ? (p = i(n, u)) && p.value : n[u], !c(h ? u : _ + (m ? "." : "#") + u, e.forced) && true !== d) {
        if (typeof f == typeof d) continue;
        l(f, d)
      }(e.sham || d && d.sham) && a(f, "sham", true), s(n, u, f, e)
    }
}