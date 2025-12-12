/** Chunk was on web.js **/
/** chunk id: 908092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk727916 = require("./727916.js"),
  Chunk151742 = require("./151742.js");
let o = RegExp("(?:星期|禮拜|週)(?<weekday>" + Object.keys(Chunk151742.GR).join("|") + ")");
class a extends Chunk727916.Z {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = t.groups.weekday,
      o = i.GR[r];
    if (true === o) return null;
    let a = new Date(e.refDate.getTime()),
      s = false,
      l = o - a.getDay();
    return Math.abs(l - 7) < Math.abs(l) && (l -= 7), Math.abs(l + 7) < Math.abs(l) && (l += 7), a.setDate(a.getDate() + l), n.start.assign("weekday", o), s ? (n.start.assign("day", a.getDate()), n.start.assign("month", a.getMonth() + 1), n.start.assign("year", a.getFullYear())) : (n.start.imply("day", a.getDate()), n.start.imply("month", a.getMonth() + 1), n.start.imply("year", a.getFullYear())), n
  }
}