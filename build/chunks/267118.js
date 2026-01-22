/** Chunk was on web.js **/
/** chunk id: 267118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk501459 = require("./501459.js"),
  Chunk1673 = require("./1673.js");
let a = RegExp("((?<prefix>前の|次の|今週))?(?<weekday>" + Object.keys(Chunk501459.tS).join("|") + ")(?:曜日|曜)", "i");
class s {
  pattern() {
    return a
  }
  extract(e, t) {
    let n = t.groups.weekday,
      a = r.tS[n];
    if (true === a) return null;
    let s = t.groups.prefix || "",
      o = null;
    return s.match(/前の/) ? o = "last" : s.match(/次の/) ? o = "next" : s.match(/今週/) && (o = "this"), (0, i.Y5)(e.reference, a, o)
  }
}