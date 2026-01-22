/** Chunk was on web.js **/
/** chunk id: 504927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk996483 = require("./996483.js"),
  Chunk658809 = require("./658809.js"),
  Chunk241738 = require("./241738.js");
class s extends Chunk241738.w {
  innerPatternString(e) {
    return "(сейчас|прошлым\\s*вечером|прошлой\\s*ночью|следующей\\s*ночью|сегодня\\s*ночью|этой\\s*ночью|ночью|этим утром|утром|утра|в\\s*полдень|вечером|вечера|в\\s*полночь)"
  }
  innerExtract(e, t) {
    let n = e.refDate,
      a = t[0].toLowerCase(),
      s = e.createParsingComponents();
    if ("сейчас" === a) return r.tB(e.reference);
    if ("вечером" === a || "вечера" === a) return r.Jp(e.reference);
    if (a.endsWith("утром") || a.endsWith("утра")) return r.F1(e.reference);
    if (a.match(/в\s*полдень/)) return r.zW(e.reference);
    if (a.match(/прошлой\s*ночью/)) return r.zr(e.reference);
    if (a.match(/прошлым\s*вечером/)) return r.Z6(e.reference);
    if (a.match(/следующей\s*ночью/)) {
      let e = 22 > n.getHours() ? 1 : 2,
        t = new Date(n.getTime());
      t.setDate(t.getDate() + e), (0, i.Pl)(s, t), s.imply("hour", 0)
    }
    return a.match(/в\s*полночь/) || a.endsWith("ночью") ? r.Bm(e.reference) : s
  }
}