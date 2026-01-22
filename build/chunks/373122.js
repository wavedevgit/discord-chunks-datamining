/** Chunk was on web.js **/
/** chunk id: 373122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk989479 = require("./989479.js"),
  Chunk374372 = require("./374372.js"),
  Chunk241738 = require("./241738.js"),
  Chunk632434 = require("./632434.js");
class o extends Chunk241738.w {
  innerPatternString(e) {
    return `(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${r.Pl})`
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      a = (0, r.E9)(t[2]);
    switch (n) {
      case "последние":
      case "прошлые":
      case "-":
        a = (0, s.x4)(a)
    }
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}