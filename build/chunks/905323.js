/** Chunk was on web.js **/
/** chunk id: 905323, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk355418 = require("./355418.js"),
  Chunk996483 = require("./996483.js");
let a = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class o extends Chunk355418.c {
  innerPattern() {
    return a
  }
  innerExtract(e, t) {
    let n = null;
    switch (t[1].toLowerCase()) {
      case "afternoon":
        n = i.ZB(e.reference);
        break;
      case "evening":
      case "night":
        n = i.Jp(e.reference);
        break;
      case "midnight":
        n = i.Bm(e.reference);
        break;
      case "morning":
        n = i.F1(e.reference);
        break;
      case "noon":
      case "midday":
        n = i.zW(e.reference)
    }
    return n && n.addTag("parser/ENCasualTimeParser"), n
  }
}