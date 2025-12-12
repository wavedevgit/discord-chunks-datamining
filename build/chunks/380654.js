/** Chunk was on web.js **/
/** chunk id: 380654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk894186 = require("./894186.js"),
  Chunk727916 = require("./727916.js"),
  Chunk424046 = require("./424046.js");
class a extends Chunk727916.Z {
  innerPattern() {
    return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = e.refDate,
      i = e.createParsingComponents();
    switch (t[1].toLowerCase()) {
      case "tarde":
        i.imply("meridiem", r.GG.PM), i.imply("hour", 15);
        break;
      case "noche":
        i.imply("meridiem", r.GG.PM), i.imply("hour", 22);
        break;
      case "ma\xf1ana":
        i.imply("meridiem", r.GG.AM), i.imply("hour", 6);
        break;
      case "medianoche":
        let a = new Date(n.getTime());
        a.setDate(a.getDate() + 1), (0, o.cz)(i, a), (0, o.hO)(i, a), i.imply("hour", 0), i.imply("minute", 0), i.imply("second", 0);
        break;
      case "mediodia":
      case "mediod\xeda":
        i.imply("meridiem", r.GG.AM), i.imply("hour", 12)
    }
    return i
  }
}