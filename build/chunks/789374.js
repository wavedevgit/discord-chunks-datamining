/** Chunk was on web.js **/
/** chunk id: 789374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk615339 = require("./615339.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk632434 = require("./632434.js");
let s = RegExp(`(questo|ultimo|passato|prossimo|dopo|questa|ultima|passata|prossima|\\+|-)\\s*(${Chunk615339.Pl})(?=\\W|$)`, "i");
class l extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      a = (0, r.E9)(t[2]);
    switch (n) {
      case "last":
      case "past":
      case "-":
        a = (0, o.x4)(a)
    }
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}