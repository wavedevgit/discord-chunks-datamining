/** Chunk was on web.js **/
/** chunk id: 32775, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk745901 = require("./745901.js"),
  Chunk140081 = require("./140081.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js");
let s = RegExp(`(${(0,Chunk800911.q3)(Chunk745901._$)})\\s*(?:[,-]?\\s*(${Chunk745901.H6})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"),
  l = 1,
  c = 2;
class u extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = e.createParsingComponents();
    n.imply("day", 1);
    let a = t[l],
      o = r._$[a.toLowerCase()];
    if (n.assign("month", o), t[c]) {
      let e = (0, r.SH)(t[c]);
      n.assign("year", e)
    } else {
      let t = (0, i.r)(e.refDate, 1, o);
      n.imply("year", t)
    }
    return n
  }
}