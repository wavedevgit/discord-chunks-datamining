/** Chunk was on web.js **/
/** chunk id: 483655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk530560 = require("./530560.js");
class i extends Chunk530560.X {
  mergeResults(e, t, n) {
    let r = n.clone();
    return r.index = t.index, r.text = t.text + e + r.text, r.start.assign("weekday", t.start.get("weekday")), r.end && r.end.assign("weekday", t.start.get("weekday")), r
  }
  shouldMergeResults(e, t, n) {
    return t.start.isOnlyWeekdayComponent() && !t.start.isCertain("hour") && n.start.isCertain("day") && null != e.match(/^,?\s*$/)
  }
}