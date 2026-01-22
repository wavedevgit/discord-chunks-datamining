/** Chunk was on web.js **/
/** chunk id: 38078, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk147426 = require("./147426.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js");
let s = `(?:(?:приблизно|орієнтовно)\\s*(?:~\\s*)?)?(${Chunk147426.Pl})${Chunk147426.pW.rightBoundary}`;
class o extends Chunk355418.c {
  patternLeftBoundary() {
    return r.pW.leftBoundary
  }
  innerPattern(e) {
    return e.option.forwardDate ? RegExp(s, "i") : RegExp(`(?:протягом|на протязі|протягом|упродовж|впродовж)\\s*${s}`, r.pW.flags)
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]);
    return i.BP.createRelativeFromReference(e.reference, n)
  }
}