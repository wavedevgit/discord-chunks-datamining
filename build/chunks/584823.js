/** Chunk was on web.js **/
/** chunk id: 584823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk364242 = require("./364242.js"),
  Chunk989479 = require("./989479.js"),
  Chunk476858 = require("./476858.js"),
  Chunk241738 = require("./241738.js");
let s = 1,
  l = 2,
  c = 3,
  u = 4;
class d extends Chunk241738.w {
  innerPatternString(e) {
    return `(?:с)?\\s*(${i.lT})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${i.lT}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0,a.uJ)(i.eB)})(?:(?:-|\\/|,?\\s{0,3})(${i.fp}(?![^\\s]\\d)))?`
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      a = i.eB[t[c].toLowerCase()],
      o = (0, i.k8)(t[s]);
    if (o > 31) return t.index = t.index + t[s].length, null;
    if (n.start.assign("month", a), n.start.assign("day", o), t[u]) {
      let e = (0, i.zL)(t[u]);
      n.start.assign("year", e)
    } else {
      let t = (0, r.Y)(e.refDate, o, a);
      n.start.imply("year", t)
    }
    if (t[l]) {
      let e = (0, i.k8)(t[l]);
      n.end = n.start.clone(), n.end.assign("day", e)
    }
    return n
  }
}