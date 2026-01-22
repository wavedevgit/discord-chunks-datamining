/** Chunk was on web.js **/
/** chunk id: 490977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk147426 = require("./147426.js"),
  Chunk476858 = require("./476858.js"),
  Chunk1673 = require("./1673.js"),
  Chunk972409 = require("./972409.js");
let o = 1,
  l = 2,
  c = 3;
class u extends Chunk972409.w {
  innerPatternString(e) {
    return `(?:(?:,|\\(|（)\\s*)?(?:в\\s*?)?(?:у\\s*?)?(?:(цей|минулого|минулий|попередній|попереднього|наступного|наступний|наступному)\\s*)?(${(0,i.uJ)(r.CV)})(?:\\s*(?:,|\\)|）))?(?:\\s*(на|у|в)\\s*(цьому|минулому|наступному)\\s*тижні)?`
  }
  innerExtract(e, t) {
    let n = t[l].toLocaleLowerCase(),
      i = r.CV[n],
      s = t[o],
      u = t[c],
      d = s || u;
    d = (d = d || "").toLocaleLowerCase();
    let f = null;
    return "минулого" == d || "минулий" == d || "попередній" == d || "попереднього" == d ? f = "last" : "наступного" == d || "наступний" == d ? f = "next" : ("цей" == d || "цього" == d || "цьому" == d) && (f = "this"), (0, a.Y5)(e.reference, i, f)
  }
}