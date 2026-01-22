/** Chunk was on web.js **/
/** chunk id: 390593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk322811 = require("./322811.js"),
  Chunk355418 = require("./355418.js"),
  Chunk658809 = require("./658809.js");
class s extends Chunk355418.c {
  innerPattern() {
    return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = e.refDate,
      i = e.createParsingComponents();
    switch (t[1].toLowerCase()) {
      case "tarde":
        i.imply("meridiem", r.FF.PM), i.imply("hour", 15);
        break;
      case "noche":
        i.imply("meridiem", r.FF.PM), i.imply("hour", 22);
        break;
      case "ma\xf1ana":
        i.imply("meridiem", r.FF.AM), i.imply("hour", 6);
        break;
      case "medianoche":
        let s = new Date(n.getTime());
        s.setDate(s.getDate() + 1), (0, a.Pl)(i, s), (0, a.A4)(i, s), i.imply("hour", 0), i.imply("minute", 0), i.imply("second", 0);
        break;
      case "mediodia":
      case "mediod\xeda":
        i.imply("meridiem", r.FF.AM), i.imply("hour", 12)
    }
    return i
  }
}