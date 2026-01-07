/** Chunk was on web.js **/
/** chunk id: 651748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk894186 = require("./894186.js"),
  Chunk629821 = require("./629821.js"),
  Chunk150816 = require("./150816.js");
class o extends Chunk629821._ {
  constructor(e) {
    super(e)
  }
  patternFlags() {
    return a.f.flags
  }
  primaryPatternLeftBoundary() {
    return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))"
  }
  followingPhase() {
    return `\\s*(?:\\-|\\–|\\~|\\〜|до|и|по|\\?)\\s*`
  }
  primaryPrefix() {
    return `(?:(?:в|с)\\s*)??`
  }
  primarySuffix() {
    return `(?:\\s*(?:утра|вечера|после полудня))?(?!\\/)${a.f.rightBoundary}`
  }
  extractPrimaryTimeComponents(e, t) {
    let n = super.extractPrimaryTimeComponents(e, t);
    if (n) {
      if (t[0].endsWith("вечера")) {
        let e = n.get("hour");
        e >= 6 && e < 12 ? (n.assign("hour", n.get("hour") + 12), n.assign("meridiem", r.GG.PM)) : e < 6 && n.assign("meridiem", r.GG.AM)
      }
      if (t[0].endsWith("после полудня")) {
        n.assign("meridiem", r.GG.PM);
        let e = n.get("hour");
        e >= 0 && e <= 6 && n.assign("hour", n.get("hour") + 12)
      }
      t[0].endsWith("утра") && (n.assign("meridiem", r.GG.AM), 12 > n.get("hour") && n.assign("hour", n.get("hour")))
    }
    return n
  }
}