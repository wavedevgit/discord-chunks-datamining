/** Chunk was on web.js **/
/** chunk id: 225960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk322811 = require("./322811.js"),
  Chunk985971 = require("./985971.js"),
  Chunk989479 = require("./989479.js");
class s extends Chunk985971.B {
  constructor(e) {
    super(e)
  }
  patternFlags() {
    return a.pW.flags
  }
  primaryPatternLeftBoundary() {
    return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))"
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|до|и|по|\\?)\\s*"
  }
  primaryPrefix() {
    return "(?:(?:в|с)\\s*)??"
  }
  primarySuffix() {
    return `(?:\\s*(?:утра|вечера|после полудня))?(?!\\/)${a.pW.rightBoundary}`
  }
  extractPrimaryTimeComponents(e, t) {
    let n = super.extractPrimaryTimeComponents(e, t);
    if (n) {
      if (t[0].endsWith("вечера")) {
        let e = n.get("hour");
        e >= 6 && e < 12 ? (n.assign("hour", n.get("hour") + 12), n.assign("meridiem", r.FF.PM)) : e < 6 && n.assign("meridiem", r.FF.AM)
      }
      if (t[0].endsWith("после полудня")) {
        n.assign("meridiem", r.FF.PM);
        let e = n.get("hour");
        e >= 0 && e <= 6 && n.assign("hour", n.get("hour") + 12)
      }
      t[0].endsWith("утра") && (n.assign("meridiem", r.FF.AM), 12 > n.get("hour") && n.assign("hour", n.get("hour")))
    }
    return n
  }
}