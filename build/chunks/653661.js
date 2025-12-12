/** Chunk was on web.js **/
/** chunk id: 653661, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js"),
  Chunk627459 = require("./627459.js");
let o = RegExp("(\\d+|[" + Object.keys(Chunk627459.Wu).join("") + "]+|半|几)(?:\\s*)(?:个)?(秒(?:钟)?|分钟|小时|钟|日|天|星期|礼拜|月|年)(?:(?:之|过)?后|(?:之)?内)", "i"),
  s = 1,
  l = 2;
class c extends Chunk727916.Z {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = parseInt(t[s]);
    if (isNaN(r) && (r = (0, a.zU)(t[s])), isNaN(r)) {
      let e = t[s];
      if ("几" === e) r = 3;
      else {
        if ("半" !== e) return null;
        r = .5
      }
    }
    let o = {},
      c = t[l][0];
    if (c.match(/[日天星礼月年]/)) {
      "日" == c || "天" == c ? o.day = r : "星" == c || "礼" == c ? o.week = r : "月" == c ? o.month = r : "年" == c && (o.year = r);
      let t = (0, i.WK)(e.refDate, o);
      return n.start.assign("year", t.getFullYear()), n.start.assign("month", t.getMonth() + 1), n.start.assign("day", t.getDate()), n
    }
    "秒" == c ? o.second = r : "分" == c ? o.minute = r : ("小" == c || "钟" == c) && (o.hour = r);
    let u = (0, i.WK)(e.refDate, o);
    return n.start.imply("year", u.getFullYear()), n.start.imply("month", u.getMonth() + 1), n.start.imply("day", u.getDate()), n.start.assign("hour", u.getHours()), n.start.assign("minute", u.getMinutes()), n.start.assign("second", u.getSeconds()), n
  }
}