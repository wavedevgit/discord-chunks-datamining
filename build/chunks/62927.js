/** Chunk was on web.js **/
/** chunk id: 62927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js"),
  Chunk151742 = require("./151742.js");
let a = RegExp("(\\d+|[" + Object.keys(Chunk151742.Wu).join("") + "]+|半|幾)(?:\\s*)(?:個)?(秒(?:鐘)?|分鐘|小時|鐘|日|天|星期|禮拜|月|年)(?:(?:之|過)?後|(?:之)?內)", "i"),
  s = 1,
  l = 2;
class c extends Chunk727916.Z {
  innerPattern() {
    return a
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = parseInt(t[s]);
    if (isNaN(r) && (r = (0, o.zU)(t[s])), isNaN(r)) {
      let e = t[s];
      if ("幾" === e) r = 3;
      else {
        if ("半" !== e) return null;
        r = .5
      }
    }
    let a = {},
      c = t[l][0];
    if (c.match(/[日天星禮月年]/)) {
      "日" == c || "天" == c ? a.day = r : "星" == c || "禮" == c ? a.week = r : "月" == c ? a.month = r : "年" == c && (a.year = r);
      let t = (0, i.WK)(e.refDate, a);
      return n.start.assign("year", t.getFullYear()), n.start.assign("month", t.getMonth() + 1), n.start.assign("day", t.getDate()), n
    }
    "秒" == c ? a.second = r : "分" == c ? a.minute = r : ("小" == c || "鐘" == c) && (a.hour = r);
    let u = (0, i.WK)(e.refDate, a);
    return n.start.imply("year", u.getFullYear()), n.start.imply("month", u.getMonth() + 1), n.start.imply("day", u.getDate()), n.start.assign("hour", u.getHours()), n.start.assign("minute", u.getMinutes()), n.start.assign("second", u.getSeconds()), n
  }
}