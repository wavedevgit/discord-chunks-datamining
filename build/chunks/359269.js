/** Chunk was on web.js **/
/** chunk id: 359269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk528352 = require("./528352.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js"),
  Chunk1673 = require("./1673.js");
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(${(0,Chunk476858.uJ)(Chunk528352.CV)})(?=\\W|$)`, "i"),
  l = 1,
  c = 2,
  u = 3;
class d extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[c].toLowerCase(),
      i = r.CV[n],
      a = t[l],
      s = t[u],
      d = a || s;
    d = (d = d || "").toLowerCase();
    let f = null;
    return "vorige" == d ? f = "last" : "volgende" == d ? f = "next" : "deze" == d && (f = "this"), (0, o.Y5)(e.reference, i, f)
  }
}