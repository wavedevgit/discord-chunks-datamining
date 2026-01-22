/** Chunk was on web.js **/
/** chunk id: 749867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk989479 = require("./989479.js"),
  Chunk476858 = require("./476858.js"),
  Chunk1673 = require("./1673.js"),
  Chunk241738 = require("./241738.js");
let o = 1,
  l = 2,
  c = 3;
class u extends Chunk241738.w {
  innerPatternString(e) {
    return `(?:(?:,|\\(|（)\\s*)?(?:в\\s*?)?(?:(эту|этот|прошлый|прошлую|следующий|следующую|следующего)\\s*)?(${(0,i.uJ)(r.CV)})(?:\\s*(?:,|\\)|）))?(?:\\s*на\\s*(этой|прошлой|следующей)\\s*неделе)?`
  }
  innerExtract(e, t) {
    let n = t[l].toLowerCase(),
      i = r.CV[n],
      s = t[o],
      u = t[c],
      d = s || u;
    d = (d = d || "").toLowerCase();
    let f = null;
    return "прошлый" == d || "прошлую" == d || "прошлой" == d ? f = "last" : "следующий" == d || "следующую" == d || "следующей" == d || "следующего" == d ? f = "next" : ("этот" == d || "эту" == d || "этой" == d) && (f = "this"), (0, a.Y5)(e.reference, i, f)
  }
}