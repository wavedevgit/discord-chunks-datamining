/** Chunk was on web.js **/
/** chunk id: 436189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk727916 = require("./727916.js"),
  Chunk424046 = require("./424046.js"),
  Chunk740142 = require("./740142.js"),
  Chunk715870 = require("./715870.js"),
  Chunk89199 = require("./89199.js");
let l = RegExp(`(jetzt|heute|morgen|\xfcbermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)`, "i"),
  c = 1,
  u = 2;
class d extends Chunk727916.Z {
  innerPattern(e) {
    return l
  }
  innerExtract(e, t) {
    let n = e.reference.getDateWithAdjustedTimezone(),
      r = (t[c] || "").toLowerCase(),
      l = (t[u] || "").toLowerCase(),
      d = e.createParsingComponents();
    switch (r) {
      case "jetzt":
        d = a.zO(e.reference);
        break;
      case "heute":
        d = a.Lg(e.reference);
        break;
      case "morgen":
        n = (0, s.WK)(n, {
          day: 1
        }), (0, i.cz)(d, n), (0, i.hO)(d, n);
        break;
      case "\xfcbermorgen":
      case "uebermorgen":
        n = (0, s.WK)(n, {
          day: 2
        }), (0, i.cz)(d, n), (0, i.hO)(d, n);
        break;
      case "gestern":
        n = (0, s.WK)(n, {
          day: false
        }), (0, i.cz)(d, n), (0, i.hO)(d, n);
        break;
      case "vorgestern":
        n = (0, s.WK)(n, {
          day: false
        }), (0, i.cz)(d, n), (0, i.hO)(d, n);
        break;
      default:
        r.match(/letzte\s*nacht/) && (n.getHours() > 6 && (n = (0, s.WK)(n, {
          day: false
        })), (0, i.cz)(d, n), d.imply("hour", 0))
    }
    return l && (d = o.Z.extractTimeComponents(d, l)), d
  }
}