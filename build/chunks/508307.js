/** Chunk was on web.js **/
/** chunk id: 508307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk765682 = require("./765682.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js"),
  Chunk334633 = require("./334633.js");
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:(?:ce)\\s*)?(${(0,Chunk800911.q3)(Chunk765682.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)`, "i"),
  l = 1,
  c = 2;
class u extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[l].toLowerCase(),
      i = r.LN[n];
    if (true === i) return null;
    let o = t[c];
    o = (o = o || "").toLowerCase();
    let s = null;
    return "dernier" == o ? s = "last" : "prochain" == o && (s = "next"), (0, a.Rv)(e.reference, i, s)
  }
}