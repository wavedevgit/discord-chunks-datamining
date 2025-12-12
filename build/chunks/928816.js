/** Chunk was on web.js **/
/** chunk id: 928816, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk19467 = require("./19467.js"),
  Chunk483605 = require("./483605.js");
class a extends Chunk19467.V {
  shouldMergeResults(e, t, n) {
    return (t.start.isOnlyDate() && n.start.isOnlyTime() || n.start.isOnlyDate() && t.start.isOnlyTime()) && null != e.match(this.patternBetween())
  }
  mergeResults(e, t, n) {
    let r = t.start.isOnlyDate() ? (0, i.i)(t, n) : (0, i.i)(n, t);
    return r.index = t.index, r.text = t.text + e + n.text, r
  }
}