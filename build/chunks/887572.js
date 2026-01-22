/** Chunk was on web.js **/
/** chunk id: 887572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk322811 = require("./322811.js"),
  Chunk985971 = require("./985971.js");
class a extends Chunk985971.B {
  constructor(e) {
    super(e)
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|to|\\?)\\s*"
  }
  primaryPrefix() {
    return "(?:(?:alle|dalle)\\s*)??"
  }
  primarySuffix() {
    return "(?:\\s*(?:o\\W*in punto|alle\\s*sera|in\\s*del\\s*(?:mattina|pomeriggio)))?(?!/)(?=\\W|$)"
  }
  extractPrimaryTimeComponents(e, t) {
    let n = super.extractPrimaryTimeComponents(e, t);
    if (n) {
      if (t[0].endsWith("sera")) {
        let e = n.get("hour");
        e >= 6 && e < 12 ? (n.assign("hour", n.get("hour") + 12), n.assign("meridiem", r.FF.PM)) : e < 6 && n.assign("meridiem", r.FF.AM)
      }
      if (t[0].endsWith("pomeriggio")) {
        n.assign("meridiem", r.FF.PM);
        let e = n.get("hour");
        e >= 0 && e <= 6 && n.assign("hour", n.get("hour") + 12)
      }
      t[0].endsWith("mattina") && (n.assign("meridiem", r.FF.AM), 12 > n.get("hour") && n.assign("hour", n.get("hour")))
    }
    return n
  }
}