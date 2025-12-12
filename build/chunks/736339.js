/** Chunk was on web.js **/
/** chunk id: 736339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk654323 = require("./654323.js"),
  Chunk334633 = require("./334633.js");
let o = RegExp("((?<prefix>前の|次の|今週))?(?<weekday>" + Object.keys(Chunk654323.GR).join("|") + ")(?:曜日|曜)", "i");
class a {
  pattern() {
    return o
  }
  extract(e, t) {
    let n = t.groups.weekday,
      o = r.GR[n];
    if (true === o) return null;
    let a = t.groups.prefix || "",
      s = null;
    return a.match(/前の/) ? s = "last" : a.match(/次の/) ? s = "next" : a.match(/今週/) && (s = "this"), (0, i.Rv)(e.reference, o, s)
  }
}