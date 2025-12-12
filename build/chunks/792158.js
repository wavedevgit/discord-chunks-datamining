/** Chunk was on web.js **/
/** chunk id: 792158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk325854 = require("./325854.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js");
let a = `(?:(?:приблизно|орієнтовно)\\s*(?:~\\s*)?)?(${Chunk325854.km})${Chunk325854.f.rightBoundary}`;
class s extends Chunk727916.Z {
  patternLeftBoundary() {
    return Chunk325854.f.leftBoundary
  }
  innerPattern(e) {
    return e.option.forwardDate ? RegExp(a, "i") : RegExp(`(?:протягом|на протязі|протягом|упродовж|впродовж)\\s*${a}`, r.f.flags)
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]);
    return i.L.createRelativeFromReference(e.reference, n)
  }
}