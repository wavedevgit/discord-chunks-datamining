/** Chunk was on web.js **/
/** chunk id: 60655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk364242 = require("./364242.js"),
  Chunk998493 = require("./998493.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js");
let o = RegExp(`(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(${(0,Chunk476858.uJ)(Chunk998493.eB)})(?:(?:-|/|,?\\s*)(${Chunk998493.fp}(?![^\\s]\\d)))?(?=\\W|$)`, "i"),
  l = 1,
  c = 2,
  u = 3,
  d = 4;
class f extends Chunk355418.c {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      a = i.eB[t[u].toLowerCase()],
      s = parseInt(t[l]);
    if (s > 31) return t.index = t.index + t[l].length, null;
    if (n.start.assign("month", a), n.start.assign("day", s), t[d]) {
      let e = (0, i.zL)(t[d]);
      n.start.assign("year", e)
    } else {
      let t = (0, r.Y)(e.refDate, s, a);
      n.start.imply("year", t)
    }
    if (t[c]) {
      let e = parseInt(t[c]);
      n.end = n.start.clone(), n.end.assign("day", e)
    }
    return n
  }
}