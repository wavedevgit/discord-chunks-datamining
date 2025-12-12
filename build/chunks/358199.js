/** Chunk was on web.js **/
/** chunk id: 358199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk150816 = require("./150816.js"),
  Chunk800911 = require("./800911.js"),
  Chunk334633 = require("./334633.js"),
  Chunk522677 = require("./522677.js");
let s = 1,
  l = 2,
  c = 3;
class u extends Chunk522677.F {
  innerPatternString(e) {
    return `(?:(?:,|\\(|（)\\s*)?(?:в\\s*?)?(?:(эту|этот|прошлый|прошлую|следующий|следующую|следующего)\\s*)?(${(0,i.q3)(r.LN)})(?:\\s*(?:,|\\)|）))?(?:\\s*на\\s*(этой|прошлой|следующей)\\s*неделе)?`
  }
  innerExtract(e, t) {
    let n = t[l].toLowerCase(),
      i = r.LN[n],
      a = t[s],
      u = t[c],
      d = a || u;
    d = (d = d || "").toLowerCase();
    let f = null;
    return "прошлый" == d || "прошлую" == d || "прошлой" == d ? f = "last" : "следующий" == d || "следующую" == d || "следующей" == d || "следующего" == d ? f = "next" : ("этот" == d || "эту" == d || "этой" == d) && (f = "this"), (0, o.Rv)(e.reference, i, f)
  }
}