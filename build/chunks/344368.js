/** Chunk was on web.js **/
/** chunk id: 344368, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => o,
  M: () => a
});
var Chunk727916 = require("./727916.js"),
  Chunk325854 = require("./325854.js");
class a extends Chunk727916.Z {
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
class o extends a {
  innerPattern(e) {
    return RegExp(`${this.innerPatternString(e)}${i.f.rightBoundary}`, i.f.flags)
  }
}