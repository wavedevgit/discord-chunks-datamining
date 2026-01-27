/** Chunk was on web.js **/
/** chunk id: 642714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk364242 = require("./364242.js"),
  Chunk615339 = require("./615339.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js");
let s = RegExp(`(${(0,Chunk476858.uJ)(Chunk615339.eB)})(?:-|/|\\s*,?\\s*)(${Chunk615339.lT})(?!\\s*(?:am|pm))\\s*(?:(?:al|\\-|\\alle|\\del|\\s)\\s*(${Chunk615339.lT})\\s*)?(?:(?:-|/|\\s*,?\\s*)(${Chunk615339.fp}))?(?=\\W|$)(?!\\:\\d)`, "i"),
  l = 1,
  c = 2,
  u = 3,
  d = 4;
class f extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = i.eB[t[l].toLowerCase()],
      a = (0, i.k8)(t[c]);
    if (a > 31) return null;
    let o = e.createParsingComponents({
      day: a,
      month: n
    });
    if (t[d]) {
      let e = (0, i.zL)(t[d]);
      o.assign("year", e)
    } else {
      let t = (0, r.Y)(e.refDate, a, n);
      o.imply("year", t)
    }
    if (!t[u]) return o;
    let s = (0, i.k8)(t[u]),
      f = e.createParsingResult(t.index, t[0]);
    return f.start = o, f.end = o.clone(), f.end.assign("day", s), f
  }
}