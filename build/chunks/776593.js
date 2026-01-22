/** Chunk was on web.js **/
/** chunk id: 776593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk996483 = require("./996483.js"),
  Chunk658809 = require("./658809.js"),
  Chunk972409 = require("./972409.js");
class s extends Chunk972409.w {
  innerPatternString(e) {
    return "(зараз|минулого\\s*вечора|минулої\\s*ночі|наступної\\s*ночі|сьогодні\\s*вночі|цієї\\s*ночі|цього ранку|вранці|ранку|зранку|опівдні|ввечері|вечора|опівночі|вночі)"
  }
  innerExtract(e, t) {
    let n = e.refDate,
      a = t[0].toLowerCase(),
      s = e.createParsingComponents();
    if ("зараз" === a) return r.tB(e.reference);
    if ("ввечері" === a || "вечора" === a) return r.Jp(e.reference);
    if (a.endsWith("вранці") || a.endsWith("ранку") || a.endsWith("зранку")) return r.F1(e.reference);
    if (a.endsWith("опівдні")) return r.zW(e.reference);
    if (a.match(/минулої\s*ночі/)) return r.zr(e.reference);
    if (a.match(/минулого\s*вечора/)) return r.Z6(e.reference);
    if (a.match(/наступної\s*ночі/)) {
      let e = 22 > n.getHours() ? 1 : 2,
        t = new Date(n.getTime());
      t.setDate(t.getDate() + e), (0, i.Pl)(s, t), s.imply("hour", 1)
    }
    return a.match(/цієї\s*ночі/) || a.endsWith("опівночі") || a.endsWith("вночі") ? r.Bm(e.reference) : s
  }
}