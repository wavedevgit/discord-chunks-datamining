/** Chunk was on web.js **/
/** chunk id: 662500, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk727916 = require("./727916.js"),
  Chunk627459 = require("./627459.js");
let a = RegExp("(?:星期|礼拜|周)(?<weekday>" + Object.keys(Chunk627459.GR).join("|") + ")");
class o extends Chunk727916.Z {
  innerPattern() {
    return a
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = t.groups.weekday,
      a = i.GR[r];
    if (true === a) return null;
    let o = new Date(e.refDate.getTime()),
      s = false,
      l = a - o.getDay();
    return Math.abs(l - 7) < Math.abs(l) && (l -= 7), Math.abs(l + 7) < Math.abs(l) && (l += 7), o.setDate(o.getDate() + l), n.start.assign("weekday", a), s ? (n.start.assign("day", o.getDate()), n.start.assign("month", o.getMonth() + 1), n.start.assign("year", o.getFullYear())) : (n.start.imply("day", o.getDate()), n.start.imply("month", o.getMonth() + 1), n.start.imply("year", o.getFullYear())), n
  }
}