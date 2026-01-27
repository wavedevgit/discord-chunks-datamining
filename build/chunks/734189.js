/** Chunk was on web.js **/
/** chunk id: 734189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk6678 = require("./6678.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js"),
  Chunk1673 = require("./1673.js");
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:(?:ce)\\s*)?(${(0,Chunk476858.uJ)(Chunk6678.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)`, "i"),
  l = 1,
  c = 2;
class u extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[l].toLowerCase(),
      i = r.CV[n];
    if (true === i) return null;
    let a = t[c];
    a = (a = a || "").toLowerCase();
    let s = null;
    return "dernier" == a ? s = "last" : "prochain" == a && (s = "next"), (0, o.Y5)(e.reference, i, s)
  }
}