/** Chunk was on web.js **/
/** chunk id: 264126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk53851 = require("./53851.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js");
let s = RegExp(`(questo|ultimo|passato|prossimo|dopo|questa|ultima|passata|prossima|\\+|-)\\s*(${Chunk53851.km})(?=\\W|$)`, "i");
class l extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      a = (0, r.RA)(t[2]);
    switch (n) {
      case "last":
      case "past":
      case "-":
        a = (0, o.de)(a)
    }
    return i.L.createRelativeFromReference(e.reference, a)
  }
}