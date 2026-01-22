/** Chunk was on web.js **/
/** chunk id: 202262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk615339 = require("./615339.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk632434 = require("./632434.js");
let o = RegExp(`(${Chunk615339.Pl})\\s{0,5}(?:fa|prima|precedente)(?=(?:\\W|$))`, "i"),
  l = RegExp(`(${Chunk615339.Pl})\\s{0,5}fa(?=(?:\\W|$))`, "i");
class c extends Chunk355418.c {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern() {
    return this.strictMode ? l : o
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]),
      a = (0, s.x4)(n);
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}