/** Chunk was on web.js **/
/** chunk id: 772177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk298362 = require("./298362.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js"),
  Chunk1673 = require("./1673.js");
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:(este|esta|pasado|pr[o\xf3]ximo)\\s*)?(${(0,Chunk476858.uJ)(Chunk298362.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(este|esta|pasado|pr[\xf3o]ximo)\\s*semana)?(?=\\W|\\d|$)`, "i"),
  l = 1,
  c = 2,
  u = 3;
class d extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[c].toLowerCase(),
      i = r.CV[n];
    if (true === i) return null;
    let a = t[l],
      s = t[u],
      d = a || s || "";
    d = d.toLowerCase();
    let f = null;
    return "pasado" == d ? f = "this" : "pr\xf3ximo" == d || "proximo" == d ? f = "next" : "este" == d && (f = "this"), (0, o.Y5)(e.reference, i, f)
  }
}