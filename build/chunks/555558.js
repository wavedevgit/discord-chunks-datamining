/** Chunk was on web.js **/
/** chunk id: 555558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => a
});
var Chunk322811 = require("./322811.js"),
  Chunk658809 = require("./658809.js");

function a(e, t) {
  let n = e.clone();
  if (n.start = o(e.start, t.start), null != e.end || null != t.end) {
    let r = o(null == e.end ? e.start : e.end, null == t.end ? t.start : t.end);
    if (null == e.end && r.date().getTime() < n.start.date().getTime()) {
      let e = new Date(r.date().getTime());
      e.setDate(e.getDate() + 1), r.isCertain("day") ? (0, i.Pl)(r, e) : (0, i.Hq)(r, e)
    }
    n.end = r
  }
  return n
}

function o(e, t) {
  let n = e.clone();
  return t.isCertain("hour") ? (n.assign("hour", t.get("hour")), n.assign("minute", t.get("minute")), t.isCertain("second") ? (n.assign("second", t.get("second")), t.isCertain("millisecond") ? n.assign("millisecond", t.get("millisecond")) : n.imply("millisecond", t.get("millisecond"))) : (n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond")))) : (n.imply("hour", t.get("hour")), n.imply("minute", t.get("minute")), n.imply("second", t.get("second")), n.imply("millisecond", t.get("millisecond"))), t.isCertain("timezoneOffset") && n.assign("timezoneOffset", t.get("timezoneOffset")), t.isCertain("meridiem") ? n.assign("meridiem", t.get("meridiem")) : null != t.get("meridiem") && null == n.get("meridiem") && n.imply("meridiem", t.get("meridiem")), n.get("meridiem") == r.FF.PM && 12 > n.get("hour") && (t.isCertain("hour") ? n.assign("hour", n.get("hour") + 12) : n.imply("hour", n.get("hour") + 12)), n.addTags(e.tags()), n.addTags(t.tags()), n
}