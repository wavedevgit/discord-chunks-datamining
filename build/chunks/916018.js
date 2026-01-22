/** Chunk was on web.js **/
/** chunk id: 916018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk355418 = require("./355418.js"),
  Chunk658809 = require("./658809.js"),
  Chunk996483 = require("./996483.js");
let s = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class o extends Chunk355418.c {
  innerPattern(e) {
    return s
  }
  innerExtract(e, t) {
    let n = e.refDate,
      r = t[0].toLowerCase(),
      s = e.createParsingComponents();
    switch (r) {
      case "now":
        s = a.tB(e.reference);
        break;
      case "today":
        s = a.Ec(e.reference);
        break;
      case "yesterday":
        s = a.jI(e.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        s = a.uf(e.reference);
        break;
      case "tonight":
        s = a.A_(e.reference);
        break;
      case "overmorrow":
        s = a.AV(e.reference, 2);
        break;
      default:
        if (r.match(/last\s*night/)) {
          if (n.getHours() > 6) {
            let e = new Date(n.getTime());
            e.setDate(e.getDate() - 1), n = e
          }(0, i.Pl)(s, n), s.imply("hour", 0)
        }
    }
    return s.addTag("parser/ENCasualDateParser"), s
  }
}