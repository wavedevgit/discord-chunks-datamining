/** Chunk was on web.js **/
/** chunk id: 942548, original params: e,t,n (module,exports,re quire) **/
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
    return "\\s*(?:\\-|\\–|\\~|\\〜|to|until|through|till|\\?)\\s*"
  }
  primaryPrefix() {
    return "(?:(?:at|from)\\s*)??"
  }
  primarySuffix() {
    return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)"
  }
  extractPrimaryTimeComponents(e, t) {
    let n = super.extractPrimaryTimeComponents(e, t);
    if (!n) return n;
    if (t[0].endsWith("night")) {
      let e = n.get("hour");
      e >= 6 && e < 12 ? (n.assign("hour", n.get("hour") + 12), n.assign("meridiem", r.FF.PM)) : e < 6 && n.assign("meridiem", r.FF.AM)
    }
    if (t[0].endsWith("afternoon")) {
      n.assign("meridiem", r.FF.PM);
      let e = n.get("hour");
      e >= 0 && e <= 6 && n.assign("hour", n.get("hour") + 12)
    }
    return t[0].endsWith("morning") && (n.assign("meridiem", r.FF.AM), 12 > n.get("hour") && n.assign("hour", n.get("hour"))), n.addTag("parser/ENTimeExpressionParser")
  }
  extractFollowingTimeComponents(e, t, n) {
    let r = super.extractFollowingTimeComponents(e, t, n);
    return r && r.addTag("parser/ENTimeExpressionParser"), r
  }
}