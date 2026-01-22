/** Chunk was on web.js **/
/** chunk id: 241087, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk528352 = require("./528352.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js");
let s = RegExp("(" + Chunk528352.Pl + ")(later|na|vanaf nu|voortaan|vooruit|uit)(?=(?:\\W|$))", "i"),
  o = RegExp("(" + Chunk528352.Pl + ")(later|vanaf nu)(?=(?:\\W|$))", "i"),
  l = 1;
class c extends Chunk355418.c {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern() {
    return this.strictMode ? o : s
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[l]);
    return i.BP.createRelativeFromReference(e.reference, n)
  }
}