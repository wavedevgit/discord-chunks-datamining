/** Chunk was on web.js **/
/** chunk id: 466242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk829143 = require("./829143.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk632434 = require("./632434.js");
let o = RegExp(`(denna|den h\xe4r|f\xf6rra|passerade|n\xe4sta|kommande|efter|\\+|-)\\s*(${Chunk829143.Pl})(?=\\W|$)`, "i"),
  l = RegExp(`(denna|den h\xe4r|f\xf6rra|passerade|n\xe4sta|kommande|efter|\\+|-)\\s*(${Chunk829143.d2})(?=\\W|$)`, "i");
class c extends Chunk355418.c {
  allowAbbreviations;
  constructor(e = true) {
    super(), this.allowAbbreviations = e
  }
  innerPattern() {
    return this.allowAbbreviations ? o : l
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      a = (0, r.E9)(t[2]);
    if (!a) return null;
    switch (n) {
      case "f\xf6rra":
      case "passerade":
      case "-":
        a = (0, s.x4)(a)
    }
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}