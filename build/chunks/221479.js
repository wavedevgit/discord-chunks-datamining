/** Chunk was on web.js **/
/** chunk id: 221479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk727916 = require("./727916.js"),
  Chunk627459 = require("./627459.js");
let o = RegExp("(?:从|自)?(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(Chunk627459.Wu).join("") + "]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(Chunk627459.Wu).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(Chunk627459.Wu).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i"),
  a = RegExp("(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(Chunk627459.Wu).join("") + "]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(Chunk627459.Wu).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(Chunk627459.Wu).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i"),
  s = 1,
  l = 2,
  c = 3,
  u = 4,
  d = 5,
  f = 6,
  p = 7,
  _ = 8,
  m = 9;
class h extends Chunk727916.Z {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
    let n = e.createParsingResult(t.index, t[0]),
      r = new Date(e.refDate.getTime());
    if (t[s]) {
      let i = t[s];
      "明" == i ? e.refDate.getHours() > 1 && r.setDate(r.getDate() + 1) : "昨" == i ? r.setDate(r.getDate() - 1) : "前" == i ? r.setDate(r.getDate() - 2) : "大前" == i ? r.setDate(r.getDate() - 3) : "后" == i ? r.setDate(r.getDate() + 2) : "大后" == i && r.setDate(r.getDate() + 3), n.start.assign("day", r.getDate()), n.start.assign("month", r.getMonth() + 1), n.start.assign("year", r.getFullYear())
    } else if (t[u]) {
      let e = t[u];
      "明" == e ? r.setDate(r.getDate() + 1) : "昨" == e ? r.setDate(r.getDate() - 1) : "前" == e ? r.setDate(r.getDate() - 2) : "大前" == e ? r.setDate(r.getDate() - 3) : "后" == e ? r.setDate(r.getDate() + 2) : "大后" == e && r.setDate(r.getDate() + 3), n.start.assign("day", r.getDate()), n.start.assign("month", r.getMonth() + 1), n.start.assign("year", r.getFullYear())
    } else n.start.imply("day", r.getDate()), n.start.imply("month", r.getMonth() + 1), n.start.imply("year", r.getFullYear());
    let o = 0,
      h = 0,
      g = false;
    if (t[_]) {
      let e = parseInt(t[_]);
      if (isNaN(e) && (e = (0, i.zU)(t[_])), e >= 60) return null;
      n.start.assign("second", e)
    }
    if (isNaN(o = parseInt(t[f])) && (o = (0, i.zU)(t[f])), t[p] ? "半" == t[p] ? h = 30 : "正" == t[p] || "整" == t[p] ? h = 0 : isNaN(h = parseInt(t[p])) && (h = (0, i.zU)(t[p])) : o > 100 && (h = o % 100, o = Math.floor(o / 100)), h >= 60 || o > 24) return null;
    if (o >= 12 && (g = 1), t[m]) {
      if (o > 12) return null;
      let e = t[m][0].toLowerCase();
      "a" == e && (g = 0, 12 == o && (o = 0)), "p" == e && (g = 1, 12 != o && (o += 12))
    } else if (t[l]) {
      let e = t[l][0];
      "早" == e ? (g = 0, 12 == o && (o = 0)) : "晚" == e && (g = 1, 12 != o && (o += 12))
    } else if (t[c]) {
      let e = t[c][0];
      "上" == e || "早" == e || "凌" == e ? (g = 0, 12 == o && (o = 0)) : ("下" == e || "晚" == e) && (g = 1, 12 != o && (o += 12))
    } else if (t[d]) {
      let e = t[d][0];
      "上" == e || "早" == e || "凌" == e ? (g = 0, 12 == o && (o = 0)) : ("下" == e || "晚" == e) && (g = 1, 12 != o && (o += 12))
    }
    n.start.assign("hour", o), n.start.assign("minute", h), g >= 0 ? n.start.assign("meridiem", g) : o < 12 ? n.start.imply("meridiem", 0) : n.start.imply("meridiem", 1);
    let E = a.exec(e.text.substring(n.index + n.text.length));
    if (!E) return n.text.match(/^\d+$/) ? null : n;
    let b = new Date(r.getTime());
    if (n.end = e.createParsingComponents(), E[s]) {
      let t = E[s];
      "明" == t ? e.refDate.getHours() > 1 && b.setDate(b.getDate() + 1) : "昨" == t ? b.setDate(b.getDate() - 1) : "前" == t ? b.setDate(b.getDate() - 2) : "大前" == t ? b.setDate(b.getDate() - 3) : "后" == t ? b.setDate(b.getDate() + 2) : "大后" == t && b.setDate(b.getDate() + 3), n.end.assign("day", b.getDate()), n.end.assign("month", b.getMonth() + 1), n.end.assign("year", b.getFullYear())
    } else if (E[u]) {
      let e = E[u];
      "明" == e ? b.setDate(b.getDate() + 1) : "昨" == e ? b.setDate(b.getDate() - 1) : "前" == e ? b.setDate(b.getDate() - 2) : "大前" == e ? b.setDate(b.getDate() - 3) : "后" == e ? b.setDate(b.getDate() + 2) : "大后" == e && b.setDate(b.getDate() + 3), n.end.assign("day", b.getDate()), n.end.assign("month", b.getMonth() + 1), n.end.assign("year", b.getFullYear())
    } else n.end.imply("day", b.getDate()), n.end.imply("month", b.getMonth() + 1), n.end.imply("year", b.getFullYear());
    if (o = 0, h = 0, g = false, E[_]) {
      let e = parseInt(E[_]);
      if (isNaN(e) && (e = (0, i.zU)(E[_])), e >= 60) return null;
      n.end.assign("second", e)
    }
    if (isNaN(o = parseInt(E[f])) && (o = (0, i.zU)(E[f])), E[p] ? "半" == E[p] ? h = 30 : "正" == E[p] || "整" == E[p] ? h = 0 : isNaN(h = parseInt(E[p])) && (h = (0, i.zU)(E[p])) : o > 100 && (h = o % 100, o = Math.floor(o / 100)), h >= 60 || o > 24) return null;
    if (o >= 12 && (g = 1), E[m]) {
      if (o > 12) return null;
      let e = E[m][0].toLowerCase();
      "a" == e && (g = 0, 12 == o && (o = 0)), "p" == e && (g = 1, 12 != o && (o += 12)), n.start.isCertain("meridiem") || (0 == g ? (n.start.imply("meridiem", 0), 12 == n.start.get("hour") && n.start.assign("hour", 0)) : (n.start.imply("meridiem", 1), 12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)))
    } else if (E[l]) {
      let e = E[l][0];
      "早" == e ? (g = 0, 12 == o && (o = 0)) : "晚" == e && (g = 1, 12 != o && (o += 12))
    } else if (E[c]) {
      let e = E[c][0];
      "上" == e || "早" == e || "凌" == e ? (g = 0, 12 == o && (o = 0)) : ("下" == e || "晚" == e) && (g = 1, 12 != o && (o += 12))
    } else if (E[d]) {
      let e = E[d][0];
      "上" == e || "早" == e || "凌" == e ? (g = 0, 12 == o && (o = 0)) : ("下" == e || "晚" == e) && (g = 1, 12 != o && (o += 12))
    }
    return n.text = n.text + E[0], n.end.assign("hour", o), n.end.assign("minute", h), g >= 0 ? n.end.assign("meridiem", g) : n.start.isCertain("meridiem") && 1 == n.start.get("meridiem") && n.start.get("hour") > o ? n.end.imply("meridiem", 0) : o > 12 && n.end.imply("meridiem", 1), n.end.date().getTime() < n.start.date().getTime() && n.end.imply("day", n.end.get("day") + 1), n
  }
}