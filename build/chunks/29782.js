/** Chunk was on web.js **/
/** chunk id: 29782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk360345 = require("./360345.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk632434 = require("./632434.js");
let o = RegExp(`(${Chunk360345.Pl})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"),
  l = RegExp(`(${Chunk360345.d2})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class c extends Chunk355418.c {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern() {
    return this.strictMode ? l : o
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]);
    return n ? i.BP.createRelativeFromReference(e.reference, (0, s.x4)(n)) : null
  }
}