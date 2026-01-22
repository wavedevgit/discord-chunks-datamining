/** Chunk was on web.js **/
/** chunk id: 532740, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk322811 = require("./322811.js"),
  Chunk355418 = require("./355418.js"),
  Chunk658809 = require("./658809.js"),
  Chunk996483 = require("./996483.js");
class o extends Chunk355418.c {
  innerPattern(e) {
    return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = e.refDate,
      i = t[0].toLowerCase(),
      o = e.createParsingComponents();
    switch (i) {
      case "maintenant":
        return s.tB(e.reference);
      case "aujourd'hui":
        return s.Ec(e.reference);
      case "hier":
        return s.jI(e.reference);
      case "demain":
        return s.uf(e.reference);
      default:
        if (i.match(/cette\s*nuit/))(0, a.Pl)(o, n), o.imply("hour", 22), o.imply("meridiem", r.FF.PM);
        else if (i.match(/la\s*veille/)) {
          let e = new Date(n.getTime());
          e.setDate(e.getDate() - 1), (0, a.Pl)(o, e), o.imply("hour", 0)
        }
    }
    return o
  }
}