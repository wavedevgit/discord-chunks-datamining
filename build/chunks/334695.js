/** Chunk was on web.js **/
/** chunk id: 334695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk53851 = require("./53851.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js"),
  Chunk334633 = require("./334633.js");
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(${(0,Chunk800911.q3)(Chunk53851.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)`, "i"),
  l = 1,
  c = 2,
  u = 3;
class d extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[c].toLowerCase(),
      i = r.LN[n],
      a = t[l],
      s = t[u],
      d = a || s;
    d = (d = d || "").toLowerCase();
    let f = null;
    return "ultima" == d || "scorsa" == d ? f = "ultima" : "prossima" == d ? f = "prossima" : "questa" == d && (f = "questa"), (0, o.Rv)(e.reference, i, f)
  }
}