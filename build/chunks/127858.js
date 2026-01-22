/** Chunk was on web.js **/
/** chunk id: 127858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk355418 = require("./355418.js"),
  Chunk658809 = require("./658809.js"),
  Chunk996483 = require("./996483.js");
let s = /(ora|oggi|stasera|questa sera|domani|dmn|ieri\s*sera)(?=\W|$)/i;
class o extends Chunk355418.c {
  innerPattern(e) {
    return s
  }
  innerExtract(e, t) {
    let n = e.refDate,
      r = t[0].toLowerCase(),
      s = e.createParsingComponents();
    switch (r) {
      case "ora":
        return a.tB(e.reference);
      case "oggi":
        return a.Ec(e.reference);
      case "ieri":
        return a.jI(e.reference);
      case "domani":
      case "dmn":
        return a.uf(e.reference);
      case "stasera":
      case "questa sera":
        return a.A_(e.reference);
      default:
        if (r.match(/ieri\s*sera/)) {
          if (n.getHours() > 6) {
            let e = new Date(n.getTime());
            e.setDate(e.getDate() - 1), n = e
          }(0, i.Pl)(s, n), s.imply("hour", 0)
        }
    }
    return s
  }
}