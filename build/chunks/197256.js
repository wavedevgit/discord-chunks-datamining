/** Chunk was on web.js **/
/** chunk id: 197256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk727916 = require("./727916.js"),
  Chunk715870 = require("./715870.js");
let o = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class a extends Chunk727916.Z {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = null;
    switch (t[1].toLowerCase()) {
      case "afternoon":
        n = i.jB(e.reference);
        break;
      case "evening":
      case "night":
        n = i.DZ(e.reference);
        break;
      case "midnight":
        n = i.jN(e.reference);
        break;
      case "morning":
        n = i.ut(e.reference);
        break;
      case "noon":
      case "midday":
        n = i.D_(e.reference)
    }
    return n && n.addTag("parser/ENCasualTimeParser"), n
  }
}