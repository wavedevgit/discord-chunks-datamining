/** Chunk was on web.js **/
/** chunk id: 309229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk530560 = require("./530560.js");
class i extends Chunk530560.X {
  mergeResults(e, t, n) {
    let r = t.clone();
    return r.text = t.text + e + n.text, r.start.assign("weekday", n.start.get("weekday")), r.end && r.end.assign("weekday", n.start.get("weekday")), r
  }
  shouldMergeResults(e, t, n) {
    return t.start.isCertain("day") && n.start.isOnlyWeekdayComponent() && !n.start.isCertain("hour") && null !== e.match(/^[,、の]?\s*$/)
  }
}