/** Chunk was on web.js **/
/** chunk id: 575253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk140081 = require("./140081.js"),
  Chunk150816 = require("./150816.js"),
  Chunk800911 = require("./800911.js"),
  Chunk522677 = require("./522677.js");
let s = 1,
  l = 2,
  c = 3,
  u = 4;
class d extends Chunk522677.F {
  innerPatternString(e) {
    return `(?:с)?\\s*(${i.aK})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${i.aK}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0,o.q3)(i._$)})(?:(?:-|\\/|,?\\s{0,3})(${i.H6}(?![^\\s]\\d)))?`
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      o = i._$[t[c].toLowerCase()],
      a = (0, i.JF)(t[s]);
    if (a > 31) return t.index = t.index + t[s].length, null;
    if (n.start.assign("month", o), n.start.assign("day", a), t[u]) {
      let e = (0, i.SH)(t[u]);
      n.start.assign("year", e)
    } else {
      let t = (0, r.r)(e.refDate, a, o);
      n.start.imply("year", t)
    }
    if (t[l]) {
      let e = (0, i.JF)(t[l]);
      n.end = n.start.clone(), n.end.assign("day", e)
    }
    return n
  }
}