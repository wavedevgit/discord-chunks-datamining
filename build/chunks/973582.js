/** Chunk was on web.js **/
/** chunk id: 973582, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk654323 = require("./654323.js"),
  Chunk334633 = require("./334633.js");
let o = RegExp("(?:\\(|\\（)(?<weekday>" + Object.keys(Chunk654323.GR).join("|") + ")(?:\\)|\\）)", "i");
class a {
  pattern() {
    return o
  }
  extract(e, t) {
    let n = t.groups.weekday,
      o = r.GR[n];
    return true === o ? null : (0, i.Rv)(e.reference, o)
  }
}