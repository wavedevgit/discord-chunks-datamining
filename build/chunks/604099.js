/** Chunk was on web.js **/
/** chunk id: 604099, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk140081 = require("./140081.js"),
  Chunk53851 = require("./53851.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js");
let s = RegExp(`(?:on\\s{0,3})?(${Chunk53851.aK})(?:\\s{0,3}(?:al|\\-|\\–|fino|alle|allo)?\\s{0,3}(${Chunk53851.aK}))?(?:-|/|\\s{0,3}(?:dal)?\\s{0,3})(${(0,Chunk800911.q3)(Chunk53851._$)})(?:(?:-|/|,?\\s{0,3})(${Chunk53851.H6}(?![^\\s]\\d)))?(?=\\W|$)`, "i"),
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
      a = i._$[t[u].toLowerCase()],
      o = (0, i.JF)(t[l]);
    if (o > 31) return t.index = t.index + t[l].length, null;
    if (n.start.assign("month", a), n.start.assign("day", o), t[d]) {
      let e = (0, i.SH)(t[d]);
      n.start.assign("year", e)
    } else {
      let t = (0, r.r)(e.refDate, o, a);
      n.start.imply("year", t)
    }
    if (t[c]) {
      let e = (0, i.JF)(t[c]);
      n.end = n.start.clone(), n.end.assign("day", e)
    }
    return n
  }
}