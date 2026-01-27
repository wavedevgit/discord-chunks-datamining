/** Chunk was on web.js **/
/** chunk id: 736360, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk355418 = require("./355418.js"),
  Chunk725198 = require("./725198.js");
let a = RegExp("(?<prefix>上|今|下|這|呢)(?:個)?(?:星期|禮拜|週)(?<weekday>" + Object.keys(Chunk725198.tS).join("|") + ")");
class o extends Chunk355418.c {
  innerPattern() {
    return a
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = t.groups.weekday,
      a = i.tS[r];
    if (true === a) return null;
    let o = null,
      s = t.groups.prefix;
    "上" == s ? o = "last" : "下" == s ? o = "next" : ("今" == s || "這" == s || "呢" == s) && (o = "this");
    let l = new Date(e.refDate.getTime()),
      c = false,
      u = l.getDay();
    if ("last" == o || "past" == o) l.setDate(l.getDate() + (a - 7 - u)), c = true;
    else if ("next" == o) l.setDate(l.getDate() + (a + 7 - u)), c = true;
    else if ("this" == o) l.setDate(l.getDate() + (a - u));
    else {
      let e = a - u;
      Math.abs(e - 7) < Math.abs(e) && (e -= 7), Math.abs(e + 7) < Math.abs(e) && (e += 7), l.setDate(l.getDate() + e)
    }
    return n.start.assign("weekday", a), c ? (n.start.assign("day", l.getDate()), n.start.assign("month", l.getMonth() + 1), n.start.assign("year", l.getFullYear())) : (n.start.imply("day", l.getDate()), n.start.imply("month", l.getMonth() + 1), n.start.imply("year", l.getFullYear())), n
  }
}