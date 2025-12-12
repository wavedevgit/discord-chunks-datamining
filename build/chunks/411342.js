/** Chunk was on web.js **/
/** chunk id: 411342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk140081 = require("./140081.js"),
  Chunk765682 = require("./765682.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js");
let s = RegExp(`(?:on\\s*?)?(${Chunk765682.aK})(?:\\s*(?:au|\\-|\\–|jusqu'au?|\\s)\\s*(${Chunk765682.aK}))?(?:-|/|\\s*(?:de)?\\s*)(${(0,Chunk800911.q3)(Chunk765682._$)})(?:(?:-|/|,?\\s*)(${Chunk765682.H6}(?![^\\s]\\d)))?(?=\\W|$)`, "i"),
  l = 1,
  c = 2,
  u = 3,
  d = 4;
class f extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      o = i._$[t[u].toLowerCase()],
      a = (0, i.JF)(t[l]);
    if (a > 31) return t.index = t.index + t[l].length, null;
    if (n.start.assign("month", o), n.start.assign("day", a), t[d]) {
      let e = (0, i.SH)(t[d]);
      n.start.assign("year", e)
    } else {
      let t = (0, r.r)(e.refDate, a, o);
      n.start.imply("year", t)
    }
    if (t[c]) {
      let e = (0, i.JF)(t[c]);
      n.end = n.start.clone(), n.end.assign("day", e)
    }
    return n
  }
}