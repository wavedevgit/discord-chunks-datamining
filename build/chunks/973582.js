/** Chunk was on web.js **/
/** chunk id: 973582, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk654323 = require("./654323.js"),
  Chunk334633 = require("./334633.js");
let a = RegExp("(?:\\(|\\（)(?<weekday>" + Object.keys(Chunk654323.GR).join("|") + ")(?:\\)|\\）)", "i");
class o {
  pattern() {
    return a
  }
  extract(e, t) {
    let n = t.groups.weekday,
      a = r.GR[n];
    return true === a ? null : (0, i.Rv)(e.reference, a)
  }
}