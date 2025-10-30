/** Chunk was on web.js **/
/** chunk id: 986406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk19467 = require("./19467.js");
class i extends Chunk19467.V {
  mergeResults(e, t, n) {
    let r = t.clone();
    return r.text = t.text + e + n.text, r.start.assign("weekday", n.start.get("weekday")), r.end && r.end.assign("weekday", n.start.get("weekday")), r
  }
  shouldMergeResults(e, t, n) {
    return t.start.isCertain("day") && n.start.isOnlyWeekdayComponent() && !n.start.isCertain("hour") && null !== e.match(/^[,、の]?\s*$/)
  }
}