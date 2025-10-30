/** Chunk was on web.js **/
/** chunk id: 890378, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk140081 = require("./140081.js"),
  Chunk684758 = require("./684758.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js");
let s = RegExp(`(${(0,Chunk800911.q3)(Chunk684758._$)})(?:-|/|\\s*,?\\s*)(${Chunk684758.aK})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${Chunk684758.aK})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${Chunk684758.H6}))?(?=\\W|$)(?!\\:\\d)`, "i"),
  l = 1,
  c = 2,
  u = 3,
  d = 4;
class f extends Chunk727916.Z {
  shouldSkipYearLikeDate;
  constructor(e) {
    super(), this.shouldSkipYearLikeDate = e
  }
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = i._$[t[l].toLowerCase()],
      a = (0, i.JF)(t[c]);
    if (a > 31 || this.shouldSkipYearLikeDate && !t[u] && !t[d] && t[c].match(/^2[0-5]$/)) return null;
    let o = e.createParsingComponents({
      day: a,
      month: n
    }).addTag("parser/ENMonthNameMiddleEndianParser");
    if (t[d]) {
      let e = (0, i.SH)(t[d]);
      o.assign("year", e)
    } else {
      let t = (0, r.r)(e.refDate, a, n);
      o.imply("year", t)
    }
    if (!t[u]) return o;
    let s = (0, i.JF)(t[u]),
      f = e.createParsingResult(t.index, t[0]);
    return f.start = o, f.end = o.clone(), f.end.assign("day", s), f
  }
}