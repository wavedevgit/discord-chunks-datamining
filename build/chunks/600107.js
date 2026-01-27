/** Chunk was on web.js **/
/** chunk id: 600107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk829143 = require("./829143.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js"),
  Chunk1673 = require("./1673.js");
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:p\xe5\\s*?)?(?:(f\xf6rra|senaste|n\xe4sta|kommande)\\s*)?(${(0,Chunk476858.uJ)(Chunk829143.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(f\xf6rra|senaste|n\xe4sta|kommande)\\s*vecka)?(?=\\W|$)`, "i"),
  l = 1,
  c = 3,
  u = 2;
class d extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[u].toLowerCase(),
      i = r.CV[n],
      a = t[l],
      s = t[c],
      d = a || s;
    d = (d = d || "").toLowerCase();
    let f = null;
    return d.match(/förra|senaste/) ? f = "last" : d.match(/nästa|kommande/) && (f = "next"), (0, o.Y5)(e.reference, i, f)
  }
}