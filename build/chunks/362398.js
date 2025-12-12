/** Chunk was on web.js **/
/** chunk id: 362398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk727916 = require("./727916.js"),
  Chunk424046 = require("./424046.js"),
  Chunk715870 = require("./715870.js");
let a = /(ora|oggi|stasera|questa sera|domani|dmn|ieri\s*sera)(?=\W|$)/i;
class s extends Chunk727916.Z {
  innerPattern(e) {
    return a
  }
  innerExtract(e, t) {
    let n = e.refDate,
      r = t[0].toLowerCase(),
      a = e.createParsingComponents();
    switch (r) {
      case "ora":
        return o.zO(e.reference);
      case "oggi":
        return o.Lg(e.reference);
      case "ieri":
        return o.Cv(e.reference);
      case "domani":
      case "dmn":
        return o.Ro(e.reference);
      case "stasera":
      case "questa sera":
        return o._$(e.reference);
      default:
        if (r.match(/ieri\s*sera/)) {
          if (n.getHours() > 6) {
            let e = new Date(n.getTime());
            e.setDate(e.getDate() - 1), n = e
          }(0, i.cz)(a, n), a.imply("hour", 0)
        }
    }
    return a
  }
}