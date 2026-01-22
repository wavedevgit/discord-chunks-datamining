/** Chunk was on web.js **/
/** chunk id: 620749, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk530560 = require("./530560.js"),
  Chunk555558 = require("./555558.js");
class a extends Chunk530560.X {
  shouldMergeResults(e, t, n) {
    return (t.start.isOnlyDate() && n.start.isOnlyTime() || n.start.isOnlyDate() && t.start.isOnlyTime()) && null != e.match(this.patternBetween())
  }
  mergeResults(e, t, n) {
    let r = t.start.isOnlyDate() ? (0, i.h)(t, n) : (0, i.h)(n, t);
    return r.index = t.index, r.text = t.text + e + n.text, r
  }
}