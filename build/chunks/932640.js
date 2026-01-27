/** Chunk was on web.js **/
/** chunk id: 932640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk355418 = require("./355418.js"),
  Chunk725198 = require("./725198.js");
let a = RegExp("(?:星期|禮拜|週)(?<weekday>" + Object.keys(Chunk725198.tS).join("|") + ")");
class o extends Chunk355418.c {
  innerPattern() {
    return a
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = t.groups.weekday,
      a = i.tS[r];
    if (true === a) return null;
    let o = new Date(e.refDate.getTime()),
      s = false,
      l = a - o.getDay();
    return Math.abs(l - 7) < Math.abs(l) && (l -= 7), Math.abs(l + 7) < Math.abs(l) && (l += 7), o.setDate(o.getDate() + l), n.start.assign("weekday", a), s ? (n.start.assign("day", o.getDate()), n.start.assign("month", o.getMonth() + 1), n.start.assign("year", o.getFullYear())) : (n.start.imply("day", o.getDate()), n.start.imply("month", o.getMonth() + 1), n.start.imply("year", o.getFullYear())), n
  }
}