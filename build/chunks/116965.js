/** Chunk was on web.js **/
/** chunk id: 116965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk140081 = require("./140081.js"),
  Chunk745901 = require("./745901.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js");
let s = RegExp(`(?:on\\s*?)?(${Chunk745901.aK})(?:\\s*(?:tot|\\-|\\–|until|through|till|\\s)\\s*(${Chunk745901.aK}))?(?:-|/|\\s*(?:of)?\\s*)(` + (0, Chunk800911.q3)(Chunk745901._$) + ")(?:(?:-|/|,?\\s*)" + `(${Chunk745901.H6}(?![^\\s]\\d))` + ")?(?=\\W|$)", "i"),
  l = 3,
  c = 1,
  u = 2,
  d = 4;
class f extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = i._$[t[l].toLowerCase()],
      a = (0, i.JF)(t[c]);
    if (a > 31) return t.index = t.index + t[c].length, null;
    let o = e.createParsingComponents({
      day: a,
      month: n
    });
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