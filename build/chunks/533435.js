/** Chunk was on web.js **/
/** chunk id: 533435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk727916 = require("./727916.js"),
  Chunk424046 = require("./424046.js"),
  Chunk715870 = require("./715870.js");
let a = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class s extends Chunk727916.Z {
  innerPattern(e) {
    return a
  }
  innerExtract(e, t) {
    let n = e.refDate,
      r = t[0].toLowerCase(),
      a = e.createParsingComponents();
    switch (r) {
      case "now":
        a = o.zO(e.reference);
        break;
      case "today":
        a = o.Lg(e.reference);
        break;
      case "yesterday":
        a = o.Cv(e.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        a = o.Ro(e.reference);
        break;
      case "tonight":
        a = o._$(e.reference);
        break;
      case "overmorrow":
        a = o.o1(e.reference, 2);
        break;
      default:
        if (r.match(/last\s*night/)) {
          if (n.getHours() > 6) {
            let e = new Date(n.getTime());
            e.setDate(e.getDate() - 1), n = e
          }(0, i.cz)(a, n), a.imply("hour", 0)
        }
    }
    return a.addTag("parser/ENCasualDateParser"), a
  }
}