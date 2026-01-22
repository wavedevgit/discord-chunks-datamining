/** Chunk was on web.js **/
/** chunk id: 454020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk147426 = require("./147426.js"),
  Chunk374372 = require("./374372.js"),
  Chunk972409 = require("./972409.js"),
  Chunk632434 = require("./632434.js");
class o extends Chunk972409.w {
  innerPatternString(e) {
    return `(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${r.Pl})`
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      a = (0, r.E9)(t[3]);
    switch (n) {
      case "останні":
      case "минулі":
      case "-":
        a = (0, s.x4)(a)
    }
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}