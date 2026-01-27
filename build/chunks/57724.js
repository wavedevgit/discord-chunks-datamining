/** Chunk was on web.js **/
/** chunk id: 57724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk528352 = require("./528352.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk632434 = require("./632434.js");
let s = RegExp("(" + Chunk528352.Pl + ")(?:geleden|voor|eerder)(?=(?:\\W|$))", "i"),
  l = RegExp("(" + Chunk528352.Pl + ")geleden(?=(?:\\W|$))", "i");
class c extends Chunk355418.c {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern() {
    return this.strictMode ? l : s
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]),
      a = (0, o.x4)(n);
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}