/** Chunk was on web.js **/
/** chunk id: 273050, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk528352 = require("./528352.js"),
  Chunk364242 = require("./364242.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js");
let s = RegExp(`(${(0,Chunk476858.uJ)(Chunk528352.eB)})\\s*(?:[,-]?\\s*(${Chunk528352.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"),
  l = 1,
  c = 2;
class u extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = e.createParsingComponents();
    n.imply("day", 1);
    let a = t[l],
      o = r.eB[a.toLowerCase()];
    if (n.assign("month", o), t[c]) {
      let e = (0, r.zL)(t[c]);
      n.assign("year", e)
    } else {
      let t = (0, i.Y)(e.refDate, 1, o);
      n.imply("year", t)
    }
    return n
  }
}