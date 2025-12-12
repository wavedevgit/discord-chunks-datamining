/** Chunk was on web.js **/
/** chunk id: 270171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk19467 = require("./19467.js"),
  Chunk89199 = require("./89199.js");
class a extends Chunk19467.V {
  shouldMergeResults(e, t, n) {
    return !t.end && !n.end && null != e.match(this.patternBetween())
  }
  mergeResults(e, t, n) {
    if (t.start.isOnlyWeekdayComponent() || n.start.isOnlyWeekdayComponent() || (n.start.getCertainComponents().forEach(e => {
        t.start.isCertain(e) || t.start.imply(e, n.start.get(e))
      }), t.start.getCertainComponents().forEach(e => {
        n.start.isCertain(e) || n.start.imply(e, t.start.get(e))
      })), t.start.date() > n.start.date()) {
      let e = t.start.date(),
        r = n.start.date();
      n.start.isOnlyWeekdayComponent() && (0, i.WK)(r, {
        day: 7
      }) > e ? (r = (0, i.WK)(r, {
        day: 7
      }), n.start.imply("day", r.getDate()), n.start.imply("month", r.getMonth() + 1), n.start.imply("year", r.getFullYear())) : t.start.isOnlyWeekdayComponent() && (0, i.WK)(e, {
        day: false
      }) < r ? (e = (0, i.WK)(e, {
        day: false
      }), t.start.imply("day", e.getDate()), t.start.imply("month", e.getMonth() + 1), t.start.imply("year", e.getFullYear())) : n.start.isDateWithUnknownYear() && (0, i.WK)(r, {
        year: 1
      }) > e ? (r = (0, i.WK)(r, {
        year: 1
      }), n.start.imply("year", r.getFullYear())) : t.start.isDateWithUnknownYear() && (0, i.WK)(e, {
        year: false
      }) < r ? (e = (0, i.WK)(e, {
        year: false
      }), t.start.imply("year", e.getFullYear())) : [n, t] = [t, n]
    }
    let r = t.clone();
    return r.start = t.start, r.end = n.start, r.index = Math.min(t.index, n.index), t.index < n.index ? r.text = t.text + e + n.text : r.text = n.text + e + t.text, r
  }
}