/** Chunk was on web.js **/
/** chunk id: 700043, original params: e,t,n (module,exports,re quire) **/
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
        e >= 6 && e < 12 ? (n.assign("hour", n.get("hour") + 12), n.assign("meridiem", r.GG.PM)) : e < 6 && n.assign("meridiem", r.GG.AM)
      }
      if (t[0].endsWith("pomeriggio")) {
        n.assign("meridiem", r.GG.PM);
        let e = n.get("hour");
        e >= 0 && e <= 6 && n.assign("hour", n.get("hour") + 12)
      }
      t[0].endsWith("mattina") && (n.assign("meridiem", r.GG.AM), 12 > n.get("hour") && n.assign("hour", n.get("hour")))
    }
    return n
  }
}