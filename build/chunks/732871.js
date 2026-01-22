/** Chunk was on web.js **/
/** chunk id: 732871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk615339 = require("./615339.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js"),
  Chunk1673 = require("./1673.js");
let o = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(${(0,Chunk476858.uJ)(Chunk615339.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)`, "i"),
  l = 1,
  c = 2,
  u = 3;
class d extends Chunk355418.c {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = t[c].toLowerCase(),
      i = r.CV[n],
      a = t[l],
      o = t[u],
      d = a || o;
    d = (d = d || "").toLowerCase();
    let f = null;
    return "ultima" == d || "scorsa" == d ? f = "ultima" : "prossima" == d ? f = "prossima" : "questa" == d && (f = "questa"), (0, s.Y5)(e.reference, i, f)
  }
}