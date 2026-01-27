/** Chunk was on web.js **/
/** chunk id: 628574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk322811 = require("./322811.js"),
  Chunk985971 = require("./985971.js"),
  Chunk147426 = require("./147426.js");
class o extends Chunk985971.B {
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
    return "\\s*(?:\\-|\\–|\\~|\\〜|до|і|по|\\?)\\s*"
  }
  primaryPrefix() {
    return "(?:(?:в|у|о|об|з|із|від)\\s*)??"
  }
  primarySuffix() {
    return `(?:\\s*(?:ранку|вечора|по обіді|після обіду))?(?!\\/)${a.pW.rightBoundary}`
  }
  extractPrimaryTimeComponents(e, t) {
    let n = super.extractPrimaryTimeComponents(e, t);
    if (n) {
      if (t[0].endsWith("вечора")) {
        let e = n.get("hour");
        e >= 6 && e < 12 ? (n.assign("hour", n.get("hour") + 12), n.assign("meridiem", r.FF.PM)) : e < 6 && n.assign("meridiem", r.FF.AM)
      }
      if (t[0].endsWith("по обіді") || t[0].endsWith("після обіду")) {
        n.assign("meridiem", r.FF.PM);
        let e = n.get("hour");
        e >= 0 && e <= 6 && n.assign("hour", n.get("hour") + 12)
      }
      t[0].endsWith("ранку") && (n.assign("meridiem", r.FF.AM), 12 > n.get("hour") && n.assign("hour", n.get("hour")))
    }
    return n
  }
}