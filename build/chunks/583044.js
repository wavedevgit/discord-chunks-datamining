/** Chunk was on web.js **/
/** chunk id: 583044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk715870 = require("./715870.js"),
  Chunk424046 = require("./424046.js"),
  Chunk522677 = require("./522677.js");
class a extends Chunk522677.F {
  innerPatternString(e) {
    return `(сейчас|прошлым\\s*вечером|прошлой\\s*ночью|следующей\\s*ночью|сегодня\\s*ночью|этой\\s*ночью|ночью|этим утром|утром|утра|в\\s*полдень|вечером|вечера|в\\s*полночь)`
  }
  innerExtract(e, t) {
    let n = e.refDate,
      o = t[0].toLowerCase(),
      a = e.createParsingComponents();
    if ("сейчас" === o) return r.zO(e.reference);
    if ("вечером" === o || "вечера" === o) return r.DZ(e.reference);
    if (o.endsWith("утром") || o.endsWith("утра")) return r.ut(e.reference);
    if (o.match(/в\s*полдень/)) return r.D_(e.reference);
    if (o.match(/прошлой\s*ночью/)) return r.f$(e.reference);
    if (o.match(/прошлым\s*вечером/)) return r.o4(e.reference);
    if (o.match(/следующей\s*ночью/)) {
      let e = 22 > n.getHours() ? 1 : 2,
        t = new Date(n.getTime());
      t.setDate(t.getDate() + e), (0, i.cz)(a, t), a.imply("hour", 0)
    }
    return o.match(/в\s*полночь/) || o.endsWith("ночью") ? r.jN(e.reference) : a
  }
}