/** Chunk was on web.js **/
/** chunk id: 132200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk355418 = require("./355418.js"),
  Chunk996483 = require("./996483.js");
class a extends Chunk355418.c {
  innerPattern(e) {
    return /(ahora|hoy|mañana|ayer)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = t[0].toLowerCase(),
      r = e.createParsingComponents();
    switch (n) {
      case "ahora":
        return i.tB(e.reference);
      case "hoy":
        return i.Ec(e.reference);
      case "ma\xf1ana":
        return i.uf(e.reference);
      case "ayer":
        return i.jI(e.reference)
    }
    return r
  }
}