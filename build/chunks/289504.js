/** Chunk was on web.js **/
/** chunk id: 289504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk894186 = require("./894186.js"),
  Chunk629821 = require("./629821.js");
class a extends Chunk629821._ {
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
      e >= 6 && e < 12 ? (n.assign("hour", n.get("hour") + 12), n.assign("meridiem", r.GG.PM)) : e < 6 && n.assign("meridiem", r.GG.AM)
    }
    if (t[0].endsWith("afternoon")) {
      n.assign("meridiem", r.GG.PM);
      let e = n.get("hour");
      e >= 0 && e <= 6 && n.assign("hour", n.get("hour") + 12)
    }
    return t[0].endsWith("morning") && (n.assign("meridiem", r.GG.AM), 12 > n.get("hour") && n.assign("hour", n.get("hour"))), n.addTag("parser/ENTimeExpressionParser")
  }
  extractFollowingTimeComponents(e, t, n) {
    let r = super.extractFollowingTimeComponents(e, t, n);
    return r && r.addTag("parser/ENTimeExpressionParser"), r
  }
}