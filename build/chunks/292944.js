/** Chunk was on web.js **/
/** chunk id: 292944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk894186 = require("./894186.js"),
  Chunk715870 = require("./715870.js");
let o = /今日|きょう|本日|ほんじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;

function a(e) {
  switch (e) {
    case "きょう":
      return "今日";
    case "ほんじつ":
      return "本日";
    case "きのう":
      return "昨日";
    case "あした":
      return "明日";
    case "こんや":
      return "今夜";
    case "こんゆう":
      return "今夕";
    case "こんばん":
      return "今晩";
    case "けさ":
      return "今朝";
    default:
      return e
  }
}
class s {
  pattern() {
    return o
  }
  extract(e, t) {
    let n = a(t[0]),
      o = e.createParsingComponents();
    switch (n) {
      case "昨日":
        return i.Cv(e.reference);
      case "明日":
        return i.Ro(e.reference);
      case "本日":
      case "今日":
        return i.Lg(e.reference)
    }
    "今夜" == n || "今夕" == n || "今晩" == n ? (o.imply("hour", 22), o.assign("meridiem", r.GG.PM)) : n.match("今朝") && (o.imply("hour", 6), o.assign("meridiem", r.GG.AM));
    let s = e.refDate;
    return o.assign("day", s.getDate()), o.assign("month", s.getMonth() + 1), o.assign("year", s.getFullYear()), o
  }
}