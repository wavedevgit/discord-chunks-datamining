/** Chunk was on web.js **/
/** chunk id: 961308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk727916 = require("./727916.js"),
  Chunk151742 = require("./151742.js");
let a = RegExp("(?:由|從|自)?(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(Chunk151742.Wu).join("") + "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(Chunk151742.Wu).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(Chunk151742.Wu).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i"),
  o = RegExp("(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(Chunk151742.Wu).join("") + "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(Chunk151742.Wu).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(Chunk151742.Wu).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i"),
  s = 1,
  l = 2,
  c = 3,
  u = 4,
  d = 5,
  f = 6,
  _ = 7,
  p = 8,
  h = 9;
class m extends Chunk727916.Z {
  innerPattern() {
    return a
  }
  innerExtract(e, t) {
    if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
    let n = e.createParsingResult(t.index, t[0]),
      r = new Date(e.refDate.getTime());
    if (t[s]) {
      let i = t[s];
      "明" == i || "聽" == i ? e.refDate.getHours() > 1 && r.setDate(r.getDate() + 1) : "昨" == i || "尋" == i || "琴" == i ? r.setDate(r.getDate() - 1) : "前" == i ? r.setDate(r.getDate() - 2) : "大前" == i ? r.setDate(r.getDate() - 3) : "後" == i ? r.setDate(r.getDate() + 2) : "大後" == i && r.setDate(r.getDate() + 3), n.start.assign("day", r.getDate()), n.start.assign("month", r.getMonth() + 1), n.start.assign("year", r.getFullYear())
    } else if (t[u]) {
      let e = t[u];
      "明" == e || "聽" == e ? r.setDate(r.getDate() + 1) : "昨" == e || "尋" == e || "琴" == e ? r.setDate(r.getDate() - 1) : "前" == e ? r.setDate(r.getDate() - 2) : "大前" == e ? r.setDate(r.getDate() - 3) : "後" == e ? r.setDate(r.getDate() + 2) : "大後" == e && r.setDate(r.getDate() + 3), n.start.assign("day", r.getDate()), n.start.assign("month", r.getMonth() + 1), n.start.assign("year", r.getFullYear())
    } else n.start.imply("day", r.getDate()), n.start.imply("month", r.getMonth() + 1), n.start.imply("year", r.getFullYear());
    let a = 0,
      m = 0,
      g = false;
    if (t[p]) {
      var E = parseInt(t[p]);
      if (isNaN(E) && (E = (0, i.zU)(t[p])), E >= 60) return null;
      n.start.assign("second", E)
    }
    if (isNaN(a = parseInt(t[f])) && (a = (0, i.zU)(t[f])), t[_] ? "半" == t[_] ? m = 30 : "正" == t[_] || "整" == t[_] ? m = 0 : isNaN(m = parseInt(t[_])) && (m = (0, i.zU)(t[_])) : a > 100 && (m = a % 100, a = Math.floor(a / 100)), m >= 60 || a > 24) return null;
    if (a >= 12 && (g = 1), t[h]) {
      if (a > 12) return null;
      var b = t[h][0].toLowerCase();
      "a" == b && (g = 0, 12 == a && (a = 0)), "p" == b && (g = 1, 12 != a && (a += 12))
    } else if (t[l]) {
      var y = t[l][0];
      "朝" == y || "早" == y ? (g = 0, 12 == a && (a = 0)) : "晚" == y && (g = 1, 12 != a && (a += 12))
    } else if (t[c]) {
      var O = t[c][0];
      "上" == O || "朝" == O || "早" == O || "凌" == O ? (g = 0, 12 == a && (a = 0)) : ("下" == O || "晏" == O || "晚" == O) && (g = 1, 12 != a && (a += 12))
    } else if (t[d]) {
      var v = t[d][0];
      "上" == v || "朝" == v || "早" == v || "凌" == v ? (g = 0, 12 == a && (a = 0)) : ("下" == v || "晏" == v || "晚" == v) && (g = 1, 12 != a && (a += 12))
    }
    n.start.assign("hour", a), n.start.assign("minute", m), g >= 0 ? n.start.assign("meridiem", g) : a < 12 ? n.start.imply("meridiem", 0) : n.start.imply("meridiem", 1);
    let I = o.exec(e.text.substring(n.index + n.text.length));
    if (!I) return n.text.match(/^\d+$/) ? null : n;
    let S = new Date(r.getTime());
    if (n.end = e.createParsingComponents(), I[s]) {
      let t = I[s];
      "明" == t || "聽" == t ? e.refDate.getHours() > 1 && S.setDate(S.getDate() + 1) : "昨" == t || "尋" == t || "琴" == t ? S.setDate(S.getDate() - 1) : "前" == t ? S.setDate(S.getDate() - 2) : "大前" == t ? S.setDate(S.getDate() - 3) : "後" == t ? S.setDate(S.getDate() + 2) : "大後" == t && S.setDate(S.getDate() + 3), n.end.assign("day", S.getDate()), n.end.assign("month", S.getMonth() + 1), n.end.assign("year", S.getFullYear())
    } else if (I[u]) {
      let e = I[u];
      "明" == e || "聽" == e ? S.setDate(S.getDate() + 1) : "昨" == e || "尋" == e || "琴" == e ? S.setDate(S.getDate() - 1) : "前" == e ? S.setDate(S.getDate() - 2) : "大前" == e ? S.setDate(S.getDate() - 3) : "後" == e ? S.setDate(S.getDate() + 2) : "大後" == e && S.setDate(S.getDate() + 3), n.end.assign("day", S.getDate()), n.end.assign("month", S.getMonth() + 1), n.end.assign("year", S.getFullYear())
    } else n.end.imply("day", S.getDate()), n.end.imply("month", S.getMonth() + 1), n.end.imply("year", S.getFullYear());
    if (a = 0, m = 0, g = false, I[p]) {
      let e = parseInt(I[p]);
      if (isNaN(e) && (e = (0, i.zU)(I[p])), e >= 60) return null;
      n.end.assign("second", e)
    }
    if (isNaN(a = parseInt(I[f])) && (a = (0, i.zU)(I[f])), I[_] ? "半" == I[_] ? m = 30 : "正" == I[_] || "整" == I[_] ? m = 0 : isNaN(m = parseInt(I[_])) && (m = (0, i.zU)(I[_])) : a > 100 && (m = a % 100, a = Math.floor(a / 100)), m >= 60 || a > 24) return null;
    if (a >= 12 && (g = 1), I[h]) {
      if (a > 12) return null;
      var b = I[h][0].toLowerCase();
      "a" == b && (g = 0, 12 == a && (a = 0)), "p" == b && (g = 1, 12 != a && (a += 12)), n.start.isCertain("meridiem") || (0 == g ? (n.start.imply("meridiem", 0), 12 == n.start.get("hour") && n.start.assign("hour", 0)) : (n.start.imply("meridiem", 1), 12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)))
    } else if (I[l]) {
      var y = I[l][0];
      "朝" == y || "早" == y ? (g = 0, 12 == a && (a = 0)) : "晚" == y && (g = 1, 12 != a && (a += 12))
    } else if (I[c]) {
      var O = I[c][0];
      "上" == O || "朝" == O || "早" == O || "凌" == O ? (g = 0, 12 == a && (a = 0)) : ("下" == O || "晏" == O || "晚" == O) && (g = 1, 12 != a && (a += 12))
    } else if (I[d]) {
      var v = I[d][0];
      "上" == v || "朝" == v || "早" == v || "凌" == v ? (g = 0, 12 == a && (a = 0)) : ("下" == v || "晏" == v || "晚" == v) && (g = 1, 12 != a && (a += 12))
    }
    return n.text = n.text + I[0], n.end.assign("hour", a), n.end.assign("minute", m), g >= 0 ? n.end.assign("meridiem", g) : n.start.isCertain("meridiem") && 1 == n.start.get("meridiem") && n.start.get("hour") > a ? n.end.imply("meridiem", 0) : a > 12 && n.end.imply("meridiem", 1), n.end.date().getTime() < n.start.date().getTime() && n.end.imply("day", n.end.get("day") + 1), n
  }
}