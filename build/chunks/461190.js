/** Chunk was on web.js **/
/** chunk id: 461190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk727916 = require("./727916.js"),
  Chunk151742 = require("./151742.js");
let o = RegExp("(?<prefix>上|今|下|這|呢)(?:個)?(?:星期|禮拜|週)(?<weekday>" + Object.keys(Chunk151742.GR).join("|") + ")");
class a extends Chunk727916.Z {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = t.groups.weekday,
      o = i.GR[r];
    if (true === o) return null;
    let a = null,
      s = t.groups.prefix;
    "上" == s ? a = "last" : "下" == s ? a = "next" : ("今" == s || "這" == s || "呢" == s) && (a = "this");
    let l = new Date(e.refDate.getTime()),
      c = false,
      u = l.getDay();
    if ("last" == a || "past" == a) l.setDate(l.getDate() + (o - 7 - u)), c = true;
    else if ("next" == a) l.setDate(l.getDate() + (o + 7 - u)), c = true;
    else if ("this" == a) l.setDate(l.getDate() + (o - u));
    else {
      let e = o - u;
      Math.abs(e - 7) < Math.abs(e) && (e -= 7), Math.abs(e + 7) < Math.abs(e) && (e += 7), l.setDate(l.getDate() + e)
    }
    return n.start.assign("weekday", o), c ? (n.start.assign("day", l.getDate()), n.start.assign("month", l.getMonth() + 1), n.start.assign("year", l.getFullYear())) : (n.start.imply("day", l.getDate()), n.start.imply("month", l.getMonth() + 1), n.start.imply("year", l.getFullYear())), n
  }
}