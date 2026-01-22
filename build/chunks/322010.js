/** Chunk was on web.js **/
/** chunk id: 322010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk364242 = require("./364242.js"),
  Chunk360345 = require("./360345.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js");
let o = RegExp(`(${(0,Chunk476858.uJ)(Chunk360345.eB)})(?:-|/|\\s*,?\\s*)(${Chunk360345.lT})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${Chunk360345.lT})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${Chunk360345.fp}))?(?=\\W|$)(?!\\:\\d)`, "i"),
  l = 1,
  c = 2,
  u = 3,
  d = 4;
class f extends Chunk355418.c {
  shouldSkipYearLikeDate;
  constructor(e) {
    super(), this.shouldSkipYearLikeDate = e
  }
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = i.eB[t[l].toLowerCase()],
      a = (0, i.k8)(t[c]);
    if (a > 31 || this.shouldSkipYearLikeDate && !t[u] && !t[d] && t[c].match(/^2[0-5]$/)) return null;
    let s = e.createParsingComponents({
      day: a,
      month: n
    }).addTag("parser/ENMonthNameMiddleEndianParser");
    if (t[d]) {
      let e = (0, i.zL)(t[d]);
      s.assign("year", e)
    } else {
      let t = (0, r.Y)(e.refDate, a, n);
      s.imply("year", t)
    }
    if (!t[u]) return s;
    let o = (0, i.k8)(t[u]),
      f = e.createParsingResult(t.index, t[0]);
    return f.start = s, f.end = s.clone(), f.end.assign("day", o), f
  }
}