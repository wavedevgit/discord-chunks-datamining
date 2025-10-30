/** Chunk was on web.js **/
/** chunk id: 598424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk894186 = require("./894186.js"),
  Chunk727916 = require("./727916.js"),
  Chunk424046 = require("./424046.js"),
  Chunk715870 = require("./715870.js");
class s extends Chunk727916.Z {
  innerPattern(e) {
    return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = e.refDate,
      i = t[0].toLowerCase(),
      s = e.createParsingComponents();
    switch (i) {
      case "maintenant":
        return o.zO(e.reference);
      case "aujourd'hui":
        return o.Lg(e.reference);
      case "hier":
        return o.Cv(e.reference);
      case "demain":
        return o.Ro(e.reference);
      default:
        if (i.match(/cette\s*nuit/))(0, a.cz)(s, n), s.imply("hour", 22), s.imply("meridiem", r.GG.PM);
        else if (i.match(/la\s*veille/)) {
          let e = new Date(n.getTime());
          e.setDate(e.getDate() - 1), (0, a.cz)(s, e), s.imply("hour", 0)
        }
    }
    return s
  }
}