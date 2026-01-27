/** Chunk was on web.js **/
/** chunk id: 998275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk364242 = require("./364242.js"),
  Chunk615339 = require("./615339.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js");
let s = RegExp(`(?:on\\s{0,3})?(${Chunk615339.lT})(?:\\s{0,3}(?:al|\\-|\\–|fino|alle|allo)?\\s{0,3}(${Chunk615339.lT}))?(?:-|/|\\s{0,3}(?:dal)?\\s{0,3})(${(0,Chunk476858.uJ)(Chunk615339.eB)})(?:(?:-|/|,?\\s{0,3})(${Chunk615339.fp}(?![^\\s]\\d)))?(?=\\W|$)`, "i"),
  l = 1,
  c = 2,
  u = 3,
  d = 4;
class f extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      a = i.eB[t[u].toLowerCase()],
      o = (0, i.k8)(t[l]);
    if (o > 31) return t.index = t.index + t[l].length, null;
    if (n.start.assign("month", a), n.start.assign("day", o), t[d]) {
      let e = (0, i.zL)(t[d]);
      n.start.assign("year", e)
    } else {
      let t = (0, r.Y)(e.refDate, o, a);
      n.start.imply("year", t)
    }
    if (t[c]) {
      let e = (0, i.k8)(t[c]);
      n.end = n.start.clone(), n.end.assign("day", e)
    }
    return n
  }
}