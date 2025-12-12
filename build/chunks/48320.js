/** Chunk was on web.js **/
/** chunk id: 48320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk325854 = require("./325854.js"),
  Chunk800911 = require("./800911.js"),
  Chunk334633 = require("./334633.js"),
  Chunk344368 = require("./344368.js");
let s = 1,
  l = 2,
  c = 3;
class u extends Chunk344368.F {
  innerPatternString(e) {
    return `(?:(?:,|\\(|（)\\s*)?(?:в\\s*?)?(?:у\\s*?)?(?:(цей|минулого|минулий|попередній|попереднього|наступного|наступний|наступному)\\s*)?(${(0,i.q3)(r.LN)})(?:\\s*(?:,|\\)|）))?(?:\\s*(на|у|в)\\s*(цьому|минулому|наступному)\\s*тижні)?`
  }
  innerExtract(e, t) {
    let n = t[l].toLocaleLowerCase(),
      i = r.LN[n],
      a = t[s],
      u = t[c],
      d = a || u;
    d = (d = d || "").toLocaleLowerCase();
    let f = null;
    return "минулого" == d || "минулий" == d || "попередній" == d || "попереднього" == d ? f = "last" : "наступного" == d || "наступний" == d ? f = "next" : ("цей" == d || "цього" == d || "цьому" == d) && (f = "this"), (0, o.Rv)(e.reference, i, f)
  }
}