/** Chunk was on web.js **/
/** chunk id: 815985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk684758 = require("./684758.js"),
  Chunk140081 = require("./140081.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js");
let s = RegExp(`((?:in)\\s*)?(${(0,Chunk800911.q3)(Chunk684758._$)})\\s*(?:(?:,|-|of)?\\s*(${Chunk684758.H6})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"),
  l = 1,
  c = 2,
  u = 3;
class d extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[c].toLowerCase();
    if (t[0].length <= 3 && !r.Ge[n]) return null;
    let o = e.createParsingResult(t.index + (t[l] || "").length, t.index + t[0].length);
    o.start.imply("day", 1), o.start.addTag("parser/ENMonthNameParser");
    let a = r._$[n];
    if (o.start.assign("month", a), t[u]) {
      let e = (0, r.SH)(t[u]);
      o.start.assign("year", e)
    } else {
      let t = (0, i.r)(e.refDate, 1, a);
      o.start.imply("year", t)
    }
    return o
  }
}