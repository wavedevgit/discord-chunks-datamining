/** Chunk was on web.js **/
/** chunk id: 344368, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => a,
  M: () => o
});
var Chunk727916 = require("./727916.js"),
  Chunk325854 = require("./325854.js");
class o extends Chunk727916.Z {
  patternLeftBoundary() {
    return Chunk325854.f.leftBoundary
  }
  innerPattern(e) {
    return new RegExp(this.innerPatternString(e), i.f.flags)
  }
  innerPatternHasChange(e, t) {
    returnfalse
  }
}
class a extends o {
  innerPattern(e) {
    return RegExp(`${this.innerPatternString(e)}${i.f.rightBoundary}`, i.f.flags)
  }
}