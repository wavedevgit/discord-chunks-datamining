/** Chunk was on web.js **/
/** chunk id: 851102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk501459 = require("./501459.js"),
  Chunk1673 = require("./1673.js");
let a = RegExp("(?:\\(|\\（)(?<weekday>" + Object.keys(Chunk501459.tS).join("|") + ")(?:\\)|\\）)", "i");
class o {
  pattern() {
    return a
  }
  extract(e, t) {
    let n = t.groups.weekday,
      a = r.tS[n];
    return true === a ? null : (0, i.Y5)(e.reference, a)
  }
}