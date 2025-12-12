/** Chunk was on web.js **/
/** chunk id: 390633, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk727916 = require("./727916.js"),
  Chunk715870 = require("./715870.js");
class a extends Chunk727916.Z {
  innerPattern(e) {
    return /(ahora|hoy|mañana|ayer)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = t[0].toLowerCase(),
      r = e.createParsingComponents();
    switch (n) {
      case "ahora":
        return i.zO(e.reference);
      case "hoy":
        return i.Lg(e.reference);
      case "ma\xf1ana":
        return i.Ro(e.reference);
      case "ayer":
        return i.Cv(e.reference)
    }
    return r
  }
}