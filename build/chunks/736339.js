/** Chunk was on web.js **/
/** chunk id: 736339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk654323 = require("./654323.js"),
  Chunk334633 = require("./334633.js");
let a = RegExp("((?<prefix>前の|次の|今週))?(?<weekday>" + Object.keys(Chunk654323.GR).join("|") + ")(?:曜日|曜)", "i");
class o {
  pattern() {
    return a
  }
  extract(e, t) {
    let n = t.groups.weekday,
      a = r.GR[n];
    if (true === a) return null;
    let o = t.groups.prefix || "",
      s = null;
    return o.match(/前の/) ? s = "last" : o.match(/次の/) ? s = "next" : o.match(/今週/) && (s = "this"), (0, i.Rv)(e.reference, a, s)
  }
}