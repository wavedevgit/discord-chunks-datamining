/** Chunk was on web.js **/
/** chunk id: 179860, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk989479 = require("./989479.js"),
  Chunk364242 = require("./364242.js"),
  Chunk476858 = require("./476858.js"),
  Chunk241738 = require("./241738.js");
let o = 2,
  l = 3;
class c extends Chunk241738.d {
  innerPatternString(e) {
    return `((?:в)\\s*)?(${(0,a.uJ)(r.eB)})\\s*(?:[,-]?\\s*(${r.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`
  }
  innerExtract(e, t) {
    let n = t[o].toLowerCase();
    if (t[0].length <= 3 && !r.Wp[n]) return null;
    let a = e.createParsingResult(t.index, t.index + t[0].length);
    a.start.imply("day", 1);
    let s = r.eB[n];
    if (a.start.assign("month", s), t[l]) {
      let e = (0, r.zL)(t[l]);
      a.start.assign("year", e)
    } else {
      let t = (0, i.Y)(e.refDate, 1, s);
      a.start.imply("year", t)
    }
    return a
  }
}