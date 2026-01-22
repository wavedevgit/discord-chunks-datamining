/** Chunk was on web.js **/
/** chunk id: 921932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk364242 = require("./364242.js"),
  Chunk528352 = require("./528352.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js");
let o = RegExp(`(?:on\\s*?)?(${Chunk528352.lT})(?:\\s*(?:tot|\\-|\\–|until|through|till|\\s)\\s*(${Chunk528352.lT}))?(?:-|/|\\s*(?:of)?\\s*)(` + (0, Chunk476858.uJ)(Chunk528352.eB) + ")(?:(?:-|/|,?\\s*)" + `(${Chunk528352.fp}(?![^\\s]\\d))` + ")?(?=\\W|$)", "i"),
  l = 3,
  c = 1,
  u = 2,
  d = 4;
class f extends Chunk355418.c {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = i.eB[t[l].toLowerCase()],
      a = (0, i.k8)(t[c]);
    if (a > 31) return t.index = t.index + t[c].length, null;
    let s = e.createParsingComponents({
      day: a,
      month: n
    });
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