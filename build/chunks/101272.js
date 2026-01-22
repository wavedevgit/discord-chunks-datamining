/** Chunk was on web.js **/
/** chunk id: 101272, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk528352 = require("./528352.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk632434 = require("./632434.js");
let o = RegExp(`(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(${Chunk528352.Pl})(?=\\W|$)`, "i"),
  l = 1,
  c = 2;
class u extends Chunk355418.c {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = t[l].toLowerCase(),
      a = (0, r.E9)(t[c]);
    switch (n) {
      case "vorig":
      case "afgelopen":
      case "-":
        a = (0, s.x4)(a)
    }
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}