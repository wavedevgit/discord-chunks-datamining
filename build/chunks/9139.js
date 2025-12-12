/** Chunk was on web.js **/
/** chunk id: 9139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk715870 = require("./715870.js"),
  Chunk424046 = require("./424046.js"),
  Chunk344368 = require("./344368.js");
class a extends Chunk344368.F {
  innerPatternString(e) {
    return `(зараз|минулого\\s*вечора|минулої\\s*ночі|наступної\\s*ночі|сьогодні\\s*вночі|цієї\\s*ночі|цього ранку|вранці|ранку|зранку|опівдні|ввечері|вечора|опівночі|вночі)`
  }
  innerExtract(e, t) {
    let n = e.refDate,
      o = t[0].toLowerCase(),
      a = e.createParsingComponents();
    if ("зараз" === o) return r.zO(e.reference);
    if ("ввечері" === o || "вечора" === o) return r.DZ(e.reference);
    if (o.endsWith("вранці") || o.endsWith("ранку") || o.endsWith("зранку")) return r.ut(e.reference);
    if (o.endsWith("опівдні")) return r.D_(e.reference);
    if (o.match(/минулої\s*ночі/)) return r.f$(e.reference);
    if (o.match(/минулого\s*вечора/)) return r.o4(e.reference);
    if (o.match(/наступної\s*ночі/)) {
      let e = 22 > n.getHours() ? 1 : 2,
        t = new Date(n.getTime());
      t.setDate(t.getDate() + e), (0, i.cz)(a, t), a.imply("hour", 1)
    }
    return o.match(/цієї\s*ночі/) || o.endsWith("опівночі") || o.endsWith("вночі") ? r.jN(e.reference) : a
  }
}