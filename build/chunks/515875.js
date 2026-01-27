/** Chunk was on web.js **/
/** chunk id: 515875, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk355418 = require("./355418.js"),
  Chunk322811 = require("./322811.js"),
  Chunk501459 = require("./501459.js");
let o = RegExp("(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[" + Object.keys(Chunk501459.uk).join("") + "]+)(?:\\s*)(?:時(?!間)|:|：)(?:\\s*)([0-9０-９]+|半|[" + Object.keys(Chunk501459.uk).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)([0-9０-９]+|[" + Object.keys(Chunk501459.uk).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i"),
  s = RegExp("(?:^\\s*(?:から|\\-|\\–|\\－|\\~|\\〜)\\s*)(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[" + Object.keys(Chunk501459.uk).join("") + "]+)(?:\\s*)(?:時|:|：)(?:\\s*)([0-9０-９]+|半|[" + Object.keys(Chunk501459.uk).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)([0-9０-９]+|[" + Object.keys(Chunk501459.uk).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i"),
  l = 1,
  c = 2,
  u = 3,
  d = 4,
  f = 5;
class p extends Chunk355418.c {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
    let n = e.createParsingResult(t.index, t[0]);
    return (n.start = _(e, t[c], t[u], t[d], t[l] ?? t[f]), n.start) ? (t = s.exec(e.text.substring(n.index + n.text.length))) ? (n.text = n.text + t[0], n.end = _(e, t[c], t[u], t[d], t[l] ?? t[f]), n.end) ? (!n.end.isCertain("meridiem") && n.start.isCertain("meridiem") && (n.end.imply("meridiem", n.start.get("meridiem")), n.start.get("meridiem") === i.FF.PM && (n.start.get("hour") - 12 > n.end.get("hour") ? n.end.imply("meridiem", i.FF.AM) : 12 > n.end.get("hour") && n.end.assign("hour", n.end.get("hour") + 12))), n.end.date().getTime() < n.start.date().getTime() && n.end.imply("day", n.end.get("day") + 1), n) : null : n : (t.index += t[0].length, null)
  }
}

function _(e, t, n, r, o) {
  let s = 0,
    l = false,
    c = e.createParsingComponents();
  if (isNaN(s = parseInt((0, a.Zp)(t))) && (s = (0, a.zX)(t)), s > 24) return null;
  if (n) {
    let e;
    if ("半" === n ? e = 30 : isNaN(e = parseInt((0, a.Zp)(n))) && (e = (0, a.zX)(n)), e >= 60) return null;
    c.assign("minute", e)
  }
  if (r) {
    let e = parseInt((0, a.Zp)(r));
    if (isNaN(e) && (e = (0, a.zX)(r)), e >= 60) return null;
    c.assign("second", e)
  }
  if (o) {
    if (s > 12) return null;
    let e = o;
    "午前" === e || "a" === e[0].toLowerCase() ? (l = i.FF.AM, 12 === s && (s = 0)) : ("午後" === e || "p" === e[0].toLowerCase()) && (l = i.FF.PM, 12 != s && (s += 12))
  }
  return c.assign("hour", s), l >= 0 ? c.assign("meridiem", l) : s < 12 ? c.imply("meridiem", i.FF.AM) : c.imply("meridiem", i.FF.PM), c
}