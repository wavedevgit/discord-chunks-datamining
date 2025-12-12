/** Chunk was on web.js **/
/** chunk id: 200861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk894209 = require("./894209.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js"),
  Chunk334633 = require("./334633.js");
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\xe4|ae)chste[mn])\\s*)?(${(0,Chunk800911.q3)(Chunk894209.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:\xe4|ae)chste)\\s*woche)?(?=\\W|$)`, "i"),
  l = 1,
  c = 3,
  u = 2;
class d extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[u].toLowerCase(),
      i = r.LN[n],
      o = t[l],
      s = t[c],
      d = o || s;
    d = (d = d || "").toLowerCase();
    let f = null;
    return d.match(/letzte/) ? f = "last" : d.match(/chste/) ? f = "next" : d.match(/diese/) && (f = "this"), (0, a.Rv)(e.reference, i, f)
  }
}