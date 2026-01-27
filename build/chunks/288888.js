/** Chunk was on web.js **/
/** chunk id: 288888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk615339 = require("./615339.js"),
  Chunk364242 = require("./364242.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js");
let s = RegExp(`((?:in)\\s*)?(${(0,Chunk476858.uJ)(Chunk615339.eB)})\\s*(?:[,-]?\\s*(${Chunk615339.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"),
  l = 1,
  c = 2,
  u = 3;
class d extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[c].toLowerCase();
    if (t[0].length <= 3 && !r.Wp[n]) return null;
    let a = e.createParsingResult(t.index + (t[l] || "").length, t.index + t[0].length);
    a.start.imply("day", 1);
    let o = r.eB[n];
    if (a.start.assign("month", o), t[u]) {
      let e = (0, r.zL)(t[u]);
      a.start.assign("year", e)
    } else {
      let t = (0, i.Y)(e.refDate, 1, o);
      a.start.imply("year", t)
    }
    return a
  }
}