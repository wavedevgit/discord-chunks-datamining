/** Chunk was on web.js **/
/** chunk id: 445957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk150816 = require("./150816.js"),
  Chunk140081 = require("./140081.js"),
  Chunk800911 = require("./800911.js"),
  Chunk522677 = require("./522677.js");
let s = 2,
  l = 3;
class c extends Chunk522677.M {
  innerPatternString(e) {
    return `((?:в)\\s*)?(${(0,o.q3)(r._$)})\\s*(?:[,-]?\\s*(${r.H6})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`
  }
  innerExtract(e, t) {
    let n = t[s].toLowerCase();
    if (t[0].length <= 3 && !r.Ge[n]) return null;
    let o = e.createParsingResult(t.index, t.index + t[0].length);
    o.start.imply("day", 1);
    let a = r._$[n];
    if (o.start.assign("month", a), t[l]) {
      let e = (0, r.SH)(t[l]);
      o.start.assign("year", e)
    } else {
      let t = (0, i.r)(e.refDate, 1, a);
      o.start.imply("year", t)
    }
    return o
  }
}