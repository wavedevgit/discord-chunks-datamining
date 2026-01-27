/** Chunk was on web.js **/
/** chunk id: 973617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk355418 = require("./355418.js"),
  Chunk632434 = require("./632434.js"),
  Chunk725198 = require("./725198.js");
let o = RegExp("(\\d+|[" + Object.keys(Chunk725198.uk).join("") + "]+|半|幾)(?:\\s*)(?:個)?(秒(?:鐘)?|分鐘|小時|鐘|日|天|星期|禮拜|月|年)(?:(?:之|過)?後|(?:之)?內)", "i"),
  s = 1,
  l = 2;
class c extends Chunk355418.c {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = parseInt(t[s]);
    if (isNaN(r) && (r = (0, a.CT)(t[s])), isNaN(r)) {
      let e = t[s];
      if ("幾" === e) r = 3;
      else {
        if ("半" !== e) return null;
        r = .5
      }
    }
    let o = {},
      c = t[l][0];
    if (c.match(/[日天星禮月年]/)) {
      "日" == c || "天" == c ? o.day = r : "星" == c || "禮" == c ? o.week = r : "月" == c ? o.month = r : "年" == c && (o.year = r);
      let t = (0, i.Gw)(e.refDate, o);
      return n.start.assign("year", t.getFullYear()), n.start.assign("month", t.getMonth() + 1), n.start.assign("day", t.getDate()), n
    }
    "秒" == c ? o.second = r : "分" == c ? o.minute = r : ("小" == c || "鐘" == c) && (o.hour = r);
    let u = (0, i.Gw)(e.refDate, o);
    return n.start.imply("year", u.getFullYear()), n.start.imply("month", u.getMonth() + 1), n.start.imply("day", u.getDate()), n.start.assign("hour", u.getHours()), n.start.assign("minute", u.getMinutes()), n.start.assign("second", u.getSeconds()), n
  }
}