/** Chunk was on web.js **/
/** chunk id: 408669, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk355418 = require("./355418.js"),
  Chunk725198 = require("./725198.js");
let a = RegExp("(?:由|從|自)?(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(Chunk725198.uk).join("") + "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(Chunk725198.uk).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(Chunk725198.uk).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i"),
  s = RegExp("(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(Chunk725198.uk).join("") + "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(Chunk725198.uk).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(Chunk725198.uk).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i"),
  o = 1,
  l = 2,
  c = 3,
  u = 4,
  d = 5,
  f = 6,
  p = 7,
  _ = 8,
  h = 9;
class m extends Chunk355418.c {
  innerPattern() {
    return a
  }
  innerExtract(e, t) {
    if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
    let n = e.createParsingResult(t.index, t[0]),
      r = new Date(e.refDate.getTime());
    if (t[o]) {
      let i = t[o];
      "明" == i || "聽" == i ? e.refDate.getHours() > 1 && r.setDate(r.getDate() + 1) : "昨" == i || "尋" == i || "琴" == i ? r.setDate(r.getDate() - 1) : "前" == i ? r.setDate(r.getDate() - 2) : "大前" == i ? r.setDate(r.getDate() - 3) : "後" == i ? r.setDate(r.getDate() + 2) : "大後" == i && r.setDate(r.getDate() + 3), n.start.assign("day", r.getDate()), n.start.assign("month", r.getMonth() + 1), n.start.assign("year", r.getFullYear())
    } else if (t[u]) {
      let e = t[u];
      "明" == e || "聽" == e ? r.setDate(r.getDate() + 1) : "昨" == e || "尋" == e || "琴" == e ? r.setDate(r.getDate() - 1) : "前" == e ? r.setDate(r.getDate() - 2) : "大前" == e ? r.setDate(r.getDate() - 3) : "後" == e ? r.setDate(r.getDate() + 2) : "大後" == e && r.setDate(r.getDate() + 3), n.start.assign("day", r.getDate()), n.start.assign("month", r.getMonth() + 1), n.start.assign("year", r.getFullYear())
    } else n.start.imply("day", r.getDate()), n.start.imply("month", r.getMonth() + 1), n.start.imply("year", r.getFullYear());
    let a = 0,
      m = 0,
      g = false;
    if (t[_]) {
      var E = parseInt(t[_]);
      if (isNaN(E) && (E = (0, i.CT)(t[_])), E >= 60) return null;
      n.start.assign("second", E)
    }
    if (isNaN(a = parseInt(t[f])) && (a = (0, i.CT)(t[f])), t[p] ? "半" == t[p] ? m = 30 : "正" == t[p] || "整" == t[p] ? m = 0 : isNaN(m = parseInt(t[p])) && (m = (0, i.CT)(t[p])) : a > 100 && (m = a % 100, a = Math.floor(a / 100)), m >= 60 || a > 24) return null;
    if (a >= 12 && (g = 1), t[h]) {
      if (a > 12) return null;
      var y = t[h][0].toLowerCase();
      "a" == y && (g = 0, 12 == a && (a = 0)), "p" == y && (g = 1, 12 != a && (a += 12))
    } else if (t[l]) {
      var b = t[l][0];
      "朝" == b || "早" == b ? (g = 0, 12 == a && (a = 0)) : "晚" == b && (g = 1, 12 != a && (a += 12))
    } else if (t[c]) {
      var O = t[c][0];
      "上" == O || "朝" == O || "早" == O || "凌" == O ? (g = 0, 12 == a && (a = 0)) : ("下" == O || "晏" == O || "晚" == O) && (g = 1, 12 != a && (a += 12))
    } else if (t[d]) {
      var v = t[d][0];
      "上" == v || "朝" == v || "早" == v || "凌" == v ? (g = 0, 12 == a && (a = 0)) : ("下" == v || "晏" == v || "晚" == v) && (g = 1, 12 != a && (a += 12))
    }
    n.start.assign("hour", a), n.start.assign("minute", m), g >= 0 ? n.start.assign("meridiem", g) : a < 12 ? n.start.imply("meridiem", 0) : n.start.imply("meridiem", 1);
    let A = s.exec(e.text.substring(n.index + n.text.length));
    if (!A) return n.text.match(/^\d+$/) ? null : n;
    let I = new Date(r.getTime());
    if (n.end = e.createParsingComponents(), A[o]) {
      let t = A[o];
      "明" == t || "聽" == t ? e.refDate.getHours() > 1 && I.setDate(I.getDate() + 1) : "昨" == t || "尋" == t || "琴" == t ? I.setDate(I.getDate() - 1) : "前" == t ? I.setDate(I.getDate() - 2) : "大前" == t ? I.setDate(I.getDate() - 3) : "後" == t ? I.setDate(I.getDate() + 2) : "大後" == t && I.setDate(I.getDate() + 3), n.end.assign("day", I.getDate()), n.end.assign("month", I.getMonth() + 1), n.end.assign("year", I.getFullYear())
    } else if (A[u]) {
      let e = A[u];
      "明" == e || "聽" == e ? I.setDate(I.getDate() + 1) : "昨" == e || "尋" == e || "琴" == e ? I.setDate(I.getDate() - 1) : "前" == e ? I.setDate(I.getDate() - 2) : "大前" == e ? I.setDate(I.getDate() - 3) : "後" == e ? I.setDate(I.getDate() + 2) : "大後" == e && I.setDate(I.getDate() + 3), n.end.assign("day", I.getDate()), n.end.assign("month", I.getMonth() + 1), n.end.assign("year", I.getFullYear())
    } else n.end.imply("day", I.getDate()), n.end.imply("month", I.getMonth() + 1), n.end.imply("year", I.getFullYear());
    if (a = 0, m = 0, g = false, A[_]) {
      let e = parseInt(A[_]);
      if (isNaN(e) && (e = (0, i.CT)(A[_])), e >= 60) return null;
      n.end.assign("second", e)
    }
    if (isNaN(a = parseInt(A[f])) && (a = (0, i.CT)(A[f])), A[p] ? "半" == A[p] ? m = 30 : "正" == A[p] || "整" == A[p] ? m = 0 : isNaN(m = parseInt(A[p])) && (m = (0, i.CT)(A[p])) : a > 100 && (m = a % 100, a = Math.floor(a / 100)), m >= 60 || a > 24) return null;
    if (a >= 12 && (g = 1), A[h]) {
      if (a > 12) return null;
      var y = A[h][0].toLowerCase();
      "a" == y && (g = 0, 12 == a && (a = 0)), "p" == y && (g = 1, 12 != a && (a += 12)), n.start.isCertain("meridiem") || (0 == g ? (n.start.imply("meridiem", 0), 12 == n.start.get("hour") && n.start.assign("hour", 0)) : (n.start.imply("meridiem", 1), 12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)))
    } else if (A[l]) {
      var b = A[l][0];
      "朝" == b || "早" == b ? (g = 0, 12 == a && (a = 0)) : "晚" == b && (g = 1, 12 != a && (a += 12))
    } else if (A[c]) {
      var O = A[c][0];
      "上" == O || "朝" == O || "早" == O || "凌" == O ? (g = 0, 12 == a && (a = 0)) : ("下" == O || "晏" == O || "晚" == O) && (g = 1, 12 != a && (a += 12))
    } else if (A[d]) {
      var v = A[d][0];
      "上" == v || "朝" == v || "早" == v || "凌" == v ? (g = 0, 12 == a && (a = 0)) : ("下" == v || "晏" == v || "晚" == v) && (g = 1, 12 != a && (a += 12))
    }
    return n.text = n.text + A[0], n.end.assign("hour", a), n.end.assign("minute", m), g >= 0 ? n.end.assign("meridiem", g) : n.start.isCertain("meridiem") && 1 == n.start.get("meridiem") && n.start.get("hour") > a ? n.end.imply("meridiem", 0) : a > 12 && n.end.imply("meridiem", 1), n.end.date().getTime() < n.start.date().getTime() && n.end.imply("day", n.end.get("day") + 1), n
  }
}