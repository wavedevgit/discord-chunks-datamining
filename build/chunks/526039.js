/** Chunk was on web.js **/
/** chunk id: 526039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk781308 = require("./781308.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js"),
  Chunk334633 = require("./334633.js");
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:p\xe5\\s*?)?(?:(f\xf6rra|senaste|n\xe4sta|kommande)\\s*)?(${(0,Chunk800911.q3)(Chunk781308.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(f\xf6rra|senaste|n\xe4sta|kommande)\\s*vecka)?(?=\\W|$)`, "i"),
  l = 1,
  c = 3,
  u = 2;
class d extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[u].toLowerCase(),
      i = r.LN[n],
      a = t[l],
      s = t[c],
      d = a || s;
    d = (d = d || "").toLowerCase();
    let f = null;
    return d.match(/förra|senaste/) ? f = "last" : d.match(/nästa|kommande/) && (f = "next"), (0, o.Rv)(e.reference, i, f)
  }
}