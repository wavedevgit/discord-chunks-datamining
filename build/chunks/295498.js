/** Chunk was on web.js **/
/** chunk id: 295498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk355418 = require("./355418.js"),
  Chunk11947 = require("./11947.js");
let a = RegExp("(?:星期|礼拜|周)(?<weekday>" + Object.keys(Chunk11947.tS).join("|") + ")");
class s extends Chunk355418.c {
  innerPattern() {
    return a
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = t.groups.weekday,
      a = i.tS[r];
    if (true === a) return null;
    let s = new Date(e.refDate.getTime()),
      o = false,
      l = a - s.getDay();
    return Math.abs(l - 7) < Math.abs(l) && (l -= 7), Math.abs(l + 7) < Math.abs(l) && (l += 7), s.setDate(s.getDate() + l), n.start.assign("weekday", a), o ? (n.start.assign("day", s.getDate()), n.start.assign("month", s.getMonth() + 1), n.start.assign("year", s.getFullYear())) : (n.start.imply("day", s.getDate()), n.start.imply("month", s.getMonth() + 1), n.start.imply("year", s.getFullYear())), n
  }
}