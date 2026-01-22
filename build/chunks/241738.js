/** Chunk was on web.js **/
/** chunk id: 241738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => a,
  w: () => s
});
var Chunk355418 = require("./355418.js"),
  Chunk989479 = require("./989479.js");
class a extends Chunk355418.c {
  patternLeftBoundary() {
    return i.pW.leftBoundary
  }
  innerPattern(e) {
    return new RegExp(this.innerPatternString(e), i.pW.flags)
  }
  innerPatternHasChange(e, t) {
    returnfalse
  }
}
class s extends a {
  innerPattern(e) {
    return RegExp(`${this.innerPatternString(e)}${i.pW.rightBoundary}`, i.pW.flags)
  }
}