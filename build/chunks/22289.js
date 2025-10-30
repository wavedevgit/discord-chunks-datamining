/** Chunk was on web.js **/
/** chunk id: 22289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk19467 = require("./19467.js");
class i extends Chunk19467.V {
  mergeResults(e, t, n) {
    let r = n.clone();
    return r.index = t.index, r.text = t.text + e + r.text, r.start.assign("weekday", t.start.get("weekday")), r.end && r.end.assign("weekday", t.start.get("weekday")), r
  }
  shouldMergeResults(e, t, n) {
    return t.start.isOnlyWeekdayComponent() && !t.start.isCertain("hour") && n.start.isCertain("day") && null != e.match(/^,?\s*$/)
  }
}