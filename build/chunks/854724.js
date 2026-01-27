/** Chunk was on web.js **/
/** chunk id: 854724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk989479 = require("./989479.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js");
let o = `(?:(?:около|примерно)\\s*(?:~\\s*)?)?(${Chunk989479.Pl})${Chunk989479.pW.rightBoundary}`;
class s extends Chunk355418.c {
  patternLeftBoundary() {
    return r.pW.leftBoundary
  }
  innerPattern(e) {
    return e.option.forwardDate ? new RegExp(o, r.pW.flags) : RegExp(`(?:в течение|в течении)\\s*${o}`, r.pW.flags)
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]);
    return i.BP.createRelativeFromReference(e.reference, n)
  }
}