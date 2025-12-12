/** Chunk was on web.js **/
/** chunk id: 520021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk140081 = require("./140081.js"),
  Chunk325854 = require("./325854.js"),
  Chunk800911 = require("./800911.js"),
  Chunk344368 = require("./344368.js");
let s = 1,
  l = 2,
  c = 3,
  u = 4;
class d extends Chunk344368.F {
  innerPatternString(e) {
    return `(?:з|із)?\\s*(${i.aK})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${i.aK}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0,a.q3)(i._$)})(?:(?:-|\\/|,?\\s{0,3})(${i.H6}(?![^\\s]\\d)))?`
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      a = i._$[t[c].toLowerCase()],
      o = (0, i.JF)(t[s]);
    if (o > 31) return t.index = t.index + t[s].length, null;
    if (n.start.assign("month", a), n.start.assign("day", o), t[u]) {
      let e = (0, i.ek)(t[u]);
      n.start.assign("year", e)
    } else {
      let t = (0, r.r)(e.reference.instant, o, a);
      n.start.imply("year", t)
    }
    if (t[l]) {
      let e = (0, i.JF)(t[l]);
      n.end = n.start.clone(), n.end.assign("day", e)
    }
    return n
  }
}