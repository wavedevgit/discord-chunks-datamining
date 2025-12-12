/** Chunk was on web.js **/
/** chunk id: 29896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk773567 = require("./773567.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js"),
  Chunk334633 = require("./334633.js");
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:(este|esta|pasado|pr[o\xf3]ximo)\\s*)?(${(0,Chunk800911.q3)(Chunk773567.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(este|esta|pasado|pr[\xf3o]ximo)\\s*semana)?(?=\\W|\\d|$)`, "i"),
  l = 1,
  c = 2,
  u = 3;
class d extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[c].toLowerCase(),
      i = r.LN[n];
    if (true === i) return null;
    let o = t[l],
      s = t[u],
      d = o || s || "";
    d = d.toLowerCase();
    let f = null;
    return "pasado" == d ? f = "this" : "pr\xf3ximo" == d || "proximo" == d ? f = "next" : "este" == d && (f = "this"), (0, a.Rv)(e.reference, i, f)
  }
}