/** Chunk was on web.js **/
/** chunk id: 86574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk355418 = require("./355418.js"),
  Chunk658809 = require("./658809.js"),
  Chunk620695 = require("./620695.js"),
  Chunk996483 = require("./996483.js"),
  Chunk632434 = require("./632434.js");
let l = RegExp("(jetzt|heute|morgen|\xfcbermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)", "i"),
  c = 1,
  u = 2;
class d extends Chunk355418.c {
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
        d = o.tB(e.reference);
        break;
      case "heute":
        d = o.Ec(e.reference);
        break;
      case "morgen":
        n = (0, s.Gw)(n, {
          day: 1
        }), (0, i.Pl)(d, n), (0, i.A4)(d, n);
        break;
      case "\xfcbermorgen":
      case "uebermorgen":
        n = (0, s.Gw)(n, {
          day: 2
        }), (0, i.Pl)(d, n), (0, i.A4)(d, n);
        break;
      case "gestern":
        n = (0, s.Gw)(n, {
          day: false
        }), (0, i.Pl)(d, n), (0, i.A4)(d, n);
        break;
      case "vorgestern":
        n = (0, s.Gw)(n, {
          day: false
        }), (0, i.Pl)(d, n), (0, i.A4)(d, n);
        break;
      default:
        r.match(/letzte\s*nacht/) && (n.getHours() > 6 && (n = (0, s.Gw)(n, {
          day: false
        })), (0, i.Pl)(d, n), d.imply("hour", 0))
    }
    return l && (d = a.A.extractTimeComponents(d, l)), d
  }
}