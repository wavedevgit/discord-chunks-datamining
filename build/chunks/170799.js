/** Chunk was on web.js **/
/** chunk id: 170799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk150816 = require("./150816.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js");
let a = `(?:(?:около|примерно)\\s*(?:~\\s*)?)?(${Chunk150816.km})${Chunk150816.f.rightBoundary}`;
class s extends Chunk727916.Z {
  patternLeftBoundary() {
    return Chunk150816.f.leftBoundary
  }
  innerPattern(e) {
    return e.option.forwardDate ? new RegExp(a, r.f.flags) : RegExp(`(?:в течение|в течении)\\s*${a}`, r.f.flags)
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]);
    return i.L.createRelativeFromReference(e.reference, n)
  }
}