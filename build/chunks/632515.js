/** Chunk was on web.js **/
/** chunk id: 632515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk998493 = require("./998493.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js"),
  Chunk1673 = require("./1673.js");
let o = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\xe4|ae)chste[mn])\\s*)?(${(0,Chunk476858.uJ)(Chunk998493.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:\xe4|ae)chste)\\s*woche)?(?=\\W|$)`, "i"),
  l = 1,
  c = 3,
  u = 2;
class d extends Chunk355418.c {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = t[u].toLowerCase(),
      i = r.CV[n],
      a = t[l],
      o = t[c],
      d = a || o;
    d = (d = d || "").toLowerCase();
    let f = null;
    return d.match(/letzte/) ? f = "last" : d.match(/chste/) ? f = "next" : d.match(/diese/) && (f = "this"), (0, s.Y5)(e.reference, i, f)
  }
}