/** Chunk was on web.js **/
/** chunk id: 916018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk355418 = require("./355418.js"),
  Chunk658809 = require("./658809.js"),
  Chunk996483 = require("./996483.js");
let o = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class s extends Chunk355418.c {
  innerPattern(e) {
    return o
  }
  innerExtract(e, t) {
    let n = e.refDate,
      r = t[0].toLowerCase(),
      o = e.createParsingComponents();
    switch (r) {
      case "now":
        o = a.tB(e.reference);
        break;
      case "today":
        o = a.Ec(e.reference);
        break;
      case "yesterday":
        o = a.jI(e.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        o = a.uf(e.reference);
        break;
      case "tonight":
        o = a.A_(e.reference);
        break;
      case "overmorrow":
        o = a.AV(e.reference, 2);
        break;
      default:
        if (r.match(/last\s*night/)) {
          if (n.getHours() > 6) {
            let e = new Date(n.getTime());
            e.setDate(e.getDate() - 1), n = e
          }(0, i.Pl)(o, n), o.imply("hour", 0)
        }
    }
    return o.addTag("parser/ENCasualDateParser"), o
  }
}