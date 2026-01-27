/** Chunk was on web.js **/
/** chunk id: 267118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk501459 = require("./501459.js"),
  Chunk1673 = require("./1673.js");
let a = RegExp("((?<prefix>前の|次の|今週))?(?<weekday>" + Object.keys(Chunk501459.tS).join("|") + ")(?:曜日|曜)", "i");
class o {
  pattern() {
    return a
  }
  extract(e, t) {
    let n = t.groups.weekday,
      a = r.tS[n];
    if (true === a) return null;
    let o = t.groups.prefix || "",
      s = null;
    return o.match(/前の/) ? s = "last" : o.match(/次の/) ? s = "next" : o.match(/今週/) && (s = "this"), (0, i.Y5)(e.reference, a, s)
  }
}